const express = require('express');
const mongoose = require ('mongoose');
const cors= require("cors");
const app = express();
const port = 3000;
require("dotenv").config();



const productRoutes=require('./routes/product.routes');
const userRoutes=require('./routes/user.routes');
mongoose.connect(process.env.URL_CONNECTION).then((db)=>
     console.log("Base de datos conectada")
);

app.get('/api',(req, res)=>{
    res.send("Hola estamos en la cun")
})

app.post('/',(req, res)=>{
    res.send("Producto guardado")
})

app.use(cors());
app.use(express.urlencoded({
    extended:false
}))
app.use('/products',productRoutes)
app.use('/login', userRoutes)


app.listen(port,()=>{
    console.log(`Hola este es el puerto ${port}`)
})
