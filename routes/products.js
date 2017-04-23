/*jshint esversion:6*/
const express = require('express');
const router = express.Router();
const productDB = require('../db/products');

router.route('/')
.get((req,res) => {
	res.render('index', {
		collection: productDB.collection
	});
})

.post(function(req, res) {
  	productDB.addProduct(req.body, function(err, product){
  		if(err){
  			throw new Error(err);
  		}
    	res.redirect('/products');
  	});
});

router.route('/:id')
.get((req,res) => {
	productDB.findId(req.params, function(err, product) {
		if(err){
			throw new Error(err);
		}
	res.send(product);
	});
})
  .put(function(req, res) {
    res.send('Updated the Product');
  })
  .delete((req,res) =>{
  	res.json({success: true});
  });
module.exports = router;  