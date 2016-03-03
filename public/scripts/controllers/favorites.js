myApp.controller('FavoritesController', ['$scope', '$http', 'DataFactory', function($scope, $http, DataFactory) {

  $scope.favoriteAnimals = [];
  $scope.dataFactory = DataFactory;

  // if($scope.dataFactory.favoriteAnimalData() === undefined) {
          // initial load
          $scope.dataFactory.getTasks().then(function() {
              $scope.tasks = $scope.dataFactory.favoriteAnimalData();
              $scope.favoriteCount = $scope.favoriteAnimals.length;

                  console.log('undefined: animalcount = ', $scope.favoriteCount);

          });
      // } else {
      //     $scope.favoriteAnimals = $scope.dataFactory.favoriteAnimalData();
      //     $scope.favoriteCount = $scope.favoriteAnimals.length;
      //     console.log('defined: animalcount = ', $scope.favoriteCount);
      // }

  $scope.addFavorite = function() {
    ///addd to favorites function will eventually go here

        //POST to server
        $http.post('/favorites', $scope.animalRetrieved).then(function(response){
            console.log ('data sent to server');
            // console.log('Async data response:', animal);
        });

        //SERVER POST route will query the DB
  };

//////




}]);
