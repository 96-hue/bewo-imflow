// Sections.jsx — Leistungen, Über uns, Teams, Karriere, CTA, Footer
const Leistungen = () => {
  const items = [
    { t: "Alltag strukturieren", d: "Tagesablauf, Einkäufe, Behördengänge, Termine bei Ärzt:innen oder Therapeut:innen." },
    { t: "Wohnen", d: "Eigene Wohnung halten, Haushaltsführung, Mietangelegenheiten, Kontakt zur Vermietung." },
    { t: "Soziale Teilhabe", d: "Kontakt zu Familie und Freund:innen, Freizeit, Vereine, Nachbarschaft." },
    { t: "Gesundheit", d: "Medikamentenmanagement, Begleitung zu Fachkräften, Krisenkontakte, Klinik‑Übergänge." },
    { t: "Arbeit & Bildung", d: "Bewerbungen, WfbM, Tagesstruktur, Kontakt zu Reha‑Trägern." },
    { t: "Finanzen", d: "Anträge, Post, Konto, Schuldenberatung, Zusammenarbeit mit gesetzlichen Betreuer:innen." },
  ];
  return (
    <section className="section" id="leistungen">
      <div className="section__inner">
        <div className="section__head">
          <div className="eyebrow section__eyebrow">Was wir tun</div>
          <h2>Begleitung in den Bereichen, in denen Sie sie brauchen.</h2>
          <p className="section__lead">
            Welche Hilfen sinnvoll sind, klären wir gemeinsam mit Ihnen — orientiert an Ihren Zielen und am Bedarf.
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
  );
};

const UeberUns = () => (
  <section className="section section--sunken">
    <div className="section__inner">
      <div className="two-col">
        <div>
          <div className="eyebrow section__eyebrow">Über uns</div>
          <h2 className="h-serif">Ruhig. Verlässlich. Seit 2016.</h2>
        </div>
        <div>
          <p style={{fontSize: 17, lineHeight: 1.7, color: 'var(--bw-ink-2)', marginBottom: 16, maxWidth: 'none'}}>
            BeWo imflow ist ein Anbieter von Ambulant Betreutem Wohnen im Rahmen der Eingliederungshilfe nach SGB&nbsp;IX.
            Wir arbeiten in zwei regionalen Teams in Köln — links und rechts des Rheins — und kennen die Stadt.
          </p>
          <p style={{fontSize: 17, lineHeight: 1.7, color: 'var(--bw-ink-2)', maxWidth: 'none'}}>
            Unsere Begleitung ist fachlich fundiert und persönlich. Wir arbeiten dauerhaft, nicht in Modulen oder Paketen.
            Wenn Sie uns einmal kennen, bleiben Sie in der Regel bei derselben Bezugsperson.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Teams = () => (
  <section className="section" id="team">
    <div className="section__inner">
      <div className="section__head">
        <div className="eyebrow section__eyebrow">Teams</div>
        <h2>Zwei Teams, eine Stadt.</h2>
        <p className="section__lead">Der Rhein ist unsere Grenze. Welches Team Sie begleitet, hängt davon ab, wo Sie wohnen.</p>
      </div>
      <div className="teams-map">
        <figure className="teams-map__figure">
          <object data="../../assets/koeln-teams-map.svg" type="image/svg+xml" aria-label="Stadtgebiet Köln, aufgeteilt in Team West (linksrheinisch) und Team Ost (rechtsrheinisch)"></object>
          <figcaption>Abdeckung BeWo imflow · Stadtgebiet Köln</figcaption>
        </figure>
        <div className="teams-map__list">
          <div className="teams-map__team">
            <div className="label"><span className="dot"></span>Team West · linksrheinisch</div>
            <h3>Innenstadt, Ehrenfeld, Sülz, Lindenthal, Nippes, Rodenkirchen</h3>
            <p>8 Kolleg:innen · Sozialarbeit, Heilerziehungspflege, Sozialpädagogik.</p>
            <div className="veedel">
              <span>Innenstadt</span><span>Ehrenfeld</span><span>Sülz</span>
              <span>Lindenthal</span><span>Nippes</span><span>Rodenkirchen</span>
            </div>
            <div className="person">
              <div className="avatar">JW</div>
              <div><strong>Joris Wolf</strong> · Gesamtleitung, betriebswirtschaftlich</div>
            </div>
          </div>
          <div className="teams-map__team team--ost">
            <div className="label"><span className="dot"></span>Team Ost · rechtsrheinisch</div>
            <h3>Deutz, Mülheim, Buchforst, Kalk, Humboldt, Porz, Dellbrück</h3>
            <p>7 Kolleg:innen · Sozialarbeit, Heilerziehungspflege, Sozialpädagogik.</p>
            <div className="veedel">
              <span>Deutz</span><span>Mülheim</span><span>Buchforst</span>
              <span>Kalk</span><span>Humboldt</span><span>Porz</span><span>Dellbrück</span>
            </div>
            <div className="person">
              <div className="avatar">SZ</div>
              <div><strong>Simon Zachowski</strong> · Leitung Ost, pädagogisch</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Karriere = () => {
  const jobs = [
    { t: "Sozialarbeiter:in / Sozialpädagog:in (m/w/d)", team: "Team Ost", umfang: "30–39 h", typ: "unbefristet" },
    { t: "Heilerziehungspfleger:in (m/w/d)", team: "Team West", umfang: "Teilzeit", typ: "unbefristet" },
    { t: "Werkstudent:in Verwaltung", team: "Köln", umfang: "10–15 h", typ: "befristet" },
  ];
  return (
    <section className="section section--sunken" id="karriere">
      <div className="section__inner">
        <div className="section__head">
          <div className="eyebrow section__eyebrow">Karriere</div>
          <h2>Im Team Ost ist eine Stelle frei.</h2>
          <p className="section__lead">
            Wir freuen uns auf Bewerbungen von Sozialarbeiter:innen, Heilerziehungspfleger:innen und Sozialpädagog:innen.
            Schreiben Sie uns auch gerne ohne konkrete Ausschreibung.
          </p>
        </div>
        <div className="jobs">
          {jobs.map((j, i) => (
            <div className="job" key={i}>
              <div className="job__title">
                <h3>{j.t}</h3>
                <div className="meta"><span>{j.team}</span><span>·</span><span>{j.umfang}</span></div>
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
  );
};

const CTABlock = ({ onNav }) => (
  <section className="section">
    <div className="section__inner">
      <div className="cta-block">
        <div>
          <h2>Sie haben eine Frage oder möchten ein Erstgespräch?</h2>
          <p>Wir melden uns innerhalb von zwei Werktagen. Telefonisch, per Mail oder über das Formular.</p>
        </div>
        <div className="actions">
          <a className="btn btn-primary" href="#kontakt"
             onClick={(e) => { e.preventDefault(); onNav("kontakt"); }}>Anfrage senden</a>
          <a className="btn btn-secondary" href="tel:02212949 2916">0221 29 49 29 16</a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="site-footer">
    <div className="site-footer__inner">
      <div>
        <img src="../../assets/logo.svg" alt="BeWo imflow" style={{height:32, marginBottom:16}}/>
        <p style={{fontSize:14, color:'var(--bw-ink-2)', maxWidth:'none', margin:0, lineHeight:1.6}}>
          Ambulant Betreutes Wohnen<br/>
          Adalbertstraße 11–15<br/>
          51103 Köln
        </p>
      </div>
      <div>
        <h5>Angebot</h5>
        <ul>
          <li><a href="#leistungen">Leistungen</a></li>
          <li><a href="#team">Teams</a></li>
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
);

window.Leistungen = Leistungen;
window.UeberUns = UeberUns;
window.Teams = Teams;
window.Karriere = Karriere;
window.CTABlock = CTABlock;
window.Footer = Footer;
