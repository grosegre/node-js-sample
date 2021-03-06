var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

var string = fs.readFileSync(__dirname + '/index.html', 'UTF-8');


app.get('/', function(request, response) {
 response.send(string);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
