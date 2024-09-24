import React from 'react';

const skillsData = {
  languages: ['JavaScript', 'Java', 'Python', 'HTML', 'CSS', 'C', 'C++'],
  frameworks: ['React', 'Node.js', 'Express', 'Vite', 'Vaadin'],
  tools: ['Git', 'GitHub', 'VSCode', 'Trello', "Kanban", 'Figma'],
  devOps: ['Azure DevOps', 'CI/CD Pipelines', 'Linux', 'Docker', 'Kubernetes', 'OpenShift', 'RestAPI'],
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-list">
        <div className="skill-category">
          <h3>Languages</h3>
          <ul>
            {skillsData.languages.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="skill-category">
          <h3>Frameworks</h3>
          <ul>
            {skillsData.frameworks.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="skill-category">
          <h3>Tools</h3>
          <ul>
            {skillsData.tools.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="skill-category">
          <h3>DevOps & Infrastructure</h3>
          <ul>
            {skillsData.devOps.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
