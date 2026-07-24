import { Link } from 'react-router-dom';
import { apps } from '../data/apps';

export default function AppGrid() {
  return (
    <section id="apps" className="section" aria-labelledby="apps-heading">
      <div className="container">
        <header className="section-header">
          <h2 id="apps-heading" className="section-title animate-slide-up">
            All Apps
          </h2>
          <p className="section-subtitle animate-slide-up stagger-1">
            Everything here is free, open source, and made by t4tokito.
          </p>
        </header>

        <div className="apps-grid grid grid-2" style={{ gap: 'var(--space-8)' }}>
          {apps.map((app, index) => (
            <article
              key={app.id}
              className="card card-interactive animate-slide-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div
                style={{
                  position: 'relative',
                  height: 200,
                  background: `linear-gradient(135deg, ${app.color}22, ${app.color}44)`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--space-4)',
                  overflow: 'hidden',
                }}
              >
                <span style={{ fontSize: '4rem', filter: `drop-shadow(0 8px 24px ${app.color}80)` }} aria-hidden="true">
                  {app.icon}
                </span>
                <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <span className="badge badge-primary">{app.category}</span>
                  <span className="badge badge-secondary">v{app.version}</span>
                </div>
              </div>

              <div style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div>
                  <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-1)' }}>
                    {app.name}
                  </h3>
                  <p style={{ color: 'var(--accent-primary)', fontSize: 'var(--text-sm)', fontWeight: 500, marginBottom: 'var(--space-2)' }}>
                    {app.tagline}
                  </p>
                  <p style={{ color: 'var(--fg-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.6 }}>
                    {app.description}
                  </p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                  {app.features.slice(0, 3).map((feature, i) => (
                    <span key={i} className="badge badge-outline" style={{ fontSize: 'var(--text-xs)' }}>
                      {feature.icon} {feature.title}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', marginTop: 'var(--space-2)' }}>
                  <Link
                    to={`/apps/${app.id}`}
                    className="btn btn-primary btn-full"
                    style={{ flex: 1, minWidth: 140 }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    View Details
                  </Link>
                  <a
                    href={app.downloadUrl}
                    className="btn btn-outline btn-full"
                    style={{ flex: 1, minWidth: 140 }}
                    download
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download APK
                  </a>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', fontSize: 'var(--text-xs)', color: 'var(--fg-muted)' }}>
                  <span>Android {app.androidVersion}</span>
                  <span>{app.size}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
          <p style={{ color: 'var(--fg-muted)', marginBottom: 'var(--space-4)' }}>
            All apps are open source. Check out the code on GitHub.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            {apps.map((app) => (
              <a
                key={app.id}
                href={app.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                {app.name} Source
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
