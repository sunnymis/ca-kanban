<<<<<<< HEAD
'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
||||||| merged common ancestors
=======
'use strict';

// Declare app level module which depends on views, and components
angular
    .module('tom', [
        'ngRoute'
    ])
    .config(configFunction);

configFunction.$inject = ['$routeProvider'];

function configFunction($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
}
>>>>>>> f4748c661a25626bb71009c388904d06d2aae804
