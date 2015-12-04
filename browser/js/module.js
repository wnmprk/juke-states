var app = angular.module('juke', ['ui.router']);

app.config(function ($stateProvider) {
	$stateProvider.state('albums', {
		url: '/albums',
		templateUrl: '../states/albums.html',
		controller: 'AlbumsCtrl'
	})
	.state('artists', {
		url: '/artists',
		templateUrl: '../states/artists.html',
		controller: 'ArtistsCtrl'
	})
	.state('albums.album', {
		url: '/album/:albumId',
		templateUrl: '../states/album.html',
		controller: 'AlbumCtrl'
	})
});