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
 * TIER 3 FEATURES IMPLEMENTED:
 * ✅ Admin Dashboard - Content management system
 * ✅ Blog System - Create/edit/publish articles
 * ✅ User Authentication - Admin login with Supabase
 * ✅ Image Upload - Supabase Storage integration
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

import { useState, useEffect } from 'react';
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

type ViewMode = 'home' | 'admin-login' | 'admin-dashboard' | 'blog-editor' | 'blog-view';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('home');
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<string>('');
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [viewingSlug, setViewingSlug] = useState<string | null>(null);

  // Check URL path on mount to determine view
  useEffect(() => {
    const path = window.location.pathname;
    
    if (path.startsWith('/admin/login')) {
      setViewMode('admin-login');
    } else if (path.startsWith('/admin')) {
      // Check if user has valid session
      const savedToken = sessionStorage.getItem('admin_token');
      const savedRole = sessionStorage.getItem('admin_role');
      if (savedToken && savedRole) {
        setAccessToken(savedToken);
        setUserRole(savedRole);
        setViewMode('admin-dashboard');
      } else {
        setViewMode('admin-login');
      }
    } else if (path.startsWith('/resources/')) {
      const slug = path.replace('/resources/', '');
      setViewingSlug(slug);
      setViewMode('blog-view');
    } else {
      setViewMode('home');
    }
  }, []);

  const handleLoginSuccess = (token: string, role: string) => {
    setAccessToken(token);
    setUserRole(role);
    sessionStorage.setItem('admin_token', token);
    sessionStorage.setItem('admin_role', role);
    setViewMode('admin-dashboard');
    window.history.pushState({}, '', '/admin');
  };

  const handleLogout = () => {
    setAccessToken(null);
    setUserRole('');
    sessionStorage.removeItem('admin_token');
    sessionStorage.removeItem('admin_role');
    setViewMode('admin-login');
    window.history.pushState({}, '', '/admin/login');
  };

  const handleEditPost = (postId: string | null) => {
    setEditingPostId(postId);
    setViewMode('blog-editor');
  };

  const handleBackToDashboard = () => {
    setViewMode('admin-dashboard');
  };

  const handleBackToHome = () => {
    setViewMode('home');
    window.history.pushState({}, '', '/');
  };

  // Render based on view mode
  if (viewMode === 'admin-login') {
    return (
      <ErrorBoundary>
        <SEOHead />
        <AdminLogin onLoginSuccess={handleLoginSuccess} />
        <Toaster position="top-right" richColors />
      </ErrorBoundary>
    );
  }

  if (viewMode === 'admin-dashboard' && accessToken) {
    return (
      <ErrorBoundary>
        <SEOHead />
        <AdminDashboard
          accessToken={accessToken}
          userRole={userRole}
          onLogout={handleLogout}
          onEditPost={handleEditPost}
        />
        <Toaster position="top-right" richColors />
      </ErrorBoundary>
    );
  }

  if (viewMode === 'blog-editor' && accessToken) {
    return (
      <ErrorBoundary>
        <SEOHead />
        <BlogPostEditor
          postId={editingPostId}
          accessToken={accessToken}
          onBack={handleBackToDashboard}
        />
        <Toaster position="top-right" richColors />
      </ErrorBoundary>
    );
  }

  if (viewMode === 'blog-view' && viewingSlug) {
    return (
      <ErrorBoundary>
        <SEOHead />
        <BlogPostView slug={viewingSlug} onBack={handleBackToHome} />
        <Toaster position="top-right" richColors />
      </ErrorBoundary>
    );
  }

  // Default: Home page
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
