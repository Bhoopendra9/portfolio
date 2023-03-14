import React from 'react'
import "./SkillIcons.scss"

function Skillicons({path}) {
  return (
    <div className='skill-section'>
        <img src={path} alt="" />
    </div>
  )
}

export default Skillicons