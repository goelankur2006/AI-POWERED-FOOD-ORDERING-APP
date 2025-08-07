import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='container'>
      <h5>About</h5>
      <h2>Learn more <span>about us</span></h2>
      <div className='row'>
        <div className='col-lg-6'>
          <img src={assets.about_img} alt='about_img' className='img-fluid' />
        </div>
        <div className='col-lg-6'>
          <p>
            Welcome to YUMMY - your go-to destination for delicious moments! <br/> At Yummy, we believe that great food brings people together. Whether you're craving quick noodles, looking for healthy meals, or exploring bold new flavors, our app is designed to satisfy your taste buds with ease and convenience.
          </p>
          <br />
          <h4>What We Offer</h4>
          <ul>
            <li>🍜 A wide variety of mouth-watering recipes</li>
            <li>🛵 Easy online ordering from top local restaurants</li>
            <li>⭐ Personalized recommendations based on your taste</li>
            <li>⏱️ Fast, reliable delivery at your fingertips</li>
          </ul>
          <br />
          <h4>Why Choose Us?</h4>
          <p>
            Because food should be fun, flavorful, and fast. We combine technology with a love for food to bring you a smooth, satisfying experience — whether you’re planning a dinner or just hungry now.
            <br/>
            Thank you for making us a part of your food journey. Happy eating!
          </p>
        
        </div>
      </div>
    </div>
  )
}

export default About