/**
 * Created by Teodor.Tincu on 7/3/2017.
 */
hrApp.controller('JobListController', ['$scope', '$http', '$location', 'CommonResourcesFactory','EmployeeAddService',
    function ($scope, $http, $location, CommonResourcesFactory, $EmployeeAddService) {
        $scope.jobs = [];
        $EmployeeAddService.findAllJobs()
            .then (function(res) {
                $scope.jobs = res.data;
            }, (function(err) {
                alert("Eroare job");
            }));

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