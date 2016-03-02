app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions',  function($scope, $routeParams, suggestions) {

	$scope.post = suggestions.posts[$routeParams.id];

	console.log($scope.post);

	$scope.addComment = function(){
		if(!$scope.new_comment || $scope.new_comment === ""){
			return;
		}
		$scope.post.push({
			body: $scope.new_comment,
			upvotes: 0
		});
		$scope.new_comment = "";
	}

	

	$scope.new_comment = "";

}]);