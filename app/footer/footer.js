(function() {
    'use strict';
    
    angular
        .module('tom.footer')
        .directive('footerDir', footerDir)
    
    function footerDir() {
        return {
            templateUrl: 'footer/footer.html',
            restrict: 'E',
            scope: {}
        };
    }

})();