import React from 'react';

const projectsData = [
  {
    title: 'Yelp Camp project',
    description: 'A big project using EJS, MongoDB and Node.js. Project was made as a part of "The Web Developer Bootcamp 2024" -course',
    github: 'https://github.com/AAlavilo/Campgrounds',
  },
  {
    title: 'Project 2',
    description: 'A brief description of Project 2.',
    github: 'https://github.com/yourname/project2',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-list">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;