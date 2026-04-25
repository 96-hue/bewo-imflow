// Header.jsx
const SiteHeader = ({ active = "home", onNav }) => {
  const items = [
    { id: "home", label: "Start" },
    { id: "leistungen", label: "Leistungen" },
    { id: "team", label: "Team" },
    { id: "karriere", label: "Karriere" },
    { id: "kontakt", label: "Kontakt" },
  ];
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#" className="site-header__logo" onClick={(e) => { e.preventDefault(); onNav("home"); }}>
          <img src="../../assets/logo.svg" alt="BeWo imflow" />
        </a>
        <nav className="site-nav">
          {items.map((it) => (
            <a key={it.id} href={`#${it.id}`}
               className={active === it.id ? "active" : ""}
               onClick={(e) => { e.preventDefault(); onNav(it.id); }}>
              {it.label}
            </a>
          ))}
        </nav>
        <div className="site-header__cta">
          <a className="btn btn-secondary" href="#kontakt"
             onClick={(e) => { e.preventDefault(); onNav("kontakt"); }}>Anfrage</a>
        </div>
      </div>
    </header>
  );
};
window.SiteHeader = SiteHeader;
