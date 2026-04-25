// BusinessCard.jsx — 85×55mm
const BusinessCard = ({ name, role, email, phone }) => (
  <div className="bc front">
    <div className="bc__logo"><img src="../../assets/logo.svg" alt="BeWo imflow"/></div>
    <div className="bc__name">{name}</div>
    <div className="bc__role">{role}</div>
    <div className="bc__contact">
      <span className="lbl">Tel.</span><span>{phone}</span>
      <span className="lbl">E‑Mail</span><span>{email}</span>
      <span className="lbl">Web</span><span>bewo-imflow.de</span>
    </div>
  </div>
);

const BusinessCardBack = () => (
  <div className="bc back">
    <img src="../../assets/logo-light.svg" alt="BeWo imflow"/>
  </div>
);

const BusinessCards = () => (
  <>
    <div className="bc-grid">
      <BusinessCard name="Joris Wolf" role={<>Gesamtleitung<br/>betriebswirtschaftlich</>} email="joris.wolf@bewo-imflow.de" phone="0221 29 49 29 16"/>
      <BusinessCardBack/>
    </div>
    <div className="bc-grid">
      <BusinessCard name="Simon Zachowski" role={<>Gesamtleitung<br/>pädagogisch · fachlich</>} email="simon.zachowski@bewo-imflow.de" phone="0221 29 49 29 17"/>
      <BusinessCardBack/>
    </div>
  </>
);
window.BusinessCards = BusinessCards;
