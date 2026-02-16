import React, { useState, useEffect } from 'react';
import './App.css';
import CyberHeader from './components/CyberHeader';
import SkillTreeCyber from './components/SkillTreeCyber';
import MissionsCyber from './components/MissionsCyber';
import AchievementsCyber from './components/AchievementsCyber';
import InventoryCyber from './components/InventoryCyber';
import TerminalWindow from './components/TerminalWindow';
import ContactCyber from './components/ContactCyber';

function App() {
  const [hacked, setHacked] = useState(false);
  const [terminalLines, setTerminalLines] = useState([
    '> INICIALIZANDO SISTEMA...',
    '> CARREGANDO PERFIL DO NETRUNNER...',
    '> CONEXÃO ESTABELECIDA COM MAINFRAME CORPORATIVO',
    '> BEM-VINDO, TADASHI SUTO - NÍVEL 42'
  ]);

  // Efeito de digitação no terminal
  useEffect(() => {
    const interval = setInterval(() => {
      setTerminalLines(prev => [
        ...prev.slice(-5),
        `> ${new Date().toLocaleTimeString()} - SINAL ESTÁVEL | SYNC: ${Math.floor(90 + Math.random() * 10)}%`
      ]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cyberpunk-wrapper">
      {/* Efeitos de tela */}
      <div className="scanline"></div>
      <div className="crt-effect"></div>
      <div className="matrix-rain"></div>
      
      <main className="cyber-main">
        <CyberHeader />
        
        <TerminalWindow lines={terminalLines} />
        
        <div className="cyber-grid">
          <SkillTreeCyber />
          <MissionsCyber />
          <AchievementsCyber />
          <InventoryCyber />
        </div>

        {!hacked ? (
          <div className="hack-prompt">
            <p className="glitch-text">> ACESSO RESTRITO - NÍVEL DE SEGURANÇA: ALTO</p>
            <button className="cyber-button" onClick={() => setHacked(true)}>
              [ HACK THE SYSTEM ]
            </button>
          </div>
        ) : (
          <div className="secret-content">
            <ContactCyber />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
