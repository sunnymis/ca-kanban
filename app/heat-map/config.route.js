(function() {
    'use strict';

    angular
        .module('tom.heat-map')
        .config(configFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
        $routeProvider.when('/heat-map', {
            templateUrl: 'heat-map/heat-map.html'
        });
    }
})();
