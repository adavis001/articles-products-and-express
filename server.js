/*jshint esversion:6*/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const productsRoutes = require('./routes/products');
const PORT = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/products', productsRoutes);

app.get('/', function(req,res) {
	res.send('Hello World!');
});


const server = app.listen(PORT, () => {
	console.log(`server listening on port ${PORT}`);
});  