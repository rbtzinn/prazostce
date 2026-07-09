
import React from 'react';
import { Send, Info } from 'lucide-react';

export default function Remessa() {
  return (
    <div className="tab-panel active">
      <div className="info-hero-card" data-watermark="TCE">
        <div className="info-icon" style={{background:'var(--remessa-bg)', color:'var(--remessa)'}}><Send strokeWidth={2.5}/></div>
        <h2>Remessa TCE-PE</h2>
        <p className="info-desc">Envio mensal da Remessa ao e-TCEPE.</p>
        <div className="info-detail-row">
          <div className="info-chip"><span><span className="chip-label">Setor</span><br/><span className="chip-value">GCC</span></span></div>
          <div className="info-chip"><span><span className="chip-label">Frequência</span><br/><span className="chip-value">Mensal</span></span></div>
        </div>
        <div className="prazo-badge" style={{background:'var(--remessa-bg)', color:'var(--remessa)'}}>
          <span className="prazo-label">Prazo</span>
          <span className="prazo-value">Dia 28 do mês seguinte</span>
        </div>
      </div>
    </div>
  );
}
