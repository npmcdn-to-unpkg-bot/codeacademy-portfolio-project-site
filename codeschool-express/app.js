var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(request, respond){
	respond.send('OK');
});

app.get('/cities', function(request, respond){
	var cities = ['zootopia', 'persia', 'atlantic city']
	respond.json(cities);
});

module.exports = app;
