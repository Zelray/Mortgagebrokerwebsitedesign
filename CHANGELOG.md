# Mortgage Genius - Development Changelog

## Format: [Date] - [Category] - Summary
Each entry should be concise but complete enough to understand what was changed and why.

---

## October 31, 2025

### 🧮 Feature Fix - Home Affordability Calculator Logic Correction
- **Issue:** Calculator was incorrectly using down payment in affordability calculation
- **Fix:** Replaced down payment input with credit score selection
- **Logic Changes:**
  - Credit score below 680: Uses 41% max debt-to-income ratio
  - Credit score 680+: Uses 50% max debt-to-income ratio
  - Removed down payment from calculation (doesn't affect affordability)
- **UI Changes:** Added radio buttons for credit score selection
- **Status:** ✅ Complete

### 🐛 Bug Fix - Dollar Sign Overlap in All Calculators
- **Issue:** Dollar signs were overlapping with numbers in all calculator input fields
- **Fix:** Updated padding from `pl-9` to `pl-10` on all currency input fields
- **Components Affected:** All 4 calculators (Payment, Affordability, Rent vs Buy, Refinance)
- **Technical:** Changed padding-left values to accommodate dollar sign positioning
- **Status:** ✅ Resolved

## October 30, 2025

### 🎨 UI/UX - Refinance Calculator Complete Redesign
- **What:** Rebuilt Refinance Calculator to match FLCU design exactly
- **Components:** 
  - Added collapsible sections for "Current Loan Information" and "New Loan Information"
  - Implemented tabbed horizontal bar charts (Monthly Payment vs Total Payment)
  - Added teal (#0097A7) and black color scheme per FLCU design
  - Purple CTAs (#7623A8) for "Apply Now" and "Meet The Team"
- **Technical:** Fixed Collapsible component syntax error in ui/collapsible.tsx
- **Status:** ✅ Complete and working

### 🐛 Bug Fix - Collapsible Component
- **Issue:** Destructuring syntax error in props
- **Fix:** Changed from `{...props}` to `props:` in function parameters
- **Files:** src/components/ui/collapsible.tsx
- **Status:** ✅ Resolved

## October 29, 2025

### 🧮 Feature - Homepage Calculator Section
- **What:** Replaced single calculator with 4 professional accordion calculators
- **Calculators Added:**
  1. Home Affordability Calculator - Shows max home price based on income/debts
  2. Mortgage Payment Calculator - Monthly payments with taxes/insurance
  3. Rent vs Buy Calculator - Long-term cost comparison with equity buildup
  4. Refinance Calculator - Shows potential savings from refinancing
- **Technical:** All calculators have working math, real-time updates, professional UI
- **Design:** Two-column layout, accordion format, interactive sliders, donut charts
- **Status:** ✅ Complete (Rent vs Buy may need refinement)

## October 27, 2025

### 📝 Architecture - TinaCMS Content Migration
- **What:** Migrated 7 major content pages from React components to TinaCMS MDX
- **Pages Migrated:**
  - State Pages: FL, TX mortgage broker pages
  - Legal Pages: Privacy Policy, Terms of Service, Equal Housing
  - Loan Type Pages: Purchase, Refinance
- **Technical:** Created TinaPage component with generated client for reliable content loading
- **Status:** ✅ Complete

### 🔐 Security - Google OAuth Implementation
- **What:** Replaced IP whitelist + password with Google OAuth
- **Domain Restriction:** Only @mortgagegenius.pro emails can access admin
- **Component:** Created GoogleOAuth component for secure authentication
- **Status:** ⏳ Awaiting VITE_GOOGLE_CLIENT_ID and VITE_GOOGLE_CLIENT_SECRET

## To-Do / Known Issues

### 🔧 Pending Improvements
- [ ] Rent vs Buy Calculator - Needs design refinement (user's next priority)
- [ ] Google OAuth credentials - Waiting for client to provide
- [ ] TinaCMS Cloud connection - Optional, can be done when ready for production

### 📋 User Preferences Documented
- Non-technical language preferred (explain like user is 14)
- Exact design matching required (not interpretations)
- Interactive pages stay as React components
- Content pages managed through TinaCMS