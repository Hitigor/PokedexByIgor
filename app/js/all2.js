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

            /*var resp1 = JSON.parse(_this.a);
            var resp = resp1.responseData.description;
            console.log(resp1.description + "  resp1.description");*/

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

        /*$http({ method: 'GET', url: _this.b  }) /!*+ $routeParams.id*!/

            .success(function (data) {
                _this.c = data;
                console.log(_this.c);
            })*/

    }]);


    /*app.controller('MovieController', function($scope, $http) {
        $scope.$watch('search', function() {
            fetch();
        });
    });*/

    /*angular.module('pokedex')*/
        app.directive('mainBodyin', function () {
            return {
                restrict: 'E',
                templateUrl: '../templates/first.html',
                controller: 'PokeController',
                controllerAs: 'PokeCtrl'
            }
        });



   /* angular.module('pokedex', ['ngRoute']);
    angular.module('pokedex')
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: '../index.html'
                })
                /!*.when('/:id', {
                        templateUrl: '../templates/first.html'
                    }
                )*!/
                .otherwise({redirectTo: "/"})
        });*/

/*
    module.exports = {


        friendlyName: 'Get Pokemon',


        description: 'Get information about a Pokemon based on its unique ID number',


        extendedDescription: '',


        inputs: {

            id: {
                description: 'The unique id for a Pokemon',
                example: 1,
                required: true
            }
        },


        defaultExit: 'success',


        exits: {

            error: {
                description: 'Unexpected error occurred.',
            },

            success: {
                description: 'Done.',
                example: {
                    name: 'Bulbasaur',
                    description: 'It has a seed planted in its back or something',
                    imageUrl: 'http://pokeapi.co/api/v1/sprite/1/media/img/1383395659.12.png',
                    types: ['poison', 'grass'],
                    moves: [{
                        name: 'Tackle',
                        level: 1
                    }]
                }
            },

        },


        fn: function (inputs,exits) {

            var _ = require('lodash');
            var Http = require('machinepack-http');

            // Send an HTTP request and receive the response.
            Http.sendHttpRequest({
                url: '/pokemon/'+inputs.id,
                baseUrl: 'http://pokeapi.co/api/v1'
            }).exec({
                // An unexpected error occurred.
                error: function(err) {
                    return exits.error(err);
                },
                // OK.
                success: function(result) {

                    var pokemon;
                    var spriteId;
                    var descriptionId;
                    try {
                        var parsedResponse = JSON.parse(result.body);
                        // console.log(parsedResponse);
                        pokemon = {
                            name: parsedResponse.name,
                            types: _.pluck(parsedResponse.types, 'name'),
                            moves: _.sortBy(_.where(parsedResponse.moves, {learn_type: 'level up'}), 'level')
                        };
                        // Ensure that a sprite id exists
                        if (!parsedResponse.sprites[0] || !_.isObject(parsedResponse.sprites[0])) {
                            return exits.error(new Error('No image available for this pokemon.'));
                        }
                        spriteId = +(parsedResponse.sprites[0].resource_uri.match(/sprite\/([0-9]+)/)[1]);

                        // Ensure that a primary description id exists and parse it out
                        if (!parsedResponse.descriptions[0] || !_.isObject(parsedResponse.descriptions[0])) {
                            return exits.error(new Error('No description available for this pokemon.'));
                        }
                        descriptionId = +(parsedResponse.descriptions[0].resource_uri.match(/description\/([0-9]+)/)[1]);

                    }
                    catch (e) {
                        return exits.error(e);
                    }

                    // Fetch the primary image url for this pokemon
                    // using the 'sprites' that were provided.
                    Http.sendHttpRequest({
                        url: '/sprite/' + spriteId,
                        baseUrl: 'http://pokeapi.co/api/v1'
                    }).exec({
                        // An unexpected error occurred.
                        error: function(err) {
                            return exits.error(err);
                        },
                        // OK.
                        success: function(result) {
                            try {
                                var parsedSpriteResponse = JSON.parse(result.body);
                                // Note that we strip the leading slash, and ensure that one exists.
                                var spriteImageUrl = 'http://pokeapi.co/' + parsedSpriteResponse.image.replace(/^\//, '');

                                // Now set the pokemon imageUrl using the relevant info from the
                                // parsed sprite response.
                                pokemon.imageUrl = spriteImageUrl;
                            }
                            catch (e) {
                                return exits.error(e);
                            }

                            // Fetch the primary description for this pokemon.
                            Http.sendHttpRequest({
                                url: '/description/' + descriptionId,
                                baseUrl: 'http://pokeapi.co/api/v1'
                            }).exec({
                                error: function (err){
                                    return exits.error(err);
                                },
                                success: function (result){
                                    try {
                                        var parsedDescriptionResponse = JSON.parse(result.body);

                                        // Now set the pokemon description using the relevant info from the
                                        // parsed description response.
                                        pokemon.description = parsedDescriptionResponse.description;
                                        console.log(pokemon.description + "  POKE DESCR");
                                    }
                                    catch (e) {
                                        return exits.error(e);
                                    }

                                    return exits.success(pokemon);
                                },
                            });
                        }
                    });
                },
            });
        },



    };
    module.exports.fn();*/

})();
