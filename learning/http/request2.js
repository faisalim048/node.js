var request = require('request');
var inspect = require('util').inspect;
var options = {
	url: 'http://localhost:4001/abc/def',
	method: 'PUT',
	headers: {
		'X-My-Header': 'Field Nation'
	}
};
/*
request.post('http://localhost:4001/abc/def', function(err, res, body) {
	if (err) { throw err; }
	
	console.log(inspect({
		err: err,
		res: {
			statusCode: res.statusCode
		},
		body: JSON.parse(body)
	}))
});
*/

request(options, function(err, res, body) {
	if (err) { throw err; }
	console.log(inspect({
		err: err,
		res: {
			statusCode: res.statusCode,
			headers: res.headers
		},
		body: body
	}))
});