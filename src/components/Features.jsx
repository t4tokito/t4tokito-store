export default function Features() {
  const features = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: 'Privacy First',
      description: 'No tracking, no analytics, no data collection. Your usage stays yours.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: 'Modern Tech Stack',
      description: 'Built with Expo, React Native, and cutting-edge tools for smooth performance.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: 'Open Source',
      description: 'Every app is fully open source on GitHub. Read, audit, and contribute.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: 'Blazing Fast',
      description: 'Optimized for speed with lazy loading, efficient caching, and native performance.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
      title: 'Beautiful Design',
      description: 'Carefully crafted dark themes and smooth animations for a premium feel.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      title: 'Community Driven',
      description: 'Request features, report bugs, and shape the future of these apps together.',
    },
  ];

  return (
    <section id="features" className="section" aria-labelledby="features-heading">
      <div className="container">
        <header className="section-header">
          <h2 id="features-heading" className="section-title animate-slide-up">
            Why Choose <span className="gradient-text">t4tokito</span>
          </h2>
          <p className="section-subtitle animate-slide-up stagger-1">
            Built by a developer, for users who care about quality, privacy, and open source.
          </p>
        </header>

        <div className="features-grid grid grid-3" style={{ gap: 'var(--space-6)' }}>
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card animate-slide-up"
              style={{
                padding: 'var(--space-8)',
                animationDelay: `${(index + 1) * 100}ms`,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--accent-primary-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-primary)',
                  marginBottom: 'var(--space-5)',
                }}
              >
                {feature.icon}
              </div>
              <h3
                style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-3)',
                  color: 'var(--fg-primary)',
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  color: 'var(--fg-secondary)',
                  fontSize: 'var(--text-sm)',
                  lineHeight: 1.7,
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
