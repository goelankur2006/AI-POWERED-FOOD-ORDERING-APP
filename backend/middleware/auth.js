import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.json({success: false, message: 'Unauthorized access' });
    }
    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = tokenDecode.id;
        next();
    } catch (error) {
        console.log(error);
        return res.json({ message: 'Error' });
    }
}

export default authMiddleware;