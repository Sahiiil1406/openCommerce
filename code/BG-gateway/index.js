const express=require('express')
require('dotenv').config()
const app=express()
const cors=require('cors')
const cookieParser=require('cookie-parser')

const userRouter=require('./routes/user.routes.js')
const orderRouter=require('./routes/order.routes.js')
const productRouter=require('./routes/product.routes.js')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors())

app.use('/user',userRouter)
app.use('/order',orderRouter)
app.use('/product',productRouter)


app.get('/',(req,res)=>{
    res.send("BG gateway IS WORKING.....")
})


app.listen(process.env.PORT,()=>{
    console.log(`BG gateway is running on port ${process.env.PORT}`)
  } 
)