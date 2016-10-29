// requiring dependencies.
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

// creates var for express app
var app = express();

// our port
var appPORT = process.env.PORT || 3000;

// enabling express to serve static files (per advise from slack)
app.use(express.static('public'));

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// requiring the files with routing information.
require('./routing/api-routes.js')(app); 
require('./routing/html-routes.js')(app);

// Starts our server.
app.listen(appPORT, function() {
    console.log("Listening on port: " + appPORT);
});