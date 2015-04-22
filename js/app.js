var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider.when("/", {
		templateUrl: "templates/home.html",
		controller: "Controller",
		title: 'testing'
	});

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
});
