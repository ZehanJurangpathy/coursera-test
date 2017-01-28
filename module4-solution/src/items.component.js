(function () {
  'use strict';

  angular.module('MenuApp')
  .component('items',{
    templateUrl : "/components/itemComponent.html",
    bindings :{
      itemList : "<"
    }
  })
})();
