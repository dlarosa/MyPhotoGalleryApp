System.register(['angular2/core', 'angular2/common', 'angular2/router', '../components/core/common/paginated', '../components/core/services/dataService', '../components/core/services/utilityService', '../components/core/services/notificationService', '../components/core/domain/operationResult'], function(exports_1) {
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
    var core_1, common_1, router_1, paginated_1, dataService_1, utilityService_1, notificationService_1, operationResult_1;
    var AlbumPhotos;
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
            function (notificationService_1_1) {
                notificationService_1 = notificationService_1_1;
            },
            function (operationResult_1_1) {
                operationResult_1 = operationResult_1_1;
            }],
        execute: function() {
            AlbumPhotos = (function (_super) {
                __extends(AlbumPhotos, _super);
                function AlbumPhotos(dataService, utilityService, notificationService, routeParam) {
                    _super.call(this, 0, 0, 0);
                    this.dataService = dataService;
                    this.utilityService = utilityService;
                    this.notificationService = notificationService;
                    this._albumsAPI = 'api/albums/';
                    this._photosAPI = 'api/photos/';
                    this._routeParam = routeParam;
                    this._albumId = this._routeParam.get('id');
                    this._albumsAPI += this._albumId + '/photos/';
                    dataService.set(this._albumsAPI, 12);
                    this.getAlbumPhotos();
                }
                AlbumPhotos.prototype.getAlbumPhotos = function () {
                    var _this = this;
                    this.dataService.get(this._page)
                        .subscribe(function (res) {
                        var data = res.json();
                        _this._photos = data.Items;
                        _this._displayingTotal = _this._photos.length;
                        _this._page = data.Page;
                        _this._pagesCount = data.TotalPages;
                        _this._totalCount = data.TotalCount;
                        _this._albumTitle = _this._photos[0].AlbumTitle;
                    }, function (error) {
                        if (error.status == 401) {
                            _this.utilityService.navigateToSignIn();
                        }
                        console.error('Error: ' + error);
                    }, function () { return console.log(_this._photos); });
                };
                AlbumPhotos.prototype.search = function (i) {
                    _super.prototype.search.call(this, i);
                    this.getAlbumPhotos();
                };
                ;
                AlbumPhotos.prototype.convertDateTime = function (date) {
                    return this.utilityService.convertDateTime(date);
                };
                AlbumPhotos.prototype.delete = function (photo) {
                    var _this = this;
                    var _removeResult = new operationResult_1.OperationResult(false, '');
                    this.notificationService.printConfirmationDialog('Are you sure you want to delete the photo?', function () {
                        _this.dataService.deleteResource(_this._photosAPI + photo.Id)
                            .subscribe(function (res) {
                            _removeResult.Succeeded = res.Succeeded;
                            _removeResult.Message = res.Message;
                        }, function (error) { return console.error('Error: ' + error); }, function () {
                            if (_removeResult.Succeeded) {
                                _this.notificationService.printSuccessMessage(photo.Title + ' removed from gallery.');
                                _this.getAlbumPhotos();
                            }
                            else {
                                _this.notificationService.printErrorMessage('Failed to remove photo');
                            }
                        });
                    });
                };
                AlbumPhotos = __decorate([
                    core_1.Component({
                        selector: 'album-photo',
                        providers: [notificationService_1.NotificationService],
                        templateUrl: './app/components/albumPhotos.html',
                        bindings: [notificationService_1.NotificationService],
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [dataService_1.DataService, utilityService_1.UtilityService, notificationService_1.NotificationService, router_1.RouteParams])
                ], AlbumPhotos);
                return AlbumPhotos;
            })(paginated_1.Paginated);
            exports_1("AlbumPhotos", AlbumPhotos);
        }
    }
});
