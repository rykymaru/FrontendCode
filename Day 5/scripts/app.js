// TODO load ngRoute module
//var hrApp = angular.module('hrApp', []);
var hrApp = angular.module('hrApp', ['ngRoute']);

hrApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/numbers', {
                redirectTo: '/math'
            })
            .when('/employeeAdd', {
                templateUrl: 'views/employeeAdd.html',
                controller: 'EmployeeAddController'
            })
            .when('/math', {
                templateUrl: 'views/demo/math.html',
                controller: 'MathController'
            })
            .when('/employeeList', {
                templateUrl: 'views/employeeList.html',
                controller: 'EmployeeListController'
            })
            .when('/employeeView/:employeeId', {
                templateUrl: 'views/employeeView.html',
                controller: 'EmployeeViewController'
            })
            .when('/user', {
                templateUrl: 'views/demo/user.html',
                controller: 'UserController'
            })
            .when('/employeeEdit/:employeeId', {
                templateUrl: 'views/employeeEdit.html',
                controller: 'EmployeeEditController'
            })
            .when('/singleJob/:jobId', {
                templateUrl: 'views/singleJob.html',
                controller: 'SingleJobController'
            })
            .when('/listJobs', {
                templateUrl: 'views/jobList.html',
                controller: 'JobListController'
            })
            .otherwise({
                templateUrl: 'views/main.html',
                controller: 'MainController'
            });
    }]).run(['$rootScope',
        function ($rootScope) {
            // TODO
        }
    ]);