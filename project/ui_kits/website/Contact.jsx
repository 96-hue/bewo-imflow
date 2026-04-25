// Contact.jsx — Anfrage form (interactive)
const ContactForm = ({ onSent }) => {
  const [state, setState] = React.useState({ name: "", email: "", role: "klient", thema: "", text: "" });
  const [sent, setSent] = React.useState(false);
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    onSent && onSent(state);
    setTimeout(() => setSent(false), 3500);
    setState({ name: "", email: "", role: "klient", thema: "", text: "" });
  };
  const upd = (k) => (e) => setState({ ...state, [k]: e.target.value });
  return (
    <section className="section section--sunken" id="kontakt">
      <div className="section__inner" style={{maxWidth: 760}}>
        <div className="section__head">
          <div className="eyebrow section__eyebrow">Kontakt</div>
          <h2>Schreiben Sie uns.</h2>
          <p className="section__lead">
            Wir antworten in der Regel innerhalb von zwei Werktagen.
            Lieber telefonisch? <a href="tel:02212949 2916">0221&nbsp;29&nbsp;49&nbsp;29&nbsp;16</a>, Mo–Fr 9–17 Uhr.
          </p>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <div>
            <label htmlFor="name">Ihr Name</label>
            <input id="name" className="field" required value={state.name} onChange={upd("name")} placeholder="Vor- und Nachname"/>
          </div>
          <div>
            <label htmlFor="email">E‑Mail</label>
            <input id="email" className="field" type="email" required value={state.email} onChange={upd("email")} placeholder="ihr.name@beispiel.de"/>
          </div>
          <div className="full">
            <label htmlFor="role">Sie schreiben uns als…</label>
            <select id="role" className="field" value={state.role} onChange={upd("role")}>
              <option value="klient">Interessierte:r Klient:in</option>
              <option value="angehoerige">Angehörige:r / gesetzliche:r Betreuer:in</option>
              <option value="behoerde">LVR / Jugendamt / Behörde</option>
              <option value="bewerber">Bewerber:in</option>
              <option value="kooperation">Kooperationspartner:in (Klinik / SPZ)</option>
            </select>
          </div>
          <div className="full">
            <label htmlFor="thema">Worum geht es?</label>
            <input id="thema" className="field" value={state.thema} onChange={upd("thema")} placeholder="Stichwort, z. B. Erstgespräch"/>
          </div>
          <div className="full">
            <label htmlFor="text">Ihre Nachricht</label>
            <textarea id="text" className="field" required value={state.text} onChange={upd("text")} placeholder="Beschreiben Sie kurz Ihr Anliegen."></textarea>
          </div>
          <div className="actions">
            <span className="hint">Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß <a href="#datenschutz">Datenschutzerklärung</a> zu.</span>
            <button type="submit" className="btn btn-primary">Anfrage senden <span className="arr">→</span></button>
          </div>
        </form>
        {sent && <div className="toast">Danke — wir melden uns innerhalb von zwei Werktagen.</div>}
      </div>
    </section>
  );
};
window.ContactForm = ContactForm;
