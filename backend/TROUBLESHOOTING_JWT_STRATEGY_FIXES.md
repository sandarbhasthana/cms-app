# JWT Strategy TypeScript Fixes - Complete Troubleshooting Guide

## 🚨 Original Problem

**File:** `backend/src/modules/auth/jwt.strategy.ts` (Line 93)
**Error:** TypeScript highlighting on the line:

```typescript
name: user.name ?? payload.name ?? user.email.split('@')[0],
```

**IDE Errors:**

1. Property 'name' does not exist on type '{ id: string; email: string; password: string; role: Role; orgId: string; createdAt: Date; updatedAt: Date; }'
2. Unsafe assignment of an error typed value

## 🔍 Root Cause Analysis

The issue was caused by **multiple inconsistent Prisma client import paths** throughout the codebase:

### Problem Details:

1. **Inconsistent Import Paths** - Some files imported from correct path, others from wrong paths
2. **Duplicate Prisma Clients** - Two different generated clients with different schemas
3. **Missing Required Fields** - User model required `name`, `createdBy`, `updatedBy` fields
4. **TypeScript Configuration Issues** - Include paths pointing to deleted directories

### Files with Wrong Import Paths:

- ❌ `backend/src/modules/user/user.controller.ts` - `../../../generated/prisma`
- ❌ `backend/src/common/types/authenticated-request.ts` - `../../../generated/prisma`
- ❌ `backend/src/modules/user/dto/create-user.dto.ts` - `../../../../generated/prisma`
- ❌ `backend/src/common/guards/roles.guard.ts` - `../../../generated/prisma`
- ❌ `backend/src/common/decorators/roles.decorator.ts` - `../../../generated/prisma`
- ❌ `backend/src/common/utils/access.utils.ts` - `../../../generated/prisma`

## 🛠️ Complete Solution Applied

### Step 1: Fixed Import Paths

**Corrected all import paths to use the proper Prisma client:**

```typescript
// ✅ CORRECT PATHS:
// From src/modules/auth/ → '../../generated/prisma'
// From src/common/ → '../../generated/prisma'
// From src/modules/user/dto/ → '../../../generated/prisma'
// From src/prisma/ → '../generated/prisma'
```

**Files Updated:**

- `backend/src/modules/user/user.controller.ts`
- `backend/src/common/types/authenticated-request.ts`
- `backend/src/modules/user/dto/create-user.dto.ts`
- `backend/src/common/guards/roles.guard.ts`
- `backend/src/common/decorators/roles.decorator.ts`
- `backend/src/common/utils/access.utils.ts`
- `backend/src/modules/user/dto/test-validation.ts`
- `backend/src/modules/vessel/dto/create-vessel.dto.ts`
- `backend/src/prisma/prisma.service.ts`

### Step 2: Removed Duplicate Prisma Client

**Deleted:** `backend/generated/` directory (old client without `name` field)
**Kept:** `backend/src/generated/prisma/` (correct client with `name` field)

### Step 3: Updated User Model Usage

**Problem:** User creation missing required fields (`name`, `createdBy`, `updatedBy`)

**Changes Made:**

#### A. Updated User Service Method Signature:

```typescript
// Before:
async create(createUserDto: CreateUserDto, orgId: string)

// After:
async create(createUserDto: CreateUserDto, orgId: string, createdById: string)
```

#### B. Updated User Creation Data:

```typescript
// Before:
data: {
  email: createUserDto.email,
  password: hashedPassword,
  role: createUserDto.role,
  orgId,
}

// After:
data: {
  email: createUserDto.email,
  name: createUserDto.name,
  password: hashedPassword,
  role: createUserDto.role,
  orgId,
  createdBy: createdById,
  updatedBy: createdById,
}
```

#### C. Updated Select Clause:

```typescript
select: {
  id: true,
  email: true,
  name: true,        // ← Added
  role: true,
  orgId: true,
  createdAt: true,
  updatedAt: true,
}
```

#### D. Updated User Controller:

```typescript
// Before:
const orgId = req.user.orgId;
return this.userService.create(createUserDto, orgId);

// After:
const orgId = req.user.orgId;
const createdById = req.user.userId;
return this.userService.create(createUserDto, orgId, createdById);
```

### Step 4: Fixed TypeScript Configuration

**File:** `backend/tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022"] // ← Added explicit lib
    // ... other options
  },
  "include": ["src"] // ← Removed "generated"
}
```

### Step 5: Regenerated Prisma Client

```bash
# Removed old client
Remove-Item -Recurse -Force "generated"

# Regenerated clean client
npx prisma generate --schema=./prisma/schema.prisma
```

## ✅ Final Result

**The problematic line now works perfectly:**

```typescript
name: user.name ?? payload.name ?? user.email.split('@')[0],
```

**Verification:**

- ✅ TypeScript compilation: `npx tsc --noEmit` - No errors
- ✅ IDE diagnostics: No highlighting issues
- ✅ Prisma client: Correctly includes `name` field
- ✅ Authentication flow: Proper name fallback logic

## 🎯 Key Learnings

### 1. Import Path Consistency is Critical

- Always use consistent import paths across the entire codebase
- Different paths can point to different generated clients with different schemas

### 2. Prisma Client Generation

- Only keep one generated client to avoid confusion
- Regenerate after schema changes to ensure consistency

### 3. Required Fields in Prisma

- Check Prisma schema for required fields when creating records
- Update service methods to accept all required parameters

### 4. TypeScript Configuration

- Ensure `target` and `lib` are compatible with generated code
- Keep `include` paths accurate after directory changes

## 🔧 Commands Used

```bash
# Fix import paths (manual edits)
# Remove duplicate client
Remove-Item -Recurse -Force "generated"

# Regenerate Prisma client
npx prisma generate

# Verify TypeScript compilation
npx tsc --noEmit --project tsconfig.json
npx tsc --noEmit --skipLibCheck src/modules/auth/jwt.strategy.ts
```

## 📁 Files Modified

1. `backend/src/modules/auth/jwt.strategy.ts` - Fixed import path
2. `backend/src/modules/user/user.controller.ts` - Fixed import + added createdById
3. `backend/src/modules/user/user.service.ts` - Added required fields
4. `backend/src/prisma/prisma.service.ts` - Fixed import path
5. `backend/tsconfig.json` - Updated configuration
6. Multiple common files - Fixed import paths
7. Multiple DTO files - Fixed import paths

## 🚨 Runtime Issue (Post-Fix)

**Problem:** Server startup error after fixing TypeScript issues:

```
Error: Cannot find module '../generated/prisma'
```

**Root Cause:** Compiled JavaScript in `dist/` folder couldn't find Prisma client because:

- TypeScript compiles `src/` to `dist/`
- Relative import `../generated/prisma` from `dist/prisma/` points to non-existent `dist/generated/`
- NestJS build process doesn't automatically copy Prisma client

**Solution Applied:**

### Step 1: Modified nest-cli.json

```json
{
  "compilerOptions": {
    "deleteOutDir": true,
    "assets": [
      {
        "include": "generated/**/*",
        "outDir": "dist"
      }
    ]
  }
}
```

### Step 2: Added Post-Build Script

```json
{
  "scripts": {
    "build": "nest build && npm run postbuild",
    "postbuild": "node -e \"const fs = require('fs'); const path = require('path'); if (fs.existsSync('src/generated')) { fs.cpSync('src/generated', 'dist/generated', { recursive: true }); console.log('✅ Copied Prisma client to dist/generated'); }\""
  }
}
```

**Result:** ✅ Server starts successfully with all modules loaded

---

**Status:** ✅ **FULLY RESOLVED** - TypeScript errors fixed + Runtime issues resolved
**Date:** 2025-06-29
