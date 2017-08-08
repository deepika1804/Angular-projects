'use strict';

// Declare app level module which depends on views, and components
angular.module('mainApp').
controller('driversController',['$scope','driversDataService',function($scope,driversDataService){
	 $scope.driversList = [];
	 
	 driversDataService.getDrivers().success(function(response){
	 	$scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
	 });

}])
.controller('driverDetailsController',['$scope','driversDataService','$routeParams',function($scope,driversDataService,$routeParams){
	$scope.id = $routeParams.id;
    $scope.races = [];
    $scope.driver = null;

    driversDataService.getDriverDetails($scope.id).success(function (response) {
        $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]; 
    });

    driversDataService.getDriverRaces($scope.id).success(function (response) {
        $scope.races = response.MRData.RaceTable.Races; 
    }); 

}]).directive('geolocationDir',['jQuery',function($){
    return {
        restrict : 'A',
        controller: ['$scope', function tabsController($scope) {}],
        link:function(scope, element, attrs){
            var message=element.find('#message');
        var demo=element.find('#demo');
        demo.on('click',getLocation);
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition,showError);
            } else {
                message.innerHTML = "Geolocation is not supported by this browser.";
            }
        }
        function showPosition(position) {
            var latlon = position.coords.latitude + "," + position.coords.longitude;
            var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
            +latlon+"&zoom=14&size=600x400&sensor=false";
            document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
        }
        function showError(error){
            message.innerHTML = "Sorry sharing position is not allowed.";
        }
        }
    }
}]);