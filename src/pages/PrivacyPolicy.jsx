import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main style={{ paddingTop: 'calc(var(--header-height) + var(--space-8))' }}>
        <div className="container" style={{ maxWidth: 800, padding: 'var(--space-12) var(--container-padding)' }}>
          <h1 style={{ fontSize: 'var(--text-4xl)', fontWeight: 800, marginBottom: 'var(--space-2)' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--fg-muted)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-8)' }}>
            Last updated: June 28, 2024
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)', color: 'var(--fg-secondary)' }}>
            <section>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--fg-primary)', marginBottom: 'var(--space-4)' }}>1. Introduction</h2>
              <p style={{ lineHeight: 1.8, marginBottom: 'var(--space-3)' }}>
                Welcome to t4tokito Store. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we handle information when you use our website and download our applications.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--fg-primary)', marginBottom: 'var(--space-4)' }}>2. Information We Collect</h2>
              <p style={{ lineHeight: 1.8, marginBottom: 'var(--space-3)' }}>
                <strong>Website:</strong> We do not collect any personal information through this website. We do not use cookies, analytics, or tracking technologies.
              </p>
              <p style={{ lineHeight: 1.8 }}>
                <strong>Applications:</strong> Our apps (TokitoTV and YT Notes Maker) may collect information as described in their respective privacy policies within the apps.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--fg-primary)', marginBottom: 'var(--space-4)' }}>3. How We Use Information</h2>
              <p style={{ lineHeight: 1.8 }}>
                Since we do not collect personal information through this website, we do not use, sell, or share any personal data. The APK files we host are provided as-is for download.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--fg-primary)', marginBottom: 'var(--space-4)' }}>4. Third-Party Services</h2>
              <p style={{ lineHeight: 1.8 }}>
                Our applications may use third-party services (such as Firebase, AniList API, OpenRouter API) that have their own privacy policies. We encourage you to review the privacy policies of these services.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--fg-primary)', marginBottom: 'var(--space-4)' }}>5. Data Security</h2>
              <p style={{ lineHeight: 1.8 }}>
                We implement appropriate security measures to protect the limited information we handle. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--fg-primary)', marginBottom: 'var(--space-4)' }}>6. Children's Privacy</h2>
              <p style={{ lineHeight: 1.8 }}>
                Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--fg-primary)', marginBottom: 'var(--space-4)' }}>7. Changes to This Policy</h2>
              <p style={{ lineHeight: 1.8 }}>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated "Last updated" date.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--fg-primary)', marginBottom: 'var(--space-4)' }}>8. Contact Us</h2>
              <p style={{ lineHeight: 1.8 }}>
                If you have any questions about this privacy policy, please contact us through our GitHub repository or social media channels.
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
