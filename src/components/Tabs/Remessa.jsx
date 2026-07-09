import React from 'react';
import { Send, Info } from 'lucide-react';

export default function Remessa() {
  return (
    <div className="tab-panel active">
      <div className="info-hero-card" data-watermark="TCE">
        <div className="info-icon" style={{background:'var(--remessa-bg)', color:'var(--remessa)'}}>
          <Send strokeWidth={2.5} size={28}/>
        </div>
        <h2>Remessa TCE-PE</h2>
        <p className="info-desc">Envio mensal da Remessa ao e-TCEPE. Inclui dados financeiros, contábeis e de gestão exigidos mensalmente pelo Tribunal de Contas.</p>

        <div className="info-detail-row">
          <div className="info-chip">
            <span><span className="chip-label">Setor</span><br/><span className="chip-value">GCC</span></span>
          </div>
          <div className="info-chip">
            <span><span className="chip-label">Frequência</span><br/><span className="chip-value">Mensal</span></span>
          </div>
        </div>

        <div className="prazo-badge" style={{background:'var(--remessa-bg)', color:'var(--remessa)'}}>
          <span className="prazo-label">Prazo</span>
          <span className="prazo-value">Todo mês</span>
        </div>
      </div>

      <section>
        <div className="sei-notice">
          <span className="sei-badge"><span className="dot"></span> Acompanhamento via SEI</span>
          <h2>Você será avisado antes de cada prazo</h2>
          <p className="lead">A Assessoria de Compliance acompanha este envio mensal e vai <b>alertar formalmente via SEI</b> quando o prazo estiver se aproximando.</p>
          <div className="sei-process">
            <span className="label">Processo SEI</span>
            <span className="num">nº 00000.000000/0000-00</span>
          </div>
          <div className="sei-footer-note">
            <span><Info strokeWidth={2.5} size={18}/></span>
            <span>A Remessa ao e-TCEPE deve ser feita <b>mensalmente</b> pelo setor GCC. A Compliance acompanha e alerta, mas a responsabilidade do envio é do setor.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
