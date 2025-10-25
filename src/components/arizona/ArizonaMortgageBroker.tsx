import { Helmet } from 'react-helmet-async';
import { Header } from '../Header';
import { Footer } from '../Footer';

export function ArizonaMortgageBroker() {
  return (
    <>
      <Helmet>
        <title>Arizona Mortgage Loans | Mortgage Genius Has Low Rates</title>
        <meta 
          name="description" 
          content="Arizona mortgage broker offering FHA, VA, conventional, USDA, and jumbo loans. Licensed in AZ with competitive rates for purchase and refinance. Get pre-approved today." 
        />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen">
        <h1>Arizona Mortgage Loans</h1>
      </main>
      
      <Footer />
    </>
  );
}
