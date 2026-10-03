import { Link } from 'react-router-dom';
import Reveal from './Reveal';

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
              background: 'var(--ink)',
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
              <p style={{ color: 'rgba(250,250,249,0.72)', fontSize: 'var(--text-lg)', maxWidth: 520, margin: '0 auto var(--space-8)' }}>
                TokitoTV for anime nights. YT Notes Maker for exam season. Both free, both yours.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  to="/apps/tokitotv"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '15px 30px', borderRadius: 12, fontWeight: 700, fontSize: 'var(--text-base)',
                    background: '#fafaf9', color: '#09090b', transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                  }}
                >
                  <span aria-hidden="true">🎬</span> Download TokitoTV
                </Link>
                <Link
                  to="/apps/yt-notes-maker"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '15px 30px', borderRadius: 12, fontWeight: 600, fontSize: 'var(--text-base)',
                    background: 'transparent', color: '#fafaf9', border: '1px solid rgba(250,250,249,0.35)',
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  <span aria-hidden="true">📝</span> Get YT Notes Maker
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
