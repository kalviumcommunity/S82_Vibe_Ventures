const express = require('express');

const router = express.Router();
router.get('/getdata',async()=>{
    try{
        const data={
            name:"hello",
            age:"18"
        }
        res.status(200).json({message:"success",info:data});


    }catch(e)
    {
        res.status(500).send(e.message)
    }
})
router.post()

module.exports = router