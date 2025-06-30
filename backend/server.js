import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import foodRouter from './routes/foodRoutes.js'
import userRouter from './routes/userRoute.js'
import CartRouter from './routes/CartRoute.js'

const app = express()
app.use(express.json())

app.use(cors({
  origin: [/^http:\/\/localhost:\d+$/],
  credentials: true
}));

app.use('/api/food',foodRouter)
app.use('/uploads', express.static('uploads')); 
app.use('/api/user',userRouter)
app.use('/api/cart', CartRouter)


const port = process.env.PORT || 5000


connectDB() 


app.get('/',(req, res)=>{
    res.send("API Working")
})

app.listen(port,()=>console.log(`server is running on port: ${port}`))

