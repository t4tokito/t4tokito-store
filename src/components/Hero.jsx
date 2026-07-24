import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'var(--header-height)',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-labelledby="hero-title"
    >
      {/* Background decorative elements */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
        }}
        aria-hidden="true"
      >
        <div
          style={{
            position: 'absolute',
            top: '-200px',
            right: '-200px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(67,61,139,0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-150px',
            left: '-150px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(200,172,214,0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-12)',
            alignItems: 'center',
            maxWidth: '1280px',
            margin: '0 auto',
          }}
        >
          {/* Left Content */}
          <div style={{ textAlign: 'left' }}>
            <div
              className="animate-slide-up"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                padding: 'var(--space-2) var(--space-4)',
                background: 'var(--accent-primary-light)',
                border: '1px solid rgba(255,107,53,0.3)',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--accent-primary)',
                marginBottom: 'var(--space-6)',
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent-primary)' }} />
              <span>t4tokito's Official App Store</span>
            </div>

            <h1
              id="hero-title"
              className="animate-slide-up stagger-1"
              style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: 'var(--space-6)',
                color: 'var(--fg-primary)',
              }}
            >
              Apps Built by<br />
              <span className="gradient-text">t4tokito</span>
            </h1>

            <p
              className="animate-slide-up stagger-2"
              style={{
                fontSize: 'clamp(var(--text-lg), 2vw, var(--text-xl))',
                color: 'var(--fg-secondary)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-8)',
                maxWidth: '500px',
              }}
            >
              This is the official store for all apps made by t4tokito.
              Free, open source, and built with love using modern tech.
            </p>

            <div
              className="hero-actions animate-slide-up stagger-3"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--space-4)',
                marginBottom: 'var(--space-12)',
              }}
            >
              <a
                href="#apps"
                className="btn btn-primary btn-lg"
                style={{ minWidth: 200 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
                Browse Apps
              </a>
              <a
                href="https://github.com/t4tokito"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg"
                style={{ minWidth: 200 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                Source Code
              </a>
            </div>

            {/* Trust indicators */}
            <div
              className="hero-trust animate-slide-up stagger-4"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: 'var(--space-6)',
                fontSize: 'var(--text-sm)',
                color: '#B5B9F0',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B5B9F0" strokeWidth="2" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>100% Free</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B5B9F0" strokeWidth="2" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Open Source</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B5B9F0" strokeWidth="2" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>No Ads</span>
              </div>
            </div>
          </div>

          {/* Right Side - App showcase cards */}
          <div className="hero-phone animate-slide-up stagger-2" style={{ position: 'relative' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {/* TokitoTV Card */}
              <Link
                to="/apps/tokitotv"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-5)',
                  padding: 'var(--space-6)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-primary)',
                  borderRadius: 'var(--radius-xl)',
                  textDecoration: 'none',
                  transition: 'all var(--transition-base)',
                  boxShadow: 'var(--shadow-lg)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#433D8B';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(67,61,139,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-primary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 16,
                    background: 'linear-gradient(135deg, #433D8B, #433D8Bcc)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 28,
                    flexShrink: 0,
                    boxShadow: '0 8px 24px rgba(67,61,139,0.3)',
                  }}
                >
                  🎬
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--fg-primary)', marginBottom: 'var(--space-1)' }}>TokitoTV</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--fg-muted)', lineHeight: 1.5 }}>Anime streaming app with trending shows, continue watching, and dark theme</p>
                  <span className="badge badge-primary" style={{ marginTop: 'var(--space-2)' }}>Entertainment</span>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--fg-muted)" strokeWidth="2" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>

              {/* YT Notes Maker Card */}
              <Link
                to="/apps/yt-notes-maker"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-5)',
                  padding: 'var(--space-6)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-primary)',
                  borderRadius: 'var(--radius-xl)',
                  textDecoration: 'none',
                  transition: 'all var(--transition-base)',
                  boxShadow: 'var(--shadow-lg)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#C8ACD6';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(200,172,214,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-primary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 16,
                    background: 'linear-gradient(135deg, #C8ACD6, #C8ACD6cc)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 28,
                    flexShrink: 0,
                    boxShadow: '0 8px 24px rgba(200,172,214,0.2)',
                  }}
                >
                  📝
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--fg-primary)', marginBottom: 'var(--space-1)' }}>YT Notes Maker</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--fg-muted)', lineHeight: 1.5 }}>Turn YouTube videos into AI-powered notes, flashcards, and quizzes</p>
                  <span className="badge badge-secondary" style={{ marginTop: 'var(--space-2)' }}>Productivity</span>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--fg-muted)" strokeWidth="2" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
