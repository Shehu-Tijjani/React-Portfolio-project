import React from "react";
import styles from "./Projects.module.css";

function Projects({ ref }) {
  const projectList = [
    {
      id: 1,
      title: "Project 1",
      description: "A description of project 1",
      link: "https://example.com/ecommerce"
    },
    {
      id: 2,
      title: "Project 2",
      description: "A description of project 2.",
      link: "#"
    },
    {
      id: 3,
      title: "Project 3",
      description: "A description of project 3.",
      link: "#"
    },
    {
      id: 4,
      title: "Project 3",
      description: "A description of project 3.",
      link: "#"
    },
    {
      id: 5,
      title: "Project 3",
      description: "A description of project 3.",
      link: "#"
    },
    {
      id: 6,
      title: "Project 3",
      description: "A description of project 3.",
      link: "#"
    },
    {
      id: 7,
      title: "Project 3",
      description: "A description of project 3.",
      link: "#"
    },
    {
      id: 8,
      title: "Project 3",
      description: "A description of project 3.",
      link: "#"
    }
  ];

  return (
    <div ref={ref} className={styles.projects}>
      <section>
        <h2>My Projects</h2>

        <div className={styles.projectGrid}>
          {projectList.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className={styles.btn}>
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
