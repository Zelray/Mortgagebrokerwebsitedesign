# Mortgage Genius - Replit Project Documentation

## 🚨 AGENT INSTRUCTIONS - READ FIRST

### Context Management Protocol
Every Replit Agent session MUST follow these rules to maintain efficient context:

1. **CHECK CHANGELOG.md FIRST** - Read the changelog to understand recent changes
2. **UPDATE BOTH FILES** after significant work:
   - Add entries to CHANGELOG.md with date, category, and details
   - Update this replit.md file: 
     - REMOVE outdated "Recent Changes" that are > 7 days old
     - CONSOLIDATE repetitive information
     - ADD new architectural decisions or patterns
3. **KEEP REPLIT.MD LEAN** - This file should be a reference, not a history book
4. **USE CHANGELOG FOR HISTORY** - All historical changes go in CHANGELOG.md

### Critical User Preferences
- **Language:** Explain everything in simple terms (14-year-old level) - user is an attorney but prefers non-technical language
- **Design:** Match designs EXACTLY as provided (no interpretations or "improvements")
- **Admin Access:** Only @mortgagegenius.pro emails via Google OAuth
- **Current Priority:** Rent vs Buy Calculator needs refinement

## Overview

Mortgage Genius is a professional mortgage broker website, developed with React, TypeScript, and Vite. Its primary purpose is to provide a comprehensive solution for mortgage brokers, featuring a modern, accessible user interface. Key capabilities include lead capture, a blog system for content marketing, and an administrative dashboard for content management. The project aims to offer a robust online presence, streamline client interactions, and support business growth through effective digital tools.

## Current State (See CHANGELOG.md for history)

### Content Management Structure
- **TinaCMS Pages:** State pages, legal pages, loan type pages (stored as MDX in `content/` folder)
- **React Components:** Interactive calculators, pre-qualification forms, HELOC page, HTML sitemap
- **Admin Access:** Google OAuth restricted to @mortgagegenius.pro domain (awaiting credentials)

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