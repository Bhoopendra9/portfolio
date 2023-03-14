import React from 'react'
import "./Contactinfo.scss"

import{FaPhoneAlt} from "react-icons/fa"
import{MdEmail} from "react-icons/md"

function Contactinfo() {
  return (
    <div className='contact-info-box'>
        <h4>I would be happy to answer any question you may have about freelance writing or content marketing</h4>
        <div className="contact-option">
            <FaPhoneAlt/>
            <span className="text">12354895</span>
        </div>
        <div className="contact-option">
            <MdEmail/>
            <span className="text">gamil.com</span>
        </div>

    </div>
  )
}

export default Contactinfo