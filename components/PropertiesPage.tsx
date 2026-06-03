'use client'

import { useState } from 'react'
import { PROPERTIES, Property } from '@/lib/data'
import PropertyCard from './PropertyCard'

interface PropertiesPageProps {
  onOpenModal: (property: Property) => void
}

type FilterTag = 'all' | 'open' | 'new' | 'closing' | 'caledon' | 'brampton' | 'etobicoke' | 'sarnia' | 'thorold' | 'london-on' | 'mississauga'

const FILTERS: { tag: FilterTag; label: string; count?: number }[] = [
  { tag: 'all', label: 'All', count: 15 },
  { tag: 'open', label: 'Open', count: 10 },
  { tag: 'new', label: 'New', count: 4 },
  { tag: 'closing', label: 'Closing soon', count: 1 },
  { tag: 'caledon', label: 'Caledon' },
  { tag: 'brampton', label: 'Brampton' },
  { tag: 'etobicoke', label: 'Etobicoke' },
  { tag: 'sarnia', label: 'Sarnia' },
  { tag: 'thorold', label: 'Thorold' },
  { tag: 'london-on', label: 'London ON' },
  { tag: 'mississauga', label: 'Mississauga' },
]

export default function PropertiesPage({ onOpenModal }: PropertiesPageProps) {
  const [activeFilter, setActiveFilter] = useState<FilterTag>('all')

  const filtered = PROPERTIES.filter((p) =>
    activeFilter === 'all' ? true : p.tags.includes(activeFilter)
  )

  const handleOpenModal = (id: string) => {
    const prop = PROPERTIES.find((p) => p.id === id)
    if (prop) onOpenModal(prop)
  }

  return (
    <>
      {/* Hero */}
      <div className="props-hero">
        <div className="props-hero-deco" />
        <div className="props-hero-inner">
          <div className="eyebrow">Our portfolio · Ontario, Canada</div>
          <h1 className="props-hero-h">
            Canadian <em>properties,</em><br />
            exceptional returns.
          </h1>
          <p className="props-hero-sub">
            15 verified residential properties across Ontario. Every listing is legally structured,
            professionally valued, and open from $100.
          </p>
          <div className="props-hero-stats">
            <div className="ph-stat">
              <span className="ph-stat-val">15</span>
              <span className="ph-stat-key">Active listings</span>
            </div>
            <div className="ph-stat">
              <span className="ph-stat-val">6</span>
              <span className="ph-stat-key">Ontario cities</span>
            </div>
            <div className="ph-stat">
              <span className="ph-stat-val accent">8.6%</span>
              <span className="ph-stat-key">Avg. yield</span>
            </div>
            <div className="ph-stat">
              <span className="ph-stat-val">$100</span>
              <span className="ph-stat-key">Min. investment</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <div className="filter-bar">
        <div className="filter-inner">
          {FILTERS.map((f, i) => (
            <div key={f.tag} style={{ display: 'flex', alignItems: 'center' }}>
              {(i === 4) && <div className="filter-sep" />}
              <button
                className={`filter-btn${activeFilter === f.tag ? ' active' : ''}`}
                onClick={() => setActiveFilter(f.tag)}
              >
                {f.label}
                {f.count !== undefined && (
                  <span className="filter-count">{f.count}</span>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Properties grid */}
      <div className="props-section">
        <div className="props-grid">
          {filtered.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              size="sm"
              onClick={handleOpenModal}
            />
          ))}
        </div>
        <div className="props-note">
          <p className="props-note-title">More properties coming soon</p>
          <p className="props-note-desc">
            Share additional property details and we&apos;ll add them with real data, photos, and
            investment terms.
          </p>
        </div>
      </div>
    </>
  )
}
