import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import "./Contact.scss";

import Form from "./Form/Form";

function Contact() {
  return (
    <div id="contact" className="contact">
      <Wrapper>
        <div className="contact-content-wrapper">
          <div className="heading">
            <h1>let's talk</h1>
            <h4>
              I would be happy to answer any question you may have about
              freelance writing or content marketing
            </h4>
          </div>
          <Form />
        </div>
      </Wrapper>
    </div>
  );
}

export default Contact;
