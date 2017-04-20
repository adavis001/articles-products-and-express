/*jshint esversion:6*/
const chai = require('chai');
const expect = chai.expect;
const articleExpress = require('../articleExpress.js');

describe('articleExpress', function(){
	it('should be a function', () =>{
		expect(articleExpress).to.be.a('function');
	});
});