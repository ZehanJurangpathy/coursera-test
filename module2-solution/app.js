(function(){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var toBuy = this;

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

    toBuy.toBuyList = ShoppingListCheckOffService.getToBuyList();

    for (var i = 0; i < items.length; i++) {
      toBuy.toBuyList.push(items[i]);
    }
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){

  };

  function ShoppingListCheckOffService(){
    var service = this;

    //hold the items to buy
    var toBuy = [];
    //hold the items bought
    var bought = [];

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
