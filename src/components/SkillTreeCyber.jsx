import React, { useState } from 'react';
import { skills } from '../data/skills';
import '../styles/components.css';

const SkillTreeCyber = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <div className="cyber-card skill-tree">
      <h3>⚡ NEURAL IMPLANTS ⚡</h3>
      <p className="card-subtitle">Habilidades cibernéticas instaladas</p>
      
      {skills.map(skill => (
        <div 
          key={skill.name} 
          className={`skill-node ${skill.type}`}
          onMouseEnter={() => setSelectedSkill(skill)}
          onMouseLeave={() => setSelectedSkill(null)}
        >
          <span className="skill-name">{skill.name}</span>
          <div className="skill-bar-cyber">
            <div className="skill-fill" style={{width: `${skill.level}%`}}>
              <span className="skill-value">{skill.level}%</span>
            </div>
          </div>
          {selectedSkill === skill && (
            <div className="skill-tooltip">
              {skill.description}
            </div>
          )}
        </div>
      ))}
      
      <div className="skill-stats">
        <div className="stat-legend">
          <span className="legend-color legendary"></span> Lendário
          <span className="legend-color epic"></span> Épico
          <span className="legend-color rare"></span> Raro
        </div>
      </div>
    </div>
  );
};

export default SkillTreeCyber;
