/**
 * Created by Alexander Chernov on 11/4/14.
 */
require.config({
  baseUrl: 'javascripts',
  paths: {
    'jquery'   : 'jquery/dist/jquery',
    'angular'  : 'angularjs/angular',
    'uiRouter' : 'angular-ui-router/release/angular-ui-router',
    'onLazyLoad' : 'oclazyload/dist/ocLazyLoad',
    'app'      : 'app'
  },
  shim: {
    'angular': ['jquery'],
    'uiRouter': ['angular'],
    'onLazyLoad': ['angular'],
    'app': ['angular', 'uiRouter', 'onLazyLoad']
  }
});

require(['angular', 'app'], function() {
  angular.bootstrap(document.body, ['app']);
});