'use client'

import { useEffect, useRef, useState } from 'react'

interface VideoIntroProps {
  onComplete: () => void
}

export default function VideoIntro({ onComplete }: VideoIntroProps) {
  const [gone, setGone] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const skip = () => {
    if (gone) return
    setGone(true)
    setTimeout(onComplete, 900)
  }

  useEffect(() => {
    timerRef.current = setTimeout(skip, 3800)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={`intro-overlay${gone ? ' gone' : ''}`}>
      <video
        className="intro-video"
        autoPlay
        muted
        playsInline
        loop
        onError={skip}
      >
        <source
          src="https://www.pexels.com/download/video/2792369/?fps=29.97&h=1080&w=1920"
          type="video/mp4"
        />
      </video>
      <div className="intro-grad" />
      <div className="intro-content">
        <div className="intro-wordmark">
          Rakma<b>.</b>
        </div>
        <div className="intro-tagline">Real Estate for Everyone</div>
      </div>
      <button className="intro-skip" onClick={skip}>
        Skip ↗
      </button>
      <div className="intro-prog" />
    </div>
  )
}
