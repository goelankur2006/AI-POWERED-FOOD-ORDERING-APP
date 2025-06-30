import UserModel from '../models/userModel.js'

const addToCart = async (req, res) => {
    try {
        let userData = await UserModel.findById(req.body.userId);
        let cartData = userData.cartData || {};
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }
        await UserModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "Item added to cart successfully" });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error adding to cart" });
    }
}

const removeFromCart = async (req, res) => {
    try{
        let userData = await UserModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -= 1;
        }
        await UserModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({success: true, message: "Item removed from cart successfully"});  
    }
    catch(error){
        console.error(error);
        res.json({success: false, message: "Error removing from cart"});
    }

}

const getCart = async (req, res) => {
    try{
        let userData = await UserModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({success: true, cartData});
    }
    catch(error){
        console.error(error);
        res.json({success: false, message: "Error fetching cart"});
    }
}

export { addToCart, removeFromCart, getCart }