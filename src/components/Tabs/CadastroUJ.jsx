import React from 'react';
import { Landmark, Info } from 'lucide-react';

export default function CadastroUJ() {
  return (
    <div className="tab-panel active">
      <div className="info-hero-card" data-watermark="CAD">
        <div className="info-icon" style={{background:'var(--cadastro-bg)', color:'var(--cadastro)'}}>
          <Landmark strokeWidth={2.5} size={28}/>
        </div>
        <h2>Cadastro UJ</h2>
        <p className="info-desc">Atualização cadastral da Unidade Jurisdicionada e seus responsáveis no sistema do TCE-PE.</p>

        <div className="info-detail-row">
          <div className="info-chip">
            <span><span className="chip-label">Setor</span><br/><span className="chip-value">Presidência / Diretorias</span></span>
          </div>
          <div className="info-chip">
            <span><span className="chip-label">Frequência</span><br/><span className="chip-value">Eventual</span></span>
          </div>
        </div>

        <div className="prazo-badge" style={{background:'var(--cadastro-bg)', color:'var(--cadastro)'}}>
          <span className="prazo-label">Prazo</span>
          <span className="prazo-value">Em até 15 dias após alteração</span>
        </div>
      </div>

      <section>
        <div className="sei-notice">
          <span className="sei-badge"><span className="dot"></span> Acompanhamento via SEI</span>
          <h2>Aviso de alteração de gestores</h2>
          <p className="lead">Sempre que houver alteração de Diretores, Presidente ou responsáveis legais da empresa, a Compliance precisa ser notificada.</p>
          <div className="sei-process">
            <span className="label">Processo SEI</span>
            <span className="num">nº 00000.000000/0000-00</span>
          </div>
          <div className="sei-footer-note">
            <span><Info strokeWidth={2.5} size={18}/></span>
            <span>O prazo para atualizar o cadastro da UJ (Unidade Jurisdicionada) no TCE é de <b>15 dias</b> após o ato de nomeação/exoneração.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
