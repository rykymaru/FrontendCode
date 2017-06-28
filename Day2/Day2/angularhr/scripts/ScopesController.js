/**
 * Created by Teodor.Tincu on 6/28/2017.
 */
hrApp.controller('ScopesController', ['$scope', function($scope){
    $scope.title='Two Way Binding Demo'
    $scope.childtemplate='templates/childscope.html';
    $scope.resetFirstVariable=function() {
        $scope.firstVariable=undefined;
    }
    $scope.setFirstVariable=function(val) {
        $scope.firstVariable=val;
    }
}])
