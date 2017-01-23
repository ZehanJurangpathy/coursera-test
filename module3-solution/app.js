(function(){
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItems);

  //foundItems directive
  function FoundItems(){
    var ddo = {
      templateUrl : 'foundItems.html'
    };

    return ddo;
  };

  NarrowItDownController.$inject = ['MenuSearchService']
  function NarrowItDownController(MenuSearchService){
    var narrow = this;
    //holds the searchTerm
    narrow.searchTerm = '';
    narrow.found = [];
    //click event
    narrow.narrowItDown = function () {
      var promise = MenuSearchService.getMatchedMenuItems();

      promise.then(function(result){
        var foundItems = result.data.menu_items;
        console.log(foundItems.length);
        //loop through and find matching description
        for (var i = 0; i < foundItems.length; i++) {
          //console.log(foundItems.menu_items[i].description);
          if (!foundItems[i].description.includes(narrow.searchTerm)) {
            //if not found remove from the array
            foundItems.splice(i, 1);
          }
        }
        //assign to found
        narrow.found = foundItems;
      });
    };
  };

  MenuSearchService.$inject = ['$http']
  function MenuSearchService($http){
    var service = this;

    service.getMatchedMenuItems = function(){
      return $http({
        method : 'GET',
        url : ("http://davids-restaurant.herokuapp.com/menu_items.json")
      });
    };
  };
})();
