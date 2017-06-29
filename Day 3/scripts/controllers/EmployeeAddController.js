/**
 * Created by Teodor.Tincu on 6/29/2017.
 */
hrApp.controller('EmployeeAddController', ['$scope', '$location', '$window', 'UserService', function($scope, $location, $window, UserService){
    $scope.userlist = UserService;
    $scope.user = {};
    $scope.save = function() {
        UserService.push($scope.user);
        $window.alert('User Adaugat!');
    }

    $scope.back = function() {
        $location.url('/')
    }

    $scope.reset=function() {
        $scope.user=undefined;
    }

    $scope.descriptionShow = false;

    $scope.showhide = function() {
        $scope.descriptionShow = !$scope.descriptionShow;
    };
}]);