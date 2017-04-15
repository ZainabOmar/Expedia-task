var express = require('express');
var handlers = require('./handlers.js');
var port = process.env.PORT || 8000

var app = express();

require('./middleware.js')(app, express);

app.get('/api/expedia', handlers.getByDestination);

server.listen(port, function() {
    console.log("App is running on port " + port);
});
