'use client'

interface FooterProps {
  onNavigate: (page: any) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <span className="footer-logo" onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>Rakma<b>.</b></span>
          <span className="footer-sub-text">GLOBAL</span>
          <p className="footer-desc">
            Canadian real estate opportunities built on clarity, trust, and long-term value.
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
            <li onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}><a>How it works</a></li>
            <li onClick={() => onNavigate('properties')} style={{ cursor: 'pointer' }}><a>Browse properties</a></li>
            <li onClick={() => onNavigate('investments')} style={{ cursor: 'pointer' }}><a>Investments</a></li>
            <li><a>Secondary market</a></li>
            <li><a>Portfolio dashboard</a></li>
          </ul>
        </div>
        <div>
          <span className="footer-col-title">Company</span>
          <ul className="footer-links">
            <li onClick={() => onNavigate('about')} style={{ cursor: 'pointer' }}><a>About Us</a></li>
            <li onClick={() => onNavigate('faq')} style={{ cursor: 'pointer' }}><a>FAQ</a></li>
            <li><a>Careers</a></li>
            <li onClick={() => onNavigate('contact')} style={{ cursor: 'pointer' }}><a>Contact</a></li>
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
        <span className="footer-bottom-text">© 2026 Rakma Global Ltd. All rights reserved.</span>
        <span className="footer-bottom-text">
          Canadian real estate opportunities built on clarity, trust, and long-term value.
        </span>
        <div style={{ display: 'flex', gap: 16 }}>
          <a className="footer-bottom-text" style={{ textDecoration: 'none' }}>Privacy</a>
          <a className="footer-bottom-text" style={{ textDecoration: 'none' }}>Terms</a>
        </div>
      </div>
    </footer>
  )
}
