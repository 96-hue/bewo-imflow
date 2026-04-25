export function Leistungen() {
  const items = [
    {
      t: 'Alltag',
      d: 'Wir helfen bei der Strukturierung des Tages, der Selbstversorgung und der Bewältigung allgemeiner Anforderungen im täglichen Leben.',
    },
    {
      t: 'Wohnen',
      d: 'Wir unterstützen Sie im Bereich des häuslichen Lebens, damit Sie Ihr Wohnumfeld selbstbestimmt erhalten und gestalten können.',
    },
    {
      t: 'Soziale Teilhabe',
      d: 'Wir begleiten Sie bei der Freizeitgestaltung, fördern Kommunikation und unterstützen beim Aufbau und der Pflege von Beziehungen.',
    },
    {
      t: 'Gesundheit',
      d: 'Wir begleiten Sie zuverlässig zu ärztlichen Terminen, Therapeut:innen oder Beratungsstellen — wenn Sie es wünschen.',
    },
    {
      t: 'Arbeit & Bildung',
      d: 'Wir fördern Sie beim Lernen, bei der Wissensanwendung und bei der Anbindung an tagesstrukturierende oder berufliche Maßnahmen.',
    },
    {
      t: 'Finanzen',
      d: 'Wir helfen bei administrativen Aufgaben, begleiten zu Behörden und unterstützen bei Anträgen und Einkommensangelegenheiten.',
    },
  ]
  return (
    <section className="section" id="leistungen">
      <div className="section__inner">
        <div className="section__head">
          <div className="eyebrow section__eyebrow">Leistungen</div>
          <h2>Begleitung in neun Lebensbereichen.</h2>
          <p className="section__lead">
            Wir kommen zu Ihnen — aufsuchend, in Ihrer Wohnung oder in Ihrem direkten sozialen Umfeld.
            Welche Hilfen sinnvoll sind, klären wir gemeinsam, orientiert an Ihren Zielen.
          </p>
        </div>
        <div className="leistungen">
          {items.map((it, i) => (
            <div className="leistung" key={i}>
              <h3>{it.t}</h3>
              <p>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function UeberUns() {
  return (
    <section className="section section--sunken" id="ueberuns">
      <div className="section__inner">
        <div className="section__head">
          <div className="eyebrow section__eyebrow">Über uns</div>
          <h2 className="h-serif">Ruhig. Verlässlich. Professionell.</h2>
          <p className="section__lead">
            Unsere Arbeit ist von dem Grundsatz geprägt, dass jeder Mensch Experte für sein eigenes Leben ist.
            Wir unterstützen ganzheitlich dabei, individuelle Fähigkeiten zu stärken und Hürden im Alltag abzubauen.
          </p>
        </div>
        <div className="two-col">
          <div className="about-block">
            <h3>Haltung</h3>
            <p>
              Wir legen großen Wert auf eine professionelle, wertschätzende und verlässliche Arbeitsbeziehung.
              Aus Überzeugung sprechen wir unsere Klient:innen grundsätzlich mit „Sie" an — mit dem gebotenen Respekt,
              auf Augenhöhe.
            </p>
            <p>
              Seit 2016 begleiten wir rund 80 Klient:innen mit psychischen, geistigen oder mehrfachen Beeinträchtigungen
              in Köln. Mit 16 Mitarbeiter:innen in zwei Teams kennen wir die Stadt und ihre sozialen Strukturen.
            </p>
          </div>
          <div className="about-block">
            <h3>Feste Bezugspersonen</h3>
            <p>
              Wir wissen, wie wichtig Vertrauen und Beständigkeit sind. Deshalb arbeiten wir nach dem System
              der festen Bezugsbetreuung: Sie haben eine verlässliche Ansprechperson an Ihrer Seite,
              die Ihre Situation genau kennt und Sie kontinuierlich begleitet.
            </p>
            <p>
              Unsere Unterstützung orientiert sich an Ihren persönlichen Zielen — die wir gemeinsam mit Ihnen
              erarbeiten, festhalten und alle sechs Monate gemeinsam überprüfen.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Aufnahme() {
  const steps = [
    {
      n: '01',
      t: 'Unverbindliche Kontaktaufnahme',
      d: 'Sie oder Ihre Angehörigen bzw. rechtlichen Betreuer:innen rufen uns an oder schreiben eine E-Mail. Unsere Verwaltung nimmt Ihr Anliegen auf und leitet es direkt an das zuständige Team weiter.',
    },
    {
      n: '02',
      t: 'Erstes Kennenlernen',
      d: 'In einem unverbindlichen Gespräch (ca. 45–60 Minuten) lernen wir uns kennen — in unseren Büroräumen, bei Ihnen zu Hause oder auch während eines Klinikaufenthalts. Wir hören zu, klären Ihre Fragen und informieren in Ruhe über unser Angebot.',
    },
    {
      n: '03',
      t: 'Gemeinsame Planung — wir übernehmen den Papierkram',
      d: 'Wenn wir uns für eine Zusammenarbeit entscheiden, füllen wir gemeinsam alle notwendigen Unterlagen für den Kostenträger aus. Sie müssen sich nicht allein mit Formularen herumschlagen — unsere Fachkräfte und unsere Verwaltung übernehmen Kommunikation und Versand.',
    },
  ]
  return (
    <section className="section" id="aufnahme">
      <div className="section__inner">
        <div className="section__head">
          <div className="eyebrow section__eyebrow">Aufnahme</div>
          <h2>Der Weg zu uns ist einfach.</h2>
          <p className="section__lead">
            Wir möchten Ihnen alle administrativen Sorgen abnehmen und begleiten Sie Schritt für Schritt.
          </p>
        </div>
        <div className="aufnahme-steps">
          {steps.map((s) => (
            <div className="aufnahme-step" key={s.n}>
              <div className="aufnahme-step__num">{s.n}</div>
              <div className="aufnahme-step__body">
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Qualitaet() {
  const items = [
    {
      t: 'Gewaltschutz & Beschwerdemanagement',
      d: 'Wir verfügen über ein fest etabliertes Gewaltschutzkonzept sowie ein internes und externes Beschwerdemanagement — klare Ansprechpartner:innen in jeder Lage.',
    },
    {
      t: 'Vier-Augen-Prinzip',
      d: 'Alle wichtigen Planungen zu Hilfebedarfen werden im Team reflektiert und von einer zweiten Fachkraft geprüft. Das schützt vor blinden Flecken.',
    },
    {
      t: 'Ziel- und Wirkungsüberprüfung',
      d: 'Alle sechs Monate setzen wir uns gemeinsam zusammen, um zu prüfen, ob wir noch auf dem richtigen Weg sind oder die Unterstützung anpassen müssen.',
    },
    {
      t: 'Datenschutz',
      d: 'Alle gesundheitlichen und persönlichen Daten behandeln wir mit höchster Sensibilität gemäß DSGVO — in sicheren digitalen Akten.',
    },
  ]
  return (
    <section className="section section--sunken" id="qualitaet">
      <div className="section__inner">
        <div className="section__head">
          <div className="eyebrow section__eyebrow">Qualität</div>
          <h2>Sicherheit und Transparenz — fest verankert.</h2>
          <p className="section__lead">
            Wir lassen Qualität nicht dem Zufall überlassen, sondern haben sie in unseren Abläufen verankert.
          </p>
        </div>
        <div className="qualitaet-grid">
          {items.map((it, i) => (
            <div className="qualitaet-item" key={i}>
              <h3>{it.t}</h3>
              <p>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Teams() {
  return (
    <section className="section" id="team">
      <div className="section__inner">
        <div className="two-col" style={{ alignItems: 'center' }}>
          <div>
            <div className="eyebrow section__eyebrow">Teams</div>
            <h2>Zwei Teams in ganz Köln.</h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--bw-ink-2)', maxWidth: 'none' }}>
              Unsere 16 Mitarbeiter:innen arbeiten in zwei regionalen Teams — links und rechts des Rheins.
              Welches Team Sie begleitet, hängt davon ab, wo Sie wohnen.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--bw-ink-2)', maxWidth: 'none' }}>
              Die fachliche Verantwortung liegt bei{' '}
              <strong>Joris Wolf</strong> (Gesamtleitung, betriebswirtschaftlich) und{' '}
              <strong>Simon Zachowski</strong> (Gesamtleitung, pädagogisch).
            </p>
          </div>
          <figure className="teams-map__figure">
            <img
              src="/bewo-imflow/koeln-teams-map.svg"
              alt="Stadtgebiet Köln mit Team West und Team Ost"
            />
            <figcaption>Abdeckung BeWo imflow · Stadtgebiet Köln</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

export function Karriere() {
  const jobs = [
    { t: 'Sozialarbeiter:in / Sozialpädagog:in (m/w/d)', team: 'Team Ost', umfang: '30–39 h', typ: 'unbefristet' },
    { t: 'Heilerziehungspfleger:in (m/w/d)', team: 'Team West', umfang: 'Teilzeit', typ: 'unbefristet' },
    { t: 'Werkstudent:in Verwaltung', team: 'Köln', umfang: '10–15 h', typ: 'befristet' },
  ]
  return (
    <section className="section" id="karriere">
      <div className="section__inner">
        <div className="section__head">
          <div className="eyebrow section__eyebrow">Karriere</div>
          <h2>Verstärken Sie unser Team.</h2>
          <p className="section__lead">
            Als Fachkraft im Ambulant Betreuten Wohnen bewegen Sie sich im gesamten Einzugsgebiet Köln.
            Wir bieten Strukturen, die gute soziale Arbeit erst möglich machen.
          </p>
        </div>

        <div className="karriere-benefits">
          <div className="karriere-benefit">
            <h4>Flexible Arbeitszeiten</h4>
            <p>Kernarbeitszeiten Mo–Fr, 8–18 Uhr. Keine Schicht- oder Wochenenddienste — für eine gute Vereinbarkeit von Beruf und Privatleben.</p>
          </div>
          <div className="karriere-benefit">
            <h4>Teamkultur & Standards</h4>
            <p>Informationsgespräche führen wir im Tandem durch. Hilfepläne werden systematisch im Vier-Augen-Prinzip gegengelesen — niemand trägt Verantwortung allein.</p>
          </div>
          <div className="karriere-benefit">
            <h4>Moderne Ausstattung</h4>
            <p>Cloudbasierte, sichere Online-Plattform für Dokumentation und Hilfeplanung. Eine starke Verwaltung hält Ihnen für die pädagogische Arbeit den Rücken frei.</p>
          </div>
        </div>

        <div className="jobs" style={{ marginTop: 48 }}>
          {jobs.map((j, i) => (
            <div className="job" key={i}>
              <div className="job__title">
                <h3>{j.t}</h3>
                <div className="meta">
                  <span>{j.team}</span>
                  <span>·</span>
                  <span>{j.umfang}</span>
                </div>
              </div>
              <div className="job__tags">
                <span className="tag">{j.typ}</span>
              </div>
              <div className="job__arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTABlock({ onNav }) {
  return (
    <section className="section">
      <div className="section__inner">
        <div className="cta-block">
          <div>
            <h2>Sie haben eine Frage oder möchten ein Erstgespräch?</h2>
            <p>Wir melden uns innerhalb von zwei Werktagen. Telefonisch, per Mail oder über das Formular.</p>
          </div>
          <div className="actions">
            <a
              className="btn btn-primary"
              href="#kontakt"
              onClick={(e) => { e.preventDefault(); onNav('kontakt') }}
            >
              Anfrage senden
            </a>
            <a className="btn btn-secondary" href="tel:02212949 2916">0221 29 49 29 16</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <img src="/bewo-imflow/logo.svg" alt="BeWo imflow" style={{ height: 32, marginBottom: 16 }} />
          <p style={{ fontSize: 14, color: 'var(--bw-ink-2)', maxWidth: 'none', margin: 0, lineHeight: 1.6 }}>
            Ambulant Betreutes Wohnen<br />
            Adalbertstraße 11–15<br />
            51103 Köln
          </p>
        </div>
        <div>
          <h5>Angebot</h5>
          <ul>
            <li><a href="#leistungen">Leistungen</a></li>
            <li><a href="#aufnahme">Aufnahme</a></li>
            <li><a href="#ueberuns">Über uns</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
          </ul>
        </div>
        <div>
          <h5>Mitwirken</h5>
          <ul>
            <li><a href="#karriere">Stellen</a></li>
            <li><a href="#karriere">Initiativbewerbung</a></li>
            <li><a href="#kontakt">Kooperationen</a></li>
          </ul>
        </div>
        <div>
          <h5>Rechtliches</h5>
          <ul>
            <li><a href="#impressum">Impressum</a></li>
            <li><a href="#datenschutz">Datenschutz</a></li>
            <li><a href="#barrierefreiheit">Barrierefreiheit</a></li>
          </ul>
        </div>
      </div>
      <div className="site-footer__legal">
        <span>© 2026 BeWo imflow · Inhaber Alexander Rieps</span>
        <span>Mo–Fr 9–17 Uhr · 0221 29 49 29 16</span>
      </div>
    </footer>
  )
}
