import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { getAppById } from '../data/apps';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DownloadPage() {
  const { appId } = useParams();
  const app = getAppById(appId);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [appId]);

  if (!app) {
    return (
      <>
        <Header />
        <main style={{ paddingTop: 'calc(var(--header-height) + var(--space-16))', minHeight: '60vh', textAlign: 'center' }}>
          <div className="container">
            <h1 style={{ fontSize: 'var(--text-4xl)', marginBottom: 'var(--space-4)' }}>App Not Found</h1>
            <p style={{ color: 'var(--fg-secondary)', marginBottom: 'var(--space-8)' }}>
              The app you're trying to download doesn't exist.
            </p>
            <Link to="/" className="btn btn-primary">Back to Store</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement('a');
    link.href = app.downloadUrl;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setDownloading(false), 2000);
  };

  return (
    <>
      <Helmet>
        <title>Download {app.name} Free APK | t4tokito Store | Tokito Store</title>
        <meta name="description" content={`Download ${app.name} free from t4tokito Store. ${app.description} Free APK download for Android.`} />
        <meta name="keywords" content={`download ${app.name}, ${app.name} apk, t4tokito store, tokito store, muichiro store, free android download`} />
        <link rel="canonical" href={`https://t4tokito.store/download/${app.id}`} />
        <meta property="og:title" content={`Download ${app.name} Free | t4tokito Store`} />
        <meta property="og:description" content={`Download ${app.name} free from t4tokito Store. ${app.description}`} />
        <meta property="og:url" content={`https://t4tokito.store/download/${app.id}`} />
        <meta property="og:image" content="https://t4tokito.store/logo.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Download ${app.name} Free | t4tokito Store`} />
        <meta name="twitter:description" content={`Download ${app.name} free from t4tokito Store.`} />
        <meta name="twitter:image" content="https://t4tokito.store/logo.jpeg" />
      </Helmet>

      <Header />

      <main style={{ paddingTop: 'calc(var(--header-height) + var(--space-16))', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 600 }}>
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: 'var(--radius-xl)',
              background: `linear-gradient(135deg, ${app.color}, ${app.color}cc)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              margin: '0 auto var(--space-6)',
              boxShadow: `0 12px 40px ${app.color}40`,
            }}
            aria-hidden="true"
          >
            {app.icon}
          </div>

          <h1 style={{ fontSize: 'var(--text-4xl)', fontWeight: 800, marginBottom: 'var(--space-2)' }}>
            Download {app.name}
          </h1>
          <p style={{ color: 'var(--fg-secondary)', fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)' }}>
            {app.tagline} &bull; {app.size} &bull; Android {app.androidVersion}
          </p>

          <div className="download-actions" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 400, margin: '0 auto' }}>
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="btn btn-primary btn-lg btn-full"
              style={{ fontSize: 'var(--text-lg)' }}
            >
              {downloading ? (
                <>
                  <span className="animate-spin" style={{ display: 'inline-block' }}>⏳</span>
                  Downloading...
                </>
              ) : (
                <>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download {app.name} APK
                </>
              )}
            </button>

            <Link to={`/apps/${app.id}`} className="btn btn-outline btn-full">
              View Details
            </Link>

            <a
              href={app.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-full"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              View Source on GitHub
            </a>
          </div>

          <div style={{ marginTop: 'var(--space-10)', padding: 'var(--space-6)', background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-primary)', textAlign: 'left' }}>
            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>App Info</h3>
            <div className="download-info-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
              <div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--fg-muted)', marginBottom: 2 }}>Version</div>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>{app.version}</div>
              </div>
              <div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--fg-muted)', marginBottom: 2 }}>Size</div>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>{app.size}</div>
              </div>
              <div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--fg-muted)', marginBottom: 2 }}>Android</div>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>{app.androidVersion}</div>
              </div>
              <div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--fg-muted)', marginBottom: 2 }}>Updated</div>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>{app.updated}</div>
              </div>
              <div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--fg-muted)', marginBottom: 2 }}>Category</div>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>{app.category}</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
