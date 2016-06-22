(function() {
    'use strict';
    
    angular
        .module('tom.nav')
        .directive('navBar', navBar)
    
    function navBar() {
        return {
            templateUrl: 'nav/nav.html',
            restrict: 'E',
            scope: {}
        };
    }

})();