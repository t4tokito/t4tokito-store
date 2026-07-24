import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main style={{ paddingTop: 'calc(var(--header-height) + var(--space-8))' }}>
        <div className="container" style={{ maxWidth: 800, padding: 'var(--space-12) var(--container-padding)' }}>
          <h1 style={{ fontSize: 'var(--text-4xl)', fontWeight: 800, marginBottom: 'var(--space-2)' }}>Terms of Service</h1>
          <p style={{ color: 'var(--fg-muted)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-8)' }}>
            Last updated: June 28, 2024
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)', color: 'var(--fg-secondary)' }}>
            <section>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--fg-primary)', marginBottom: 'var(--space-4)' }}>1. Acceptance of Terms</h2>
              <p style={{ lineHeight: 1.8 }}>
                By accessing and using t4tokito Store and downloading our applications, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--fg-primary)', marginBottom: 'var(--space-4)' }}>2. Description of Service</h2>
              <p style={{ lineHeight: 1.8 }}>
                t4tokito Store is a website that provides download links for applications developed by t4tokito. Currently, we offer TokitoTV (anime streaming) and YT Notes Maker (YouTube to notes).
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--fg-primary)', marginBottom: 'var(--space-4)' }}>3. User Responsibilities</h2>
              <p style={{ lineHeight: 1.8, marginBottom: 'var(--space-3)' }}>
                You are responsible for:
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', paddingLeft: 'var(--space-4)' }}>
                <li style={{ display: 'flex', gap: 'var(--space-2)' }}>
                  <span style={{ color: 'var(--accent-secondary)' }}>•</span>
                  Ensuring your device meets the minimum requirements for our apps
                </li>
                <li style={{ display: 'flex', gap: 'var(--space-2)' }}>
                  <span style={{ color: 'var(--accent-secondary)' }}>•</span>
                  Using the apps in compliance with applicable laws and regulations
                </li>
                <li style={{ display: 'flex', gap: 'var(--space-2)' }}>
                  <span style={{ color: 'var(--accent-secondary)' }}>•</span>
                  Not redistributing or modifying the apps without permission
                </li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--fg-primary)', marginBottom: 'var(--space-4)' }}>4. Intellectual Property</h2>
              <p style={{ lineHeight: 1.8 }}>
                The applications and their source code are released under open source licenses (MIT). You may use, modify, and distribute the code in accordance with the license terms.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--fg-primary)', marginBottom: 'var(--space-4)' }}>5. Disclaimer of Warranties</h2>
              <p style={{ lineHeight: 1.8 }}>
                Our applications are provided "as is" without warranties of any kind. We do not guarantee that the apps will be error-free or uninterrupted. Use at your own risk.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--fg-primary)', marginBottom: 'var(--space-4)' }}>6. Limitation of Liability</h2>
              <p style={{ lineHeight: 1.8 }}>
                In no event shall t4tokito be liable for any indirect, incidental, special, or consequential damages arising from the use of our applications or services.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--fg-primary)', marginBottom: 'var(--space-4)' }}>7. Changes to Terms</h2>
              <p style={{ lineHeight: 1.8 }}>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of our services constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--fg-primary)', marginBottom: 'var(--space-4)' }}>8. Contact</h2>
              <p style={{ lineHeight: 1.8 }}>
                For questions about these terms, please reach out through our GitHub repository.
              </p>
            </section>
          </div>

          <div style={{ marginTop: 'var(--space-12)', paddingTop: 'var(--space-8)', borderTop: '1px solid var(--border-primary)' }}>
            <Link to="/" className="btn btn-ghost">
              ← Back to t4tokito Store
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
