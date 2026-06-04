'use client'

import { useEffect, useState, useCallback } from 'react'
import VideoIntro from './VideoIntro'
import Navbar from './Navbar'
import HomePage from './HomePage'
import PropertiesPage from './PropertiesPage'
import InvestmentsPage from './InvestmentsPage'
import SingleFamilyInvestmentPage from './SingleFamilyInvestmentPage'
import AboutUsPage from './AboutUsPage'
import ContactUsPage from './ContactUsPage'
import FAQPage from './FAQPage'
import Footer from './Footer'
import PropertyModal from './PropertyModal'
import { Property } from '@/lib/data'
import { useReveal, useCountUp } from './useReveal'

type Page = 'home' | 'properties' | 'investments' | 'single-family' | 'about' | 'contact' | 'faq'

export default function RakmaApp() {
  const [showIntro, setShowIntro] = useState(true)
  const [introGone, setIntroGone] = useState(false)
  const [activePage, setActivePage] = useState<Page>('home')
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)

  useReveal()
  useCountUp()

  const handleIntroComplete = useCallback(() => {
    setIntroGone(true)
    setTimeout(() => setShowIntro(false), 1000)
  }, [])

  const handleNavigate = useCallback((page: Page) => {
    setActivePage(page)
    window.scrollTo({ top: 0, behavior: 'instant' })
    // Re-trigger reveal animations after page switch
    setTimeout(() => {
      document.querySelectorAll('.reveal, .reveal-left').forEach((el) => {
        if (!el.classList.contains('visible')) {
          el.classList.remove('visible')
        }
      })
    }, 80)
  }, [])

  const handleScrollTo = useCallback((sectionId: string) => {
    if (activePage !== 'home') {
      setActivePage('home')
      window.scrollTo({ top: 0, behavior: 'instant' })
      setTimeout(() => {
        const el = document.getElementById(sectionId)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 120)
    } else {
      const el = document.getElementById(sectionId)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [activePage])

  // Re-run reveal when page changes
  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.07 }
      )
      document.querySelectorAll('.reveal, .reveal-left').forEach((el) => {
        observer.observe(el)
      })
      return () => observer.disconnect()
    }, 100)
    return () => clearTimeout(timer)
  }, [activePage])

  return (
    <>
      {/* Video intro */}
      {showIntro && <VideoIntro onComplete={handleIntroComplete} />}

      {/* Nav */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onScrollTo={handleScrollTo}
      />

      {/* Pages */}
      <main>
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenModal={setSelectedProperty}
          />
        )}
        {activePage === 'properties' && (
          <PropertiesPage onOpenModal={setSelectedProperty} />
        )}
        {activePage === 'investments' && (
          <InvestmentsPage onNavigate={handleNavigate} />
        )}
        {activePage === 'single-family' && (
          <SingleFamilyInvestmentPage 
            onOpenModal={setSelectedProperty} 
            onNavigate={handleNavigate}
          />
        )}
        {activePage === 'about' && <AboutUsPage />}
        {activePage === 'contact' && <ContactUsPage />}
        {activePage === 'faq' && <FAQPage />}
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Property modal */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </>
  )
}
