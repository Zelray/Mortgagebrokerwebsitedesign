import { Helmet } from 'react-helmet-async';
import { Header } from './Header';
import { Footer } from './Footer';

export function RefinanceGeneralInfo() {
  return (
    <>
      <Helmet>
        <title>Refinance Your Mortgage and Save Money | Mortgage Genius Has Low Rates</title>
        <meta 
          name="description" 
          content="Lower your monthly payment with mortgage refinancing. Compare FHA streamline, VA IRRRL, conventional, and jumbo refinance options. Get your free rate quote today." 
        />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen">
        <h1>Refinance Your Mortgage</h1>
      </main>
      
      <Footer />
    </>
  );
}
