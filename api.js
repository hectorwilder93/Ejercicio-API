const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req, res)=>{
    res.send("Hola estamos en la cun")
})

app.listen(port,()=>{
    console.log(`Hola este es el puerto ${port}`)
})
