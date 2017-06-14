var express = require('express');
var router = express.Router();

//------------------------------------------
var songs = [];

var temp = {
  song: 'mmmBop',
  artist: 'Hansen'
}; //end object

songs.push(temp);

var temp = {
  song: 'mmmm  mmmmm',
  artist: 'Crash Test Dummies'
}; //end object
songs.push(temp);

router.get('/', function(req, res) {
  res.send(songs);
}); // end get

module.exports = router;
