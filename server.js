
var express = require('express');
var app = express();
var fs = require('fs');

var request = require('request');
var path = require('path');

//use built in middleware to serve static files
app.use(express.static(path.join(__dirname,'dist')));

/**
 * Get offers body
 *
 * @param req
 * @param res
 * @returns {JSONObject}
 */
app.get('/charts', function(req, res) {
  	var obj;
  	fs.readFile('./charts-data.json', function (err, data) {
  	  if (err) throw err;
  	  obj = data.toString();
  	  res.json(obj);
  	});
});

//set express to listen for requests
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log('...Server now listening on port ' + port);
});
