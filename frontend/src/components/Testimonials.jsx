import React from 'react'
import { Testimonials_list } from '../assets/assets'

const Testimonials = () => {
  return (
    <div id='testimonials'>
      <br />
      <br />
      <h5>Testimonials</h5>
      <h2>What They Say About Us</h2>
      <div className="row">
        {Testimonials_list.map((item, index) => (
          <div className="col-md-3 " key={index}>
            <div className="card testimonial">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h4 className="card-title text-center text-danger testimonial-name">{item.name}</h4>
                <p className="card-text">{item.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials