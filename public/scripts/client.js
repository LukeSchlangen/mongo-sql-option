// angular start up
var basicApp = angular.module("BasicApp", []);

basicApp.controller('BasicController', ['$scope', function($scope){
  $scope.angularTomatoData = "Angular Tomato";
}]);
