/**
 * Created by Teodor.Tincu on 6/29/2017.
 */
hrApp.controller('EmployeeAddController', ['$scope', '$location', '$window', 'UserService', function($scope, $location, $window, UserService){
    $scope.userlist = UserService;

    $scope.save = function() {
        UserService.push({
            FirstName: $scope.firstname,
            LastName: $scope.lastname,
            Email: $scope.email,
            Phone: $scope.phone,
            Hiredate: $scope.hiredate,
            Salary: $scope.salary,
            Job: $scope.job,
            Comision: $scope.commision,
            Dept: $scope.department,
            Manager: $scope.manager
        });
        $window.alert('User Adaugat!');
    }

    $scope.back = function() {
        $location.url('/')
    }

    $scope.reset=function() {
        $scope.manager=undefined;
        $scope.commision=undefined;
        $scope.firstname=undefined;
        $scope.lastname=undefined;
        $scope.department=undefined;
        $scope.hiredate=undefined;
        $scope.job=undefined;
        $scope.email=undefined;
        $scope.phone=undefined;
        $scope.salary=undefined;
    }

    $scope.descriptionShow = false;

    $scope.showhide = function() {
        $scope.descriptionShow = !$scope.descriptionShow;
    };
}]);