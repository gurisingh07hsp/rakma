import { TICKER_ITEMS } from '@/lib/data'

export default function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <div className="ticker">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <div className="ticker-item" key={i}>
            <span>{item.address}</span>
            <b>▲ {item.label}</b>
            <span className="ticker-sep">·</span>
          </div>
        ))}
      </div>
    </div>
  )
}
