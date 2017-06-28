/**
 * Created by Teodor.Tincu on 6/28/2017.
 */
hrApp.controller('MenuController', ['$scope', function($scope) {
    $scope.demoActionList = [
        {
            label: "OtherScope",
            url: "views/childscope.html"
        },
        {
            label: "Demo actions",
            url: "demomath.html"

        }
    ];
}])