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
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_jobs_jobs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/jobs/jobs.component */ "./src/app/components/jobs/jobs.component.ts");
/* harmony import */ var _components_saved_saved_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/saved/saved.component */ "./src/app/components/saved/saved.component.ts");






// import { GetdataResolverService } from './service/getdata-resolver.service';
var routes = [
    {
        path: '',
        children: [
            { path: "", component: _components_jobs_jobs_component__WEBPACK_IMPORTED_MODULE_4__["JobsComponent"] },
            { path: "jobs", component: _components_jobs_jobs_component__WEBPACK_IMPORTED_MODULE_4__["JobsComponent"],
            },
            { path: "saved", component: _components_saved_saved_component__WEBPACK_IMPORTED_MODULE_5__["SavedComponent"] },
        ],
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    { path: "**", redirectTo: '' }
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

module.exports = "\n<router-outlet></router-outlet>\n"

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
        this.title = 'job-listing-frontend';
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
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_job_listing_job_listing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/job-listing/job-listing.component */ "./src/app/components/job-listing/job-listing.component.ts");
/* harmony import */ var _components_job_detail_job_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/job-detail/job-detail.component */ "./src/app/components/job-detail/job-detail.component.ts");
/* harmony import */ var _components_jobs_jobs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/jobs/jobs.component */ "./src/app/components/jobs/jobs.component.ts");
/* harmony import */ var _components_saved_saved_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/saved/saved.component */ "./src/app/components/saved/saved.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _components_job_listing_job_listing_component__WEBPACK_IMPORTED_MODULE_6__["JobListingComponent"],
                _components_job_detail_job_detail_component__WEBPACK_IMPORTED_MODULE_7__["JobDetailComponent"],
                _components_jobs_jobs_component__WEBPACK_IMPORTED_MODULE_8__["JobsComponent"],
                _components_saved_saved_component__WEBPACK_IMPORTED_MODULE_9__["SavedComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_13__["NgxPaginationModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-panel fullHeight\">\n  <app-navbar style=\"height:20%\"></app-navbar>\n  <div style=\"width: 90%;margin: auto;height: 80%;\">\n      <router-outlet class='fullHeight'></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/job-detail/job-detail.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/job-detail/job-detail.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jobdetail{\r\n    border: 1px solid grey;\r\n    border-radius: 5px;\r\n    margin: 10px;\r\n    padding: 15px;\r\n}\r\n\r\n.jobdetail-header{\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    height: 120px;\r\n}\r\n\r\n.company-brand{\r\n    background-color: #2c3e50;\r\n    height: 70px;\r\n    width: 70px;\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n\r\n.jobdetail-body{\r\n    margin: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9qb2ItZGV0YWlsL2pvYi1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvam9iLWRldGFpbC9qb2ItZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuam9iZGV0YWlse1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5qb2JkZXRhaWwtaGVhZGVye1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4uY29tcGFueS1icmFuZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmpvYmRldGFpbC1ib2R5e1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/job-detail/job-detail.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/job-detail/job-detail.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 0;margin:0;overflow-y: scroll;height: 100%;\">\n  <div *ngIf=\"job\" class=\"container\">\n    <div class=\"jobdetail\">\n      <div class=\"jobdetail-header\">\n          <div class=\"row\">\n            <div class=\"col-3\" style=\"padding: 0;margin: auto;\">\n              <div class=\"company-brand\">\n                <p style=\"color: white;margin: 0;font-size: 40px;\">{{job.company.substring(0,1)}}</p>\n              </div>\n            </div>\n            <div class=\"col-9\">\n                <h4 style=\"font-weight: bold;\">{{job.title}}</h4>\n                <h5>{{job.company}}</h5>\n                <p>{{job.location}}</p>\n            </div>\n          </div>\n      </div>\n      <div class=\"row\" style=\"margin-bottom: 30px;\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-9\">\n            <button class=\"btn btn-info\" style=\"margin-right: 10px;\" ><a href={{job.link}} target=\"_blank\" style=\"text-decoration: none;color: white;\">Apply</a></button>\n            <button *ngIf=\"!job.saved\" class=\"btn btn-outline-info\" (click)=\"saveJob(job)\">Save</button>\n            <button *ngIf=\"job.saved\" class=\"btn btn-outline-info\" (click)=\"unsaveJob(job)\">Unsave</button>\n        </div>\n      </div>\n      <hr width=\"80%\" size=\"10\" style=\"text-align: center;\">\n      <div class=\"jobdetail-body\">\n        <h6 style=\"font-size: medium; font-weight: 550;\">Job Description:</h6>\n        <br />\n        <p [innerHTML]=\"job.description\"></p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/job-detail/job-detail.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/job-detail/job-detail.component.ts ***!
  \***************************************************************/
/*! exports provided: JobDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailComponent", function() { return JobDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JobDetailComponent = /** @class */ (function () {
    function JobDetailComponent() {
    }
    JobDetailComponent.prototype.saveJob = function (job) {
        console.log(job);
        var retrive = localStorage.getItem("savedJobs");
        var newSave = [];
        if (retrive == null) {
            job.saved = true;
            newSave.push(job);
        }
        else {
            newSave = JSON.parse(retrive);
            var saved = false;
            for (var i = 0; i < newSave.length; i++) {
                if (newSave[i].id == job.id) {
                    alert("You already saved this job! Please check on your saved menu.");
                    saved = true;
                }
            }
            if (!saved) {
                job.saved = true;
                newSave.push(job);
            }
        }
        localStorage.setItem("savedJobs", JSON.stringify(newSave));
        location.reload();
    };
    JobDetailComponent.prototype.unsaveJob = function (job) {
        console.log(job);
        var retrive = localStorage.getItem("savedJobs");
        var newSave = [];
        if (retrive == null) {
            //may be something wrong
        }
        else {
            newSave = JSON.parse(retrive);
            for (var i = 0; i < newSave.length; i++) {
                if (newSave[i].id == job.id) {
                    newSave.splice(i, 1);
                    job.saved = false;
                    break;
                }
            }
        }
        localStorage.setItem("savedJobs", JSON.stringify(newSave));
        console.log(newSave);
        location.reload();
    };
    JobDetailComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], JobDetailComponent.prototype, "job", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], JobDetailComponent.prototype, "saved", void 0);
    JobDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-job-detail',
            template: __webpack_require__(/*! ./job-detail.component.html */ "./src/app/components/job-detail/job-detail.component.html"),
            styles: [__webpack_require__(/*! ./job-detail.component.css */ "./src/app/components/job-detail/job-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JobDetailComponent);
    return JobDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/job-listing/job-listing.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/job-listing/job-listing.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvam9iLWxpc3Rpbmcvam9iLWxpc3RpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/job-listing/job-listing.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/job-listing/job-listing.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 20px; height: 100%;\">\n    <div class=\"row\" style=\"height: 100%;\">\n      <div class=\"col-4 fullHeight\" style=\"padding: 0; height: 100%;\">\n          <div style=\"padding: 0;margin:0;overflow-y: scroll;height: 100%;\">\n              <!-- number of results -->\n            \n              <!-- job list -->\n              <div *ngIf=\"jobs.length>0\">\n                  <div *ngFor=\"let job of jobs | paginate: { itemsPerPage: 10, currentPage: p }\">\n                    <div class=\"card\" style=\"width: 100%;padding: 0;\">\n                      <div class=\"card-body\">\n                        <div class=\"row\">\n                          <div class=\"col-3\" style=\"padding: 0;\">\n                            <div style=\"background-color: #2c3e50;height: 50px;width: 50px;margin: auto;text-align: center;\">\n                              <p style=\"color: white;margin: 0;font-size: 30px;\">{{job.company.substring(0,1)}}</p>\n                            </div>\n                          </div>\n                          <div class=\"col-9\">\n                              <h5 class=\"card-title\"><a href=\"javascript:void(0)\" (click)=\"getDetail(job)\" style=\"color:#2c3e50\">{{job.title}}</a></h5>\n                              <h6 class=\"card-text\">{{job.company}}</h6>\n                              <p class=\"card-subtitle mb-2 text-muted\">{{job.location}}</p>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n              </div>\n              <div *ngIf=\"jobs.length==0\">\n                <p>No results</p>\n              </div>\n            </div>\n      </div>\n      <div class=\"col-8 fullHeight\" style=\"padding: 0; height: 100%;\">\n        <app-job-detail [job]=jobDetail [saved]=saved></app-job-detail>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/job-listing/job-listing.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/job-listing/job-listing.component.ts ***!
  \*****************************************************************/
/*! exports provided: JobListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobListingComponent", function() { return JobListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JobListingComponent = /** @class */ (function () {
    function JobListingComponent() {
        // jobDetail: Job;
        this.p = 1;
    }
    JobListingComponent.prototype.getDetail = function (job) {
        job = this.highlight(job);
        // console.log("job detail: "+job.description);
        this.jobDetail = job;
    };
    JobListingComponent.prototype.highlight = function (job) {
        var last_query = localStorage.getItem("last_query");
        console.log("last_query is " + last_query);
        if (last_query != null && last_query != "") {
            var query = last_query.split(" ");
            console.log("query: " + query);
            for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
                var word = query_1[_i];
                console.log(word);
                var regex = new RegExp(word, 'gi');
                job.description = job.description.replace(regex, function (match) {
                    // console.log("match: "+match);
                    return "<strong>" + match + "</strong>";
                });
            }
            console.log("job detail: " + job.description);
        }
        return job;
    };
    JobListingComponent.prototype.ngOnInit = function () {
        if (!this.jobDetail)
            this.jobs[0] = this.highlight(this.jobs[0]);
        this.jobDetail = this.jobs[0];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], JobListingComponent.prototype, "jobs", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], JobListingComponent.prototype, "saved", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], JobListingComponent.prototype, "jobDetail", void 0);
    JobListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-job-listing',
            template: __webpack_require__(/*! ./job-listing.component.html */ "./src/app/components/job-listing/job-listing.component.html"),
            styles: [__webpack_require__(/*! ./job-listing.component.css */ "./src/app/components/job-listing/job-listing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JobListingComponent);
    return JobListingComponent;
}());



/***/ }),

/***/ "./src/app/components/jobs/jobs.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/jobs/jobs.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvam9icy9qb2JzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/jobs/jobs.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/jobs/jobs.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-job-listing [jobs]=jobs [saved]=\"false\" [jobDetail]=jobs[0]></app-job-listing>"

/***/ }),

/***/ "./src/app/components/jobs/jobs.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/jobs/jobs.component.ts ***!
  \***************************************************/
/*! exports provided: JobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsComponent", function() { return JobsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_jobdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/jobdata.service */ "./src/app/service/jobdata.service.ts");
/* harmony import */ var src_app_service_getall_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/getall.service */ "./src/app/service/getall.service.ts");
/* harmony import */ var src_app_service_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/search.service */ "./src/app/service/search.service.ts");





var JobsComponent = /** @class */ (function () {
    function JobsComponent(jobdataService, getallService, searchService) {
        this.jobdataService = jobdataService;
        this.getallService = getallService;
        this.searchService = searchService;
        this.jobs = [];
    }
    JobsComponent.prototype.ngOnInit = function () {
        // this.jobs = this.jobdataService.getData();
        // if(this.jobdataService.getData.length==0){
        //   this.getallService.getAllJobs()
        //   .subscribe(
        //     res => {
        //       this.jobdataService.setData(res);
        //       this.jobs = this.jobdataService.getData();
        //       console.log("get all job data from server");
        //     }
        //   );
        // }
        var _this = this;
        var last_query = localStorage.getItem("last_query");
        var company = localStorage.getItem("last_company");
        // company = company==null? "company":company;
        var location = localStorage.getItem("last_location");
        var searchall = (last_query == null || last_query == "") && (location == null || location == "") && (company == null || company == "");
        if (searchall) {
            this.getallService.getAllJobs()
                .subscribe(function (res) {
                _this.jobdataService.setData(res);
                _this.jobs = _this.jobdataService.getData();
                var retrive = localStorage.getItem("savedJobs");
                if (retrive != null) {
                    var newSave = JSON.parse(retrive);
                    var saveSet = new Set();
                    for (var i = 0; i < newSave.length; i++) {
                        saveSet.add(newSave[i].id);
                    }
                    for (var i = 0; i < _this.jobs.length; i++) {
                        if (saveSet.has(_this.jobs[i].id)) {
                            _this.jobs[i].saved = true;
                        }
                        else {
                            _this.jobs[i].saved = false;
                        }
                    }
                }
                console.log("get all job data from server");
                _this.jobs[0] = _this.highlight(_this.jobs[0]);
            });
        }
        else {
            this.searchService.search(last_query, location, company).subscribe(function (res) {
                console.log("search result");
                console.log(res);
                _this.jobs = res;
                var retrive = localStorage.getItem("savedJobs");
                if (retrive != null) {
                    var newSave = JSON.parse(retrive);
                    var saveSet = new Set();
                    for (var i = 0; i < newSave.length; i++) {
                        saveSet.add(newSave[i].id);
                    }
                    for (var i = 0; i < _this.jobs.length; i++) {
                        if (saveSet.has(_this.jobs[i].id)) {
                            _this.jobs[i].saved = true;
                        }
                        else {
                            _this.jobs[i].saved = false;
                        }
                    }
                }
                _this.jobs[0] = _this.highlight(_this.jobs[0]);
                // this.jobdataService.setData(res);
                // location.reload();
            }, function (error) {
                console.log(error);
            });
        }
    };
    JobsComponent.prototype.highlight = function (job) {
        var last_query = localStorage.getItem("last_query");
        console.log("last_query is " + last_query);
        if (last_query != null && last_query != "") {
            var query = last_query.split(" ");
            console.log("query: " + query);
            for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
                var word = query_1[_i];
                console.log(word);
                var regex = new RegExp(word, 'gi');
                job.description = job.description.replace(regex, function (match) {
                    // console.log("match: "+match);
                    return "<strong>" + match + "</strong>";
                });
            }
            console.log("job detail: " + job.description);
        }
        return job;
    };
    JobsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jobs',
            template: __webpack_require__(/*! ./jobs.component.html */ "./src/app/components/jobs/jobs.component.html"),
            styles: [__webpack_require__(/*! ./jobs.component.css */ "./src/app/components/jobs/jobs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_jobdata_service__WEBPACK_IMPORTED_MODULE_2__["JobdataService"],
            src_app_service_getall_service__WEBPACK_IMPORTED_MODULE_3__["GetallService"],
            src_app_service_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"]])
    ], JobsComponent);
    return JobsComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary justify-content-between\">\n  <a class=\"navbar-brand col-2\" style=\"margin-left: 5%;\">JOB FINDER</a>\n  <form class=\"form-inline col-9\" style=\"text-align: center;\" [formGroup]=\"myForm\" (ngSubmit)=\"submitForm(myForm)\">\n    <input \n     class=\"form-control col-5\" \n     type=\"search\"\n     placeholder=\"Search\"\n     aria-label=\"Search\"\n     placeholder=\"Search\"\n     style=\"margin-right: 1%;\"\n     formControlName=\"query\">\n     <input \n     class=\"form-control col-2\" \n     type=\"search\"\n     placeholder=\"Location\"\n     aria-label=\"Location\"\n     style=\"margin-right: 1%;\"\n     formControlName=\"location\">\n    <select class=\"custom-select\" style=\"margin-right: 3%;\" formControlName=\"company\" value=\"{{last_company}}\">\n      <option [ngValue]=\"\">company</option>\n      <option *ngFor=\"let company of companyList\" value=\"{{company}}\">{{company}}</option>\n    </select>\n    <button class=\"btn btn-outline-success my-2 my-sm-0\"  type=\"submit\">Search</button>\n  </form>\n</nav>\n<nav class=\"navbar navbar-dark bg-primary justify-content-between\" style=\"padding-top: 0;\">\n  <div style=\"width: 60%;margin: auto;\" class=\"row\">\n    <div style=\"margin: auto;color: white;\" class=\"col-6 text-center\"><a routerLink=\"/jobs\">JOBS</a></div>\n    <div style=\"margin: auto;color: white;\" class=\"col-6 text-center\"><a routerLink=\"/saved\">SAVED</a></div>\n  \n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/search.service */ "./src/app/service/search.service.ts");
/* harmony import */ var src_app_service_getall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/getall.service */ "./src/app/service/getall.service.ts");
/* harmony import */ var src_app_service_jobdata_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/jobdata.service */ "./src/app/service/jobdata.service.ts");






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(formBuilder, searchService, getallService, jobdataService) {
        this.formBuilder = formBuilder;
        this.searchService = searchService;
        this.getallService = getallService;
        this.jobdataService = jobdataService;
        this.companyList = [
            // "company",
            "Facebook",
            "Apple",
            "Netflix"
        ];
        this.options = {
            types: ['(cities)'],
            componetRestrictions: { country: "us" }
        };
    }
    NavbarComponent.prototype.createForm = function () {
        this.myForm = this.formBuilder.group({
            query: [this.last_query ? this.last_query : ""],
            location: [this.last_location ? this.last_location : ""],
            company: [this.last_company ? this.last_company : ""],
        });
    };
    NavbarComponent.prototype.submitForm = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (valid) {
            this.last_query = value.query;
            console.log("query: " + value.query + "  company: " + value.company);
            localStorage.setItem("last_query", this.last_query);
            localStorage.setItem("last_location", value.location);
            localStorage.setItem("last_company", value.company);
            location.reload();
            // this.searchService.search(value.query,value.company).subscribe(
            //   res => {
            //     console.log("search result");
            //     console.log(res);
            //     // this.jobdataService.setData(res);
            //     // location.reload();
            //   },
            //   error => {
            //     console.log(error);
            //   }
            // );
        }
    };
    NavbarComponent.prototype.ngOnInit = function () {
        var query = localStorage.getItem("last_query");
        this.last_query = query;
        var location = localStorage.getItem("last_location");
        this.last_location = location;
        var company = localStorage.getItem("last_company");
        this.last_company = company;
        this.createForm();
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_service_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"],
            src_app_service_getall_service__WEBPACK_IMPORTED_MODULE_4__["GetallService"],
            src_app_service_jobdata_service__WEBPACK_IMPORTED_MODULE_5__["JobdataService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/saved/saved.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/saved/saved.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2F2ZWQvc2F2ZWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/saved/saved.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/saved/saved.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"jobs.length>0\" class='fullHeight'>\n    <app-job-listing [jobs]=jobs [saved]=\"true\"></app-job-listing>\n</div>\n<div *ngIf=\"jobs.length==0\" style=\"text-align: center; padding-top: 50px;\">\n  <h4>You haven't save any jobs</h4>\n</div>"

/***/ }),

/***/ "./src/app/components/saved/saved.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/saved/saved.component.ts ***!
  \*****************************************************/
/*! exports provided: SavedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedComponent", function() { return SavedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SavedComponent = /** @class */ (function () {
    function SavedComponent() {
        this.jobs = [];
    }
    SavedComponent.prototype.ngOnInit = function () {
        var retrivedsaved = localStorage.getItem("savedJobs");
        if (retrivedsaved != null)
            this.jobs = JSON.parse(retrivedsaved);
    };
    SavedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-saved',
            template: __webpack_require__(/*! ./saved.component.html */ "./src/app/components/saved/saved.component.html"),
            styles: [__webpack_require__(/*! ./saved.component.css */ "./src/app/components/saved/saved.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SavedComponent);
    return SavedComponent;
}());



/***/ }),

/***/ "./src/app/service/getall.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/getall.service.ts ***!
  \*******************************************/
/*! exports provided: GetallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetallService", function() { return GetallService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



// import "rxjs/Rx";

var GetallService = /** @class */ (function () {
    function GetallService(http) {
        this.http = http;
    }
    //get all jobs
    GetallService.prototype.getAllJobs = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/jobs");
    };
    GetallService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], GetallService);
    return GetallService;
}());



/***/ }),

/***/ "./src/app/service/jobdata.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/jobdata.service.ts ***!
  \********************************************/
/*! exports provided: JobdataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobdataService", function() { return JobdataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JobdataService = /** @class */ (function () {
    function JobdataService() {
        this.jobs = [
            {
                id: "1",
                title: "Software Engineer",
                company: "Apple",
                location: "Pittsburgh, PA",
                description: "This is a testing job, may have description later."
            }, {
                id: "2",
                title: "Software Developer",
                company: "Facebook",
                location: "Pittsburgh, PA",
                description: "This is a testing job, may have description later."
            }, {
                id: "3",
                title: "Software Developer",
                company: "Facebook",
                location: "Pittsburgh, PA",
                description: "This is a testing job, may have description later."
            }, {
                id: "4",
                title: "Software Developer",
                company: "Facebook",
                location: "Pittsburgh, PA",
                description: "This is a testing job, may have description later."
            }, {
                id: "5",
                title: "Software Developer",
                company: "Facebook",
                location: "Pittsburgh, PA",
                description: "This is a testing job, may have description later."
            }, {
                id: "6",
                title: "Software Developer",
                company: "Facebook",
                location: "Pittsburgh, PA",
                description: "This is a testing job, may have description later."
            }, {
                id: "7",
                title: "Software Developer",
                company: "Facebook",
                location: "Pittsburgh, PA",
                description: "This is a testing job, may have description later."
            }
        ];
    }
    JobdataService.prototype.setData = function (data) {
        this.jobs = data;
    };
    JobdataService.prototype.getData = function () {
        return this.jobs;
    };
    JobdataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JobdataService);
    return JobdataService;
}());



/***/ }),

/***/ "./src/app/service/search.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/search.service.ts ***!
  \*******************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



// import "rxjs/Rx";

var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
    }
    //search
    SearchService.prototype.search = function (query, location, company) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/jobs/search?query=" + query + "&location=" + location + "&company=" + company);
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SearchService);
    return SearchService;
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
    // apiUrl: "http://localhost:8080"
    // apiUrl: "https://secret-atoll-92217.herokuapp.com"
    apiUrl: "https://job-helper1.herokuapp.com"
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\courses\university of pittsburgh\2019fall\information storage and retrieval\project\jobFinder-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map