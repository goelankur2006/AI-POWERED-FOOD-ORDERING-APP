import React, {useContext} from 'react'
import { LuIndianRupee } from "react-icons/lu";
import { assets } from '../assets/assets';
import { StoreContext } from '../context/StoreContext';
const FoodItem = ({id, name, image, price, description}) => {
  const{cartItems,addToCart,removeFromCart,url}=useContext(StoreContext)
  return (
    <div>
      <div className="card">
        <img src={url+"/uploads/"+image} className="card-img-top"/>
        <div className="card-body">
          <p className="card-text text-danger">{name}</p>
          <p className="card-text">{description}</p>
          <div className="d-flex align-items-center justify-content-between">
            <p className="card-text text-success fw-bold mb-0 price"> <LuIndianRupee/>{price}
            </p>
            <div className='counter'>
              {
                !cartItems[id]?<img src={assets.add_icon_white} className="add_white" alt="" onClick={()=>addToCart(id)}/> : 
                <div className='cart-counter'>
                  
                  <img src={assets.remove_icon} className="remove" alt="remove" onClick={() => removeFromCart(id)} />
                  <p className='mb-0'>{cartItems[id]}</p>
                  <img src={assets.add_icon_green} className="add_green" alt="add" onClick={() => addToCart(id)} />
                  
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodItem