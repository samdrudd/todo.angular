app.controller("todoCtrl", function($scope) {
	$scope.tasklist = {};
	
	$scope.addTask = function() {
		var today = new Date();
		var id = today.getTime();
		$scope.tasklist[id] = $scope.tasktext;
	}
	
	$scope.finishTask = function(id) {
		delete $scope.tasklist[id];
	}
});