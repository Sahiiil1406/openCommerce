const express=require('express');
const router=express.Router();
const axios=require('axios');
const {BPP_URLS}=require('../constant.js');

router.post('/getProducts',async(req,res)=>{
    try {
        console.log(req.body)
    let result=[]
    for(let i=0;i<BPP_URLS.length;i++){
        const gateway=await axios.get(`${BPP_URLS[i]}/product/getProducts`);
       // console.log(gateway)
        result=result.concat(gateway.data);
    }
    return res.json({
        result
    });
    } catch (error) {
        return res.status(500).json({message:error.message});
        
    }
});

router.post('/getProductById',async(req,res)=>{
    try {
    let result=[]
    
    for(let i=0;i<BPP_URLS.length;i++){
        console.log("sahil")
        const gateway=await axios.post(`${BPP_URLS[i]}/product/getProductById`,req.body);
        console.log(result)
        result=result.concat(gateway.data);
    }
    console.log(result)
    return res.json({
        message:'Get Product by ID successfully',
        result
    });
    } catch (error) {
        return res.status(500).json({message:error.message});
        
    }
});

router.post('/search',async(req,res)=>{
    try {
      console.log(req.body)
    let result=[]
    for(let i=0;i<BPP_URLS.length;i++){
        const gateway=await axios.get(`${BPP_URLS[i]}/product/getProducts`,req.body);
        result=result.concat(gateway.data);
    }
    return res.json({
        message:'Search Product successfully',
        result
    });
    } catch (error) {
        return res.status(500).json({message:error.message});
        
    }
});

module.exports=router