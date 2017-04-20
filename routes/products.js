/*jshint esversion:6*/
const express = require('express');
const router = express.Router();

let productId = 0;

let collection = [];



router.route('/')
  .get(function(req, res) {
    res.json(`Product id = ${productId}`);
  })
  .post(function(req, res) {
  	productId++;
  	collection.push(req.body);
  	console.log(collection);
  	let name = req.body.name;
  	let price = parseFloat(req.body.price);
  	let inventory = parseFloat(req.body.inventory);
    res.send(`Product: ${productId} \r\n Product Name: ${name}\r\n  Product Price: ${price}\r\n  Product Inventory: ${inventory}`);
  })
  .put(function(req, res) {
    res.send('Updated the Product');
  })
  .delete((req,res) =>{
  	res.json({success: true});
  });




module.exports = router;