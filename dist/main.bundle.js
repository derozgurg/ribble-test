webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-user-manage></app-user-manage>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_spi_ng2__ = __webpack_require__("../../../../spi-ng2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_user_user_manage_component__ = __webpack_require__("../../../../../src/app/component/user/user-manage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_post_service__ = __webpack_require__("../../../../../src/app/service/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_album_album_list_dialog__ = __webpack_require__("../../../../../src/app/component/album/album-list.dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_album_service__ = __webpack_require__("../../../../../src/app/service/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_post_post_list_dialog__ = __webpack_require__("../../../../../src/app/component/post/post-list.dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_user_user_edit_dialog__ = __webpack_require__("../../../../../src/app/component/user/user-edit.dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var matarialImports = [
    __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatSidenavModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatListModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatCardModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatGridListModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatInputModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatDialogModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatSelectModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatSnackBarModule */]
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__component_album_album_list_dialog__["a" /* AlbumListDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_12__component_post_post_list_dialog__["a" /* PostListDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_13__component_user_user_edit_dialog__["a" /* EditUserDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_5__component_user_user_manage_component__["a" /* UserManageComponent */]
            ],
            imports: matarialImports.concat([
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_spi_ng2__["a" /* SpiModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */]
            ]),
            entryComponents: [__WEBPACK_IMPORTED_MODULE_10__component_album_album_list_dialog__["a" /* AlbumListDialogComponent */], __WEBPACK_IMPORTED_MODULE_12__component_post_post_list_dialog__["a" /* PostListDialogComponent */], __WEBPACK_IMPORTED_MODULE_13__component_user_user_edit_dialog__["a" /* EditUserDialogComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_9__service_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_11__service_album_service__["a" /* AlbumService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/component/album/album-list.dialog.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar >\r\n  <span>{{user.username}} - Albums</span>\r\n</mat-toolbar>\r\n\r\n<div mat-dialog-content >\r\n  <div class=\"oc-table\">\r\n    <div class=\"theader\">\r\n      <div class=\"margin-r\">Id</div>\r\n      <div class=\"margin-r\">Name</div>\r\n    </div>\r\n    <div class=\"oc-list-content y-scroll\" [ocFsceenlist]=\"exch\">\r\n      <div class=\"tbodytr\" *ngFor=\"let item of items\">\r\n        <div class=\"margin-r\" >{{item.id}}</div>\r\n        <div class=\"margin-r\" >{{item.title}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<div mat-dialog-actions >\r\n  <button\r\n    color=\"primary\"\r\n    mat-raised-button\r\n    (click)=\"close()\">Close</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/album/album-list.dialog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumListDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_album_service__ = __webpack_require__("../../../../../src/app/service/album.service.ts");
/**
 * Created by Ozgur Cimen on 17-Jan-18.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AlbumListDialogComponent = (function () {
    function AlbumListDialogComponent(dialogRef, user, albumService) {
        this.dialogRef = dialogRef;
        this.user = user;
        this.albumService = albumService;
        this.items = [];
    }
    AlbumListDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.albumService.list(this.user.id).subscribe(function (res) {
            _this.items = res;
        });
    };
    AlbumListDialogComponent.prototype.close = function () {
        this.dialogRef.close(true);
    };
    AlbumListDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-albumlist-dialog',
            template: __webpack_require__("../../../../../src/app/component/album/album-list.dialog.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__service_album_service__["a" /* AlbumService */]])
    ], AlbumListDialogComponent);
    return AlbumListDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/post/post-list.dialog.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar >\r\n  <span>{{user.username}} - Posts</span>\r\n</mat-toolbar>\r\n\r\n<div mat-dialog-content >\r\n  <div class=\"oc-table\">\r\n    <div class=\"theader\">\r\n      <div class=\"margin-r\">Id</div>\r\n      <div class=\"margin-r\">Name</div>\r\n    </div>\r\n    <div class=\"oc-list-content y-scroll\" [ocFsceenlist]=\"exch\">\r\n      <div class=\"tbodytr\" *ngFor=\"let item of items\">\r\n        <div class=\"margin-r\" >{{item.id}}</div>\r\n        <div class=\"margin-r\" >{{item.title}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<div mat-dialog-actions >\r\n  <button\r\n    color=\"primary\"\r\n    mat-raised-button\r\n    (click)=\"close()\">Close</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/post/post-list.dialog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostListDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_post_service__ = __webpack_require__("../../../../../src/app/service/post.service.ts");
/**
 * Created by Ozgur Cimen on 17-Jan-18.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var PostListDialogComponent = (function () {
    function PostListDialogComponent(dialogRef, user, postService) {
        this.dialogRef = dialogRef;
        this.user = user;
        this.postService = postService;
        this.items = [];
    }
    PostListDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.list(this.user.id).subscribe(function (res) {
            _this.items = res;
        });
    };
    PostListDialogComponent.prototype.close = function () {
        this.dialogRef.close(true);
    };
    PostListDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-postlist-dialog',
            template: __webpack_require__("../../../../../src/app/component/post/post-list.dialog.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__service_post_service__["a" /* PostService */]])
    ], PostListDialogComponent);
    return PostListDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/user/user-edit.dailog.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar >\r\n  <span>{{title}}</span>\r\n</mat-toolbar>\r\n\r\n<div mat-dialog-content>\r\n  <form [formGroup]=\"form\">\r\n    <mat-form-field class=\"full-width\">\r\n      <input\r\n        matInput\r\n        placeholder=\"User Name\"\r\n        formControlName=\"username\" >\r\n    </mat-form-field>\r\n    <mat-form-field class=\"full-width\">\r\n      <input\r\n        matInput\r\n        placeholder=\"Name\"\r\n        formControlName=\"name\" >\r\n    </mat-form-field>\r\n    <mat-form-field class=\"full-width\">\r\n      <input\r\n        matInput\r\n        type=\"email\"\r\n        placeholder=\"EMail\"\r\n        formControlName=\"email\" >\r\n    </mat-form-field>\r\n    <mat-form-field class=\"full-width\">\r\n      <input\r\n        matInput\r\n        placeholder=\"Phone\"\r\n        formControlName=\"phone\" >\r\n    </mat-form-field>\r\n  </form>\r\n</div>\r\n\r\n<div mat-dialog-actions style=\"\">\r\n  <button\r\n    [disabled]=\"!form.valid\"\r\n    color=\"primary\"\r\n    mat-raised-button\r\n    (click)=\"save()\" tabindex=\"2\">save</button>\r\n  <button mat-raised-button (click)=\"cancel()\" tabindex=\"-1\">Cancel</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/user/user-edit.dialog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Created by Ozgur Cimen on 17-Jan-18.
 */




var EditUserDialogComponent = (function () {
    function EditUserDialogComponent(dialogRef, user, snackBar, userService) {
        this.dialogRef = dialogRef;
        this.user = user;
        this.snackBar = snackBar;
        this.userService = userService;
        this.title = '';
        this.title = (user.username.length > 1) ? user.username + " - Edit" : 'New User';
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](user.name, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]),
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](user.username, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](user.email, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]),
            phone: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](user.phone, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]),
        });
    }
    EditUserDialogComponent.prototype.ngOnInit = function () {
    };
    EditUserDialogComponent.prototype.save = function () {
        var _this = this;
        this.snackBar.open('Saving...', '', {
            duration: 2000,
        });
        if (this.user.id) {
            this.userService.put(this.user).subscribe(function (res) {
                _this.snackBar.dismiss();
                _this.dialogRef.close(true);
            });
        }
        else {
            this.userService.post(this.user).subscribe(function (res) {
                _this.snackBar.dismiss();
                _this.dialogRef.close(true);
            });
        }
    };
    EditUserDialogComponent.prototype.cancel = function () {
        this.dialogRef.close(false);
    };
    EditUserDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-edituser-dialog',
            template: __webpack_require__("../../../../../src/app/component/user/user-edit.dailog.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */]])
    ], EditUserDialogComponent);
    return EditUserDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/user/user-manage.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\r\n  <mat-card-title>\r\n    <button mat-fab >\r\n      <mat-icon (click)=\"create()\" aria-label=\"Example icon-button with a heart icon\">add_circle</mat-icon>\r\n    </button>\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    <div class=\"oc-table\">\r\n      <div class=\"theader\">\r\n        <div class=\"margin-r\">User Name</div>\r\n        <div class=\"margin-r\">Name</div>\r\n        <div class=\"margin-r\">Email</div>\r\n\r\n        <div class=\"margin-r\" style=\"max-width: 40px;\"></div>\r\n        <div class=\"margin-r\" style=\"max-width: 40px;\"></div>\r\n        <div class=\"margin-r\" style=\"max-width: 40px;\"></div>\r\n        <div class=\"margin-r\" style=\"max-width: 40px;\"></div>\r\n      </div>\r\n\r\n      <div class=\"oc-list-content y-scroll\" [ocFsceenlist]=\"exch\">\r\n        <div class=\"tbodytr\" *ngFor=\"let item of items\">\r\n\r\n          <div class=\"margin-r\" >{{item.username}}</div>\r\n          <div class=\"margin-r\" >{{item.name}}</div>\r\n          <div class=\"margin-r\" >{{item.email}}</div>\r\n\r\n          <div class=\"margin-r\" style=\"max-width: 40px;\">\r\n            <button color=\"primary\"\r\n                    (click)=\"openAlbums(item)\"\r\n                    mat-mini-fab><mat-icon>album</mat-icon></button>\r\n          </div>\r\n          <div class=\"margin-r\" style=\"max-width: 40px;\">\r\n            <button color=\"primary\"\r\n                    (click)=\"openPosts(item)\"\r\n                    mat-mini-fab><mat-icon>local_post_office</mat-icon></button>\r\n          </div>\r\n          <div class=\"margin-r\" style=\"max-width: 40px;\">\r\n            <button color=\"accent\"\r\n                    (click)=\"edit(item)\"\r\n                    mat-mini-fab><mat-icon>edit</mat-icon></button>\r\n          </div>\r\n          <div class=\"margin-r\" style=\"max-width: 40px;\">\r\n            <button (click)=\"delete(item)\"\r\n                    color=\"warn\"\r\n                    mat-mini-fab><mat-icon>delete</mat-icon>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/component/user/user-manage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__album_album_list_dialog__ = __webpack_require__("../../../../../src/app/component/album/album-list.dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_post_list_dialog__ = __webpack_require__("../../../../../src/app/component/post/post-list.dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_edit_dialog__ = __webpack_require__("../../../../../src/app/component/user/user-edit.dialog.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Ozgur Cimen on 17-Jan-18.
 */






var UserManageComponent = (function () {
    function UserManageComponent(userService, dialog, snackBar) {
        this.userService = userService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.items = [];
    }
    UserManageComponent.prototype.ngOnInit = function () {
        this.initList();
    };
    UserManageComponent.prototype.initList = function () {
        var _this = this;
        this.snackBar.open('Loading...', '', {
            duration: 2000,
        });
        this.userService.list().subscribe(function (res) {
            _this.items = res;
            _this.snackBar.dismiss();
        });
    };
    UserManageComponent.prototype.openPosts = function (user) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__post_post_list_dialog__["a" /* PostListDialogComponent */], {
            data: user
        });
    };
    UserManageComponent.prototype.openAlbums = function (user) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__album_album_list_dialog__["a" /* AlbumListDialogComponent */], {
            data: user
        });
    };
    UserManageComponent.prototype.create = function () {
        this.edit({
            username: '', name: '', email: '', phone: ''
        });
    };
    UserManageComponent.prototype.delete = function (user) {
        var _this = this;
        this.snackBar.open('Deleting...', '', {
            duration: 2000,
        });
        this.userService.delete(user.id).subscribe(function (res) {
            _this.initList();
            _this.snackBar.dismiss();
        });
    };
    UserManageComponent.prototype.edit = function (user) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__user_edit_dialog__["a" /* EditUserDialogComponent */], {
            data: user
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.initList();
            }
        });
    };
    UserManageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-user-manage',
            template: __webpack_require__("../../../../../src/app/component/user/user-manage.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatSnackBar */]])
    ], UserManageComponent);
    return UserManageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/**
 * Created by Ozgur Cimen on 17-Jan-18.
 */

var ConfigDevelopment = {
    appName: 'app_name',
    endPoints: {
        api: 'https://jsonplaceholder.typicode.com'
    }
};
var ConfigProduction = {
    appName: 'app_name',
    endPoints: {
        api: 'https://jsonplaceholder.typicode.com'
    }
};
var ApplicationConfig = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].production ? ConfigProduction : ConfigDevelopment;


/***/ }),

/***/ "../../../../../src/app/service/album.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("../../../../../src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Ozgur Cimen on 17-Jan-18.
 */



var AlbumService = (function () {
    function AlbumService(httpClient) {
        this.httpClient = httpClient;
        this.url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ApplicationConfig */].endPoints.api + '/albums';
    }
    AlbumService.prototype.get = function (id) {
        return this.httpClient.get(this.url + "/" + id);
    };
    AlbumService.prototype.list = function (userId) {
        return this.httpClient.get(this.url);
    };
    AlbumService.prototype.delete = function (id) {
        return this.httpClient.delete(this.url + "/" + id);
    };
    AlbumService.prototype.post = function (item) {
        return this.httpClient.post(this.url, item);
    };
    AlbumService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AlbumService);
    return AlbumService;
}());



/***/ }),

/***/ "../../../../../src/app/service/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("../../../../../src/app/config.ts");
/**
 * Created by Ozgur Cimen on 17-Jan-18.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostService = (function () {
    function PostService(httpClient) {
        this.httpClient = httpClient;
        this.url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ApplicationConfig */].endPoints.api + '/posts';
    }
    PostService.prototype.get = function (id) {
        return this.httpClient.get(this.url + "/" + id);
    };
    PostService.prototype.list = function (userId) {
        return this.httpClient.get(this.url);
    };
    PostService.prototype.delete = function (id) {
        return this.httpClient.delete(this.url + "/" + id);
    };
    PostService.prototype.post = function (item) {
        return this.httpClient.post(this.url, item);
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "../../../../../src/app/service/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("../../../../../src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Ozgur Cimen on 17-Jan-18.
 */



var UserService = (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
        this.url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ApplicationConfig */].endPoints.api + '/users';
    }
    UserService.prototype.get = function (id) {
        return this.httpClient.get(this.url + "/" + id);
    };
    UserService.prototype.list = function () {
        return this.httpClient.get(this.url);
    };
    UserService.prototype.delete = function (id) {
        return this.httpClient.delete(this.url + "/" + id);
    };
    UserService.prototype.post = function (item) {
        return this.httpClient.post(this.url, item);
    };
    UserService.prototype.put = function (item) {
        return this.httpClient.put(this.url + "/" + item.id, item);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map