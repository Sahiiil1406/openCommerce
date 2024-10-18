const express=require('express');
const router=express.Router();
const axios=require('axios');


router.post('/create',async()=>{
    const to=req.body.to;
    try {
        const order=await axios.post(`${to}/order/create`,req.body);
        return res.json({
            order
        })
    } catch (error) {
        return res.status(500).json({message:error.message}); 
    }
})

router.get('/get',async()=>{
    const to=req.body.to;
    try {
        const order=await axios.get(`${to}/order/get`,req.body);
        return res.json({
            order
        })
    } catch (error) {
        return res.status(500).json({message:error.message}); 
    }
})

router.get('/getOrderById',async()=>{
    const to=req.body.to;
    try {
        const order=await axios.get(`${to}/order/getOrderById`,req.body);
        return res.json({
            order
        })
    } catch (error) {
        return res.status(500).json({message:error.message}); 
    }
})

router.post('/updateOrder',async()=>{
    const to=req.body.to;
    try {
        const order=await axios.post(`${to}/order/update`,req.body);
        return res.json({
            order
        })
    } catch (error) {
        return res.status(500).json({message:error.message}); 
    }
})

router.post('/deleteOrder',async()=>{
    const to=req.body.to;
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