import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from './Header';
import { Footer } from './Footer';
import ReactMarkdown from 'react-markdown';

interface TinaPageProps {
  collection: string;
  slug: string;
}

interface PageData {
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  heroHeadline?: string;
  heroSubheadline?: string;
  body?: string;
  _body?: string;
  lastUpdated?: string;
}

export function TinaPage({ collection, slug }: TinaPageProps) {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadPage();
  }, [collection, slug]);

  const loadPage = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`/content/pages/${collection}/${slug}.mdx`);
      
      if (!response.ok) {
        throw new Error('Page not found');
      }

      const mdxContent = await response.text();
      
      const frontmatterMatch = mdxContent.match(/^---\n([\s\S]*?)\n---/);
      const bodyContent = mdxContent.replace(/^---\n[\s\S]*?\n---\n/, '');
      
      let frontmatter: Record<string, string> = {};
      if (frontmatterMatch) {
        const frontmatterText = frontmatterMatch[1];
        frontmatterText.split('\n').forEach(line => {
          const match = line.match(/^([^:]+):\s*(.*)$/);
          if (match) {
            frontmatter[match[1].trim()] = match[2].trim();
          }
        });
      }

      setPageData({
        title: frontmatter.title || '',
        metaTitle: frontmatter.metaTitle || frontmatter.title,
        metaDescription: frontmatter.metaDescription || '',
        heroHeadline: frontmatter.heroHeadline,
        heroSubheadline: frontmatter.heroSubheadline,
        lastUpdated: frontmatter.lastUpdated,
        body: bodyContent,
        _body: bodyContent,
      });
    } catch (err) {
      console.error('Error loading page:', err);
      setError('Failed to load page content');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (error || !pageData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
            <p className="text-muted-foreground mb-6">This page does not exist</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{pageData.metaTitle || pageData.title}</title>
        <meta name="description" content={pageData.metaDescription || ''} />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        {pageData.heroHeadline && (
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#003366] via-[#1e40af] to-[#6366f1]">
              <div className="absolute top-0 -left-20 w-96 h-96 bg-gradient-to-br from-[#14b8a6] to-[#06b6d4] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
              <div className="absolute top-0 -right-20 w-96 h-96 bg-gradient-to-br from-[#a855f7] to-[#ec4899] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
            </div>

            <div className="relative container mx-auto px-4 py-16 max-w-5xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
                {pageData.heroHeadline}
              </h1>
              {pageData.heroSubheadline && (
                <p className="text-xl text-white/90 leading-relaxed animate-fade-in-up animation-delay-200">
                  {pageData.heroSubheadline}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Simple Header for Legal Pages */}
        {!pageData.heroHeadline && (
          <div className="bg-gradient-to-r from-[#003366] to-[#1e40af] text-white py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold mb-4">{pageData.title}</h1>
              {pageData.lastUpdated && (
                <p className="text-white/80">Last Updated: {pageData.lastUpdated}</p>
              )}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="prose prose-lg max-w-none prose-headings:text-[#003366] prose-a:text-[#10b981] prose-a:no-underline hover:prose-a:underline">
            <ReactMarkdown>{pageData.body || ''}</ReactMarkdown>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
