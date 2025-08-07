import UserModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from "validator";

//login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try{
        const user = await UserModel.findOne({email})

        if(!user){
            return res.json({success:false, message: "User does not exist"})
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.json({success:false, message: "Invalid credentials"})
        }

        //create token
        const token = createToken(user._id);
        res.json({success: true, token})
    }
    catch(error){
        console.error(error);
        res.json({success: false, message: "Error"});
    }

}

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '3d'});
}

//register user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try{
        const exists = await UserModel.findOne({email})

        if(exists){
            return res.json({success:false, message: "User already exists"})
        }

        //validate email format and password strength
        if(!validator.isEmail(email)){
            return res.json({success:false, message: "Please enter a valid email"})
        }

        if(password.length < 8){
            return res.json({success:false, message: "Password must be at least 8 characters long"})
        }

        if(!validator.isStrongPassword(password)){
            return res.json({success:false, message: "Please enter a strong password(must contain at least one uppercase letter, one lowercase letter, one number, and one symbol)"})
        }

        //hashing password
        const hashedPassword = await bcrypt.hash(password, 10);

        //create user
        const newUser = new UserModel({
            name: name,
            email: email,
            password: hashedPassword
        })

        //save user to database
        const user = await newUser.save();

        //create token
        const token = createToken(user._id);
        res.json({success: true,token})

    }
    catch(error){
        console.error(error);
        res.json({success: false, message: "Error"});
    }
}


export { loginUser, registerUser };