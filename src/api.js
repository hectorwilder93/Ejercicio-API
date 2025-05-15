const express = require('express');
const app = express();
const port = 3000;

const productRoutes=require('./routes/product.routes');
const userroutes=require('./routes/user.routes')

app.get('/api',(req, res)=>{
    res.send("Hola estamos en la cun")
})

app.use('/products',productRoutes)
app.use('/login',userroutes)


app.listen(port,()=>{
    console.log(`Hola este es el puerto ${port}`)
})
