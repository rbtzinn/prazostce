
import React, { useState } from 'react';
import { GraduationCap, ClipboardList, TrendingUp, Calendar as CalIcon, FileText } from 'lucide-react';
import Calendar from '../Calendar/Calendar';

export default function Admissao() {
  const [view, setView] = useState('calendar');
  const [tipo, setTipo] = useState('concurso');
  const [dataInput, setDataInput] = useState('');

  // Calc Logic
  let ticketWindow = '—';
  let ticketRegime = '—';
  let hasTicket = false;

  if(dataInput) {
    const d = new Date(dataInput + 'T12:00:00');
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    hasTicket = true;

    if (tipo === 'concurso' || tipo === 'provimento') {
      ticketRegime = 'Resolução TC 289/2025';
      if (month <= 8) {
        ticketWindow = `01 de setembro a 31 de outubro de ${year}`;
      } else {
        ticketWindow = `01 de janeiro a 28 de fevereiro de ${year + 1}`;
      }
    } else {
      ticketRegime = 'Regra Única';
      if (month <= 4) {
        ticketWindow = `01 a 15 de maio de ${year}`;
      } else if (month <= 8) {
        ticketWindow = `01 a 15 de setembro de ${year}`;
      } else {
        ticketWindow = `20 de janeiro a 05 de fevereiro de ${year + 1}`;
      }
    }
  }

  return (
    <div className="tab-panel active">
      <div className="wizard">
        <div className="wizard-step-label"><span className="num">1</span> Qual foi o tipo de admissão?</div>
        <div className="type-choices">
          <button className={`type-btn ${tipo === 'concurso' ? 'active' : ''}`} onClick={() => setTipo('concurso')}>
            <span className="icon"><GraduationCap strokeWidth={2.5}/></span>
            <span className="name">Concurso Público</span>
            <span className="hint">Nomeação de aprovado</span>
          </button>
          <button className={`type-btn ${tipo === 'temporaria' ? 'active' : ''}`} onClick={() => setTipo('temporaria')}>
            <span className="icon"><ClipboardList strokeWidth={2.5}/></span>
            <span className="name">Contratação Temporária</span>
            <span className="hint">Contrato por prazo determinado</span>
          </button>
          <button className={`type-btn ${tipo === 'provimento' ? 'active' : ''}`} onClick={() => setTipo('provimento')}>
            <span className="icon"><TrendingUp strokeWidth={2.5}/></span>
            <span className="name">Provimento Derivado</span>
            <span className="hint">Promoção, progressão etc.</span>
          </button>
        </div>

        <div className="wizard-step-label"><span className="num">2</span> Em que data isso aconteceu?</div>
        <div className="date-row">
          <div className="date-field">
            <label htmlFor="dataInput">Data da admissão / nomeação / contratação</label>
            <input type="date" id="dataInput" value={dataInput} onChange={e => setDataInput(e.target.value)} />
          </div>
        </div>

        <div className={`ticket-wrap ${hasTicket ? 'show' : ''}`}>
          <div className="ticket">
            <div className="ticket-main">
              <span className="ticket-eyebrow">Envie ao TCE-PE entre</span>
              <span className="ticket-window">{ticketWindow}</span>
              <span className="ticket-regime">{ticketRegime}</span>
              <span className="ticket-note">Se a data final cair em fim de semana ou feriado, o prazo passa automaticamente para o próximo dia útil.</span>
            </div>
            <div className="ticket-stub">
              <span className="big-icon">✓</span>
              <span className="stub-label">prazo<br/>calculado</span>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="section-head">
          <span className="tag">Consulta detalhada</span>
          <h2>Veja o prazo de cada tipo, por escrito</h2>
          <p>Escolha como prefere consultar: em texto, tipo por tipo, ou visualizado num calendário de dias.</p>
        </div>

        <div className="view-toggle">
          <button className={`view-toggle-btn ${view === 'list' ? 'active' : ''}`} onClick={() => setView('list')}>
            <FileText size={18} strokeWidth={2.5}/> Lista
          </button>
          <button className={`view-toggle-btn ${view === 'calendar' ? 'active' : ''}`} onClick={() => setView('calendar')}>
            <CalIcon size={18} strokeWidth={2.5}/> Calendário
          </button>
        </div>

        {view === 'list' && (
          <div className="deadline-view show">
             <div className="category">
                <button className="cat-toggle" type="button">
                  <span className="cat-toggle-left">
                    <span className="cat-icon"><GraduationCap strokeWidth={2.5}/></span>
                    <span>
                      <p className="cat-title">Concurso Público / Provimento Derivado</p>
                      <p className="cat-sub">Regra vigente da Resolução TC 289/2025</p>
                    </span>
                  </span>
                </button>
                <div className="cat-body" style={{maxHeight:'500px'}}>
                  <div className="cat-body-inner">
                    <div className="plain-rule">
                      <span className="when">Se a nomeação foi entre <b>1º de janeiro e 31 de agosto</b></span>
                      <span className="arrow">→</span>
                      <span className="then" style={{color:'var(--concurso)'}}>Envie de 01/09 a 31/10 do mesmo ano</span>
                    </div>
                    <div className="plain-rule">
                      <span className="when">Se a nomeação foi entre <b>1º de setembro e 31 de dezembro</b></span>
                      <span className="arrow">→</span>
                      <span className="then" style={{color:'var(--concurso)'}}>Envie de 01/01 a 28/02 do ano seguinte</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="category">
                <button className="cat-toggle" type="button">
                  <span className="cat-toggle-left">
                    <span className="cat-icon"><ClipboardList strokeWidth={2.5}/></span>
                    <span>
                      <p className="cat-title">Contratação Temporária</p>
                      <p className="cat-sub">Regra única</p>
                    </span>
                  </span>
                </button>
                <div className="cat-body" style={{maxHeight:'500px'}}>
                  <div className="cat-body-inner">
                    <div className="plain-rule">
                      <span className="when">Se a contratação foi entre <b>1º de janeiro e 30 de abril</b></span>
                      <span className="arrow">→</span>
                      <span className="then" style={{color:'var(--temporaria)'}}>Envie de 01 a 15 de maio</span>
                    </div>
                    <div className="plain-rule">
                      <span className="when">Se a contratação foi entre <b>1º de maio e 31 de agosto</b></span>
                      <span className="arrow">→</span>
                      <span className="then" style={{color:'var(--temporaria)'}}>Envie de 01 a 15 de setembro</span>
                    </div>
                    <div className="plain-rule">
                      <span className="when">Se a contratação foi entre <b>1º de setembro e 31 de dezembro</b></span>
                      <span className="arrow">→</span>
                      <span className="then" style={{color:'var(--temporaria)'}}>Envie de 20/01 a 05/02 do ano seguinte</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        )}

        {view === 'calendar' && (
          <div className="deadline-view show" style={{width: '100vw', marginLeft: 'calc(50% - 50vw)', padding: '30px 20px', background: '#EBF1F7', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)'}}>
             <div className="cal-legend" style={{position: 'sticky', top: '60px', zIndex: 90, boxShadow: '0 4px 12px rgba(0,0,0,0.06)'}}>
              <span className="cal-legend-item"><span className="cal-legend-dot dot-cp"></span> Concurso / Provimento</span>
              <span className="cal-legend-item"><span className="cal-legend-dot dot-temp"></span> Contratação Temporária</span>
            </div>
            <p className="cal-year-note">Calendário ilustrativo com os dias de 2026 — os mesmos intervalos se repetem todos os anos.</p>
            <Calendar year={2026} />
          </div>
        )}
      </section>

      <section>
        <div className="section-head">
          <span className="tag">Não esqueça</span>
          <h2>Regras que valem para todos os tipos</h2>
        </div>
        <div className="warnings">
          <div className="warn-card">
            <span className="w-icon">📧</span>
            <h3>Envie a seleção antes da admissão</h3>
            <p>Os dados do processo seletivo (edital, homologação) vão para o TCE-PE <b>antes</b> das remessas de admissão.</p>
          </div>
          <div className="warn-card">
            <span className="w-icon">📄</span>
            <h3>Ninguém foi admitido no período?</h3>
            <p>Mesmo assim, registre a certidão negativa no sistema dentro do mesmo prazo.</p>
          </div>
          <div className="warn-card">
            <span className="w-icon">📅</span>
            <h3>Prazo caiu em fim de semana ou feriado?</h3>
            <p>A data final é prorrogada automaticamente para o primeiro dia útil seguinte.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
