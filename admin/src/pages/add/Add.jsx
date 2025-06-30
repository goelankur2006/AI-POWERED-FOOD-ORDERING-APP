import React, { useState } from 'react'
import './add.css'
import { assets } from '../../assets/assets'
import { LiaRupeeSignSolid } from "react-icons/lia";
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {

    const [image, setImage] = useState(false)
    const [data,setData] = useState({
        name: "",
        description: "",
        category: "Burger",
        price: 0
    })

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const onSubmitHandler = async(event) =>{
        event.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('category', data.category);
        formData.append('price', data.price);
        const response = await axios.post('http://localhost:5000/api/food/add',formData);
        if(response.data.success){
            setData({
                name: "",
                description: "",
                category: "Burger",
                price: 0
            })
            setImage(false)
            toast.success(response.data.message)
        }
        else{
            toast.error(response.data.message)
        }
    };

  return (
    <div className='add'>
        <form className="flex-col" onSubmit={onSubmitHandler}>
            <div className="add-img-upload flex-col">
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' hidden required />
            </div>
            <div className="add-product-name flex-col">
                <p>Product Name</p>
                <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type Here' />
            </div>
            <div className='add-product-description flex-col'>
                <p>Product Description</p>
                <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here' required></textarea>
            </div>
            <div className="add-category-price">
                <div className="add-category flex-col">
                    <p>Product Category</p>
                    <select onChange={onChangeHandler} name="category">
                        <option value="Burger">Burger</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Spring Roll">Spring Roll</option>
                        <option value="French Fries">French Fries</option>
                        <option value="Dumplings">Dumplings</option>
                        <option value="Manchurian">Manchurian</option>
                        <option value="Nachos">Nachos</option>
                        <option value="Noodles">Noodles</option>
                        <option value="Potato Wedges">Potato Wedges</option>
                        <option value="Lasagna">Lasagna</option>
                    </select>
                </div>
                <div className="add-price flex-col">
                    <p>Product Price</p>
                    <input onChange={onChangeHandler} value={data.price} type='number' name="price" placeholder="Rs."/>
                </div>
            </div>
            <button type='submit' className='add-btn btn'>ADD</button>
        </form>        
    </div>
  );
};

export default Add