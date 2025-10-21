import React from "react";

export default function Privacy() {
  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto", padding: "0 1rem", textAlign: "left" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Privacy Policy</h1>

      <p>Last updated: October 21, 2025</p>

      <section style={{ marginBottom: "1rem" }}>
        <h2>1. Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address, and any data you provide when using our website or services.
        </p>
      </section>

      <section style={{ marginBottom: "1rem" }}>
        <h2>2. How We Use Your Information</h2>
        <p>
          Your information is used to provide and improve our services, communicate updates, and respond to inquiries. We do not sell your personal information to third parties.
        </p>
      </section>

      <section style={{ marginBottom: "1rem" }}>
        <h2>3. Cookies and Tracking</h2>
        <p>
          Our website may use cookies and similar tracking technologies to enhance your experience. You can disable cookies through your browser settings, but some features may not work properly.
        </p>
      </section>

      <section style={{ marginBottom: "1rem" }}>
        <h2>4. Data Security</h2>
        <p>
          We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or destruction.
        </p>
      </section>

      <section style={{ marginBottom: "1rem" }}>
        <h2>5. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date.
        </p>
      </section>

      <section>
        <h2>6. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us via the <a href="/contact">Contact Us</a> page.
        </p>
      </section>
    </div>
  );
}
