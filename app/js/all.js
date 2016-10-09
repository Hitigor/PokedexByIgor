"use strict";

'use strict';


(function () {

    /* ********************** __Controllers__ *********************************** */

    var app = angular.module('pokedex', []);

    app.controller('PokeController', ["$http", /*"$routeParams",*/ function ($http/*, $routeParams*/) {
        console.log("ControllerOn");
        var _this = this;
        this.pokemons = [];
        this.selectedPokemon = {};

        $http({ method: 'GET', url: '../js/pokemons.json' /*'http://pokeapi.co/api/v1/pokemon/?limit=12'*/ }) /*+ $routeParams.id*/

            .success(function (data) {
                _this.pokemons = data;
                _this.a = 'http://pokeapi.co'+_this.pokemons.objects[0].descriptions[0].resource_uri;
                console.log(_this.a + '   A!!!');
                _this.b = _this.a.toString();
                console.log(_this.b + " thisb");
                console.log(_this.pokemons + "  _this.pokemons2");
                console.log(data + " DATA");
                var olo = {};
                olo = data;
                console.log(olo);
                return _this.pokemons;
                /* data.forEach(function (dataMap) {
                 if (dataMap.id == $routeParams.id) {
                 _this.selectedPokemon = dataMap;
                 console.log(_this.pokemons + "  SnowboardsController2");
                 }
                 });*/
            }).catch(function (er) {
            _this.errors = er.data.error;
        });
        console.log(this.pokemons + "  this.pokemons");

        this.currentId = 0;
        this.setCurrentId = function(newId){
            this.currentId = newId || 0;
        };

        $(document).ready(function(){
            $(".main__poke-mini-info-wrapper").click(function(){
                $(this).toggleClass("active-info");
                $(this).siblings("div").removeClass("active-info");
            });
        });

    }]);

    app.controller('GalleryController', function(){

        this.current = 0;
        this.setCurrent = function(newGallery){
            this.current = newGallery || 0;
        };
    });

    app.directive('mainBodyin', function () {
        return {
            restrict: 'E',
            templateUrl: '../templates/first.html',
            controller: 'PokeController',
            controllerAs: 'PokeCtrl'
        }
    });



})();
