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
 * ✅ Legal Pages - Privacy Policy, Terms of Service, Equal Housing, Sitemap
 * 
 * TIER 3 FEATURES IMPLEMENTED:
 * ✅ Admin Dashboard - Content management system
 * ✅ Blog System - Create/edit/publish articles
 * ✅ User Authentication - Admin login with Supabase
 * ✅ Image Upload - Supabase Storage integration
 * ✅ React Router - Multi-page navigation
 * 
 * NOTE FOR CODER: 
 * - Main content has id="main-content" for skip link functionality
 * - Main has tabIndex={-1} to allow programmatic focus
 * - All components should follow accessibility best practices
 * - Update Google Analytics IDs in GoogleAnalytics component
 * - Update Copper webhook URL in /supabase/functions/server/leads.tsx
 * - Default admin: admin@mortgagegenius.com (create via backend)
 * ============================================================================
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import { AdminLogin } from './components/AdminLogin';
import { AdminDashboard } from './components/AdminDashboard';
import { BlogPostEditor } from './components/BlogPostEditor';
import { BlogPostView } from './components/BlogPostView';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { HtmlSitemap } from './components/HtmlSitemap';
import { EqualHousingOpportunity } from './components/EqualHousingOpportunity';

// HomePage component - all the homepage sections
function HomePage() {
  return (
    <>
      <SkipToContent />
      <div className="min-h-screen bg-white">
        <Header />
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
    </>
  );
}

// StandardPage component - for legal pages with header and footer
function StandardPage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SkipToContent />
      <div className="min-h-screen bg-white">
        <Header />
        <main id="main-content" tabIndex={-1} role="main" className="focus:outline-none">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  const [accessToken, setAccessToken] = useState<string | null>(
    () => sessionStorage.getItem('admin_token')
  );
  const [userRole, setUserRole] = useState<string>(
    () => sessionStorage.getItem('admin_role') || ''
  );
  const [editingPostId, setEditingPostId] = useState<string | null>(null);

  const handleLoginSuccess = (token: string, role: string) => {
    setAccessToken(token);
    setUserRole(role);
    sessionStorage.setItem('admin_token', token);
    sessionStorage.setItem('admin_role', role);
  };

  const handleLogout = () => {
    setAccessToken(null);
    setUserRole('');
    sessionStorage.removeItem('admin_token');
    sessionStorage.removeItem('admin_role');
  };

  const handleEditPost = (postId: string | null) => {
    setEditingPostId(postId);
  };

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <SEOHead />
        <GoogleAnalytics 
          measurementId="G-XXXXXXXXXX"
          gtmId="GTM-XXXXXXX"
        />
        
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<HomePage />} />
          
          {/* Legal Pages */}
          <Route 
            path="/privacy-policy" 
            element={
              <StandardPage>
                <PrivacyPolicy />
              </StandardPage>
            } 
          />
          <Route 
            path="/terms-of-service" 
            element={
              <StandardPage>
                <TermsOfService />
              </StandardPage>
            } 
          />
          <Route 
            path="/equal-housing-opportunity" 
            element={
              <StandardPage>
                <EqualHousingOpportunity />
              </StandardPage>
            } 
          />
          <Route 
            path="/sitemap" 
            element={
              <StandardPage>
                <HtmlSitemap />
              </StandardPage>
            } 
          />
          
          {/* Blog */}
          <Route 
            path="/resources/:slug" 
            element={
              <StandardPage>
                <BlogPostView 
                  slug={window.location.pathname.split('/resources/')[1] || ''} 
                />
              </StandardPage>
            } 
          />
          
          {/* Admin Routes */}
          <Route 
            path="/admin/login" 
            element={<AdminLogin onLoginSuccess={handleLoginSuccess} />} 
          />
          <Route 
            path="/admin" 
            element={
              accessToken ? (
                <AdminDashboard
                  accessToken={accessToken}
                  userRole={userRole}
                  onLogout={handleLogout}
                  onEditPost={handleEditPost}
                />
              ) : (
                <Navigate to="/admin/login" replace />
              )
            } 
          />
          <Route 
            path="/admin/editor" 
            element={
              accessToken ? (
                <BlogPostEditor
                  postId={editingPostId}
                  accessToken={accessToken}
                  onBack={() => window.history.back()}
                />
              ) : (
                <Navigate to="/admin/login" replace />
              )
            } 
          />
        </Routes>
        
        <CookieConsent />
        <Toaster position="top-right" richColors />
      </ErrorBoundary>
    </BrowserRouter>
  );
}
