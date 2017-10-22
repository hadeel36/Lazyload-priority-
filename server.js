
var express = require('express');
var app = express();

var request = require('request');
var path = require('path');

const offersUrl = 'https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel';

//use built in middleware to serve static files
app.use(express.static(path.join(__dirname,'dist')));


//set express to listen for requests
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log('...Server now listening on port ' + port);
});
