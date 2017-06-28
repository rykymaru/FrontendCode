/**
 * Created by Teodor.Tincu on 6/28/2017.
 */
hrApp.controller('ShoppingController', ['$scope', function($scope) {
    $scope.demoActionList = [
        {
            label: "Bicicleta",
            url: "images/bicicleta.jpg",
            pret: "30",
            mytest: false
        },
        {
            label: "Capsator",
            url: "images/capsator.jpg",
            pret: "25",
            mytest: false
        },
        {
            label: "Ceas",
            url: "images/ceas.jpg",
            pret: "33",
            mytest: false
        },
        {
            label: "Minge",
            url: "images/minge.jpg",
            pret: "44",
            mytest: false
        }
    ];
    $scope.hoverImg = function(action) {
        action.mytest = true;
    }
    $scope.leaveImg = function(action) {
        action.mytest = false;
    }
    $scope.myFunction = function(action) {
        if(action.mytest == true){
            myFunction = false;
        }else {
            myFunction = true;
        }
    }
}])