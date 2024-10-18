const express=require('express');
const router=express.Router();
const axios=require('axios');
const {BPP_URLS}=require('../constant.js');

router.post('/getProducts',async(req,res)=>{
    try {
        console.log(req.body)
    let res=[]
    for(let i=0;i<BPP_URLS.length;i++){
        const gateway=await axios.post(`${BPP_URLS[i]}/product/getProducts`,req.body);
        res.push(gateway);
    }
    return res.json({
        message:'Get Product successfully',
        res
    });
    } catch (error) {
        return res.status(500).json({message:error.message});
        
    }
});

router.post('/getProductById',async(req,res)=>{
    try {
    let res=[]
    for(let i=0;i<BPP_URLS.length;i++){
        const gateway=await axios.post(`${BPP_URLS[i]}/product/getProductById`,req.body);
        res.push(gateway);
    }
    return res.json({
        message:'Get Product by ID successfully',
        res
    });
    } catch (error) {
        return res.status(500).json({message:error.message});
        
    }
});

router.post('/search',async(req,res)=>{
    try {
      //  console.log(req.body)
    let res=[]
    for(let i=0;i<BPP_URLS.length;i++){
        const gateway=await axios.post(`${BPP_URLS[i]}/product/search`,req.body);
        res.push(gateway);
    }
    return res.json({
        message:'Search Product successfully',
        res
    });
    } catch (error) {
        return res.status(500).json({message:error.message});
        
    }
});

module.exports=router