let expect = require('chai').expect;
let sinon = require('sinon');

let webhookGet = require('./webhook-get');

describe('FB Webhook GET', () => {

	let req,res,res_send;

	beforeEach('set up request and response stubs', () => {
		req = res = {};

		req.query = [];
		req.query['hub.verify_token'] = 'AveCaesar';
		req.query['hub.challenge'] = 'challenge';

		res_send = res.send = sinon.spy();
	});

	it('should look for the Verify Token and respond with the challenge sent in the verification request', () => {

		webhookGet(req, res);
		//noinspection BadExpressionStatementJS
		expect(res_send.calledWith('challenge')).to.be.true;
	});

	it('should look for the Verify Token and respond with error if the FB_ACCESS_TOKEN is wrong', () => {

		req.query['hub.verify_token'] = 'wrong FB_ACCESS_TOKEN';

		webhookGet(req, res);
		//noinspection BadExpressionStatementJS
		expect(res_send.calledWith('Error, wrong verify token')).to.be.true;
	});
});