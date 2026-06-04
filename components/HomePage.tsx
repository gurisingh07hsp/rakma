'use client'

import Image from 'next/image'
import { Property, PROPERTIES, INSIGHTS } from '@/lib/data'
import Ticker from './Ticker'
import PropertyCard from './PropertyCard'

interface HomePageProps {
  onNavigate: (page: 'home' | 'properties' | 'about' | 'investments') => void
  onOpenModal: (property: Property) => void
}

const EXPECTATIONS = [
  "Access to Canadian real estate-backed opportunities you can understand.",
  "A minimum investment starting at $10,000, making it more accessible than direct ownership.",
  "Quarterly income distributions, giving you a sense of regular cash flow.",
  "The potential to benefit from capital appreciation when a property is sold or refinanced.",
  "Clear hold periods, typically 3 to 5 years, depending on the property.",
  "A platform that is designed to grow alongside your investment goals over time."
]

const EXPANSION_PLANS = [
  "Multi-residential funds",
  "Broader residential portfolios",
  "Development projects",
  "Additional strategies that align with investor needs and market opportunities"
]

export default function HomePage({ onNavigate, onOpenModal }: HomePageProps) {
  const featuredProps = PROPERTIES.slice(0, 3)

  const handleOpenModal = (id: string) => {
    const prop = PROPERTIES.find((p) => p.id === id)
    if (prop) onOpenModal(prop)
  }

  return (
    <>
      {/* ── HERO ── */}
      <div id="hero" className="hero-wrap">
        <div className="hero-left">
          <div className="hero-eyebrow">
            <div className="eyebrow-dot" />
            Global Real Estate Investment
          </div>
          <h1 className="hero-h1">
            A more human<br />
            way to invest in<br />
            <em>Canadian real estate.</em>
          </h1>
          <p className="hero-sub">
            Rakma Global helps everyday investors participate in carefully selected property-backed opportunities that generate quarterly income, long-term growth potential, and a clearer, more confident path into private real estate investing.
          </p>
          <div className="hero-btns">
            <button className="hbtn hbtn-fill" onClick={() => onNavigate('properties')}>
              Explore Investment Opportunities
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              className="hbtn hbtn-out"
              onClick={() => onNavigate('about')}
            >
              Discover Our Story
            </button>
          </div>
          <div className="hero-stats">
            <div className="hstat">
              <span className="hstat-val">
                $<span>5</span>M
              </span>
              <span className="hstat-key">Initial Portfolio</span>
            </div>
            <div className="hstat">
              <span className="hstat-val">
                <span>10</span>K
              </span>
              <span className="hstat-key">Min. Investment</span>
            </div>
            <div className="hstat">
              <span className="hstat-val">
                <span>100</span>%
              </span>
              <span className="hstat-key">Transparency</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <Image
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80"
            alt="Premium property"
            fill
            className="hero-right-img"
            priority
            sizes="50vw"
          />
          <div className="hero-vid-overlay" />
          <div className="hero-badge">
            <span className="hero-badge-val">
              <span>5%</span> yield
            </span>
            <div className="hero-badge-key">Annual income component</div>
          </div>
          <div className="hero-badge2">
            <span className="hero-badge2-val">3-5 yrs</span>
            <div className="hero-badge2-key">Expected hold</div>
          </div>
          <div className="hero-scroll">
            <div className="hscroll-line" />
            <span>Scroll</span>
          </div>
        </div>
      </div>

      {/* ── TICKER ── */}
      <Ticker />

      {/* ── OPENING SECTION ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="vis-grid">
            <div className="reveal-left">
              <blockquote className="vis-quote">
                At Rakma Global, we believe investing in real estate should feel understandable, meaningful, and accessible — not complicated or exclusive.
              </blockquote>
              <p className="vis-body">
                For many Canadians, the idea of owning real estate is attractive, but the reality feels out of reach. Buying a property directly often means a large down payment, managing tenants, handling maintenance, and navigating complex financing. On the other hand, many private real estate opportunities feel too opaque or too technical to evaluate.
              </p>
              <p className="vis-body" style={{ marginTop: '20px', fontWeight: '600', color: 'var(--terra)' }}>
                Rakma Global was created to bridge that gap.
              </p>
              <p className="vis-body" style={{ marginTop: '20px' }}>
                We are building a platform that gives investors a more approachable way to participate in Canadian real estate — one property at a time, with clear terms, professional management, and a structure that is easy to understand.
              </p>
            </div>
            <div className="reveal">
              <div className="vis-img-wrap" style={{ height: '500px' }}>
                <Image 
                  src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80" 
                  alt="Rakma Vision" 
                  fill
                  style={{ objectFit: 'cover', borderRadius: '12px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="eyebrow">Our Story</div>
            <h2 className="section-h">A Focused <em>Beginning.</em></h2>
          </div>
          <div className="vis-grid" style={{ gridTemplateColumns: '1.2fr 1fr' }}>
            <div className="reveal">
              <p className="vis-body" style={{ fontSize: '19px', color: 'var(--ink)' }}>
                Rakma Global began with a simple belief: if a property is strong enough to invest in, investors should be able to understand it clearly.
              </p>
              <p className="vis-body" style={{ marginTop: '24px' }}>
                We are starting with a focused portfolio of 4 to 5 Canadian properties, including single-family homes and one multi-family property, with an initial combined value of approximately $4 million to $5 million. 
              </p>
              <p className="vis-body" style={{ marginTop: '20px' }}>
                These first opportunities are the foundation of a much larger vision: a growing platform that will eventually include additional residential properties, multi-residential funds, and development projects.
              </p>
            </div>
            <div className="reveal-left">
              <div style={{ padding: '40px', background: 'var(--white)', borderRadius: '16px', border: '1px solid var(--border)' }}>
                <div className="stat-item" style={{ marginBottom: '32px', textAlign: 'left', padding: 0 }}>
                  <span className="stat-val" style={{ fontSize: '48px', color: 'var(--terra)' }}>4-5</span>
                  <span className="stat-key">Initial properties</span>
                </div>
                <div className="stat-item" style={{ textAlign: 'left', padding: 0 }}>
                  <span className="stat-val" style={{ fontSize: '48px', color: 'var(--terra)' }}>$5M</span>
                  <span className="stat-key">Combined portfolio value</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY THIS MATTERS ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="vis-grid">
            <div className="reveal">
              <div className="vis-img-wrap" style={{ height: '450px' }}>
                <Image 
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80" 
                  alt="Real Estate Benefits" 
                  fill
                  style={{ objectFit: 'cover', borderRadius: '12px' }}
                />
              </div>
            </div>
            <div className="reveal-left">
              <div className="eyebrow">The Benefits</div>
              <h2 className="section-h">Why This <em>Matters to You.</em></h2>
              <p className="vis-body">
                Real estate has long been one of the most trusted ways to build wealth. It is tangible. It produces income. It can grow over time.
              </p>
              <p className="vis-body" style={{ marginTop: '20px' }}>
                But classical real estate ownership can also feel stressful, time-consuming, and expensive. Rakma Global is designed to give you the benefits of real estate without the burdens: no property management, no tenant issues, no unexpected repairs. Just a clear, professionally managed investment tied to real assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU CAN EXPECT ── */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="eyebrow">Investor Experience</div>
            <h2 className="section-h">What You Can <em>Expect.</em></h2>
          </div>
          <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {EXPECTATIONS.map((text, i) => (
              <div key={i} className="stat-item reveal" style={{ padding: '32px', background: 'var(--white)', borderRadius: '16px', border: '1px solid var(--border)', textAlign: 'left' }}>
                <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.5', fontWeight: '500' }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHERE WE ARE TODAY ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="vis-grid">
            <div className="reveal-left">
              <div className="eyebrow">Status</div>
              <h2 className="section-h">Where We Are <em>Today.</em></h2>
              <p className="vis-body">
                Today, Rakma Global is launching with a small, focused set of single-property opportunities. Each one is presented individually so you can see exactly what you are investing in.
              </p>
              <p className="vis-body" style={{ marginTop: '20px' }}>
                Our first product lets you invest in one property at a time, with clear terms, a defined income component, and potential upside from appreciation. This simplicity is intentional. We want our investors to feel informed, confident, and in control.
              </p>
              <button className="hbtn hbtn-fill" style={{ marginTop: '40px' }} onClick={() => onNavigate('investments')}>
                View Current Opportunities
              </button>
            </div>
            <div className="reveal">
              <div className="vis-img-wrap" style={{ height: '400px' }}>
                <Image 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" 
                  alt="Current Focus" 
                  fill
                  style={{ objectFit: 'cover', borderRadius: '12px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHERE WE ARE HEADED ── */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="eyebrow">Vision</div>
            <h2 className="section-h">Where We Are <em>Headed.</em></h2>
            <p style={{ color: 'var(--muted)', maxWidth: '700px', margin: '0 auto' }}>
              Rakma Global is not just about the first property or the first offering. It is about building a lasting, trusted platform for Canadian real estate investing.
            </p>
          </div>
          <div className="vis-grid" style={{ gridTemplateColumns: '1.2fr 1fr' }}>
            <div className="reveal">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                {EXPANSION_PLANS.map((plan, i) => (
                  <div key={i} style={{ padding: '24px', background: 'var(--white)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                    <p style={{ fontFamily: 'var(--serif)', fontSize: '18px', color: 'var(--ink)' }}>{plan}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-left">
              <p className="vis-body">
                As we grow, we plan to expand into broader residential portfolios and development projects.
              </p>
              <p className="vis-body" style={{ marginTop: '20px' }}>
                We are building carefully, thoughtfully, and with a long-term perspective. That means starting with quality assets, delivering a strong experience, and only expanding when the foundation is solid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section id="cta" style={{ padding: 0 }}>
        <div className="cta-section">
          <div className="cta-inner">
            <div className="reveal-left">
              <div className="eyebrow" style={{ color: 'rgba(255,255,255,.6)' }}>Final Thoughts</div>
              <h2 className="cta-h">
                A Clear Path to <em>Real Wealth.</em>
              </h2>
              <p className="cta-sub">
                Whether you are investing for income, long-term growth, or portfolio diversification, Rakma Global offers a more accessible, more transparent way to participate in Canadian real estate.
              </p>
              <p className="cta-sub">
                We invite you to explore our opportunities, learn how they work, and see if they are a good fit for your goals.
              </p>
            </div>
            <div className="reveal delay-2">
              <div className="cta-form">
                <button className="cta-submit" onClick={() => onNavigate('properties')}>
                  View Current Opportunities
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
