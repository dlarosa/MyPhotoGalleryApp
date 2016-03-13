System.register(['angular2/router', './components/home', './components/photos', './components/albums', './components/albumPhotos', './components/account/account'], function(exports_1) {
    var router_1, home_1, photos_1, albums_1, albumPhotos_1, account_1;
    var Routes, APP_ROUTES;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (photos_1_1) {
                photos_1 = photos_1_1;
            },
            function (albums_1_1) {
                albums_1 = albums_1_1;
            },
            function (albumPhotos_1_1) {
                albumPhotos_1 = albumPhotos_1_1;
            },
            function (account_1_1) {
                account_1 = account_1_1;
            }],
        execute: function() {
            exports_1("Routes", Routes = {
                home: new router_1.Route({ path: '/', name: 'Home', component: home_1.Home }),
                photos: new router_1.Route({ path: '/photos', name: 'Photos', component: photos_1.Photos }),
                albums: new router_1.Route({ path: '/albums', name: 'Albums', component: albums_1.Albums }),
                albumPhotos: new router_1.Route({ path: '/albums/:id/photos', name: 'AlbumPhotos', component: albumPhotos_1.AlbumPhotos }),
                account: new router_1.Route({ path: '/account/...', name: 'Account', component: account_1.Account })
            });
            exports_1("APP_ROUTES", APP_ROUTES = Object.keys(Routes).map(function (r) { return Routes[r]; }));
        }
    }
});
