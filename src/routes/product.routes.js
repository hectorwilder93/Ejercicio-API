const router= require("express").Router();
const ProductController = require("../controllers/product.controller");


router.post('/create', ProductController.crearProducto);

router.get('/list', ProductController.listarProductos);

router.get('/id', (req, res)=>{
    res.status(200).json({"message":"Estos son los datos de un producto"});
})

module.exports = router; 