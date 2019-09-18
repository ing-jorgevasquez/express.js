const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const productsRouter = require('./routes/products')
const productsApiRouter = require('./routes/api/products')

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.json());

app.use('/products', productsRouter);
app.use('/api/products', productsApiRouter);

const server = app.listen(8000, function(){
    console.log(`listening in port http://localhost:${server.address().port}`);
})