const express=require('express')
require('dotenv').config()
const app=express()
const cors=require('cors')
const cookieParser=require('cookie-parser')

const userRoutes=require('./routes/user.routes')
const orderRoutes=require('./routes/order.routes')
const productRoutes=require('./routes/product.routes')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors())


app.get('/',(req,res)=>{
    res.send("BAP IS WORKING.....")
  }
)
app.use('/user',userRoutes)
app.use('/order',orderRoutes)
app.use('/product',productRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`BAP is running on port ${process.env.PORT}`)
  } 
)