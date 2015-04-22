var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider.when("/test", {
		templateUrl: "templates/home.html",
		controller: "Controller",
		title: 'testing'
	});
});
