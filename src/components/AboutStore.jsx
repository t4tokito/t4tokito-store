import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import AppIcon from './AppIcon';
import { apps } from '../data/apps';

/**
 * Brand-rich "About" block. Targets the exact query "t4tokito store"
 * (plus Tokito Store / Muichiro Store variants) with natural copy
 * and internal links to every app page.
 */
export default function AboutStore() {
  return (
    <section className="section" aria-labelledby="about-store-heading" style={{ paddingTop: 0 }}>
      <div className="container" style={{ maxWidth: 820 }}>
        <Reveal>
          <div className="card" style={{ padding: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
            <p className="eyebrow">About the store</p>
            <h2 id="about-store-heading" style={{ marginBottom: 'var(--space-4)' }}>
              What is t4tokito Store?
            </h2>
            <p style={{ color: 'var(--ink-2)', marginBottom: 'var(--space-4)' }}>
              <strong style={{ color: 'var(--ink)' }}>t4tokito Store</strong> — also searched as{' '}
              <strong style={{ color: 'var(--ink)' }}>Tokito Store</strong> or{' '}
              <strong style={{ color: 'var(--ink)' }}>Muichiro Store</strong> — is the official home for
              free Android apps by indie developer t4tokito. Every app is free forever, with no ads,
              no tracking, and public source code on GitHub that anyone can audit.
            </p>
            <p style={{ color: 'var(--ink-2)', marginBottom: 'var(--space-6)' }}>
              Download <strong style={{ color: 'var(--ink)' }}>TokitoTV</strong> for anime streaming,{' '}
              <strong style={{ color: 'var(--ink)' }}>Tokito Music</strong> for free music streaming, and{' '}
              <strong style={{ color: 'var(--ink)' }}>YT Notes Maker</strong> for turning YouTube videos
              into AI study notes. New apps ship here first — bookmark t4tokito Store and check back often.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {apps.map((app) => (
                <li key={app.id}>
                  <Link
                    to={`/apps/${app.id}`}
                    style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', color: 'var(--ink-2)', fontSize: 'var(--text-sm)' }}
                  >
                    <AppIcon app={app} size={30} radius={9} />
                    <span>
                      <strong style={{ color: 'var(--ink)' }}>{app.name}</strong>
                      <span className="muted"> — {app.tagline}</span>
                      {app.maintenance && <span style={{ color: 'var(--amber)', fontWeight: 600 }}> · temporarily paused</span>}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
