# JWT Authentication Troubleshooting Guide

## Issue Summary
User facing 401 Unauthorized error when creating users through frontend form, despite ADMIN & SUPER_ADMIN roles working correctly via Postman.

## Root Cause Analysis

### Initial Problem: Unused Identity Variable
- **File**: `frontend/src/pages/users/list.tsx`
- **Issue**: `identity` variable declared but never used (Line 17)
- **Solution**: Implemented proper access control using the identity for role-based authorization

### Main Issue: Expired JWT Token
- **Problem**: JWT token had expired (token expired at 21:03, current time was 23:49)
- **Token Details**:
  ```
  Token expires at: Sun Jul 06 2025 21:03:29 GMT+0530
  Current time: Sun Jul 06 2025 23:49:00 GMT+0530
  ```
- **Configuration**: Tokens set to expire in 1 hour (`expiresIn: '1h'`)

## Technical Investigation

### Frontend Token Validation
```javascript
const token = localStorage.getItem('cms_access_token');
const payload = JSON.parse(atob(token.split('.')[1]));
// Revealed token expiration issue
```

### Backend Logs Analysis
- ✅ Token being sent from frontend
- ✅ Authorization header present: `Bearer <token>`
- ✅ Axios interceptor attaching token correctly
- ❌ Backend not processing due to expired token

## Guard Configuration Analysis

### Current Setup Issue
```typescript
// app.module.ts - Global guard
providers: [
  {
    provide: APP_GUARD,
    useClass: RolesGuard,
  },
]

// user.controller.ts - Controller level guards
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('users')
```

### Problem Identified
- **RolesGuard runs globally AND at controller level**
- **Execution Order Issue**:
  1. Global RolesGuard runs first → `req.user` undefined → skips
  2. AuthGuard('jwt') runs → populates `req.user`
  3. Controller RolesGuard runs again → checks roles

### Recommended Fix
```typescript
// Remove RolesGuard from controller level
@UseGuards(AuthGuard('jwt'))  // Only AuthGuard here
@Controller('users')
```

## Solutions Implemented

### 1. Access Control Enhancement
**File**: `frontend/src/pages/users/list.tsx`
- Added proper role-based access control
- Implemented loading states
- Added unauthorized user redirection
- Restricted access to ADMIN, SUPER_ADMIN, and HR roles

### 2. Automatic Token Expiration Handling
**File**: `frontend/src/utils/axios.ts`
- Added response interceptor for 401 errors
- Automatic token cleanup on expiration
- Redirect to login on token expiration

```typescript
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("cms_access_token");
      localStorage.removeItem("cms_org_id");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
```

### 3. Enhanced Auth Provider
**File**: `frontend/src/providers/authProvider.ts`
- Proactive token expiration checking
- Automatic cleanup of expired tokens
- Improved error handling for malformed tokens

## Token Management Strategies Discussed

### Option A: Extend Token Life (Development)
```typescript
// Simple solution for development
expiresIn: '8h' // or '24h'
```

### Option B: Refresh Tokens (Production)
**When to implement**: Before production deployment
**Components needed**:
- Database schema changes (refreshToken field)
- New `/auth/refresh` endpoint
- Frontend token rotation logic
- Enhanced security measures

### Option C: Activity-Based Extension
**How it works**:
1. Monitor user activity (API calls, navigation)
2. Issue new token when user is active (>30 min old token)
3. Return new token in response headers
4. Frontend replaces token seamlessly

**Suitable for**:
- ✅ Development environments
- ✅ Internal business applications
- ✅ B2B SaaS with trusted users
- ❌ High-security applications (banking, healthcare)

## Production Considerations

### Security Levels by Application Type

**Low-Medium Security** (Activity-based extension suitable):
- Internal admin dashboards
- Employee portals
- CMS systems
- Project management tools

**High Security** (Refresh tokens required):
- Banking/Financial applications
- Healthcare systems (PHI/PII)
- Government/Military applications
- Compliance-heavy applications (SOX, HIPAA, PCI-DSS)

### Hybrid Approach
Many production applications use both:
- Activity-based extension for UX (extend to 2-3 hours)
- Refresh tokens for security (when extension limit reached)

## Immediate Action Items

1. **Log in again** to get fresh token
2. **Test user creation** functionality
3. **Verify auto-logout** behavior
4. **Consider token expiration strategy** for production

## Files Modified

1. `frontend/src/pages/users/list.tsx` - Added access control
2. `frontend/src/utils/axios.ts` - Added response interceptor
3. `frontend/src/providers/authProvider.ts` - Enhanced token validation

## Key Learnings

1. **Token expiration** is a common cause of 401 errors
2. **Guard execution order** matters in NestJS applications
3. **Proactive token management** improves user experience
4. **Security requirements** should drive token strategy decisions
5. **Development vs Production** strategies can differ appropriately

---
*Generated on: July 6, 2025*
*Context: React SaaS CMS Application with NestJS Backend*
