var app = angular.module('juke', ['ui.router']);

app.config(function ($stateProvider) {
	$stateProvider
	.state('albums', {
		url: '/albums',
		templateUrl: '../states/albums.html',
		resolve: {
			albums: function(AlbumFactory){
				return AlbumFactory.fetchAll()
			}
		},
		controller: 'AlbumsCtrl'
	})
	.state('album', {
		url: '/albums/:albumId',
		templateUrl: '../states/album.html',
		resolve: {
			album: function(AlbumFactory, $stateParams){
				return AlbumFactory.fetchById($stateParams.albumId);
			}
		},
		controller: 'AlbumCtrl'
	})
	.state('artists', {
		url: '/artists',
		templateUrl: '../states/artists.html',
		resolve: {
		artists: function(ArtistFactory, $stateParams){
			return ArtistFactory.fetchAll();
		}
		controller: 'ArtistsCtrl'
	})
	.state('artist', {
		url: '/artists/:artistID',
		templateUrl: '../states/artist.html',
		resolve: {
			artist: function(ArtistFactory, $stateParams){
				return ArtistFactory.fetchById($stateParams.artistID);
			}
		},
		controller: 'ArtistCtrl'
	})
	.state('artist.albums', {
		url: '/albums',
		templateUrl: '../states/albums.html',
		resolve: {
			albums: function(AlbumFactory, artist){
				return AlbumFactory.fetchByArtist(artist._id)
			}
		},
		controller: 'AlbumsCtrl'
	})
	.state('artist.songs', {
		url: '/songs',
		templateUrl: '../states/album.html',
		resolve: {
			album: function(artist){
				var newAlb = {}
				newAlb.name = artist.name;
				newAlb.songs = artist.songs
				return newAlb;
			}
		},
		controller: 'AlbumCtrl'
	})
});