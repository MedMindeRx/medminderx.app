import React from "react";

const Privacy = () => (
  <section className="privacy" id="privacy">
    <div className="container">
      <h2>Privacy Policy</h2>
      <p>
        This Privacy Policy explains how we collect, use, and protect your
        personal information when you use our mobile application (“App”).
      </p>

      <h3>1. Information We Collect</h3>
      <ul>
        <li>
          <strong>Personal Information:</strong>
          <ul>
            <li>Mobile number (for login & OTP verification)</li>
            <li>First name, last name</li>
            <li>Profile photo (optional)</li>
          </ul>
        </li>
        <li>
          <strong>App Usage Information:</strong>
          <ul>
            <li>Medicine schedules you add (medicine name, reminder time)</li>
          </ul>
        </li>
        <li>
          <strong>Permissions:</strong>
          <ul>
            <li>Notification permission (to send medicine reminders)</li>
            <li>We do not collect sensitive health data beyond the medicine reminders
        you manually add.</li>
          </ul>
        </li>
      </ul>

      <h3>2. How We Use Your Information</h3>
      <ul>
        <li>To create and manage your account.</li>
        <li>To send timely medicine reminders via notifications.</li>
        <li>To improve the app experience and provide support.</li>
        <li>We do not sell or share your information with third parties for
        marketing.</li>
      </ul>
      <h3>3. Data Storage & Security</h3>
      <ul>
        <li>Your data is stored securely on our servers.</li>
        <li>We use industry-standard encryption and security practices.</li>
        <li>
          We retain your information only as long as needed for app
          functionality.
        </li>
      </ul>

      <h3>4. Sharing of Information</h3>
      <ul>
      <li>
        We may share data only if required by law or to comply with legal
        processes.
      </li>
      </ul>

      <h3>5. Your Rights</h3>
      <ul>
        <li>You can update or delete your personal data from the app.</li>
        <li>You can disable notifications anytime in device settings.</li>
        <li>
          To request account deletion, contact us at{" "}
          <a href="mailto:[medminderx.app@gmail.com]">medminderx.app@gmail.com</a>.
        </li>
      </ul>

      <h3>6. Children’s Privacy</h3>
      <ul>
      <li>Our app is not intended for children under 13.</li>
      </ul>

      <h3>7. Changes to This Policy</h3>
      <ul>
      <li>We may update this Privacy Policy. Updates will be posted in the app.
      </li>
      </ul>
    </div>
  </section>
);

export default Privacy;
