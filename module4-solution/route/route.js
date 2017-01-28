(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    //set up states
    $stateProvider
      .state('categories', {
        url: '/categories',
        templateUrl : 'categories.html',
        controller: 'CategoriesController as category',
        resolve: {
          categoryList: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })

      .state('items', {
        url: '/items',
        templateUrl: 'items.html'
      })

      .state('home', {
        url: '/',
        templateUrl: 'home.html'
      });
  }
})();
