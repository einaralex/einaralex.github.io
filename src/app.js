var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider.when("/", {
		templateUrl: "templates/home.html",
		controller: "homeController",
		css: 'templates/styles/home.css'
	});

	$locationProvider.html5Mode({ 	// Removes the hashbang from the url
		enabled: true,
		requireBase: false
	});
});
