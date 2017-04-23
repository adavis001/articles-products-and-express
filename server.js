/*jshint esversion:6*/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const productsRoutes = require('./routes/products');
const handlebars = require('express-handlebars');
const PORT = 3000;

const hbs = handlebars.create({
  extname: '.hbs',
  defaultLayout: 'main'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/products', productsRoutes);

app.get('/', function(req,res) {
	res.send('Hello World!');
});


const server = app.listen(PORT, () => {
	console.log(`server listening on port ${PORT}`);
});  