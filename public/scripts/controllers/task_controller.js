myApp.controller('TaskController', ['$scope', '$http', 'DataFactory', function($scope, $http, DataFactory) {
    console.log('the controller is working');
    // store the reurned data to an array
    $scope.showAddTask = undefined;
    $scope.tasks = [];

    //datafactory is a dependency, but also needs to be brought into scope.
    $scope.dataFactory = DataFactory;
    $scope.newTask = 'Add a new task..';


    $scope.showHidden = function () {
        $scope.showAddTask = true;
    };

    $scope.clear = function () {
        $scope.newTask = '';
    };





//// handles the get route

if ($scope.dataFactory.taskData() === undefined) {
        // initial load
        $scope.dataFactory.dataFactoryRetrieveTasks().then(function() {
            $scope.tasks = $scope.dataFactory.taskData();
        });
    } else {
        $scope.tasks = $scope.dataFactory.taskData();
    }



////// handles the post route

$scope.addTask = function () {
    console.log($scope.newTask);
    var newTask = {
        task_name: $scope.newTask,
        task_complete: false
    };
    console.log (newTask);
    $scope.dataFactory.dataFactoryPostTasks(newTask).then(function() {
        $scope.tasks = $scope.dataFactory.taskData();
        // $scope.newTask = 'Add a new task..';
    });

};

/////handles the delete route
$scope.deleteTask = function(id) {
        console.log(id);
        $http.delete('/task/' + id).then(function(response) {
            $scope.dataFactory.dataFactoryRetrieveTasks().then(function() {
                $scope.tasks = $scope.dataFactory.taskData();

        console.log('retrieving from server after delete task');
        });
    });
};


///UPDATE
$scope.updateTask = function (id) {
    $scope.dataFactory.dataFactoryUpdateTask(id).then(function () {$scope.dataFactory.dataFactoryRetrieveTasks().then(function() {
        $scope.tasks = $scope.dataFactory.taskData();
    });
    });
///add class

};


}]);
