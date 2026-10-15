import Footer from '../components/Footer';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for the VAWE Institute website and mobile application. Explains what information we collect, how we use and share it, how long we retain it, and how you can request its deletion.',
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | VAWE Institute',
    description:
      'Privacy Policy for the VAWE Institute website and mobile application.',
    type: 'website',
    url: 'https://vaweinstitute.com/privacy-policy',
    siteName: 'VAWE Institute',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
        <section className="relative py-16 sm:py-20 bg-gradient-to-br from-[#4facfe] to-[#00f2fe] text-white text-center px-4">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 max-w-3xl mx-auto px-2 sm:px-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Privacy Policy</h1>
            <p className="text-sm text-white/80">Last updated: October 15, 2026</p>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4">
          <article className="max-w-3xl mx-auto bg-white/90 border border-gray-100 shadow-lg rounded-3xl p-6 sm:p-10 text-gray-600 leading-relaxed space-y-8">
            <p>
              VAWE Institutes Pvt. Ltd (“VAWE Institute”, “we”, “us”) provides software training, certifications, internships, and placement support in Vijayawada, Andhra Pradesh, India.
            </p>
            <p>
              This Privacy Policy applies to our website, https://vaweinstitute.com, and our VAWE Institute mobile application. It explains what information we collect, how we use and share it, how long we retain it, and how you can request its deletion.
            </p>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">1. Information We Collect</h2>
              <p className="mb-3">Depending on how you use our website or app, we may collect:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-semibold text-gray-800">Personal information:</span> Name, email address, phone number, date of birth, and address.</li>
                <li><span className="font-semibold text-gray-800">Education information:</span> Institution, qualification, field of study, preferred course, learning goals, and enrollment details.</li>
                <li><span className="font-semibold text-gray-800">Messages:</span> Contact form submissions and support requests.</li>
                <li><span className="font-semibold text-gray-800">Technical information:</span> IP address, device type, operating system, browser or app version, pages or screens viewed, and visit timestamps.</li>
              </ul>
              <p className="mt-3">
                We do not intentionally collect payment card or bank account details through our website or app forms. App stores may process download-related information under their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">2. How We Use Information</h2>
              <p>
                We use information to respond to inquiries, process enrollment, deliver courses and related services, provide training and placement support, communicate about requested services, maintain security, improve our website and programs, and meet legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">3. How We Share Information</h2>
              <p>
                We do not sell personal information. We may share information with authorized VAWE Institute staff and trainers, service providers who help operate our website or app, and government authorities when legally required or necessary to protect rights and safety.
              </p>
              <p className="mt-3">
                Service providers are authorized to process information as needed to provide services to us.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">4. Cookies and App Permissions</h2>
              <p>
                Our website may use operational cookies to support website functionality and remember basic preferences. We do not use cookies or mobile advertising IDs for cross-app or cross-site advertising tracking.
              </p>
              <p className="mt-3">
                Our app requires an internet connection to provide its services. We do not request access to contacts, camera, microphone, photos, precise location, or SMS unless a future feature requires it and the relevant permissions and disclosures are updated.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">5. Data Retention and Security</h2>
              <p>
                We retain inquiry information for the time needed to respond and for a limited period afterward. Enrollment and training records are retained for the duration of the relevant services and as required by applicable law.
              </p>
              <p className="mt-3">
                We use access restrictions and HTTPS to help protect information. No method of electronic storage or transmission is completely secure.
              </p>
            </section>

            <section id="account-deletion" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">6. Data Deletion Requests</h2>
              <p>
                You can request access to, correction of, or deletion of your personal information by emailing{' '}
                <a href="mailto:vawe.info@gmail.com" className="text-blue-600 hover:underline">vawe.info@gmail.com</a>{' '}
                with the subject <span className="font-semibold text-gray-800">Delete my data</span>.
              </p>
              <p className="mt-3">
                Include your name, email address, and phone number associated with your records so we can identify them. We aim to confirm and process deletion requests within 30 days, subject to legal retention requirements.
              </p>
              <p className="mt-3">
                This page is publicly accessible and does not require an account login. It serves as our data deletion request page for app-store purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">7. Your Rights</h2>
              <p>
                You may request a copy of your information, correction of inaccurate information, deletion of eligible information, or cessation of course-related communications. Where processing relies on consent, you may withdraw that consent, subject to applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">8. Children</h2>
              <p>
                Our services are intended for students and working professionals and are not directed at children under 13. We do not knowingly collect personal information from children under 13 without appropriate consent. Parents or guardians may contact us to request deletion of such information.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">9. International Processing</h2>
              <p>
                We primarily process information in India. Our hosting and email providers may process information in other countries when necessary to provide services.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">10. Changes to This Policy</h2>
              <p>
                We may update this policy when our services or legal requirements change. The latest version will be published on this page.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">11. Contact Us</h2>
              <ul className="space-y-2 text-gray-700">
                <li><span className="font-semibold text-gray-800">Developer:</span> VAWE Institutes Pvt. Ltd</li>
                <li>
                  <span className="font-semibold text-gray-800">Email:</span>{' '}
                  <a href="mailto:vawe.info@gmail.com" className="text-blue-600 hover:underline">vawe.info@gmail.com</a>
                </li>
                <li>
                  <span className="font-semibold text-gray-800">Phone:</span>{' '}
                  <a href="tel:+918885103333" className="text-blue-600 hover:underline">+91 8885103333</a>
                </li>
                <li><span className="font-semibold text-gray-800">Location:</span> Vijayawada, Andhra Pradesh, India</li>
              </ul>
              <p className="mt-3">
                For privacy questions, access requests, corrections, or deletion requests, contact us using the details above.
              </p>
            </section>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
