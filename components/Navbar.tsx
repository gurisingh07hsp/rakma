'use client'

import { useEffect, useState } from 'react'

type Page = 'home' | 'properties'

interface NavbarProps {
  activePage: Page
  onNavigate: (page: Page) => void
  onScrollTo: (sectionId: string) => void
}

export default function Navbar({ activePage, onNavigate, onScrollTo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <span className="nav-logo" onClick={() => onNavigate('home')}>
        Rakma<b>.</b>
      </span>

      <ul className="nav-links">
        <li>
          <a
            className={activePage === 'home' ? 'active' : ''}
            onClick={() => onNavigate('home')}
          >
            Home
          </a>
        </li>
        <li>
          <a onClick={() => onScrollTo('vision')}>About</a>
        </li>
        <li>
          <a
            className={activePage === 'properties' ? 'active' : ''}
            onClick={() => onNavigate('properties')}
          >
            Properties
          </a>
        </li>
        <li>
          <a onClick={() => onScrollTo('how')}>How it works</a>
        </li>
        <li>
          <a onClick={() => onScrollTo('insights')}>Insights</a>
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
