(function(){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var toBuy = this;

    toBuy.toBuyList = ShoppingListCheckOffService.getToBuyList();

    toBuy.addItem = function (name, quantity, index){
      ShoppingListCheckOffService.addToBoughtList(name, quantity, index)
    };
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var bought = this;

    bought.boughtList = ShoppingListCheckOffService.getBoughtList();
  };

  function ShoppingListCheckOffService(){
    var service = this;

    //hold the items to buy
    var toBuy = [];
    //hold the items bought
    var bought = [];

    //initialy populated items
    var items = [{
      name : 'Cookies',
      quantity : 10
    },{
      name : 'Chips',
      quantity : 10
    },{
      name : 'CocaCola',
      quantity : 5
    },{
      name : 'Banana',
      quantity : 10
    },{
      name : 'Apples',
      quantity : 20
    }];

    for (var i = 0; i < items.length; i++) {
      toBuy.push(items[i]);
    }

    service.addToBoughtList = function (itemName, itemQuantity, itemIndex){
      var item = {
        name : itemName,
        quantity : itemQuantity
      };
      //remove from the to buy array
      toBuy.splice(itemIndex, 1);
      //add to the bought list
      bought.push(item);
    };

    service.getToBuyList = function(){
      return toBuy;
    };

    service.getBoughtList = function(){
      return bought;
    };
  };

})();
