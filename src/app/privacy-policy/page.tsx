import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-black mb-8 border-b pb-4 text-blue-600">Privacy Policy</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-3">1. Information We Collect</h2>
          <p>
            At <strong>MTsTools Pro</strong>, we do not require users to register or provide personal information to use our calculators. 
            All financial inputs are processed locally in your browser and are not stored on our servers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">2. Log Files & Cookies</h2>
          <p>
            Like many other websites, we use log files. These files merely log visitors to the site – usually a standard procedure for hosting companies and a part of hosting services' analytics. 
            We use cookies to store information about visitors' preferences and to record user-specific information.
          </p>
        </section>

        <section className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600">
          <h2 className="text-2xl font-bold mb-3">3. Google DoubleClick DART Cookie</h2>
          <p>
            Google is one of the third-party vendors on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our website and other sites on the internet. 
            You may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">4. Advertising Partners</h2>
          <p>
            Some of our advertisers may use cookies and web beacons. Our primary advertising partner is <strong>Google AdSense</strong>. 
            Each of our advertising partners has its own Privacy Policy for its policies on user data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">5. Consent</h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms and conditions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">6. Contact Information</h2>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through our contact page or at <strong>saeedkhan5000@gmail.com</strong>.
          </p>
        </section>
      </div>
    </main>
  );
}