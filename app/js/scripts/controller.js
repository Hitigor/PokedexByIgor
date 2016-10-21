(function () {

    var app = angular.module('pokedex', ["ngStorage"]);

    app.controller('PokeController', ["$http", /*"$routeParams",*/ function ($http/*, $routeParams*/) {
        console.log("ControllerOn");
        var _this = this;
        this.pokemons = [];

        $http({ method: 'GET', url: '../js/pokemons.json' /*'http://pokeapi.co/api/v1/pokemon/?limit=12'*/ }) /*+ $routeParams.id*/

            .success(function (data) {
                _this.pokemons = data;
                var olo = {};
                olo = data;
                console.log(olo);
                return _this.pokemons;
            }).catch(function (er) {
            _this.errors = er.data.error;
        });
        console.log(this.pokemons + "  this.pokemons");

        this.currentId = 0;
        this.setCurrentId = function(newId){
            this.currentId = newId || 0;
        };

       /* $(document).ready(function(){
            $(".main__poke-mini-info-wrapper").click(function(){
                $(this).toggleClass("active-info");
                $(this).siblings("div").removeClass("active-info");
            });
        });*/
    }]);

    app.controller('GalleryController', function(){
        this.current = 0;
        this.setCurrent = function(newGallery){
            this.current = newGallery || 0;
        };
    });

    app.controller('TabController', function(){
        this.tab = 1;

        this.setTab = function(newValue){
            this.tab = newValue;
        };

        this.isSet = function(tabName){
            return this.tab === tabName;
        };
    });

    app.controller("StorageController", function($scope, $localStorage) {

        $scope.save = function(abv, id) {

            $localStorage.fav = abv ;
        };

        $scope.load = function() {
            $scope.data = $localStorage.fav;
        }

    });
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


})();