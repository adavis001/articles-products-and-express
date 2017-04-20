/*jshint esversion:6*/
const express = require('express');
const router = express.Router();
const productDB = require('../db/products');






router.route('/')
  .get(function(req, res) {
    res.json(`Product id = ${productId}`);
  })
  .post(function(req, res) {
  	productDB.addProduct(req.body, function(err, product){
  		if(err){
  			throw new Error(err);
  		}
    	res.send(`Product: ${product.id} \r\n Product Name: ${product.name}\r\n  Product Price: ${product.price}\r\n  Product Inventory: ${product.inventory}`);
  	});
  	// let name = req.body.name;
  	// let price = parseFloat(req.body.price);
  	// let inventory = parseFloat(req.body.inventory);
  })
  .put(function(req, res) {
    res.send('Updated the Product');
  })
  .delete((req,res) =>{
  	res.json({success: true});
  });




module.exports = router;