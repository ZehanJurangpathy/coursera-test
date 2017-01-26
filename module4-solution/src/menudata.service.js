(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('ApiBasePath', 'http://davids-restaurant.herokuapp.com');

  MenuDataService.$inject = ['$http', 'ApiBasePath'];
  function MenuDataService($http, ApiBasePath){
    var menuService = this;

    menuService.getAllCategories = function () {
      return $http({
        method : 'GET',
        url : (ApiBasePath + "/categories.json")
      });
    };

    menuService.getItemsForCategory = function (categoryShortName) {
      return $http({
        method : 'GET',
        url : (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
      });
    };
  }
})();
