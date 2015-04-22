var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider.when("/", {
		templateUrl: "templates/home.html",
		controller: "homeController"
	});

	$locationProvider.html5Mode({ 	// Removes the hashbang from the url
		enabled: true,
		requireBase: false
	});
});
