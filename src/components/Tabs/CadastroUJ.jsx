
import React from 'react';
import { Landmark } from 'lucide-react';

export default function CadastroUJ() {
  return (
    <div className="tab-panel active">
      <div className="info-hero-card" data-watermark="CAD">
        <div className="info-icon" style={{background:'var(--cadastro-bg)', color:'var(--cadastro)'}}><Landmark strokeWidth={2.5}/></div>
        <h2>Cadastro UJ</h2>
        <p className="info-desc">Atualização cadastral no sistema.</p>
      </div>
    </div>
  );
}
