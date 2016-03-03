myApp.factory('DataFactory', ['$http', function($http) {
    // PRIVATE
    var taskData = undefined;


    var getTasks = function() {
        console.log('getting data from server');
        var promise = $http.get('/task').then(function(response) {
            taskData = response.data;
            console.log('Async data response:', taskData);
        });

        return promise;
    };


    // var showFavorites = function () {
    //   console.log('the favorites controller is working');
    //   // $scope.favoriteAnimals = [];
    //   var promise = $http.get('/favorites').then(function(response){
    //       favoriteAnimals = response.data;
    //       console.log(favoriteAnimals);
    //       // console.log('Async data response:', animal);
    //       // $scope.favoriteAnimals.push(animal);
    //       // console.log($scope.favoriteAnimals);
    //   });
    //   return promise;
    // };



    //PUBLIC
    var publicApi = {

        dataFactoryRetrieveTasks: function() {
            return getTasks();
        },
        taskData: function () {
            return taskData;
        }
    };

    return publicApi;
}]);
