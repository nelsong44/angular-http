//requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/index'); //index.js
var songs = require('./routes/songs'); //songs.js

// globals
var port = process.env.PORT || 3000;

//uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', index); //index.js  //this is our base url
app.use('/songs', songs); //songs.js

//connect server
app.listen(port, function() {
  console.log('server listening on port ', port);
}); // end connect

//base route -- no longer neccessary -- linking within index.js route
// app.get('/', function(req, res) {
//   res.sendFile(path.resolve('views/index.html'));
// });
