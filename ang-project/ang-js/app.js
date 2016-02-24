var app = angular.module('SuggestionBox',['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "HomeController",
      templateUrl: "ang-project/views/home.html"
    })
    .when('/suggestion/:id', {
	  controller: "SuggestionController",
	  templateUrl: "ang-project/views/suggestions.html"
	})
    .otherwise({
      redirectTo: '/'
    });
});