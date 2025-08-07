import React from 'react'
import { Chef_list } from '../assets/assets'

const Chefs = () => (
  <div id='chefs'>
    <br /> <br />
    <h5 className='text-center' >CHEFS</h5>
    <h2 className='OUR-PROFESSIONAL-CHEFS'>OUR PROFESSIONAL CHEFS</h2>
  <div className="row">
    {Chef_list.map((chef,index) => (
      <div className="col-md-4" key={index}>
        <div className="card chef">
          <img src={chef.image} className="card-img-top chefs" alt={chef.name} />
          <div className="card-body">
            <h4 className="card-title text-center text-danger chef-name">{chef.name}</h4>
            <h5 className="card-subtitle mb-2 text-muted fw-bold">{chef.position}</h5>
            <p className="card-text ">{chef.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
)

export default Chefs