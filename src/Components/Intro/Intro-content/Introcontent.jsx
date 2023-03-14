import React from "react";
import "./Introcontent.scss";

import { FiArrowUpRight } from "react-icons/fi";

import Wrapper from "../../Wrapper/Wrapper";
import hand from "../../../images/hand.png";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { ScrollToSection } from "../../Utils/ScrollToSection";

function Introcontent() {
  return (
    <div className="intro-content">
      <Wrapper>
        <div className="mainheading">
          <h1>I Am A Frontent developer</h1>
          {/* <h1> & </h1>
          <h1>Creative Designer</h1> */}
        </div>
        <div className="banner-section">
          <div className="left-col">
            <h1 className="title">
              <span className="small-text">
                <div className="greeting">
                  <span className="icon">
                    <img src={hand} alt="" />
                  </span>
                  <span className="text">Hello, </span>
                </div>
                <div>
                  <span className="text">I Am Bhoopendra Kirar</span>
                </div>
              </span>
              <span className="big-text"></span>
            </h1>
            <p>
              I am a front-end developer focused on crafting clean &
              user-friendly experiences and have good grasp on front-end
              technologies. Modern websites, web designer I create and maintain.
            </p>
          </div>
          <div className="right-col">
            {/* <img src={girl} alt="" /> */}
            <div className="highlights vertical ">
              <FiArrowUpRight />
              <div className="text">Hire Me</div>
            </div>
            {/* <div className="highlights horizontal ">
              <div className="icon">
                <FaUser />
              </div>
              <div className="text">
                <span>4k+</span>
                Happy Customers
              </div>
            </div> */}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Introcontent;
