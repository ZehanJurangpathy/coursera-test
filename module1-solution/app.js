(function(){
  'user strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.ItemsForLunch = "";
    $scope.messageToDisplay = "";
    $scope.ItemCount = 0;

    $scope.CheckItems = function(){
      CheckItemCount($scope.ItemsForLunch);
      DisplayMessage($scope.ItemCount);
    };

    function CheckItemCount(itemList){
      //check if items are empty
      if (itemList.length === 0) {
        $scope.ItemCount = 0;
      }
      else{
        //check for the item count
        $scope.ItemCount = itemList.split(',').length;
      }
    };

    function DisplayMessage(count){
      if(count === 0){
        $scope.messageToDisplay = "Please enter data first";
      }
      else if (count > 3) {
        $scope.messageToDisplay = "Too much!";
      }
      else {
        $scope.messageToDisplay = "Enjoy!";
      }
    };
  };
})();
