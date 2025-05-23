const ProductModel = require("../models/product");

const ProductController = {
    crearProducto: async function(req, res){
        try {
            const product= new ProductModel(req.body);
            await product.save();
            res.status(201).json({
                mensaje : "Producto creado exitosamente",
                body:product
            });
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //Listar productos
    listarProductos : async function (req, res) {        
    }


}

module.exports = ProductController;