import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { getAppById } from '../data/apps';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AppDetail() {
  const { appId } = useParams();
  const app = getAppById(appId);

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
              The app you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/" className="btn btn-primary">Back to Store</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{app.name} - Download Free APK | t4tokito Store | Tokito Store</title>
        <meta name="description" content={`Download ${app.name} free from t4tokito Store. ${app.description} Also known as Tokito Store and Muichiro Store.`} />
        <meta name="keywords" content={`${app.name}, ${app.name} download, t4tokito store, tokito store, muichiro store, free android app, ${app.category.toLowerCase()} app`} />
        <link rel="canonical" href={`https://t4tokito-store.netlify.app/apps/${app.id}`} />
        <meta property="og:title" content={`${app.name} - Download Free | t4tokito Store`} />
        <meta property="og:description" content={app.description} />
        <meta property="og:url" content={`https://t4tokito-store.netlify.app/apps/${app.id}`} />
        <meta property="og:image" content="https://t4tokito-store.netlify.app/logo.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${app.name} - Download Free | t4tokito Store`} />
        <meta name="twitter:description" content={app.description} />
        <meta name="twitter:image" content="https://t4tokito-store.netlify.app/logo.jpeg" />
      </Helmet>

      <Header />

      <main id="main-content" style={{ paddingTop: 'calc(var(--header-height) + var(--space-8))' }}>
        {/* Hero Banner */}
        <section
          style={{
            background: `linear-gradient(135deg, ${app.color}15, ${app.color}30)`,
            borderBottom: '1px solid var(--border-primary)',
            padding: 'var(--space-12) 0',
          }}
        >
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: 'var(--space-8)',
                alignItems: 'center',
              }}
              className="app-hero-grid"
            >
              <div
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 'var(--radius-xl)',
                  background: `linear-gradient(135deg, ${app.color}, ${app.color}cc)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3.5rem',
                  boxShadow: `0 12px 40px ${app.color}40`,
                }}
                aria-hidden="true"
              >
                {app.icon}
              </div>

              <div>
                <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-3)', flexWrap: 'wrap' }}>
                  <span className="badge badge-primary">{app.category}</span>
                  <span className="badge badge-secondary">v{app.version}</span>
                </div>
                <h1 style={{ fontSize: 'var(--text-4xl)', fontWeight: 800, marginBottom: 'var(--space-2)', letterSpacing: '-0.02em' }}>
                  {app.name}
                </h1>
                <p style={{ color: 'var(--fg-secondary)', fontSize: 'var(--text-lg)', marginBottom: 'var(--space-4)' }}>
                  {app.tagline}
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-6)', fontSize: 'var(--text-sm)', color: 'var(--fg-muted)', flexWrap: 'wrap' }}>
                  <span>{app.size}</span>
                  <span>Android {app.androidVersion}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Action Bar */}
        <section style={{ borderBottom: '1px solid var(--border-primary)', padding: 'var(--space-4) 0' }}>
          <div className="container">
            <div className="app-action-bar" style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
              <a
                href={app.downloadUrl}
                className="btn btn-primary btn-lg"
                download
                style={{ flex: 1, minWidth: 200 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download APK ({app.size})
              </a>
              <a
                href={app.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
                style={{ flex: 1, minWidth: 200 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                View Source
              </a>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="section" style={{ padding: 'var(--space-12) 0' }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-6)' }}>About {app.name}</h2>
            {app.fullDescription.split('\n\n').map((paragraph, i) => (
              <p key={i} style={{ color: 'var(--fg-secondary)', lineHeight: 1.8, marginBottom: 'var(--space-4)' }}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="section" style={{ padding: 'var(--space-12) 0', background: 'var(--bg-secondary)' }}>
          <div className="container">
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-8)', textAlign: 'center' }}>Features</h2>
            <div className="features-grid grid grid-3" style={{ gap: 'var(--space-6)' }}>
              {app.features.map((feature, i) => (
                <div
                  key={feature.title}
                  className="card"
                  style={{ padding: 'var(--space-6)' }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: 'var(--space-3)' }} aria-hidden="true">{feature.icon}</div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>{feature.title}</h3>
                  <p style={{ color: 'var(--fg-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.6 }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="section" style={{ padding: 'var(--space-12) 0' }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-6)' }}>Tech Stack</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
              {app.techStack.map((tech) => (
                <span
                  key={tech}
                  className="badge badge-outline"
                  style={{ padding: 'var(--space-2) var(--space-4)', fontSize: 'var(--text-sm)' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Changelog */}
        <section className="section" style={{ padding: 'var(--space-12) 0', background: 'var(--bg-secondary)' }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-6)' }}>Changelog</h2>
            {app.changelog.map((release) => (
              <div key={release.version} className="card" style={{ padding: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600 }}>v{release.version}</h3>
                  <span style={{ fontSize: 'var(--text-sm)', color: 'var(--fg-muted)' }}>{release.date}</span>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                  {release.changes.map((change, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)', color: 'var(--fg-secondary)', fontSize: 'var(--text-sm)' }}>
                      <span style={{ color: 'var(--accent-secondary)', marginTop: 2 }}>•</span>
                      {change}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Screenshots */}
        <section className="section" style={{ padding: 'var(--space-12) 0' }}>
          <div className="container">
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-8)', textAlign: 'center' }}>Screenshots</h2>
            <div className="app-screenshots-grid grid grid-4" style={{ gap: 'var(--space-4)' }}>
              {app.screenshots.map((screenshot, i) => (
                <div
                  key={i}
                  style={{
                    aspectRatio: '9/16',
                    background: `linear-gradient(135deg, ${app.color}20, ${app.color}40)`,
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-primary)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'var(--space-4)',
                    textAlign: 'center',
                  }}
                >
                  <span style={{ fontSize: '2rem', marginBottom: 'var(--space-2)' }} aria-hidden="true">{app.icon}</span>
                  <span style={{ fontSize: 'var(--text-xs)', color: 'var(--fg-muted)' }}>{screenshot.caption}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
