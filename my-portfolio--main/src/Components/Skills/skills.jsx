import React, { useContext } from "react";

import "./skills.css";
import Card from "../Card/Card";
import coding from "../../Img/coding.png";
import programming from "../../Img/programming.png";
import resume from "./resume.pdf";
import { themeContext } from "../../Context";

const skills = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="skills">
      <div className="head">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Technical Skills</span>
        <span>
          My Technical skills includes technologies:
          <br /> Web Development ,Data Science , Fulll Stack Development
        </span>
        {/* {left side} */}
        <a href={resume} download>
          <button className="Button s-button">DOWNLOAD CV</button>
        </a>
       
      </div>

      {/* right side       */}

      <div className="cards">
        <div style={{ left: "9rem", top: "2rem" }}>
          <Card
            emoji={coding}
            heading={"Development"}
            detail={"Html,CSS,JavaScript Bootstrap,Reactjs"}
          />
        </div>
        <div style={{ left: "35rem", top: "5rem" }}>
          <Card
            emoji={programming}
            heading={"Programming Languages"}
            detail={"JAVA, PYTHON, R programming"}
          />
        </div>
        <div style={{ left: "22rem", top: "5rem" }}>
          <Card
            // emoji={}
            heading={"TOOLS"}
            detail={"Tbaleau ,Git, Github, MS Excel,Google Data Studio"}
          />
        </div>
      </div>
    </div>
  );
};
export default skills;
