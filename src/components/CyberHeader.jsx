import React from 'react';
import './components.css';

const CyberHeader = () => {
  return (
    <header className="cyber-header">
      <div className="glitch-container">
        <h1 className="glitch" data-text="TADASHI SUTO">TADASHI SUTO</h1>
      </div>
      
      <div className="status-display">
        <div className="status-item">
          <span className="status-led red"></span>
          <span className="neon-text">LIVE</span>
        </div>
        <div className="status-item">
          <span className="status-led green"></span>
          <span className="neon-text">LVL 42</span>
        </div>
        <div className="status-item">
          <span className="status-led blue"></span>
          <span className="neon-text">NETRUNNER</span>
        </div>
      </div>

      <div className="title-container">
        <h2 className="cyber-title">BUSINESS PARTNER</h2>
        <h2 className="cyber-title">PRODUCT OWNER</h2>
      </div>
    </header>
  );
};

export default CyberHeader;
