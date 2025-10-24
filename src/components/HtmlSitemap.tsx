import React from 'react';
import { Link } from 'react-router-dom';

export function HtmlSitemap() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-[#003366] to-[#1e40af] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Sitemap</h1>
          <p className="text-white/80">Navigate our complete website directory</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div>
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Main Pages</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[#10b981] hover:underline">Home</Link>
              </li>
              <li>
                <a href="https://tinyurl.com/42xx3hzu" target="_blank" rel="noopener noreferrer" className="text-[#10b981] hover:underline">Apply Online</a>
              </li>
              <li>
                <a href="https://mortgagegenius.morty.com/login" target="_blank" rel="noopener noreferrer" className="text-[#10b981] hover:underline">Client Login</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Purchase Loans</h2>
            <ul className="space-y-2">
              <li className="text-gray-600">General Information (Coming Soon)</li>
              <li className="text-gray-600">FHA Loans (Coming Soon)</li>
              <li className="text-gray-600">VA Loans (Coming Soon)</li>
              <li className="text-gray-600">Conventional Loans (Coming Soon)</li>
              <li className="text-gray-600">Jumbo Loans (Coming Soon)</li>
              <li className="text-gray-600">USDA Loans (Coming Soon)</li>
              <li className="text-gray-600">First Time Homebuyers (Coming Soon)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Refinance Loans</h2>
            <ul className="space-y-2">
              <li className="text-gray-600">General Information (Coming Soon)</li>
              <li className="text-gray-600">Conventional Refinance (Coming Soon)</li>
              <li className="text-gray-600">VA Streamline (Coming Soon)</li>
              <li className="text-gray-600">FHA Streamline (Coming Soon)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Other Services</h2>
            <ul className="space-y-2">
              <li className="text-gray-600">HELOC (Coming Soon)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Resources</h2>
            <ul className="space-y-2">
              <li className="text-gray-600">Blog articles are accessible from the homepage</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Legal & Compliance</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-[#10b981] hover:underline">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-[#10b981] hover:underline">Terms of Service</Link>
              </li>
              <li>
                <Link to="/equal-housing-opportunity" className="text-[#10b981] hover:underline">Equal Housing Opportunity</Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-[#10b981] hover:underline">Sitemap</Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#003366] mb-3">Need Help?</h3>
            <p className="text-gray-700 mb-4">
              If you can't find what you're looking for, please contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:3215550199" 
                className="inline-flex items-center justify-center px-6 py-3 bg-[#10b981] text-white rounded-lg hover:bg-[#0ea270] transition-colors"
              >
                Call (321) 555-0199
              </a>
              <a 
                href="https://tinyurl.com/42xx3hzu" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#003366] text-[#003366] rounded-lg hover:bg-[#003366] hover:text-white transition-colors"
              >
                Start Your Application
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
