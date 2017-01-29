(function () {
  'use strict';

  angular.module('MenuApp')
  .component('categories',{
    templateUrl : 'components/categoriesComponent.html',
    bindings : {
      categoryList : "<"
    }
  });
})();
