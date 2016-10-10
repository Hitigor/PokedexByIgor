var app =  angular.module('pokedex');
app.directive('mainBodyin', function () {
    return {
        restrict: 'E',
        templateUrl: '../templates/mainBody.html',
        controller: 'PokeController',
        controllerAs: 'PokeCtrl'
    }
});
app.directive('firstTab', function(){
        return {
            restrict: 'E',
            templateUrl: '../templates/firstTab.html',
            controller: 'PokeController',
            controllerAs: 'PokeCtrl'
        }
});
app.directive('secondTab', function(){
        return {
            restrict: 'E',
            templateUrl: '../templates/secondTab.html',
            controller: 'PokeController',
            controllerAs: 'PokeCtrl'
        }
    });
