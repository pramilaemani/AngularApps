'use strict';

/* Controllers */

angular.module('myApp.controllers', ['ngRoute']).
  controller('AppCtrl', function ($scope, appNameService) {

    $scope.name = appNameService.appName;

  });
