
import React from 'react';
import { ClipboardList } from 'lucide-react';

export default function PrestacaoContas() {
  return (
    <div className="tab-panel active">
      <div className="info-hero-card" data-watermark="PC">
        <div className="info-icon" style={{background:'var(--pc-bg)', color:'var(--pc)'}}><ClipboardList strokeWidth={2.5}/></div>
        <h2>Prestação de Contas Anual</h2>
        <p className="info-desc">Dossiê anual com demonstrações contábeis e relatórios de gestão.</p>
      </div>
    </div>
  );
}
