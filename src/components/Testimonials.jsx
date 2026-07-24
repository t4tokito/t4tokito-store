export default function Testimonials() {
  const testimonials = [
    {
      name: 'Anime Fan',
      role: 'TokitoTV User',
      content: 'Best anime streaming app I\'ve used. The dark theme is gorgeous and the AniList integration means I always find what I\'m looking for.',
      rating: 5,
      avatar: '🎧',
    },
    {
      name: 'Student',
      role: 'YT Notes Maker User',
      content: 'This app saved me hours of note-taking. I just paste a lecture video URL and get perfectly structured notes. The flashcards feature is a game changer.',
      rating: 5,
      avatar: '📚',
    },
    {
      name: 'Developer',
      role: 'Open Source Contributor',
      content: 'Love that these apps are fully open source. Clean code, modern stack, and great documentation. Already contributed a PR!',
      rating: 5,
      avatar: '💻',
    },
  ];

  return (
    <section id="testimonials" className="section" aria-labelledby="testimonials-heading">
      <div className="container">
        <header className="section-header">
          <h2 id="testimonials-heading" className="section-title animate-slide-up">
            What Users Say
          </h2>
          <p className="section-subtitle animate-slide-up stagger-1">
            Real feedback from people who use our apps every day.
          </p>
        </header>

        <div className="testimonials-grid grid grid-3" style={{ gap: 'var(--space-6)' }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card animate-slide-up"
              style={{
                padding: 'var(--space-8)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-4)',
                animationDelay: `${(index + 1) * 100}ms`,
              }}
            >
              <div style={{ display: 'flex', gap: 'var(--space-1)' }}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="var(--accent-primary)"
                    aria-hidden="true"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              <p
                style={{
                  color: 'var(--fg-secondary)',
                  fontSize: 'var(--text-sm)',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                  flex: 1,
                }}
              >
                "{testimonial.content}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                  }}
                  aria-hidden="true"
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: 'var(--text-sm)',
                      color: 'var(--fg-primary)',
                    }}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    style={{
                      fontSize: 'var(--text-xs)',
                      color: 'var(--fg-muted)',
                    }}
                  >
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
