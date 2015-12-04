var app = angular.module('juke', ['ui.router']);

app.config(function ($stateProvider) {
	$stateProvider
	.state('albums', {
		url: '/albums',
		templateUrl: '../states/albums.html',
		controller: 'AlbumsCtrl'
	})
	.state('album', {
		url: '/albums/:albumId',
		templateUrl: '../states/album.html',
		controller: 'AlbumCtrl'
	})
	.state('artists', {
		url: '/artists',
		templateUrl: '../states/artists.html',
		controller: 'ArtistsCtrl'
	})
	.state('artist', {
		url: '/artists/:artistID',
		templateUrl: '../states/artist.html',
		controller: 'ArtistCtrl'
	})
	.state('artist.albums', {
		url: '/albums',
		templateUrl: '../states/albums.html',
		controller: 'ArtistCtrl'
	})

});


    .state('choice.murrays', {
        url: '/theMurrays',
        template: '' +
            '<div>' +
                '<img src="http://www.fillmurray.com/300/100">' +
                '<img src="http://www.fillmurray.com/100/300">' +
            '</div>'
    })
    .stat