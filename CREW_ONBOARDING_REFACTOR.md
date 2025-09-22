# Crew Onboarding System Refactor

## 🎯 **Project Overview**

Refactor the crew onboarding system to separate user account creation from crew onboarding, eliminating conflicts and improving user experience.

### **Current Problem**

- User creation automatically creates crew records for CREW role users
- Crew onboarding wizard conflicts when trying to create crew records again
- No visibility into onboarding status
- Confusing user workflow

### **Solution**

- Separate user account creation from crew onboarding
- Add onboarding status tracking with visual indicators
- Smart onboarding wizard that handles different scenarios
- Clear user journey from account creation to full crew member

---

## 📋 **Implementation Task List**

### **Phase 1: Modify User Creation (Remove Auto-Crew Creation)**

**Status: ✅ Completed**

#### Backend Changes

- [x] **Task 1.1**: Remove automatic crew record creation from `user.service.ts`

  - **File**: `backend/src/modules/user/user.service.ts`
  - **Action**: Remove crew creation logic from `create()` method (lines 68-97)
  - **Status**: ✅ Completed

- [x] **Task 1.2**: Update user creation DTO validation
  - **File**: `backend/src/modules/user/dto/create-user.dto.ts`
  - **Action**: Remove required validation for `primaryDepartment` and `rank` fields
  - **Status**: ✅ Completed

#### Frontend Changes

- [x] **Task 1.3**: Simplify user creation form

  - **File**: `frontend/src/pages/users/create.tsx`
  - **Action**: Remove crew-specific fields (department, rank) and related logic
  - **Status**: ✅ Completed

- [x] **Task 1.4**: Test user creation
  - **Action**: Verify CREW users can be created without crew-specific fields
  - **Status**: ✅ Completed - Manual testing successful!

---

### **Phase 2: Add Onboarding Status to Crew List**

**Status: ⏳ Pending**

#### Backend Changes

- [x] **Task 2.1**: Modify crew list query to include all CREW users

  - **File**: `backend/src/modules/crew/crew.service.ts`
  - **Action**: Update `list()` method to fetch all users with role=CREW
  - **Status**: ✅ Completed

- [x] **Task 2.2**: Add onboarding status logic
  - **File**: `backend/src/modules/crew/crew.service.ts`
  - **Action**: Add logic to determine status (Pending/In-Progress/Onboarded)
  - **Status**: ✅ Completed

#### Frontend Changes

- [x] **Task 2.3**: Add Onboarding Status column to crew list

  - **File**: `frontend/src/pages/crew/list.tsx`
  - **Action**: Add new column with colored status tags
  - **Status**: ✅ Completed

- [x] **Task 2.4**: Create status tag component
  - **File**: `frontend/src/pages/crew/list.tsx`
  - **Action**: Add OnboardingStatusTag component with colors:
    - 🟡 Pending (default/gray)
    - 🟢 Onboarded (green)
    - 🔵 In-Progress (blue/processing)
  - **Status**: ✅ Completed

---

### **Phase 3: Smart Onboarding Logic**

**Status: ⏳ Pending**

#### Backend Changes

- [ ] **Task 3.1**: Add crew existence check endpoint

  - **File**: `backend/src/modules/crew/crew.controller.ts`
  - **Action**: Add GET `/crew/check/:userId` endpoint
  - **Status**: ⏳ Pending

- [ ] **Task 3.2**: Modify crew creation to handle existing records
  - **File**: `backend/src/modules/crew/crew.service.ts`
  - **Action**: Update create method to handle both new and existing crew scenarios
  - **Status**: ⏳ Pending

#### Frontend Changes

- [x] **Task 3.3**: Update onboarding wizard detection logic

  - **File**: `frontend/src/components/crew/CrewOnboardingWizard.tsx`
  - **Action**: Add logic to detect existing crew records and auto-populate
  - **Status**: ✅ Completed

- [x] **Task 3.4**: Update onboarding page routing
  - **File**: `frontend/src/pages/crew/onboarding.tsx`
  - **Action**: Handle both userId (existing user) and new crew creation
  - **Status**: ✅ Completed

---

### **Phase 4: Update Crew List Actions**

**Status: ✅ Completed**

#### Frontend Changes

- [x] **Task 4.1**: Update action buttons based on status

  - **File**: `frontend/src/pages/crew/list.tsx`
  - **Action**: Implement dynamic button text and actions:
    - Pending → "Start Onboarding"
    - In-Progress → "Continue Onboarding"
    - Onboarded → No onboarding button (already complete)
  - **Status**: ✅ Completed

- [x] **Task 4.2**: Update navigation logic
  - **File**: `frontend/src/pages/crew/list.tsx`
  - **Action**: Route to `/crew/onboarding?userId={userId}` for existing users
  - **Status**: ✅ Completed

---

### **Phase 5: Testing & Validation**

**Status: ⏳ Pending**

- [ ] **Task 5.1**: Test complete user journey

  - **Action**: Create user → Verify in crew list → Start onboarding → Complete process
  - **Status**: ⏳ Pending

- [ ] **Task 5.2**: Test edge cases

  - **Action**: Partial onboarding, existing crew records, navigation flows
  - **Status**: ⏳ Pending

- [ ] **Task 5.3**: Update documentation
  - **Action**: Update API docs and user guides
  - **Status**: ⏳ Pending

---

## 🎯 **Expected Outcomes**

### **User Journey After Implementation**

1. **Admin creates user account** → `users/create` (name, email, password, role=CREW)
2. **User appears in crew/list** with status "Pending Onboarding"
3. **Click "Start Onboarding"** → Comprehensive onboarding wizard
4. **Complete onboarding** → Status changes to "Onboarded"
5. **Future edits** → "View/Edit" button for updates

### **Benefits**

- ✅ No more creation conflicts
- ✅ Clear separation of concerns
- ✅ Better visibility into onboarding progress
- ✅ Flexible workflow management
- ✅ Improved user experience

---

## 📝 **Implementation Notes**

### **Status Legend**

- ⏳ **Pending**: Not started
- 🔄 **In Progress**: Currently working on
- ✅ **Completed**: Task finished and tested
- ❌ **Blocked**: Waiting for dependency or issue resolution

### **Next Steps**

Start with Phase 1 to immediately resolve the conflict issue, then proceed sequentially through each phase.

---

## Phase 6: Responsive Table Improvements (Future Enhancement)

### Overview

Improve the crew list table for better mobile/tablet experience by implementing responsive column management and removing redundant information.

### Current Issues

- Horizontal scrolling required on smaller screens
- Email column takes valuable space but rarely needed in list view
- "Onboard Since" column is confusing and redundant with status information
- Poor mobile/tablet user experience

### Proposed Solution

#### Column Priority Analysis

- **Critical (Always Show)**: Name, Onboarding Status, Actions
- **Important (Medium+ screens)**: Department, Status
- **Secondary (Desktop only)**: Rank, Joined Date
- **Remove**: Email, Onboard Since (move to detail/edit pages)

#### Responsive Breakpoints

```
Mobile (320-768px):     Name, Onboarding Status, Actions
Tablet (768-1024px):    + Department, Status
Desktop (1024px+):      + Rank, Joined Date
```

### Tasks

#### Task 6.1: Remove Redundant Columns

- [x] Remove "Email" column from crew list table
- [x] Remove "Onboard Since" column from crew list table
- [ ] Add email display to crew show/edit pages
- [ ] Add vessel assignment history to crew show/edit pages

#### Task 6.2: Implement Responsive Design

- [x] Add responsive column visibility based on screen size
- [x] Implement CSS media queries for breakpoints
- [ ] Test on mobile, tablet, and desktop devices
- [x] Ensure Actions column remains accessible on all screen sizes

#### Task 6.3: Enhanced Mobile Experience

- [ ] Consider card layout for mobile screens as alternative
- [ ] Add expandable row details for secondary information
- [ ] Implement touch-friendly action buttons
- [ ] Test gesture navigation and scrolling

### Benefits

- ✅ No horizontal scrolling on any device
- ✅ Faster crew list scanning with essential info only
- ✅ Better mobile/tablet user experience
- ✅ Cleaner, less cluttered interface
- ✅ Follows progressive disclosure UX principles
- ✅ Detailed information available in appropriate contexts (show/edit pages)

## Notes

- All changes maintain backward compatibility
- Existing crew records remain unchanged
- User accounts created before this refactor will work normally
- The system gracefully handles edge cases (users without crew records, etc.)
