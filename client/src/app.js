angular.module("app", ["app.common"])
.controller("AppCtrl", function($scope, Utils) {
    $scope.num = 0;
    $scope.$watch("num", function(num) {
        $scope.answer = Utils.calc(num);
    });
});
