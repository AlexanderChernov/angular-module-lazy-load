/**
 * Created by Alexander Chernov on 11/4/14.
 */

angular.module('listModule', [])
  .controller('listController', ['$scope', function ($scope) {
    $scope.module = 'List module';
  }])
  .config(function () {
    console.log('List module: configuration.');
  })
  .run(function () {
    console.log('List module: run.');
  });