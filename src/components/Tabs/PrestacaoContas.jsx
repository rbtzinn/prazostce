import React, { useState } from 'react';
import { ClipboardList, Files, BarChart2, Building, FileSignature, Handshake, ShieldAlert, Monitor } from 'lucide-react';

export default function PrestacaoContas() {
  const [openGroups, setOpenGroups] = useState({});

  const toggleGroup = (id) => {
    setOpenGroups(prev => ({...prev, [id]: !prev[id]}));
  };

  return (
    <div className="tab-panel active">
      <div className="info-hero-card" data-watermark="PC">
        <div className="info-icon" style={{background:'var(--pc-bg)', color:'var(--pc)'}}>
          <ClipboardList strokeWidth={2.5} size={28}/>
        </div>
        <h2>Prestação de Contas Anual</h2>
        <p className="info-desc">Entrega anual de todos os documentos exigidos pela Resolução TC nº 194/2023 para Empresas Públicas e Sociedades de Economia Mista. São <b>42 itens</b> organizados abaixo por categoria.</p>

        <div className="info-detail-row">
          <div className="info-chip">
            <span><span className="chip-label">Responsável</span><br/><span className="chip-value">Todos os setores</span></span>
          </div>
          <div className="info-chip">
            <span><span className="chip-label">Frequência</span><br/><span className="chip-value">Anual</span></span>
          </div>
        </div>

        <div className="prazo-badge" style={{background:'var(--pc-bg)', color:'var(--pc)'}}>
          <span className="prazo-label">Prazo</span>
          <span className="prazo-value">15 de maio</span>
        </div>
      </div>

      <section>
        <div className="section-head">
          <span className="tag">42 itens obrigatórios</span>
          <h2>Documentos da Prestação de Contas</h2>
          <p>Clique em cada grupo para ver a lista completa de documentos que precisam ser entregues.</p>
        </div>

        {/* Grupo 1 */}
        <div className={`pc-group ${openGroups[1] ? 'open' : ''}`}>
          <button className="pc-group-toggle" type="button" onClick={() => toggleGroup(1)}>
            <span className="pc-group-left">
              <span className="pc-group-icon"><Files strokeWidth={2.5} size={18}/></span>
              <span>
                <p className="pc-group-title">Documentos Institucionais e de Responsabilidade</p>
                <p className="pc-group-count">5 itens</p>
              </span>
            </span>
            <span className="chevron">⌄</span>
          </button>
          <div className="pc-group-body" style={{ maxHeight: openGroups[1] ? '800px' : '0' }}>
            <div className="pc-group-body-inner">
              <div className="pc-item"><span className="pc-item-num">1</span><span className="pc-item-text">Ofício de encaminhamento ao Tribunal de Contas</span></div>
              <div className="pc-item"><span className="pc-item-num">2</span><span className="pc-item-text">Dados dos ordenadores de despesa, do titular do órgão ou entidade, e dos demais responsáveis pela assinatura de documentos da prestação de contas (nome, CPF, estado civil, endereço, cargo/função, ato de designação etc.)</span></div>
              <div className="pc-item"><span className="pc-item-num">41</span><span className="pc-item-text">Pronunciamento do responsável pelo controle interno sobre a completude da documentação encaminhada na Prestação de Contas</span></div>
              <div className="pc-item"><span className="pc-item-num">42</span><span className="pc-item-text">Termo de Responsabilidade, declarando que a documentação encaminhada corresponde ao determinado na Resolução</span></div>
              <div className="pc-item"><span className="pc-item-num">3</span><span className="pc-item-text">Relatório Anual das Atividades de Controle Interno (RACI), previsto no Decreto Estadual nº 47.087/2019</span></div>
            </div>
          </div>
        </div>

        {/* Grupo 2 */}
        <div className={`pc-group ${openGroups[2] ? 'open' : ''}`}>
          <button className="pc-group-toggle" type="button" onClick={() => toggleGroup(2)}>
            <span className="pc-group-left">
              <span className="pc-group-icon"><BarChart2 strokeWidth={2.5} size={18}/></span>
              <span>
                <p className="pc-group-title">Demonstrações Contábeis e Auditoria</p>
                <p className="pc-group-count">9 itens</p>
              </span>
            </span>
            <span className="chevron">⌄</span>
          </button>
          <div className="pc-group-body" style={{ maxHeight: openGroups[2] ? '1200px' : '0' }}>
            <div className="pc-group-body-inner">
              <div className="pc-item"><span className="pc-item-num">11</span><span className="pc-item-text">Balanço Patrimonial (Lei nº 6.404/1976)</span></div>
              <div className="pc-item"><span className="pc-item-num">12</span><span className="pc-item-text">Demonstração do Resultado do Exercício — DRE (Lei nº 6.404/1976)</span></div>
              <div className="pc-item"><span className="pc-item-num">13</span><span className="pc-item-text">Demonstração do Resultado Abrangente, quando couber (CPC nº 26 / CPC-PME)</span></div>
              <div className="pc-item"><span className="pc-item-num">14</span><span className="pc-item-text">Demonstração das Mutações do Patrimônio Líquido ou Demonstração dos Lucros/Prejuízos Acumulados (Lei nº 6.404/1976, CPC nº 26)</span></div>
              <div className="pc-item"><span className="pc-item-num">15</span><span className="pc-item-text">Declaração explícita de cumprimento das IFRS (exercício de adoção inicial, data de transição, alterações nas práticas contábeis)</span></div>
              <div className="pc-item"><span className="pc-item-num">16</span><span className="pc-item-text">Demonstração do Fluxo de Caixa — DFC (Lei nº 11.638/2007, CPC nº 03)</span></div>
              <div className="pc-item"><span className="pc-item-num">17</span><span className="pc-item-text">Notas explicativas das Demonstrações Contábeis, incluindo dados operacionais e financeiros da Estatal (Lei nº 6.404/1976, art. 8º, VI da Lei nº 13.303/2016)</span></div>
              <div className="pc-item"><span className="pc-item-num">18</span><span className="pc-item-text">Parecer dos Auditores Independentes</span></div>
              <div className="pc-item"><span className="pc-item-num">4</span><span className="pc-item-text">Pareceres dos Conselhos Fiscal e de Administração sobre as demonstrações contábeis e respectivas atas registradas na JUCEPE</span></div>
            </div>
          </div>
        </div>

        {/* Grupo 3 */}
        <div className={`pc-group ${openGroups[3] ? 'open' : ''}`}>
          <button className="pc-group-toggle" type="button" onClick={() => toggleGroup(3)}>
            <span className="pc-group-left">
              <span className="pc-group-icon"><Building strokeWidth={2.5} size={18}/></span>
              <span>
                <p className="pc-group-title">Controle Patrimonial e Financeiro</p>
                <p className="pc-group-count">6 itens</p>
              </span>
            </span>
            <span className="chevron">⌄</span>
          </button>
          <div className="pc-group-body" style={{ maxHeight: openGroups[3] ? '800px' : '0' }}>
            <div className="pc-group-body-inner">
              <div className="pc-item"><span className="pc-item-num">5</span><span className="pc-item-text">Relação de todas as contas bancárias, registradas ou não no e-Fisco, ainda que não movimentadas (Anexo XXVI)</span></div>
              <div className="pc-item"><span className="pc-item-num">6</span><span className="pc-item-text">Conciliações bancárias de todas as contas existentes, referentes ao último mês do exercício (Anexo IX)</span></div>
              <div className="pc-item"><span className="pc-item-num">7</span><span className="pc-item-text">Extratos bancários de todas as contas, referentes a todos os meses do exercício</span></div>
              <div className="pc-item"><span className="pc-item-num">8</span><span className="pc-item-text">Último inventário de bens móveis realizado (data de conclusão, membros da comissão)</span></div>
              <div className="pc-item"><span className="pc-item-num">9</span><span className="pc-item-text">Mapa Demonstrativo dos Imóveis (Anexo X)</span></div>
              <div className="pc-item"><span className="pc-item-num">10</span><span className="pc-item-text">Resumo dos Registros dos Imóveis (Anexo XI)</span></div>
            </div>
          </div>
        </div>

        {/* Grupo 4 */}
        <div className={`pc-group ${openGroups[4] ? 'open' : ''}`}>
          <button className="pc-group-toggle" type="button" onClick={() => toggleGroup(4)}>
            <span className="pc-group-left">
              <span className="pc-group-icon"><FileSignature strokeWidth={2.5} size={18}/></span>
              <span>
                <p className="pc-group-title">Licitações, Contratos e Obras</p>
                <p className="pc-group-count">6 itens</p>
              </span>
            </span>
            <span className="chevron">⌄</span>
          </button>
          <div className="pc-group-body" style={{ maxHeight: openGroups[4] ? '800px' : '0' }}>
            <div className="pc-group-body-inner">
              <div className="pc-item"><span className="pc-item-num">19</span><span className="pc-item-text">Relação das Comissões de Licitações, Pregoeiro e Equipe de Apoio (nome, portarias, CPF, endereço)</span></div>
              <div className="pc-item"><span className="pc-item-num">20</span><span className="pc-item-text">Mapa demonstrativo consolidado de processos licitatórios, dispensas e inexigibilidades (SAGRES — LICON)</span></div>
              <div className="pc-item"><span className="pc-item-num">21</span><span className="pc-item-text">Mapa demonstrativo consolidado de contratos, incluídos contratos de gestão (SAGRES — LICON)</span></div>
              <div className="pc-item"><span className="pc-item-num">22</span><span className="pc-item-text">Mapa demonstrativo de contratos relacionados ao enfrentamento da emergência em saúde pública — coronavírus (Anexo XXVII)</span></div>
              <div className="pc-item"><span className="pc-item-num">35</span><span className="pc-item-text">Mapa demonstrativo consolidado das obras e serviços de engenharia (Resolução TC nº 08/2014)</span></div>
              <div className="pc-item"><span className="pc-item-num">36</span><span className="pc-item-text">Mapa demonstrativo de concessões e PPPs realizadas no exercício (Anexo XXIII)</span></div>
            </div>
          </div>
        </div>

        {/* Grupo 5 */}
        <div className={`pc-group ${openGroups[5] ? 'open' : ''}`}>
          <button className="pc-group-toggle" type="button" onClick={() => toggleGroup(5)}>
            <span className="pc-group-left">
              <span className="pc-group-icon"><Handshake strokeWidth={2.5} size={18}/></span>
              <span>
                <p className="pc-group-title">Transferências, Convênios e Parcerias</p>
                <p className="pc-group-count">8 itens</p>
              </span>
            </span>
            <span className="chevron">⌄</span>
          </button>
          <div className="pc-group-body" style={{ maxHeight: openGroups[5] ? '1200px' : '0' }}>
            <div className="pc-group-body-inner">
              <div className="pc-item"><span className="pc-item-num">24</span><span className="pc-item-text">Relação das transferências de recursos efetuadas e recebidas, mediante convênios em vigência (Anexo XII)</span></div>
              <div className="pc-item"><span className="pc-item-num">25</span><span className="pc-item-text">Relação das transferências mediante termo de parceria em vigência (Anexo XIII)</span></div>
              <div className="pc-item"><span className="pc-item-num">26</span><span className="pc-item-text">Relação das transferências mediante contrato de gestão para Organizações Sociais em vigência (Anexo XIV)</span></div>
              <div className="pc-item"><span className="pc-item-num">27</span><span className="pc-item-text">Relação das transferências por meio de termos de colaboração ou de fomento (Anexo XV)</span></div>
              <div className="pc-item"><span className="pc-item-num">28</span><span className="pc-item-text">Relação das transferências sob a forma de subvenções sociais, auxílios e contribuições em vigência (Anexo XVI)</span></div>
              <div className="pc-item"><span className="pc-item-num">29</span><span className="pc-item-text">Resumo das prestações de contas de convênios/acordos/ajustes autuadas, aprovadas, rejeitadas ou em análise (Anexo XVII)</span></div>
              <div className="pc-item"><span className="pc-item-num">30</span><span className="pc-item-text">Relação de beneficiários não governamentais com pendências na prestação de contas de recursos repassados (Anexo XVIII)</span></div>
              <div className="pc-item"><span className="pc-item-num">31</span><span className="pc-item-text">Tomadas de Contas Especiais instauradas no exercício (Anexo XIX)</span></div>
            </div>
          </div>
        </div>

        {/* Grupo 6 */}
        <div className={`pc-group ${openGroups[6] ? 'open' : ''}`}>
          <button className="pc-group-toggle" type="button" onClick={() => toggleGroup(6)}>
            <span className="pc-group-left">
              <span className="pc-group-icon"><ShieldAlert strokeWidth={2.5} size={18}/></span>
              <span>
                <p className="pc-group-title">Judicial, Contencioso e RH</p>
                <p className="pc-group-count">6 itens</p>
              </span>
            </span>
            <span className="chevron">⌄</span>
          </button>
          <div className="pc-group-body" style={{ maxHeight: openGroups[6] ? '800px' : '0' }}>
            <div className="pc-group-body-inner">
              <div className="pc-item"><span className="pc-item-num">37</span><span className="pc-item-text">Mapa demonstrativo das decisões judiciais cumpridas no exercício (Anexo XXIV)</span></div>
              <div className="pc-item"><span className="pc-item-num">38</span><span className="pc-item-text">Relação das decisões judiciais não cumpridas (Anexo XXV)</span></div>
              <div className="pc-item"><span className="pc-item-num">39</span><span className="pc-item-text">Posição atuarial e financeira das contingências com ações trabalhistas, cíveis, fiscais e previdenciárias</span></div>
              <div className="pc-item"><span className="pc-item-num">40</span><span className="pc-item-text">Acordos judiciais e extrajudiciais celebrados pela gestão no exercício (Resolução TC nº 09/2012)</span></div>
              <div className="pc-item"><span className="pc-item-num">32</span><span className="pc-item-text">Mapa de Admissões, contratações e desligamentos ocorridos no exercício (Anexo XX)</span></div>
              <div className="pc-item"><span className="pc-item-num">34</span><span className="pc-item-text">Cópia do Relatório Resumido de Execução Orçamentária — RREO relativo a despesas com pessoal (LRF)</span></div>
            </div>
          </div>
        </div>

        {/* Grupo 7 */}
        <div className={`pc-group ${openGroups[7] ? 'open' : ''}`}>
          <button className="pc-group-toggle" type="button" onClick={() => toggleGroup(7)}>
            <span className="pc-group-left">
              <span className="pc-group-icon"><Monitor strokeWidth={2.5} size={18}/></span>
              <span>
                <p className="pc-group-title">Sistemas e Controles Institucionais</p>
                <p className="pc-group-count">2 itens</p>
              </span>
            </span>
            <span className="chevron">⌄</span>
          </button>
          <div className="pc-group-body" style={{ maxHeight: openGroups[7] ? '400px' : '0' }}>
            <div className="pc-group-body-inner">
              <div className="pc-item"><span className="pc-item-num">23</span><span className="pc-item-text">Avaliação dos Controles Internos relacionados a Contratações Públicas, com base em questionário TCE-PE</span></div>
              <div className="pc-item"><span className="pc-item-num">33</span><span className="pc-item-text">Certificado de Regularidade Previdenciária — CRP (válido em 31/12)</span></div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
