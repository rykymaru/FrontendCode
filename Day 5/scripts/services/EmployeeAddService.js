/**
 * Created by Teodor.Tincu on 7/3/2017.
 */
hrApp.service('EmployeeAddService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findAllJobs: function() {
                return $http.get(CommonResourcesFactory.findAllJobsUrl)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                        "jobId":"AD_PRES",
                        "jobTitle":"President",
                        "maxSalary":40000,
                        "minSalary":20000
                        };
                    });
            },
            findAllEmployees: function() {
                return $http.get(CommonResourcesFactory.findAllEmployeesUrl)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                        "commissionPct":null,
                        "departmentId":{"departmentId":90,
                            "departmentName":"Executive",
                            "locationId":{"city":"Seattle",
                                "locationId":1700,"postalCode":"98199",
                                "stateProvince":"Washington",
                                "streetAddress":"2004 Charade Rd"}}
                        };
                    });
            },
            findAllDepartments: function() {
                return $http.get(CommonResourcesFactory.findAllDepartmentsUrl)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {

                    }});
            }
        }
    }]
);