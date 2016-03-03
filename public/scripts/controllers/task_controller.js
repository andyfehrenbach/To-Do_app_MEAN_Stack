myApp.controller('TaskController', ['$scope', '$http', 'DataFactory', function($scope, $http, DataFactory) {
    console.log('the controller is working');
    // store the reurned data to an array
    $scope.tasks = [];

    //datafactory is a dependency, but also needs to be grough into scope.
    $scope.dataFactory = DataFactory;
    $scope.newTask = 'Add a new task..';



////

if($scope.dataFactory.taskData() === undefined) {
        // initial load
        $scope.dataFactory.dataFactoryRetrieveTasks().then(function() {
            $scope.tasks = $scope.dataFactory.taskData();
        });
    } else {
        $scope.tasks = $scope.dataFactory.taskData();
    }



//////

$scope.addTask = function() {
    console.log('addtask is running');
        var newTask = {
            task_name: $scope.newTask,
            task_complete: false
        };
        console.log (newTask);

        $http.post('/task', newTask).then(function(response) {
            // $scope.people = response.data;
            console.log('task posted to server');
        });
    };


    // $scope.addFavorite = function() {
    //   ///addd to favorites function will eventually go here
    //   $scope.animalRetrieved.favorited = true;
    //       //POST to server
    //       $http.post('/favorites', $scope.animalRetrieved).then(function(response){
    //           console.log ('data sent to server');
    //           // console.log('Async data response:', animal);
    //       });
    //
    //       //SERVER POST route will query the DB
    // };

//////
    // $scope.showFavorites = function () {
    //     var dataFactory = DataFactory;
    //
    //     dataFactory.retrieveFavorites();
    //
    //     };


}]);


// $scope.people = [];
//     $scope.dataFactory = DataFactory;
//     $scope.message = 'People!';
//     $scope.formName = '';
//
//     if($scope.dataFactory.peopleData() === undefined) {
//         // initial load
//         $scope.dataFactory.retrieveData().then(function() {
//             $scope.people = $scope.dataFactory.peopleData();
//         });
//     } else {
//         $scope.people = $scope.dataFactory.peopleData();
//     }
//
//     $scope.addPerson = function() {
//         $scope.dataFactory.addName($scope.formName);
//         $scope.formName = '';
//     };
