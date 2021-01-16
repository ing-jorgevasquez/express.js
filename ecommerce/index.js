const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const productsRouter = require('./routes/views/products')
const productsApiRouter = require('./routes/api/products')

// app
const app = express();

// middlewares
app.use(bodyParser.json());

// views setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// routes
app.use('/products', productsRouter);
app.use('/api/products', productsApiRouter);

// server
const server = app.listen(8000, function(){
    console.log(`listening in port http://localhost:${server.address().port}`);
})