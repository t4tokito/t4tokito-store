import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const navLinks = [
  { href: '#apps', label: 'Apps' },
  { href: '#features', label: 'Why us' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
];

function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const linkHref = (href) => (isHome ? href : `/${href}`);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--header-height)',
        zIndex: 60,
        background: scrolled || mobileOpen ? 'color-mix(in srgb, var(--bg) 86%, transparent)' : 'transparent',
        backdropFilter: scrolled || mobileOpen ? 'blur(16px) saturate(1.4)' : 'none',
        WebkitBackdropFilter: scrolled || mobileOpen ? 'blur(16px) saturate(1.4)' : 'none',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
        transition: 'background var(--transition-base), border-color var(--transition-base)',
      }}
      role="banner"
    >
      <div
        className="container"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', gap: 'var(--space-4)' }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--ink)' }} aria-label="t4tokito Store — home">
          <span style={{ width: 34, height: 34, borderRadius: 10, overflow: 'hidden', flexShrink: 0, border: '1px solid var(--line)', boxShadow: 'var(--shadow-sm)', display: 'inline-block' }}>
            <img src="/logo.jpeg" alt="" width="34" height="34" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </span>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.02em' }}>
            t4tokito<span style={{ color: 'var(--muted)', fontWeight: 500 }}> Store</span>
          </span>
        </Link>

        <nav className="nav-desktop" aria-label="Primary" style={{ display: 'none' }}>
          <ul style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)', listStyle: 'none' }}>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={linkHref(l.href)}
                  className="nav-link"
                  style={{ color: 'var(--ink-2)', fontSize: 'var(--text-sm)', fontWeight: 500 }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
          <a
            href="https://github.com/t4tokito"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="t4tokito on GitHub"
            className="no-print"
            style={{
              width: 38, height: 38, borderRadius: 10, display: 'none',
              alignItems: 'center', justifyContent: 'center', color: 'var(--ink-2)',
              border: '1px solid transparent',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--line-strong)'; e.currentTarget.style.color = 'var(--ink)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.color = 'var(--ink-2)'; }}
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          <button
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            style={{
              width: 38, height: 38, borderRadius: 10, display: 'inline-flex',
              alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
              background: 'transparent', border: '1px solid transparent', color: 'var(--ink-2)',
              transition: 'all var(--transition-fast)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--line-strong)'; e.currentTarget.style.color = 'var(--ink)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.color = 'var(--ink-2)'; }}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <Link to="/apps/tokitotv" className="btn btn-primary btn-sm header-cta" style={{ display: 'none', marginLeft: 4 }}>
            Get apps — free
          </Link>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: 40, height: 40, borderRadius: 10, cursor: 'pointer',
              background: 'var(--surface)', border: '1px solid var(--line)', color: 'var(--ink)',
            }}
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="animate-fade"
          role="navigation"
          aria-label="Mobile"
          style={{
            position: 'fixed', top: 'var(--header-height)', left: 0, right: 0, bottom: 0,
            background: 'var(--bg)', padding: 'var(--space-6) var(--container-padding)', zIndex: 59,
          }}
        >
          <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {navLinks.map((l, i) => (
              <a
                key={l.href}
                href={linkHref(l.href)}
                onClick={() => setMobileOpen(false)}
                className="animate-rise"
                style={{
                  animationDelay: `${i * 60}ms`, padding: '14px 6px',
                  fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 700,
                  color: 'var(--ink)', letterSpacing: '-0.02em',
                  borderBottom: '1px solid var(--line)',
                }}
              >
                {l.label}
              </a>
            ))}
            <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
              <Link to="/apps/tokitotv" className="btn btn-primary btn-lg btn-full" onClick={() => setMobileOpen(false)}>
                Get apps — free
              </Link>
            </div>
            <a
              href="https://github.com/t4tokito"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-full"
              style={{ marginTop: 'var(--space-3)' }}
            >
              GitHub
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .nav-desktop { display: block !important; }
          .header-cta { display: inline-flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (min-width: 860px) {
          header a[aria-label="t4tokito on GitHub"] { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
}
