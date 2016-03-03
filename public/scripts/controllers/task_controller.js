myApp.controller('TaskController', ['$scope', '$http', 'DataFactory', function($scope, $http, DataFactory) {
    console.log('the controller is working');

    $scope.tasks = [];
    $scope.dataFactory = DataFactory;

//     $scope.data = {};
//     $scope.search = false;
//     $scope.animalName = '';
//
//
//
// ///handle the select form
//
//   $scope.animalSearch = function() {
//     // check option value
//     if($scope.animal != '') {
//         // valid selection, do something
//         $scope.search = true;
//     } else {
//       // invalid, reset bool
//       $scope.search = false;
//       $scope.text = 'add to favorites';
//     }
//     // console.log($scope.search);
//
//   };

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
