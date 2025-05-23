const router= require("express").Router();
router.get('/login', (req, res)=>{
    res.status(200).json({"message":"El usuario se esta login"});
})

module.exports=router;