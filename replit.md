# Mortgage Genius - Replit Project Documentation

## Overview

Mortgage Genius is a professional mortgage broker website, developed with React, TypeScript, and Vite. Its primary purpose is to provide a comprehensive solution for mortgage brokers, featuring a modern, accessible user interface. Key capabilities include lead capture, a blog system for content marketing, and an administrative dashboard for content management. The project aims to offer a robust online presence, streamline client interactions, and support business growth through effective digital tools.

## User Preferences

- **Domain Restriction for Admin:** Only @mortgagegenius.pro email addresses should have admin access
- **Interactive Pages Stay as React:** Keep HELOC calculator, pre-qualification forms, and HTML sitemap as React components
- **Content Pages Migrated to TinaCMS:** State pages, legal pages, and loan type overview pages now managed through TinaCMS

## Recent Changes (October 27, 2025)

### TinaCMS Content Migration
Migrated 7 major content pages from React components to TinaCMS MDX files for easier content management:

**State Pages:**
- Florida Mortgage Broker (`/fl-mortgage-broker`) → `content/pages/states/fl-mortgage-broker.mdx`
- Texas Mortgage Broker (`/tx-mortgage-broker`) → `content/pages/states/tx-mortgage-broker.mdx`

**Legal Pages:**
- Privacy Policy (`/privacy-policy`) → `content/pages/legal/privacy-policy.mdx`
- Terms of Service (`/terms-of-service`) → `content/pages/legal/terms-of-service.mdx`
- Equal Housing Opportunity (`/equal-housing-opportunity`) → `content/pages/legal/equal-housing-opportunity.mdx`

**Loan Type Pages:**
- Purchase (`/purchase`) → `content/pages/loan-types/purchase.mdx`
- Refinance (`/refinance`) → `content/pages/loan-types/refinance.mdx`

### Technical Updates
- Added three new TinaCMS collections: State Pages, Legal Pages, and Loan Type Pages
- Created `TinaPage` component using Tina's generated client for reliable content loading
- Updated routing in `App.tsx` to use TinaCMS content loader
- Fixed frontmatter schema alignment between TinaCMS config and MDX files
- **Implemented Google OAuth** with @mortgagegenius.pro domain restriction for admin access
  - Replaced IP whitelist + password system with Google OAuth
  - Only users with @mortgagegenius.pro email addresses can access admin area
  - Created `GoogleOAuth` component for secure authentication

### Preserved as React Components
- HELOC page with interactive calculators (`/heloc`)
- Pre-qualification form (`/prequal`)
- HTML Sitemap (`/sitemap`)
- All Arizona-specific pages (still using React components)
- Homepage with interactive sections

## System Architecture

### UI/UX Decisions
The project emphasizes a modern, professional, and accessible user experience, adhering to WCAG 2.1 Level AA compliance. This includes keyboard navigation support and a design built with Tailwind CSS v4 and Radix UI for accessible component primitives. The site features various marketing pages, legal disclosures, and interactive elements like calculators.

### Technical Implementations
The frontend is built using React 18 and TypeScript with Vite as the build tool. React Router DOM handles client-side navigation. Data visualization is managed with Recharts. Form management uses React Hook Form.

### Feature Specifications
- **Core Functionality:** Error boundary for graceful error handling, comprehensive SEO meta tags, Google Analytics 4 integration, and GDPR/CCPA compliant cookie consent.
- **Lead Management:** Integrated lead capture forms with planned Copper CRM integration.
- **Content Management:** An admin dashboard with authentication for blog post CRUD operations using a WordPress-style editor, image upload system, and per-post SEO management. TinaCMS is integrated for headless content management, storing content as MDX/JSON files with a visual editor.
- **Interactive Tools:** Includes interactive calculators for Home Equity, Debt Consolidation, and HELOC Payments, featuring real-time updates and Recharts visualizations.
- **Legal & Compliance:** Dedicated pages for Privacy Policy, Terms of Service, Equal Housing Opportunity, and an HTML Sitemap.
- **SEO & Localization:** Extensive SEO optimization with dynamic meta tag management via `react-helmet-async`. Supports localized content for various states (e.g., Arizona, Florida, Texas) with state-specific pages and content.

### System Design Choices
The application is structured as a frontend-heavy web application optimized for Replit's environment. The file structure organizes components, styles, utilities, and backend edge functions separately. The project leverages a component-based architecture for modularity and reusability. Deployment is configured for Replit's autoscale feature, suitable for static/frontend applications.

## External Dependencies

- **Supabase:** Used for backend services including:
    - **Supabase Edge Functions:** Deno-based functions within `src/supabase/functions/` for backend logic, utilizing Hono framework.
    - **Supabase Auth:** Authentication system.
    - **Supabase Storage:** Image uploads.
    - **KV Store:** PostgreSQL-backed data storage.
- **Google Analytics 4:** For website analytics.
- **Copper CRM:** Planned integration for lead management.
- **Morty Application:** External link for online loan applications.