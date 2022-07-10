import React from "react";
import "./Navbar.css";
import Toogle from "../Toogle/Toogle";
import { Link } from "react-scroll/modules";
import { hover } from "@testing-library/user-event/dist/hover";

const Navbar = () => {
//   const mystyle ={
//     cursor: "pointer",
//     color: "var(--orange)",
    
// }
  return (
    <div className="n-wrapper "  style = {{  position: "sticky", top: "0"}}>
      {" "}
      {/*Wrapper class for Navbar(n)  */}
      <div className="n-left">
        <div className="n-name">Saksham</div> 

        <Toogle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>

            <Link spy={true} to="About" smooth={true} activeClass="activeClass">
              <li>About</li>
            </Link>

            <Link
              spy={true}
              to="timeline"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Education</li>
            </Link>
            <Link
              spy={true}
              to="project"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Projects</li>
            </Link>
            <Link
              spy={true}
              to="skills"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Skills</li>
            </Link>
          
          </ul>
        </div>
        <Link
              spy={true}
              to="contact"
              smooth={true}
              activeClass="activeClass"
            >
     <button className="Button" id ="contact"> Contact Me</button>
     </Link>
      </div>
    </div>
  );
};
export default Navbar;
