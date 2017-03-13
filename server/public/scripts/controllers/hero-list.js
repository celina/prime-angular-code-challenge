app.controller('HeroListController', ['$http', function($http) {
  console.log('Hero List Controller loaded');

  var self = this;
  self.testMessage = "This is my test message";
  self.heroes = [];

  getHeroes();

  // get all employee data
  function getHeroes() {
    $http.get('/heroes').then(function(response) {
      self.heroes = response.data;
    });
  }

}]);
