'use client'

import Image from 'next/image'

export default function AboutUsPage() {
  return (
    <div className="about-page">
      {/* ── HERO ── */}
      <section className="props-hero">
        <div className="props-hero-deco" />
        <div className="props-hero-inner">
          <div className="eyebrow">Our Story · Rakma Global</div>
          <h1 className="props-hero-h">
            Our <em>Story.</em>
          </h1>
          <p className="props-hero-sub" style={{ maxWidth: '800px' }}>
            Rakma Global was created to make private real estate feel more accessible to everyday investors.
          </p>
        </div>
      </section>

      {/* ── THE GAP ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="vis-grid">
            <div className="reveal-left">
              <p className="vis-body" style={{ fontSize: '18px', lineHeight: '1.7', color: 'var(--ink)' }}>
                We saw a gap in the market. On one side, direct real estate ownership can be costly, time-consuming, and difficult to manage. 
                On the other side, many investment opportunities feel too complex or too closed off for a typical retail investor.
              </p>
              <p className="vis-body" style={{ fontSize: '18px', lineHeight: '1.7', color: 'var(--ink)', marginTop: '24px' }}>
                Rakma Global was built to bridge that gap with a platform that is easier to understand and more welcoming to invest through.
              </p>
            </div>
            <div className="reveal">
              <div className="vis-img-wrap" style={{ height: '400px' }}>
                <Image 
                  src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80" 
                  alt="Our Vision" 
                  fill
                  style={{ objectFit: 'cover', borderRadius: '12px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY WE EXIST ── */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div className="reveal-left">
            <div className="eyebrow">Purpose</div>
            <h2 className="section-h">Why We <em>Exist.</em></h2>
            <p className="vis-body" style={{ maxWidth: '700px', fontSize: '17px' }}>
              We believe real estate investing should not feel intimidating. 
              It should feel grounded, understandable, and connected to real assets. 
              That is why we are focused on clear structures, transparent communication, and thoughtful property selection. 
              We want investors to feel informed, respected, and excited about the opportunities they are reviewing.
            </p>
          </div>
        </div>
      </section>

      {/* ── OUR JOURNEY ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="vis-grid" style={{ gridTemplateColumns: '1fr 1.2fr', gap: '80px' }}>
            <div className="reveal">
              <div className="vis-img-wrap" style={{ height: '500px' }}>
                <Image 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" 
                  alt="Our Journey" 
                  fill
                  style={{ objectFit: 'cover', borderRadius: '12px' }}
                />
              </div>
            </div>
            <div className="reveal-left">
              <div className="eyebrow">Milestones</div>
              <h2 className="section-h">Our <em>Journey.</em></h2>
              <p className="vis-body">
                We are beginning with a focused portfolio of properties in Canada and building from there.
              </p>
              <p className="vis-body" style={{ marginTop: '20px' }}>
                The first stage of Rakma Global is intentionally small and deliberate. We are laying the foundation with a handful of properties, learning from each opportunity, and building a platform that can grow responsibly over time. 
              </p>
              <p className="vis-body" style={{ marginTop: '20px' }}>
                As we expand, we plan to introduce more residential funds, multi-residential strategies, and development opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE BELIEVE IN ── */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="eyebrow">Values</div>
            <h2 className="section-h">What We <em>Believe In.</em></h2>
          </div>
          <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {[
              "Investors deserve clarity.",
              "Great opportunities should be easy to understand.",
              "Real estate should feel like a tangible path to wealth-building.",
              "Trust is built through transparency, not hype.",
              "Growth should be thoughtful, not rushed."
            ].map((belief, i) => (
              <div key={i} className={`stat-item reveal delay-${i}`} style={{ textAlign: 'left', padding: '32px', background: 'var(--white)', borderRadius: '16px', border: '1px solid var(--border)' }}>
                <p style={{ fontFamily: 'var(--serif)', fontSize: '20px', color: 'var(--ink)', lineHeight: '1.4' }}>{belief}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION & COMMITMENT ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="vis-grid">
            <div className="reveal-left">
              <div className="eyebrow">Future</div>
              <h2 className="section-h">Our <em>Vision.</em></h2>
              <p className="vis-body" style={{ fontSize: '19px', color: 'var(--ink3)' }}>
                To become a trusted Canadian real estate investment platform that helps investors build long-term wealth through carefully selected property-backed opportunities.
              </p>
            </div>
            <div className="reveal">
              <div className="eyebrow">Promise</div>
              <h2 className="section-h">Our <em>Commitment.</em></h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  "Transparent communication.",
                  "Professional asset management.",
                  "Honest disclosure of terms and risks.",
                  "A long-term relationship with every investor."
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--muted)', fontSize: '16px' }}>
                    <div style={{ width: '6px', height: '6px', background: 'var(--terra)', borderRadius: '50%' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL MESSAGE ── */}
      <section className="section" style={{ background: 'var(--bg2)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="reveal">
            <h2 className="section-h" style={{ fontSize: '32px' }}>A More Human Way to Invest</h2>
            <p style={{ color: 'var(--muted)', fontSize: '18px', lineHeight: '1.7', marginBottom: '40px' }}>
              Rakma Global was built for investors who want something more human, more transparent, and more aligned with their long-term financial goals.
            </p>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '22px', fontStyle: 'italic', color: 'var(--terra)' }}>
              We invite you to join us on this journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
