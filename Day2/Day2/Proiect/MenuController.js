/**
 * Created by Teodor.Tincu on 6/28/2017.
 */
hrApp.controller('MenuController', ['$scope', function($scope) {
    $scope.demoActionList = [
        {
            label: "List Employees",
            url: "list.html"
        },
        {
            label: "Delete an employee",
            url: "delete.html"

        },
        {
            label: "Shopping",
            url: "shopingcart.html"

        }
    ];
}])