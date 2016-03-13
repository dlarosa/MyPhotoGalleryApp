System.register(['angular2/core', 'angular2/common', 'angular2/router', '../components/core/common/paginated', '../components/core/services/dataService', '../components/core/services/utilityService', '../route'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, paginated_1, dataService_1, utilityService_1, route_1;
    var Albums;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (paginated_1_1) {
                paginated_1 = paginated_1_1;
            },
            function (dataService_1_1) {
                dataService_1 = dataService_1_1;
            },
            function (utilityService_1_1) {
                utilityService_1 = utilityService_1_1;
            },
            function (route_1_1) {
                route_1 = route_1_1;
            }],
        execute: function() {
            Albums = (function (_super) {
                __extends(Albums, _super);
                function Albums(albumsService, utilityService, router) {
                    _super.call(this, 0, 0, 0);
                    this.albumsService = albumsService;
                    this.utilityService = utilityService;
                    this.router = router;
                    this._albumsAPI = 'api/albums/';
                    this.routes = route_1.Routes;
                    this.routes = route_1.Routes;
                    albumsService.set(this._albumsAPI, 3);
                    this.getAlbums();
                }
                Albums.prototype.getAlbums = function () {
                    var _this = this;
                    this.albumsService.get(this._page)
                        .subscribe(function (res) {
                        var data = res.json();
                        _this._albums = data.Items;
                        _this._page = data.Page;
                        _this._pagesCount = data.TotalPages;
                        _this._totalCount = data.TotalCount;
                    }, function (error) {
                        if (error.status == 401) {
                            _this.utilityService.navigateToSignIn();
                        }
                        console.error('Error: ' + error);
                    });
                };
                Albums.prototype.search = function (i) {
                    _super.prototype.search.call(this, i);
                    this.getAlbums();
                };
                ;
                Albums.prototype.convertDateTime = function (date) {
                    return this.utilityService.convertDateTime(date);
                };
                Albums = __decorate([
                    core_1.Component({
                        selector: 'albums',
                        templateUrl: './app/components/albums.html',
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [dataService_1.DataService, utilityService_1.UtilityService, router_1.Router])
                ], Albums);
                return Albums;
            })(paginated_1.Paginated);
            exports_1("Albums", Albums);
        }
    }
});
