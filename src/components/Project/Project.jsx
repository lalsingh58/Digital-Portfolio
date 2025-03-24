import React from "react";
import "./Project.css";

const projects = [
  {
    id: 1,
    title: "Fake News Detector",
    img: "/images/fakenews.jpeg",
    description:
      "Developed a fake news detection website and browser extension using AI-powered NLP models (BERT/LSTM) and GNN for accuracy. Integrated real-time fact-checking and a user-friendly interface for seamless verification.",
  },
  {
    id: 2,
    title: "Event Management Platform",
    img: "/images/eventmanage.jpg",
    description:
      "Developed the frontend of an event management platform using React, enabling event organizers to list, manage, and promote local events. Designed an intuitive UI with interactive elements for seamless user experience.",
  },
  {
    id: 3,
    title: "Library Management System",
    img: "/images/librarymanage.jpg",
    description:
      "Designed a Java-based library management system to streamline book borrowing and return processes, with a user-friendly interface and database integration.",
  },

  {
    id: 4,
    title: "Catering Website",
    img: "/images/catering.jpg",
    description:
      "Developed the frontend of a catering website using React, creating a visually appealing and user-friendly interface for showcasing menus, services, and booking options",
  },
];

function Project() {
  return (
    <section>
      <h1 className="project-title">Projects</h1>
      <div className="project-container">
        {projects.map((project) => (
          <div key={project.id} className="project-item projects">
            <h3>
              {project.id}. {project.title}
            </h3>
            <img
              className="project-img"
              src={project.img}
              alt={project.title}
            />
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
