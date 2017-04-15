var express = require('express');
var handlers = require('./handlers.js');
var port = 8000;

var app = express();

require('./middleware.js')(app, express);

app.get('/api/expedia', handlers.getByDestination);

app.listen(process.env.PORT || port);

console.log('app is listening on ' + port)