import React, { useState } from "react";
import "./Navigation.scss";

import logo from "../../../images/logo.png";
import CalltoAction from "../../Shared/CalltoAction/CalltoAction";
import { ScrollToSection } from "../../Utils/ScrollToSection";
import Wrapper from "../../Wrapper/Wrapper";

import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";

function Navigation() {
  const [mobile, setmobile] = useState(false);

  const openMobileMenu = () => {
    setmobile(true);
  };

  const CloseToggle=(e)=>{
    ScrollToSection(e)
    setmobile(false)
  }
  return (
    <div className={`top-navigation-bar ${mobile ? "mobileview" : " "} `}>
      <Wrapper>
        <div className="navigation">
          <span
            className="navigation-item"
            onClick={() => {
              CloseToggle("skills");
            }}
          >
            Skills
          </span>
          <span
            className="navigation-item"
            onClick={() => {
              CloseToggle("portfolio");
            }}
          >
            My Work
          </span>
          
          <CalltoAction
            text="contact me"
            action={() => CloseToggle("contact")}
          />
        </div>
        <div className="mobilemenu">
          {mobile ? (
            <VscChromeClose onClick={() => setmobile(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </Wrapper>
    </div>
  );
}

export default Navigation;
