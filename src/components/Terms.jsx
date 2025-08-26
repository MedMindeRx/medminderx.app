import React from "react";

const Terms = () => (
  <section className="terms" id="terms">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Terms and Conditions</h2>

      <p className="text-sm text-gray-600 mb-6 leading-relaxed">
        These Terms and Conditions (“Terms”) govern your use of the MedMindeRx mobile
        application (“App”). By using the App, you agree to these Terms.
      </p>

      <h3 className="text-lg font-semibold mb-2 text-gray-700">1. Use of the App</h3>
      <ul className="list-disc list-inside pl-6 space-y-1 text-xs text-gray-600">
        <li>The App provides medicine reminder notifications for personal use.</li>
        <li>You must provide accurate information when creating an account.</li>
        <li>You are responsible for the medicines and schedules you enter.</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-700">2. No Medical Advice</h3>
      <ul className="list-disc list-inside pl-6 space-y-1 text-xs text-gray-600">
        <li>MedMindeRx is a reminder tool only.</li>
        <li>It does not provide medical advice or replace a doctor’s instructions.</li>
        <li>Always consult a healthcare professional for medical guidance.</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-700">3. User Responsibilities</h3>
      <ul className="list-disc list-inside pl-6 space-y-1 text-xs text-gray-600">
        <li>Use the App lawfully and responsibly.</li>
        <li>Do not misuse, hack, or attempt to disrupt the App.</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-700">4. Notifications</h3>
      <ul className="list-disc list-inside pl-6 space-y-1 text-xs text-gray-600">
        <li>The App relies on device notification services.</li>
        <li>We cannot guarantee delivery if your device is offline, muted, or restricted by system settings.</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-700">5. Intellectual Property</h3>
      <ul className="list-disc list-inside pl-6 space-y-1 text-xs text-gray-600">
        <li>The App, logo, and content belong to MedMindeRx.</li>
        <li>You may not copy, modify, or distribute our content without permission.</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-700">6. Limitation of Liability</h3>
      <ul className="list-disc list-inside pl-6 space-y-1 text-xs text-gray-600">
        <li>We are not liable for missed reminders, medical issues, or damages resulting from app usage.</li>
        <li>The App is provided “as is” without warranties.</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-700">7. Account Termination</h3>
      <ul className="list-disc list-inside pl-6 space-y-1 text-xs text-gray-600">
        <li>We may suspend or terminate accounts that violate these Terms.</li>
      </ul>
    </div>
  </section>
);

export default Terms;
