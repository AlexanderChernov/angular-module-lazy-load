/**
 * Created by Alexander Chernov on 11/4/14.
 */

angular.module('chartModule', [])
  .controller('chartController', ['$scope', function ($scope) {
    $scope.module = 'Chart module';
  }])
  .config(function () {
    console.log('Chart module: configuration.');
  })
  .run(function () {
    console.log('Chart module: run.');
  });