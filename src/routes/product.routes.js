const router= require("express").Router();
router.get('/create', (req, res)=>{
    res.status(200).json({"message":"Estamos realizando una prueba"});
})

module.export = router; 