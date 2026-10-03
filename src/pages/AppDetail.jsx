import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { getAppById, apps } from '../data/apps';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

function Stars({ value }) {
  return (
    <span className="stars" role="img" aria-label={`Rated ${value} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"
          fill={i < Math.round(value) ? 'currentColor' : 'none'}
          stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </span>
  );
}

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
        <main style={{ paddingTop: 'calc(var(--header-height) + var(--space-20))', minHeight: '60vh', textAlign: 'center' }}>
          <div className="container">
            <h1 style={{ marginBottom: 'var(--space-4)' }}>App not found</h1>
            <p className="muted" style={{ marginBottom: 'var(--space-8)' }}>This app doesn&apos;t exist or was removed from the store.</p>
            <Link to="/" className="btn btn-primary">Back to store</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const other = apps.find((a) => a.id !== app.id);
  const canonical = `https://t4tokito-store.netlify.app/apps/${app.id}`;

  const softwareJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: app.name,
    applicationCategory: app.category === 'Entertainment' ? 'EntertainmentApplication' : 'ProductivityApplication',
    operatingSystem: `Android ${app.androidVersion}`,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock', url: canonical },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: String(app.rating), reviewCount: String(app.reviews), bestRating: '5' },
    description: app.description,
    author: { '@type': 'Organization', name: 't4tokito', url: 'https://t4tokito-store.netlify.app/' },
    version: app.version,
    downloadUrl: `https://t4tokito-store.netlify.app/download/${app.id}`,
    fileSize: app.size,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://t4tokito-store.netlify.app/' },
      { '@type': 'ListItem', position: 2, name: app.name, item: canonical },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{app.name} — Download Free APK for Android | t4tokito Store</title>
        <meta name="description" content={`Download ${app.name} free for Android. ${app.description} Rated ${app.rating}/5 · ${app.downloads} downloads · No ads, open source.`} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={`${app.name} — Download Free | t4tokito Store`} />
        <meta property="og:description" content={app.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://t4tokito-store.netlify.app/logo.jpeg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${app.name} — Download Free | t4tokito Store`} />
        <meta name="twitter:description" content={app.description} />
        <script type="application/ld+json">{JSON.stringify(softwareJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      <Header />

      <main id="main-content" style={{ paddingTop: 'calc(var(--header-height) + var(--space-10))' }}>
        <div className="container">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 'var(--space-6)', fontSize: 'var(--text-sm)', color: 'var(--muted)' }}>
            <Link to="/" style={{ color: 'var(--muted)' }}>Store</Link>
            <span aria-hidden="true" style={{ margin: '0 8px' }}>/</span>
            <span aria-current="page" style={{ color: 'var(--ink)', fontWeight: 600 }}>{app.name}</span>
          </nav>

          {/* Listing header */}
          <Reveal>
            <div className="card" style={{ padding: 'clamp(1.25rem, 4vw, 2.5rem)' }}>
              <div style={{ display: 'flex', gap: 'var(--space-6)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <div
                  aria-hidden="true"
                  style={{
                    width: 104, height: 104, borderRadius: 26, flexShrink: 0,
                    background: `linear-gradient(135deg, ${app.color}, ${app.color}b3)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '3rem', boxShadow: 'var(--shadow-lg)',
                  }}
                >
                  {app.icon}
                </div>
                <div style={{ flex: 1, minWidth: 240 }}>
                  <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', marginBottom: 8 }}>
                    <span className="chip chip-brand">{app.category}</span>
                    <span className="chip chip-mono">v{app.version}</span>
                    <span className="chip chip-mint">Free · No ads</span>
                  </div>
                  <h1 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.75rem)' }}>{app.name}</h1>
                  <p style={{ color: 'var(--muted)', fontSize: 'var(--text-lg)', marginTop: 4 }}>
                    {app.tagline} · by <span style={{ color: 'var(--ink-2)', fontWeight: 600 }}>t4tokito</span>
                  </p>
                  <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-5)', flexWrap: 'wrap' }}>
                    <Link to={`/download/${app.id}`} className="btn btn-primary btn-lg">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Install free · {app.size}
                    </Link>
                    <a href={app.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
                      Source code
                    </a>
                  </div>
                </div>
              </div>

              <dl
                style={{
                  display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', marginTop: 'var(--space-8)',
                  borderTop: '1px solid var(--line)', paddingTop: 'var(--space-6)', gap: 'var(--space-4)', textAlign: 'center',
                }}
                className="detail-stats"
              >
                <div>
                  <dt style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)', marginBottom: 4 }}>Rating</dt>
                  <dd style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-xl)', color: 'var(--ink)' }}>
                    {app.rating} <Stars value={app.rating} />
                  </dd>
                  <dd style={{ margin: 0, fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>{app.reviews.toLocaleString('en-US')} reviews</dd>
                </div>
                <div>
                  <dt style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)', marginBottom: 4 }}>Downloads</dt>
                  <dd style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-xl)', color: 'var(--ink)' }}>{app.downloads}</dd>
                  <dd style={{ margin: 0, fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>and growing</dd>
                </div>
                <div>
                  <dt style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)', marginBottom: 4 }}>Size</dt>
                  <dd style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-xl)', color: 'var(--ink)' }}>{app.size}</dd>
                  <dd style={{ margin: 0, fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>Android {app.androidVersion}</dd>
                </div>
                <div>
                  <dt style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)', marginBottom: 4 }}>Updated</dt>
                  <dd style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--ink)' }}>{app.updated}</dd>
                  <dd style={{ margin: 0, fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>v{app.version}</dd>
                </div>
              </dl>
            </div>
          </Reveal>

          {/* About */}
          <Reveal>
            <section aria-labelledby="about-heading" style={{ maxWidth: 760, margin: 'var(--space-12) auto 0' }}>
              <h2 id="about-heading" style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)' }}>About {app.name}</h2>
              {app.fullDescription.split('\n\n').map((p, i) => (
                <p key={i} style={{ marginBottom: 'var(--space-4)', color: 'var(--ink-2)' }}>{p}</p>
              ))}
            </section>
          </Reveal>

          {/* Features */}
          <section aria-labelledby="app-features-heading" style={{ marginTop: 'var(--space-12)' }}>
            <Reveal>
              <h2 id="app-features-heading" className="text-center" style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)' }}>Features</h2>
            </Reveal>
            <div className="grid grid-3" style={{ gap: 'var(--space-4)' }}>
              {app.features.map((f, i) => (
                <Reveal key={f.title} delay={(i % 3) * 80}>
                  <div className="card" style={{ padding: 'var(--space-6)', height: '100%' }}>
                    <div style={{ fontSize: '1.6rem', marginBottom: 'var(--space-3)' }} aria-hidden="true">{f.icon}</div>
                    <h3 style={{ fontSize: 'var(--text-base)', marginBottom: 'var(--space-2)' }}>{f.title}</h3>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)' }}>{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Screenshots */}
          <section aria-labelledby="shots-heading" style={{ marginTop: 'var(--space-12)' }}>
            <Reveal>
              <h2 id="shots-heading" className="text-center" style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)' }}>Screenshots</h2>
            </Reveal>
            <div className="grid grid-4" style={{ gap: 'var(--space-4)' }}>
              {app.screenshots.map((s) => (
                <Reveal key={s.caption}>
                  <div className="phone-frame">
                    <span style={{ fontSize: '2rem' }} aria-hidden="true">{app.icon}</span>
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>{s.caption}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Tech + changelog */}
          <div className="grid grid-2" style={{ marginTop: 'var(--space-12)', gap: 'var(--space-6)', alignItems: 'start' }}>
            <Reveal>
              <section aria-labelledby="stack-heading" className="card" style={{ padding: 'var(--space-6)' }}>
                <h2 id="stack-heading" style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-4)' }}>Built with</h2>
                <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                  {app.techStack.map((t) => (
                    <li key={t} className="chip chip-mono">{t}</li>
                  ))}
                </ul>
              </section>
            </Reveal>
            <Reveal delay={100}>
              <section aria-labelledby="changelog-heading" className="card" style={{ padding: 'var(--space-6)' }}>
                <h2 id="changelog-heading" style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-4)' }}>Changelog</h2>
                {app.changelog.map((r) => (
                  <div key={r.version}>
                    <p style={{ fontWeight: 700, color: 'var(--ink)', fontSize: 'var(--text-sm)' }}>
                      v{r.version} <span className="muted mono" style={{ fontWeight: 400, fontSize: 'var(--text-xs)' }}>· {r.date}</span>
                    </p>
                    <ul className="tick-list" style={{ marginTop: 'var(--space-3)' }}>
                      {r.changes.map((c) => (
                        <li key={c}>
                          <span className="tick" aria-hidden="true">
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                          </span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>
            </Reveal>
          </div>

          {/* Cross-link */}
          {other && (
            <Reveal>
              <div className="card card-hover" style={{ margin: 'var(--space-12) 0 var(--space-16)', padding: 'var(--space-6)', display: 'flex', alignItems: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                <div aria-hidden="true" style={{ width: 52, height: 52, borderRadius: 15, background: `linear-gradient(135deg, ${other.color}, ${other.color}b3)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem' }}>
                  {other.icon}
                </div>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <p style={{ fontWeight: 700, color: 'var(--ink)' }}>Also free: {other.name}</p>
                  <p className="muted" style={{ fontSize: 'var(--text-sm)' }}>{other.tagline} · {other.rating}★ · {other.downloads} downloads</p>
                </div>
                <Link to={`/apps/${other.id}`} className="btn btn-secondary">View {other.name}</Link>
              </div>
            </Reveal>
          )}
        </div>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 640px) {
          .detail-stats { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  );
}
