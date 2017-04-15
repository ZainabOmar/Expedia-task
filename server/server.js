var express = require('express');
var handlers = require('./handlers.js');
var port = process.env.PORT || 8000

var app = express();

require('./middleware.js')(app, express);

app.post('/api/getByCity', handlers.getByCity);
app.post('/api/getByLengthOfStay', handlers.getByLengthOfStay);

app.listen(port, function() {
    console.log("App is running on port " + port);
});
