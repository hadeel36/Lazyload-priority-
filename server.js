
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

var request = require('request');
var path = require('path');

//use built in middleware to serve static files
app.use(express.static(path.join(__dirname,'dist')));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
/**
 * Get charts body data
 *
 * @param req
 * @param res
 * @returns {JSONObject}
 */
app.get('/charts?:next?', function(req, res) {
	var next = parseInt(Object.keys(req.query)[0]);

  	fs.readFile('./charts-data.json', function (err, data) {
  	  if (err) throw err;

  	  var chartsData = JSON.parse(data);
  	  var dataRes = {"data": [], "next": 0};
      var priority = next ? next : chartsData[0].priority;
  	  for (var i=0; i < chartsData.length; i++) {
        console.log(priority)
  	  	if (chartsData[i].priority === priority) {
  	  		dataRes.data.push(chartsData[i]);
  	  	} else if (chartsData[chartsData.length-1].priority === priority) {
  	  		dataRes.next = null;
  	  	} else if (chartsData[i].priority > priority){
  	  		dataRes.next = chartsData[i].priority;;
  	  		break;
  	  	}
  	  }
  	  res.json(dataRes);
  	});
});

//set express to listen for requests
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log('...Server now listening on port ' + port);
});
