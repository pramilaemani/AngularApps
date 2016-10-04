'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  .controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {
    console.log("in the controller");
    $http({
      method: 'GET',
      url: '/services/appServices/allVinDetails'
    }).
    success(function (data, status, headers, config) {
      $scope.allVinDetails = data.allVinDetails;      
    }).
    error(function (data, status, headers, config) {
      $scope.allVinDetails = 'Error!';
    });

    $http({
      method: 'GET',
      url: '/services/appServices/allCampDetails'
    }).
    success(function (data, status, headers, config) {
      $scope.allCampDetails = data.allCampDetails;      
    }).
    error(function (data, status, headers, config) {
      $scope.allCampDetails = 'Error!';
    });
  }]).
  controller('CampDetCtrl', ['$scope', '$http', '$routeParams','$location', function ($scope, $http, $routeParams,$location) {    
    
    $scope.getCampDetails = function(){ 
         
      $http.get('/services/appServices/getSelCampDetails/'+$scope.form.vinid).
      success(function(data){
        $location.path('/getCampDetails');
        $scope.selCampDetails = data.selCampDetails;
      });
    };    
  }]).
  controller('VinDetCtrl', ['$scope', '$http', '$routeParams','$location', function ($scope, $http, $routeParams,$location) {
    
    $scope.getVinDetails = function(){
    
      $http.get('/services/appServices/getSelVinDetails/'+$scope.form.campid).
      success(function(data){
        $location.path('/getVinDetails');
        $scope.selVinDetails = data.selVinDetails;
      });
    }; 

  }]);
