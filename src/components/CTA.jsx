import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { apps } from '../data/apps';

const ctaApps = apps;

export default function CTA() {
  return (
    <section className="section" aria-labelledby="cta-heading" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal>
          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 'var(--radius-xl)',
              background: '#0c0c0f',
              border: '1px solid var(--line)',
              color: '#fafaf9',
              padding: 'clamp(2.5rem, 6vw, 4.5rem) clamp(1.5rem, 5vw, 4rem)',
              textAlign: 'center',
            }}
          >
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, opacity: 0.5, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.16) 1px, transparent 1px)', backgroundSize: '24px 24px', maskImage: 'radial-gradient(ellipse 70% 90% at 50% 100%, black, transparent)', WebkitMaskImage: 'radial-gradient(ellipse 70% 90% at 50% 100%, black, transparent)' }} />
            <div style={{ position: 'relative' }}>
              <p className="mono" style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 'var(--space-4)' }}>
                Free forever · No ads · Open source
              </p>
              <h2 id="cta-heading" style={{ color: '#fafaf9', marginBottom: 'var(--space-4)' }}>
                Your next favourite app<br />is one tap away.
              </h2>
              <p style={{ color: 'rgba(250,250,249,0.72)', fontSize: 'var(--text-lg)', maxWidth: 560, margin: '0 auto var(--space-8)' }}>
                TokitoTV for anime nights. Tokito Music for everything else. YT Notes Maker for exam season.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
                {ctaApps.map((app, i) => (
                  <Link
                    key={app.id}
                    to={`/apps/${app.id}`}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 10,
                      padding: '12px 22px', borderRadius: 12, fontWeight: i === 0 ? 700 : 600, fontSize: 'var(--text-base)',
                      background: i === 0 ? '#fafaf9' : 'transparent',
                      color: i === 0 ? '#09090b' : '#fafaf9',
                      border: i === 0 ? 'none' : '1px solid rgba(250,250,249,0.35)',
                      transition: 'all var(--transition-fast)',
                    }}
                  >
                    <img src={app.icon} alt="" width="26" height="26" loading="lazy" decoding="async" style={{ width: 26, height: 26, borderRadius: 7, objectFit: 'cover', display: 'block' }} />
                    {app.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
