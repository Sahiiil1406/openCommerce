const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');
const {BPP_URLS}=require('../constant.js')

router.post('/usePlatform', async (req, res) => {
  try {
   const {url}=req.body;
   const data=[...BPP_URLS,url]
    console.log(data)
    
    fs.writeFile(path.join(__dirname, '../constant.js'), `const BPP_URLS=${JSON.stringify(data)}\n\nmodule.exports = {\n    BPP_URLS\n}`, 'utf8');
    res.send('Successfully updated the platform');
  } catch (error) {
    console.error('Error reading file:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
