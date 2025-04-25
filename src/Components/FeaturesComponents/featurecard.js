import React from 'react';
import "./feature.css"

const FeaturesCard = ({ even, imgUrl, heading, para }) => {
  return (
    <div className='make-flex'>
      <div className='feature-card-ls'>
        <div className='feature-img'>
          <img src={imgUrl} alt='' />
        </div>
      </div>
      <div className='middle-line'></div>
      <div className='feature-card-rs'>
        <div className='feature-content-rs'>
          <div>
            <h1>{heading}</h1>
            <p>{para}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesCard;