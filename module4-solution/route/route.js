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
        url: '/items/{categoryShortName}',
        templateUrl: 'items.html',
        controller:"ItemsController as items",
        resolve: {
          itemList:['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
          }]
        }
      })

      .state('home', {
        url: '/',
        templateUrl: 'home.html'
      });
  }
})();
