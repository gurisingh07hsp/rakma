'use client'

import Image from 'next/image'

interface InvestmentsPageProps {
  onNavigate: (page: any) => void
}

export default function InvestmentsPage({ onNavigate }: InvestmentsPageProps) {
  return (
    <div className="investments-page">
      {/* ── HERO ── */}
      <section className="props-hero">
        <div className="props-hero-deco" />
        <div className="props-hero-inner">
          <div className="eyebrow">Portfolio · Rakma Global</div>
          <h1 className="props-hero-h">
            Our Investment <em>Opportunities.</em>
          </h1>
          <p className="props-hero-sub" style={{ maxWidth: '800px' }}>
            Rakma Global is building a growing suite of real estate investment products designed to meet investors where they are today, while giving them more choice and flexibility in the future.
          </p>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="section" style={{ background: 'var(--white)', paddingBottom: '60px' }}>
        <div className="container">
          <div className="reveal">
            <p style={{ fontSize: '18px', lineHeight: '1.7', color: 'var(--ink)', maxWidth: '900px' }}>
              We believe private real estate investing should feel clear, structured, and aligned with your financial goals. 
              That is why we started with a simple, focused product — and why we are intentionally expanding into more strategies over time.
            </p>
          </div>
        </div>
      </section>

      {/* ── CURRENT OPPORTUNITY ── */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div className="vis-grid">
            <div className="reveal-left">
              <div className="eyebrow">Current Opportunity</div>
              <h2 className="section-h">Single Property <em>Investments.</em></h2>
              <p className="vis-body">
                Our first offering gives investors the chance to invest directly into a specific Canadian property.
              </p>
              <p className="vis-body" style={{ marginTop: '20px' }}>
                Unlike broad, generalized funds, each single-property investment is tied to one asset. 
                That means you can see exactly where your capital is going, understand the return structure clearly, 
                and know the expected investment term before you commit.
              </p>
              
              <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                  <h4 style={{ fontFamily: 'var(--mono)', fontSize: '11px', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '12px' }}>Key Features</h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {[
                      "Minimum investment: $10,000.",
                      "Quarterly income distributions.",
                      "5% annual income component, paid quarterly.",
                      "Additional upside from capital appreciation at exit.",
                      "Hold period of 3 to 5 years, depending on the property."
                    ].map((item, i) => (
                      <li key={i} style={{ fontSize: '14px', color: 'var(--ink3)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '4px', height: '4px', background: 'var(--terra)', borderRadius: '50%' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--mono)', fontSize: '11px', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '12px' }}>Who This Is For</h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {[
                      "Investors who want a clear, property-backed investment.",
                      "People who like to understand exactly what they are investing in.",
                      "Investors seeking quarterly income and long-term growth potential."
                    ].map((item, i) => (
                      <li key={i} style={{ fontSize: '14px', color: 'var(--ink3)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '4px', height: '4px', background: 'var(--terra)', borderRadius: '50%' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <button 
                className="hbtn hbtn-fill" 
                style={{ marginTop: '48px' }}
                onClick={() => onNavigate('single-family')}
              >
                Learn About Our Single Property Investment
              </button>
            </div>
            <div className="reveal">
              <div className="vis-img-wrap" style={{ height: '500px' }}>
                <Image 
                  src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80" 
                  alt="Single Property Investment" 
                  fill
                  style={{ objectFit: 'cover', borderRadius: '12px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── UPCOMING OPPORTUNITIES ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div className="eyebrow">The Future</div>
            <h2 className="section-h">Upcoming <em>Opportunities.</em></h2>
            <p style={{ color: 'var(--muted)', maxWidth: '700px', margin: '0 auto' }}>
              Over time, Rakma Global will introduce additional investment strategies that expand access to more types of real estate while maintaining the same focus on clarity, transparency, and investor confidence.
            </p>
          </div>

          <div className="props-grid">
            {[
              {
                title: "Multi-Residential Fund",
                desc: "A future fund focused on apartment-style and multi-unit residential properties. This strategy is designed to provide exposure to a diversified portfolio of income-producing residential assets.",
                tag: "Coming Soon"
              },
              {
                title: "Residential Portfolio Fund",
                desc: "A broader residential fund that offers exposure to multiple properties within one structure, providing diversification across assets while maintaining a clear investment objective.",
                tag: "Coming Soon"
              },
              {
                title: "Development Opportunities",
                desc: "Longer-term opportunities focused on new construction, redevelopment, and value creation through active project execution. These investments are designed for investors comfortable with longer time horizons and more active value-add strategies.",
                tag: "Coming Soon"
              }
            ].map((item, i) => (
              <div key={i} className="prop-card reveal" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
                <div className="prop-content" style={{ padding: '40px' }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.tag}</span>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: '22px', margin: '12px 0 16px', color: 'var(--ink)' }}>{item.title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: '1.6' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ marginTop: '40px', padding: '40px', background: 'var(--terra-pale)', borderRadius: '16px', border: '1px solid var(--terra-pale2)' }}>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: '20px', marginBottom: '12px' }}>Future Strategies</h3>
            <p style={{ color: 'var(--muted)', fontSize: '15px' }}>
              As Rakma Global grows, we will continue to explore new real estate opportunities aligned with investor needs, market conditions, and our long-term vision.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY WE ARE GROWING ── */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div className="reveal-left">
            <div className="eyebrow">Our Growth</div>
            <h2 className="section-h">Why We Are <em>Growing This Way.</em></h2>
            <div style={{ maxWidth: '800px' }}>
              <p className="vis-body" style={{ fontSize: '18px', color: 'var(--ink)' }}>
                We believe investor confidence is built through consistency, clarity, and performance over time.
              </p>
              <p className="vis-body" style={{ marginTop: '24px' }}>
                That means starting with one clear product, delivering a strong experience, and then expanding thoughtfully. 
                It also means making sure each new strategy adds value without making the platform harder to understand. 
                That is the kind of progression investors can follow, trust, and feel good about joining.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL MESSAGE ── */}
      <section className="section" style={{ background: 'var(--white)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="reveal">
            <h2 className="section-h" style={{ fontSize: '32px' }}>A Clear Path to Private Real Estate</h2>
            <p style={{ color: 'var(--muted)', fontSize: '18px', lineHeight: '1.7', marginBottom: '32px' }}>
              Rakma Global is designed to give you a clear path into private real estate today, with more opportunities to come as we grow. 
              Whether you want to start with a single property or explore broader strategies later, our goal is to make the experience feel simple, professional, and rewarding.
            </p>
            <button 
              className="nbtn nbtn-solid" 
              style={{ margin: '0 auto' }}
              onClick={() => onNavigate('properties')}
            >
              View Available Properties
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
