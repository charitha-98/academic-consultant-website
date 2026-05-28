import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Academic Consultant',
  description: 'Privacy Policy and Terms of Service for Academic Consultant services.',
};

export default function PolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-6 sm:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12">
        
        {/* Header */}
        <div className="border-b border-slate-100 pb-6 mb-8">
          <h1 className="text-3xl font-serif font-bold text-blue-900 mb-2">Privacy Policy & Terms</h1>
          <p className="text-sm text-slate-500">Last Updated: May 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
          
          <section>
            <h2 className="text-lg font-bold text-blue-900 mb-2">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us when requesting academic consultation, such as your name, email address, phone number, and any academic documents or assignment details you share for evaluation.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-blue-900 mb-2">2. Client Confidentiality</h2>
            <p className="font-medium text-slate-800">
              Strict Confidentiality Guarantee: We understand the sensitive nature of academic assistance. All research materials, guidelines, and personal details provided by the client will remain 100% confidential and will never be shared with any third party, university, or institution.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-blue-900 mb-2">3. How We Use Your Information</h2>
            <p>We use the collected information solely to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Provide accurate academic guidance and consultancy services.</li>
              <li>Communicate updates regarding your requests via WhatsApp or Email.</li>
              <li>Improve our website performance and user experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-blue-900 mb-2">4. Originality and Plagiarism Policy</h2>
            <p>
              All consultation materials, reference guides, and outlines provided are intended solely for educational and research purposes. Clients are expected to maintain academic integrity and use the reference materials responsibly in accordance with their respective institutional policies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-blue-900 mb-2">5. Data Security</h2>
            <p>
              We implement industry-standard security measures to safeguard your personal documents from unauthorized access or disclosure. Once the consultation project is successfully completed, sensitive materials are safely archived or permanently deleted upon request.
            </p>
          </section>

          <section className="border-t border-slate-100 pt-6">
            <h2 className="text-lg font-bold text-blue-900 mb-2">Contact Us</h2>
            <p>If you have any questions regarding this privacy policy, feel free to reach out:</p>
            <div className="mt-3 text-blue-600 font-semibold">
              <p>📧 Email: contact@academicconsultant.com</p>
              <p>💬 WhatsApp: +94 7X XXX XXXX</p>
            </div>
          </section>

        </div>

        {/* Back Button */}
        <div className="mt-10 pt-6 border-t border-slate-100 text-center">
          <Link href="/" className="text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline">
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}