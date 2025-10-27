/**
 * ============================================================================
 * TERMS OF SERVICE PAGE - TIER 2
 * ============================================================================
 * Purpose: Legal agreement between you and website users
 * Required for: Professional websites, especially financial services
 * 
 * IMPORTANT FOR LICENSED BANKER:
 * - This is a TEMPLATE - you MUST review with your legal counsel
 * - Update all [BRACKETED] sections with your actual information
 * - Mortgage lending has specific disclosure requirements
 * - State laws may require additional terms (AZ, TX, FL)
 * 
 * ============================================================================
 */

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#003366] to-[#1e40af] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-white/80">Last Updated: January 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms of Service ("Terms") constitute a legally binding agreement between you 
              and Mortgage Genius, NMLS #2280851 ("Company," "we," "us," or "our") concerning your 
              access to and use of the www.mortgagegenius.pro website and our mortgage lending services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using our website, you agree to be bound by these Terms. If you do not 
              agree to these Terms, you may not access or use our services.
            </p>
          </section>

          {/* Eligibility */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Eligibility</h2>
            <p className="text-gray-700 leading-relaxed">
              You must be at least 18 years old and legally capable of entering into binding contracts 
              to use our services. By using our website, you represent and warrant that you meet these 
              eligibility requirements.
            </p>
          </section>

          {/* Services Description */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Services Description</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mortgage Genius provides mortgage brokerage services, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Mortgage loan origination and brokerage</li>
              <li>Pre-qualification and pre-approval services</li>
              <li>Loan application processing and submission</li>
              <li>Educational resources and calculators</li>
              <li>Consultation and advisory services</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We are licensed to conduct business in Arizona, Texas, and Florida. Services may not 
              be available in all areas or for all loan types.
            </p>
          </section>

          {/* No Commitment to Lend */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Not a Commitment to Lend</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-4">
              <p className="text-gray-800 font-semibold mb-2">Important Notice</p>
              <p className="text-gray-700 leading-relaxed">
                Information provided on this website, including pre-qualification and rate estimates, 
                does NOT constitute a commitment to lend, a loan approval, or a guarantee of loan terms. 
                All loans are subject to credit approval, property appraisal, and underwriting review.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Rates, programs, and terms are subject to change without notice. The information provided 
              is for educational and informational purposes only and should not be construed as financial advice.
            </p>
          </section>

          {/* User Obligations */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">User Obligations</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When using our services, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Provide accurate, complete, and truthful information</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Comply with all applicable federal, state, and local laws</li>
              <li>Not use our services for fraudulent or illegal purposes</li>
              <li>Not interfere with or disrupt our website or services</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
              <li>Not transmit viruses, malware, or harmful code</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Intellectual Property Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content on this website, including text, graphics, logos, images, software, and 
              other materials (collectively, "Content"), is the property of Mortgage Genius or its 
              licensors and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You may not reproduce, distribute, modify, create derivative works of, publicly display, 
              or exploit any Content without our prior written permission.
            </p>
          </section>

          {/* Calculators and Tools */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Calculators and Estimates</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website may provide mortgage calculators and other tools to help estimate payments, 
              affordability, and other loan-related information. These tools are provided for 
              informational purposes only and:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Are not guaranteed to be accurate or complete</li>
              <li>Should not be relied upon as professional financial advice</li>
              <li>May not reflect all fees, taxes, or insurance costs</li>
              <li>Do not constitute a loan offer or approval</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Consult with a licensed mortgage professional for personalized advice.
            </p>
          </section>

          {/* Third-Party Links */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Third-Party Links and Services</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites or services that are not owned 
              or controlled by Mortgage Genius. We are not responsible for the content, privacy 
              policies, or practices of third-party websites. You acknowledge and agree that we shall 
              not be liable for any damage or loss caused by your use of third-party services.
            </p>
          </section>

          {/* Disclaimers */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Disclaimers</h2>
            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-4">
              <p className="text-gray-700 leading-relaxed mb-3">
                OUR WEBSITE AND SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT 
                WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO 
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
              <p className="text-gray-700 leading-relaxed">
                WE DO NOT WARRANT THAT OUR WEBSITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF 
                VIRUSES OR OTHER HARMFUL COMPONENTS.
              </p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, MORTGAGE GENIUS SHALL NOT BE LIABLE FOR:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, revenue, data, or business opportunities</li>
              <li>Damages resulting from use or inability to use our services</li>
              <li>Damages resulting from errors, omissions, or inaccuracies in content</li>
              <li>Damages resulting from unauthorized access to your information</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Our total liability to you for any claims arising from your use of our services shall 
              not exceed the amount you paid us in the 12 months preceding the claim.
            </p>
          </section>

          {/* Indemnification */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify, defend, and hold harmless Mortgage Genius and its officers, 
              directors, employees, and agents from any claims, damages, losses, liabilities, and 
              expenses (including attorney's fees) arising from:
            </p>
            <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
              <li>Your use of our website or services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Information you provide to us</li>
            </ul>
          </section>

          {/* Governing Law */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Governing Law and Dispute Resolution</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the 
              State of [Florida], without regard to its conflict of law provisions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Any disputes arising from these Terms or your use of our services shall be resolved 
              through binding arbitration in accordance with the rules of the American Arbitration 
              Association, except that either party may seek injunctive relief in court.
            </p>
          </section>

          {/* Modifications */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Modifications to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify you of material 
              changes by posting the updated Terms on our website with a new "Last Updated" date. 
              Your continued use of our services after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          {/* Severability */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Severability</h2>
            <p className="text-gray-700 leading-relaxed">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining 
              provisions shall continue in full force and effect.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about these Terms, contact us:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-800 font-semibold mb-2">Mortgage Genius</p>
              <p className="text-gray-700">Michael George, NMLS #2280851</p>
              <p className="text-gray-700">123 Main Street</p>
              <p className="text-gray-700">Tampa, FL 33601</p>
              <p className="text-gray-700 mt-3">Phone: (321) 555-0199</p>
              <p className="text-gray-700">Email: info@mortgagegenius.pro</p>
            </div>
          </section>

          {/* Legal Notice */}
          <div className="bg-blue-50 border-l-4 border-[#003366] p-6 mt-8">
            <p className="text-sm text-gray-700 italic">
              <strong>Legal Notice:</strong> This Terms of Service is a template and must be reviewed 
              by your legal counsel before publication. Mortgage lending is a highly regulated industry 
              with specific disclosure requirements. Consult with an attorney specializing in financial 
              services to ensure compliance with all federal and state laws, including TILA, RESPA, 
              and state licensing requirements for Arizona, Texas, and Florida.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
