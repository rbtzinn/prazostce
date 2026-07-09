
import React, { useRef, useState, useEffect } from 'react';

const MONTH_NAMES = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
const WEEK_LETTERS = ['D','S','T','Q','Q','S','S'];

const WINDOWS = [
  { start:[9,1],  end:[10,31], group:'cp' },
  { start:[1,1],  end:[2,28],  group:'cp' },
  { start:[5,1],  end:[5,15],  group:'temp' },
  { start:[9,1],  end:[9,15],  group:'temp' },
  { start:[1,20], end:[2,5],   group:'temp' },
];

function encode(month, day){ return month*100 + day; }

function inWindow(month, day, w){
  const d = encode(month, day);
  return d >= encode(w.start[0], w.start[1]) && d <= encode(w.end[0], w.end[1]);
}

export default function Calendar({ year }) {
  return (
    <div className="calendar-grid" style={{maxWidth: '1200px', margin: '0 auto', display: 'grid', gap: '16px'}}>
      {Array.from({length: 12}).map((_, m) => {
        const monthNum = m + 1;
        const daysInMonth = new Date(year, monthNum, 0).getDate();
        const startWeekday = new Date(year, m, 1).getDay();

        const emptyCells = Array.from({length: startWeekday}).map((_, i) => (
          <div key={`empty-${i}`} className="cal-cell empty"></div>
        ));

        const dayCells = Array.from({length: daysInMonth}).map((_, i) => {
          const day = i + 1;
          const hasCp = WINDOWS.some(w => w.group === 'cp' && inWindow(monthNum, day, w));
          const hasTemp = WINDOWS.some(w => w.group === 'temp' && inWindow(monthNum, day, w));

          let tooltipLines = [];
          if(hasCp) {
            tooltipLines.push(monthNum <= 10 
              ? 'Envie se a nomeação foi entre 1º de janeiro e 31 de agosto<br>(Concurso Público)' 
              : 'Envie se a nomeação foi entre 1º de setembro e 31 de dezembro<br>(Concurso Público)'
            );
          }
          if(hasTemp) {
            if(monthNum === 5) tooltipLines.push('Envie se a contratação foi entre 1º de janeiro e 30 de abril<br>(Contratação Temporária)');
            else if(monthNum === 9) tooltipLines.push('Envie se a contratação foi entre 1º de maio e 31 de agosto<br>(Contratação Temporária)');
            else tooltipLines.push('Envie se a contratação foi entre 1º de setembro e 31 de dezembro<br>(Contratação Temporária)');
          }

          return (
            <Cell key={day} day={day} hasCp={hasCp} hasTemp={hasTemp} tooltipLines={tooltipLines} />
          );
        });

        return (
          <div key={m} className="mini-month">
            <div className="mini-month-title">{MONTH_NAMES[m]}</div>
            <div className="mini-month-weekdays">{WEEK_LETTERS.map((l, idx) => <span key={idx}>{l}</span>)}</div>
            <div className="mini-month-grid">
              {emptyCells}
              {dayCells}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Cell({ day, hasCp, hasTemp, tooltipLines }) {
  const [hover, setHover] = useState(false);
  const cellRef = useRef(null);
  const tooltipRef = useRef(null);
  
  // Dynamic Tooltip bounds logic
  useEffect(() => {
    if (hover && tooltipRef.current && cellRef.current) {
      const tt = tooltipRef.current;
      const rect = tt.getBoundingClientRect();
      const margin = 10;
      
      // Reset
      tt.style.transform = 'translateX(-50%) translateY(-2px)';
      tt.style.left = '50%';
      tt.style.marginLeft = '0px';

      const newRect = tt.getBoundingClientRect();
      
      if (newRect.left < margin) {
        tt.style.left = '0';
        tt.style.transform = 'translateY(-2px)';
      } else if (newRect.right > window.innerWidth - margin) {
        tt.style.left = 'auto';
        tt.style.right = '0';
        tt.style.transform = 'translateY(-2px)';
      }
    }
  }, [hover]);

  let cls = 'cal-cell';
  if(hasCp) cls += ' has-cp';
  if(hasTemp) cls += ' has-temp';

  return (
    <div 
      className={cls} 
      ref={cellRef}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span className="day-num">{day}</span>
      <span className="dots">
        {hasCp && <span className="dot dot-cp"></span>}
        {hasTemp && <span className="dot dot-temp"></span>}
      </span>
      {hover && tooltipLines.length > 0 && (
        <div className="tooltip" ref={tooltipRef} dangerouslySetInnerHTML={{__html: tooltipLines.join('<hr style="margin:4px 0;border:none;border-top:1px solid rgba(255,255,255,0.2);">')}}>
        </div>
      )}
    </div>
  );
}
