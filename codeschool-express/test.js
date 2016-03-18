var request = require('supertest');
var app = require('./app');

describe('Requests ot the root path', function(){
	it('Returns a 200 status code', function(){
		request(app)
		.get('/')
		.expect(200)
		.end(function(err){
			if(err) throw err;
			console.log('we survived...');
			done();
		});

	});
});

describe('Listing cities on /cities', function(){
	it('Returns a 200 status code', function(){
		request(app)
		.get('/cities')
		.expect(200)
		.end(function(err){
			if(err) throw err;
			console.log('we made it to zootopia...');
			done();
		});

	});
});

it('Returns JSON format', function(done){
	request(app)
		.get('/cities')
		.expect('Content-Type', /json/)
		.end(function(error){
			if(error) throw error;
			console.log("we are connected..")
			done();
		});
});

it('Returns initial cities', function(done){
	request(app)
		.get('/cities')
		.expect(JSON.stringify(['zootopia', 'persia', 'atlantic city']))
		.end(function(error){
			if(error) throw error;
			console.log("we have cities..")
			done();
		});
});


it('Returns HTML format', function(done){
		request(app)
		.get('/')
		.expect('Content-Type', /html/)
		.end(function(error){
			if(error) throw error;
			console.log("classic HTML..")
			done();
		});
});

it('Returns index file with cities', function(done){
		request(app)
		.get('/')
		.expect(/cities/i, done);
		
});