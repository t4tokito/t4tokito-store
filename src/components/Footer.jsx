import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'TokitoTV', href: '/apps/tokitotv' },
      { label: 'YT Notes Maker', href: '/apps/yt-notes-maker' },
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#' },
      { label: 'Changelog', href: '#' },
    ],
    company: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    resources: [
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Support', href: '#' },
      { label: 'Status', href: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Licenses', href: '#' },
    ],
  };

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/t4tokito', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    )},
    { label: 'Twitter', href: 'https://twitter.com/t4tokito', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 9.24h-3.304l-7.645-8.452-7.892 8.452h-3.304l8.503-9.242-7.23-8.26h3.307l7.145 8.178L18.244 2.25z"/>
      </svg>
    )},
    { label: 'Discord', href: '#', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.675 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.083.083 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-.215.076.076 0 0 0 .04-.116 13.107 13.107 0 0 0-.755-1.464.07.07 0 0 1-.007-.128 10.2 10.2 0 0 1 .186-.366.074.074 0 0 1 .084-.028c1.225.174 2.46.283 3.698.283 1.236 0 2.47-.109 3.695-.282a.077.077 0 0 1 .083.028c.477.147.95.263 1.408.347a.068.068 0 0 1 .039.116 13.22 13.22 0 0 0-.773 1.465.07.07 0 0 0 .04.116c.418.08.84.15 1.258.215a.077.077 0 0 0 .083.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.414-4.478-.421-9.013-1.961-13.662a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333 1.056-2.419 2.275-2.419 1.212 0 2.255 1.057 2.172 2.419 0 1.317-1.05 2.419-2.29 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333 1.056-2.419 2.275-2.419 1.212 0 2.255 1.057 2.172 2.419 0 1.317-1.05 2.419-2.29 2.419z"/>
      </svg>
    )},
    { label: 'YouTube', href: '#', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    )},
  ];

  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-primary)',
        padding: 'var(--space-16) 0 var(--space-8)',
        marginTop: 'var(--space-16)',
      }}
      role="contentinfo"
    >
      <div className="container">
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr repeat(4, 1fr)', gap: 'var(--space-10)', marginBottom: 'var(--space-12)' }}>
          <div style={{ maxWidth: 300 }}>
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                fontSize: 'var(--text-xl)',
                fontWeight: 700,
                color: 'var(--fg-primary)',
                marginBottom: 'var(--space-4)',
              }}
              aria-label="t4tokito Store Home"
            >
              <span
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  flexShrink: 0,
                  display: 'inline-block',
                }}
              >
                <img src="/logo.jpeg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </span>
              <span style={{ letterSpacing: '-0.02em' }}>t4tokito Store</span>
            </Link>
            <p style={{ color: 'var(--fg-muted)', fontSize: 'var(--text-sm)', lineHeight: 1.7, marginBottom: 'var(--space-6)' }}>
              Official app store for t4tokito apps. Download TokitoTV and YT Notes Maker for Android.
            </p>
            <div className="footer-social" style={{ display: 'flex', gap: 'var(--space-3)' }}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--fg-secondary)',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-primary)';
                    e.currentTarget.style.color = 'var(--accent-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-primary)';
                    e.currentTarget.style.color = 'var(--fg-secondary)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <nav key={category} aria-label={`${category} links`}>
              <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--fg-primary)', marginBottom: 'var(--space-4)' }}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      style={{
                        color: 'var(--fg-secondary)',
                        fontSize: 'var(--text-sm)',
                        transition: 'color var(--transition-fast)',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--fg-secondary)'}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div
          className="footer-bottom"
          style={{
            borderTop: '1px solid var(--border-primary)',
            paddingTop: 'var(--space-8)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 'var(--space-4)',
          }}
        >
          <p style={{ color: 'var(--fg-muted)', fontSize: 'var(--text-sm)' }}>
            &copy; {currentYear} t4tokito Store. All rights reserved.
          </p>
          <div className="footer-links" style={{ display: 'flex', gap: 'var(--space-6)' }}>
            <Link to="/privacy" style={{ color: 'var(--fg-muted)', fontSize: 'var(--text-sm)', transition: 'color var(--transition-fast)' }}>
              Privacy Policy
            </Link>
            <Link to="/terms" style={{ color: 'var(--fg-muted)', fontSize: 'var(--text-sm)', transition: 'color var(--transition-fast)' }}>
              Terms of Service
            </Link>
            <Link to="#" style={{ color: 'var(--fg-muted)', fontSize: 'var(--text-sm)', transition: 'color var(--transition-fast)' }}>
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}