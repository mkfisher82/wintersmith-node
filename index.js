var express = require('express');
var wintersmith = require('wintersmith');
var opn = require('opn');

var app = express();

var env = wintersmith('./yts-wintersmith-template-copy/config.json');

app.get('/', function(req, res) {
	env.preview(function(err, server) {
		if (err) throw err;
		console.log('Server running');
		opn('http://localhost:8080', {options: '--new-window'});

		res.send('View your preview at localhost:8080');
	});
});

app.listen(3000, function() {
	console.log('Listening on port 3000');
});
