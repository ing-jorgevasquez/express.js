const express = require('express');
const path = require('path');
const app = express();
const productsRouter = require('./routes/products')

app.use('/products', productsRouter);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

const server = app.listen(8000, function(){
    console.log(`listening in port http://localhost:${server.address().port}`);
})