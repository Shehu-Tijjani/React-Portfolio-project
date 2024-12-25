import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar({ comeIntoView, stickyNav }) {
  try {
    return (
      <nav ref={stickyNav} className={styles.navbar}>
        <h1>
          Dev<span>+</span>Growth
        </h1>

        <ul>
          <li>
            <Link onClick={() => comeIntoView("homeSection")}>Home</Link>
          </li>

          <li>
            <Link onClick={() => comeIntoView("aboutSection")}>About</Link>
          </li>

          <li>
            <Link onClick={() => comeIntoView("contactSection")}>Contact</Link>
          </li>

          <li>
            <Link onClick={() => comeIntoView("projectsSection")}>
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    );
  } catch (error) {
    console.log("Nav Section Error", error);
  }
}

export default Navbar;
