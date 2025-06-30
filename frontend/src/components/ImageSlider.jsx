import React, { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";



const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStyles = {
    width: "100%",
    height: "300px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex]})`,
    borderRadius: "10px"
  };

  const  sliderStyles={
    height:'100%',
    position:"relative"
  }

  const leftArrowStyles={
    position:'absolute',
    top:'50%',
    transform:'translate(0, -50%)',
    left:'32px',
    fontSize:'45px',
    color:'#fff',
    cursor:"pointer",
    zIndex:1,
  }
  const rightArrowStyles={
    position:'absolute',
    top:'50%',
    transform:'translate(0, -50%)',
    right:'32px',
    fontSize:'45px',
    color:'#fff',
    cursor:"pointer",
    zIndex:1,
  }

  const goToPrevious= ()=>{
    const isFirstSlide = currentIndex === 0;
    const newIndex= isFirstSlide?slides.length-1:currentIndex-1;
    setCurrentIndex(newIndex)
  }

  const goToNext=()=>{
    const isLastSlide = currentIndex === slides.length-1;                 
    const newIndex= isLastSlide?0:currentIndex+1;
    setCurrentIndex(newIndex)
  }
  return (
    <div style={sliderStyles}>
    <div style={leftArrowStyles} onClick={goToPrevious} className='left-arrow'><IoIosArrowBack /></div>
    <div style={rightArrowStyles} onClick={goToNext} className='right-arrow'><IoIosArrowForward /></div>
    <div style={slideStyles}></div>
    
    </div>
  );
}

export default ImageSlider