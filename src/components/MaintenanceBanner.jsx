/** Notice shown for apps temporarily under maintenance. */
export default function MaintenanceBanner({ app, compact = false }) {
  if (!app?.maintenance) return null;
  return (
    <div
      role="status"
      style={{
        display: 'flex',
        gap: 'var(--space-4)',
        alignItems: 'flex-start',
        background: 'var(--amber-soft)',
        border: '1px solid var(--amber)',
        borderRadius: 'var(--radius-lg)',
        padding: compact ? 'var(--space-4) var(--space-5)' : 'var(--space-5) var(--space-6)',
      }}
    >
      <span
        aria-hidden="true"
        style={{
          flexShrink: 0, width: 36, height: 36, borderRadius: 10,
          background: 'var(--amber)', color: '#09090b',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      </span>
      <div>
        <p style={{ fontWeight: 700, color: 'var(--ink)', fontSize: 'var(--text-base)' }}>
          Under maintenance
        </p>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-2)', marginTop: 2 }}>
          {app.maintenanceNote || 'Downloads for this app are temporarily paused. Please check back soon.'}
        </p>
      </div>
    </div>
  );
}
