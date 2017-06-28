/**
 * Created by Teodor.Tincu on 6/28/2017.
 */
hrApp.controller('DescriptionController', ['$scope', function($scope){
    $scope.title='Two Way Binding Demo';
    $scope.childtemplate='templates/childscope.html';
    $scope.resetFirstVariable=function() {
        $scope.descriptionShow=undefined;
    };
    $scope.setFirstVariable=function(val) {
        $scope.descriptionShow=val;
    };
    $scope.descriptionShow=false;
    $scope.toggleDescriptionShow=function() {
        if ($scope.descriptionShow == false) {
            $scope.descriptionShow=true;
        }else {
            $scope.descriptionShow=false;
        }

    }
}])



