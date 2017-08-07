'use strict';

// Declare app level module which depends on views, and components
angular.module('mainApp',['ngRoute'])
	.config(['$locationProvider', '$routeProvider',
	    function config($locationProvider, $routeProvider) {
	      $locationProvider.hashPrefix('');

	      $routeProvider.
	      	when('/home', {
	          templateUrl: 'modules/home/partials/resume.tpl.html',
	          controller: 'homeController'
	        }).
	        when('/feeder', {
	          templateUrl: 'modules/FeederApp/partials/feeder.tpl.html',
	          controller: 'driversController'
	        }).
	        when('/feeder/:id',{
	          templateUrl: 'modules/FeederApp/partials/feeder-details.tpl.html',
	          controller: 'driverDetailsController'
	        }).
	        when('/todo', {
	          templateUrl: 'modules/todoApp/todo.tpl.html',
	          controller: 'tasksController'
	        }).
	        otherwise('/home');
	    }
  ]).constant('jQuery', window.jQuery);