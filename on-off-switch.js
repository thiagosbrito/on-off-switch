(function (){
  var module;

  module = angular.module('onOffSwitch', []);
  module.directive('onOffSwitch', function(){
    return {
      scope: {
        active: '='
      },
      restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
      templateUrl: '/scripts/directives/on-off-switch/on-off-switch.html',
      replace: true,
      transclude: true,
      link: function($scope, iElm, iAttrs, controller) {
        // $scope.$watch('active', function (value) {
        //   console.log(value);
        // })
      }
    };
  })
}).call(this);
