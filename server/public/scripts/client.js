var app = angular.module('HeroApp', ['ngRoute']);

// var app = angular.module('HeroApp', ['ngRoute', 'xeditable']);

// app.run(function(editableOptions) {
//   editableOptions.theme = 'bs3';
// });

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/heroList', {
    templateUrl: '/views/hero-list.html',
    controller: 'HeroListController',
    controllerAs: 'hlc'
  })
  .when('/addHero', {
    templateUrl: '/views/add-hero.html',
    controller: 'AddHeroController',
    controllerAs: 'ahc'
  })
  .otherwise({
    redirectTo: 'heroList'
  })
}]); // end myApp.config
