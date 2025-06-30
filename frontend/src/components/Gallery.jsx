import React from 'react'
import { assets } from '../assets/assets'
import ImageSlider from './ImageSlider'

const Gallery = () => {
  const slides=[
    assets.gallery1,
    assets.gallery2,
    assets.gallery3,
    assets.gallery4,
    assets.gallery5,
    assets.gallery6,
    assets.gallery7,
    assets.gallery8,
  ]
  const containerStyles= {
    width: "500px",
    height: "280px",
    margin: "0 auto",

  }
  return (
    <div id='gallery'>
      <br /><br />
      <h5>Gallery</h5>
      <h2>Check Our Gallery</h2>
      <div style={containerStyles}>
        <ImageSlider slides={slides}/>
      </div>
    </div>
  )
}

export default Gallery