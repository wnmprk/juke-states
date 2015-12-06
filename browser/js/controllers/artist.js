app.controller('ArtistCtrl', function ($scope, PlayerFactory, ArtistFactory, $stateParams, artist) {

	$scope.artist = artist;
	console.log(artist)
	$scope.isCurrent = function (song) {
		var current = PlayerFactory.getCurrentSong();
		return current && current._id == song._id;
	};
	$scope.start = function (song) {
		PlayerFactory.start(song, $scope.artist.songs);
	};

});