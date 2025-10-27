/**
 * ============================================================================
 * PRIVACY POLICY PAGE - TIER 2
 * ============================================================================
 * Purpose: Legal requirement for websites collecting user data
 * Required for: GDPR, CCPA, and licensed financial services
 * 
 * IMPORTANT FOR LICENSED BANKER:
 * - This is a TEMPLATE - you MUST review with your compliance team
 * - Update all [BRACKETED] sections with your actual information
 * - Have your legal counsel review before publishing
 * - Update "Last Updated" date when you make changes
 * 
 * What to customize:
 * 1. Company name and contact information
 * 2. Data collection practices
 * 3. Third-party services used
 * 4. Cookie policy details
 * 5. State-specific requirements (CA, AZ, TX, FL)
 * 
 * ============================================================================
 */

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#003366] to-[#1e40af] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-white/80">Last Updated: January 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mortgage Genius ("we," "us," or "our") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your 
              information when you visit our website www.mortgagegenius.pro or use our services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a licensed mortgage broker (NMLS #2280851), we are subject to strict federal and 
              state regulations regarding the protection of consumer financial information, including 
              the Gramm-Leach-Bliley Act (GLBA) and state privacy laws.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Name, email address, phone number</li>
              <li>Mailing address and state of residence</li>
              <li>Social Security Number (for loan applications)</li>
              <li>Employment and income information</li>
              <li>Credit history and financial information</li>
              <li>Property information and loan preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you visit our website, we automatically collect certain information:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>IP address and browser type</li>
              <li>Operating system and device information</li>
              <li>Pages viewed and time spent on pages</li>
              <li>Referring website and search terms</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Processing and underwriting mortgage loan applications</li>
              <li>Providing customer service and responding to inquiries</li>
              <li>Communicating about your loan status and updates</li>
              <li>Sending marketing communications (with your consent)</li>
              <li>Improving our website and services</li>
              <li>Complying with legal and regulatory requirements</li>
              <li>Preventing fraud and protecting security</li>
              <li>Analyzing website usage and trends</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Information Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Lenders and Investors:</strong> To process your loan application</li>
              <li><strong>Credit Bureaus:</strong> To obtain credit reports and verify information</li>
              <li><strong>Service Providers:</strong> Third parties who perform services on our behalf 
                  (e.g., title companies, appraisers, attorneys)</li>
              <li><strong>Government Agencies:</strong> As required by law or regulatory requirements</li>
              <li><strong>Business Partners:</strong> With your consent for specific purposes</li>
              <li><strong>Legal Requirements:</strong> To comply with legal obligations, court orders, 
                  or government requests</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We do not sell your personal information to third parties.
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide personalized content and advertising</li>
              <li>Improve website functionality and user experience</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can control cookies through your browser settings. However, disabling cookies may 
              affect your ability to use certain features of our website.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We use Google Analytics to track website usage. For more information about Google's 
              privacy practices, visit <a href="https://policies.google.com/privacy" className="text-[#10b981] hover:underline">
              Google Privacy Policy</a>.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your information, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Secure server infrastructure and firewalls</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Employee training on data protection practices</li>
              <li>Access controls and authentication measures</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              However, no method of transmission over the internet is 100% secure. While we strive 
              to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Your Privacy Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your information (subject to legal requirements)</li>
              <li><strong>Opt-Out:</strong> Opt out of marketing communications</li>
              <li><strong>California Residents:</strong> Additional rights under CCPA (see below)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              To exercise these rights, contact us at [privacy@mortgagegenius.pro] or (321) 555-0199.
            </p>
          </section>

          {/* California Privacy Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">California Privacy Rights (CCPA)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              California residents have additional rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Right to know what personal information is collected</li>
              <li>Right to know if personal information is sold or disclosed</li>
              <li>Right to opt-out of the sale of personal information</li>
              <li>Right to request deletion of personal information</li>
              <li>Right to non-discrimination for exercising privacy rights</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We do not sell personal information. To submit a request, call 1-800-XXX-XXXX or 
              email [privacy@mortgagegenius.pro].
            </p>
          </section>

          {/* GLBA Notice */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Gramm-Leach-Bliley Act (GLBA) Notice</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a financial institution, we are required to provide you with this notice about our 
              privacy practices. We collect nonpublic personal information about you from:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Information we receive from you on applications or other forms</li>
              <li>Information about your transactions with us or others</li>
              <li>Information we receive from consumer reporting agencies</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We do not disclose nonpublic personal information about our customers or former customers 
              to anyone, except as permitted or required by law.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not directed to individuals under 18. We do not knowingly collect 
              personal information from children. If you believe we have collected information from 
              a child, please contact us immediately.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy periodically. We will notify you of material changes 
              by posting the updated policy on our website with a new "Last Updated" date. Your 
              continued use of our services constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or our privacy practices, contact us:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-800 font-semibold mb-2">Mortgage Genius</p>
              <p className="text-gray-700">123 Main Street</p>
              <p className="text-gray-700">Tampa, FL 33601</p>
              <p className="text-gray-700 mt-3">Phone: (321) 555-0199</p>
              <p className="text-gray-700">Email: privacy@mortgagegenius.pro</p>
              <p className="text-gray-700 mt-3">NMLS #2280851</p>
            </div>
          </section>

          {/* Compliance Notice */}
          <div className="bg-blue-50 border-l-4 border-[#003366] p-6 mt-8">
            <p className="text-sm text-gray-700 italic">
              <strong>Compliance Notice:</strong> This privacy policy is a template and must be 
              reviewed by your legal counsel and compliance team before publication. As a licensed 
              mortgage banker, you are subject to federal and state regulations that may require 
              additional disclosures or specific language. Consult with your attorney to ensure 
              full compliance with all applicable laws.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
