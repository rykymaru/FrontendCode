/**
 * Created by Teodor.Tincu on 7/3/2017.
 */
hrApp.controller('JobListController', ['$scope', '$http', '$location', '$routeParams', 'CommonResourcesFactory','EmployeeAddService', 'EmployeeService',
    function ($scope, $http, $location, $routeParams, CommonResourcesFactory, $EmployeeAddService, EmployeeService) {
        $scope.jobs = [];
        $EmployeeAddService.findAllJobs()
            .then (function(res) {
                $scope.jobs = res.data;
            }, (function(err) {
                alert("Eroare job");
            }));

        // Handle a promise
        EmployeeService.findById($routeParams.jobId)
            .then(function (res) {
                $scope.job = res.data;
            }, function (err) {
                console.log("Error job: " + err);
            });


        $scope.viewJob = function (jobId) {
            $location.url('/singleJob/' + jobId);
        };

        $scope.editJob = function(jobId) {
            $location.url('/singleJob/' + jobId);
        };

        $scope.deleteJob = function(job) {
            $http({url: CommonResourcesFactory.deleteJobUrl, method: 'DELETE', data: job,
                headers : { 'Content-Type' : 'application.json'}});
        };

    }]);