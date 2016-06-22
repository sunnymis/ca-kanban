(function() {
    'use strict';
    
    angular
        .module('tom.home')
        .config(configFunction);
    
    configFunction.$inject = ['$routeProvider'];
    
    function configFunction($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html'
        });
    }
})(); 