import { useState } from 'react';
import Reveal from './Reveal';
import { faqs } from '../data/faqs';

function FaqItem({ q, a, open, onToggle, index }) {
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <h3 style={{ fontSize: 'var(--text-base)' }}>
        <button
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`faq-panel-${index}`}
          id={`faq-button-${index}`}
          style={{
            all: 'unset', boxSizing: 'border-box', cursor: 'pointer', width: '100%',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: 'var(--space-4)', padding: 'var(--space-5) var(--space-6)',
            fontWeight: 600, fontSize: 'var(--text-base)', color: 'var(--ink)',
          }}
        >
          <span>{q}</span>
          <span className="faq-icon" aria-hidden="true" style={{
            flexShrink: 0, width: 28, height: 28, borderRadius: '50%',
            background: open ? 'var(--brand-soft)' : 'var(--surface-2)',
            color: open ? 'var(--brand)' : 'var(--muted)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            transform: open ? 'rotate(45deg)' : 'none', transition: 'transform var(--transition-base)',
            fontSize: '1.2rem', lineHeight: 1,
          }}>
            +
          </span>
        </button>
      </h3>
      <div
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-button-${index}`}
        hidden={!open}
        style={{ padding: open ? '0 var(--space-6) var(--space-6)' : undefined }}
      >
        {open && <p style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-2)', lineHeight: 1.75 }}>{a}</p>}
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section" aria-labelledby="faq-heading">
      <div className="container" style={{ maxWidth: 760 }}>
        <Reveal className="section-head center">
          <div style={{ textAlign: 'center' }}>
            <p className="eyebrow">FAQ</p>
            <h2 id="faq-heading">Questions, answered.</h2>
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--muted)', marginTop: 'var(--space-3)' }}>
              Everything you need to know before installing.
            </p>
          </div>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <FaqItem
                q={f.q}
                a={f.a}
                index={i}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
