import React from "react";

export default function Pricavypolicy() {
  return (
    <div>
      <h1 className="text-3xl font-bold py-14 text-center sticky top-0 bg-white">
        Buildio.com Terms of Use
      </h1>
      <div className=" bg-gray-50 p-6 md:p-12 text-gray-800 lg:flex-row w-full px-4  sm:px-6 lg:px-12">
        <div className=" mx-auto bg-white p-8 rounded-2xl shadow-md">
          <p className="mb-4">
            Your privacy is important to us. This privacy policy outlines how we
            handle your personal information when you use our drag-and-drop
            website building platform, similar to services like WordPress and
            Wix.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            We collect information you provide when you register, build
            websites, upload content, or contact support. This includes your
            name, email address, website data, and usage behavior within the
            platform.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            2. How We Use Information
          </h2>
          <p className="mb-4">
            The data we collect helps us personalize your experience, improve
            our platform's functionality, provide customer support, and send
            important updates or marketing communications (with your consent).
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            3. Data Protection
          </h2>
          <p className="mb-4">
            We implement industry-standard security measures such as encryption,
            firewalls, and access controls to ensure your website content and
            personal information remain secure and protected against
            unauthorized access.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            4. Third-Party Services
          </h2>
          <p className="mb-4">
            Our platform may integrate with third-party plugins or services
            (e.g., payment gateways, analytics tools). These third parties have
            their own privacy policies, and we encourage you to review them. We
            only partner with compliant and trusted services.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">5. Your Choices</h2>
          <p className="mb-4">
            You have control over your data. You can edit your profile, delete
            your websites, opt out of marketing communications, or request data
            deletion. Our platform provides easy-to-use tools for managing these
            settings.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">6. Contact Us</h2>
          <p>
            If you have any questions or concerns regarding your privacy, data
            usage, or this policy, feel free to contact us at{" "}
            <a
              href="mailto:privacy@example.com"
              className="text-blue-600 hover:underline"
            >
              privacy@example.com
            </a>
            . We're here to help.
          </p>
        </div>
      </div>
    </div>
  );
}
