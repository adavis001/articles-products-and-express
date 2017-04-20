/*jshint esversion:6*/


let collection = [];
let productId = 1;


const addProduct = function(obj, cb){
	collection.push(obj);
	obj.id = productId;
	productId++;
	console.log(collection);
	cb(null, obj);
};

module.exports = {addProduct: addProduct};