const express = require('express');
const app = express();
const port = 3000;

const productRoutes=require('./routes/product.routes');

app.get('/api',(req, res)=>{
    res.send("Hola estamos en la cun")
})

app.use('/products',productRoutes)

app.listen(port,()=>{
    console.log(`Hola este es el puerto ${port}`)
})
