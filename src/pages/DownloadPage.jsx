import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { getAppById } from '../data/apps';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppIcon from '../components/AppIcon';
import MaintenanceBanner from '../components/MaintenanceBanner';

const steps = [
  { title: 'Download the APK', text: 'Tap the button below. The file comes straight from the open-source GitHub release, unmodified and free.' },
  { title: 'Allow installs from your browser', text: 'Android will ask for permission once (“Install unknown apps”). Allow it for your browser — this is standard for apps outside the Play Store.' },
  { title: 'Open the file and install', text: 'Open the downloaded APK from your notifications or Downloads folder, tap Install, and you\u2019re done. Updates work the same way.' },
];

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
        <main style={{ paddingTop: 'calc(var(--header-height) + var(--space-20))', minHeight: '60vh', textAlign: 'center' }}>
          <div className="container">
            <h1 style={{ marginBottom: 'var(--space-4)' }}>App not found</h1>
            <p className="muted" style={{ marginBottom: 'var(--space-8)' }}>The app you&apos;re trying to download doesn&apos;t exist.</p>
            <Link to="/" className="btn btn-primary">Back to store</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const canonical = `https://t4tokito-store.netlify.app/download/${app.id}`;

  const handleDownload = () => {
    setDownloading(true);
    const url = app.downloadUrl;
    if (/^https?:\/\//.test(url)) {
      // External host (e.g. GitHub Release serves with Content-Disposition:
      // attachment, so this lands as a file download, not a page visit).
      window.open(url, '_blank', 'noopener,noreferrer');
      setDownloading(false);
      return;
    }
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', '');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setDownloading(false), 2000);
  };

  return (
    <>
      <Helmet>
        <title>Download {app.name} APK Free for Android (v{app.version}) | t4tokito Store</title>
        <meta name="description" content={`Download ${app.name} v${app.version} APK free for Android ${app.androidVersion}. ${app.description} Safe, no ads, open source.`} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={`Download ${app.name} Free | t4tokito Store`} />
        <meta property="og:description" content={`${app.tagline} · ${app.size} · Android ${app.androidVersion} · Rated ${app.rating}/5`} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://t4tokito-store.netlify.app/logo.jpeg" />
        <meta name="twitter:card" content="summary" />
        {app.maintenance && <meta name="robots" content="noindex, nofollow" />}
      </Helmet>

      <Header />

      <main style={{ paddingTop: 'calc(var(--header-height) + var(--space-12))', paddingBottom: 'var(--space-16)' }}>
        <div className="container animate-rise" style={{ maxWidth: 640 }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: 'var(--space-6)', fontSize: 'var(--text-sm)', color: 'var(--muted)', textAlign: 'center' }}>
            <Link to="/" style={{ color: 'var(--muted)' }}>Store</Link>
            <span aria-hidden="true" style={{ margin: '0 8px' }}>/</span>
            <Link to={`/apps/${app.id}`} style={{ color: 'var(--muted)' }}>{app.name}</Link>
            <span aria-hidden="true" style={{ margin: '0 8px' }}>/</span>
            <span aria-current="page" style={{ color: 'var(--ink)', fontWeight: 600 }}>Download</span>
          </nav>

          <div className="card" style={{ padding: 'clamp(1.5rem, 5vw, 2.5rem)', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--space-5)' }}>
              <AppIcon app={app} size={88} radius={24} eager />
            </div>
            <p className="chip chip-mint" style={{ marginBottom: 'var(--space-3)' }}>Free · No ads · Open source</p>
            <h1 style={{ fontSize: 'clamp(1.7rem, 4vw, 2.4rem)' }}>Download {app.name}</h1>
            <p className="muted" style={{ marginTop: 'var(--space-2)', fontSize: 'var(--text-base)' }}>
              v{app.version} · {app.size} · Android {app.androidVersion} · ★ {app.rating} ({app.reviews.toLocaleString('en-US')})
            </p>

            {app.maintenance ? (
              <div style={{ marginTop: 'var(--space-6)', textAlign: 'left' }}>
                <MaintenanceBanner app={app} compact />
              </div>
            ) : (
              <button onClick={handleDownload} disabled={downloading} className="btn btn-primary btn-lg btn-full" style={{ marginTop: 'var(--space-6)', fontSize: 'var(--text-base)' }}>
                {downloading ? (
                  <><svg className="animate-spin" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M21 12a9 9 0 1 1-6.2-8.56" /></svg> Preparing download…</>
                ) : (
                  <>
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download {app.name} APK
                  </>
                )}
              </button>
            )}

            <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-3)', flexWrap: 'wrap' }}>
              <Link to={`/apps/${app.id}`} className="btn btn-secondary" style={{ flex: 1, minWidth: 150 }}>App details</Link>
              <a href={app.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ flex: 1, minWidth: 150 }}>GitHub source</a>
            </div>
          </div>

          <section aria-labelledby="install-heading" className="card" style={{ padding: 'clamp(1.5rem, 5vw, 2rem)', marginTop: 'var(--space-6)', textAlign: 'left' }}>
            <h2 id="install-heading" style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-5)' }}>How to install</h2>
            <ol style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', counterReset: 'step' }}>
              {steps.map((s, i) => (
                <li key={s.title} style={{ display: 'flex', gap: 'var(--space-4)' }}>
                  <span
                    aria-hidden="true"
                    style={{
                      flexShrink: 0, width: 32, height: 32, borderRadius: '50%',
                      background: 'var(--ink)', color: 'var(--bg)',
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 700, fontSize: 'var(--text-sm)',
                    }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p style={{ fontWeight: 700, color: 'var(--ink)' }}>{s.title}</p>
                    <p className="muted" style={{ fontSize: 'var(--text-sm)', marginTop: 2 }}>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <div className="card" style={{ padding: 'var(--space-6)', marginTop: 'var(--space-6)', display: 'flex', gap: 'var(--space-4)', textAlign: 'left', borderStyle: 'dashed' }}>
            <span aria-hidden="true" style={{ flexShrink: 0, width: 36, height: 36, borderRadius: 10, background: 'var(--mint-soft)', color: 'var(--mint)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>
            </span>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-2)' }}>
              <strong style={{ color: 'var(--ink)' }}>Safe to install.</strong> This APK is built from the{' '}
              <a href={app.githubUrl} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600 }}>public source code</a>{' '}
              with no ad or tracking SDKs. Always download from this official domain.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
