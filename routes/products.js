/*jshint esversion:6*/
const express = require('express');
const router = express.Router();
const productDB = require('../db/products');

router.route('/')
  .post(function(req, res) {
  	productDB.addProduct(req.body, function(err, product){
  		if(err){
  			throw new Error(err);
  		}
    	res.send(`Product: ${product.id} \r\n Product Name: ${product.name}\r\n  Product Price: ${product.price}\r\n  Product Inventory: ${product.inventory}`);
    	res.redirect('/products');
  	});
  });

router.route('/:id')
  .put(function(req, res) {
    res.send('Updated the Product');
  })
  .delete((req,res) =>{
  	res.json({success: true});
  });
module.exports = router;