'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Property } from '@/lib/data'

interface PropertyModalProps {
  property: Property | null
  onClose: () => void
}

export default function PropertyModal({ property, onClose }: PropertyModalProps) {
  const [amount, setAmount] = useState(500)

  useEffect(() => {
    if (property) {
      setAmount(500)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [property])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  const monthly = property ? ((amount * property.yield) / 100 / 12).toFixed(2) : '0.00'
  const annual = property ? ((amount * property.yield) / 100).toFixed(2) : '0.00'

  return (
    <div
      className={`modal-overlay${property ? ' open' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="modal-box">
        {/* Close bar */}
        <div className="modal-close-bar">
          <span className="modal-close-loc">{property?.loc}</span>
          <button className="modal-close-btn" onClick={onClose}>✕ Close</button>
        </div>

        {/* Image */}
        {property && (
          <div className="modal-img">
            <Image
              src={property.img}
              alt={property.address}
              fill
              style={{ objectFit: 'cover' }}
              sizes="900px"
            />
            <div className="modal-img-overlay" />
          </div>
        )}

        <div className="modal-body">
          <div className="modal-loc">{property?.loc}</div>
          <div className="modal-title">{property?.address}</div>
          <div className="modal-sub">{property?.sub}</div>

          {/* Stats grid */}
          <div className="modal-stats">
            {property?.stats.map((s, i) => (
              <div className="modal-stat" key={i}>
                <span className="modal-stat-val">{s.v}</span>
                <span className="modal-stat-key">{s.k}</span>
              </div>
            ))}
          </div>

          {/* Progress */}
          <div className="modal-prog-box">
            <div className="modal-prog-row">
              <span>Funding progress</span>
              <span className="modal-prog-pct">{property?.pct}% funded</span>
            </div>
            <div className="modal-prog-bar">
              <div className="modal-prog-fill" style={{ width: `${property?.pct ?? 0}%` }} />
            </div>
            <div className="modal-prog-info">
              <span>{property?.raised} raised</span>
              <span>{property?.rem} remaining</span>
            </div>
          </div>

          <p className="modal-desc">{property?.desc}</p>

          {/* Return calculator */}
          <div className="modal-invest-box">
            <div className="modal-invest-title">Calculate your returns</div>
            <div className="modal-invest-row">
              <div>
                <div style={{ fontSize: 11, color: 'var(--muted2)', marginBottom: 5, fontFamily: 'var(--mono)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Investment
                </div>
                <input
                  type="number"
                  className="modal-invest-input"
                  value={amount}
                  min={100}
                  step={50}
                  onChange={(e) => setAmount(Math.max(100, Number(e.target.value)))}
                />
              </div>
              <div className="modal-invest-returns">
                <div className="modal-invest-monthly">+${monthly} / month</div>
                <div className="modal-invest-annual">${annual} / year · {property?.yield}% yield</div>
              </div>
              <button className="modal-invest-btn">Invest now →</button>
            </div>
            <p className="modal-invest-note">
              Minimum $100 · Projected returns, not guaranteed · Secured via SPV
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
