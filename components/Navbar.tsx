'use client'

import { useEffect, useState } from 'react'

type Page = 'home' | 'properties' | 'investments' | 'single-family' | 'about' | 'contact' | 'faq'

interface NavbarProps {
  activePage: Page
  onNavigate: (page: Page) => void
  onScrollTo: (sectionId: string) => void
}

export default function Navbar({ activePage, onNavigate, onScrollTo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (page: Page) => {
    onNavigate(page)
    setMenuOpen(false)
  }

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <span className="nav-logo" onClick={() => handleNav('home')}>
        Rakma<b>.</b>
      </span>

      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        <li>
          <a
            className={activePage === 'home' ? 'active' : ''}
            onClick={() => handleNav('home')}
          >
            Home
          </a>
        </li>
        <li>
          <a
            className={activePage === 'about' ? 'active' : ''}
            onClick={() => handleNav('about')}
          >
            About
          </a>
        </li>
        <li>
          <a
            className={activePage === 'investments' ? 'active' : ''}
            onClick={() => handleNav('investments')}
          >
            Investments
          </a>
        </li>
        <li>
          <a
            className={activePage === 'faq' ? 'active' : ''}
            onClick={() => handleNav('faq')}
          >
            FAQ
          </a>
        </li>
        <li>
          <a
            className={activePage === 'contact' ? 'active' : ''}
            onClick={() => handleNav('contact')}
          >
            Contact
          </a>
        </li>
      </ul>

      <div className="nav-right">
        <span className="nbtn nbtn-ghost">Investor login</span>
        <span className="nbtn nbtn-solid" onClick={() => onScrollTo('cta')}>
          Start investing
        </span>
      </div>
    </nav>
  )
}
