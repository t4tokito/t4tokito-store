import { Link } from 'react-router-dom';
import { apps } from '../data/apps';

function Stars({ value }) {
  return (
    <span className="stars" role="img" aria-label={`Rated ${value} out of 5 stars`}>
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

export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" style={{ position: 'relative', overflow: 'hidden', paddingTop: 'calc(var(--header-height) + var(--space-16))', paddingBottom: 'var(--space-16)' }}>
      <div className="paper-grid" aria-hidden="true" style={{ position: 'absolute', inset: 0 }} />
      <div aria-hidden="true" style={{ position: 'absolute', top: -120, left: '50%', transform: 'translateX(-50%)', width: 640, height: 340, borderRadius: '50%', background: 'radial-gradient(closest-side, var(--brand-soft), transparent)', filter: 'blur(10px)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', textAlign: 'center', maxWidth: 860 }}>
        <p className="eyebrow animate-rise" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <span className="dot" aria-hidden="true" />
          t4tokito store · 2 apps · 100% free
        </p>

        <h1 id="hero-title" className="animate-rise stagger-1" style={{ marginBottom: 'var(--space-5)' }}>
          Free Android apps
          <br />
          that <span style={{ color: 'var(--brand)' }}>respect&nbsp;you.</span>
        </h1>

        <p className="animate-rise stagger-2" style={{ fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', color: 'var(--muted)', maxWidth: 620, margin: '0 auto var(--space-8)', lineHeight: 1.7 }}>
          Download <strong style={{ color: 'var(--ink-2)', fontWeight: 600 }}>TokitoTV</strong> for anime streaming
          and <strong style={{ color: 'var(--ink-2)', fontWeight: 600 }}>YT Notes Maker</strong> for AI study notes.
          No ads, no tracking — and every line of code is open source.
        </p>

        <div className="animate-rise stagger-3" style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap', marginBottom: 'var(--space-8)' }}>
          <a href="#apps" className="btn btn-primary btn-lg">
            Browse apps
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
            </svg>
          </a>
          <a href="https://github.com/t4tokito" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            Star on GitHub
          </a>
        </div>

        <div className="animate-rise stagger-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-5)', flexWrap: 'wrap', fontSize: 'var(--text-sm)', color: 'var(--muted)', marginBottom: 'var(--space-12)' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <Stars value={5} /> <strong style={{ color: 'var(--ink)' }}>4.8/5</strong> average rating
          </span>
          <span aria-hidden="true" style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--line-strong)' }} />
          <span><strong style={{ color: 'var(--ink)' }}>15K+</strong> downloads</span>
          <span aria-hidden="true" style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--line-strong)' }} />
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--mint)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
            No ads · No tracking
          </span>
        </div>

        {/* Signature: Play-Store-style listing cards with oversized rating numerals */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-4)', textAlign: 'left' }} className="hero-cards">
          {apps.map((app, i) => (
            <Link
              key={app.id}
              to={`/apps/${app.id}`}
              className={`card card-hover animate-rise stagger-${i + 3}`}
              style={{ padding: 'var(--space-6)', display: 'flex', gap: 'var(--space-5)', alignItems: 'flex-start' }}
              aria-label={`${app.name} — ${app.tagline}. Rated ${app.rating} out of 5. View details and download.`}
            >
              <div
                aria-hidden="true"
                style={{
                  width: 62, height: 62, borderRadius: 18, flexShrink: 0,
                  background: `linear-gradient(135deg, ${app.color}, ${app.color}b3)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.9rem', boxShadow: 'var(--shadow-md)',
                }}
              >
                {app.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--ink)', lineHeight: 1 }}>
                    {app.rating}
                  </span>
                  <Stars value={app.rating} />
                </div>
                <h2 style={{ fontSize: 'var(--text-lg)', marginTop: 6 }}>{app.name}</h2>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)', marginTop: 2 }}>{app.tagline} · {app.size} · {app.downloads} downloads</p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 'var(--space-3)', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--brand)' }}>
                  Get the app
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hero-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
