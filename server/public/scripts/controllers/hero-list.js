app.controller('HeroListController', ['$http', function($http) {
  console.log('Hero List Controller loaded');

  app.run(function(editableOptions) {
    editableOptions.theme = 'bs3';
  });

  var self = this;
  self.testMessage = "This is my test message";
  self.heroes = [];
  self.updateHero = {};

  getHeroes();

  // get all hero data from db
  function getHeroes() {
    $http.get('/heroes').then(function(response) {
      self.heroes = response.data;
    }); // end $http.get
  } // end getHeroes() function

  self.deleteHero = function(heroId){
    console.log('deleting:', heroId);
    if (confirm('Are you sure you want to this hero?')) {
      $http.delete('/heroes/' + heroId).then(function(response) {
        getHeroes();
      }); // end $http.get
    } // end if confirm
  } // end deleteHero() function

  self.saveHero = function(heroObject) {
    console.log(heroObject);
    $http.put('/heroes/save/' + heroObject.id).then(function(response) {
      getHeroes();
    }); // end $http.put
  } // end saveHero() function

}]);
