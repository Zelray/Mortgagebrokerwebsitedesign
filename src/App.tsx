/**
 * ============================================================================
 * MORTGAGE GENIUS - MAIN APP COMPONENT
 * ============================================================================
 * $50K Production Website with Professional Features
 * 
 * TIER 1 FEATURES IMPLEMENTED:
 * ✅ Error Boundary - Graceful error handling
 * ✅ SEO Meta Tags - Search engine optimization
 * ✅ Accessibility - WCAG compliance (skip links, ARIA labels, keyboard nav)
 * ✅ Performance - Optimized images, fast loading
 * ✅ Quick Contact Form - Footer lead capture
 * 
 * TIER 2 FEATURES IMPLEMENTED:
 * ✅ Google Analytics & Tag Manager - Visitor tracking
 * ✅ Cookie Consent Banner - GDPR/CCPA compliance
 * ✅ Lead Capture System - Copper CRM + Database backup
 * ✅ Legal Pages - Privacy Policy, Terms of Service
 * 
 * NOTE FOR CODER: 
 * - Main content has id="main-content" for skip link functionality
 * - Main has tabIndex={-1} to allow programmatic focus
 * - All components should follow accessibility best practices
 * - Update Google Analytics IDs in GoogleAnalytics component
 * - Update Copper webhook URL in /supabase/functions/server/leads.tsx
 * ============================================================================
 */

import { ErrorBoundary } from './components/ErrorBoundary';
import { SEOHead } from './components/SEOHead';
import { SkipToContent } from './components/SkipToContent';
import { GoogleAnalytics } from './components/GoogleAnalytics';
import { CookieConsent } from './components/CookieConsent';
import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TrustIndicators } from './components/TrustIndicators';
import { StateSelection } from './components/StateSelection';
import { LoanProgramsGrid } from './components/LoanProgramsGrid';
import { MortgageCalculator } from './components/MortgageCalculator';
import { SocialProof } from './components/SocialProof';
import { AboutMortgageGenius } from './components/AboutMortgageGenius';
import { BlogPreview } from './components/BlogPreview';
import { CTABanner } from './components/CTABanner';
import { Footer } from './components/Footer';

export default function App() {
  return (
    // ========== ERROR BOUNDARY: Catches React errors and shows fallback UI ==========
    <ErrorBoundary>
      {/* ========== SEO: Meta tags for search engines and social media ========== */}
      <SEOHead />
      
      {/* ========== TIER 2: Google Analytics (only loads if cookies accepted) ========== */}
      <GoogleAnalytics 
        measurementId="G-XXXXXXXXXX"  // TODO: Replace with your GA4 ID
        gtmId="GTM-XXXXXXX"            // TODO: Replace with your GTM ID
      />
      
      {/* ========== ACCESSIBILITY: Skip to content link for keyboard users ========== */}
      <SkipToContent />
      
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* 
          Main content area with accessibility attributes:
          - id="main-content": Target for skip link
          - tabIndex={-1}: Allows programmatic focus (not in tab order)
          - role="main": Semantic landmark for screen readers
        */}
        <main 
          id="main-content" 
          tabIndex={-1}
          role="main"
          className="focus:outline-none"
        >
          <HeroSection />
          <TrustIndicators />
          <StateSelection />
          <LoanProgramsGrid />
          <MortgageCalculator />
          <SocialProof />
          <AboutMortgageGenius />
          <BlogPreview />
          <CTABanner />
        </main>
        
        <Footer />
      </div>
      
      {/* ========== TIER 2: Cookie Consent Banner (GDPR/CCPA compliance) ========== */}
      <CookieConsent />
      
      {/* ========== Toast Notifications (for form submissions and alerts) ========== */}
      <Toaster position="top-right" richColors />
    </ErrorBoundary>
  );
}
