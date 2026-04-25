export function Hero({ onNav }) {
  return (
    <section className="hero">
      <div className="eyebrow hero__eyebrow">Ambulant Betreutes Wohnen · Köln</div>
      <h1>Begleitung im Alltag — auf Augenhöhe.</h1>
      <p className="hero__lead">
        Wir begleiten Erwachsene mit psychischen, geistigen oder mehrfachen Beeinträchtigungen
        in ihrem Alltag. So viel wie nötig, so wenig wie möglich.
      </p>
      <div className="hero__ctas">
        <a
          className="btn btn-primary"
          href="#kontakt"
          onClick={(e) => { e.preventDefault(); onNav('kontakt') }}
        >
          Erstgespräch anfragen <span className="arr">→</span>
        </a>
        <a
          className="btn btn-secondary"
          href="#leistungen"
          onClick={(e) => { e.preventDefault(); onNav('leistungen') }}
        >
          Wie wir arbeiten
        </a>
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
          <div className="lbl">Teams · Ost / West</div>
        </div>
      </div>
    </section>
  )
}
