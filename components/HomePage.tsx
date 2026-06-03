'use client'

import Image from 'next/image'
import { Property, PROPERTIES, TESTIMONIALS, INSIGHTS, WHY_ITEMS } from '@/lib/data'
import Ticker from './Ticker'
import PropertyCard from './PropertyCard'

interface HomePageProps {
  onNavigate: (page: 'home' | 'properties') => void
  onOpenModal: (property: Property) => void
}

const FEATURED_IDS = ['mcpherson-88', 'jura-25', 'essex-199']
const STEPS = [
  {
    num: '01 —',
    title: 'Create your free account',
    desc: 'Sign up in under 2 minutes. Complete a simple KYC verification and you\'re ready to explore our curated portfolio of Canadian and global properties.',
  },
  {
    num: '02 —',
    title: 'Browse verified properties',
    desc: 'Every listing is legally verified, professionally valued, and due-diligence checked. See full financials, location data, and projected returns before committing a single dollar.',
  },
  {
    num: '03 —',
    title: 'Invest any amount you choose',
    desc: 'Start with as little as $100. Buy fractional shares of premium Canadian real estate — Brampton, Sarnia, London, Mississauga, and more.',
  },
  {
    num: '04 —',
    title: 'Earn monthly, grow forever',
    desc: 'Receive monthly rental income directly to your wallet. Track capital appreciation in real time. Sell your shares anytime on our secondary marketplace.',
  },
]
const STEPS2 = [
  {
    num: '01 —',
    title: 'Access to Canadian real estate-backed opportunities you can understand.',
  },
  {
    num: '02 —',
    title: 'A minimum investment starting at $10,000, making it more accessible than direct ownership.',
  },
  {
    num: '03 —',
    title: 'Quarterly income distributions, giving you a sense of regular cash flow.',
  },
  {
    num: '04 —',
    title: 'The potential to benefit from capital appreciation when a property is sold or refinanced.',
  },
  {
    num: '05 —',
    title: 'Clear hold periods, typically 3 to 5 years, depending on the property.',
  },
  {
    num: '06 —',
    title: 'A platform that is designed to grow alongside your investment goals over time.',
  },
]
const STEPS3 = [
  {
    num: '01 —',
    title: 'Multi-residential funds',
  },
  {
    num: '02 —',
    title: 'Broader residential portfolios',
  },
  {
    num: '03 —',
    title: 'Development projects',
  },
  {
    num: '04 —',
    title: 'Additional strategies that align with investor needs and market opportunities',
  }
]

export default function HomePage({ onNavigate, onOpenModal }: HomePageProps) {
  const featuredProps = FEATURED_IDS.map(
    (id) => PROPERTIES.find((p) => p.id === id)!
  ).filter(Boolean)

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
           Rakma Global helps everyday investors participate in carefully 
           selected property-backed opportunities that generate quarterly income, 
           long-term growth potential, and a clearer, more confident path into private 
           real estate investing.
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
              onClick={() => document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Discover Our Story
            </button>
          </div>
          <div className="hero-stats">
            <div className="hstat">
              <span className="hstat-val">
                $<span>47</span>M+
              </span>
              <span className="hstat-key">Assets managed</span>
            </div>
            <div className="hstat">
              <span className="hstat-val">
                <span>28</span>K+
              </span>
              <span className="hstat-key">Global investors</span>
            </div>
            <div className="hstat">
              <span className="hstat-val">
                <span>50</span>+
              </span>
              <span className="hstat-key">Countries</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80"
            alt="Premium property"
            fill
            className="hero-right-img"
            priority
            sizes="50vw"
          />
          <div className="hero-vid-overlay" />
          <div className="hero-badge">
            <span className="hero-badge-val">
              <span>15</span> properties
            </span>
            <div className="hero-badge-key">Active in Canada right now</div>
          </div>
          <div className="hero-badge2">
            <span className="hero-badge2-val">▲ 8.6% avg</span>
            <div className="hero-badge2-key">Annual yield</div>
          </div>
          <div className="hero-scroll">
            <div className="hscroll-line" />
            <span>Scroll</span>
          </div>
        </div>
      </div>

      {/* ── TICKER ── */}
      <Ticker />

      {/* ── STATS ── */}
      <section className="stats-section reveal" id="stats">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-val" data-count="47" data-prefix="$" data-suffix="M+">$47M+</span>
            <span className="stat-key">Portfolio completion value</span>
          </div>
          <div className="stat-item">
            <span className="stat-val" data-count="28" data-suffix="K+">28K+</span>
            <span className="stat-key">Global investors</span>
          </div>
          <div className="stat-item">
            <span className="stat-val" data-count="50" data-suffix="+">50+</span>
            <span className="stat-key">Countries served</span>
          </div>
          <div className="stat-item">
            <span className="stat-val">
              $<span style={{ color: 'var(--terra2)' }}>100</span>
            </span>
            <span className="stat-key">Minimum investment</span>
          </div>
        </div>
      </section>

      {/* ── VISION ── */}
      <section className="section" id="vision" style={{ background: 'var(--white)' }}>
        <div className="vis-grid">
          <div className="reveal-left">
            <div className="eyebrow">About Rakma Global</div>
            <h2 className="section-h">
              The equity, expertise<br />
              &amp; <em>experience</em> behind<br />
              superior investments.
            </h2>
            <blockquote className="vis-quote">
              Rakma Global was created to make private real estate feel more accessible to everyday investors.
            </blockquote>
            <p className="vis-body">
              We saw a gap in the market. On one side, direct real estate ownership can be costly, 
              time-consuming, and difficult to manage. On the other side, many investment 
              opportunities feel too complex or too closed off for a typical retail investor.
            </p>
            <p className="vis-body">
              Rakma Global was built to bridge that gap with a platform that is easier to 
              understand and more welcoming to invest through.
            </p>
            <button
              className="see-all"
              onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ marginTop: 8 }}
            >
              Rakesh&apos;s story →
            </button>
          </div>
          <div className="reveal delay-2">
            <div className="vis-img-wrap">
              <div className="vis-photo-bg" />
              <div className="vis-float">
                <span className="vis-float-num">11.2%</span>
                <span className="vis-float-key">Avg. annual yield across all active properties</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="section" id="vision" style={{ background: 'var(--white)' }}>
        <div className="vis-grid">
          <div className="reveal-left">
            <blockquote className="vis-quote">
              At Rakma Global, we believe investing in real estate should feel understandable, 
              meaningful, and accessible — not complicated or exclusive.
            </blockquote>
            <p className="vis-body">
              For many Canadians, the idea of owning real estate is attractive, but the reality 
              feels out of reach. Buying a property directly often means a large down payment, 
              managing tenants, handling maintenance, and navigating complex financing. On the 
              other hand, many private real estate opportunities feel too opaque or too technical 
              to evaluate.
            </p>
            <p className="vis-body">
              Rakma Global was created to bridge that gap.
            </p>
            <p className="vis-body">
              We are building a platform that gives investors a more approachable way to 
              participate in Canadian real estate — one property at a time, with clear terms, 
              professional management, and a structure that is easy to understand.
            </p>
          </div>
          <div className="reveal delay-2">
            <div className="vis-img-wrap">
              <div className="vis-photo-bg" />
            </div>
          </div>
        </div>
      </section>



      <section className="section" id="how" style={{ background: 'var(--bg2)' }}>
        <div className="reveal">
          {/* <div className="eyebrow">How it works</div> */}
          <h2 className="section-h">
            Why This <em>Matters to You</em>
          </h2>
          <p className="section-lead">
            Real estate has long been one of the most trusted ways to build wealth. It is tangible. It produces income. It can grow over time.
          </p>
          <p className="section-lead">
            But classical real estate ownership can also feel stressful, time-consuming, and expensive. Rakma Global is designed to give you the benefits of real estate without the burdens: no property management, no tenant issues, no unexpected repairs. Just a clear, professionally managed investment tied to real assets.
          </p>
          <h2 style={{ marginTop: 50 }} className="section-h">
            What You Can <em>Expect</em>
          </h2>
          <p className="section-lead">
            With Rakma Global, you can expect:
          </p>
        </div>
        <div className="how-layout">
          <div className="steps-list">
            {STEPS2.map((step, i) => (
              <div className={`step reveal delay-${i + 1}`} key={step.num}>
                <span className="step-num">{step.num}</span>
                <div>
                  <div className="step-title">{step.title}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating mockup card */}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section" id="how" style={{ background: 'var(--bg2)' }}>
        <div className="reveal">
          <div className="eyebrow">How it works</div>
          <h2 className="section-h">
            Invest in <em>4 simple steps</em>
          </h2>
          <p className="section-lead">
            We&apos;ve removed every barrier between you and property ownership. Start earning in minutes.
          </p>
        </div>
        <div className="how-layout">
          <div className="steps-list">
            {STEPS.map((step, i) => (
              <div className={`step reveal delay-${i + 1}`} key={step.num}>
                <span className="step-num">{step.num}</span>
                <div>
                  <div className="step-title">{step.title}</div>
                  <div className="step-desc">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating mockup card */}
          <div className="reveal delay-2">
            <div className="mockup-card">
              <div className="m-topbar">
                <div className="m-dot" style={{ background: '#ff5f57' }} />
                <div className="m-dot" style={{ background: '#febc2e' }} />
                <div className="m-dot" style={{ background: '#28c840' }} />
                <span className="m-url">rakma.global/portfolio</span>
              </div>
              <div className="m-img">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
                  alt="Brampton property"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="500px"
                />
                <div className="m-img-overlay" />
                <div className="m-tag">Active — Rental income</div>
              </div>
              <div className="m-body">
                <div className="m-city">📍 Brampton, Ontario</div>
                <div className="m-name">25 Jura Crescent</div>
                <div className="m-prog-row">
                  <span>Funding progress</span>
                  <span style={{ color: 'var(--terra)', fontWeight: 600 }}>74%</span>
                </div>
                <div className="m-bar">
                  <div className="m-fill" style={{ width: '74%' }} />
                </div>
                <div className="m-metrics">
                  <div className="m-metric">
                    <span className="m-metric-val">8.4%</span>
                    <span className="m-metric-key">Yield p.a.</span>
                  </div>
                  <div className="m-metric">
                    <span className="m-metric-val">$820K</span>
                    <span className="m-metric-key">Value</span>
                  </div>
                  <div className="m-metric">
                    <span className="m-metric-val">342</span>
                    <span className="m-metric-key">Investors</span>
                  </div>
                </div>
                <div className="m-invest">
                  <div>
                    <div className="m-invest-val">$500</div>
                    <div className="m-invest-key">Your investment</div>
                  </div>
                  <div style={{ marginLeft: 10 }}>
                    <div className="m-invest-inc">+$3.50/mo</div>
                    <div className="m-invest-key">Est. income</div>
                  </div>
                  <button className="m-invest-btn">Invest →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="section" id="how" style={{ background: 'var(--bg2)' }}>
        <div className="reveal">
          {/* <div className="eyebrow">How it works</div> */}
          <h2 className="section-h">
            Where We Are <em>Today</em>
          </h2>
          <p className="section-lead">
            Today, Rakma Global is launching with a small, focused set of single-property 
            opportunities. Each one is presented individually so you can see exactly what you are investing in.
          </p>
          <p className="section-lead">
            Our first product lets you invest in one property at a time, with clear terms, a 
            defined income component, and potential upside from appreciation. This simplicity is 
            intentional. We want our investors to feel informed, confident, and in control.
          </p>
          <h2 style={{ marginTop: 50 }} className="section-h">
            Where We Are <em>Headed</em>
          </h2>
          <p className="section-lead">
            Rakma Global is not just about the first property or the first offering. It is about 
            building a lasting, trusted platform for Canadian real estate investing.
          </p>
          <p className="section-lead">
            As we grow, we plan to expand into:
          </p>
        </div>
        <div className="how-layout">
          <div className="steps-list">
            {STEPS2.map((step, i) => (
              <div className={`step reveal delay-${i + 1}`} key={step.num}>
                <span className="step-num">{step.num}</span>
                <div>
                  <div className="step-title">{step.title}</div>
                </div>
              </div>
            ))}
          <p className="section-lead">
            We are building carefully, thoughtfully, and with a long-term perspective. 
            That means starting with quality assets, delivering a strong experience, and only 
            expanding when the foundation is solid.
          </p>
          <p className="section-lead">
            We are building carefully, thoughtfully, and with a long-term perspective. 
            That means starting with quality assets, delivering a strong experience, and only 
            expanding when the foundation is solid.
          </p>
          </div>

          {/* Floating mockup card */}
        </div>
      </section>

      {/* ── WHY RAKMA ── */}
      <section className="section" id="why" style={{ background: 'var(--white)' }}>
        <div className="reveal">
          <div className="eyebrow">Why Rakma Global</div>
          <h2 className="section-h">
            Unparalleled <em>access</em><br />to global real estate
          </h2>
          <p className="section-lead">
            Institutional-quality real estate investment — now accessible to everyone, everywhere,
            starting at $100.
          </p>
        </div>
        <div className="why-grid" style={{ marginTop: 52 }}>
          {WHY_ITEMS.map((item, i) => (
            <div
              className={`why-cell reveal${i % 3 !== 0 ? ` delay-${i % 3}` : ''}`}
              key={item.num}
            >
              <div className="why-bg-num">{item.num}</div>
              <div className="why-icon">{item.icon}</div>
              <div className="why-title">{item.title}</div>
              <div className="why-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PROPERTIES ── */}
      <section className="section" id="featured" style={{ background: 'var(--bg2)' }}>
        <div className="feat-head reveal">
          <div>
            <div className="eyebrow">Featured properties</div>
            <h2 className="section-h" style={{ marginBottom: 0 }}>
              Canadian properties,<br />
              <em>exceptional returns</em>
            </h2>
          </div>
          <button className="see-all" onClick={() => onNavigate('properties')}>
            View all 15 properties →
          </button>
        </div>
        <div className="feat-grid reveal delay-1">
          {featuredProps.map((prop, i) => (
            <PropertyCard
              key={prop.id}
              property={prop}
              size={i === 0 ? 'lg' : 'sm'}
              onClick={handleOpenModal}
            />
          ))}
        </div>
      </section>

      {/* ── STORY ── */}
      {/* <section id="story" style={{ padding: 0 }}>
        <div className="story-wrap">
          <div className="story-left reveal-left">
            <div className="eyebrow">Founder&apos;s story</div>
            <h2 className="section-h">
              From international<br />
              student to <em>multimillionaire</em><br />
              — and back.
            </h2>
            <blockquote className="story-quote">
              &ldquo;I arrived in Canada with $847. Real estate changed everything.
              Now I&apos;m building the door I never had.&rdquo;
            </blockquote>
            <p className="story-body">
              Rakesh Sharma came to Canada as an international student with almost nothing. Working
              minimum-wage jobs, watching landlords collect rent while he stressed about paying it —
              he asked himself the question that changed his life: &ldquo;Why am I always on the wrong side
              of this transaction?&rdquo;
            </p>
            <p className="story-body">
              Ten years of relentless focus on real estate turned him into a multimillionaire. He
              looked back at the wall that had kept him out, and decided to tear it down for
              everyone. That&apos;s Rakma Global.
            </p>
            <div className="story-sig">
              <div className="story-avatar">RS</div>
              <div>
                <div className="story-name">Rakesh Sharma</div>
                <div className="story-role">Founder &amp; CEO, Rakma Global</div>
              </div>
            </div>
          </div>
          <div className="story-right">
            <div className="story-photo" />
            <div className="story-overlay" />
          </div>
        </div>
      </section> */}

      {/* ── TESTIMONIALS ── */}
      {/* <section className="section" id="testi" style={{ background: 'var(--white)' }}>
        <div className="reveal">
          <div className="eyebrow">Investor stories</div>
          <h2 className="section-h">
            People building <em>real wealth</em>
          </h2>
        </div>
        <div className="testi-grid">
          {TESTIMONIALS.map((t, i) => (
            <div className={`testi-card reveal delay-${i + 1}`} key={t.name}>
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">&ldquo;{t.text}&rdquo;</p>
              <div className="testi-divider" />
              <div className="testi-author">
                <div className="testi-av">{t.initials}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-meta">{t.location}</div>
                  <div className="testi-amount">Invested {t.invested}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* ── INSIGHTS ── */}
      <section className="section" id="insights" style={{ background: 'var(--bg2)' }}>
        <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 48 }}>
          <div>
            <div className="eyebrow">News &amp; insights</div>
            <h2 className="section-h" style={{ marginBottom: 0 }}>
              Market intelligence<br />
              &amp; <em>investment updates</em>
            </h2>
          </div>
          <button className="see-all">View all insights →</button>
        </div>
        <div className="insights-grid reveal delay-1">
          {INSIGHTS.map((insight, i) => (
            <div className="insight-card" key={insight.title}>
              <span className="insight-cat">{insight.category}</span>
              <h3 className={`insight-title${i === 0 ? ' lg' : ''}`}>{insight.title}</h3>
              <p className="insight-excerpt">{insight.excerpt}</p>
              <span className="insight-date">{insight.date}</span>
              <a className="insight-read">Read more →</a>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="cta" style={{ padding: 0 }}>
        <div className="cta-section">
          <div className="cta-inner">
            <div className="reveal-left">
              <div className="eyebrow" style={{ color: 'rgba(255,255,255,.6)' }}>Get started today</div>
              <h2 className="cta-h">
                Start your<br />
                investment <em>journey.</em>
              </h2>
              <p className="cta-sub">
                Whether you are investing for income, long-term growth, or portfolio 
                diversification, Rakma Global offers a more accessible, more transparent way 
                to participate in Canadian real estate.
              </p>
              <p className="cta-sub">
                We invite you to explore our opportunities, learn how they work, and see if they are a good fit for your goals.
              </p>
            </div>
            <div className="reveal delay-2">
              <div className="cta-form">
         
                <button className="cta-submit">
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

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <span className="footer-logo">Rakma<b>.</b></span>
            <span className="footer-sub-text">GLOBAL</span>
            <p className="footer-desc">
              Making real estate investment accessible to everyone, everywhere. Start with $100.
              Build generational wealth.
            </p>
            <div className="social-links">
              <a className="social-link">in</a>
              <a className="social-link">𝕏</a>
              <a className="social-link">ig</a>
              <a className="social-link">▶</a>
            </div>
          </div>
          <div>
            <span className="footer-col-title">Platform</span>
            <ul className="footer-links">
              <li><a>How it works</a></li>
              <li><a>Browse properties</a></li>
              <li><a>Secondary market</a></li>
              <li><a>Portfolio dashboard</a></li>
              <li><a>Mobile app</a></li>
            </ul>
          </div>
          <div>
            <span className="footer-col-title">Company</span>
            <ul className="footer-links">
              <li><a>About Rakma</a></li>
              <li><a>Rakesh&apos;s story</a></li>
              <li><a>Press &amp; media</a></li>
              <li><a>Careers</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
          <div>
            <span className="footer-col-title">Legal</span>
            <ul className="footer-links">
              <li><a>Terms of service</a></li>
              <li><a>Privacy policy</a></li>
              <li><a>Risk disclosure</a></li>
              <li><a>Regulatory info</a></li>
              <li><a>Cookie policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-bottom-text">© 2025 Rakma Global Ltd. All rights reserved.</span>
          <span className="footer-bottom-text">
            Canadian real estate opportunities built on clarity, trust, and long-term value.
          </span>
          <div style={{ display: 'flex', gap: 16 }}>
            <a className="footer-bottom-text" style={{ textDecoration: 'none' }}>Privacy</a>
            <a className="footer-bottom-text" style={{ textDecoration: 'none' }}>Terms</a>
          </div>
        </div>
      </footer>
    </>
  )
}
