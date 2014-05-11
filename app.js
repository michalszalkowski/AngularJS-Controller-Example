var app = angular.module('szalekApp', []);

app.controller("NameCtrl", function ($scope) {
    $scope.hello = "Welkome welkome!";
    $scope.names = ['Michal' , 'Ewa', 'Jakub'];

    $scope.addName = function () {
        $scope.names.push($scope.newName);
        $scope.newName = "";
    }

    $scope.removeName = function (name) {
        var i = $scope.names.indexOf(name);
        $scope.names.splice(i, 1);
    }
});

app.controller("CountryStaticCtrl", function ($scope) {
    $scope.countries = [
        {"name": "China", "population": 1359821000},
        {"name": "India", "population": 1205625000},
        {"name": "United States of America", "population": 312247000}
    ];
});

app.controller("CountryCtrl", function ($scope, $http) {
    $scope.orderField = 'population';
    $scope.orderReverse = true;
    $http.get('countries.json').success(function (data) {
        $scope.countries = data;
    });
});