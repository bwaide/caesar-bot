let expect = require('chai').expect;
let unroll = require('unroll');
let bye = require('./bye-gear.js');

// wrap mochas it function
unroll.use(it);

describe('Bye gear', () => {
	
	unroll('should react to #message', (done, fixture) => {
		expect(bye.regex.test(fixture.message)).to.equal(true);
		done();
	}, [
		['message'],
		['Und Tschüß!'],
		['tschüss'],
		['tschö'],
		['ciao ciao'],
		['Na, dann adios'],
		['Auf wiedersehen'],
		['Auf wiederhören'],
		['Auf wiederlesen'],
		['mach gut'],
		['mach\'s gut'],
		['machs gut'],
		['machet jut'],
		['mach et jut']
	]);

	it('when executed should return a Caesar like response', () => {
		let response = bye.execute("Bye");

		expect(response).to.be.oneOf(['Ave!', 'Vale!']);
	});
	
});