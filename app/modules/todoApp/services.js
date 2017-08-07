'use strict';

// Declare app level module which depends on views, and components
angular.module('mainApp').
service('driversDataService',function($http){
	 var self = this;

   self.getDrivers = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
      });
   }

   return self;
});