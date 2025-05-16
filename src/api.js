const express = require('express');
const mongoose = require ('mongoose');
const app = express();
const port = 3000;
require("dotenv");

const productRoutes=require('./routes/product.routes');
const userroutes=require('./routes/user.routes');
mongoose.connect(process.env.URL_CONNECTION).then((db)=>{
     console.log("Base de datos conectada");
});

app.get('/api',(req, res)=>{
    res.send("Hola estamos en la cun")
})

app.use('/products',productRoutes)
app.use('/login', userroutes)


app.listen(port,()=>{
    console.log(`Hola este es el puerto ${port}`)
})
