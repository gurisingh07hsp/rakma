'use client'

import { PROPERTIES, Property } from '@/lib/data'
import PropertyCard from './PropertyCard'

interface SingleFamilyInvestmentPageProps {
  onOpenModal: (property: Property) => void
  onNavigate: (page: any) => void
}

export default function SingleFamilyInvestmentPage({ onOpenModal, onNavigate }: SingleFamilyInvestmentPageProps) {
  // Filter for single family homes
  const singleFamilyProperties = PROPERTIES.filter(p => 
    p.sub.toLowerCase().includes('single-family') || p.sub.toLowerCase().includes('detached')
  )

  return (
    <div className="single-family-page">
      {/* ── HERO ── */}
      <section className="props-hero">
        <div className="props-hero-deco" />
        <div className="props-hero-inner">
          <div className="eyebrow">Product · Single Property Investment</div>
          <h1 className="props-hero-h">
            Single Property Investing,<br />
            Made <em>Clear and Simple.</em>
          </h1>
          <p className="props-hero-sub" style={{ maxWidth: '800px' }}>
            Our single-family investment product is designed for investors who want a straightforward way to participate in private Canadian real estate.
          </p>
        </div>
      </section>

      {/* ── INTRODUCTION ── */}
      <section className="section" style={{ background: 'var(--white)', paddingBottom: '60px' }}>
        <div className="container">
          <div className="reveal">
            <p style={{ fontSize: '18px', lineHeight: '1.7', color: 'var(--ink)', maxWidth: '900px' }}>
              Instead of investing into a large, broad pool, you invest in one specific home. That creates a more direct connection to the underlying asset and makes it easier to understand what you own, how returns are created, and how value may be realized over time.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY SINGLE FAMILY ── */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div className="vis-grid">
            <div className="reveal-left">
              <div className="eyebrow">Asset Class</div>
              <h2 className="section-h">Why <em>Single-Family Homes?</em></h2>
              <p className="vis-body">
                Single-family homes are familiar, tangible, and easy to picture.
              </p>
              <p className="vis-body" style={{ marginTop: '20px' }}>
                For many retail investors, that makes them a natural starting point. They offer a clear entry into private real estate because the asset class is widely understood. You know what the property is. You know where it is. You can follow its performance through the life of the investment. 
              </p>
              <p className="vis-body" style={{ marginTop: '20px' }}>
                That familiarity helps build confidence, especially for investors exploring private real estate for the first time.
              </p>
            </div>
            <div className="reveal">
              <div style={{ padding: '48px', background: 'var(--white)', borderRadius: '24px', border: '1px solid var(--border)' }}>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '22px', marginBottom: '24px' }}>How This Investment Works</h3>
                <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: '1.6', marginBottom: '20px' }}>
                  When you invest in a single-family opportunity, your capital is tied directly to one property.
                </p>
                <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: '1.6', marginBottom: '20px' }}>
                  During the investment term, you may receive quarterly income distributions. At the end of the holding period, you may also participate in capital appreciation if the property has grown in value.
                </p>
                <p style={{ color: 'var(--ink3)', fontSize: '15px', fontWeight: '500', fontStyle: 'italic' }}>
                  "Think of it as owning a piece of a real home, without the responsibilities of landlord duties or property management."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TERMS & MEANING ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="vis-grid">
            <div className="reveal">
              <div className="eyebrow">The Details</div>
              <h2 className="section-h">Investment <em>Terms.</em></h2>
              <div style={{ display: 'grid', gap: '24px' }}>
                {[
                  { k: "Minimum investment", v: "$10,000" },
                  { k: "Income component", v: "5% annual, paid quarterly" },
                  { k: "Target total return", v: "8% to 12%" },
                  { k: "Hold period", v: "3 to 5 years" },
                  { k: "Asset type", v: "A single Canadian property" }
                ].map((term, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid var(--border)' }}>
                    <span style={{ color: 'var(--muted2)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{term.k}</span>
                    <span style={{ color: 'var(--ink)', fontWeight: '600', fontSize: '15px' }}>{term.v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-left">
              <div className="eyebrow">The Experience</div>
              <h2 className="section-h">What This <em>Means for You.</em></h2>
              <p className="vis-body">
                You invest in a real property. That property is managed as part of the Rakma Global platform. While you hold the investment, you may receive regular income payments.
              </p>
              <p className="vis-body" style={{ marginTop: '20px' }}>
                When the property is eventually sold or refinanced, you may also share in any growth in value, depending on the terms.
              </p>
              <p className="vis-body" style={{ marginTop: '20px', fontWeight: '500', color: 'var(--ink)' }}>
                This structure is designed to be simple to understand and easy to follow, especially for investors who want to know exactly what they are investing in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY INVESTORS LIKE IT ── */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="eyebrow">Benefits</div>
            <h2 className="section-h">Why Investors May Like <em>This Structure.</em></h2>
            <p style={{ color: 'var(--muted)', maxWidth: '600px', margin: '0 auto' }}>
              This product is built for clarity and peace of mind.
            </p>
          </div>
          <div className="stats-grid">
            {[
              "A direct connection to a real property.",
              "A defined timeline.",
              "A return structure that combines current income with long-term upside potential.",
              "A minimal-complexity approach compared to traditional real estate ownership."
            ].map((benefit, i) => (
              <div key={i} className="stat-item reveal" style={{ padding: '32px', background: 'var(--white)', borderRadius: '16px', border: '1px solid var(--border)', textAlign: 'left' }}>
                <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.5', fontWeight: '500' }}>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROPERTIES GRID ── */}
      <section className="section" style={{ background: 'var(--white)' }} id="available-properties">
        <div className="container">
          <div className="reveal" style={{ marginBottom: '60px' }}>
            <div className="eyebrow">Opportunities</div>
            <h2 className="section-h">Available <em>Properties.</em></h2>
          </div>
          <div className="props-grid">
            {singleFamilyProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onOpen={() => onOpenModal(property)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── PERFORMANCE ── */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="reveal" style={{ textAlign: 'center' }}>
            <div className="eyebrow">Transparency</div>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: '24px', marginBottom: '24px' }}>Performance and Expectations</h3>
            <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: '1.7' }}>
              We want to be transparent: past performance and targeted returns are not guarantees of future results. Real estate values can change, rental income can fluctuate, and exit timing may differ from projections.
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: '1.7', marginTop: '16px' }}>
              That is why we are committed to clear disclosure, professional management, and investor education.
            </p>
          </div>
        </div>
      </section>

      {/* ── FINAL MESSAGE ── */}
      <section className="section" style={{ background: 'var(--white)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="reveal">
            <h2 className="section-h" style={{ fontSize: '32px' }}>Designed with You in Mind</h2>
            <p style={{ color: 'var(--muted)', fontSize: '18px', lineHeight: '1.7', marginBottom: '40px' }}>
              If you are looking for a way to invest in real estate that feels clear, grounded, and tied to a specific asset, the single property investment product is designed with you in mind.
            </p>
            <button 
              className="nbtn nbtn-solid" 
              style={{ margin: '0 auto' }}
              onClick={() => {
                const el = document.getElementById('available-properties')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View Available Properties
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
