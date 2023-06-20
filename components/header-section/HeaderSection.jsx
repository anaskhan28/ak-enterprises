
import React from 'react'
import './HeaderSection.scss';


const HeaderSection = ({subtitle, about}) => {
  return (
    <div className="section-container">
    <div className="section-heading">
      <div className="section-subtitle">
      {subtitle}
      </div>
      <div className="section-about">
       {about}
      </div>
    </div>
    </div>
  )
}

export default HeaderSection