/**
 * Created by Teodor.Tincu on 7/3/2017.
 */
hrApp.controller('SingleJobController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactory','EmployeeService',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactory, EmployeeService) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        $scope.reset = function () {
            $scope.job = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addJob) {
            $http({url: CommonResourcesFactory.addJobUrl, method: 'PUT', data: addJob})
                .success(function (data) {
                    $scope.job = data;
                    $location.url('/listJobs/' + $scope.job.jobId);
                });
        };

        $scope.delete = function(job) {
            $http({url: CommonResourcesFactory.deleteJobUrl, method: 'DELETE', data: job,
                headers : { 'Content-Type' : 'application/json'}});
        };

    }]);