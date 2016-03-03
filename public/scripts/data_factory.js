myApp.factory('DataFactory', ['$http', function($http) {
    // PRIVATE
    var favoriteAnimals = undefined;


    // var getData = function() {
    //     console.log('getting data from server');
    //     var promise = $http.get('/data').then(function(response) {
    //         animal = response.data;
    //         console.log('Async data response:', animal);
    //     });
    //
    //     return promise;
    // };


    var showFavorites = function () {
      console.log('the favorites controller is working');
      // $scope.favoriteAnimals = [];
      var promise = $http.get('/favorites').then(function(response){
          favoriteAnimals = response.data;
          console.log(favoriteAnimals);
          // console.log('Async data response:', animal);
          // $scope.favoriteAnimals.push(animal);
          // console.log($scope.favoriteAnimals);
      });
      return promise;
    };



    //PUBLIC
    var publicApi = {
        favoriteAnimalData: function() {
            return favoriteAnimals;
        },
        retrieveFavorites: function() {
            return showFavorites();
        }
    };

    return publicApi;
}]);
