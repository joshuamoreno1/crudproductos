'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('productosApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));
    
  it('Test Initial Variables', function() {
     expect(scope.listProducts.length).toEqual(3);
  });
});
