/**
 * Created by Teodor.Tincu on 6/28/2017.
 */
hrApp.controller('OtherController', ['$scope', function($scope){
    $scope.title = "copil";
    $scope.setTitle = function(){
        $scope.title = $scope.$parent.title;
    }

}])