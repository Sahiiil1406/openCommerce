const express=require('express');
const router=express.Router();
const axios=require('axios');
const {BPP_URLS}=require('../constant.js');


router.post('/create',async(req,res)=>{
    const to=req.body.to || BPP_URLS[0];
    console.log(req.body)
    try {
        console.log(to)
        const order=await axios.post(`${to}/order/create`,req.body);
        return res.json(
            order.data
        )
    } catch (error) {
        return res.status(500).json({message:error.message}); 
    }
})

router.post('/get',async(req,res)=>{
   // console.log(req.body.token)
    const to=req.body.to || BPP_URLS[0];
    try {
        const order=await axios.post(`${to}/order/get`,req.body);
        console.log(order)
        return res.send(order.data);
    } catch (error) {
        return res.status(500).json({message:error.message}); 
    }
})

router.post('/getOrderById',async(req,res)=>{
    const to=req.body.to || BPP_URLS[0];
    try {
        const order=await axios.post(`${to}/order/getOrderById`,req.body);
        return res.json(
            order.data
        )
    } catch (error) {
        return res.status(500).json({message:error.message}); 
    }
})

router.post('/updateOrder',async(req,res)=>{
    const to=req.body.to || BPP_URLS[0];
    try {
        const order=await axios.post(`${to}/order/update`,req.body);
        return res.json({
            order
        })
    } catch (error) {
        return res.status(500).json({message:error.message}); 
    }
})

router.post('/deleteOrder',async(req,res)=>{
    const to=req.body.to || BPP_URLS[0];
    try {
        const order=await axios.post(`${to}/order/delete`,req.body);
        return res.json({
            order
        })
    } catch (error) {
        return res.status(500).json({message:error.message}); 
    }
})

module.exports=router