(function (){
  var module;

  module = angular.module('onOffSwitch', []);
  module.directive('onOffSwitch', function(){
    return {
      scope: {
        active: '='
        // ,
        // onLabel: "@",
        // offLabel: "@"
      },
      restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
      template: "<div class=\"onoffswitch\">" +
        "<input type=\"checkbox\" name=\"onoffswitch\" class=\"onoffswitch-checkbox\" id=\"myonoffswitch\" ng-model=\"active\">"+
        "<label class=\"onoffswitch-label\" for=\"myonoffswitch\">"+
          "<span class=\"onoffswitch-inner\"></span>"+
          "<span class=\"onoffswitch-switch\"></span>"+
        "</label>"+
      "</div>",
      // template: "<div class=\"onoffswitch\">" +
      //   "<input type=\"checkbox\" name=\"onoffswitch\" class=\"onoffswitch-checkbox\" id=\"myonoffswitch\" ng-model=\"active\">"+
      //   "<label class=\"onoffswitch-label\" for=\"myonoffswitch\">"+
      //     "<span class=\"onoffswitch-inner\">{{onLabel}}</span>"+
      //     "<span class=\"onoffswitch-switch\">{{offLabel}}</span>"+
      //   "</label>"+
      // "</div>",
      replace: true,
      transclude: true,
      link: function($scope, iElm, iAttrs, controller) {
        // $scope.$watch('active', function (value) {
        //   console.log(value);
        // })
      },
      controller: function ($scope) {

      }
    };
  })
}).call(this);
