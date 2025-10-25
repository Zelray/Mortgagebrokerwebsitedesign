import { Helmet } from 'react-helmet-async';
import { Header } from './Header';
import { Footer } from './Footer';

export function PurchaseGeneralInfo() {
  return (
    <>
      <Helmet>
        <title>Purchase a Home with Low Mortgage Rates | Mortgage Genius Has Low Rates</title>
        <meta 
          name="description" 
          content="Explore home purchase loan options including FHA, VA, conventional, and jumbo mortgages. Expert guidance and competitive rates for first-time and experienced buyers." 
        />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen">
        <h1>Purchase a Home</h1>
      </main>
      
      <Footer />
    </>
  );
}
