// app/terms/page.tsx
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions | Cofellow",
  description:
    "Read our terms of service and conditions for using our website and services.",
};

export default function Page() {
  return (
    <div className="bg-white py-16 px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-gray-900 sm:text-5xl mb-4">
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="prose prose-slate max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p>
              Welcome to Cofellow (&quot;Company&quot;, &quot;we&quot;,
              &quot;our&quot;, &quot;us&quot;). These Terms and Conditions
              (&quot;Terms&quot;) govern your use of our website located at{" "}
              <Link href="/" className="text-cyan-600 hover:underline">
                cofellow.com
              </Link>{" "}
              (the &quot;Site&quot;) and our services.
            </p>
            <p className="mt-4">
              By accessing or using our Site and services, you agree to be bound
              by these Terms. If you disagree with any part of the Terms, you
              may not access the Site or use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              2. Intellectual Property
            </h2>
            <p>
              The Site and its original content, features, and functionality are
              owned by Cofellow and are protected by international copyright,
              trademark, patent, trade secret, and other intellectual property
              or proprietary rights laws.
            </p>
            <p className="mt-4">
              You may not modify, reproduce, distribute, create derivative works
              of, publicly display, or in any way exploit any of the content,
              software, or materials available on the Site without our prior
              written permission.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              3. User Responsibilities
            </h2>
            <p>When using our Site and services, you agree to:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Provide accurate and complete information when required</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Not use the Site for any illegal or unauthorized purpose</li>
              <li>Not interfere with or disrupt the Site or servers</li>
              <li>
                Not attempt to gain unauthorized access to any part of the Site
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              4. Service Terms
            </h2>
            <p>
              Our design and development services are subject to separate
              service agreements that will be provided before engagement. Some
              key terms include:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                Project timelines and deliverables will be specified in
                individual contracts
              </li>
              <li>Payment terms including deposits and final payments</li>
              <li>Revision policies and scope of work</li>
              <li>Ownership and licensing of final deliverables</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              5. Privacy Policy
            </h2>
            <p>
              Your use of the Site is also governed by our Privacy Policy, which
              explains how we collect, use, and protect your personal
              information. Please review our{" "}
              <Link href="/privacy" className="text-cyan-600 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              6. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Cofellow shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, or any loss of profits or revenues, whether
              incurred directly or indirectly, or any loss of data, use,
              goodwill, or other intangible losses resulting from:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                Your access to or use of or inability to access or use the Site
              </li>
              <li>Any conduct or content of any third party on the Site</li>
              <li>
                Any unauthorized access, use, or alteration of your
                transmissions or content
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              7. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. We will
              provide notice of any changes by posting the updated Terms on the
              Site and updating the &quot;Last updated&quot; date. Your
              continued use of the Site after any changes constitutes your
              acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              8. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of [Your Country/State], without regard to its conflict
              of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              9. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <address className="not-italic mt-4">
              {/* Cofellow Agency
              <br />
              [Your Physical Address]
              <br />
              [City, State, ZIP Code]
              <br /> */}
              Email:{" "}
              <Link
                href="mailto:legal@cofellow.agency"
                className="text-cyan-600 hover:underline">
                team@cofellow.com
              </Link>
            </address>
          </section>
        </div>
      </div>
    </div>
  );
}
