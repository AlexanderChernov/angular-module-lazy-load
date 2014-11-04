/**
 * Created by Alexander Chernov on 11/4/14.
 */

angular.module('app', ['ui.router', 'oc.lazyLoad'])
  .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider',
    function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

      $ocLazyLoadProvider.config({
        loadedModules: ['app'],
        asyncLoader: require
      });

      $stateProvider
        .state('chart', {
          url: "/",
          controller: 'chartController',
          template: "<h1>{{ module }}</h1>",
          resolve: {
            load: ['$ocLazyLoad', function($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'chartModule',
                files: ['javascripts/chart-module.js'],
                cache: false
              });
            }]
          }
        })
        .state('list', {
          url: "/list",
          controller: 'listController',
          template: "<h1>{{ module }}</h1>",
          resolve: {
            load: ['$ocLazyLoad', function($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'listModule',
                files: ['javascripts/list-module.js'],
                cache: false
              });
            }]
          }
        })
        .state('table', {
          url: "/table",
          controller: 'tableController',
          template: "<h1>{{ module }}</h1>",
          resolve: {
            load: ['$ocLazyLoad', function($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'tableModule',
                files: ['javascripts/table-module.js'],
                cache: false
              });
            }]
          }
        });
        $urlRouterProvider.otherwise("/");
    }])
  .controller('appController', ['$scope', function ($scope) {
  }]);
