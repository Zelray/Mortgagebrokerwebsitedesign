import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, Home, RefreshCw, PiggyBank, MapPin, TrendingUp, Shield } from 'lucide-react';

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
      
      <main className="min-h-screen bg-white">
        {/* Welcome Section */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#003366] mb-6">
              Arizona Mortgage Loans
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Welcome to Arizona's trusted mortgage partner. Whether you're purchasing your first home in Phoenix, 
              refinancing in Tucson, or securing a vacation property in Sedona, we're here to help you navigate 
              Arizona's dynamic real estate market with competitive rates and personalized service.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              As a licensed mortgage broker in the State of Arizona, we work with multiple lenders to find you 
              the best rates and terms for your unique situation. Our expertise covers all major Arizona markets 
              including Phoenix, Tucson, Mesa, Chandler, Scottsdale, Glendale, Gilbert, Tempe, and beyond.
            </p>
          </div>
        </div>

        {/* Why Arizona Section */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-[#003366] mb-6">
              Arizona's Growing Real Estate Market
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <TrendingUp className="w-6 h-6 text-[#10b981] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Strong Market Growth</h3>
                  <p className="text-gray-600 text-sm">
                    Arizona consistently ranks among the fastest-growing states for population and housing demand, 
                    driven by favorable weather, business opportunities, and quality of life.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-[#10b981] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Diverse Communities</h3>
                  <p className="text-gray-600 text-sm">
                    From urban centers to quiet suburbs and retirement communities, Arizona offers diverse 
                    housing options to fit every lifestyle and budget across all 15 counties.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-[#10b981] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Regulated & Protected</h3>
                  <p className="text-gray-600 text-sm">
                    Arizona mortgage lending is regulated by the{' '}
                    <a 
                      href="https://dfi.az.gov/" 
                      target="_blank" 
                      rel="dofollow noopener noreferrer"
                      className="text-[#10b981] hover:underline font-medium"
                    >
                      Arizona Department of Financial Institutions
                    </a>
                    , ensuring consumer protection and fair lending practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-3">Arizona Homebuyer Resources</h3>
              <p className="text-gray-700 mb-4">
                Whether you're a first-time homebuyer or experienced investor, these Arizona resources can help you 
                make informed decisions:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <a 
                    href="https://housing.az.gov/" 
                    target="_blank" 
                    rel="dofollow noopener noreferrer"
                    className="text-[#10b981] hover:underline font-medium"
                  >
                    Arizona Department of Housing
                  </a>
                  {' '}- State housing programs and assistance
                </li>
                <li>
                  <a 
                    href="https://www.azhousing.gov/" 
                    target="_blank" 
                    rel="dofollow noopener noreferrer"
                    className="text-[#10b981] hover:underline font-medium"
                  >
                    Arizona Housing Finance Authority
                  </a>
                  {' '}- Down payment assistance and first-time homebuyer programs
                </li>
                <li>
                  <a 
                    href="https://azre.gov/" 
                    target="_blank" 
                    rel="dofollow noopener noreferrer"
                    className="text-[#10b981] hover:underline font-medium"
                  >
                    Arizona Department of Real Estate
                  </a>
                  {' '}- Licensed real estate professionals and consumer protection
                </li>
                <li>
                  <a 
                    href="https://www.azmag.gov/" 
                    target="_blank" 
                    rel="dofollow noopener noreferrer"
                    className="text-[#10b981] hover:underline font-medium"
                  >
                    Maricopa Association of Governments
                  </a>
                  {' '}- Regional planning and demographic data for Phoenix metro
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Loan Programs Section */}
        <div className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">
              Arizona Mortgage Loan Programs
            </h2>
            <p className="text-gray-600 mb-8">
              Explore our comprehensive range of mortgage solutions designed specifically for Arizona homebuyers 
              and homeowners. Click each section to learn more and find the right loan for your needs.
            </p>

            <Accordion.Root type="single" collapsible className="space-y-4">
              {/* Purchase Loans Accordion */}
              <Accordion.Item value="purchase" className="bg-white rounded-lg shadow-sm overflow-hidden">
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors group">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#10b981] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Home className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#003366] mb-1">Arizona Home Purchase Loans</h3>
                        <p className="text-gray-600 text-sm">Find the perfect financing for your Arizona dream home</p>
                      </div>
                    </div>
                    <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-6 pb-6 pt-2">
                  <p className="text-gray-700 mb-4">
                    Buying a home in Arizona? We offer a full suite of purchase loan programs tailored to different 
                    buyer profiles, from first-timers to luxury home buyers. Our Arizona home purchase loans include 
                    low down payment options, flexible credit requirements, and competitive rates across all price ranges.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <Link 
                      to="/az/buyers/first-time-homebuyers"
                      className="flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                    >
                      <span className="font-medium text-gray-900">First-Time Homebuyer Programs</span>
                      <ChevronDown className="w-4 h-4 text-[#10b981] -rotate-90 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link 
                      to="/az/buyers/fha-loan"
                      className="flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                    >
                      <span className="font-medium text-gray-900">FHA Home Loans</span>
                      <ChevronDown className="w-4 h-4 text-[#10b981] -rotate-90 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link 
                      to="/az/buyers/conventional-mortgage"
                      className="flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                    >
                      <span className="font-medium text-gray-900">Conventional Mortgages</span>
                      <ChevronDown className="w-4 h-4 text-[#10b981] -rotate-90 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link 
                      to="/az/buyers/va-loan-purchase"
                      className="flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                    >
                      <span className="font-medium text-gray-900">VA Home Loans</span>
                      <ChevronDown className="w-4 h-4 text-[#10b981] -rotate-90 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link 
                      to="/az/buyers/usda-loan"
                      className="flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                    >
                      <span className="font-medium text-gray-900">USDA Rural Home Loans</span>
                      <ChevronDown className="w-4 h-4 text-[#10b981] -rotate-90 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link 
                      to="/az/buyers/jumbo-loan"
                      className="flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                    >
                      <span className="font-medium text-gray-900">Jumbo Home Loans</span>
                      <ChevronDown className="w-4 h-4 text-[#10b981] -rotate-90 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Accordion.Content>
              </Accordion.Item>

              {/* Refinance Loans Accordion */}
              <Accordion.Item value="refinance" className="bg-white rounded-lg shadow-sm overflow-hidden">
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors group">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#003366] rounded-lg flex items-center justify-center flex-shrink-0">
                        <RefreshCw className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#003366] mb-1">Arizona Mortgage Refinance</h3>
                        <p className="text-gray-600 text-sm">Lower your rate, reduce payments, or tap into equity</p>
                      </div>
                    </div>
                    <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-6 pb-6 pt-2">
                  <p className="text-gray-700 mb-4">
                    Arizona homeowners can benefit from refinancing to secure lower interest rates, reduce monthly payments, 
                    shorten loan terms, or access home equity for improvements and debt consolidation. We offer streamlined 
                    refinance options that minimize paperwork and closing costs, as well as full documentation refinances 
                    for cash-out scenarios.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <Link 
                      to="/az/refi/refinance-my-mortgage"
                      className="flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                    >
                      <span className="font-medium text-gray-900">Conventional Refinance</span>
                      <ChevronDown className="w-4 h-4 text-[#10b981] -rotate-90 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link 
                      to="/az/refi/refinance-fha-mortgage"
                      className="flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                    >
                      <span className="font-medium text-gray-900">FHA Streamline Refinance</span>
                      <ChevronDown className="w-4 h-4 text-[#10b981] -rotate-90 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link 
                      to="/az/refi/refinance-my-jumbo"
                      className="flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                    >
                      <span className="font-medium text-gray-900">Jumbo Refinance</span>
                      <ChevronDown className="w-4 h-4 text-[#10b981] -rotate-90 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link 
                      to="/az/va-loans/va-refinance"
                      className="flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                    >
                      <span className="font-medium text-gray-900">VA Streamline (IRRRL)</span>
                      <ChevronDown className="w-4 h-4 text-[#10b981] -rotate-90 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Accordion.Content>
              </Accordion.Item>

              {/* HELOC Accordion */}
              <Accordion.Item value="heloc" className="bg-white rounded-lg shadow-sm overflow-hidden">
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors group">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#10b981] rounded-lg flex items-center justify-center flex-shrink-0">
                        <PiggyBank className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#003366] mb-1">Home Equity Loans & HELOCs</h3>
                        <p className="text-gray-600 text-sm">Access your Arizona home's equity for any purpose</p>
                      </div>
                    </div>
                    <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-6 pb-6 pt-2">
                  <p className="text-gray-700 mb-4">
                    Arizona's growing home values create opportunities to tap into your equity for home improvements, 
                    debt consolidation, education expenses, or other financial goals. Choose from fixed-rate home equity 
                    loans or flexible home equity lines of credit (HELOCs) with competitive rates and terms designed for 
                    Arizona homeowners.
                  </p>
                  <Link 
                    to="/az/heloc"
                    className="inline-flex items-center justify-between px-6 py-4 bg-[#10b981] text-white rounded-lg hover:bg-[#0ea270] transition-colors group"
                  >
                    <span className="font-medium">Explore Arizona HELOC Options</span>
                    <ChevronDown className="w-4 h-4 -rotate-90 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-gradient-to-r from-[#003366] to-[#1e40af] rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Whether you're buying, refinancing, or tapping into your home's equity, our Arizona mortgage experts 
                are here to guide you through every step with personalized service and competitive rates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/prequal"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#10b981] text-white rounded-lg hover:bg-[#0ea270] transition-colors font-semibold"
                >
                  Get Pre-Qualified Now
                </Link>
                <a
                  href="tel:3215550199"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#003366] rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Call (321) 555-0199
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
