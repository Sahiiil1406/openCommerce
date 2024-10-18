const express=require('express');
const router=express.Router();
const axios=require('axios');

router.post('/login',async(req,res)=>{
    try {
        console.log('in login',req.body);
    const gateway=await axios.post(`${process.env.GATEWAY_URL}/user/login`,req.body);
    res.cookie('token',gateway.data.token);
    //console.log("issue")
    return res.json({
        message:'Login successfully',
        gateway:gateway.data
    });
    } catch (error) {
        return res.status(500).json({message:error.message});
        
    }
});

router.post('/register',async(req,res)=>{
    try {
    const gateway=await axios.post(`${process.env.GATEWAY_URL}/user/register`,req.body);
    res.cookie('token',gateway.token);
    return res.json({
        message:'Register successfully',
    });
    } catch (error) {
        return res.status(500).json({message:error.message});
        
    }
});

router.post('/logout',async(req,res)=>{
    try {
    res.clearCookie('token');
    return res.json({
        message:'Logout successfully',
    });
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
});

module.exports=router