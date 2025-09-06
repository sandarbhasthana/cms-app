# Shared Types Package Implementation Guide

## Overview
This guide outlines the implementation of a shared types package to resolve the current frontend white screen issue caused by missing Prisma enum exports and establish a scalable type-sharing architecture.

## Current Problem
- Frontend imports `EngineMake`, `TonnageUnit` from backend Prisma client
- Prisma browser client (`index-browser.js`) doesn't export these enums
- Results in module resolution error: `The requested module does not provide an export named 'EngineMake'`
- Causes complete frontend application failure (white screen)

## Solution: Shared Types Package

### Phase 1: Quick Fix (Immediate)
**Estimated Time: 30 minutes**

1. **Create temporary enum file in frontend**
   ```bash
   # Create frontend/src/types/enums.ts
   ```

2. **Copy enums from Prisma schema**
   - Extract `VesselType`, `EngineMake`, `TonnageUnit` from `backend/prisma/schema.prisma`
   - Convert to TypeScript enums in frontend

3. **Update vesselDropdowns.ts**
   - Replace backend import with local enum import
   - Test frontend loads correctly

### Phase 2: Shared Package Setup (Short-term)
**Estimated Time: 2-3 hours**

#### 2.1 Project Structure
```
cms-app/
├── shared/                    # New package
│   ├── package.json
│   ├── tsconfig.json
│   ├── src/
│   │   ├── index.ts          # Main exports
│   │   ├── types/
│   │   │   ├── enums.ts      # Prisma enums
│   │   │   ├── api.ts        # API types
│   │   │   ├── entities.ts   # Entity interfaces
│   │   │   └── common.ts     # Common types
│   │   └── utils/
│   │       └── dropdowns.ts  # Dropdown utilities
│   └── dist/                 # Build output
```

#### 2.2 Package Configuration
```json
// shared/package.json
{
  "name": "@cms-app/shared",
  "version": "1.0.0",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch"
  }
}
```

#### 2.3 TypeScript Configuration
```json
// shared/tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "declaration": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  }
}
```

### Phase 3: Type Definitions (Medium-term)
**Estimated Time: 4-6 hours**

#### 3.1 Enum Definitions
```typescript
// shared/src/types/enums.ts
export enum VesselType {
  ACCOMMODATION = 'ACCOMMODATION',
  AHT = 'AHT',
  // ... all vessel types
}

export enum EngineMake {
  ABB_STROMBERG = 'ABB_STROMBERG',
  AKASAKA = 'AKASAKA',
  // ... all engine makes
}

export enum TonnageUnit {
  BHP = 'BHP',
  CEUs = 'CEUs',
  // ... all tonnage units
}
```

#### 3.2 API Types
```typescript
// shared/src/types/api.ts
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
}

export interface UserResponse {
  id: string;
  email: string;
  role: string;
  orgId: string;
}
```

#### 3.3 Entity Types
```typescript
// shared/src/types/entities.ts
export interface Vessel {
  id: string;
  name: string;
  imoNumber: string;
  vesselType: VesselType | null;
  engineMake: string | null;
  tonnageUnit: string | null;
  // ... other fields
}
```

### Phase 4: Integration (Long-term)
**Estimated Time: 6-8 hours**

#### 4.1 Backend Integration
1. **Install shared package**
   ```bash
   cd backend && npm install ../shared
   ```

2. **Update controllers to use shared types**
   ```typescript
   // backend/src/controllers/auth.controller.ts
   import { LoginRequest, LoginResponse } from '@cms-app/shared';
   ```

3. **Replace Prisma type exports**
   - Remove direct Prisma enum exports from API responses
   - Use shared enums for validation and responses

#### 4.2 Frontend Integration
1. **Install shared package**
   ```bash
   cd frontend && npm install ../shared
   ```

2. **Update imports**
   ```typescript
   // frontend/src/constants/vesselDropdowns.ts
   import { VesselType, EngineMake, TonnageUnit } from '@cms-app/shared';
   ```

3. **Update component types**
   ```typescript
   // Use shared interfaces for props and state
   import { Vessel, UserResponse } from '@cms-app/shared';
   ```

### Phase 5: Build System (Advanced)
**Estimated Time: 2-4 hours**

#### 5.1 Workspace Configuration
```json
// Root package.json
{
  "workspaces": [
    "backend",
    "frontend", 
    "shared"
  ]
}
```

#### 5.2 Build Scripts
```json
// Root package.json scripts
{
  "build:shared": "cd shared && npm run build",
  "build:backend": "cd backend && npm run build",
  "build:frontend": "cd frontend && npm run build",
  "build": "npm run build:shared && npm run build:backend && npm run build:frontend"
}
```

#### 5.3 Development Workflow
```bash
# Terminal 1: Watch shared types
cd shared && npm run dev

# Terminal 2: Backend development  
cd backend && npm run dev

# Terminal 3: Frontend development
cd frontend && npm run dev
```

## Implementation Priority

### 🔥 Critical (Do First)
- [ ] Phase 1: Quick fix to resolve white screen
- [ ] Test frontend loads correctly

### 🚀 High Priority (This Week)
- [ ] Phase 2: Create shared package structure
- [ ] Phase 3: Define core enums and types
- [ ] Phase 4.2: Frontend integration

### 📈 Medium Priority (Next Sprint)
- [ ] Phase 4.1: Backend integration
- [ ] Add comprehensive API types
- [ ] Update all component interfaces

### 🔧 Low Priority (Future)
- [ ] Phase 5: Advanced build system
- [ ] Automated Prisma schema sync
- [ ] Type validation testing

## Success Criteria

### Immediate Success
- ✅ Frontend loads without white screen
- ✅ Vessel dropdowns work correctly
- ✅ No module resolution errors

### Long-term Success
- ✅ Type safety across frontend and backend
- ✅ No direct Prisma imports in frontend
- ✅ Scalable type sharing architecture
- ✅ Easy to add new shared types

## Risks and Mitigation

### Risk: Breaking Changes
- **Mitigation**: Implement gradually, maintain backward compatibility

### Risk: Build Complexity
- **Mitigation**: Start simple, add complexity incrementally

### Risk: Development Overhead
- **Mitigation**: Automate build processes, use watch modes

## Next Steps

1. **Immediate**: Implement Phase 1 quick fix
2. **This Week**: Complete Phase 2 and 3
3. **Next Sprint**: Full integration (Phase 4)
4. **Future**: Advanced build system (Phase 5)

---

**Note**: This implementation resolves the current crisis while establishing a foundation for scalable type management across the monorepo.
