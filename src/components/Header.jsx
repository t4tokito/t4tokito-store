import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { href: '#apps', label: 'Apps' },
  { href: '#features', label: 'Features' },
  { href: '#testimonials', label: 'Reviews' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`header ${scrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--header-height)',
        background: scrolled
          ? 'rgba(10, 10, 10, 0.95)'
          : 'transparent',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid var(--border-primary)' : 'none',
        zIndex: 50,
        transition: 'all var(--transition-base)',
        display: 'flex',
        alignItems: 'center',
      }}
      role="banner"
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', width: '100%' }}>
        {/* Logo */}
        <Link
          to="/"
          className="logo"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-3)',
            textDecoration: 'none',
            color: 'var(--fg-primary)',
          }}
          aria-label="t4tokito Store - Home"
        >
          <div style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            overflow: 'hidden',
            flexShrink: 0,
          }}>
            <img src="/logo.jpeg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <span style={{
            fontSize: 'var(--text-xl)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg, var(--fg-primary), var(--fg-secondary))',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            backgroundClip: 'text',
          }}>
            t4tokito Store
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-desktop" style={{ display: 'none' }} aria-label="Main navigation">
          <ul style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)', listStyle: 'none' }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    color: 'var(--fg-secondary)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 500,
                    transition: 'color var(--transition-fast)',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--fg-primary)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--fg-secondary)'}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="header-cta" style={{ display: 'none' }}>
          <Link to="/apps/tokitotv" className="btn btn-primary btn-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 44,
            height: 44,
            borderRadius: 'var(--radius-md)',
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border-primary)',
            color: 'var(--fg-primary)',
          }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="mobile-menu"
          style={{
            position: 'fixed',
            top: 'var(--header-height)',
            left: 0,
            right: 0,
            background: 'rgba(10, 10, 10, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-primary)',
            padding: 'var(--space-6) var(--container-padding)',
            zIndex: 49,
            animation: 'slideDown var(--transition-base) ease-out',
          }}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  padding: 'var(--space-3) var(--space-4)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--fg-secondary)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 500,
                  transition: 'all var(--transition-fast)',
                }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/apps/tokitotv"
              className="btn btn-primary btn-full"
              style={{ marginTop: 'var(--space-4)' }}
              onClick={() => setMobileOpen(false)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Get Started Free
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .nav-desktop { display: flex !important; }
          .header-cta { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}