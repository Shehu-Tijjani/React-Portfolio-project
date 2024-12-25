import React from "react";
import styles from "./About.module.css";

function About({ ref, homeref }) {
  return (
    <div ref={ref} homeref={homeref} className={styles.about}>
      <section className={styles.bio}>
        <h2>About Me</h2>
        <p>
          Hi, I'm <strong>Akinyemi Shehu Tijjani</strong>, a web developer with
          a passion for building clean, responsive, and scalable web
          applications. I specialize in HTML, CSS, JavaScript, React, and modern
          backend technologies.
        </p>
        <p>
          With hands-on experience in frontend and backend development, I aim to
          deliver products that solve real-world problems and provide an
          exceptional user experience.
        </p>
      </section>

      <section className={styles.skills}>
        <h3>Skills</h3>
        <ul>
          <li>HTML5 & CSS3</li>
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Node.js & Express</li>
          <li>Responsive Design</li>
          <li>APIs & RESTful Services</li>
          <li>Git & Version Control</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
