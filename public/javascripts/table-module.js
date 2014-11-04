/**
 * Created by Alexander Chernov on 11/4/14.
 */

angular.module('tableModule', [])
  .controller('tableController', ['$scope', function ($scope) {
    $scope.module = 'Table module';
  }])
  .config(function () {
    console.log('Table module: configuration.');
  })
  .run(function () {
    console.log('Table module: run.');
  });