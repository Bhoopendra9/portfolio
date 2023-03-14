import React from 'react'
import "./CalltoAction.scss"
import ArrowRight from '../Arrowrighticon/ArrowRight'


function CalltoAction({text, action, icon}) {
  return (
    <div className='call-to-action' onClick={action}>
        <span className='text'>{text}</span>
        {
          icon ? <div className="icon">{icon}</div>: <ArrowRight/>
        }
       
    </div>
  )
}

export default CalltoAction