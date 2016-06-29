let expect = require('chai').expect;
let sinon = require('sinon');

let indexGet = require('./index-get');
let info = require('./info');

describe('Index implementation', () => {

	describe('GET request', () => {

		it('should send info object to json method', () => {
			let req = {};
			let res = {};
			let spy;

			spy = res.json = sinon.spy();

			indexGet(req, res);

			expect(spy.calledWithMatch(info)).to.equal(true);
		});
	});
});