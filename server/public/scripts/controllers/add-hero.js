app.controller('AddHeroController', ['$http', function($http){
  console.log('Add Hero Controller loaded');

  var self = this;
  self.testMessage = "This is my test message";
  self.heroes = [];
  self.newHero = {};

  // add employee from form
  self.addHero = function() {
    console.log(self.newHero);
    // send to server
    $http.post('/heroes', self.newHero).then(function(response) {
      self.newHero = {};
      alert('Hero added!')
    }); // end $http.post
  } // end addHero() function

}]);
