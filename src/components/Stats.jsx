export default function Stats() {
  const stats = [
    { label: '2 Apps Published', icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
    )},
    { label: 'Free & Open Source', icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    )},
    { label: 'No Ads', icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /></svg>
    )},
  ];

  return (
    <section style={{ padding: 'var(--space-8) 0' }} aria-label="Store info">
      <div className="container">
        <div
          className="stats-bar"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-6)',
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="stat-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                fontSize: 'var(--text-sm)',
                color: '#B5B9F0',
                fontWeight: 500,
              }}
            >
              <span style={{ display: 'flex', color: '#B5B9F0', opacity: 0.7 }}>{stat.icon}</span>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
