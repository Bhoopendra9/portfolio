import React from 'react'
import './Section.scss'

function Section({children, id, className, title, background}) {
  return (
    <div id={id || ""} className={ `section ${className? className:""} ${background==="dark"? "dark": "light"}`}>

        <div className="content">
            {
                title && ( <div className="section-title">
                    <h1>{title}</h1>
                </div> )
            }
            {children}
        </div>
    </div>
  )
}

export default Section