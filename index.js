var express = require('express');
var wintersmith = require('wintersmith');
var opn = require('opn');
var fs = require('fs');

var app = express();

var env = wintersmith('./yts-wintersmith-template-copy/config.json');
var clientId = '7891011';

app.get('/', function(req, res) {
	env.preview(function(err, server) {
		if (err) throw err;
		console.log('Server running');
		opn('http://localhost:8080');

		res.send('View your preview at localhost:8080');
	});
});

app.get('/build', function(req, res) {
	fs.mkdir('./build/' + clientId, function(result){
		if (errno = 'EEXIST') {
			console.log('That location already exists. Replacing old files')
		}
		env.build('./build/' + clientId, function(err, result) {
		console.log('Build Complete');
		console.log('Result is: ' + result);

		res.send('Your webpage has been built');
		})
	});
});

app.listen(3000, function() {
	console.log('Listening on port 3000');
});
