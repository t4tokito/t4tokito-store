import Reveal from './Reveal';

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: 'Private by default',
    description: 'No tracking SDKs, no analytics, no data brokers. The website collects nothing — the apps ask for nothing they don\u2019t need.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Fully open source',
    description: 'TokitoTV and YT Notes Maker live on GitHub under permissive licences. Read every line, file issues, send PRs.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Fast & lightweight',
    description: '25–30 MB downloads, native performance via Expo and React Native, offline-first where it matters. No bloat, no splash-screen ads.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="4" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: 'Designed, not decorated',
    description: 'Dark themes built for late-night anime sessions, clean reading views for study notes. Every screen earns its place.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
    title: 'Direct APK downloads',
    description: 'No third-party stores, no bundled installers, no “download managers”. Grab the APK here or build it yourself from source.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Built in the open, with you',
    description: 'Feature requests and bug reports come straight from users on GitHub. The roadmap is public and shaped by real feedback.',
  },
];

export default function Features() {
  return (
    <section id="features" className="section" aria-labelledby="features-heading" style={{ background: 'var(--surface)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="container">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">Why t4tokito</p>
            <h2 id="features-heading">The Play Store gives you ads.<br />We give you the source code.</h2>
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--muted)', marginTop: 'var(--space-3)' }}>
              Six promises every t4tokito app keeps — so you can install with confidence.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-3" style={{ gap: 'var(--space-4)' }}>
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 90}>
              <div className="card card-hover" style={{ padding: 'var(--space-6)', height: '100%' }}>
                <div
                  aria-hidden="true"
                  style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: 'var(--brand-soft)', color: 'var(--brand)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 'var(--space-4)',
                  }}
                >
                  {f.icon}
                </div>
                <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-2)' }}>{f.title}</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)', lineHeight: 1.7 }}>{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
