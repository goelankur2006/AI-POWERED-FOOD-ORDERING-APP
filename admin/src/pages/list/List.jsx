import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios';
import { toast } from 'react-toastify';

const List = () => {
  const [list, setList] = useState([]);
  const fetchList = async () => {
    const response = await axios.get('http://localhost:5000/api/food/list');
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error fetching list");
    }
  }

  const removeItem = async (id) => {
    const response = await axios.delete(`http://localhost:5000/api/food/remove/${id}`);
    await fetchList();
    if (response.data.success) {  
      toast.success(response.data.message);
    }
    else {
      toast.error(response.data.message);
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list add flex-col'>
      <p>Menu</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>      
        {list.map((item, index) =>{
          return(
            <div className="list-table-format" key={index}>
            <img src={`http://localhost:5000/uploads/`+item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>₹{item.price}</p>

            <button onClick={()=>removeItem(item._id)}>Delete</button>
          </div>
          )
          
        })}
      </div>
        
    </div>
  )
}

export default List