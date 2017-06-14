var express = require('express');
var path = require('path');
var router = express.Router();
//------------------------------------

router.get( '/', function( req, res ){
  console.log( 'base url was hit' );
  res.sendFile( path.resolve( 'views/index.html' ) );
}); // end base url

module.exports = router;
