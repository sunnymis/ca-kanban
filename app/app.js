'use strict';

// Declare app level module which depends on views, and components
angular
    .module('tom', [
        'ngRoute',
        'tom.nav'
    ])
    .config(configFunction);

configFunction.$inject = ['$routeProvider'];

function configFunction($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
}
