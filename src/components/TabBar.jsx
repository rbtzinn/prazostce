
import React from 'react';
import { Users, Send, ClipboardList, Landmark } from 'lucide-react';

export default function TabBar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'admissao', label: 'Admissão', icon: <Users size={18} strokeWidth={2.5}/> },
    { id: 'remessa', label: 'Remessa TCE', icon: <Send size={18} strokeWidth={2.5}/> },
    { id: 'pc', label: 'Prestação de Contas', icon: <ClipboardList size={18} strokeWidth={2.5}/> },
    { id: 'cadastro', label: 'Cadastro UJ', icon: <Landmark size={18} strokeWidth={2.5}/> }
  ];

  return (
    <nav className="tab-bar">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.id)}
          type="button"
        >
          <i className="tab-icon">{tab.icon}</i> {tab.label}
        </button>
      ))}
    </nav>
  );
}
