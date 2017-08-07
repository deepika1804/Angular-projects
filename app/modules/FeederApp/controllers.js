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
}]);