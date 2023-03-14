import React from "react";
import "./Footer.scss";

import Section from "../Shared/Section/Section";
import Socialicon from "./Social-icon/Socialicon";
import { ScrollToSection } from "../Utils/ScrollToSection";

import {
  FaYoutube,
  FaGithub,
  FaLinkedinIn,
  FaStackOverflow,
  FaInstagram,
} from "react-icons/fa";
import Wrapper from "../Wrapper/Wrapper";

function Footer() {
  return (
    <Section background="dark" className="footer">
      <Wrapper>
        <div className="topsection">
          <div className="footer-menu">
            <ul className="footer-menu-items">
              <li
                className="footer-menu-item"
                onClick={() => ScrollToSection("skills")}
              >
                Skills
              </li>
              <li
                className="footer-menu-item"
                onClick={() => ScrollToSection("portfolio")}
              >
                Portfolio
              </li>
              
              <li
                className="footer-menu-item"
                onClick={() => ScrollToSection("contact")}
              >
                Contact
              </li>
            </ul>
          </div>
          <div className="social-icons">
            <Socialicon color="#FF0000" icon={<FaYoutube />} link="" />
            <Socialicon color="#0D2636" icon={<FaGithub />} link="" />
            <Socialicon color="#0A66C2" icon={<FaLinkedinIn />} link="" />
            <Socialicon color="#f2740d" icon={<FaStackOverflow />} link="" />
            <Socialicon color="#E84C88" icon={<FaInstagram />} link="" />
          </div>
        </div>
        <div className="bottom-bar">
          <div className="copyright-text">
            Copyright 2022 | All Rights Reserved
          </div>
        </div>
      </Wrapper>
    </Section>
  );
}

export default Footer;
