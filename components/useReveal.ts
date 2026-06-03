'use client'

import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const trigger = () => {
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
        if (!el.classList.contains('visible')) observer.observe(el)
      })
      return observer
    }

    const obs = trigger()
    return () => obs.disconnect()
  }, [])
}

export function useCountUp() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const target = parseInt(el.dataset.count || '0', 10)
            const prefix = el.dataset.prefix || ''
            const suffix = el.dataset.suffix || ''
            const start = performance.now()
            const duration = 1800

            const update = (now: number) => {
              const progress = Math.min((now - start) / duration, 1)
              const ease = 1 - Math.pow(1 - progress, 3)
              const value = Math.round(ease * target)
              el.textContent = prefix + value + suffix
              if (progress < 1) requestAnimationFrame(update)
              else el.textContent = prefix + target + suffix
            }
            requestAnimationFrame(update)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.5 }
    )

    document.querySelectorAll('[data-count]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
