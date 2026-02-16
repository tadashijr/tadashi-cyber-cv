import React from 'react';
import '../styles/components.css';

const TerminalWindow = ({ lines }) => {
  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <span className="terminal-dot red"></span>
        <span className="terminal-dot yellow"></span>
        <span className="terminal-dot green"></span>
        <span className="terminal-title">root@tadashi:~#</span>
      </div>
      <div className="terminal-body">
        {lines.map((line, index) => (
          <p key={index} className="terminal-line" 
             style={{animationDelay: `${index * 0.1}s`}}>
            <span className="prompt">$></span> {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TerminalWindow;
