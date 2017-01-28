(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    //set up states
    $stateProvider
      .state('home', {
        url: '/home',
        template : '<div>Test home</div>'
      });
  }
})();
