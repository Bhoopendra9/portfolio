import React from "react";
import "./Skills.scss";

import Wrapper from "../Wrapper/Wrapper";
import Skillicons from "./SkillsIcon/Skillicons";

import sk8 from "../../images/sk-8.png";
import sk9 from "../../images/sk-9.png";
import sk10 from "../../images/sk-10.png";
import sk11 from "../../images/sk-11.png";
import Pattern from "../../images/heading-pattern.png";
import Service from "./Service/Service";

function Skills() {
  return (
    <div id="skills" className="main-container">
      <Wrapper>
        <div className="skillICon">
          <Skillicons path={sk11} />
          <Skillicons path={sk10} />
          <Skillicons path={sk9} />
          <Skillicons path={sk8} />
        </div>
        <div className="service-sections">
          <div className="left-section">
            <Service
              number="1"
              title="Frontend Development"
              desc="A front-end developer creates websites and applications using web languages such as REACT, HTML, CSS, and JavaScript that allow users to access and interact with the site or app. When you visit a website, the design elements you see are created by a front-end developer."
              data={[
                "React",
                "Javascrit",
                "Sass",
                "Css",
                "Html",
              ]}
            />
            <Service
              number="2"
              title="Ui/Ux Design"
              desc="Material-UI is a user interface library that provides pre-defined and customizable React components for faster and easy web development, these Material-UI components are based on top of Material Design by Google."
              data={[
                "Material OI",
              ]}
            />
          </div>
          <div className="right-section">
            <span className="text">Solving</span>
            <span className="text">Problems</span>
            <span className="text">
              Through <img src={Pattern} alt="" className="mobile" />
            </span>
            <span className="text icon">
              Good <img src={Pattern} alt="" className="desktop" />
            </span>
            <span className="text">Services</span>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Skills;
