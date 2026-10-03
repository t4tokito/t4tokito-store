import Reveal from './Reveal';

const testimonials = [
  {
    name: 'Rohan S.',
    role: 'TokitoTV user · anime fan',
    initials: 'RS',
    content: 'Deleted three other anime apps after trying TokitoTV. Continue-watching actually works, the dark theme is easy on the eyes, and there isn\u2019t a single ad in sight.',
  },
  {
    name: 'Priya M.',
    role: 'YT Notes Maker user · student',
    initials: 'PM',
    content: 'I paste my lecture videos in and get clean notes with flashcards before my chai cools down. It cut my revision prep from hours to minutes.',
  },
  {
    name: 'Arjun K.',
    role: 'Open-source contributor',
    initials: 'AK',
    content: 'Rare to see mobile apps this polished that are also fully open source. I read the codebase, filed an issue, and the fix landed within days.',
  },
];

function Stars() {
  return (
    <span className="stars" aria-label="5 out of 5 stars" role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </span>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="section" aria-labelledby="reviews-heading" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal className="section-head center">
          <div style={{ textAlign: 'center' }}>
            <p className="eyebrow">Reviews</p>
            <h2 id="reviews-heading">Loved by users,<br />trusted by developers.</h2>
          </div>
        </Reveal>

        <div className="grid grid-3" style={{ gap: 'var(--space-4)' }}>
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="card card-hover" style={{ padding: 'var(--space-6)', height: '100%', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', margin: 0 }}>
                <Stars />
                <blockquote style={{ fontSize: 'var(--text-base)', color: 'var(--ink-2)', lineHeight: 1.7, flex: 1 }}>
                  “{t.content}”
                </blockquote>
                <figcaption style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', borderTop: '1px solid var(--line)', paddingTop: 'var(--space-4)' }}>
                  <span
                    aria-hidden="true"
                    style={{
                      width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                      background: 'var(--brand-soft)', color: 'var(--brand)',
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 700, fontSize: 'var(--text-sm)',
                    }}
                  >
                    {t.initials}
                  </span>
                  <span>
                    <span style={{ display: 'block', fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--ink)' }}>{t.name}</span>
                    <span style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
