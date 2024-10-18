const express = require('express');
const router = express.Router();
const {BPP_URLS} = require('../constant');
const axios = require('axios');

router.post('/login', async (req, res) => {
    try {
        //console.log(req.body);
        const gateway = await axios.post(`${BPP_URLS[0]}/user/login`, req.body);
        console.log(gateway);
        return res.status(200).json(gateway.data);
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
});

router.post('/register', async (req, res) => {
    try {
        console.log(req.body);
        let gateway;
        for(let i=0;i<BPP_URLS.length;i++){
             gateway = await axios.post(`${BPP_URLS[i]}/user/register`, req.body);
        }
        console.log(gateway)
        return res.json({
            message: 'Register successfully',
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});


module.exports = router