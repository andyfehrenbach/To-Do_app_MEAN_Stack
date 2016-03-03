var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html',
        })

        .when('/favorites', {
            templateUrl: '/views/templates/favorites.html',
            controller: 'FavoritesController'
        })

        .when('/results', {
            templateUrl: '/views/templates/results.html',
        })

        .otherwise({
            redirectTo: 'home'
        });
}]);
