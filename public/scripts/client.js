//declare angular module app
var myApp = angular.module('myApp', []);

myApp.controller('HttpController', function($http) { //$http bullt-in- have to pass in as parameter to use
  console.log('NG linked');
  var vm = this; //references our HttpController
  vm.startUpFunction = function() {
    console.log('in startUpFunction');
    $http({
      method: 'GET',
      url: '/songs'
    }).then(function(response) {
      console.log('back with', response); // the songs array as an object
    }); //end http
  }; //end startUpFunction

  vm.otherGet = function() { // same results as above, but with different syntax ( on button click)
    console.log('I am here using the other syntax');
    $http.get('/songs').then(function(response){
      console.log('back with', response);
    }); // end get
  }; // end otherGet
}); // end HttpController
