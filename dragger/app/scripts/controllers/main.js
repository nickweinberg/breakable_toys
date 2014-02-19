'use strict';

angular.module('draggerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.handleDrop = function() {
      console.log('Item has been dropped');
    }; 

    // add range function
    $scope.range = function(min, max, step) {
      step = (step == undefined) ? 1: step;
      var input = [];
      for (var i=min; i<=max; i+=step) {
        input.push(i);
      }
      return input;
    };


  });
