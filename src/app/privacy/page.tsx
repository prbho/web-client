// app/privacy/page.tsx
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Cofellow",
  description:
    "Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-white py-16 px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-gray-900 sm:text-5xl mb-4">
            Privacy Policy
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
              Cofellow ("we", "our", "us") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website{" "}
              <Link href="/" className="text-cyan-600 hover:underline">
                cofellow.com
              </Link>{" "}
              (the "Site").
            </p>
            <p className="mt-4">
              Please read this policy carefully. By using our Site, you agree to
              the collection and use of information in accordance with this
              policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              2. Information We Collect
            </h2>
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              Personal Data
            </h3>
            <p>
              While using our Site, we may ask you to provide certain personally
              identifiable information that can be used to contact or identify
              you, including:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>
                Any other information you voluntarily provide through contact
                forms
              </li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">
              Usage Data
            </h3>
            <p>
              We automatically collect certain information when you visit our
              Site, including:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited</li>
              <li>Time and date of visit</li>
              <li>Time spent on pages</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              3. How We Use Your Information
            </h2>
            <p>We use the collected data for various purposes:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>To provide and maintain our Site</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To improve our Site and services</li>
              <li>To monitor usage of our Site</li>
              <li>To detect, prevent, and address technical issues</li>
              <li>To send periodic emails (only with your consent)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              4. Cookies and Tracking Technologies
            </h2>
            <p>
              We use cookies and similar tracking technologies to track activity
              on our Site and hold certain information. Cookies are files with
              small amounts of data which may include an anonymous unique
              identifier.
            </p>
            <p className="mt-4">
              You can instruct your browser to refuse all cookies or to indicate
              when a cookie is being sent. However, if you do not accept
              cookies, you may not be able to use some portions of our Site.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              5. Data Sharing and Disclosure
            </h2>
            <p>We may share your information in the following situations:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <strong>Service Providers:</strong> With third-party companies
                and individuals to facilitate our Site ("Service Providers"),
                perform Site-related services, or assist us in analyzing how our
                Site is used
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with any
                merger, sale of company assets, financing, or acquisition of all
                or a portion of our business
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required to do so by
                law or in response to valid requests by public authorities
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              6. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal data. However, no method of transmission
              over the Internet or electronic storage is 100% secure, and we
              cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              7. Your Data Protection Rights
            </h2>
            <p>
              Depending on your location, you may have certain rights regarding
              your personal data:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <strong>Access:</strong> Request copies of your personal data
              </li>
              <li>
                <strong>Rectification:</strong> Request correction of inaccurate
                data
              </li>
              <li>
                <strong>Erasure:</strong> Request deletion of your personal data
              </li>
              <li>
                <strong>Restriction:</strong> Request restriction of processing
                your data
              </li>
              <li>
                <strong>Objection:</strong> Object to our processing of your
                data
              </li>
              <li>
                <strong>Portability:</strong> Request transfer of your data to
                another organization
              </li>
              <li>
                <strong>Withdraw Consent:</strong> Withdraw your consent at any
                time
              </li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us using the information
              below.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              8. Third-Party Links
            </h2>
            <p>
              Our Site may contain links to other websites not operated by us.
              We strongly advise you to review the privacy policy of every site
              you visit. We have no control over and assume no responsibility
              for the content, privacy policies, or practices of any third-party
              sites or services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              9. Children&apos;s Privacy
            </h2>
            <p>
              Our Site is not intended for use by children under the age of 13.
              We do not knowingly collect personally identifiable information
              from children under 13. If you are a parent or guardian and you
              are aware that your child has provided us with personal data,
              please contact us.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              10. Changes to This Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last updated" date.
            </p>
            <p className="mt-4">
              You are advised to review this Privacy Policy periodically for any
              changes. Changes are effective when they are posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              11. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us:
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
                href="mailto:privacy@cofellow.agency"
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
