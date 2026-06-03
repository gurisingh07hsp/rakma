import Image from 'next/image'
import { Property } from '@/lib/data'

interface PropertyCardProps {
  property: Property
  size?: 'lg' | 'sm'
  onClick: (id: string) => void
}

const BADGE_CLASS: Record<Property['badge'], string> = {
  open: 'badge-open',
  new: 'badge-new',
  hot: 'badge-hot',
  closing: 'badge-closing',
}

const BADGE_LABEL: Record<Property['badge'], string> = {
  open: 'Open',
  new: 'New',
  hot: `${0}% Funded`,
  closing: 'Closing soon',
}

export default function PropertyCard({ property, size = 'sm', onClick }: PropertyCardProps) {
  const badgeLabel =
    property.badge === 'hot'
      ? `${property.pct}% Funded`
      : BADGE_LABEL[property.badge]

  return (
    <div className="prop-card" onClick={() => onClick(property.id)}>
      <div className={`prop-img-wrap ${size}`}>
        <Image
          src={property.img}
          alt={property.address}
          fill
          className="prop-img"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="prop-overlay" />
        <div className={`prop-badge ${BADGE_CLASS[property.badge]}`}>{badgeLabel}</div>
      </div>

      <div className="prop-body">
        <div className="prop-loc">{property.loc}</div>
        <div className={`prop-name${size === 'lg' ? ' lg' : ''}`}>{property.address}</div>

        <div className="prop-stats">
          <div>
            <span className="prop-stat-val">{property.stats[0].v}</span>
            <span className="prop-stat-key">{property.stats[0].k}</span>
          </div>
          <div>
            <span className="prop-stat-val">{property.value}</span>
            <span className="prop-stat-key">Value</span>
          </div>
          <div>
            <span className="prop-stat-val">{property.investors}</span>
            <span className="prop-stat-key">Investors</span>
          </div>
        </div>

        <div className="prop-prog-row">
          <span>Funded</span>
          <span className="prop-pct">{property.pct}%</span>
        </div>
        <div className="prop-prog-bar">
          <div className="prop-prog-fill" style={{ width: `${property.pct}%` }} />
        </div>

        <div className="prop-footer">
          <div className="prop-min">
            From <b>$100</b>
            {(property.badge === 'hot' || property.badge === 'closing') && ' · Closing soon'}
          </div>
          <button className="prop-cta">View details →</button>
        </div>
      </div>
    </div>
  )
}
