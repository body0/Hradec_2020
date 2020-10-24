(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _graf_init_graf_init_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graf-init/graf-init.component */ "./src/app/graf-init/graf-init.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");





var routes = [
    { path: '', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"], pathMatch: 'full' },
    { path: 'initGraf', component: _graf_init_graf_init_component__WEBPACK_IMPORTED_MODULE_3__["GrafInitComponent"] },
    { path: '**', redirectTo: '' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav>\n    <router-outlet></router-outlet>\n</app-nav>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'HR';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _graf_init_graf_init_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./graf-init/graf-init.component */ "./src/app/graf-init/graf-init.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__["LandingPageComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"],
                _graf_init_graf_init_component__WEBPACK_IMPORTED_MODULE_11__["GrafInitComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data-loader.service.ts":
/*!****************************************!*\
  !*** ./src/app/data-loader.service.ts ***!
  \****************************************/
/*! exports provided: DataLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLoaderService", function() { return DataLoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var DataLoaderService = /** @class */ (function () {
    function DataLoaderService(http) {
        this.http = http;
        this.NameRoute = 'by-name';
        this.LocationRoute = 'by-location';
        this.ApiOrigin = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ApiRoot;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Accept: 'application/json'
            })
        };
        this.LastLoadedInfo = null;
        this.LastPosition = {
            lat: 0,
            lng: 0
        };
        // this.getDataFromLocation('Brno');
    }
    DataLoaderService.prototype.getLastPositionInfo = function () {
        return this.LastPosition;
    };
    DataLoaderService.prototype.getLastLoadedInfo = function () {
        return this.LastLoadedInfo;
    };
    DataLoaderService.prototype.getDataFromLocation = function (name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body, ret, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        body = {
                            name: name
                        };
                        return [4 /*yield*/, this.http.post(this.ApiOrigin + this.NameRoute, JSON.stringify(body), this.httpOptions).toPromise()];
                    case 1:
                        ret = _a.sent();
                        this.LastLoadedInfo = ret;
                        return [2 /*return*/, ret];
                    case 2:
                        err_1 = _a.sent();
                        console.warn("Cannot get response for " + name + " with error " + err_1);
                        if (err_1.error) {
                            throw err_1.error;
                        }
                        throw err_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DataLoaderService.prototype.getLocationData = function (xCord, yCord) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body, ret, err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        body = {
                            lat: xCord,
                            lng: yCord
                        };
                        this.LastPosition = body;
                        return [4 /*yield*/, this.http.post(this.ApiOrigin + this.LocationRoute, JSON.stringify(body), this.httpOptions).toPromise()];
                    case 1:
                        ret = _a.sent();
                        this.LastLoadedInfo = ret;
                        return [2 /*return*/, ret];
                    case 2:
                        err_2 = _a.sent();
                        console.warn("Cannot get response for " + name + " with error " + err_2);
                        if (err_2.error) {
                            throw err_2.error;
                        }
                        throw err_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DataLoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DataLoaderService);
    return DataLoaderService;
}());



/***/ }),

/***/ "./src/app/globalStyle/bottomButton.css":
/*!**********************************************!*\
  !*** ./src/app/globalStyle/bottomButton.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".absoluteHeader {\n    position: fixed;\n    bottom: 1.5rem;\n    right: 1.5rem;\n    height: 3.5rem;\n    min-width: 3.5rem;\n    border-radius: 3.5rem;\n    background: var(--yLight);\n    padding: .5rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: bold;\n    /* box-shadow: 2px 2px 0px 0px var(--backgroudBottom); */\n    box-shadow: 4x 4px 10px 0px #555;\n    border: solid 1px var(--backgroudBottom);\n}\n.absoluteHeader > .material-icons {\n    font-size: 2.7rem;\n    color: var(--backgroudBottom);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsU3R5bGUvYm90dG9tQnV0dG9uLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYTtJQUNiLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLHdEQUF3RDtJQUN4RCxnQ0FBZ0M7SUFDaEMsd0NBQXdDO0FBQzVDO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsNkJBQTZCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvZ2xvYmFsU3R5bGUvYm90dG9tQnV0dG9uLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYnNvbHV0ZUhlYWRlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMS41cmVtO1xuICAgIHJpZ2h0OiAxLjVyZW07XG4gICAgaGVpZ2h0OiAzLjVyZW07XG4gICAgbWluLXdpZHRoOiAzLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMy41cmVtO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXlMaWdodCk7XG4gICAgcGFkZGluZzogLjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC8qIGJveC1zaGFkb3c6IDJweCAycHggMHB4IDBweCB2YXIoLS1iYWNrZ3JvdWRCb3R0b20pOyAqL1xuICAgIGJveC1zaGFkb3c6IDR4IDRweCAxMHB4IDBweCAjNTU1O1xuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWJhY2tncm91ZEJvdHRvbSk7XG59XG4uYWJzb2x1dGVIZWFkZXIgPiAubWF0ZXJpYWwtaWNvbnMge1xuICAgIGZvbnQtc2l6ZTogMi43cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdWRCb3R0b20pO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/globalStyle/floating.css":
/*!******************************************!*\
  !*** ./src/app/globalStyle/floating.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    margin: 0;\n}\nh2 {\n    margin: .8rem .0rem .4rem .0rem;\n    font-size: 1.3rem;\n    font-weight: 400;\n}\n.floating{\n    display: flex;\n    flex-direction: column;\n    /* max-width: 850px; */\n    max-width: 70rem;\n    position: relative;\n    width: 97%;\n    margin: .5rem auto;\n    background-color: white;\n    /* background-color: rgb(255, 255, 255, 0.8); */\n    /* padding: 0 0 .7rem 0; */\n    /* box-shadow:  2px 2px 6px #555555; */\n    box-shadow: 1px 2px 1px 1px #555;\n    box-shadow: 1px 2px 1px 1px rgba(100, 100, 100, 0.5);\n    overflow: auto;\n}\n.floating > div {\n    margin: .5rem 1rem .5rem 1rem;\n    height: 100%;\n}\n.floatingHeader {\n    margin: 0;\n    padding: .6rem .9rem;\n    background-color: var(--yLight);\n    color: var(--backgroudBottom);\n    font-size: 1.2rem;\n}\n.floatingSlpit {\n    /* margin: 1rem auto;\n    display: flex;\n    max-width: 55rem;\n    position: relative;\n    width: 97%;\n    overflow: auto; */\n}\n.floatingSlpit > div {\n    width: 100%;\n    margin-right: 1rem;\n    margin-left: 1rem;\n}\n.floatingSlpit > div:first-child {\n    margin-left: 0;\n}\n.floatingSlpit > div:last-child {\n    margin-right: 0;\n}\n.floatingSlpitNoSpace > div {\n    width: 100%;\n}\n.floatingSlpitThirdA {\n    margin: .5rem auto;\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    max-width: 70rem;\n    position: relative;\n    width: 97%;\n    overflow: hidden;\n}\n.floatingSlpitThirdB {\n    margin: .5rem auto;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    max-width: 70rem;\n    position: relative;\n    width: 97%;\n    overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsU3R5bGUvZmxvYXRpbmcuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QiwrQ0FBK0M7SUFDL0MsMEJBQTBCO0lBQzFCLHNDQUFzQztJQUN0QyxnQ0FBZ0M7SUFDaEMsb0RBQW9EO0lBQ3BELGNBQWM7QUFDbEI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxTQUFTO0lBQ1Qsb0JBQW9CO0lBQ3BCLCtCQUErQjtJQUMvQiw2QkFBNkI7SUFDN0IsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSTs7Ozs7cUJBS2lCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbFN0eWxlL2Zsb2F0aW5nLmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICAgIG1hcmdpbjogMDtcbn1cbmgyIHtcbiAgICBtYXJnaW46IC44cmVtIC4wcmVtIC40cmVtIC4wcmVtO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uZmxvYXRpbmd7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8qIG1heC13aWR0aDogODUwcHg7ICovXG4gICAgbWF4LXdpZHRoOiA3MHJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDk3JTtcbiAgICBtYXJnaW46IC41cmVtIGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuOCk7ICovXG4gICAgLyogcGFkZGluZzogMCAwIC43cmVtIDA7ICovXG4gICAgLyogYm94LXNoYWRvdzogIDJweCAycHggNnB4ICM1NTU1NTU7ICovXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAxcHggMXB4ICM1NTU7XG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAxcHggMXB4IHJnYmEoMTAwLCAxMDAsIDEwMCwgMC41KTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cbi5mbG9hdGluZyA+IGRpdiB7XG4gICAgbWFyZ2luOiAuNXJlbSAxcmVtIC41cmVtIDFyZW07XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLmZsb2F0aW5nSGVhZGVyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogLjZyZW0gLjlyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teUxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VkQm90dG9tKTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cbi5mbG9hdGluZ1NscGl0IHtcbiAgICAvKiBtYXJnaW46IDFyZW0gYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogNTVyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA5NyU7XG4gICAgb3ZlcmZsb3c6IGF1dG87ICovXG59XG4uZmxvYXRpbmdTbHBpdCA+IGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuLmZsb2F0aW5nU2xwaXQgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xufVxuLmZsb2F0aW5nU2xwaXQgPiBkaXY6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLmZsb2F0aW5nU2xwaXROb1NwYWNlID4gZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmZsb2F0aW5nU2xwaXRUaGlyZEEge1xuICAgIG1hcmdpbjogLjVyZW0gYXV0bztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcbiAgICBtYXgtd2lkdGg6IDcwcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogOTclO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZmxvYXRpbmdTbHBpdFRoaXJkQiB7XG4gICAgbWFyZ2luOiAuNXJlbSBhdXRvO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xuICAgIG1heC13aWR0aDogNzByZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA5NyU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/graf-init/graf-init.component.css":
/*!***************************************************!*\
  !*** ./src/app/graf-init/graf-init.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n.info > p {\n    font-size: 1.3rem;\n    color: #444;\n    margin: .5rem 0;\n    display: flex;\n    flex-direction: column;\n}\n.info > p > span:not(.description) {\n    margin-left: 1rem;\n    margin-top: .2rem;\n    display: flex;\n}\n.info > p > span:not(.description) >  .material-icons {\n    margin-right: .5rem;\n}\n.info > p > .description {\n    font-size: .9rem;\n}\n.info > mat-divider {\n    width: 100%;\n}\n.mainGraf {\n    margin-top: 2rem;\n}\n.legend {\n    padding: .8rem .5rem;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center\n}\n.legend > div {\n    font-size: .9rem;\n    color: #555;\n    display: flex;\n    margin: .4rem 0;\n}\n.legendColor {\n    height: 1em;\n    width: 1em;\n    border-radius: .3em;\n    margin-right: .5em;\n}\n.bigNumber {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n}\n.bigNumber > .bigPart {\n    font-size: 3rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.bigNumber > .bigPart > .material-icons {\n    font-size: 4rem;\n    margin-right: .2em;\n}\n.bigNumber > .smallPart {\n    font-size: 1.7rem;\n    margin-top: 1.2rem;\n    font-weight: 100;\n}\n.gragName {\n    font-size: .9rem;\n    color: #555;\n}\n.infoBig {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    font-size: 1.5rem;\n}\n.infoBig > div {\n    display: flex;\n    flex-direction: column;\n    padding: 2rem 1rem;\n}\n.infoBig > div > div {\n    display: flex;\n    align-items: center;\n    padding-bottom: .7rem;\n}\n.infoBig > div > div > .material-icons {\n    margin-right: .5rem;\n}\n.infoBig > .infoBigTitle {\n    font-size: 2rem;\n    \n}\nmat-toolbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background: #F4B400;\n    color: #012B3F;\n}\nmat-toolbar > div {\n    display: flex;\n    align-items: center; \n    font-size: 1.5rem;\n    font-weight: 100;   \n}\nmat-toolbar > .back {\n    border: solid 2px #012B3F;\n    border-radius: .4rem;\n    padding: .2rem;   \n}\nmat-toolbar img {\n    height: 3.7rem;\n    margin-right: .5rem;    \n}\n/* mat-toolbar > div > * {\n    margin: 0 .3rem; \n}\n.floatingContent {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n.searchIcon {\n    color: var(--backgroundSec);\n}\n\n.input {\n    font-size: 18px;\n    padding: 0;\n    display: block;\n    border: none;\n    background: var(--header);\n   border-bottom: 1px solid white;\n    color: white;\n    max-width: 0;\n    transition: max-width .75s ease-out;\n}\ninput:focus { \n    outline:none;\n    border-bottom: 2px solid white;\n    max-width: 1000px;\n    padding: 10px 10px 10px 5px;\n } */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JhZi1pbml0L2dyYWYtaW5pdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QjtBQUNKO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlOztBQUVuQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQThCSSIsImZpbGUiOiJzcmMvYXBwL2dyYWYtaW5pdC9ncmFmLWluaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uaW5mbyA+IHAge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIG1hcmdpbjogLjVyZW0gMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uaW5mbyA+IHAgPiBzcGFuOm5vdCguZGVzY3JpcHRpb24pIHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAuMnJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmluZm8gPiBwID4gc3Bhbjpub3QoLmRlc2NyaXB0aW9uKSA+ICAubWF0ZXJpYWwtaWNvbnMge1xuICAgIG1hcmdpbi1yaWdodDogLjVyZW07XG59XG4uaW5mbyA+IHAgPiAuZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogLjlyZW07XG59XG5cbi5pbmZvID4gbWF0LWRpdmlkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLm1haW5HcmFmIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4ubGVnZW5kIHtcbiAgICBwYWRkaW5nOiAuOHJlbSAuNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcbn1cbi5sZWdlbmQgPiBkaXYge1xuICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgY29sb3I6ICM1NTU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IC40cmVtIDA7XG59XG4ubGVnZW5kQ29sb3Ige1xuICAgIGhlaWdodDogMWVtO1xuICAgIHdpZHRoOiAxZW07XG4gICAgYm9yZGVyLXJhZGl1czogLjNlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IC41ZW07XG59XG5cbi5iaWdOdW1iZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi5iaWdOdW1iZXIgPiAuYmlnUGFydCB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5iaWdOdW1iZXIgPiAuYmlnUGFydCA+IC5tYXRlcmlhbC1pY29ucyB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIG1hcmdpbi1yaWdodDogLjJlbTtcbn1cbi5iaWdOdW1iZXIgPiAuc21hbGxQYXJ0IHtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICBtYXJnaW4tdG9wOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbi5ncmFnTmFtZSB7XG4gICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICBjb2xvcjogIzU1NTtcbn1cbi5pbmZvQmlnIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG4uaW5mb0JpZyA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcbn1cbi5pbmZvQmlnID4gZGl2ID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IC43cmVtO1xufVxuLmluZm9CaWcgPiBkaXYgPiBkaXYgPiAubWF0ZXJpYWwtaWNvbnMge1xuICAgIG1hcmdpbi1yaWdodDogLjVyZW07XG59XG4uaW5mb0JpZyA+IC5pbmZvQmlnVGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBcbn1cblxubWF0LXRvb2xiYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI0Y0QjQwMDtcbiAgICBjb2xvcjogIzAxMkIzRjtcbn1cbm1hdC10b29sYmFyID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7ICAgXG59XG5tYXQtdG9vbGJhciA+IC5iYWNrIHtcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjMDEyQjNGO1xuICAgIGJvcmRlci1yYWRpdXM6IC40cmVtO1xuICAgIHBhZGRpbmc6IC4ycmVtOyAgIFxufVxubWF0LXRvb2xiYXIgaW1nIHtcbiAgICBoZWlnaHQ6IDMuN3JlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IC41cmVtOyAgICBcbn1cblxuLyogbWF0LXRvb2xiYXIgPiBkaXYgPiAqIHtcbiAgICBtYXJnaW46IDAgLjNyZW07IFxufVxuLmZsb2F0aW5nQ29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbn1cbi5zZWFyY2hJY29uIHtcbiAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZFNlYyk7XG59XG5cbi5pbnB1dCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWhlYWRlcik7XG4gICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1heC13aWR0aDogMDtcbiAgICB0cmFuc2l0aW9uOiBtYXgtd2lkdGggLjc1cyBlYXNlLW91dDtcbn1cbmlucHV0OmZvY3VzIHsgXG4gICAgb3V0bGluZTpub25lO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCA1cHg7XG4gfSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/graf-init/graf-init.component.html":
/*!****************************************************!*\
  !*** ./src/app/graf-init/graf-init.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"floatingSlpit\">\n  <div class=\"floating\">\n    <h2 class=\"floatingHeader\">Position</h2>\n    <div class=\"info\">\n      <p>\n        <span class=\"description\">Obec:</span>\n        <span>\n          <span class=\"material-icons\">business</span>\n          <span>{{Confinig.name}}</span>\n        </span>\n      </p>\n      <mat-divider></mat-divider>\n      <p>\n        <span class=\"description\">Nakazeni:</span>\n        <span style=\"color: var(--backgroundWarn)\">\n          <span class=\"material-icons\">coronavirus</span>\n          <span>{{Confinig.curent}}</span>\n        </span>\n      </p>\n      <mat-divider></mat-divider>\n      <p>\n        <span class=\"description\">Nakažení na 100:</span>\n        <span style=\"color: var(--backgroundWarn)\">\n          <span class=\"material-icons\">coronavirus</span>\n          <span>{{Confinig.curentPer}}%</span>\n        </span>\n      </p>\n    </div>\n  </div>\n  <div class=\"floating\">\n    <h2 class=\"floatingHeader\">Position</h2>\n    <div class=\"info\">\n      <p>\n        <span class=\"description\">Populace:</span>\n        <span>\n          <span class=\"material-icons\">perm_identity</span>\n          <span>{{Confinig.population}}</span>\n        </span>\n      </p>\n      <mat-divider></mat-divider>\n      <p>\n        <span class=\"description\">Nově nakažení</span>\n        <span style=\"color: var(--backgroundWarn)\">\n          <span class=\"material-icons\">addchart</span>\n          <span>+{{Confinig.increse}}</span>\n        </span>\n      </p>\n      <mat-divider></mat-divider>\n      <p>\n        <span class=\"description\">R faktor:</span>\n        <span>\n          <span class=\"material-icons\">\n            trending_up\n          </span>\n          <span>{{Confinig.multiplicationFactor}}</span>\n          <span class=\"material-icons\" style=\"font-weight: bold; margin-left: 1rem;\" [ngStyle]=\"{color: WarningColor}\">\n            error_outline\n          </span>\n        </span>\n      </p>\n    </div>\n  </div>\n</div>\n<div class=\"floatingSlpit\">\n  <div class=\"floating\">\n    <h2 class=\"floatingHeader\">Graph</h2>\n    <div>\n      <div class=\"mainGraf\" #grafMain></div>\n      <div class=\"legend\">\n        <div>\n          <div class=\"legendColor\" style=\"background: #F4B400\"></div>\n          <span>Aktuální vývoj</span>\n        </div>\n        <div>\n          <div class=\"legendColor\" style=\"background: #DB4437\"></div>\n          <span>Pesimistická předpověď</span>\n        </div>\n        <div>\n          <div class=\"legendColor\" style=\"background: #4285F4\"></div>\n          <span>Optimistická předpověď</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->\n<!-- <mat-toolbar>\n  <div>\n    <span class=\"material-icons\">\n      android\n    </span>\n    <span>Ohryzecek</span>\n  </div>\n  <div>\n    <span (click)=\"search.focus()\" class=\"material-icons\" style=\"font-size: 2rem;\">\n      search\n    </span>\n    <input #search class=\"input\" type=\"text\" autocomplete=\"off\" placeholder=\"Location\" [(ngModel)]=\"value\">\n  </div>\n</mat-toolbar> -->\n<mat-toolbar>\n  <div (click)=\"redirectBack()\" class=\"back\">\n    <span class=\"material-icons\">\n      arrow_back\n    </span>\n  </div>\n  <div>\n    <img src=\"assets/logo1.svg\" alt=\"\">\n    <span>Cestovateluv pruvodce karantenou</span>\n  </div>\n  <!-- <div>\n    <span (click)=\"search.focus()\" class=\"material-icons\" style=\"font-size: 2rem;\">\n      search\n    </span>\n    <input #search class=\"input\" type=\"text\" autocomplete=\"off\" placeholder=\"Location\" [(ngModel)]=\"value\">\n  </div> -->\n</mat-toolbar>\n<div class=\"floatingSlpit floatingSlpitThirdA\" style=\"grid-template-columns: 5fr 2fr;\">\n  <div class=\"floating\">\n    <div class=\"info\">\n      <p>\n        <span class=\"description\">Obec:</span>\n        <span>\n          <span class=\"material-icons\">business</span>\n          <span>{{Confinig?.name}}</span>\n        </span>\n      </p>\n      <mat-divider></mat-divider>\n      <p>\n        <span class=\"description\">Počet obyvatel:</span>\n        <span>\n          <span class=\"material-icons\">perm_identity</span>\n          <span>{{Confinig?.population}}</span>\n        </span>\n      </p>\n      <mat-divider></mat-divider>\n      <p>\n        <span class=\"description\">Nakažení na 100 obyvatel:</span>\n        <span style=\"color: var(--backgroundWarn)\">\n          <span class=\"material-icons\">coronavirus</span>\n          <span>{{Confinig?.p | number:'1.2-5'}}%</span>\n        </span>\n      </p>\n    </div>\n\n  </div>\n  <div class=\"floating\">\n    <div style=\"margin: 0\">\n      <div style=\"height: 100%; width: 100%;\" #map></div>\n    </div>\n  </div>\n</div>\n<div class=\"floating\">\n  <div class=\"infoBig\">\n    <div>\n      <div>\n        <span class=\"material-icons\">\n          trending_up\n        </span>\n        <span>{{Confinig?.r | number:'1.2-3'}}</span>\n      </div>\n      <!-- <span class=\"material-icons\" style=\"font-weight: bold; margin-left: 1rem;\" [ngStyle]=\"{color: WarningColor}\">\n          error_outline\n        </span> -->\n      <span class=\"infoBigTitle\">\n        R faktor\n      </span>\n    </div>\n    <div>\n      <div>\n        <span class=\"material-icons\" style=\"font-weight: bold; margin-left: 1rem;\" [ngStyle]=\"{color: WarningColor}\">\n          error_outline\n        </span>\n        <span>{{Confinig?.cach | number:'1.2-3'}}%</span>\n      </div>\n      <span class=\"infoBigTitle\">\n        Šance nakažení\n      </span>\n    </div>\n  </div>\n</div>\n\n<div class=\"floatingSlpitNoSpace floatingSlpitThirdB\">\n  <div class=\"floating\" style=\"background: var(--yLight)\">\n    <!-- <h2 class=\"floatingHeader\">Nakazeni</h2> -->\n    <div>\n      <div class=\"bigNumber\">\n        <span class=\"bigPart\">\n          <span class=\"material-icons\">coronavirus</span>\n          <span>{{Confinig?.abs}}</span>\n        </span>\n        <span class=\"smallPart\">Nakažení</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"floating\">\n    <div>\n      <span class=\"gragName\">Nakažení</span>\n      <div class=\"mainGraf\" #grafAbs></div>\n      <div class=\"legend\">\n        <div>\n          <div class=\"legendColor\" style=\"background: #F4B400\"></div>\n          <span>Aktuální vývoj</span>\n        </div>\n        <div>\n          <div class=\"legendColor\" style=\"background: #DB4437\"></div>\n          <span>Pesimistická předpověď</span>\n        </div>\n        <div>\n          <div class=\"legendColor\" style=\"background: #4285F4\"></div>\n          <span>Optimistická předpověď</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"floatingSlpitNoSpace floatingSlpitThirdA\">\n  <div class=\"floating\">\n    <div>\n      <span class=\"gragName\">Přírůstky</span>\n      <div class=\"mainGraf\" #grafRel></div>\n      <div class=\"legend\">\n        <div>\n          <div class=\"legendColor\" style=\"background: #F4B400\"></div>\n          <span>Aktuální vývoj</span>\n        </div>\n        <div>\n          <div class=\"legendColor\" style=\"background: #DB4437\"></div>\n          <span>Pesimistická předpověď</span>\n        </div>\n        <div>\n          <div class=\"legendColor\" style=\"background: #4285F4\"></div>\n          <span>Optimistická předpověď</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"floating\" style=\"background: var(--yLight)\">\n    <div>\n      <div class=\"bigNumber\">\n        <span class=\"bigPart\">\n          <span class=\"material-icons\">addchart</span>\n          <span>{{Confinig?.rel}}</span>\n        </span>\n        <span class=\"smallPart\">Přírůstky</span>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/graf-init/graf-init.component.ts":
/*!**************************************************!*\
  !*** ./src/app/graf-init/graf-init.component.ts ***!
  \**************************************************/
/*! exports provided: GrafInitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrafInitComponent", function() { return GrafInitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-loader.service */ "./src/app/data-loader.service.ts");




var GrafInitComponent = /** @class */ (function () {
    function GrafInitComponent(dataLoaderService, router) {
        this.dataLoaderService = dataLoaderService;
        this.router = router;
        this.Error = '';
        this.WarningColor = '';
        this.loadData();
        dataLoaderService.getDataFromLocation('Brno');
    }
    GrafInitComponent.prototype.loadData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, position;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                data = this.dataLoaderService.getLastLoadedInfo();
                // const data = await this.dataLoaderService.getDataFromLocation('Brno');
                if (!data) {
                    this.Error = 'No data To Load';
                    return [2 /*return*/];
                }
                this.Confinig = data;
                if (this.Confinig.r < 1) {
                    this.WarningColor = '#8cff1a';
                }
                else if (this.Confinig.r < 1.2) {
                    this.WarningColor = 'var(--yLight)';
                }
                else {
                    this.WarningColor = 'var(--backgroundWarn)';
                }
                this.createRelative();
                this.createAbsolute();
                position = this.dataLoaderService.getLastPositionInfo();
                setTimeout(function () {
                    _this.initMap(position);
                }, 100);
                return [2 /*return*/];
            });
        });
    };
    GrafInitComponent.prototype.createAbsolute = function () {
        var _this = this;
        var grafData = [
            ['', '', '', '']
        ];
        this.Confinig.caseCurrent.forEach(function (elm) {
            var subArr = [elm.date, null, null, elm.abs];
            grafData.push(subArr);
        });
        var firstFuture = this.Confinig.caseFuture[0];
        // const lastCurent = this.Confinig.caseCurrent[this.Confinig.caseCurrent.length - 1];
        grafData.push([firstFuture.date, firstFuture.neg.abs, firstFuture.opt.abs, firstFuture.opt.abs]);
        for (var i = 1; i < this.Confinig.caseFuture.length; i++) {
            var elm = this.Confinig.caseFuture[i];
            var subArr = [elm.date, elm.neg.abs, elm.opt.abs, null];
            grafData.push(subArr);
        }
        setTimeout(function () {
            var google = window.google;
            google.charts.load('current', { 'packages': ['line'] });
            google.charts.setOnLoadCallback(function () {
                var data = google.visualization.arrayToDataTable(grafData);
                var options = {
                    // title: 'Company Performance',
                    curveType: 'function',
                    legend: { position: 'none' }
                };
                var chart = new google.charts.Line(_this.grafAbs.nativeElement);
                chart.draw(data, google.charts.Line.convertOptions(options));
            });
        }, 100); // TO DO
    };
    GrafInitComponent.prototype.createRelative = function () {
        var _this = this;
        var grafData = [
            ['', '', '', '']
        ];
        this.Confinig.caseCurrent.forEach(function (elm) {
            var subArr = [elm.date, null, null, elm.rel];
            grafData.push(subArr);
        });
        var firstFuture = this.Confinig.caseFuture[0];
        // const lastCurent = this.Confinig.caseCurrent[this.Confinig.caseCurrent.length - 1];
        grafData.push([firstFuture.date, firstFuture.neg.rel, firstFuture.opt.rel, firstFuture.opt.rel]);
        for (var i = 1; i < this.Confinig.caseFuture.length; i++) {
            var elm = this.Confinig.caseFuture[i];
            var subArr = [elm.date, elm.neg.rel, elm.opt.rel, null];
            grafData.push(subArr);
        }
        setTimeout(function () {
            var google = window.google;
            google.charts.load('current', { 'packages': ['line'] });
            google.charts.setOnLoadCallback(function () {
                var data = google.visualization.arrayToDataTable(grafData);
                var options = {
                    // title: 'Company Performance',
                    curveType: 'function',
                    legend: { position: 'none' }
                };
                var chart = new google.charts.Line(_this.grafRel.nativeElement);
                chart.draw(data, google.charts.Line.convertOptions(options));
            });
        }, 100); // TO DO
    };
    GrafInitComponent.prototype.initMap = function (position) {
        // The location of Uluru
        var position_city = position;
        // The map, centered at Uluru
        var google = window.google;
        var map = new google.maps.Map(this.map.nativeElement, {
            zoom: 8,
            disableDefaultUI: true,
            zoomControl: false,
            draggable: false,
            streetViewControl: false,
            Fullscreencontrol: false,
            center: position_city,
        });
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({
            position: position_city,
            map: map,
        });
    };
    GrafInitComponent.prototype.ngAfterViewInit = function () {
        // this.init();
    };
    GrafInitComponent.prototype.redirectBack = function () {
        this.router.navigate(['/']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('grafAbs'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GrafInitComponent.prototype, "grafAbs", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('grafRel'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GrafInitComponent.prototype, "grafRel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GrafInitComponent.prototype, "map", void 0);
    GrafInitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-graf-init',
            template: __webpack_require__(/*! ./graf-init.component.html */ "./src/app/graf-init/graf-init.component.html"),
            styles: [__webpack_require__(/*! ../globalStyle/floating.css */ "./src/app/globalStyle/floating.css"), __webpack_require__(/*! ../globalStyle/bottomButton.css */ "./src/app/globalStyle/bottomButton.css"), __webpack_require__(/*! ./graf-init.component.css */ "./src/app/graf-init/graf-init.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_loader_service__WEBPACK_IMPORTED_MODULE_3__["DataLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GrafInitComponent);
    return GrafInitComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n    height: 100vh;\n    width: 100%;\n    margin: auto;\n}\n\n\n.absoluteFooter {\n    background: white;\n    position: absolute;\n    top: 1rem;\n    left: 2rem;\n    /* padding: .5rem 1rem; */\n    border-radius: .6rem;\n    /* box-shadow: 2px 2px 5px 0px #555; */\n    box-shadow: 4px 4px 10px 0px #555;\n}\n\n\n.absoluteFooter > h2 {\n    color: var(--backgroudBottom);\n    border-bottom: 3px solid var(--backgroudBottom);\n    font-size: 1.4rem;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    /* width: fit-content; */\n    padding: .8rem 5rem;\n    background: var(--yLight);\n    width: 100%;\n    border-radius: .6rem .6rem 0 0;\n    box-sizing: border-box;\n    font-weight: 500;\n    margin: 0 auto;\n}\n\n\n.absoluteFooter > p {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-right: 1rem;\n    font-size: 1.2rem;\n}\n\n\n.forwardButtonWraper {\n    display: flex;\n    justify-content: stretch;\n    padding: .5rem 1rem;\n}\n\n\n.forwardButton { \n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    background: var(--yLight);\n}\n\n\n.covidInfo {\n    display: flex;\n    justify-content: space-evenly;\n    margin: .8rem .3rem;\n}\n\n\n.covidInfo > p {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-right: 1rem;\n    font-size: 1.3rem;\n}\n\n\n.covidInfo > p > span:not(.material-icons) {\n    color: #F44336;\n}\n\n\n.covidInfo > p > .material-icons {\n    margin-right: .5rem;\n}\n\n\n.input {\n    color: var(--backgroudBottom);\n    font-size: 1.2rem;\n    padding: 0;\n    display: block;\n    border: none;\n    background: transparent;\n   /*  border-bottom: 1px solid white; */\n    max-width: 0;\n    transition: max-width .75s ease-out;\n    color: var(--backgroudBottom);\n}\n\n\n.input::-moz-placeholder {\n    color: var(--backgroudBottom);\n    margin-left: 1rem;\n    text-indent: .5rem;\n}\n\n\n.input::placeholder {\n    color: var(--backgroudBottom);\n    margin-left: 1rem;\n    text-indent: .5rem;\n}\n\n\n.input:focus { \n    outline:none;\n    border-bottom: 2px solid var(--backgroudBottom);\n    max-width: 1000px;\n    padding: 2px 0px;\n    margin: 0 .5rem;\n }\n\n\n@media only screen and (max-width: 700px) {\n    .absoluteFooter {\n        right: 2rem;\n    }\n    .absoluteFooter > h2 {\n        padding: .8rem 1rem;\n    }\n}\n\n\n.info {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n\n.info > p {\n    font-size: 1.3rem;\n    color: #444;\n    margin: .5rem 0;\n    display: flex;\n    flex-direction: column;\n}\n\n\n.info > p > span:not(.description) {\n    margin-left: 1rem;\n    margin-top: .2rem;\n}\n\n\n.info > p > .description {\n    font-size: .9rem;\n}\n\n\n.info > mat-divider {\n    width: 100%;\n}\n\n\n.bigButton {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 1rem;\n    font-size: 1.2rem;\n    fill: #333;\n    /* max-height: 6rem; */\n}\n\n\n.bigButton > .material-icons {\n    font-size: 5rem;\n}\n\n\n.bigButton > img {\n    width: 5rem;\n}\n\n\n.bigButton > svg {\n    width: 8rem;\n}\n\n\n.bigButtonHowerable:hover:enabled {\n    /* color: #e0e0e0; */\n    background-color: #0B99D8;\n}\n\n\n.bigButtonHowerable:hover:enabled .material-icons, .bigButtonHowerable:hover:enabled span{\n    color: #eee;\n}\n\n\n.bigButtonHowerable:hover:enabled svg{\n    fill: #eee;\n}\n\n\n.bigButtonWraper {\n    display: flex;\n    justify-content: center;\n}\n\n\n.bigButtonWraper > button {\n    margin: 1rem;\n}\n\n\n.bigButtonSmall {\n    flex-direction: row;\n    padding: .5rem 0;\n}\n\n\n.bigButtonSmall > span {\n    font-size: 1em;\n}\n\n\n.bigButtonSmall > .material-icons {\n    margin-right: .3rem;\n    font-size: 1.5em;\n}\n\n\n.bigButtonSmall > img {\n    margin-right: .5rem;\n    width: 1.5em;\n}\n\n\n.activeButton {\n    /* color: #e0e0e0; */\n    background-color: #0B99D8;\n}\n\n\n.activeButton .material-icons, .activeButton span{\n    color: #eee;\n}\n\n\n.activeButton svg{\n    fill: #eee;\n}\n\n\n@media only screen and (max-width: 700px) {\n    .bigButtonWraper {\n        flex-direction: column;\n    }\n    .bigButtonWraper > button {\n        margin: .8rem 0;\n    }\n    .bigButton {\n        flex-direction: row;\n        padding: .5rem 0;\n    }\n    .bigButton > span {\n        font-size: 1em;\n    }\n    .bigButton > .material-icons {\n        margin-right: .3rem;\n        font-size: 1.5em;\n    }\n    .bigButton > img {\n        margin-right: .5rem;\n        width: 1.5em;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLHNDQUFzQztJQUN0QyxpQ0FBaUM7QUFDckM7OztBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLCtDQUErQztJQUMvQyxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOzs7QUFDQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsbUJBQW1CO0FBQ3ZCOzs7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7OztBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7OztBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOzs7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixjQUFjO0lBQ2QsWUFBWTtJQUNaLHVCQUF1QjtHQUN4QixxQ0FBcUM7SUFDcEMsWUFBWTtJQUNaLG1DQUFtQztJQUNuQyw2QkFBNkI7QUFDakM7OztBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7OztBQUpBO0lBQ0ksNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7OztBQUNBO0lBQ0ksWUFBWTtJQUNaLCtDQUErQztJQUMvQyxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7Q0FDbEI7OztBQUdBO0lBQ0c7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKOzs7QUFLQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOzs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7OztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksV0FBVztBQUNmOzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COzs7QUFDQTtJQUNJLFdBQVc7QUFDZjs7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7OztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLHlCQUF5QjtBQUM3Qjs7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7OztBQUNBO0lBQ0ksVUFBVTtBQUNkOzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7OztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOzs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7OztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIseUJBQXlCO0FBQzdCOzs7QUFDQTtJQUNJLFdBQVc7QUFDZjs7O0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7OztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuXG4uYWJzb2x1dGVGb290ZXIge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDFyZW07XG4gICAgbGVmdDogMnJlbTtcbiAgICAvKiBwYWRkaW5nOiAuNXJlbSAxcmVtOyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IC42cmVtO1xuICAgIC8qIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDBweCAjNTU1OyAqL1xuICAgIGJveC1zaGFkb3c6IDRweCA0cHggMTBweCAwcHggIzU1NTtcbn1cbi5hYnNvbHV0ZUZvb3RlciA+IGgyIHtcbiAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VkQm90dG9tKTtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tYmFja2dyb3VkQm90dG9tKTtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcbiAgICB3aWR0aDogLW1vei1maXQtY29udGVudDtcbiAgICAvKiB3aWR0aDogZml0LWNvbnRlbnQ7ICovXG4gICAgcGFkZGluZzogLjhyZW0gNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS15TGlnaHQpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IC42cmVtIC42cmVtIDAgMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG4uYWJzb2x1dGVGb290ZXIgPiBwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuLmZvcndhcmRCdXR0b25XcmFwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XG59XG4uZm9yd2FyZEJ1dHRvbiB7IFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS15TGlnaHQpO1xufVxuLmNvdmlkSW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBtYXJnaW46IC44cmVtIC4zcmVtO1xufVxuLmNvdmlkSW5mbyA+IHAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG4uY292aWRJbmZvID4gcCA+IHNwYW46bm90KC5tYXRlcmlhbC1pY29ucykge1xuICAgIGNvbG9yOiAjRjQ0MzM2O1xufVxuLmNvdmlkSW5mbyA+IHAgPiAubWF0ZXJpYWwtaWNvbnMge1xuICAgIG1hcmdpbi1yaWdodDogLjVyZW07XG59XG4uaW5wdXQge1xuICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdWRCb3R0b20pO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgLyogIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTsgKi9cbiAgICBtYXgtd2lkdGg6IDA7XG4gICAgdHJhbnNpdGlvbjogbWF4LXdpZHRoIC43NXMgZWFzZS1vdXQ7XG4gICAgY29sb3I6IHZhcigtLWJhY2tncm91ZEJvdHRvbSk7XG59XG4uaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VkQm90dG9tKTtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICB0ZXh0LWluZGVudDogLjVyZW07XG59XG4uaW5wdXQ6Zm9jdXMgeyBcbiAgICBvdXRsaW5lOm5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJhY2tncm91ZEJvdHRvbSk7XG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgcGFkZGluZzogMnB4IDBweDtcbiAgICBtYXJnaW46IDAgLjVyZW07XG4gfVxuXG5cbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgLmFic29sdXRlRm9vdGVyIHtcbiAgICAgICAgcmlnaHQ6IDJyZW07XG4gICAgfVxuICAgIC5hYnNvbHV0ZUZvb3RlciA+IGgyIHtcbiAgICAgICAgcGFkZGluZzogLjhyZW0gMXJlbTtcbiAgICB9XG59XG5cblxuXG5cbi5pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uaW5mbyA+IHAge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIG1hcmdpbjogLjVyZW0gMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uaW5mbyA+IHAgPiBzcGFuOm5vdCguZGVzY3JpcHRpb24pIHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAuMnJlbTtcbn1cbi5pbmZvID4gcCA+IC5kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAuOXJlbTtcbn1cblxuLmluZm8gPiBtYXQtZGl2aWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5iaWdCdXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZmlsbDogIzMzMztcbiAgICAvKiBtYXgtaGVpZ2h0OiA2cmVtOyAqL1xufVxuLmJpZ0J1dHRvbiA+IC5tYXRlcmlhbC1pY29ucyB7XG4gICAgZm9udC1zaXplOiA1cmVtO1xufVxuLmJpZ0J1dHRvbiA+IGltZyB7XG4gICAgd2lkdGg6IDVyZW07XG59XG4uYmlnQnV0dG9uID4gc3ZnIHtcbiAgICB3aWR0aDogOHJlbTtcbn1cbi5iaWdCdXR0b25Ib3dlcmFibGU6aG92ZXI6ZW5hYmxlZCB7XG4gICAgLyogY29sb3I6ICNlMGUwZTA7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBCOTlEODtcbn1cbi5iaWdCdXR0b25Ib3dlcmFibGU6aG92ZXI6ZW5hYmxlZCAubWF0ZXJpYWwtaWNvbnMsIC5iaWdCdXR0b25Ib3dlcmFibGU6aG92ZXI6ZW5hYmxlZCBzcGFue1xuICAgIGNvbG9yOiAjZWVlO1xufVxuLmJpZ0J1dHRvbkhvd2VyYWJsZTpob3ZlcjplbmFibGVkIHN2Z3tcbiAgICBmaWxsOiAjZWVlO1xufVxuXG4uYmlnQnV0dG9uV3JhcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmJpZ0J1dHRvbldyYXBlciA+IGJ1dHRvbiB7XG4gICAgbWFyZ2luOiAxcmVtO1xufVxuXG4uYmlnQnV0dG9uU21hbGwge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcGFkZGluZzogLjVyZW0gMDtcbn1cbi5iaWdCdXR0b25TbWFsbCA+IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xufVxuLmJpZ0J1dHRvblNtYWxsID4gLm1hdGVyaWFsLWljb25zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC4zcmVtO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG59XG4uYmlnQnV0dG9uU21hbGwgPiBpbWcge1xuICAgIG1hcmdpbi1yaWdodDogLjVyZW07XG4gICAgd2lkdGg6IDEuNWVtO1xufVxuXG4uYWN0aXZlQnV0dG9uIHtcbiAgICAvKiBjb2xvcjogI2UwZTBlMDsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEI5OUQ4O1xufVxuLmFjdGl2ZUJ1dHRvbiAubWF0ZXJpYWwtaWNvbnMsIC5hY3RpdmVCdXR0b24gc3BhbntcbiAgICBjb2xvcjogI2VlZTtcbn1cbi5hY3RpdmVCdXR0b24gc3Zne1xuICAgIGZpbGw6ICNlZWU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAuYmlnQnV0dG9uV3JhcGVyIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICAgLmJpZ0J1dHRvbldyYXBlciA+IGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogLjhyZW0gMDtcbiAgICB9XG4gICAgLmJpZ0J1dHRvbiB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHBhZGRpbmc6IC41cmVtIDA7XG4gICAgfVxuICAgIC5iaWdCdXR0b24gPiBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgfVxuICAgIC5iaWdCdXR0b24gPiAubWF0ZXJpYWwtaWNvbnMge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IC4zcmVtO1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIH1cbiAgICAuYmlnQnV0dG9uID4gaW1nIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcbiAgICAgICAgd2lkdGg6IDEuNWVtO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"floating\">\n  <div style=\"margin: 0\">\n    \n  </div>\n</div> -->\n<div class=\"map\" #map></div>\n<div class=\"absoluteHeader\" (click)=\"search.focus()\" >\n  <span class=\"material-icons\"> \n    search\n  </span>\n  <input #search class=\"input\" type=\"text\" autocomplete=\"off\" placeholder=\"Obec\" (keyup.enter)=\"onEnter(search.value)\">\n</div>\n<div class=\"absoluteFooter\" *ngIf=\"Error\">\n  <h2>Chyba</h2>\n  <pre style=\"margin: .5rem; font-size: 1.5rem;\">Nemohu najít požadované místo</pre>\n</div>\n<div class=\"absoluteFooter\" *ngIf=\"!Error && SelectedPosition\">\n  <h2>{{SelectedPosition.name}}</h2>\n  <div class=\"covidInfo\">\n    <p>\n      <span class=\"material-icons\">coronavirus</span>\n      <span>{{SelectedPosition.abs}}</span>\n    </p>\n    <p>\n      <span class=\"material-icons\">addchart</span>\n      <span>+{{SelectedPosition.rel}}</span>\n    </p>\n  </div>\n  <div class=\"forwardButtonWraper\">\n    <button mat-raised-button class=\"forwardButton\" (click)=\"redirectFront()\">\n      <span>Více informací</span>\n      <!-- <span class=\"material-icons\">\n        forward\n      </span> -->\n    </button>\n  </div>\n</div>\n<!-- <div class=\"absoluteFooter\" *ngIf=\"!Error && !SelectedPosition\">\n  <h2>Corona search</h2>\n  <div class=\"covidInfo\">\n    <img src=\"assets/logo.svg\">\n  </div>\n</div> -->"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-loader.service */ "./src/app/data-loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(dataLoaderService, router) {
        this.dataLoaderService = dataLoaderService;
        this.router = router;
        this.SelctedPosition = null;
        this.SelectedPosition = null;
        this.Error = '';
    }
    LandingPageComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            var sub = _this; // TO DO
            var google = window.google;
            var map;
            var markers = [];
            var myLatlng = { lat: 50.036179154236905, lng: 14.452818238135281 };
            map = new google.maps.Map(_this.MapElm.nativeElement, {
                zoom: 7,
                center: myLatlng,
                disableDefaultUI: true,
                zoomControl: true,
                streetViewControl: false,
                Fullscreencontrol: false,
            });
            // Configure the click listener.
            map.addListener("click", function (event) {
                clearMarkers();
                addMarker(event.latLng);
                var position = event.latLng.toJSON();
                sub.SelctedPosition = {
                    lat: position.lat,
                    lng: position.lng
                };
                console.log(sub.SelctedPosition);
                _this.loadData(position.lat, position.lng);
            });
            function addMarker(location) {
                var marker = new google.maps.Marker({
                    position: location,
                    map: map,
                });
                markers.push(marker);
            }
            // Removes the markers from the map, but keeps them in the array.
            function clearMarkers() {
                setMapOnAll(null);
            }
            function setMapOnAll(map) {
                for (var i = 0; i < markers.length; i++) {
                    markers[i].setMap(map);
                }
            }
        }, 10); // TO DO
        // this.initMap();
    };
    LandingPageComponent.prototype.loadData = function (lat, lng) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var raw, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.Error = '';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.dataLoaderService.getLocationData(lat, lng)];
                    case 2:
                        raw = _a.sent();
                        console.log('x', raw);
                        this.SelectedPosition = raw;
                        if (this.SelectedPosition.error) {
                            throw '';
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        this.Error = 'Cannot get city name';
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LandingPageComponent.prototype.onEnter = function (name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var raw, err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.Error = '';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.dataLoaderService.getDataFromLocation(name)];
                    case 2:
                        raw = _a.sent();
                        console.log('x', raw);
                        this.SelectedPosition = raw;
                        if (this.SelectedPosition.error) {
                            throw '';
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        this.Error = 'Cannot get city name';
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LandingPageComponent.prototype.redirectFront = function () {
        this.router.navigate(['/initGraf']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LandingPageComponent.prototype, "MapElm", void 0);
    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ../globalStyle/floating.css */ "./src/app/globalStyle/floating.css"), __webpack_require__(/*! ../globalStyle/bottomButton.css */ "./src/app/globalStyle/bottomButton.css"), __webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_loader_service__WEBPACK_IMPORTED_MODULE_2__["DataLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var MaterialDependenci = [
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                MaterialDependenci
            ],
            exports: [
                MaterialDependenci
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;    \n    background: var(--header);\n    color: white;\n}\nmat-toolbar > div {\n    display: flex;\n    align-items: center;    \n}\nmat-toolbar > div > * {\n    margin: 0 .3rem; \n}\n.floatingContent {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n.floatingBackgroud {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n\n}\n.floatingBackgroud > .top {\n    height: 50vh;\n    width: 100%;\n    background: var(--backgroundTop);\n    -webkit-clip-path: polygon(100% 0, 100% 80%, 34% 95%, 0 70%, 0 0);\n            clip-path: polygon(100% 0, 100% 80%, 34% 95%, 0 70%, 0 0);\n}\n/* .floatingBackgroud > .bottom {\n    height: 50vh;\n    background: var(--backgroundTop);\n} */\n.searchIcon {\n    color: var(--backgroundSec);\n}\n.input {\n    font-size: 18px;\n    padding: 0;\n    display: block;\n    border: none;\n    background: var(--header);\n   /*  border-bottom: 1px solid white; */\n    color: white;\n    max-width: 0;\n    transition: max-width .75s ease-out;\n}\ninput:focus { \n    outline:none;\n    border-bottom: 2px solid white;\n    max-width: 1000px;\n    padding: 10px 10px 10px 5px;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0FBQ1g7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPOztBQUVYO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGdDQUFnQztJQUNoQyxpRUFBeUQ7WUFBekQseURBQXlEO0FBQzdEO0FBQ0E7OztHQUdHO0FBQ0g7SUFDSSwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsY0FBYztJQUNkLFlBQVk7SUFDWix5QkFBeUI7R0FDMUIscUNBQXFDO0lBQ3BDLFlBQVk7SUFDWixZQUFZO0lBQ1osbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQiwyQkFBMkI7Q0FDOUIiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgXG4gICAgYmFja2dyb3VuZDogdmFyKC0taGVhZGVyKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5tYXQtdG9vbGJhciA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBcbn1cbm1hdC10b29sYmFyID4gZGl2ID4gKiB7XG4gICAgbWFyZ2luOiAwIC4zcmVtOyBcbn1cbi5mbG9hdGluZ0NvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG59XG4uZmxvYXRpbmdCYWNrZ3JvdWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG5cbn1cbi5mbG9hdGluZ0JhY2tncm91ZCA+IC50b3Age1xuICAgIGhlaWdodDogNTB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kVG9wKTtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTAwJSAwLCAxMDAlIDgwJSwgMzQlIDk1JSwgMCA3MCUsIDAgMCk7XG59XG4vKiAuZmxvYXRpbmdCYWNrZ3JvdWQgPiAuYm90dG9tIHtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZFRvcCk7XG59ICovXG4uc2VhcmNoSWNvbiB7XG4gICAgY29sb3I6IHZhcigtLWJhY2tncm91bmRTZWMpO1xufVxuXG4uaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oZWFkZXIpO1xuICAgLyogIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTsgKi9cbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWF4LXdpZHRoOiAwO1xuICAgIHRyYW5zaXRpb246IG1heC13aWR0aCAuNzVzIGVhc2Utb3V0O1xufVxuaW5wdXQ6Zm9jdXMgeyBcbiAgICBvdXRsaW5lOm5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDVweDtcbiB9Il19 */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"floatingBackgroud\">\n  <div class=\"top\"></div>\n  <div class=\"bottom\"></div>\n</div> -->\n<div class=\"floatingContent\">\n  <!-- <mat-toolbar>\n    <div>\n      <span class=\"material-icons\">\n        android\n      </span>\n      <span>Ohryzecek</span>\n    </div>\n    <div>\n      <span (click)=\"search.focus()\" class=\"material-icons\" style=\"font-size: 2rem;\">\n        search\n      </span>\n      <input #search class=\"input\" type=\"text\" autocomplete=\"off\" placeholder=\"Location\" [(ngModel)]=\"value\">\n    </div>\n  </mat-toolbar> -->\n  <ng-content></ng-content>\n</div>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    contactEmail: 'jan.nykl.333@gmail.com',
    appVersion: 'hot dev',
    ApiRoot: 'http://localhost:5000/api/'
    // ApiRoot: 'http://144.91.111.198:5001/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nykl/Documents/WEB/Hradec_2020/HR/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map