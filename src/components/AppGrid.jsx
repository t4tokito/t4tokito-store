import { Link } from 'react-router-dom';
import { apps } from '../data/apps';
import Reveal from './Reveal';
import AppIcon from './AppIcon';

function Stars({ value }) {
  return (
    <span className="stars" role="img" aria-label={`Rated ${value} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" aria-hidden="true"
          fill={i < Math.round(value) ? 'currentColor' : 'none'}
          stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </span>
  );
}

export default function AppGrid() {
  return (
    <section id="apps" className="section" aria-labelledby="apps-heading" style={{ paddingTop: 'var(--space-16)' }}>
      <div className="container">
        <Reveal className="section-head center" style={{ textAlign: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <p className="eyebrow">The collection</p>
            <h2 id="apps-heading">Three apps. Each one does<br />one job brilliantly.</h2>
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--muted)', marginTop: 'var(--space-3)' }}>
              Free forever, no ads, no sign-up walls. Tokito Music is ready to install — the other two are back soon.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-3" style={{ gap: 'var(--space-5)', alignItems: 'stretch' }}>
          {apps.map((app, index) => (
            <Reveal key={app.id} delay={index * 90}>
              <article className="card card-hover" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ padding: 'var(--space-6) var(--space-6) 0', display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
                  <AppIcon app={app} size={64} radius={18} />
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', marginBottom: 6 }}>
                      <span className="chip chip-brand">{app.category}</span>
                      <span className="chip chip-mono">v{app.version}</span>
                      {app.maintenance && (
                        <span className="chip" style={{ background: 'var(--amber-soft)', borderColor: 'transparent', color: 'var(--amber)' }}>
                          Under maintenance
                        </span>
                      )}
                    </div>
                    <h3 style={{ fontSize: 'var(--text-xl)' }}>{app.name}</h3>
                    <p style={{ color: 'var(--brand)', fontSize: 'var(--text-sm)', fontWeight: 600, marginTop: 2 }}>{app.tagline}</p>
                  </div>
                </div>

                <div style={{ padding: 'var(--space-4) var(--space-6) 0', display: 'flex', alignItems: 'center', gap: 'var(--space-2)', flexWrap: 'wrap', fontSize: 'var(--text-sm)', color: 'var(--muted)' }}>
                  <Stars value={app.rating} />
                  <strong style={{ color: 'var(--ink)' }}>{app.rating}</strong>
                  <span>({app.reviews.toLocaleString('en-US')})</span>
                  <span aria-hidden="true">·</span>
                  <span>{app.downloads}</span>
                  <span aria-hidden="true">·</span>
                  <span>{app.size}</span>
                </div>

                <p style={{ padding: 'var(--space-4) var(--space-6) 0', fontSize: 'var(--text-sm)', color: 'var(--ink-2)' }}>
                  {app.description}
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', padding: 'var(--space-4) var(--space-6) 0' }} aria-label={`${app.name} highlights`}>
                  {app.features.slice(0, 3).map((f) => (
                    <li key={f.title} className="chip">
                      {f.title}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', gap: 'var(--space-3)', padding: 'var(--space-5) var(--space-6) var(--space-6)', marginTop: 'auto', flexWrap: 'wrap' }}>
                  <Link to={`/apps/${app.id}`} className="btn btn-primary" style={{ flex: 1, minWidth: 120 }}>
                    Details
                  </Link>
                  {app.maintenance ? (
                    <button className="btn btn-secondary" disabled style={{ flex: 1, minWidth: 120 }} title="Downloads paused during maintenance">
                      Download paused
                    </button>
                  ) : (
                    <Link to={`/download/${app.id}`} className="btn btn-secondary" style={{ flex: 1, minWidth: 120 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Get free
                    </Link>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="text-center muted" style={{ marginTop: 'var(--space-10)', fontSize: 'var(--text-sm)' }}>
            Every app is open source — audit the code or contribute on{' '}
            <a href="https://github.com/t4tokito" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600 }}>
              GitHub
            </a>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
