var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: "templates/home.html",
		controller: "Controller",
		title: 'testing'
	});
});
