(function(){
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService);

  NarrowItDownController.$inject = ['MenuSearchService']
  function NarrowItDownController(MenuSearchService){
    var narrow = this;
    //holds the searchTerm
    narrow.searchTerm = '';
    narrow.found = '';
    //click event
    narrow.narrowItDown = function () {
      narrow.found = MenuSearchService.getMatchedMenuItems(narrow.searchTerm);
    };
  };

  MenuSearchService.$inject = ['$http']
  function MenuSearchService($http){
    var service = this;

    service.getMatchedMenuItems = function(searchTerm){
      console.log(searchTerm);
      var response = $http({
        method : 'GET',
        url : ("http://davids-restaurant.herokuapp.com/menu_items.json")
      }).then(function(result){
        var foundItems = result.data.menu_items;
        //loop through and find matching description
        for (var i = 0; i < foundItems.length; i++) {
          //console.log(foundItems.menu_items[i].description);
          if (!foundItems[i].description.includes(searchTerm)) {
            //if not found remove from the array
            foundItems.splice(i, 1);
          }
        }
        console.log(foundItems.length);
        //return found items
        return foundItems;
      });
    };
  };
})();
