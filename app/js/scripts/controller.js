(function () {
    var app = angular.module('pokedex', []);

    app.controller('PokeController', ["$http", "$routeParams", function ($http, $routeParams) {

                var _this = this;
                this.pokemons = [];
                this.selectedPokemon = {};
                console.log(this.pokemons + "  this.pokemons");

                $http({method: 'GET', url: 'http://pokeapi.co/api/v1/pokemon/?limit=12' })/*+ $routeParams.id*/

                    .success(function (data) {
                        _this.pokemons = data;
                        data.forEach(function (dataMap) {
                            if(dataMap.id == $routeParams.id) {
                                _this.selectedPokemon = dataMap;
                                console.log(_this.pokemons + "  SnowboardsController2");
                            }
                        });
                    })
                    .catch(function(er){
                        _this.errors = er.data.error;
                    });
               /* $('.creditButton_IN').on('click', function () {
                    console.log("click");
                    $('.creditsPanel_IN').slideDown(500);
                    $('.buyButton_IN').hide(500);
                    $(this).hide(500);
                    return false;
                });


                $('.creditsClose').on('click', function () {
                    $('.creditsPanel_IN').slideUp(500);
                    $('.buyButton_IN').show(500);
                    $('.creditButton_IN').show(500);
                });*/

            }])



})();