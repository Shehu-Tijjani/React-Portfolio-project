import React, { forwardRef } from "react";
import styles from "./Home.module.css";
// import ContactForm from "./Contact";

const merger = (...refs) => {
  return (element) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        return ref(element);
      } else if (ref) ref.current = element;
    });
  };
};

const Home = forwardRef(({ homeref, navDoppleGanger }, ref) => {
  return (
    <div ref={merger(homeref, ref)} className={styles.home}>
      <div ref={navDoppleGanger} className="navDoppleGanger"></div>
      <section className={styles.hero}>
        <div className={styles.left}>
          <h1>
            Hello! <br />
            I'm Tijjani
          </h1>

          <p className={styles.sub}>Welcome to My Portfolio :)</p>

          <p>
            I'm a passionate web developer specialized in building modern,
            responsive, and scalable web applications.
          </p>

          <a href="#projects" className={styles.btn}>
            View My Projects
          </a>
        </div>

        {/* <div></div> */}
      </section>
    </div>
  );
});

export default Home;
