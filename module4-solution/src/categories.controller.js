(function(){
  'use strict';

  angular.module('MenuApp')
  .controller('CategoriesController' , CategoriesController);

  CategoriesController.$inject = ['categoryList'];
  function CategoriesController(categoryList) {
    var category = this;
    category.categories = categoryList.data;
  }
})();
