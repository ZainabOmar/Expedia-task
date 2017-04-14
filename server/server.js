var express = require('express');
var handlers = require('./handlers.js');
// var api = 'https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel'
var port = 8000;

var app = express();

require('./middleware.js')(app, express);

app.get(api, handlers.getDataByCity);

app.listen(process.env.PORT || port);

console.log('app is listening on ' + port)