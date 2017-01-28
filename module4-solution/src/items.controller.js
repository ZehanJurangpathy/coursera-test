(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['itemList']
  function ItemsController(itemList) {
    var items = this;
    items.categoryItemsList = itemList.data.menu_items;
  }
})();
