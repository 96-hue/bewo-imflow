function HeroVisual() {
  return (
    <svg
      className="hero__visual-svg"
      viewBox="0 0 480 560"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heroBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F8F6F3" />
        </linearGradient>
        <linearGradient id="fadeRight" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1B1938" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#1B1938" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="fadeLeft" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#CBB7FB" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#714CB6" stopOpacity="0.85" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="480" height="560" rx="16" fill="url(#heroBg)" />

      <g fill="none" strokeLinecap="round">
        <path
          d="M-20 200 C 80 140, 180 140, 280 200 S 480 260, 580 200"
          stroke="url(#fadeRight)"
          strokeWidth="2.5"
        />
        <path
          d="M-20 248 C 80 188, 180 188, 280 248 S 480 308, 580 248"
          stroke="#1B1938"
          strokeWidth="1.8"
          strokeOpacity="0.45"
        />
        <path
          d="M-20 296 C 80 236, 180 236, 280 296 S 480 356, 580 296"
          stroke="url(#fadeLeft)"
          strokeWidth="1.8"
        />
        <path
          d="M-20 344 C 80 284, 180 284, 280 344 S 480 404, 580 344"
          stroke="#CBB7FB"
          strokeWidth="1.5"
          strokeOpacity="0.7"
        />
        <path
          d="M-20 392 C 80 332, 180 332, 280 392 S 480 452, 580 392"
          stroke="#1B1938"
          strokeWidth="1.2"
          strokeOpacity="0.18"
        />
      </g>

      <line
        x1="40"
        y1="120"
        x2="440"
        y2="120"
        stroke="#1B1938"
        strokeOpacity="0.12"
        strokeWidth="1"
      />

      <g>
        <circle cx="80" cy="80" r="3" fill="#CBB7FB" />
        <circle cx="400" cy="84" r="2.5" fill="#1B1938" opacity="0.4" />
        <circle cx="240" cy="92" r="2" fill="#1B1938" opacity="0.25" />
      </g>

      <g
        transform="translate(40, 484)"
        fontFamily="Source Serif 4, Georgia, serif"
        fill="#524F4D"
      >
        <text fontSize="14" fontStyle="italic">im flow</text>
        <text x="0" y="22" fontSize="11" fill="#6E6967" letterSpacing="0.06em">
          Begleitung · Bewegung · Kontinuität
        </text>
      </g>

      <g transform="translate(440, 484)" textAnchor="end">
        <text fontFamily="Inter, sans-serif" fontSize="10" fill="#6E6967" letterSpacing="0.12em">
          KÖLN · SEIT 2016
        </text>
      </g>
    </svg>
  )
}

export function Hero({ onNav }) {
  return (
    <section className="hero hero--dark">
      <div className="hero__inner">
        <div className="hero__grid">
          <div className="hero__text">
            <div className="eyebrow hero__eyebrow">Ambulant Betreutes Wohnen · Köln</div>
            <h1 className="hero__title">
              Begleitung im&nbsp;Alltag <span className="hero__title-accent">— auf Augenhöhe.</span>
            </h1>
            <p className="hero__lead">
              Wir begleiten Erwachsene mit psychischen, geistigen oder mehrfachen Beeinträchtigungen
              in ihrem Alltag. So viel wie nötig, so wenig wie möglich.
            </p>
            <div className="hero__ctas">
              <a
                className="btn btn-cream"
                href="#kontakt"
                onClick={(e) => { e.preventDefault(); onNav('kontakt') }}
              >
                Erstgespräch anfragen <span className="arr">→</span>
              </a>
              <a
                className="btn btn-ghost-light"
                href="#leistungen"
                onClick={(e) => { e.preventDefault(); onNav('leistungen') }}
              >
                Wie wir arbeiten
              </a>
            </div>
          </div>
          <div className="hero__visual">
            <HeroVisual />
          </div>
        </div>

        <div className="hero__meta">
          <div className="hero__meta-item">
            <div className="num">2016</div>
            <div className="lbl">Gegründet in Köln</div>
          </div>
          <div className="hero__meta-item">
            <div className="num">~80</div>
            <div className="lbl">Klient:innen</div>
          </div>
          <div className="hero__meta-item">
            <div className="num">16</div>
            <div className="lbl">Mitarbeiter:innen</div>
          </div>
          <div className="hero__meta-item">
            <div className="num">2</div>
            <div className="lbl">Teams in Köln</div>
          </div>
        </div>
      </div>
    </section>
  )
}
