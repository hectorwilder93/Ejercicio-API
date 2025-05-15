const router= require("express").Router();
router.get('/create', (req, res)=>{
    res.status(200).json({"message":"Estamos realizando una prueba"});
});

router.get('/list', (req, res)=>{
    res.status(200).json({"message":"Esta es una lista de productos"});
})

router.get('/id', (req, res)=>{
    res.status(200).json({"message":"Estos son los datos de un producto"});
})

module.exports = router; 