'use strict';

// Declare app level module which depends on views, and components
angular.module('mainApp').
controller('tasksController',['$scope',function($scope){
	$scope.todos = [{
		text: "Learn AngularJS",
		done: false
	},
	{
		text: "Learn ReactJS",
		done: false
	},{
		text: "Learn AngularJS",
		done: false
	}];
	$scope.todoText='';
	
	$scope.addTodo = function(){
		$scope.todos.push({text:$scope.todoText,done:false});
		$scope.todoText='';
	}

	

	$scope.removeTodo = function(todo){
		todo.done = true;
		var arr=[];
		angular.forEach($scope.todos,function(value,key) {
			if(!value.done){
				arr.push(value);
			}
		});
		$scope.todos = arr;
	}

}]);