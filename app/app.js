'use strict';

// Declare app level module which depends on views, and components
angular
    .module('tom', [
        'ngRoute',
        'tom.home',
        'tom.heat-map'
    ])
    .config(configFunction);

configFunction.$inject = ['$routeProvider'];

function configFunction($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/home'});
}
