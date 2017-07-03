hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactory', 'EmployeeAddService',
    function($scope, $http, $location, $CommonResourcesFactory, $EmployeeAddService) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR1
        $EmployeeAddService.findAllJobs()
            .then (function(res) {
                $scope.jobs = res.data;
        }, (function(err) {
                alert("Eroare job");
            }));
       // $scope.jobs = $EmployeeAddService.findAllJobs();
        $EmployeeAddService.findAllDepartments()
            .then (function(res) {
                $scope.departments = res.data;
            }, (function(err) {
                alert("Eroare department");
            }));
       // $scope.departments = $EmployeeAddService.findAllDepartments();
        $scope.managers = [];
        $scope.testManager = [];
        $EmployeeAddService.findAllEmployees()
            .then (function(res) {
                $scope.employees = res.data;
                for (item in $scope.employees) {

                    if (($scope.employees[item].managerId != null) &&
                        ($scope.testManager.indexOf($scope.employees[item].managerId.employeeId) == -1)) {
                        $scope.testManager.push($scope.employees[item].managerId.employeeId);
                    }
                }
                for (item in $scope.employees) {
                    if ($scope.testManager.indexOf($scope.employees[item].employeeId) != -1) {
                        $scope.managers.push($scope.employees[item])
                    }
                }
            }, (function(err) {
                alert("Eroare Employees");
            }));
        //$scope.employees = $EmployeeAddService.findAllEmployees();

        /**
         * Reset form
         */
        $scope.reset = function () {
            this.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: $CommonResourcesFactory.addEmployeeUrl, method: 'POST', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
}]);