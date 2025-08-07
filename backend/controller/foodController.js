import foodModel from "../models/FoodModel.js";
import fs from 'fs'


export const addFood = async(req,res)=>{
        console.log('BODY:', req.body);
        console.log('FILE:', req.file);
     let image_filename= `${req.file.filename}`;
     const food = new foodModel({
        name : req.body.name,
        description : req.body.description,
        price : req.body.price,
        category : req.body.category,
        image : image_filename
     })
     try{
        await food.save();
        res.json({success: true, message: "food added"})
     }catch(error){
        res.json({success: false, message:error.message})
     }
}

export const listFood = async(req, res)=>{
    try{
        const foods = await foodModel.find({})
        res.json({success:true, data: foods})
    } catch(error){
        res.json({success:false, message: error.message})
    }
}

export const removeFood = async(req, res) => {
    try {
        const food = await foodModel.findById(req.params.id); // use req.params.id
        if (food && food.image) {
            fs.unlink(`uploads/${food.image}`, () => {});
        }
        await foodModel.findByIdAndDelete(req.params.id);
        res.json({success: true, message: "Food Removed Successfully"});
    } catch(error) {
        res.json({success: false, message: error.message});
    }
}