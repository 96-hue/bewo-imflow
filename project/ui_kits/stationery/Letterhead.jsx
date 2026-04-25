// Letterhead.jsx — A4 letterhead, official LVR-style correspondence
const Letterhead = () => (
  <div className="a4">
    <div className="a4__header">
      <img src="../../assets/logo.svg" alt="BeWo imflow"/>
      <div className="meta">
        Adalbertstraße 11–15 · 51103 Köln<br/>
        Tel. 0221 29 49 29 16<br/>
        post@bewo-imflow.de
      </div>
    </div>

    <div className="a4__addrwin">
      <div className="from">BeWo imflow · Adalbertstraße 11–15 · 51103 Köln</div>
      <div className="to">
        Landschaftsverband Rheinland<br/>
        LVR-Dezernat Soziales<br/>
        Frau Sachbearbeiterin<br/>
        Kennedy-Ufer 2<br/>
        50679 Köln
      </div>
    </div>

    <div className="a4__date">Köln, 25. April 2026</div>
    <div className="a4__subject">Antrag auf Weitergewährung der Eingliederungshilfe — Klient:in Az. 12345/26</div>

    <div className="a4__body">
      <p>Sehr geehrte Frau Sachbearbeiterin,</p>
      <p>für die o. g. Klient:in beantragen wir die Fortführung der Leistung Ambulant Betreutes Wohnen nach §§ 113 ff. SGB IX über den 30. Juni 2026 hinaus.</p>
      <p>Der aktuelle Hilfebedarf liegt unverändert vor. Die Begleitung erfolgt durch Team Ost (zwei Bezugspersonen) im Umfang von durchschnittlich 4,5 Fachleistungsstunden pro Woche. Die Zielvereinbarung wurde im März 2026 fortgeschrieben und liegt der LVR-Sachbearbeitung als gesonderte Anlage vor.</p>
      <p>Für Rückfragen stehen wir Ihnen gerne zur Verfügung.</p>
      <div className="a4__signoff">
        <p>Mit freundlichen Grüßen</p>
        <div className="name">Simon Zachowski<br/><span style={{fontWeight:400, color:'var(--bw-ink-2)', fontSize:'10pt'}}>Gesamtleitung pädagogisch</span></div>
      </div>
    </div>

    <div className="a4__footer">
      <div>
        <h6>BeWo imflow</h6>
        Adalbertstraße 11–15<br/>51103 Köln
      </div>
      <div>
        <h6>Kontakt</h6>
        Tel. 0221 29 49 29 16<br/>post@bewo-imflow.de<br/>bewo-imflow.de
      </div>
      <div>
        <h6>Geschäftsleitung</h6>
        Joris Wolf<br/>Simon Zachowski
      </div>
      <div>
        <h6>Bank</h6>
        Sparkasse KölnBonn<br/>IBAN DE00 0000 0000 0000 0000 00<br/>BIC COLSDE33XXX
      </div>
    </div>
  </div>
);
window.Letterhead = Letterhead;
