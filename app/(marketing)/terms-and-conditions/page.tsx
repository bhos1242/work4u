import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Work4U Services terms and conditions for using our platform.",
};

export default function TermsPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl mb-8">
          Terms & Conditions
        </h1>

        <div className="prose prose-gray max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm">Last updated: March 2025</p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using Work4U Services (&ldquo;the Platform&rdquo;), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">2. Service Description</h2>
            <p>Work4U Services is a platform that connects individuals seeking home services with verified student helpers in Pune, India. We facilitate the connection but are not a party to the service agreement between the service seeker and the helper.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">3. User Accounts</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>You must provide accurate and complete information during registration</li>
              <li>You are responsible for maintaining the confidentiality of your account</li>
              <li>You must be at least 18 years old to create an account</li>
              <li>Student helpers must provide valid Aadhar card and college ID for verification</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">4. Service Posting</h2>
            <p>When posting a work requirement, you agree to provide accurate details about the service needed, budget, and schedule. Misleading or fraudulent postings will result in account suspension.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">5. Payment</h2>
            <p>Payment for services is agreed upon between the service seeker and the helper. Work4U does not process payments between users. We recommend paying only after satisfactory completion of the task.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">6. Code of Conduct</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Treat all users with respect and dignity</li>
              <li>Do not engage in harassment, discrimination, or inappropriate behavior</li>
              <li>Do not share personal information of other users without consent</li>
              <li>Report any safety concerns to Work4U immediately</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">7. Limitation of Liability</h2>
            <p>Work4U Services acts as a platform facilitator. We are not liable for any damages, losses, or injuries arising from services provided by helpers. We strongly recommend verifying helper credentials and maintaining communication through the platform.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">8. Termination</h2>
            <p>We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent activity. Users may delete their accounts at any time by contacting support.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">9. Contact</h2>
            <p>For questions about these Terms, contact us at:</p>
            <p>Email: <a href="mailto:info@work4u.com" className="text-primary hover:underline">info@work4u.com</a></p>
            <p>Phone: <a href="tel:+918421502803" className="text-primary hover:underline">+91 84215 02803</a></p>
          </section>
        </div>
      </div>
    </div>
  );
}
