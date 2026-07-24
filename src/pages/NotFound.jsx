import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main style={{ paddingTop: 'calc(var(--header-height) + var(--space-16))', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 500 }}>
          <div
            style={{
              fontSize: '6rem',
              fontWeight: 800,
              background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1,
              marginBottom: 'var(--space-4)',
            }}
            aria-hidden="true"
          >
            404
          </div>

          <h1 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
            Page Not Found
          </h1>

          <p style={{ color: 'var(--fg-secondary)', fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)' }}>
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Back to Store
            </Link>
            <Link to="/apps/tokitotv" className="btn btn-outline">
              Browse Apps
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
