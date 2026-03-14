import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Work4U Services privacy policy - how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-gray max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm">Last updated: March 2025</p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, including your name, email address, phone number, Aadhar number (for helper verification), college details, and service preferences. We also collect information about your usage of our platform.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide, maintain, and improve our services</li>
              <li>Match service seekers with appropriate student helpers</li>
              <li>Verify the identity of student helpers through Aadhar verification</li>
              <li>Communicate with you about services, updates, and support</li>
              <li>Ensure the safety and security of our platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Information Sharing</h2>
            <p>We share your contact information only with matched helpers or service seekers as necessary to fulfill service requests. We do not sell your personal information to third parties. Your Aadhar number is used solely for verification purposes and is stored securely.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">4. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption of sensitive data, secure server infrastructure, and regular security audits.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">5. Your Rights</h2>
            <p>You have the right to access, update, or delete your personal information at any time. You can do this through your profile settings or by contacting us at info@work4u.com.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">6. Cookies</h2>
            <p>We use essential cookies to maintain your session and preferences. We do not use third-party tracking cookies.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">7. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p>Email: <a href="mailto:info@work4u.com" className="text-primary hover:underline">info@work4u.com</a></p>
            <p>Phone: <a href="tel:+918421502803" className="text-primary hover:underline">+91 84215 02803</a></p>
            <p>Address: Shrivardhan, Ganesh Nagar, Galli number 2, New Sanghavi, Pimpri-Chinchwad, Maharashtra 411027</p>
          </section>
        </div>
      </div>
    </div>
  );
}
