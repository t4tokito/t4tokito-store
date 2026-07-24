import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="section" aria-labelledby="cta-heading">
      <div className="container">
        <div
          style={{
            position: 'relative',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
            padding: 'var(--space-16) var(--space-8)',
            textAlign: 'center',
          }}
        >
          {/* Decorative elements */}
          <div
            style={{
              position: 'absolute',
              top: '-50%',
              left: '-20%',
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              filter: 'blur(60px)',
              pointerEvents: 'none',
            }}
            aria-hidden="true"
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-30%',
              right: '-10%',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.08)',
              filter: 'blur(60px)',
              pointerEvents: 'none',
            }}
            aria-hidden="true"
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2
              id="cta-heading"
              style={{
                fontSize: 'clamp(var(--text-3xl), 5vw, var(--text-5xl))',
                fontWeight: 800,
                color: 'white',
                marginBottom: 'var(--space-4)',
                letterSpacing: '-0.02em',
              }}
            >
              Ready to Get Started?
            </h2>
            <p
              style={{
                fontSize: 'var(--text-lg)',
                color: 'rgba(255,255,255,0.85)',
                marginBottom: 'var(--space-8)',
                maxWidth: '500px',
                margin: '0 auto var(--space-8)',
              }}
            >
              Download our apps for free. No ads, no tracking, no hidden fees. Just great software.
            </p>

            <div
              className="cta-actions"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--space-4)',
                justifyContent: 'center',
              }}
            >
              <Link
                to="/apps/tokitotv"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  padding: 'var(--space-4) var(--space-8)',
                  background: 'white',
                  color: 'var(--accent-primary)',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 700,
                  fontSize: 'var(--text-base)',
                  textDecoration: 'none',
                  transition: 'all var(--transition-fast)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                }}
              >
                <span style={{ fontSize: '1.25rem' }} aria-hidden="true">🎬</span>
                Download TokitoTV
              </Link>
              <Link
                to="/apps/yt-notes-maker"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  padding: 'var(--space-4) var(--space-8)',
                  background: 'transparent',
                  color: 'white',
                  border: '2px solid rgba(255,255,255,0.4)',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 700,
                  fontSize: 'var(--text-base)',
                  textDecoration: 'none',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <span style={{ fontSize: '1.25rem' }} aria-hidden="true">📝</span>
                Get YT Notes Maker
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
