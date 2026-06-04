'use client'

const FAQS = [
  {
    q: "What is Rakma Global?",
    a: "Rakma Global is a Canadian private real estate investment platform that offers property-backed opportunities to investors."
  },
  {
    q: "Who is this for?",
    a: "It is for investors who want access to real estate in a way that is clear, professional, and easier to understand."
  },
  {
    q: "What is the minimum investment?",
    a: "The minimum investment for the first product is $10,000."
  },
  {
    q: "How do investors earn returns?",
    a: "Investors may receive quarterly income distributions during the hold period and may also benefit from capital appreciation when the property is exited, depending on the terms of the investment."
  },
  {
    q: "What kinds of properties are you starting with?",
    a: "We are starting with single-family homes and one multi-family property in Canada."
  },
  {
    q: "How long is the investment term?",
    a: "The expected hold period is 3 to 5 years, depending on the property."
  },
  {
    q: "What happens after the first product?",
    a: "Rakma Global plans to expand into more properties, residential funds, and development projects over time."
  },
  {
    q: "Is this suitable for a retail investor?",
    a: "Our goal is to make the platform clear and approachable for retail investors, but every investor should review the full offering documents carefully and consider their own financial situation."
  },
  {
    q: "Is the 5% return guaranteed?",
    a: "That wording should only be used if it is fully supported by the final legal structure and disclosure documents. It should be reviewed carefully before launch."
  }
]

export default function FAQPage() {
  return (
    <div className="faq-page">
      {/* ── HERO ── */}
      <section className="props-hero">
        <div className="props-hero-deco" />
        <div className="props-hero-inner">
          <div className="eyebrow">Support · Rakma Global</div>
          <h1 className="props-hero-h">
            Frequently Asked <em>Questions.</em>
          </h1>
          <p className="props-hero-sub">
            Everything you need to know about fractional real estate investing, 
            our platform, and how we help you build wealth.
          </p>
        </div>
      </section>

      {/* ── FAQ LIST ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="faq-list">
            {FAQS.map((faq, i) => (
              <div key={i} className="reveal" style={{ 
                padding: '32px 0', 
                borderBottom: '1px solid var(--border)',
                animationDelay: `${i * 0.1}s`
              }}>
                <h3 style={{ 
                  fontFamily: 'var(--serif)', 
                  fontSize: '22px', 
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px'
                }}>
                  <span style={{ color: 'var(--terra)', fontFamily: 'var(--mono)', fontSize: '14px', marginTop: '4px' }}>Q.</span>
                  {faq.q}
                </h3>
                <div style={{ 
                  paddingLeft: '32px',
                  color: 'var(--muted)',
                  fontSize: '16px',
                  lineHeight: '1.7'
                }}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ 
            marginTop: '80px', 
            padding: '48px', 
            background: 'var(--bg2)', 
            borderRadius: '24px', 
            textAlign: 'center' 
          }}>
            <h2 className="section-h" style={{ fontSize: '32px', marginBottom: '16px' }}>Ready to explore?</h2>
            <p style={{ color: 'var(--muted)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
              If you are new to private real estate investing, our goal is to make the experience feel easier to understand and more comfortable to explore.
            </p>
            <button className="nbtn nbtn-solid" style={{ margin: '0 auto' }}>
              Explore Opportunities
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
