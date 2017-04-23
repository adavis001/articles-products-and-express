/*jshint esversion:6*/


let collection = [];
let productId = 1;


const addProduct = function(obj, cb){
	obj.price = parseFloat(obj.price);
	obj.inventory = parseInt(obj.inventory);
	collection.push(obj);
	obj.id = productId;
	productId++;
	console.log(collection);
	cb(null, obj);
};

const findId = function(obj, cb){
	for (var i = 0; i < collection.length; i++) {
		if(parseInt(obj.id) === collection[i].id){
			return cb(null, collection[i]);
		}
	}
	cb('productId not found');
};

module.exports = {
	findId: findId,
	collection: collection,
	addProduct: addProduct};