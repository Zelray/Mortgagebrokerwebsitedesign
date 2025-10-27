# Mortgage Genius - Replit Project Documentation

## Overview

This is a professional mortgage broker website called "Mortgage Genius" built with React, TypeScript, and Vite. The website features a beautiful, accessible design with comprehensive functionality including lead capture, blog system, and admin dashboard.

**Project Type:** Frontend Web Application (React + Vite)  
**Current Status:** Development environment configured with 20+ SEO-optimized pages  
**Last Updated:** October 25, 2025

## Purpose and Goals

Mortgage Genius is a complete mortgage broker website solution offering:
- Professional marketing pages with modern UI/UX
- Lead capture system with CRM integration
- Blog/resources management system
- Admin dashboard for content management
- Full WCAG 2.1 Level AA accessibility compliance
- SEO optimization and analytics integration

## Project Architecture

### Frontend Stack
- **React 18** - Modern UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing for multi-page navigation
- **Tailwind CSS v4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **React Hook Form** - Form management
- **Recharts** - Data visualization

### Backend (Supabase Edge Functions)
- **Hono** - Lightweight web framework for Deno
- **Supabase Auth** - Authentication system
- **Supabase Storage** - Image uploads
- **KV Store** - PostgreSQL-backed data storage

### Key Features

**Tier 1 - Foundation:**
- Error boundary with graceful error handling
- Comprehensive SEO meta tags
- WCAG 2.1 Level AA accessibility
- Keyboard navigation support
- Lead capture forms

**Tier 2 - Marketing & Legal:**
- Google Analytics 4 integration
- Cookie consent (GDPR/CCPA compliant)
- Privacy Policy and Terms of Service pages
- Equal Housing Opportunity disclosure page
- HTML Sitemap for navigation
- Copper CRM integration

**Tier 3 - Admin Backend:**
- Admin dashboard with authentication
- Blog post CRUD operations
- WordPress-style editor
- Image upload system
- SEO management per post

## Development Setup

### Running the Application

The development server is configured to run on port 5000 and is set up as a workflow:

```bash
npm run dev
```

The server binds to `0.0.0.0:5000` and is configured for Replit's proxy environment with HMR support.

### Available Scripts

- `npm run dev` - Start development server on port 5000
- `npm run build` - Build for production (output to `build/` directory)

### Environment Configuration

This project is configured for the Replit environment:
- Port: 5000 (frontend)
- Host: 0.0.0.0 (allows external connections)
- Allowed hosts: true (permits Replit's dynamic proxy domains)
- HMR configured for Replit's WSS proxy using REPLIT_DEV_DOMAIN environment variable

### File Structure

```
/
├── src/
│   ├── components/       # React components
│   │   ├── ui/          # Radix UI components
│   │   └── figma/       # Figma-imported components
│   ├── supabase/        # Backend edge functions (Deno)
│   │   └── functions/
│   │       └── server/  # Hono API routes
│   ├── styles/          # Global styles
│   ├── utils/           # Utility functions
│   └── guidelines/      # Documentation
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript config
└── package.json         # Dependencies
```

## Deployment Configuration

**Deployment Target:** Autoscale (stateless web application)  
**Build Command:** `npm run build`  
**Run Command:** `npx vite preview --host 0.0.0.0 --port 5000`  

The application is configured for Replit's autoscale deployment, which is ideal for static/frontend-only applications. The preview server is configured to bind to `0.0.0.0:5000` to work correctly in the Replit production environment.

## Important Notes

### Backend Integration
The `src/supabase/functions/` directory contains Deno-based Edge Functions for Supabase. These are separate from the main Vite application and would need to be deployed to Supabase separately if backend functionality is required.

### Required Configuration Before Production

1. **Update Domain** - Change `SITE_URL` in `src/components/SEOHead.tsx`
2. **Add Preview Image** - Configure OG image for social sharing
3. **Setup Contact Page** - Create route for `/contact` page
4. **Configure Analytics** - Add Google Analytics tracking ID in `src/App.tsx`
5. **Setup Supabase** - Configure Supabase project for backend features
6. **Create Loan Type Pages** - Build individual pages for Purchase, Refinance, HELOC, etc.

### Available Pages

**Public Pages:**
- `/` - Homepage with all marketing sections
- `/privacy-policy` - Privacy Policy
- `/terms-of-service` - Terms of Service
- `/equal-housing-opportunity` - Equal Housing Opportunity disclosure
- `/sitemap` - HTML Sitemap
- `/resources/:slug` - Individual blog posts

**Top-Level Loan Pages:**
- `/prequal` - Buyers Prequalification (Get Pre-Qualified for Your Mortgage)
- `/purchase` - Purchase General Info (Purchase a Home)
- `/refinance` - Refinance General Info (Refinance Your Mortgage)
- `/heloc` - Home Equity Line of Credit (comprehensive page with 3 calculators)

**Arizona Mortgage Pages:**
- `/az-mortgage-broker` - Arizona Mortgage Loans (main Arizona page)

**Arizona Purchase Loans:**
- `/az/buyers` - Arizona Home Purchase Loans (general info)
- `/az/buyers/first-time-homebuyers` - First Time Homebuyer Programs in Arizona
- `/az/buyers/fha-loan` - Arizona FHA Home Loans
- `/az/buyers/conventional-mortgage` - Arizona Conventional Mortgage Loans
- `/az/buyers/va-loan-purchase` - Arizona VA Home Loans
- `/az/buyers/usda-loan` - Arizona USDA Home Loans
- `/az/buyers/jumbo-loan` - Arizona Jumbo Home Loans

**Arizona Refinance Loans:**
- `/az/refi` - Arizona Mortgage Refinance (general info)
- `/az/refi/refinance-fha-mortgage` - Arizona FHA Streamline Refinance
- `/az/refi/refinance-my-jumbo` - Arizona Jumbo Mortgage Refinance
- `/az/refi/refinance-my-mortgage` - Arizona Conventional Mortgage Refinance

**Arizona VA Loans:**
- `/az/va-loans` - Arizona VA Loans (general info)
- `/az/va-loans/va-refinance` - Arizona VA Streamline Refinance (IRRRL)

**Arizona Specialty Loans:**
- `/az/heloc` - Arizona Home Equity Loans and HELOCs
- `/az/jumbo-mortgage` - Arizona Jumbo Mortgage Loans (general info)
- `/az/usda-loans` - Arizona USDA Loans (general info)

**Florida Mortgage Pages:**
- `/fl-mortgage-broker` - Florida Mortgage Loans (main Florida page)

**Texas Mortgage Pages:**
- `/tx-mortgage-broker` - Texas Mortgage Loans (main Texas page)

**Admin Pages:**
- `/admin/login` - Admin authentication
- `/admin` - Admin dashboard (requires authentication)
- `/admin/editor` - Blog post editor (requires authentication)

**External Links:**
- Client Login → https://mortgagegenius.morty.com/login
- Apply Online → https://tinyurl.com/42xx3hzu (Morty application)

### Documentation Files

- `src/QUICK_START.md` - Quick start guide for launch
- `src/COMPLETE_SYSTEM_OVERVIEW.md` - Full system documentation
- `src/CODER_HANDOFF_SUMMARY.md` - Developer handoff notes
- `src/TIER1_IMPLEMENTATION_NOTES.md` - Technical details
- `src/ADMIN_QUICK_REFERENCE.md` - Admin system guide

## Recent Changes

**October 27, 2025 - TinaCMS Integration:**
- Integrated TinaCMS headless CMS for content management
- Created content models for state pages, loan pages, blog posts, and global settings
- Set up content directory structure (content/pages/, content/blog/, content/global/)
- Migrated Arizona page to TinaCMS as proof of concept
- Configured TinaCMS admin interface at /admin/index.html
- Created comprehensive TINACMS_GUIDE.md documentation
- Content is now stored as MDX/JSON files in the repository (Git-versioned)
- Visual editor with rich text formatting and WYSIWYG editing
- SEO meta fields fully editable per page
- Image upload and management system
- No authentication required in development (local mode)
- Auto-generated TypeScript types and GraphQL client
- Updated npm scripts to run TinaCMS dev server with Vite

**October 25, 2025 - HELOC Page with Interactive Calculators:**
- Created comprehensive HELOC page at `/heloc` with extensive features
- Built 3 fully-functional calculators using React state and Recharts:
  - Home Equity Calculator - Calculate max HELOC based on home value and LTV ratio
  - Debt Consolidation Calculator - Compare current vs HELOC payment savings
  - HELOC Payment Calculator - Show interest-only and full repayment amounts
- Implemented HELOC FAQ section with 8 questions in accordion format (2 columns)
- Added interactive sliders for all calculator inputs with real-time updates
- Integrated Recharts visualizations: line charts, bar charts, and amortization schedules
- Hero section features happy couple image with CTA buttons
- All calculations use accurate mortgage formulas (no external dependencies)
- Fixed calculation accuracy: proper debt interest rate usage, amortization logic, and savings display
- Savings display intelligently shows positive savings (green) or warnings when HELOC costs more (orange)
- Responsive design matching existing site patterns
- SEO-optimized with descriptive meta title and description
- Added HELOC link to Header navigation menu
- Added HELOC card to "Find Your Perfect Loan" section on homepage with link to /heloc
- Made all loan program cards clickable with links to their respective pages
- Already added to HTML Sitemap under General Loan Info section

**October 25, 2025 - Florida and Texas State Pages:**
- Created Florida mortgage broker page at `/fl-mortgage-broker` with original content
- Created Texas mortgage broker page at `/tx-mortgage-broker` with original content
- Downloaded state-specific stock images (flags, skylines, landscapes) for both states
- All images include descriptive alt and title tags for SEO and accessibility compliance
- Added Florida and Texas sections to HTML Sitemap
- Updated StateSelection component on homepage to link location cards to state pages
- Each state page features unique, SEO-optimized content specific to local markets and regulations
- Meta titles follow format: [State] Mortgage Loans | Mortgage Genius Has Low Rates
- Meta descriptions highlight state-specific value propositions (150-160 characters)
- Included links to official state regulatory and housing resources (dofollow, noopener)

**October 25, 2025 - Arizona SEO Page Structure:**
- Created 20 new SEO-optimized mortgage pages with unique meta titles and descriptions
- Implemented HelmetProvider for proper SEO meta tag management
- Added 3 top-level pages: Buyers Prequalification, Purchase General Info, Refinance General Info
- Created complete Arizona page hierarchy (17 pages) under /az/ structure
- All pages follow SEO best practices with format: [H1 Tag] | Mortgage Genius Has Low Rates
- Installed react-helmet-async for dynamic meta tag management
- Added ScrollToTop component to ensure pages scroll to top on navigation
- Removed NMLS number from header (kept in footer for legal compliance)
- All Arizona pages include unique, compelling meta descriptions (150-160 characters)
- Created organized folder structure: arizona/buyers/, arizona/refinance/, arizona/va/
- Verified all 20 pages load correctly with proper Header/Footer components

**October 24, 2025 - Navigation & Legal Pages Update:**
- Installed React Router DOM for multi-page navigation
- Created HTML Sitemap page with site navigation directory
- Created Equal Housing Opportunity disclosure page with comprehensive fair lending information
- Reorganized Header: moved "Client Login" button to left, phone number to right
- Updated Header "Apply Online" link to external Morty application URL
- Updated Footer with Router Links to all legal pages
- Refactored App.tsx to use BrowserRouter with proper route configuration
- Fixed Typebot chatbot integration with useEffect script loading
- Fixed Header dropdown menus to stay open when hovering over subitems
- Added React imports to components to fix JSX transform errors

**October 24, 2025 - Initial Replit Setup:**
- Created TypeScript configuration files
- Updated Vite config for Replit environment (port 5000, HMR configuration)
- Created .gitignore for Node.js project
- Installed all npm dependencies
- Configured development workflow
- Set up deployment configuration
- Verified application runs successfully

## Known Issues

- LSP errors in `src/supabase/functions/server/index.tsx` are expected - these are Deno-based files not part of the Vite build
- WebSocket HMR warnings in browser console are normal for Replit's proxy environment
- Application is frontend-only in current Replit setup; backend features require Supabase configuration

## User Preferences

None recorded yet.

## Next Steps

To fully activate all features:
1. Set up Supabase project and configure environment variables
2. Deploy Edge Functions to Supabase
3. Configure CRM integration (Copper)
4. Set up Google Analytics and Tag Manager
5. Create admin user accounts
6. Customize branding and content
