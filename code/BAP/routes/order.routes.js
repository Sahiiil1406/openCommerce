const express=require('express')
const router=express.Router()

router.post('/createOrder',async()=>{
    try {
        const token=req.cookies.token;
        req.body.token=req.cookies.token;
        const gateway=await axios.post(`${process.env.GATEWAY_URL}/order/create`,req.body);
        return res.json({
            msg:"order created succesfully"
        })        
    } catch (error) {
        return res.status(500).json({message:error.message}); 
    }
})

router.get('/getOrder',async()=>{
    try {
        const token=req.cookies.token;
        req.body.token=req.cookies.token;
        const gateway=await axios.get(`${process.env.GATEWAY_URL}/order/get`,req.body);
        return res.json({
            msg:"order fetched succesfully"
        })        
    } catch (error) {
        return res.status(500).json({message:error.message}); 
    }
})

router.get('/getOrderById',async()=>{
    try {
        const token=req.cookies.token;
        req.body.token=req.cookies.token;
        const gateway=await axios.get(`${process.env.GATEWAY_URL}/order/getOrderById`,req.body);
        return res.json({
            msg:"order fetched succesfully"
        })        
    } catch (error) {
        return res.status(500).json({message:error.message}); 
    }
})

router.post('/updateOrder',async()=>{
    try {
        const token=req.cookies.token;
        req.body.token=req.cookies.token;
        const gateway=await axios.post(`${process.env.GATEWAY_URL}/order/update`,req.body);
        return res.json({
            msg:"order updated succesfully"
        })        
    } catch (error) {
        return res.status(500).json({message:error.message}); 
    }
})

router.post('/deleteOrder',async()=>{
    try {
        const token=req.cookies.token;
        req.body.token=req.cookies.token;
        const gateway=await axios.post(`${process.env.GATEWAY_URL}/order/delete`,req.body);
        return res.json({
            msg:"order deleted succesfully"
        })        
    } catch (error) {
        return res.status(500).json({message:error.message}); 
    }
})

module.exports=router