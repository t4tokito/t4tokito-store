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
      <main style={{ paddingTop: 'calc(var(--header-height) + var(--space-20))', paddingBottom: 'var(--space-20)', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container animate-rise" style={{ textAlign: 'center', maxWidth: 520 }}>
          <p className="eyebrow">404</p>
          <h1 style={{ marginBottom: 'var(--space-4)' }}>Lost in the store?</h1>
          <p className="muted" style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)' }}>
            The page you&apos;re looking for doesn&apos;t exist or was moved. The apps are still right here, though.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-primary btn-lg">Back to store</Link>
            <Link to="/apps/tokitotv" className="btn btn-secondary btn-lg">Browse apps</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
