import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, MapPin, TrendingUp, Shield } from 'lucide-react';

// Import Florida images
import flFlag from '../../../attached_assets/stock_images/florida_state_flag_fef8210d.jpg';
import miamiSkyline from '../../../attached_assets/stock_images/miami_florida_skylin_83354f9d.jpg';
import flBeach from '../../../attached_assets/stock_images/florida_beach_coastl_834ba19e.jpg';

export function FloridaMortgageBroker() {
  return (
    <>
      <Helmet>
        <title>Florida Mortgage Loans | Mortgage Genius Has Low Rates</title>
        <meta 
          name="description" 
          content="Florida mortgage broker offering competitive home loans in Miami, Tampa, Orlando, Jacksonville. FHA, VA, conventional, jumbo loans with low rates. Licensed in FL." 
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
              Florida Mortgage Loans
            </h1>
            <p className="text-xl text-white/90 leading-relaxed animate-fade-in-up animation-delay-200">
              Your trusted mortgage partner across the Sunshine State. From Miami's urban energy to Tampa's Gulf Coast charm 
              and Orlando's thriving communities, we offer tailored financing solutions for Florida's diverse housing markets 
              with exceptional service and competitive rates.
            </p>
          </div>
        </div>

        {/* Loan Programs Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
                Florida Mortgage Loan Programs
              </h2>
              <p className="text-gray-600 text-base max-w-3xl mx-auto mb-4">
                Discover comprehensive mortgage solutions tailored for Florida homebuyers and homeowners. Each loan program 
                is designed to match the unique needs of Florida's coastal, urban, and suburban markets.
              </p>
              <p className="text-gray-600 text-base max-w-3xl mx-auto leading-relaxed">
                As a licensed mortgage broker in Florida, we partner with leading lenders to secure optimal rates and terms 
                for your situation. Our expertise spans every major Florida market from Jacksonville and Miami to Tampa, 
                Orlando, Fort Lauderdale, Tallahassee, Naples, and the Florida Keys.
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
                      <h3 className="text-xl md:text-2xl font-bold text-[#003366] mb-1">Florida Home Purchase Loans</h3>
                      <p className="text-gray-600 text-sm md:text-base">Secure your dream home in the Sunshine State</p>
                    </div>
                    <ChevronDown className="w-6 h-6 text-gray-500 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-6 md:px-8 pb-8 pt-2 animate-accordion-down">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Purchasing a home in Florida requires specialized knowledge of coastal insurance, hurricane preparedness, 
                    and flood zone regulations. Our Florida purchase loan programs include options for beachfront properties, 
                    condominiums, single-family homes, and investment properties. We navigate Florida-specific requirements 
                    including wind mitigation, homeowners insurance, and HOA considerations to ensure smooth closings.
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
                      <h3 className="text-xl md:text-2xl font-bold text-[#003366] mb-1">Florida Mortgage Refinance</h3>
                      <p className="text-gray-600 text-sm md:text-base">Optimize your mortgage and save money</p>
                    </div>
                    <ChevronDown className="w-6 h-6 text-gray-500 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-6 md:px-8 pb-8 pt-2 animate-accordion-down">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Florida homeowners benefit from refinancing to lower interest rates, eliminate PMI, consolidate debt, 
                    or access equity for home improvements like hurricane shutters and impact windows. Our streamlined 
                    refinance programs minimize hassle while maximizing savings, with expertise in Florida's unique property 
                    insurance landscape and coastal property valuations.
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
                      <p className="text-gray-600 text-sm md:text-base">Tap into your Florida home's value</p>
                    </div>
                    <ChevronDown className="w-6 h-6 text-gray-500 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-6 md:px-8 pb-8 pt-2 animate-accordion-down">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Florida's strong real estate appreciation creates excellent opportunities for home equity financing. 
                    Use your equity for storm protection upgrades, pool installations, vacation home down payments, or 
                    other financial goals. We offer both fixed-rate home equity loans and flexible HELOCs tailored to 
                    Florida homeowners' unique needs.
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </div>
        </div>

        {/* Florida Real Estate Market */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-8 text-center animate-fade-in-up">
              Florida's Dynamic Real Estate Market
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="flex flex-col items-start space-y-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up animation-delay-200">
                <div className="w-14 h-14 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-lg flex items-center justify-center shadow-md">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">Rapid Population Growth</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Florida ranks among the fastest-growing states, attracting retirees, families, and businesses with 
                    no state income tax, year-round sunshine, and thriving coastal economies.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up animation-delay-400">
                <div className="w-14 h-14 bg-gradient-to-br from-[#003366] to-[#1e40af] rounded-lg flex items-center justify-center shadow-md">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">Coastal Living</h3>
                  <p className="text-gray-600 leading-relaxed">
                    With 1,350 miles of coastline, Florida offers unparalleled beach access, waterfront communities, 
                    and a lifestyle centered on outdoor recreation and tropical living.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up animation-delay-600">
                <div className="w-14 h-14 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-lg flex items-center justify-center shadow-md">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">Consumer Protection</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Florida mortgage lending is overseen by the{' '}
                    <a 
                      href="https://flofr.gov/" 
                      target="_blank" 
                      rel="dofollow noopener noreferrer"
                      className="text-[#10b981] hover:text-[#059669] underline font-medium transition-colors"
                    >
                      Florida Office of Financial Regulation
                    </a>
                    , ensuring ethical practices and borrower protection.
                  </p>
                </div>
              </div>
            </div>

            {/* Florida Mortgage Information Paragraph */}
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 mb-10 animate-fade-in-up">
              <div className="flex flex-col md:flex-row gap-6">
                <img 
                  src={flFlag} 
                  alt="Florida state flag with red cross and state seal" 
                  title="Florida State Flag - Sunshine State Symbol"
                  className="w-32 h-24 object-cover rounded-lg shadow-md flex-shrink-0"
                />
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    As your dedicated Florida mortgage broker, we bring deep understanding of the Sunshine State's unique 
                    real estate landscape. From the bustling metropolises of Miami-Dade and Broward counties to the Gulf Coast 
                    paradise of Naples and Sarasota, Central Florida's theme park corridor around Orlando, the historic charm 
                    of St. Augustine, and the tropical Florida Keys—each market presents distinct financing opportunities and challenges. 
                    Our Florida-specific expertise includes navigating windstorm and flood insurance requirements, understanding 
                    coastal construction loan limits, condo financing with association approvals, and specialized programs for 
                    vacation homes and investment properties in tourist destinations.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <img 
                        src={miamiSkyline} 
                        alt="Miami Florida downtown skyline waterfront showing urban growth and coastal real estate market" 
                        title="Miami Florida Downtown Skyline - Coastal Urban Development and Real Estate Growth"
                        className="w-full h-48 object-cover rounded-lg shadow-md mb-3"
                      />
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Miami and South Florida's booming economy attracts international buyers and domestic relocations, 
                        creating diverse mortgage needs from luxury condos to starter homes.
                      </p>
                    </div>
                    
                    <div>
                      <img 
                        src={flBeach} 
                        alt="Florida beach coastline with palm trees and tropical waters representing coastal property lifestyle" 
                        title="Florida Tropical Beach - Coastal Living Lifestyle and Waterfront Property Values"
                        className="w-full h-48 object-cover rounded-lg shadow-md mb-3"
                      />
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Florida's pristine beaches and tropical climate drive strong real estate demand, making it a premier 
                        destination for primary residences, vacation homes, and investment properties.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 rounded-xl p-8 shadow-lg animate-fade-in-up animation-delay-800">
              <h3 className="font-bold text-2xl text-gray-900 mb-4">Florida Homebuyer Resources</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                These official Florida resources provide valuable information for homebuyers and homeowners:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#10b981] mr-2 text-xl">•</span>
                  <span>
                    <a 
                      href="https://www.floridahousing.org/" 
                      target="_blank" 
                      rel="dofollow noopener noreferrer"
                      className="text-[#10b981] hover:text-[#059669] underline font-semibold transition-colors"
                    >
                      Florida Housing Finance Corporation
                    </a>
                    {' '}- Down payment assistance and first-time homebuyer programs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#10b981] mr-2 text-xl">•</span>
                  <span>
                    <a 
                      href="https://www.myfloridalicense.com/dbpr/" 
                      target="_blank" 
                      rel="dofollow noopener noreferrer"
                      className="text-[#10b981] hover:text-[#059669] underline font-semibold transition-colors"
                    >
                      Florida Department of Business & Professional Regulation
                    </a>
                    {' '}- Real estate licensing and consumer information
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#10b981] mr-2 text-xl">•</span>
                  <span>
                    <a 
                      href="https://flofr.gov/" 
                      target="_blank" 
                      rel="dofollow noopener noreferrer"
                      className="text-[#10b981] hover:text-[#059669] underline font-semibold transition-colors"
                    >
                      Florida Office of Financial Regulation
                    </a>
                    {' '}- Mortgage broker oversight and borrower protection
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#10b981] mr-2 text-xl">•</span>
                  <span>
                    <a 
                      href="https://www.myflorida.com/" 
                      target="_blank" 
                      rel="dofollow noopener noreferrer"
                      className="text-[#10b981] hover:text-[#059669] underline font-semibold transition-colors"
                    >
                      MyFlorida.com
                    </a>
                    {' '}- Official state portal for government services and information
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
                  Get pre-approved for your Florida mortgage today and take the first step toward homeownership 
                  in the Sunshine State.
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
