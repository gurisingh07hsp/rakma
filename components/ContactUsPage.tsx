'use client'

export default function ContactUsPage() {
  return (
    <div className="contact-page">
      {/* ── HERO ── */}
      <section className="props-hero">
        <div className="props-hero-deco" />
        <div className="props-hero-inner">
          <div className="eyebrow">Contact · Rakma Global</div>
          <h1 className="props-hero-h">
            Let&apos;s Start the <em>Conversation.</em>
          </h1>
          <p className="props-hero-sub">
            If you are considering an investment or just want to understand how Rakma Global works, we are here to help.
          </p>
        </div>
      </section>

      {/* ── MISSION STATEMENT ── */}
      <section className="section" style={{ background: 'var(--white)', paddingBottom: '60px' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="reveal">
            <p style={{ 
              fontSize: '20px', 
              lineHeight: '1.6', 
              color: 'var(--ink)', 
              fontFamily: 'var(--serif)',
              marginBottom: '32px' 
            }}>
              We know investing is personal. It often starts with curiosity, then turns into questions, and then into confidence. 
              Our goal is to make that process easier by giving you the information you need in a clear and respectful way.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT GRID ── */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div className="vis-grid">
            <div className="reveal-left">
              <div className="eyebrow">How We Can Help</div>
              <h2 className="section-h">Reach out to <em>us.</em></h2>
              <p style={{ color: 'var(--muted)', marginBottom: '32px' }}>
                Reach out to us if you would like to learn more about:
              </p>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--ink3)', fontSize: '15px' }}>
                  <div style={{ width: '6px', height: '6px', background: 'var(--terra)', borderRadius: '50%' }} />
                  Current investment opportunities.
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--ink3)', fontSize: '15px' }}>
                  <div style={{ width: '6px', height: '6px', background: 'var(--terra)', borderRadius: '50%' }} />
                  Upcoming products and future plans.
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--ink3)', fontSize: '15px' }}>
                  <div style={{ width: '6px', height: '6px', background: 'var(--terra)', borderRadius: '50%' }} />
                  How the investment structure works.
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--ink3)', fontSize: '15px' }}>
                  <div style={{ width: '6px', height: '6px', background: 'var(--terra)', borderRadius: '50%' }} />
                  Whether Rakma Global is a good fit for your goals.
                </li>
              </ul>

              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '32px' }}>
                <div className="stat-item" style={{ marginBottom: '24px', textAlign: 'left', padding: '0' }}>
                  <span className="ph-stat-key" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email</span>
                  <p style={{ fontFamily: 'var(--serif)', fontSize: '20px', color: 'var(--ink)' }}>info@rakmaglobal.ca</p>
                </div>
                <div className="stat-item" style={{ textAlign: 'left', padding: '0' }}>
                  <span className="ph-stat-key" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Location</span>
                  <p style={{ fontFamily: 'var(--serif)', fontSize: '20px', color: 'var(--ink)' }}>Brampton, Ontario, Canada</p>
                </div>
              </div>
            </div>

            <div className="reveal">
              <div style={{ 
                background: 'var(--white)', 
                padding: '48px', 
                borderRadius: '24px',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--border)'
              }}>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '24px', marginBottom: '24px' }}>Send Us a Message</h3>
                
                <form onSubmit={(e) => e.preventDefault()}>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', color: 'var(--muted2)' }}>Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Your name"
                      style={{ 
                        width: '100%', 
                        padding: '14px', 
                        borderRadius: '8px', 
                        border: '1px solid var(--border)',
                        background: 'var(--bg)',
                        fontFamily: 'var(--sans)'
                      }} 
                    />
                  </div>
                  
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', color: 'var(--muted2)' }}>Email Address</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      style={{ 
                        width: '100%', 
                        padding: '14px', 
                        borderRadius: '8px', 
                        border: '1px solid var(--border)',
                        background: 'var(--bg)',
                        fontFamily: 'var(--sans)'
                      }} 
                    />
                  </div>
                  
                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', color: 'var(--muted2)' }}>Message</label>
                    <textarea 
                      placeholder="Tell us how we can help..."
                      rows={4}
                      style={{ 
                        width: '100%', 
                        padding: '14px', 
                        borderRadius: '8px', 
                        border: '1px solid var(--border)',
                        background: 'var(--bg)',
                        fontFamily: 'var(--sans)',
                        resize: 'none'
                      }} 
                    ></textarea>
                  </div>
                  
                  <button className="nbtn nbtn-solid" style={{ width: '100%', justifyContent: 'center', height: '52px' }}>
                    Send Us a Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL MESSAGE ── */}
      <section className="section" style={{ background: 'var(--white)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <div className="reveal">
            <h2 className="section-h" style={{ fontSize: '28px' }}>We would be glad to hear from you</h2>
            <p style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: '1.6' }}>
              Our team is dedicated to helping you explore what Rakma Global has to offer.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
