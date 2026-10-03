import Reveal from './Reveal';

const stats = [
  { value: '15K+', label: 'Total downloads' },
  { value: '4.8/5', label: 'Average rating' },
  { value: '4,081', label: 'User reviews' },
  { value: '100%', label: 'Free & open source' },
];

export default function Stats() {
  return (
    <section aria-label="Store highlights" style={{ padding: '0 0 var(--space-4)' }}>
      <div className="container">
        <Reveal>
          <dl
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              background: 'var(--surface)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-sm)',
            }}
            className="stats-strip"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  padding: 'var(--space-6) var(--space-4)',
                  textAlign: 'center',
                  borderLeft: i === 0 ? 'none' : '1px solid var(--line)',
                }}
                className="stat-cell"
              >
                <dt style={{ order: 2, fontSize: 'var(--text-xs)', color: 'var(--muted)', fontWeight: 500, marginTop: 4 }}>{s.label}</dt>
                <dd style={{ order: 1, fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--ink)', margin: 0 }}>
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .stats-strip { grid-template-columns: repeat(2, 1fr) !important; }
          .stat-cell:nth-child(3) { border-left: none !important; border-top: 1px solid var(--line); }
          .stat-cell:nth-child(4) { border-top: 1px solid var(--line); }
        }
      `}</style>
    </section>
  );
}
