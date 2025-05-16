import React from "react";
import {
  FaFileContract,
  FaEdit,
  FaUserShield,
  FaTimesCircle,
  FaEnvelope,
} from "react-icons/fa";

export default function Termuse() {
  return (
    <div>
      <h1 className="text-3xl font-bold py-14 text-center sticky top-0 bg-white">
        Buildio.com Terms of Use
      </h1>
      <div className="flex flex-col lg:flex-row w-full px-4  sm:px-6 lg:px-12">
        {/* Sidebar */}
          <aside className="hidden lg:block lg:w-1/4 mb-8 lg:mb-0 lg:mr-8 bg-white p-6 rounded-2xl shadow-md border border-gray-200 sticky top-35 self-start">
            <ul className="space-y-3 text-gray-700">
              <li>
                <a
                  href="#section1"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <FaFileContract className="text-blue-600 w-5 h-5" />
                  <span className="hover:text-blue-800">
                    1. Acceptance of Terms
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#section2"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <FaEdit className="text-blue-600 w-5 h-5" />
                  <span className="hover:text-blue-800">2. Modifications</span>
                </a>
              </li>
              <li>
                <a
                  href="#section3"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <FaUserShield className="text-blue-600 w-5 h-5" />
                  <span className="hover:text-blue-800">3. User Conduct</span>
                </a>
              </li>
              <li>
                <a
                  href="#section4"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <FaTimesCircle className="text-blue-600 w-5 h-5" />
                  <span className="hover:text-blue-800">4. Termination</span>
                </a>
              </li>
              <li>
                <a
                  href="#section5"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <FaEnvelope className="text-blue-600 w-5 h-5" />
                  <span className="hover:text-blue-800">5. Contact Us</span>
                </a>
              </li>
            </ul>
          </aside>

        {/* Main Content */}
        <main className="lg:w-3/4 bg-white shadow-md rounded-2xl p-6 sm:p-8">
          <section id="section1" className="mb-10">
            <h2 className="text-2xl font-semibold mb-2">
              1. Acceptance of Terms
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
              malesuada. Integer nec odio. Praesent libero. Sed cursus ante
              dapibus diam. Sed nisi...
            </p>
          </section>

          <section id="section2" className="mb-10">
            <h2 className="text-2xl font-semibold mb-2">2. Modifications</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Suspendisse potenti. Etiam faucibus cursus urna. Ut tellus. Nulla
              ut erat id mauris vulputate elementum. Nullam varius. Nulla
              facilisi. Etiam feugiat lorem non metus...
            </p>
          </section>

          <section id="section3" className="mb-10">
            <h2 className="text-2xl font-semibold mb-2">3. User Conduct</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Morbi nec metus. Curabitur gravida nisi at nibh. In hac habitasse
              platea dictumst. Aliquam erat volutpat. Nam nulla. Integer pede
              justo, lacinia eget, tincidunt eget...
            </p>
          </section>

          <section id="section4" className="mb-10">
            <h2 className="text-2xl font-semibold mb-2">4. Termination</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros
              elementum pellentesque. Quisque porta. Vivamus laoreet. Nulla
              facilisi. Cras non velit nec nisi vulputate nonummy...
            </p>
          </section>

          <section id="section5" className="mb-10">
            <h2 className="text-2xl font-semibold mb-2">5. Contact Us</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              If you have any questions about these Terms, please contact us at{" "}
              <a
                href="mailto:support@example.com"
                className="text-blue-600 underline"
              >
                support@example.com
              </a>
              . Further inquiries about data handling, privacy practices, and
              agreement modifications should be addressed in writing...
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
