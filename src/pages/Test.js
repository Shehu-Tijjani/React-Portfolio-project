// import React, { useRef } from "react";
import { Link } from "react-router-dom";

function Test() {
  //   const sectionRef = useRef(null);

  //   const scrollToSection = () => {
  //     sectionRef.current.scrollIntoView({ behavior: "smooth" });
  //   };

  return (
    <div>
      <h1>Test Page</h1>
      <button>Scroll to Section</button>
      {/* onClick={scrollToSection} */}
      <div style={{ height: "100vh" }}>Scroll down to see the section</div>
      {/* ref={sectionRef}  */}
      <div style={{ height: "200px", background: "yellow" }}>
        <h2>Target Section</h2>
      </div>
      <Link to="/about">Go to About Page</Link>
    </div>
  );
}

export default Test;
