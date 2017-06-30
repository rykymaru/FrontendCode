/**
 * Created by Teodor.Tincu on 6/30/2017.
 */
hrApp.controller('FormsController', ['$scope',
    function($scope) {
        $scope.list = [];
        $scope.butonFct = function() {
            if($scope.OurForm.input.$valid)
               $scope.list.push($scope.uncamp);
        }
    }])