hrApp.controller('MathController', ['$scope', 'MathService', function($scope, MathService){
    
    $scope.calculate = function() {
// //        TODO #8 calculate op1, op2, op3, op4
//              $scope.op1=$scope.A+$scope.B;
//              $scope.op2=$scope.A-$scope.B;
//              $scope.op3=$scope.A*$scope.B;
//              $scope.op4=$scope.A/$scope.B;
//        TODO #13 refactor your calculations using MathService
    $scope.op1=MathService.add($scope.A,$scope.B);
    $scope.op2=MathService.substract($scope.A,$scope.B);
    $scope.op3=MathService.multiply($scope.A,$scope.B);
    $scope.op4=MathService.divide($scope.A,$scope.B);

    }
}]);
