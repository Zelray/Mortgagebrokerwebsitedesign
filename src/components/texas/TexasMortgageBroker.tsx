import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, MapPin, TrendingUp, Shield } from 'lucide-react';

// Import Texas images
import txFlag from '../../../attached_assets/stock_images/texas_state_flag_1a5c9c33.jpg';
import dallasSkyline from '../../../attached_assets/stock_images/dallas_texas_skyline_3144bc09.jpg';
import txLandscape from '../../../attached_assets/stock_images/texas_landscape_ranc_367d8bca.jpg';

export function TexasMortgageBroker() {
  return (
    <>
      <Helmet>
        <title>Texas Mortgage Loans | Mortgage Genius Has Low Rates</title>
        <meta 
          name="description" 
          content="Texas mortgage broker serving Dallas, Houston, Austin, San Antonio. Competitive rates on FHA, VA, conventional, jumbo loans. Licensed TX mortgage expert." 
        />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section with Animated Background */}
        <div className="relative overflow-hidden">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#003366] via-[#1e40af] to-[#6366f1]">
            <div className="absolute top-0 -left-20 w-96 h-96 bg-gradient-to-br from-[#14b8a6] to-[#06b6d4] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
            <div className="absolute top-0 -right-20 w-96 h-96 bg-gradient-to-br from-[#a855f7] to-[#ec4899] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-[#10b981] to-[#34d399] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-[#f59e0b] to-[#fbbf24] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob-reverse" />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/50 via-transparent to-transparent" />
          
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 animate-grid-flow" style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }} />
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-[10%] w-2 h-2 bg-white/30 rounded-full animate-float" />
            <div className="absolute top-40 left-[25%] w-3 h-3 bg-white/20 rounded-full animate-float animation-delay-1000" />
            <div className="absolute top-32 left-[40%] w-2 h-2 bg-white/25 rounded-full animate-float animation-delay-2000" />
            <div className="absolute top-60 left-[55%] w-2 h-2 bg-white/30 rounded-full animate-float animation-delay-3000" />
            <div className="absolute top-28 left-[70%] w-3 h-3 bg-white/20 rounded-full animate-float animation-delay-1500" />
            <div className="absolute top-48 left-[85%] w-2 h-2 bg-white/25 rounded-full animate-float animation-delay-2500" />
            <div className="absolute top-36 left-[15%] w-2 h-2 bg-white/20 rounded-full animate-float animation-delay-500" />
            <div className="absolute top-56 left-[60%] w-2 h-2 bg-white/30 rounded-full animate-float animation-delay-3500" />
          </div>

          {/* Content */}
          <div className="relative container mx-auto px-4 py-16 max-w-5xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Texas Mortgage Loans
            </h1>
            <p className="text-xl text-white/90 leading-relaxed animate-fade-in-up animation-delay-200">
              Everything's bigger in Texas, including opportunities for homeownership. Whether you're relocating to the 
              Dallas-Fort Worth Metroplex, building in Houston's energy corridor, enjoying Austin's tech boom, or settling 
              in San Antonio's historic neighborhoods, we deliver big-state expertise with personalized service.
            </p>
          </div>
        </div>

        {/* Loan Programs Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
                Texas Mortgage Loan Programs
              </h2>
              <p className="text-gray-600 text-base max-w-3xl mx-auto mb-4">
                Explore mortgage solutions built for Texans. From first-time buyers to luxury estate purchases, 
                our programs serve every corner of the Lone Star State with competitive rates and local expertise.
              </p>
              <p className="text-gray-600 text-base max-w-3xl mx-auto leading-relaxed">
                As a licensed Texas mortgage broker, we work with multiple lenders to find you the best financing for 
                your unique goals. Our reach extends across all major Texas metros—Dallas, Houston, Austin, San Antonio, 
                Fort Worth, El Paso, Arlington, Plano, Corpus Christi, and beyond.
              </p>
            </div>

            <Accordion.Root type="single" collapsible className="space-y-6">
              {/* Purchase Loans Accordion */}
              <Accordion.Item 
                value="purchase" 
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl animate-fade-in-up animation-delay-200"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-gray-50 transition-colors group">
                    <div className="flex-1 pr-4">
                      <h3 className="text-xl md:text-2xl font-bold text-[#003366] mb-1">Texas Home Purchase Loans</h3>
                      <p className="text-gray-600 text-sm md:text-base">Finance your piece of the Lone Star State</p>
                    </div>
                    <ChevronDown className="w-6 h-6 text-gray-500 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-6 md:px-8 pb-8 pt-2 animate-accordion-down">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Buying in Texas means understanding property taxes, MUD districts, and the state's unique homestead laws. 
                    Our Texas purchase loan programs accommodate urban condos, suburban family homes, Hill Country ranches, 
                    and coastal properties along the Gulf. We guide you through Texas-specific considerations including HOA 
                    restrictions, mineral rights, and builder financing options to ensure a smooth path to ownership.
                  </p>
                </Accordion.Content>
              </Accordion.Item>

              {/* Refinance Loans Accordion */}
              <Accordion.Item 
                value="refinance" 
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl animate-fade-in-up animation-delay-400"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-gray-50 transition-colors group">
                    <div className="flex-1 pr-4">
                      <h3 className="text-xl md:text-2xl font-bold text-[#003366] mb-1">Texas Mortgage Refinance</h3>
                      <p className="text-gray-600 text-sm md:text-base">Lower payments and unlock equity</p>
                    </div>
                    <ChevronDown className="w-6 h-6 text-gray-500 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-6 md:px-8 pb-8 pt-2 animate-accordion-down">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Texas homeowners benefit from refinancing to reduce monthly payments, shorten loan terms, or cash out 
                    equity for renovations and investments. Understanding Texas's 50(a)(6) loan requirements and homestead 
                    protections is crucial—we navigate these regulations expertly while securing competitive rates that make 
                    refinancing worthwhile for your financial goals.
                  </p>
                </Accordion.Content>
              </Accordion.Item>

              {/* HELOC Accordion */}
              <Accordion.Item 
                value="heloc" 
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl animate-fade-in-up animation-delay-600"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-gray-50 transition-colors group">
                    <div className="flex-1 pr-4">
                      <h3 className="text-xl md:text-2xl font-bold text-[#003366] mb-1">Home Equity Loans & HELOCs</h3>
                      <p className="text-gray-600 text-sm md:text-base">Access your Texas home's equity</p>
                    </div>
                    <ChevronDown className="w-6 h-6 text-gray-500 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-6 md:px-8 pb-8 pt-2 animate-accordion-down">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Texas homestead laws provide unique protections but also impose specific rules on home equity lending. 
                    Our Texas-licensed team specializes in compliant home equity products, whether you need funds for home 
                    improvements, pool construction, college tuition, or business investments. We ensure your equity loan 
                    meets all Texas constitutional requirements while delivering competitive terms.
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </div>
        </div>

        {/* Texas Real Estate Market */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-8 text-center animate-fade-in-up">
              Texas's Booming Real Estate Market
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="flex flex-col items-start space-y-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up animation-delay-200">
                <div className="w-14 h-14 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-lg flex items-center justify-center shadow-md">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">Economic Powerhouse</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Texas boasts the nation's second-largest economy, attracting businesses and workers with no state 
                    income tax, business-friendly policies, and diverse industries from energy to technology.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up animation-delay-400">
                <div className="w-14 h-14 bg-gradient-to-br from-[#003366] to-[#1e40af] rounded-lg flex items-center justify-center shadow-md">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">Big State, Big Choices</h3>
                  <p className="text-gray-600 leading-relaxed">
                    From urban high-rises to sprawling ranches, Texas offers incredible diversity in housing options 
                    across 254 counties and multiple climate zones, all with affordable property compared to coastal states.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up animation-delay-600">
                <div className="w-14 h-14 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-lg flex items-center justify-center shadow-md">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">Strong Homestead Protection</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Texas mortgage lending is regulated by the{' '}
                    <a 
                      href="https://occc.texas.gov/" 
                      target="_blank" 
                      rel="dofollow noopener noreferrer"
                      className="text-[#10b981] hover:text-[#059669] underline font-medium transition-colors"
                    >
                      Texas Office of Consumer Credit Commissioner
                    </a>
                    , with constitutional protections for homestead properties.
                  </p>
                </div>
              </div>
            </div>

            {/* Texas Mortgage Information Paragraph */}
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 mb-10 animate-fade-in-up">
              <div className="flex flex-col md:flex-row gap-6">
                <img 
                  src={txFlag} 
                  alt="texas-flag" 
                  title="texas-flag"
                  className="w-32 h-24 object-cover rounded-lg shadow-md flex-shrink-0"
                />
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    As your trusted Texas mortgage broker, we bring comprehensive knowledge of the Lone Star State's vast and 
                    varied real estate markets. Whether you're exploring the massive Dallas-Fort Worth Metroplex (7+ million residents), 
                    Houston's sprawling energy hub, Austin's booming tech sector and Hill Country charm, San Antonio's military 
                    presence and cultural heritage, or smaller cities like Lubbock, Amarillo, and Waco—we understand the local 
                    nuances that impact your financing. Our Texas-specific expertise covers navigating the state's unique homestead 
                    laws, understanding property tax implications and MUD districts, managing builder financing in master-planned 
                    communities, and structuring loans that comply with Texas Constitution Article XVI requirements for home equity lending.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <img 
                        src={dallasSkyline} 
                        alt="Dallas Texas downtown skyline showing metropolitan growth and urban real estate development" 
                        title="Dallas Texas Skyline - Urban Economic Growth"
                        className="w-full h-48 object-cover rounded-lg shadow-md mb-3"
                      />
                      <p className="text-sm text-gray-600 leading-relaxed">
                        The Dallas-Fort Worth Metroplex leads the nation in corporate relocations, driving strong housing 
                        demand across all price points from starter homes to executive estates.
                      </p>
                    </div>
                    
                    <div>
                      <img 
                        src={txLandscape} 
                        alt="Texas landscape countryside with open space representing rural property and ranch land opportunities" 
                        title="Texas Landscape - Rural and Ranch Properties"
                        className="w-full h-48 object-cover rounded-lg shadow-md mb-3"
                      />
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Texas's vast geography offers everything from Gulf Coast beaches to Hill Country vineyards and wide-open 
                        ranch land, creating diverse property types and financing needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 rounded-xl p-8 shadow-lg animate-fade-in-up animation-delay-800">
              <h3 className="font-bold text-2xl text-gray-900 mb-4">Texas Homebuyer Resources</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                These official Texas resources provide essential information for homebuyers and homeowners:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#10b981] mr-2 text-xl">•</span>
                  <span>
                    <a 
                      href="https://www.tsahc.org/" 
                      target="_blank" 
                      rel="dofollow noopener noreferrer"
                      className="text-[#10b981] hover:text-[#059669] underline font-semibold transition-colors"
                    >
                      Texas State Affordable Housing Corporation
                    </a>
                    {' '}- Down payment assistance and homebuyer education
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#10b981] mr-2 text-xl">•</span>
                  <span>
                    <a 
                      href="https://www.trec.texas.gov/" 
                      target="_blank" 
                      rel="dofollow noopener noreferrer"
                      className="text-[#10b981] hover:text-[#059669] underline font-semibold transition-colors"
                    >
                      Texas Real Estate Commission
                    </a>
                    {' '}- Licensing and consumer protection for real estate
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#10b981] mr-2 text-xl">•</span>
                  <span>
                    <a 
                      href="https://occc.texas.gov/" 
                      target="_blank" 
                      rel="dofollow noopener noreferrer"
                      className="text-[#10b981] hover:text-[#059669] underline font-semibold transition-colors"
                    >
                      Texas Office of Consumer Credit Commissioner
                    </a>
                    {' '}- Mortgage lending regulation and borrower rights
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#10b981] mr-2 text-xl">•</span>
                  <span>
                    <a 
                      href="https://comptroller.texas.gov/" 
                      target="_blank" 
                      rel="dofollow noopener noreferrer"
                      className="text-[#10b981] hover:text-[#059669] underline font-semibold transition-colors"
                    >
                      Texas Comptroller of Public Accounts
                    </a>
                    {' '}- Property tax information and exemptions
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="relative overflow-hidden bg-gradient-to-r from-[#003366] to-[#1e40af] rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl animate-fade-in-up">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
              
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Get pre-approved for your Texas mortgage today. Big state, big opportunities, personalized service.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://tinyurl.com/42xx3hzu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-[#10b981] text-white font-semibold rounded-lg hover:bg-[#059669] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Apply Online Now
                  </a>
                  <a 
                    href="tel:3215550199"
                    className="inline-block px-8 py-4 bg-white text-[#003366] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Call (321) 555-0199
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
