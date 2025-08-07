import React from 'react'
import { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({category}) => {
  const { food_list } = useContext(StoreContext)
  return (
    <div className='container'>
      <div className='row g-2'>
      {food_list.map((item, index) => {
        if(category == 'All' ||  category == item.category ) {
          console.log(food_list.map(item => item._id));
          return(
          <div className='col-lg-3' key={item._id}>
            <FoodItem id={item._id} name={item.name} image={item.image} price={item.price} description={item.description}/>
          </div>
      )
        }
        })
  }
    </div>
    </div>
  )
}

export default FoodDisplay