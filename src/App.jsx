
import React, { useState } from 'react';
import Header from './components/Header';
import TabBar from './components/TabBar';
import Admissao from './components/Tabs/Admissao';
import Remessa from './components/Tabs/Remessa';
import PrestacaoContas from './components/Tabs/PrestacaoContas';
import CadastroUJ from './components/Tabs/CadastroUJ';
import './index.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('admissao');

  return (
    <>
      <Header />
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="wrap">
        {activeTab === 'admissao' && <Admissao />}
        {activeTab === 'remessa' && <Remessa />}
        {activeTab === 'pc' && <PrestacaoContas />}
        {activeTab === 'cadastro' && <CadastroUJ />}
      </div>
      <footer>
        <p>Mural de Obrigações — Desenvolvido para SUAPE</p>
      </footer>
    </>
  );
}
