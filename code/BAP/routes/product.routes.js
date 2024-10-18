const express=require('express');
const router=express.Router();
const axios=require('axios');

router.post('/getProducts',async(req,res)=>{
    try {
    // console.log(req.body)
    const token=req.cookies.token;
    req.body.token=req.cookies.token;
    const gateway=await axios.post(`${process.env.GATEWAY_URL}/product/getProducts`,req.body);
    return res.json({
        message:'Get Product successfully',gateway:gateway.data
    });
    } catch (error) {
        return res.status(500).json({message:error.message});
        
    }
});

router.post('/getProductById',async(req,res)=>{
    try {
    //console.log(req.body)
    const token=req.cookies.token;
    req.body.token=req.cookies.token;
    const gateway=await axios.post(`${process.env.GATEWAY_URL}/product/getProductById`,req.body);
    return res.json({
        message:'Get Product by ID successfully',
        gateway:gateway.data
    });
    } catch (error) {
        return res.status(500).json({message:error.message});
        
    }
});


router.post('/search',async(req,res)=>{
    try {
    const token=req.cookies.token;
    req.body.token=req.cookies.token;
    const gateway=await axios.post(`${process.env.GATEWAY_URL}/product/search`,req.body);
    return res.json({
        message:'Search Product successfully',
        gateway:gateway.data
    });
    } catch (error) {
        return res.status(500).json({message:error.message});
        
    }
});

module.exports=router

