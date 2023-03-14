import React from "react";
import "./Index.scss";


import Navigation from "./Navigation-bar/Navigation";
import Introcontent from "./Intro-content/Introcontent";

function Index() {
  return (
    <div className="intro-section">
      <div className="vector-bg">
        {/* <img className='cloud' src={cloud} alt="" />
        <img className='cloud-soft' src={cloudsoft} alt="" /> */}
        <div className="content">
          <Navigation />


          
          <Introcontent />
        </div>
      </div>
    </div>
  );
}

export default Index;
