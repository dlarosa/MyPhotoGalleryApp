System.register(['angular2/core', 'angular2/common', 'angular2/router', '../components/core/common/paginated', '../components/core/services/dataService'], function(exports_1) {
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
    var core_1, common_1, router_1, paginated_1, dataService_1;
    var Photos;
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
            }],
        execute: function() {
            Photos = (function (_super) {
                __extends(Photos, _super);
                function Photos(photosService) {
                    _super.call(this, 0, 0, 0);
                    this.photosService = photosService;
                    this._photosAPI = 'api/photos/';
                    photosService.set(this._photosAPI, 12);
                    this.getPhotos();
                }
                Photos.prototype.getPhotos = function () {
                    var _this = this;
                    this.photosService.get(this._page)
                        .subscribe(function (res) {
                        var data = res.json();
                        _this._photos = data.Items;
                        _this._page = data.Page;
                        _this._pagesCount = data.TotalPages;
                        _this._totalCount = data.TotalCount;
                    }, function (error) { return console.error('Error: ' + error); });
                };
                Photos.prototype.search = function (i) {
                    _super.prototype.search.call(this, i);
                    this.getPhotos();
                };
                ;
                Photos = __decorate([
                    core_1.Component({
                        selector: 'photos',
                        providers: [dataService_1.DataService],
                        templateUrl: './app/components/Photos.html',
                        bindings: [dataService_1.DataService],
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [dataService_1.DataService])
                ], Photos);
                return Photos;
            })(paginated_1.Paginated);
            exports_1("Photos", Photos);
        }
    }
});
