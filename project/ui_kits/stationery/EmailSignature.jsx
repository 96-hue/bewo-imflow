// EmailSignature.jsx — table-based, mail-client safe
const EmailSignature = () => (
  <div className="sig-frame">
    <div className="label">E-Mail-Signatur (HTML, schlicht)</div>
    <div className="sig">
      <table cellPadding="0" cellSpacing="0">
        <tbody>
          <tr>
            <td style={{paddingRight: 18, borderRight: '2px solid #1E3F3D'}}>
              <img src="../../assets/logomark.svg" width="48" height="48" alt="" style={{display:'block'}}/>
            </td>
            <td style={{paddingLeft: 18}}>
              <div className="name">Simon Zachowski</div>
              <div className="role">Gesamtleitung pädagogisch · BeWo imflow</div>
              <div className="div"></div>
              <div>
                Adalbertstraße 11–15 · 51103 Köln<br/>
                Tel. <a href="tel:02212949 2917">0221 29 49 29 17</a> · <a href="mailto:simon.zachowski@bewo-imflow.de">simon.zachowski@bewo-imflow.de</a><br/>
                <a href="https://bewo-imflow.de">bewo-imflow.de</a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
window.EmailSignature = EmailSignature;
