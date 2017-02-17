(function (){
  var module;

  module = angular.module('onOffSwitch', []);
  module.directive('onOffSwitch', function(){
    return {
      scope: {
        ngModel: '=ngModel',
        name: '&'
        // ,
        // onLabel: "@",
        // offLabel: "@"
      },
      restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
      template: "<div class=\"onoffswitch\">" +
        "<input type=\"checkbox\" name=\"onoffswitch\" class=\"onoffswitch-checkbox\" id='{{name}}' ng-model=\"ngModel\">"+
        "<label class=\"onoffswitch-label\" for=\"{{name}}\">"+
          "<span class=\"onoffswitch-inner\"></span>"+
          "<span class=\"onoffswitch-switch\"></span>"+
        "</label>"+
      "</div>",
      // Futher changes
      // template: "<div class=\"onoffswitch\">" +
      //   "<input type=\"checkbox\" name=\"onoffswitch\" class=\"onoffswitch-checkbox\" id=\"myonoffswitch\" ng-model=\"active\">"+
      //   "<label class=\"onoffswitch-label\" for=\"myonoffswitch\">"+
      //     "<span class=\"onoffswitch-inner\">{{onLabel}}</span>"+
      //     "<span class=\"onoffswitch-switch\">{{offLabel}}</span>"+
      //   "</label>"+
      // "</div>",
    };
  })
}).call(this);
