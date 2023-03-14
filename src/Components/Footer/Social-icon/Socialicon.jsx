import React from 'react'
import "./Socialicon.scss"

function Socialicon({icon, color, link}) {
  return (
    <div className='social-icon' style={{backgroundColor: color}}onClick={()=>{window.open(link,"_blank")}}>{icon}</div>
  )
}

export default Socialicon