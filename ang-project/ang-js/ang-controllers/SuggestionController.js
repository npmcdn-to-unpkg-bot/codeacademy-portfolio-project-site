app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions',  function($scope, $routeParams, suggestions) {

	$scope.post = suggestions.posts[$routeParams.id];


}]);
