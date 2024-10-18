const express=require('express')
const router=express.Router()
const axios=require('axios')

router.post('/createOrder',async(req,res)=>{
    try {
        const token=req.cookies.token;
        req.body.token=req.cookies.token;
        const gateway=await axios.post(`${process.env.GATEWAY_URL}/order/create`,req.body);
        return res.json({
            gateway:gateway.data
        })        
    } catch (error) {
        return res.status(500).json({message:error.message}); 
    }
})

router.post('/getOrder',async(req,res)=>{
    try {
        const token=req.cookies.token;
        req.body.token=token;
        console.log(req.body)
        const gateway=await axios.post(`${process.env.GATEWAY_URL}/order/get`,req.body);
        return res.json({
            msg:"order fetched succesfully",
            gateway:gateway.data
        })        
    } catch (error) {
        return res.status(500).json({message:error.message}); 
    }
})

router.post('/getOrderById',async(req,res)=>{
    try {
        const token=req.cookies.token;
        req.body.token=token;
        const gateway=await axios.post(`${process.env.GATEWAY_URL}/order/getOrderById`,req.body);
        return res.json({
            msg:"order fetched succesfully",
            gateway:gateway.data
        })        
    } catch (error) {
        return res.status(500).json({message:error.message}); 
    }
})

router.post('/updateOrder',async(req,res)=>{
    try {
        const token=req.cookies.token;
        req.body.token=token;
        const gateway=await axios.post(`${process.env.GATEWAY_URL}/order/update`,req.body);
        return res.json({
            msg:"order updated succesfully",
            gateway:gateway.data
        })        
    } catch (error) {
        return res.status(500).json({message:error.message}); 
    }
})

router.post('/deleteOrder',async(req,res)=>{
    try {
        const token=req.cookies.token;
        req.body.token=req.cookies.token;
        const gateway=await axios.post(`${process.env.GATEWAY_URL}/order/delete`,req.body);
        return res.json({
            msg:"order deleted succesfully",
            gateway:gateway.data
        })        
    } catch (error) {
        return res.status(500).json({message:error.message}); 
    }
})

module.exports=router