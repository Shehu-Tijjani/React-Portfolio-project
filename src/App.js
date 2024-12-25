import React, { useEffect, useRef } from "react";
import "./App.css";
// import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import styles from "./components/Navbar.module.css";
// import Test from "./pages/Test";

function App() {
  const sectionHomeRef = useRef(null);
  const sectionNavRef = useRef(null);
  const navDoppleGanger = useRef(null);

  useEffect(() => {
    // StickyNav Implementation
    const navheight = sectionNavRef.current.getBoundingClientRect().height;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            sectionNavRef.current.classList.add(styles.sticky);
            navDoppleGanger.current.style.height = `${navheight}px`;
          } else {
            sectionNavRef.current.classList.remove(styles.sticky);
            navDoppleGanger.current.style.height = `0`;
          }
        });
      },
      {
        root: null,
        threshold: 0,
        rootMargin: `-${navheight}px`
      }
    );

    if (sectionHomeRef.current) {
      observer.observe(sectionHomeRef.current);
    }
  }, []);

  try {
    // Scroll to section in the page implementation
    const sectionRef = useRef({});

    const scrollToSection = (el) => {
      sectionRef.current[el]?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    };

    // HTML
    return (
      <div className="App">
        <Navbar comeIntoView={scrollToSection} stickyNav={sectionNavRef} />

        <Home
          homeref={sectionHomeRef}
          navDoppleGanger={navDoppleGanger}
          ref={(el) => (sectionRef.current["homeSection"] = el)}
        />

        <About ref={(el) => (sectionRef.current["aboutSection"] = el)} />

        <Contact ref={(el) => (sectionRef.current["contactSection"] = el)} />

        <Projects ref={(el) => (sectionRef.current["projectsSection"] = el)} />
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}

export default App;
