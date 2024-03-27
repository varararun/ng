"use strict";
(self["webpackChunkng"] = self["webpackChunkng"] || []).push([["main"],{

/***/ 484:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 4044);
/* harmony import */ var _components_home_projects_projects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/projects/projects.component */ 6520);
/* harmony import */ var _components_home_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/contact/contact.component */ 2948);
/* harmony import */ var _components_home_experience_experience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/experience/experience.component */ 5884);
/* harmony import */ var _components_home_highlights_highlights_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/highlights/highlights.component */ 7708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4280);








const routes = [{
  path: '',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'highlights',
  component: _components_home_highlights_highlights_component__WEBPACK_IMPORTED_MODULE_4__.HighlightsComponent
}, {
  path: 'experience',
  component: _components_home_experience_experience_component__WEBPACK_IMPORTED_MODULE_3__.ExperienceComponent
}, {
  path: 'projects',
  component: _components_home_projects_projects_component__WEBPACK_IMPORTED_MODULE_1__.ProjectsComponent
}, {
  path: 'contact',
  component: _components_home_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__.ContactComponent
}, {
  path: '**',
  pathMatch: 'full',
  redirectTo: '/'
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top'
    }), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 6108:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ 3808);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 168);
/* harmony import */ var _components_general_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/general/menu/menu.component */ 156);
/* harmony import */ var _components_general_background_background_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/general/background/background.component */ 7216);
/* harmony import */ var _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/general/footer/footer.component */ 8480);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 4040);








class AppComponent {
  constructor(titleService, metaService) {
    this.titleService = titleService;
    this.metaService = metaService;
    this.title = 'Arun Varghese';
  }
  ngOnInit() {
    this.titleService.setTitle("Arun Varghese | Software Engineer");
    this.metaService.addTags([{
      name: 'keywords',
      content: 'software, engineer, developer'
    }, {
      name: 'description',
      content: '#engineer #husband #traveler'
    }]);
    aos__WEBPACK_IMPORTED_MODULE_0__.init();
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Meta));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 4,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-menu")(1, "router-outlet")(2, "app-footer")(3, "app-background");
      }
    },
    dependencies: [_components_general_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent, _components_general_background_background_component__WEBPACK_IMPORTED_MODULE_2__.BackgroundComponent, _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5204:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 168);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 484);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6108);
/* harmony import */ var _components_home_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.module */ 7376);
/* harmony import */ var _components_general_general_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/general/general.module */ 5368);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 381);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/service-worker */ 7676);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ 6716);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ 5531);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 1332);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 2584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4280);














function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService],
    imports: [_components_home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule, _components_general_general_module__WEBPACK_IMPORTED_MODULE_3__.GeneralModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__.ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production
    }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
      }
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_components_home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule, _components_general_general_module__WEBPACK_IMPORTED_MODULE_3__.GeneralModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__.ServiceWorkerModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule]
  });
})();

/***/ }),

/***/ 7216:
/*!***********************************************************************!*\
  !*** ./src/app/components/general/background/background.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackgroundComponent: () => (/* binding */ BackgroundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);

class BackgroundComponent {
  static #_ = this.ɵfac = function BackgroundComponent_Factory(t) {
    return new (t || BackgroundComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BackgroundComponent,
    selectors: [["app-background"]],
    decls: 1,
    vars: 0,
    consts: [[1, "bg-img"]],
    template: function BackgroundComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
      }
    },
    styles: ["[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: black;\n  --accent-color: #089ee5;\n  --accent-color-opaque: #089ee569;\n  --title-color: black;\n  --btn-text-color: black;\n  --bg-color: white;\n  --bg-color-opaque: transparent;\n  --bg-img: white;\n  --border-color: rgb(0 0 0 / 30%);\n  --border: 1px solid rgb(0 0 0 / 30%);\n  --border-radius: 3px;\n  --scroll-btn-color: black;\n  --scroll-btn-bg-color: rgb(255 255 255 / 30%);\n  --menu-btn-color: black;\n  --code-highlight-color: black;\n  --code-highlight-text-color: white;\n  --btn-bg-color: white;\n  --btn-hover-bg-color: white;\n  --menu-bar-bg-color: rgb(255 255 255 / 30%);\n  --menu-overlay-bg-color: white;\n  --cube-face: rgb(0 0 0 / 60%);\n  --cube-icon-color: white;\n  --bullet-color: black;\n  --divider: \"/\";\n  --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  --cursor-type: pointer;\n  --shadow: 0 0px 10px -5px black;\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: #e6f1ff;\n  --accent-color: #089ee5;\n  --accent-color-opaque: #089ee569;\n  --title-color: #089ee5;\n  --btn-text-color: #089ee5;\n  --bg-color: #0f0f0f;\n  --bg-color-opaque: rgb(0 0 0 / 30%);\n  --bg-img: url('code.png') no-repeat;\n  --border-color: #089ee5;\n  --border: 1px solid #089ee5;\n  --border-radius: 3px;\n  --scroll-btn-color: #089ee5;\n  --scroll-btn-bg-color: rgb(0 0 0 / 30%);\n  --menu-btn-color: #089ee5;\n  --code-highlight-color: rgb(0 0 0 / 30%);\n  --code-highlight-text-color: #e6f1ff;\n  --btn-bg-color: transparent;\n  --btn-hover-bg-color: rgb(0 0 0 / 30%);\n  --menu-bar-bg-color: rgb(0 0 0 / 30%);\n  --menu-overlay-bg-color: rgb(0 0 0 / 60%);\n  --cube-face: rgb(0 0 0 / 30%);\n  --cube-icon-color: #e6f1ff;\n  --bullet-color: #089ee5;\n  --divider: \"/\";\n  --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  --shadow: 0 0px 10px -5px black;\n  --cursor-type: pointer;\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n}\n\n.bg-img[_ngcontent-%COMP%] {\n  background: var(--bg-img);\n  transform-origin: center;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIiwiYmFja2dyb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkNBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkNBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSw0REFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwRUFBQTtFQUNBLHlGQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDREQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBFQUFBO0VBQ0EseUZBQUE7QUNDSjs7QUE1REE7RUFDSSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUErREoiLCJmaWxlIjoiYmFja2dyb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogYmxhY2s7XG4gICAgLS1hY2NlbnQtY29sb3I6ICMwODllZTU7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiAjMDg5ZWU1Njk7XG4gICAgLS10aXRsZS1jb2xvcjogYmxhY2s7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogYmxhY2s7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci1vcGFxdWU6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctaW1nOiB3aGl0ZTtcbiAgICAtLWJvcmRlci1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiBibGFjaztcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogYmxhY2s7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogYmxhY2s7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHdoaXRlO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHdoaXRlO1xuICAgIC0tY3ViZS1mYWNlOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJ1bGxldC1jb2xvcjogYmxhY2s7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbiAgICAtLXNoYWRvdzogMCAwcHggMTBweCAtNXB4IGJsYWNrO1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogI2U2ZjFmZjtcbiAgICAtLWFjY2VudC1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6ICMwODllZTU2OTtcbiAgICAtLXRpdGxlLWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tYnRuLXRleHQtY29sb3I6ICMwODllZTU7XG4gICAgLS1iZy1jb2xvcjogIzBmMGYwZjtcbiAgICAtLWJnLWNvbG9yLW9wYXF1ZTogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJnLWltZzogdXJsKCcuLi9pbWFnZXMvYmFja2dyb3VuZC9jb2RlLnBuZycpIG5vLXJlcGVhdDtcbiAgICAtLWJvcmRlci1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICMwODllZTU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiAjZTZmMWZmO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3ViZS1mYWNlOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiAjZTZmMWZmO1xuICAgIC0tYnVsbGV0LWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICAgIC0tc2hhZG93OiAwIDBweCAxMHB4IC01cHggYmxhY2s7O1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG59XG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCI7XG5cbi5iZy1pbWcge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWltZyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAtMTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL2JhY2tncm91bmQvYmFja2dyb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkNBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkNBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSw0REFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwRUFBQTtFQUNBLHlGQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDREQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBFQUFBO0VBQ0EseUZBQUE7QUNDSjs7QUE1REE7RUFDSSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUErREo7QUFDQSw0ckpBQTRySiIsInNvdXJjZXNDb250ZW50IjpbIltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogYmxhY2s7XG4gICAgLS1hY2NlbnQtY29sb3I6ICMwODllZTU7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiAjMDg5ZWU1Njk7XG4gICAgLS10aXRsZS1jb2xvcjogYmxhY2s7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogYmxhY2s7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci1vcGFxdWU6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctaW1nOiB3aGl0ZTtcbiAgICAtLWJvcmRlci1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiBibGFjaztcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogYmxhY2s7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogYmxhY2s7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHdoaXRlO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHdoaXRlO1xuICAgIC0tY3ViZS1mYWNlOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJ1bGxldC1jb2xvcjogYmxhY2s7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbiAgICAtLXNoYWRvdzogMCAwcHggMTBweCAtNXB4IGJsYWNrO1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogI2U2ZjFmZjtcbiAgICAtLWFjY2VudC1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6ICMwODllZTU2OTtcbiAgICAtLXRpdGxlLWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tYnRuLXRleHQtY29sb3I6ICMwODllZTU7XG4gICAgLS1iZy1jb2xvcjogIzBmMGYwZjtcbiAgICAtLWJnLWNvbG9yLW9wYXF1ZTogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJnLWltZzogdXJsKCcuLi9pbWFnZXMvYmFja2dyb3VuZC9jb2RlLnBuZycpIG5vLXJlcGVhdDtcbiAgICAtLWJvcmRlci1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICMwODllZTU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiAjZTZmMWZmO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3ViZS1mYWNlOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiAjZTZmMWZmO1xuICAgIC0tYnVsbGV0LWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICAgIC0tc2hhZG93OiAwIDBweCAxMHB4IC01cHggYmxhY2s7O1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG59XG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCI7XG5cbi5iZy1pbWcge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWltZyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAtMTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8480:
/*!***************************************************************!*\
  !*** ./src/app/components/general/footer/footer.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 2584);



const _c0 = a0 => ({
  "show-scroll-btn": a0
});
class FooterComponent {
  constructor() {
    this.scrollPosition = 0;
  }
  checkScroll() {
    this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }
  scrollTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    hostBindings: function FooterComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function FooterComponent_scroll_HostBindingHandler() {
          return ctx.checkScroll();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
      }
    },
    decls: 28,
    vars: 21,
    consts: [["data-aos", "fade-up", "data-aos-duration", "500", 1, "footer-left-bar"], ["data-aos", "fade-right", "data-aos-delay", "800", "data-aos-duration", "500"], ["target", "_blank", 3, "href"], [1, "fas", "fa-envelope"], ["data-aos", "fade-right", "data-aos-delay", "700", "data-aos-duration", "500"], [1, "fab", "fa-github"], ["data-aos", "fade-right", "data-aos-delay", "600", "data-aos-duration", "500"], [1, "fab", "fa-linkedin"], ["data-aos", "fade-right", "data-aos-delay", "500", "data-aos-duration", "500"], [1, "fab", "fa-instagram"], [1, "footer-credits"], [1, "credit"], ["rel", "nofollow noopener noreferrer", "target", "_blank", 3, "href"], ["alt", "Angular", 1, "logo", 3, "src"], [1, "scroll-top-btn", 3, "ngClass", "click"], [1, "fas", "fa-chevron-up"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer")(1, "ul", 0)(2, "li", 1)(3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4)(7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6)(11, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8)(15, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10)(19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Designed by Arun Varghese");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div")(22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_div_click_26_listener() {
          return ctx.scrollTop();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, "Email"), "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 9, "Github"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 11, "LinkedIn"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 13, "Instagram"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 15, "Repo"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 17, "Footer.Logo"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.scrollPosition > 100));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    styles: ["[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: black;\n  --accent-color: #089ee5;\n  --accent-color-opaque: #089ee569;\n  --title-color: black;\n  --btn-text-color: black;\n  --bg-color: white;\n  --bg-color-opaque: transparent;\n  --bg-img: white;\n  --border-color: rgb(0 0 0 / 30%);\n  --border: 1px solid rgb(0 0 0 / 30%);\n  --border-radius: 3px;\n  --scroll-btn-color: black;\n  --scroll-btn-bg-color: rgb(255 255 255 / 30%);\n  --menu-btn-color: black;\n  --code-highlight-color: black;\n  --code-highlight-text-color: white;\n  --btn-bg-color: white;\n  --btn-hover-bg-color: white;\n  --menu-bar-bg-color: rgb(255 255 255 / 30%);\n  --menu-overlay-bg-color: white;\n  --cube-face: rgb(0 0 0 / 60%);\n  --cube-icon-color: white;\n  --bullet-color: black;\n  --divider: \"/\";\n  --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  --cursor-type: pointer;\n  --shadow: 0 0px 10px -5px black;\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: #e6f1ff;\n  --accent-color: #089ee5;\n  --accent-color-opaque: #089ee569;\n  --title-color: #089ee5;\n  --btn-text-color: #089ee5;\n  --bg-color: #0f0f0f;\n  --bg-color-opaque: rgb(0 0 0 / 30%);\n  --bg-img: url('code.png') no-repeat;\n  --border-color: #089ee5;\n  --border: 1px solid #089ee5;\n  --border-radius: 3px;\n  --scroll-btn-color: #089ee5;\n  --scroll-btn-bg-color: rgb(0 0 0 / 30%);\n  --menu-btn-color: #089ee5;\n  --code-highlight-color: rgb(0 0 0 / 30%);\n  --code-highlight-text-color: #e6f1ff;\n  --btn-bg-color: transparent;\n  --btn-hover-bg-color: rgb(0 0 0 / 30%);\n  --menu-bar-bg-color: rgb(0 0 0 / 30%);\n  --menu-overlay-bg-color: rgb(0 0 0 / 60%);\n  --cube-face: rgb(0 0 0 / 30%);\n  --cube-icon-color: #e6f1ff;\n  --bullet-color: #089ee5;\n  --divider: \"/\";\n  --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  --shadow: 0 0px 10px -5px black;\n  --cursor-type: pointer;\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n}\n\nfooter[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-family: var(--code-font);\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  width: 1px;\n  height: 90px;\n  margin: 0 auto 0px 7.5px;\n  background-color: var(--border-color);\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -16px;\n  left: 51px;\n  padding: 0;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 19px;\n  color: var(--primary-color);\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 33px;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 1;\n  text-align: center;\n  height: 15vh;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   .credit[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  transition: var(--transition);\n  transition-property: all;\n  transition-duration: 0.25s;\n  transition-delay: 0s;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, footer[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  color: var(--accent-color);\n}\nfooter[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 25px;\n  margin-top: -5px;\n  margin-left: 5px;\n}\nfooter[_ngcontent-%COMP%]   .scroll-top-btn[_ngcontent-%COMP%] {\n  border: var(--border);\n  border-radius: var(--border-radius);\n  padding: 0.5em 2em;\n  font-size: 20px;\n  line-height: 1;\n  position: fixed;\n  left: 50%;\n  bottom: -15px;\n  margin-left: -48.5px;\n  width: 20px;\n  text-align: center;\n  cursor: pointer;\n  transition: var(--transition);\n  color: var(--scroll-btn-color);\n  background-color: var(--scroll-btn-bg-color);\n  box-shadow: 0 0px 10px -5px black;\n  opacity: 0;\n}\nfooter[_ngcontent-%COMP%]   .scroll-top-btn.show-scroll-btn[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(-5px);\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n}\nfooter[_ngcontent-%COMP%]   .scroll-top-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px);\n}\n\n@media (max-width: 768px) {\n  .footer-left-bar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIiwiZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSw2Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLDREQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtFQUNBLDBFQUFBO0VBQ0EseUZBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLHVDQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsNERBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEVBQUE7RUFDQSx5RkFBQTtBQ0NKOztBQTVEQTtFQUNJLDJCQUFBO0VBQ0EsNkJBQUE7QUErREo7QUE3REk7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQ0FBQTtBQStEUjtBQTVESTtFQUNJLGdCQUFBO0FBOERSO0FBM0RJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQTZEUjtBQTNEUTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtBQTZEWjtBQTFEUTtFQUNJLGdCQUFBO0FBNERaO0FBMURZO0VBQ0ksbUJBQUE7QUE0RGhCO0FBdkRJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUF5RFI7QUF2RFE7RUFDSSxtQkFBQTtBQXlEWjtBQXREUTtFQUNJLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7QUF3RFo7QUF0RFk7RUFDSSxxQkFBQTtFQUNBLDBCQUFBO0FBd0RoQjtBQW5ESTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBcURSO0FBbERJO0VBQ0kscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNENBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7QUFvRFI7QUFuRFE7RUFDSSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0FBcURaO0FBbkRRO0VBQ0ksNEJBQUE7QUFxRFo7O0FBaERBO0VBQ0k7SUFDSSxhQUFBO0VBbUROO0FBQ0YiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiBibGFjaztcbiAgICAtLWFjY2VudC1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6ICMwODllZTU2OTtcbiAgICAtLXRpdGxlLWNvbG9yOiBibGFjaztcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiBibGFjaztcbiAgICAtLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJnLWNvbG9yLW9wYXF1ZTogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1pbWc6IHdoaXRlO1xuICAgIC0tYm9yZGVyLWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IGJsYWNrO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiBibGFjaztcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiBibGFjaztcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHdoaXRlO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1jdWJlLWZhY2U6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHdoaXRlO1xuICAgIC0tYnVsbGV0LWNvbG9yOiBibGFjaztcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xuICAgIC0tc2hhZG93OiAwIDBweCAxMHB4IC01cHggYmxhY2s7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG59XG5cbltkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjZTZmMWZmO1xuICAgIC0tYWNjZW50LWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogIzA4OWVlNTY5O1xuICAgIC0tdGl0bGUtY29sb3I6ICMwODllZTU7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWJnLWNvbG9yOiAjMGYwZjBmO1xuICAgIC0tYmctY29sb3Itb3BhcXVlOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYmctaW1nOiB1cmwoJy4uL2ltYWdlcy9iYWNrZ3JvdW5kL2NvZGUucG5nJykgbm8tcmVwZWF0O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIzA4OWVlNTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6ICMwODllZTU7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tbWVudS1idG4tY29sb3I6ICMwODllZTU7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6ICNlNmYxZmY7XG4gICAgLS1idG4tYmctY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdWJlLWZhY2U6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6ICNlNmYxZmY7XG4gICAgLS1idWxsZXQtY29sb3I6ICMwODllZTU7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gICAgLS1zaGFkb3c6IDAgMHB4IDEwcHggLTVweCBibGFjazs7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIjtcblxuZm9vdGVyIHtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvZGUtZm9udCk7XG5cbiAgICAuZm9vdGVyLWxlZnQtYmFyOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDBweCA3LjVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICB9XG5cbiAgICAuZm9vdGVyLWxlZnQtYmFyIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICAuZm9vdGVyLWxlZnQtYmFyIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IC0xNnB4O1xuICAgICAgICBsZWZ0OiA1MXB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIGkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcblxuICAgICAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZm9vdGVyLWNyZWRpdHMge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMTV2aDtcblxuICAgICAgICAuY3JlZGl0IHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNXM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcblxuICAgICAgICAgICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmxvZ28ge1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgfVxuXG4gICAgLnNjcm9sbC10b3AtYnRuIHtcbiAgICAgICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICAgICAgcGFkZGluZzogLjVlbSAyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBib3R0b206IC0xNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTQ4LjVweDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXNjcm9sbC1idG4tY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY3JvbGwtYnRuLWJnLWNvbG9yKTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwcHggMTBweCAtNXB4IGJsYWNrO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAmLnNob3ctc2Nyb2xsLWJ0biB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5mb290ZXItbGVmdC1iYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLDZDQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtDQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLDJDQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsNERBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEVBQUE7RUFDQSx5RkFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSw0REFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwRUFBQTtFQUNBLHlGQUFBO0FDQ0o7O0FBNURBO0VBQ0ksMkJBQUE7RUFDQSw2QkFBQTtBQStESjtBQTdESTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLHFDQUFBO0FBK0RSO0FBNURJO0VBQ0ksZ0JBQUE7QUE4RFI7QUEzREk7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBNkRSO0FBM0RRO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0FBNkRaO0FBMURRO0VBQ0ksZ0JBQUE7QUE0RFo7QUExRFk7RUFDSSxtQkFBQTtBQTREaEI7QUF2REk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQXlEUjtBQXZEUTtFQUNJLG1CQUFBO0FBeURaO0FBdERRO0VBQ0ksMkJBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtBQXdEWjtBQXREWTtFQUNJLHFCQUFBO0VBQ0EsMEJBQUE7QUF3RGhCO0FBbkRJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFxRFI7QUFsREk7RUFDSSxxQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsVUFBQTtBQW9EUjtBQW5EUTtFQUNJLFVBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUFxRFo7QUFuRFE7RUFDSSw0QkFBQTtBQXFEWjs7QUFoREE7RUFDSTtJQUNJLGFBQUE7RUFtRE47QUFDRjtBQUVBLGd2UUFBZ3ZRIiwic291cmNlc0NvbnRlbnQiOlsiW2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiBibGFjaztcbiAgICAtLWFjY2VudC1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6ICMwODllZTU2OTtcbiAgICAtLXRpdGxlLWNvbG9yOiBibGFjaztcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiBibGFjaztcbiAgICAtLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJnLWNvbG9yLW9wYXF1ZTogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1pbWc6IHdoaXRlO1xuICAgIC0tYm9yZGVyLWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IGJsYWNrO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiBibGFjaztcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiBibGFjaztcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHdoaXRlO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1jdWJlLWZhY2U6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHdoaXRlO1xuICAgIC0tYnVsbGV0LWNvbG9yOiBibGFjaztcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xuICAgIC0tc2hhZG93OiAwIDBweCAxMHB4IC01cHggYmxhY2s7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG59XG5cbltkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjZTZmMWZmO1xuICAgIC0tYWNjZW50LWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogIzA4OWVlNTY5O1xuICAgIC0tdGl0bGUtY29sb3I6ICMwODllZTU7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWJnLWNvbG9yOiAjMGYwZjBmO1xuICAgIC0tYmctY29sb3Itb3BhcXVlOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYmctaW1nOiB1cmwoJy4uL2ltYWdlcy9iYWNrZ3JvdW5kL2NvZGUucG5nJykgbm8tcmVwZWF0O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIzA4OWVlNTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6ICMwODllZTU7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tbWVudS1idG4tY29sb3I6ICMwODllZTU7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6ICNlNmYxZmY7XG4gICAgLS1idG4tYmctY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdWJlLWZhY2U6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6ICNlNmYxZmY7XG4gICAgLS1idWxsZXQtY29sb3I6ICMwODllZTU7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gICAgLS1zaGFkb3c6IDAgMHB4IDEwcHggLTVweCBibGFjazs7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIjtcblxuZm9vdGVyIHtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvZGUtZm9udCk7XG5cbiAgICAuZm9vdGVyLWxlZnQtYmFyOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDBweCA3LjVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICB9XG5cbiAgICAuZm9vdGVyLWxlZnQtYmFyIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICAuZm9vdGVyLWxlZnQtYmFyIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IC0xNnB4O1xuICAgICAgICBsZWZ0OiA1MXB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIGkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcblxuICAgICAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZm9vdGVyLWNyZWRpdHMge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMTV2aDtcblxuICAgICAgICAuY3JlZGl0IHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNXM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcblxuICAgICAgICAgICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmxvZ28ge1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgfVxuXG4gICAgLnNjcm9sbC10b3AtYnRuIHtcbiAgICAgICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICAgICAgcGFkZGluZzogLjVlbSAyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBib3R0b206IC0xNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTQ4LjVweDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXNjcm9sbC1idG4tY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY3JvbGwtYnRuLWJnLWNvbG9yKTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwcHggMTBweCAtNXB4IGJsYWNrO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAmLnNob3ctc2Nyb2xsLWJ0biB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5mb290ZXItbGVmdC1iYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5368:
/*!******************************************************!*\
  !*** ./src/app/components/general/general.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralModule: () => (/* binding */ GeneralModule),
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu/menu.component */ 156);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 2584);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 1332);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 5531);
/* harmony import */ var _background_background_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background/background.component */ 7216);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ 8480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4280);











function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class GeneralModule {
  static #_ = this.ɵfac = function GeneralModule_Factory(t) {
    return new (t || GeneralModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: GeneralModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
      }
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](GeneralModule, {
    declarations: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent, _background_background_component__WEBPACK_IMPORTED_MODULE_1__.BackgroundComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule],
    exports: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent, _background_background_component__WEBPACK_IMPORTED_MODULE_1__.BackgroundComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent]
  });
})();

/***/ }),

/***/ 156:
/*!***********************************************************!*\
  !*** ./src/app/components/general/menu/menu.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuComponent: () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 3291);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/language/language.service */ 9928);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 2584);









function MenuComponent_div_5_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 14)(1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_div_5_li_2_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const item_r3 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      ctx_r5.navigate(item_r3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.menuOpen = !ctx_r5.menuOpen);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.label);
  }
}
function MenuComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "ol", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MenuComponent_div_5_li_2_Template, 3, 1, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_div_5_Template_li_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.switchTheme());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@OutAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, "Menu.NavItems"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fas ", ctx_r0.theme === "light" ? "fa-toggle-on" : "fa-toggle-off", "");
  }
}
function MenuComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 16)(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_li_8_Template_span_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const item_r9 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.navigate(item_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-aos-delay", i_r10 * 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", item_r9.label.toLowerCase() === ctx_r1.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r9.label);
  }
}
const _c0 = a0 => ({
  "menu-open": a0
});
const _c1 = a0 => ({
  "show-menu-bg": a0
});
class MenuComponent {
  constructor(router, languageService) {
    this.router = router;
    this.languageService = languageService;
    this.menuOpen = false;
    this.languageFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl();
    this.fileName = '';
    this.route = '';
    this.scrollPosition = 0;
  }
  ngOnInit() {
    this.languageFormControl.setValue(this.languageService.DEFAULT);
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
        this.route = event.url.split('/')[1] || 'home';
      }
    });
  }
  toggleOverlayMenu() {
    this.menuOpen = !this.menuOpen;
    document.body.classList.toggle('scroll-lock');
  }
  navigate(item) {
    if (item.label === 'Resume') {
      this.downloadResume();
    }
    this.router.navigate([item.link]);
  }
  downloadResume() {
    this.languageService.translateService.get("ResumeFileName").subscribe(val => {
      this.fileName = val;
      window.open(window.location.href + "/../assets/resume/" + this.fileName, "_blank");
    });
  }
  switchTheme() {
    this.theme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', this.theme);
  }
  checkScroll() {
    this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }
  static #_ = this.ɵfac = function MenuComponent_Factory(t) {
    return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MenuComponent,
    selectors: [["app-menu"]],
    hostBindings: function MenuComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function MenuComponent_scroll_HostBindingHandler() {
          return ctx.checkScroll();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
      }
    },
    decls: 12,
    vars: 13,
    consts: [[1, "menu-btn", 3, "click"], [1, "menu-container", 3, "ngClass"], [1, "bar1"], [1, "bar2"], [1, "bar3"], ["class", "menu-overlay", "data-aos", "fade-out", 4, "ngIf"], [1, "menu-bar"], [1, "menu-bar-items", 3, "ngClass"], ["class", "menu-bar-item", "data-aos", "fade-down", "data-aos-duration", "500", 4, "ngFor", "ngForOf"], ["data-aos", "fade-down", "data-aos-duration", "500", "data-aos-delay", "600", 1, "menu-bar-item", "theme-toggle", 3, "click"], ["data-aos", "fade-out", 1, "menu-overlay"], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "menu-items"], ["class", "menu-item", 4, "ngFor", "ngForOf"], [1, "overlay-theme-toggle", 3, "click"], [1, "menu-item"], [3, "click"], ["data-aos", "fade-down", "data-aos-duration", "500", 1, "menu-bar-item"]],
    template: function MenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_Template_div_click_0_listener() {
          return ctx.toggleOverlayMenu();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MenuComponent_div_5_Template, 6, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6)(7, "ol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MenuComponent_li_8_Template, 3, 4, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_Template_li_click_10_listener() {
          return ctx.switchTheme();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx.menuOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.menuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c1, ctx.scrollPosition > 100));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 7, "Menu.NavItems"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fas ", ctx.theme === "light" ? "fa-toggle-on" : "fa-toggle-off", "");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
    styles: ["[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: black;\n  --accent-color: #089ee5;\n  --accent-color-opaque: #089ee569;\n  --title-color: black;\n  --btn-text-color: black;\n  --bg-color: white;\n  --bg-color-opaque: transparent;\n  --bg-img: white;\n  --border-color: rgb(0 0 0 / 30%);\n  --border: 1px solid rgb(0 0 0 / 30%);\n  --border-radius: 3px;\n  --scroll-btn-color: black;\n  --scroll-btn-bg-color: rgb(255 255 255 / 30%);\n  --menu-btn-color: black;\n  --code-highlight-color: black;\n  --code-highlight-text-color: white;\n  --btn-bg-color: white;\n  --btn-hover-bg-color: white;\n  --menu-bar-bg-color: rgb(255 255 255 / 30%);\n  --menu-overlay-bg-color: white;\n  --cube-face: rgb(0 0 0 / 60%);\n  --cube-icon-color: white;\n  --bullet-color: black;\n  --divider: \"/\";\n  --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  --cursor-type: pointer;\n  --shadow: 0 0px 10px -5px black;\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: #e6f1ff;\n  --accent-color: #089ee5;\n  --accent-color-opaque: #089ee569;\n  --title-color: #089ee5;\n  --btn-text-color: #089ee5;\n  --bg-color: #0f0f0f;\n  --bg-color-opaque: rgb(0 0 0 / 30%);\n  --bg-img: url('code.png') no-repeat;\n  --border-color: #089ee5;\n  --border: 1px solid #089ee5;\n  --border-radius: 3px;\n  --scroll-btn-color: #089ee5;\n  --scroll-btn-bg-color: rgb(0 0 0 / 30%);\n  --menu-btn-color: #089ee5;\n  --code-highlight-color: rgb(0 0 0 / 30%);\n  --code-highlight-text-color: #e6f1ff;\n  --btn-bg-color: transparent;\n  --btn-hover-bg-color: rgb(0 0 0 / 30%);\n  --menu-bar-bg-color: rgb(0 0 0 / 30%);\n  --menu-overlay-bg-color: rgb(0 0 0 / 60%);\n  --cube-face: rgb(0 0 0 / 30%);\n  --cube-icon-color: #e6f1ff;\n  --bullet-color: #089ee5;\n  --divider: \"/\";\n  --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  --shadow: 0 0px 10px -5px black;\n  --cursor-type: pointer;\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n}\n\n.menu-btn[_ngcontent-%COMP%] {\n  display: none;\n  font-size: 35px;\n  position: fixed;\n  top: 0;\n  right: 0;\n  margin-right: 15px;\n  margin-top: 15px;\n  color: var(--primary-color);\n  cursor: var(--cursor-type);\n  z-index: 2;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%] {\n  display: block;\n  cursor: pointer;\n  border-radius: var(--border-radius);\n  color: blue;\n  padding: 5px;\n  transition: var(--transition);\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]:hover {\n  background: var(--bg-color-opaque);\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\n  transition: var(--transition);\n  width: 35px;\n  height: 2px;\n  background-color: var(--menu-btn-color);\n  margin: 6px 0;\n  transition: 0.4s;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%] {\n  transform: translate(0, 10px) rotate(-45deg);\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\n  transform: translate(0, -6px) rotate(45deg);\n}\n\n.menu-overlay[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background: var(--menu-overlay-bg-color);\n  -webkit-backdrop-filter: blur(3px);\n          backdrop-filter: blur(3px);\n  z-index: 1;\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15%;\n  left: 0;\n  width: 100vw;\n  margin: auto;\n  list-style: none;\n  color: var(--primary-color);\n  font-family: var(--code-font);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  font-size: 3em;\n  cursor: var(--cursor-type);\n  transition: var(--transition);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:before {\n  content: \">\";\n  opacity: 0;\n  margin: 20px 10px;\n  color: var(--bullet-color);\n  transition: var(--transition);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover {\n  transform: translateX(5px);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover:before {\n  opacity: 1;\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover:after {\n  opacity: 1;\n}\n\n.menu-bar[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 50px;\n  z-index: 1;\n}\n.menu-bar[_ngcontent-%COMP%]   .menu-bar-items[_ngcontent-%COMP%] {\n  padding: 2em 1.5em 1.25em;\n  float: left;\n  border: 1px solid transparent;\n  border-radius: var(--border-radius);\n  position: fixed;\n  top: -30px;\n  left: 50%;\n  transform: translateX(-50%);\n  transition: var(--transition);\n  z-index: 1;\n  min-width: 553px;\n}\n.menu-bar[_ngcontent-%COMP%]   .menu-bar-items.show-menu-bg[_ngcontent-%COMP%] {\n  background: var(--menu-bar-bg-color);\n  box-shadow: var(--shadow);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  border: var(--border) !important;\n}\n.menu-bar[_ngcontent-%COMP%]   .menu-bar-items[_ngcontent-%COMP%]   .menu-bar-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  float: left;\n  color: var(--primary-color);\n}\n.menu-bar[_ngcontent-%COMP%]   .menu-bar-items[_ngcontent-%COMP%]   .menu-bar-item[_ngcontent-%COMP%]:after {\n  content: var(--divider);\n  color: var(--accent-color);\n  font-weight: 600;\n  opacity: 0.7;\n  margin: 10px;\n}\n.menu-bar[_ngcontent-%COMP%]   .menu-bar-items[_ngcontent-%COMP%]   .menu-bar-item[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n\n.active[_ngcontent-%COMP%] {\n  color: var(--accent-color);\n}\n\n.menu-bar-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .theme-toggle[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--primary-color);\n}\n\n.overlay-theme-toggle[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-left: 50px;\n  cursor: pointer;\n}\n\n.theme-toggle[_ngcontent-%COMP%] {\n  font-size: 19px;\n  color: var(--primary-color);\n}\n\n@media (max-width: 1000px) {\n  .menu-btn[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .menu-bar-items[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .menu-overlay[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIiwibWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkNBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkNBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSw0REFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwRUFBQTtFQUNBLHlGQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDREQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBFQUFBO0VBQ0EseUZBQUE7QUNDSjs7QUE1REE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtBQStESjtBQTdESTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBK0RSO0FBN0RRO0VBQ0ksa0NBQUE7QUErRFo7QUE1RFE7RUFDSSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUE4RFo7QUExRFk7RUFDSSxzQ0FBQTtBQTREaEI7QUF6RFk7RUFDSSw0Q0FBQTtBQTJEaEI7QUF4RFk7RUFDSSxVQUFBO0FBMERoQjtBQXZEWTtFQUNJLDJDQUFBO0FBeURoQjs7QUFsREE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSx3Q0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxVQUFBO0FBcURKO0FBbkRJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0FBcURSO0FBbkRRO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FBcURaO0FBbkRZO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUFxRGhCO0FBbERZO0VBS0ksMEJBQUE7QUFnRGhCO0FBcERnQjtFQUNJLDJCQUFBO0FBc0RwQjtBQWpEZ0I7RUFDSSxVQUFBO0FBbURwQjtBQWhEZ0I7RUFDSSxVQUFBO0FBa0RwQjs7QUEzQ0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUE4Q0o7QUE1Q0k7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQThDUjtBQTVDUTtFQUNJLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsZ0NBQUE7QUE4Q1o7QUEzQ1E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBNkNaO0FBM0NZO0VBQ0ksdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUE2Q2hCO0FBMUNZO0VBQ0ksV0FBQTtBQTRDaEI7O0FBdENBO0VBQ0ksMEJBQUE7QUF5Q0o7O0FBcENRO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0FBdUNaOztBQWxDQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFxQ0o7O0FBbENBO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0FBcUNKOztBQWpDQTtFQUNJO0lBQ0ksY0FBQTtFQW9DTjtFQWxDRTtJQUNJLGFBQUE7RUFvQ047RUFsQ0U7SUFDSSxjQUFBO0VBb0NOO0FBQ0YiLCJmaWxlIjoibWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogYmxhY2s7XG4gICAgLS1hY2NlbnQtY29sb3I6ICMwODllZTU7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiAjMDg5ZWU1Njk7XG4gICAgLS10aXRsZS1jb2xvcjogYmxhY2s7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogYmxhY2s7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci1vcGFxdWU6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctaW1nOiB3aGl0ZTtcbiAgICAtLWJvcmRlci1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiBibGFjaztcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogYmxhY2s7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogYmxhY2s7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHdoaXRlO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHdoaXRlO1xuICAgIC0tY3ViZS1mYWNlOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJ1bGxldC1jb2xvcjogYmxhY2s7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbiAgICAtLXNoYWRvdzogMCAwcHggMTBweCAtNXB4IGJsYWNrO1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogI2U2ZjFmZjtcbiAgICAtLWFjY2VudC1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6ICMwODllZTU2OTtcbiAgICAtLXRpdGxlLWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tYnRuLXRleHQtY29sb3I6ICMwODllZTU7XG4gICAgLS1iZy1jb2xvcjogIzBmMGYwZjtcbiAgICAtLWJnLWNvbG9yLW9wYXF1ZTogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJnLWltZzogdXJsKCcuLi9pbWFnZXMvYmFja2dyb3VuZC9jb2RlLnBuZycpIG5vLXJlcGVhdDtcbiAgICAtLWJvcmRlci1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICMwODllZTU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiAjZTZmMWZmO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3ViZS1mYWNlOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiAjZTZmMWZmO1xuICAgIC0tYnVsbGV0LWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICAgIC0tc2hhZG93OiAwIDBweCAxMHB4IC01cHggYmxhY2s7O1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG59XG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCI7XG5cbi5tZW51LWJ0biB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgY3Vyc29yOiB2YXIoLS1jdXJzb3ItdHlwZSk7XG4gICAgei1pbmRleDogMjtcblxuICAgIC5tZW51LWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yLW9wYXF1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAuYmFyMSwgLmJhcjIsIC5iYXIzIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtYnRuLWNvbG9yKTtcbiAgICAgICAgICAgIG1hcmdpbjogNnB4IDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5tZW51LW9wZW4ge1xuICAgICAgICAgICAgLmJhcjEsIC5iYXIyLCAuYmFyMyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5iYXIxIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMHB4KSByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJhcjIge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5iYXIzIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNnB4KSByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG59XG5cbi5tZW51LW92ZXJsYXkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcik7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XG4gICAgei1pbmRleDogMTtcblxuICAgIC5tZW51LWl0ZW1zIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDE1JTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWNvZGUtZm9udCk7XG5cbiAgICAgICAgLm1lbnUtaXRlbSB7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICAgICAgY3Vyc29yOiB2YXIoLS1jdXJzb3ItdHlwZSk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcblxuICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICc+JztcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAxMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1idWxsZXQtY29sb3IpO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xuXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm1lbnUtYmFyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHotaW5kZXg6IDE7XG5cbiAgICAubWVudS1iYXItaXRlbXMge1xuICAgICAgICBwYWRkaW5nOiAyZW0gMS41ZW0gMS4yNWVtO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogLTMwcHg7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgbWluLXdpZHRoOiA1NTNweDtcblxuICAgICAgICAmLnNob3ctbWVudS1iZyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tZW51LWJhci1iZy1jb2xvcik7XG4gICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gICAgICAgICAgICBib3JkZXI6IHZhcigtLWJvcmRlcikgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZW51LWJhci1pdGVtIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuXG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiB2YXIoLS1kaXZpZGVyKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uYWN0aXZlIHtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLm1lbnUtYmFyLWl0ZW0ge1xuICAgIHNwYW4ge1xuICAgICAgICAudGhlbWUtdG9nZ2xlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm92ZXJsYXktdGhlbWUtdG9nZ2xlIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGhlbWUtdG9nZ2xlIHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAubWVudS1idG4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLm1lbnUtYmFyLWl0ZW1zIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLm1lbnUtb3ZlcmxheSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkNBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkNBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSw0REFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwRUFBQTtFQUNBLHlGQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDREQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBFQUFBO0VBQ0EseUZBQUE7QUNDSjs7QUE1REE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtBQStESjtBQTdESTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBK0RSO0FBN0RRO0VBQ0ksa0NBQUE7QUErRFo7QUE1RFE7RUFDSSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUE4RFo7QUExRFk7RUFDSSxzQ0FBQTtBQTREaEI7QUF6RFk7RUFDSSw0Q0FBQTtBQTJEaEI7QUF4RFk7RUFDSSxVQUFBO0FBMERoQjtBQXZEWTtFQUNJLDJDQUFBO0FBeURoQjs7QUFsREE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSx3Q0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxVQUFBO0FBcURKO0FBbkRJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0FBcURSO0FBbkRRO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FBcURaO0FBbkRZO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUFxRGhCO0FBbERZO0VBS0ksMEJBQUE7QUFnRGhCO0FBcERnQjtFQUNJLDJCQUFBO0FBc0RwQjtBQWpEZ0I7RUFDSSxVQUFBO0FBbURwQjtBQWhEZ0I7RUFDSSxVQUFBO0FBa0RwQjs7QUEzQ0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUE4Q0o7QUE1Q0k7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQThDUjtBQTVDUTtFQUNJLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsZ0NBQUE7QUE4Q1o7QUEzQ1E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBNkNaO0FBM0NZO0VBQ0ksdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUE2Q2hCO0FBMUNZO0VBQ0ksV0FBQTtBQTRDaEI7O0FBdENBO0VBQ0ksMEJBQUE7QUF5Q0o7O0FBcENRO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0FBdUNaOztBQWxDQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFxQ0o7O0FBbENBO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0FBcUNKOztBQWpDQTtFQUNJO0lBQ0ksY0FBQTtFQW9DTjtFQWxDRTtJQUNJLGFBQUE7RUFvQ047RUFsQ0U7SUFDSSxjQUFBO0VBb0NOO0FBQ0Y7QUFHQSw0NVdBQTQ1VyIsInNvdXJjZXNDb250ZW50IjpbIltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogYmxhY2s7XG4gICAgLS1hY2NlbnQtY29sb3I6ICMwODllZTU7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiAjMDg5ZWU1Njk7XG4gICAgLS10aXRsZS1jb2xvcjogYmxhY2s7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogYmxhY2s7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci1vcGFxdWU6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctaW1nOiB3aGl0ZTtcbiAgICAtLWJvcmRlci1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiBibGFjaztcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogYmxhY2s7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogYmxhY2s7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHdoaXRlO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHdoaXRlO1xuICAgIC0tY3ViZS1mYWNlOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJ1bGxldC1jb2xvcjogYmxhY2s7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbiAgICAtLXNoYWRvdzogMCAwcHggMTBweCAtNXB4IGJsYWNrO1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogI2U2ZjFmZjtcbiAgICAtLWFjY2VudC1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6ICMwODllZTU2OTtcbiAgICAtLXRpdGxlLWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tYnRuLXRleHQtY29sb3I6ICMwODllZTU7XG4gICAgLS1iZy1jb2xvcjogIzBmMGYwZjtcbiAgICAtLWJnLWNvbG9yLW9wYXF1ZTogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJnLWltZzogdXJsKCcuLi9pbWFnZXMvYmFja2dyb3VuZC9jb2RlLnBuZycpIG5vLXJlcGVhdDtcbiAgICAtLWJvcmRlci1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICMwODllZTU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiAjZTZmMWZmO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3ViZS1mYWNlOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiAjZTZmMWZmO1xuICAgIC0tYnVsbGV0LWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICAgIC0tc2hhZG93OiAwIDBweCAxMHB4IC01cHggYmxhY2s7O1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG59XG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCI7XG5cbi5tZW51LWJ0biB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgY3Vyc29yOiB2YXIoLS1jdXJzb3ItdHlwZSk7XG4gICAgei1pbmRleDogMjtcblxuICAgIC5tZW51LWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yLW9wYXF1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAuYmFyMSwgLmJhcjIsIC5iYXIzIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtYnRuLWNvbG9yKTtcbiAgICAgICAgICAgIG1hcmdpbjogNnB4IDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5tZW51LW9wZW4ge1xuICAgICAgICAgICAgLmJhcjEsIC5iYXIyLCAuYmFyMyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5iYXIxIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMHB4KSByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJhcjIge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5iYXIzIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNnB4KSByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG59XG5cbi5tZW51LW92ZXJsYXkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcik7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XG4gICAgei1pbmRleDogMTtcblxuICAgIC5tZW51LWl0ZW1zIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDE1JTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWNvZGUtZm9udCk7XG5cbiAgICAgICAgLm1lbnUtaXRlbSB7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICAgICAgY3Vyc29yOiB2YXIoLS1jdXJzb3ItdHlwZSk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcblxuICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICc+JztcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAxMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1idWxsZXQtY29sb3IpO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xuXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm1lbnUtYmFyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHotaW5kZXg6IDE7XG5cbiAgICAubWVudS1iYXItaXRlbXMge1xuICAgICAgICBwYWRkaW5nOiAyZW0gMS41ZW0gMS4yNWVtO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogLTMwcHg7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgbWluLXdpZHRoOiA1NTNweDtcblxuICAgICAgICAmLnNob3ctbWVudS1iZyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tZW51LWJhci1iZy1jb2xvcik7XG4gICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gICAgICAgICAgICBib3JkZXI6IHZhcigtLWJvcmRlcikgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZW51LWJhci1pdGVtIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuXG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiB2YXIoLS1kaXZpZGVyKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uYWN0aXZlIHtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLm1lbnUtYmFyLWl0ZW0ge1xuICAgIHNwYW4ge1xuICAgICAgICAudGhlbWUtdG9nZ2xlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm92ZXJsYXktdGhlbWUtdG9nZ2xlIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGhlbWUtdG9nZ2xlIHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAubWVudS1idG4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLm1lbnUtYmFyLWl0ZW1zIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLm1lbnUtb3ZlcmxheSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('OutAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        opacity: 1
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('.2s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        opacity: 0
      }))])])]
    }
  });
}

/***/ }),

/***/ 1412:
/*!**********************************************************!*\
  !*** ./src/app/components/home/about/about.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _services_language_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/language/language.service */ 9928);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loader/loader.component */ 7308);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 2584);





class AboutComponent {
  constructor(languageService) {
    this.languageService = languageService;
  }
  downloadResume() {
    this.languageService.translateService.get("ResumeFileName").subscribe(val => {
      window.open(window.location.href + "/../assets/resume/" + val, "_blank");
    });
  }
  static #_ = this.ɵfac = function AboutComponent_Factory(t) {
    return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_language_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["app-about"]],
    decls: 28,
    vars: 15,
    consts: [[1, "container"], [1, "section-box-about"], [1, "content"], [1, "row"], [1, "column"], ["data-aos", "fade-right", "data-aos-duration", "500"], [1, "title"], [1, "about-title"], ["data-aos", "fade-right", "data-aos-delay", "100", "data-aos-duration", "500", 1, "name"], ["data-aos", "fade-right", "data-aos-delay", "200", "data-aos-duration", "500", 1, "role"], [1, "code-highlight"], [1, "blinking-cursor"], ["data-aos", "fade-right", "data-aos-delay", "300", "data-aos-duration", "500", 1, "about-description"], [1, "mt-4", 3, "innerHTML"], ["data-aos", "fade-right", "data-aos-delay", "300", "data-aos-duration", "500", 1, "main-btn", "resume-btn", 3, "click"], ["data-aos", "zoom-out", "data-aos-duration", "500", 1, "column", "loader"]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7)(11, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h3", 9)(15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AboutComponent_Template_a_click_23_listener() {
          return ctx.downloadResume();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 5, "About.Pretitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 7, "About.Name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 9, "About.Role"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 11, "About.Description"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 13, "About.ResumeBtn"), " ");
      }
    },
    dependencies: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    styles: ["[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: black;\n  --accent-color: #089ee5;\n  --accent-color-opaque: #089ee569;\n  --title-color: black;\n  --btn-text-color: black;\n  --bg-color: white;\n  --bg-color-opaque: transparent;\n  --bg-img: white;\n  --border-color: rgb(0 0 0 / 30%);\n  --border: 1px solid rgb(0 0 0 / 30%);\n  --border-radius: 3px;\n  --scroll-btn-color: black;\n  --scroll-btn-bg-color: rgb(255 255 255 / 30%);\n  --menu-btn-color: black;\n  --code-highlight-color: black;\n  --code-highlight-text-color: white;\n  --btn-bg-color: white;\n  --btn-hover-bg-color: white;\n  --menu-bar-bg-color: rgb(255 255 255 / 30%);\n  --menu-overlay-bg-color: white;\n  --cube-face: rgb(0 0 0 / 60%);\n  --cube-icon-color: white;\n  --bullet-color: black;\n  --divider: \"/\";\n  --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  --cursor-type: pointer;\n  --shadow: 0 0px 10px -5px black;\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: #e6f1ff;\n  --accent-color: #089ee5;\n  --accent-color-opaque: #089ee569;\n  --title-color: #089ee5;\n  --btn-text-color: #089ee5;\n  --bg-color: #0f0f0f;\n  --bg-color-opaque: rgb(0 0 0 / 30%);\n  --bg-img: url('code.png') no-repeat;\n  --border-color: #089ee5;\n  --border: 1px solid #089ee5;\n  --border-radius: 3px;\n  --scroll-btn-color: #089ee5;\n  --scroll-btn-bg-color: rgb(0 0 0 / 30%);\n  --menu-btn-color: #089ee5;\n  --code-highlight-color: rgb(0 0 0 / 30%);\n  --code-highlight-text-color: #e6f1ff;\n  --btn-bg-color: transparent;\n  --btn-hover-bg-color: rgb(0 0 0 / 30%);\n  --menu-bar-bg-color: rgb(0 0 0 / 30%);\n  --menu-overlay-bg-color: rgb(0 0 0 / 60%);\n  --cube-face: rgb(0 0 0 / 30%);\n  --cube-icon-color: #e6f1ff;\n  --bullet-color: #089ee5;\n  --divider: \"/\";\n  --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  --shadow: 0 0px 10px -5px black;\n  --cursor-type: pointer;\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n}\n\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 200px;\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--title-color);\n  margin: 0 0 20px 3px;\n  font-size: 16px;\n  font-weight: normal;\n  font-family: var(--code-font);\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  line-height: 1.1;\n  margin: 0;\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 60px;\n  color: var(--primary-color);\n  font-family: var(--primary-font);\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 40px;\n  color: var(--primary-color);\n  font-family: var(--code-font);\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   .about-description[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap-reverse;\n  justify-content: normal;\n  align-items: normal;\n  align-content: normal;\n}\n.row[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  display: block;\n  flex-grow: 1;\n  flex-shrink: 1;\n  flex-basis: auto;\n  align-self: center;\n  order: 0;\n}\n\n.code-highlight[_ngcontent-%COMP%] {\n  background: var(--code-highlight-color);\n  padding: 0 0px 0px 10px;\n  margin-left: -10px;\n  color: var(--code-highlight-text-color);\n}\n.code-highlight[_ngcontent-%COMP%]   .blinking-cursor[_ngcontent-%COMP%] {\n  animation: 1s _ngcontent-%COMP%_blink step-end infinite;\n}\n\n@keyframes _ngcontent-%COMP%_blink {\n  from, to {\n    color: transparent;\n  }\n  50% {\n    color: var(--code-highlight-text-color);\n  }\n}\n@media (max-width: 480px) {\n  .name[_ngcontent-%COMP%] {\n    font-size: 45px !important;\n  }\n  .role[_ngcontent-%COMP%] {\n    font-size: 28px !important;\n  }\n}\n@media (max-width: 1160px) {\n  .column.loader[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: -30px;\n    margin-bottom: 15vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIiwiYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLDZDQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtDQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLDJDQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsNERBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEVBQUE7RUFDQSx5RkFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSw0REFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwRUFBQTtFQUNBLHlGQUFBO0FDQ0o7O0FBMURJO0VBQ0ksc0JBQUE7QUE2RFI7QUEzRFE7RUFDSSxpQkFBQTtBQTZEWjtBQTFEUTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQTREWjtBQXpEUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBMkRaO0FBeERRO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7QUEwRFo7QUF2RFE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0FBeURaO0FBdERRO0VBQ0ksbUJBQUE7QUF3RFo7QUFyRFE7RUFDSSxnQkFBQTtBQXVEWjs7QUFsREE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQXFESjtBQW5ESTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBcURSOztBQWpEQTtFQUNJLHVDQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0FBb0RKO0FBbkRJO0VBQ0kscUNBQUE7QUFxRFI7O0FBaERBO0VBQ0k7SUFDSSxrQkFBQTtFQW1ETjtFQWpERTtJQUNJLHVDQUFBO0VBbUROO0FBQ0Y7QUFoREE7RUFDSTtJQUNJLDBCQUFBO0VBa0ROO0VBaERFO0lBQ0ksMEJBQUE7RUFrRE47QUFDRjtBQS9DQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUFpRE47QUFDRiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogYmxhY2s7XG4gICAgLS1hY2NlbnQtY29sb3I6ICMwODllZTU7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiAjMDg5ZWU1Njk7XG4gICAgLS10aXRsZS1jb2xvcjogYmxhY2s7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogYmxhY2s7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci1vcGFxdWU6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctaW1nOiB3aGl0ZTtcbiAgICAtLWJvcmRlci1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiBibGFjaztcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogYmxhY2s7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogYmxhY2s7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHdoaXRlO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHdoaXRlO1xuICAgIC0tY3ViZS1mYWNlOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJ1bGxldC1jb2xvcjogYmxhY2s7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbiAgICAtLXNoYWRvdzogMCAwcHggMTBweCAtNXB4IGJsYWNrO1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogI2U2ZjFmZjtcbiAgICAtLWFjY2VudC1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6ICMwODllZTU2OTtcbiAgICAtLXRpdGxlLWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tYnRuLXRleHQtY29sb3I6ICMwODllZTU7XG4gICAgLS1iZy1jb2xvcjogIzBmMGYwZjtcbiAgICAtLWJnLWNvbG9yLW9wYXF1ZTogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJnLWltZzogdXJsKCcuLi9pbWFnZXMvYmFja2dyb3VuZC9jb2RlLnBuZycpIG5vLXJlcGVhdDtcbiAgICAtLWJvcmRlci1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICMwODllZTU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiAjZTZmMWZmO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3ViZS1mYWNlOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiAjZTZmMWZmO1xuICAgIC0tYnVsbGV0LWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICAgIC0tc2hhZG93OiAwIDBweCAxMHB4IC01cHggYmxhY2s7O1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG59XG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCI7XG5cbi5jb250YWluZXIge1xuXG4gICAgLnNlY3Rpb24tYm94LWFib3V0IHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAyMHB4IDNweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tY29kZS1mb250KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyLCBoMyB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaDMge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb2RlLWZvbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFib3V0LWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IG5vcm1hbDtcbiAgICBhbGlnbi1pdGVtczogbm9ybWFsO1xuICAgIGFsaWduLWNvbnRlbnQ6IG5vcm1hbDtcblxuICAgIC5jb2x1bW4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICBmbGV4LXNocmluazogMTtcbiAgICAgICAgZmxleC1iYXNpczogYXV0bztcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICBvcmRlcjogMDtcbiAgICB9XG59XG5cbi5jb2RlLWhpZ2hsaWdodCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29kZS1oaWdobGlnaHQtY29sb3IpO1xuICAgIHBhZGRpbmc6IDAgMHB4IDBweCAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICBjb2xvcjogdmFyKC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcik7XG4gICAgLmJsaW5raW5nLWN1cnNvciB7XG4gICAgICAgIGFuaW1hdGlvbjogMXMgYmxpbmsgc3RlcC1lbmQgaW5maW5pdGU7XG4gICAgfVxuXG59XG5cbkBrZXlmcmFtZXMgYmxpbmsge1xuICAgIGZyb20sIHRvIHtcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICBjb2xvcjogdmFyKC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcik7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAubmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDVweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAucm9sZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhKG1heC13aWR0aDogMTE2MHB4KSB7XG4gICAgLmNvbHVtbi5sb2FkZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXZoO1xuICAgIH1cbn1cblxuXG5cblxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSw2Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLDREQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtFQUNBLDBFQUFBO0VBQ0EseUZBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLHVDQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsNERBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEVBQUE7RUFDQSx5RkFBQTtBQ0NKOztBQTFESTtFQUNJLHNCQUFBO0FBNkRSO0FBM0RRO0VBQ0ksaUJBQUE7QUE2RFo7QUExRFE7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUE0RFo7QUF6RFE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQTJEWjtBQXhEUTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0FBMERaO0FBdkRRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtBQXlEWjtBQXREUTtFQUNJLG1CQUFBO0FBd0RaO0FBckRRO0VBQ0ksZ0JBQUE7QUF1RFo7O0FBbERBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFxREo7QUFuREk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQXFEUjs7QUFqREE7RUFDSSx1Q0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtBQW9ESjtBQW5ESTtFQUNJLHFDQUFBO0FBcURSOztBQWhEQTtFQUNJO0lBQ0ksa0JBQUE7RUFtRE47RUFqREU7SUFDSSx1Q0FBQTtFQW1ETjtBQUNGO0FBaERBO0VBQ0k7SUFDSSwwQkFBQTtFQWtETjtFQWhERTtJQUNJLDBCQUFBO0VBa0ROO0FBQ0Y7QUEvQ0E7RUFDSTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VBaUROO0FBQ0Y7QUFDQSxvdlBBQW92UCIsInNvdXJjZXNDb250ZW50IjpbIltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogYmxhY2s7XG4gICAgLS1hY2NlbnQtY29sb3I6ICMwODllZTU7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiAjMDg5ZWU1Njk7XG4gICAgLS10aXRsZS1jb2xvcjogYmxhY2s7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogYmxhY2s7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci1vcGFxdWU6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctaW1nOiB3aGl0ZTtcbiAgICAtLWJvcmRlci1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiBibGFjaztcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogYmxhY2s7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogYmxhY2s7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHdoaXRlO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHdoaXRlO1xuICAgIC0tY3ViZS1mYWNlOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJ1bGxldC1jb2xvcjogYmxhY2s7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbiAgICAtLXNoYWRvdzogMCAwcHggMTBweCAtNXB4IGJsYWNrO1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogI2U2ZjFmZjtcbiAgICAtLWFjY2VudC1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6ICMwODllZTU2OTtcbiAgICAtLXRpdGxlLWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tYnRuLXRleHQtY29sb3I6ICMwODllZTU7XG4gICAgLS1iZy1jb2xvcjogIzBmMGYwZjtcbiAgICAtLWJnLWNvbG9yLW9wYXF1ZTogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJnLWltZzogdXJsKCcuLi9pbWFnZXMvYmFja2dyb3VuZC9jb2RlLnBuZycpIG5vLXJlcGVhdDtcbiAgICAtLWJvcmRlci1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICMwODllZTU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiAjZTZmMWZmO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3ViZS1mYWNlOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiAjZTZmMWZmO1xuICAgIC0tYnVsbGV0LWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICAgIC0tc2hhZG93OiAwIDBweCAxMHB4IC01cHggYmxhY2s7O1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG59XG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCI7XG5cbi5jb250YWluZXIge1xuXG4gICAgLnNlY3Rpb24tYm94LWFib3V0IHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAyMHB4IDNweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tY29kZS1mb250KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyLCBoMyB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaDMge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb2RlLWZvbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFib3V0LWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IG5vcm1hbDtcbiAgICBhbGlnbi1pdGVtczogbm9ybWFsO1xuICAgIGFsaWduLWNvbnRlbnQ6IG5vcm1hbDtcblxuICAgIC5jb2x1bW4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICBmbGV4LXNocmluazogMTtcbiAgICAgICAgZmxleC1iYXNpczogYXV0bztcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICBvcmRlcjogMDtcbiAgICB9XG59XG5cbi5jb2RlLWhpZ2hsaWdodCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29kZS1oaWdobGlnaHQtY29sb3IpO1xuICAgIHBhZGRpbmc6IDAgMHB4IDBweCAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICBjb2xvcjogdmFyKC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcik7XG4gICAgLmJsaW5raW5nLWN1cnNvciB7XG4gICAgICAgIGFuaW1hdGlvbjogMXMgYmxpbmsgc3RlcC1lbmQgaW5maW5pdGU7XG4gICAgfVxuXG59XG5cbkBrZXlmcmFtZXMgYmxpbmsge1xuICAgIGZyb20sIHRvIHtcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICBjb2xvcjogdmFyKC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcik7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAubmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDVweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAucm9sZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhKG1heC13aWR0aDogMTE2MHB4KSB7XG4gICAgLmNvbHVtbi5sb2FkZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXZoO1xuICAgIH1cbn1cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2948:
/*!**************************************************************!*\
  !*** ./src/app/components/home/contact/contact.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 2584);


class ContactComponent {
  static #_ = this.ɵfac = function ContactComponent_Factory(t) {
    return new (t || ContactComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ContactComponent,
    selectors: [["app-contact"]],
    decls: 13,
    vars: 12,
    consts: [[1, "contact-box"], ["data-aos", "fade-up", "data-aos-duration", "500"], [1, "contact-pre-title"], [1, "contact-title"], ["data-aos", "fade-up", "data-aos-delay", "100", "data-aos-duration", "500", 1, "contact-btn"], ["data-aos", "fade-up", "data-aos-duration", "500", "target", "_blank", 1, "main-btn", 3, "href"]],
    template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4)(9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "Contact.Pretitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, "Contact.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 8, "Email"), "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 10, "Contact.Btn"), " ");
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    styles: ["[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: black;\n  --accent-color: #089ee5;\n  --accent-color-opaque: #089ee569;\n  --title-color: black;\n  --btn-text-color: black;\n  --bg-color: white;\n  --bg-color-opaque: transparent;\n  --bg-img: white;\n  --border-color: rgb(0 0 0 / 30%);\n  --border: 1px solid rgb(0 0 0 / 30%);\n  --border-radius: 3px;\n  --scroll-btn-color: black;\n  --scroll-btn-bg-color: rgb(255 255 255 / 30%);\n  --menu-btn-color: black;\n  --code-highlight-color: black;\n  --code-highlight-text-color: white;\n  --btn-bg-color: white;\n  --btn-hover-bg-color: white;\n  --menu-bar-bg-color: rgb(255 255 255 / 30%);\n  --menu-overlay-bg-color: white;\n  --cube-face: rgb(0 0 0 / 60%);\n  --cube-icon-color: white;\n  --bullet-color: black;\n  --divider: \"/\";\n  --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  --cursor-type: pointer;\n  --shadow: 0 0px 10px -5px black;\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: #e6f1ff;\n  --accent-color: #089ee5;\n  --accent-color-opaque: #089ee569;\n  --title-color: #089ee5;\n  --btn-text-color: #089ee5;\n  --bg-color: #0f0f0f;\n  --bg-color-opaque: rgb(0 0 0 / 30%);\n  --bg-img: url('code.png') no-repeat;\n  --border-color: #089ee5;\n  --border: 1px solid #089ee5;\n  --border-radius: 3px;\n  --scroll-btn-color: #089ee5;\n  --scroll-btn-bg-color: rgb(0 0 0 / 30%);\n  --menu-btn-color: #089ee5;\n  --code-highlight-color: rgb(0 0 0 / 30%);\n  --code-highlight-text-color: #e6f1ff;\n  --btn-bg-color: transparent;\n  --btn-hover-bg-color: rgb(0 0 0 / 30%);\n  --menu-bar-bg-color: rgb(0 0 0 / 30%);\n  --menu-overlay-bg-color: rgb(0 0 0 / 60%);\n  --cube-face: rgb(0 0 0 / 30%);\n  --cube-icon-color: #e6f1ff;\n  --bullet-color: #089ee5;\n  --divider: \"/\";\n  --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  --shadow: 0 0px 10px -5px black;\n  --cursor-type: pointer;\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n}\n\n.contact-box[_ngcontent-%COMP%] {\n  margin: 20vh auto 30vh;\n}\n.contact-box[_ngcontent-%COMP%]   .contact-title[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  font-size: 50px;\n  font-weight: 600;\n  color: var(--primary-color);\n  margin: auto;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.contact-box[_ngcontent-%COMP%]   .contact-pre-title[_ngcontent-%COMP%] {\n  position: relative;\n  align-items: center;\n  margin: 10px 0 25px;\n  width: 100%;\n  white-space: nowrap;\n  display: block;\n  color: var(--title-color);\n  font-size: 16px;\n  font-family: var(--primary-font);\n  font-weight: normal;\n  justify-content: center;\n  text-align: center;\n}\n\n.contact-btn[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIiwiY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkNBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkNBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSw0REFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwRUFBQTtFQUNBLHlGQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDREQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBFQUFBO0VBQ0EseUZBQUE7QUNDSjs7QUE1REE7RUFDSSxzQkFBQTtBQStESjtBQTdESTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0FBK0RSO0FBNURJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBOERSOztBQTFEQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUE2REoiLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogYmxhY2s7XG4gICAgLS1hY2NlbnQtY29sb3I6ICMwODllZTU7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiAjMDg5ZWU1Njk7XG4gICAgLS10aXRsZS1jb2xvcjogYmxhY2s7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogYmxhY2s7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci1vcGFxdWU6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctaW1nOiB3aGl0ZTtcbiAgICAtLWJvcmRlci1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiBibGFjaztcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogYmxhY2s7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogYmxhY2s7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHdoaXRlO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHdoaXRlO1xuICAgIC0tY3ViZS1mYWNlOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJ1bGxldC1jb2xvcjogYmxhY2s7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbiAgICAtLXNoYWRvdzogMCAwcHggMTBweCAtNXB4IGJsYWNrO1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogI2U2ZjFmZjtcbiAgICAtLWFjY2VudC1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6ICMwODllZTU2OTtcbiAgICAtLXRpdGxlLWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tYnRuLXRleHQtY29sb3I6ICMwODllZTU7XG4gICAgLS1iZy1jb2xvcjogIzBmMGYwZjtcbiAgICAtLWJnLWNvbG9yLW9wYXF1ZTogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJnLWltZzogdXJsKCcuLi9pbWFnZXMvYmFja2dyb3VuZC9jb2RlLnBuZycpIG5vLXJlcGVhdDtcbiAgICAtLWJvcmRlci1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICMwODllZTU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiAjZTZmMWZmO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3ViZS1mYWNlOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiAjZTZmMWZmO1xuICAgIC0tYnVsbGV0LWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICAgIC0tc2hhZG93OiAwIDBweCAxMHB4IC01cHggYmxhY2s7O1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG59XG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCI7XG5cbi5jb250YWN0LWJveCB7XG4gICAgbWFyZ2luOiAyMHZoIGF1dG8gMzB2aDtcblxuICAgIC5jb250YWN0LXRpdGxlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgfVxuXG4gICAgLmNvbnRhY3QtcHJlLXRpdGxlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDEwcHggMCAyNXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG4uY29udGFjdC1idG4ge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkNBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkNBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSw0REFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwRUFBQTtFQUNBLHlGQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDREQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBFQUFBO0VBQ0EseUZBQUE7QUNDSjs7QUE1REE7RUFDSSxzQkFBQTtBQStESjtBQTdESTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0FBK0RSO0FBNURJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBOERSOztBQTFEQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUE2REo7QUFFQSxvdUxBQW91TCIsInNvdXJjZXNDb250ZW50IjpbIltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogYmxhY2s7XG4gICAgLS1hY2NlbnQtY29sb3I6ICMwODllZTU7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiAjMDg5ZWU1Njk7XG4gICAgLS10aXRsZS1jb2xvcjogYmxhY2s7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogYmxhY2s7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci1vcGFxdWU6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctaW1nOiB3aGl0ZTtcbiAgICAtLWJvcmRlci1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiBibGFjaztcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogYmxhY2s7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogYmxhY2s7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHdoaXRlO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHdoaXRlO1xuICAgIC0tY3ViZS1mYWNlOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJ1bGxldC1jb2xvcjogYmxhY2s7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbiAgICAtLXNoYWRvdzogMCAwcHggMTBweCAtNXB4IGJsYWNrO1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogI2U2ZjFmZjtcbiAgICAtLWFjY2VudC1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6ICMwODllZTU2OTtcbiAgICAtLXRpdGxlLWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tYnRuLXRleHQtY29sb3I6ICMwODllZTU7XG4gICAgLS1iZy1jb2xvcjogIzBmMGYwZjtcbiAgICAtLWJnLWNvbG9yLW9wYXF1ZTogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJnLWltZzogdXJsKCcuLi9pbWFnZXMvYmFja2dyb3VuZC9jb2RlLnBuZycpIG5vLXJlcGVhdDtcbiAgICAtLWJvcmRlci1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICMwODllZTU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiAjZTZmMWZmO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3ViZS1mYWNlOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiAjZTZmMWZmO1xuICAgIC0tYnVsbGV0LWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICAgIC0tc2hhZG93OiAwIDBweCAxMHB4IC01cHggYmxhY2s7O1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG59XG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCI7XG5cbi5jb250YWN0LWJveCB7XG4gICAgbWFyZ2luOiAyMHZoIGF1dG8gMzB2aDtcblxuICAgIC5jb250YWN0LXRpdGxlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgfVxuXG4gICAgLmNvbnRhY3QtcHJlLXRpdGxlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDEwcHggMCAyNXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG4uY29udGFjdC1idG4ge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5884:
/*!********************************************************************!*\
  !*** ./src/app/components/home/experience/experience.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExperienceComponent: () => (/* binding */ ExperienceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 2584);



function ExperienceComponent_li_8_li_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    const jobDescriptionParagraph_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, jobDescriptionParagraph_r5), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function ExperienceComponent_li_8_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const technology_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](technology_r7);
  }
}
function ExperienceComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExperienceComponent_li_8_li_11_Template, 2, 3, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ExperienceComponent_li_8_span_13_Template, 3, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", item_r1.Tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-aos-delay", i_r2 * 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.Tab, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", item_r1.Tab)("src", item_r1.Logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.Location, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.Date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.Environment);
  }
}
class ExperienceComponent {
  static #_ = this.ɵfac = function ExperienceComponent_Factory(t) {
    return new (t || ExperienceComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ExperienceComponent,
    selectors: [["app-experience"]],
    decls: 10,
    vars: 6,
    consts: [[1, "container"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "title", "mb-5"], [1, "e-font", "section-title"], [1, "jobs"], ["class", "job", "data-aos", "fade-up", "data-aos-duration", "500", 3, "title", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "job", 3, "title"], ["data-aos", "zoom-out", "data-aos-duration", "500", 1, "job-logo", 3, "alt", "src"], [1, "job-location"], [1, "job-time"], [1, "job-descriptions"], ["class", "job-description bullet", 3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "job-environment"], ["class", "technology", 4, "ngFor", "ngForOf"], [1, "job-description", "bullet", 3, "innerHTML"], [1, "technology"], [1, "highlight"]],
    template: function ExperienceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExperienceComponent_li_8_Template, 14, 10, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, "Experience.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, "Experience.Items"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    styles: ["[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: black;\n  --accent-color: #089ee5;\n  --accent-color-opaque: #089ee569;\n  --title-color: black;\n  --btn-text-color: black;\n  --bg-color: white;\n  --bg-color-opaque: transparent;\n  --bg-img: white;\n  --border-color: rgb(0 0 0 / 30%);\n  --border: 1px solid rgb(0 0 0 / 30%);\n  --border-radius: 3px;\n  --scroll-btn-color: black;\n  --scroll-btn-bg-color: rgb(255 255 255 / 30%);\n  --menu-btn-color: black;\n  --code-highlight-color: black;\n  --code-highlight-text-color: white;\n  --btn-bg-color: white;\n  --btn-hover-bg-color: white;\n  --menu-bar-bg-color: rgb(255 255 255 / 30%);\n  --menu-overlay-bg-color: white;\n  --cube-face: rgb(0 0 0 / 60%);\n  --cube-icon-color: white;\n  --bullet-color: black;\n  --divider: \"/\";\n  --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  --cursor-type: pointer;\n  --shadow: 0 0px 10px -5px black;\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: #e6f1ff;\n  --accent-color: #089ee5;\n  --accent-color-opaque: #089ee569;\n  --title-color: #089ee5;\n  --btn-text-color: #089ee5;\n  --bg-color: #0f0f0f;\n  --bg-color-opaque: rgb(0 0 0 / 30%);\n  --bg-img: url('code.png') no-repeat;\n  --border-color: #089ee5;\n  --border: 1px solid #089ee5;\n  --border-radius: 3px;\n  --scroll-btn-color: #089ee5;\n  --scroll-btn-bg-color: rgb(0 0 0 / 30%);\n  --menu-btn-color: #089ee5;\n  --code-highlight-color: rgb(0 0 0 / 30%);\n  --code-highlight-text-color: #e6f1ff;\n  --btn-bg-color: transparent;\n  --btn-hover-bg-color: rgb(0 0 0 / 30%);\n  --menu-bar-bg-color: rgb(0 0 0 / 30%);\n  --menu-overlay-bg-color: rgb(0 0 0 / 60%);\n  --cube-face: rgb(0 0 0 / 30%);\n  --cube-icon-color: #e6f1ff;\n  --bullet-color: #089ee5;\n  --divider: \"/\";\n  --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  --shadow: 0 0px 10px -5px black;\n  --cursor-type: pointer;\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n}\n\n.job[_ngcontent-%COMP%] {\n  background-color: var(--bg-color-opaque);\n  transition: var(--transition);\n  border: var(--border);\n  border-radius: var(--border-radius);\n  box-shadow: var(--shadow);\n  padding: 25px;\n  margin-bottom: 25px;\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  opacity: 0.9;\n}\n.job[_ngcontent-%COMP%]:after {\n  background: none repeat scroll 0 0 transparent;\n  bottom: 0px;\n  content: \"\";\n  display: block;\n  height: 3px;\n  left: 0%;\n  position: absolute;\n  background: var(--accent-color);\n  transition: width 0.3s ease 0s, left 0.3s ease 0s;\n  width: 0;\n}\n.job[_ngcontent-%COMP%]:hover:after {\n  width: 100%;\n  left: 0;\n}\n.job[_ngcontent-%COMP%]   .job-time[_ngcontent-%COMP%] {\n  color: var(--accent-color);\n  margin-bottom: 30px;\n}\n.job[_ngcontent-%COMP%]   .job-descriptions[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.job[_ngcontent-%COMP%]   .job-descriptions[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 14px;\n}\n.job[_ngcontent-%COMP%]   .job-location[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.job[_ngcontent-%COMP%]   .job-logo[_ngcontent-%COMP%] {\n  margin-bottom: -5px;\n  margin-left: 5px;\n  height: 25px;\n}\n.job[_ngcontent-%COMP%]   .job-environment[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.job[_ngcontent-%COMP%]   .job-environment[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--primary-color);\n  line-height: 1.75;\n  font-family: var(--code-font);\n}\n.job[_ngcontent-%COMP%]   .job-environment[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  padding-bottom: 3.5px;\n}\n.job[_ngcontent-%COMP%]   .job-environment[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%]:after {\n  content: var(--divider);\n  color: var(--primary-color);\n  font-weight: 600;\n  opacity: 0.7;\n  margin: 5px;\n}\n.job[_ngcontent-%COMP%]   .job-environment[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIiwiZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkNBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkNBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSw0REFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwRUFBQTtFQUNBLHlGQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDREQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBFQUFBO0VBQ0EseUZBQUE7QUNDSjs7QUE1REE7RUFDSSx3Q0FBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLFlBQUE7QUErREo7QUE3REk7RUFDSSw4Q0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGlEQUFBO0VBQ0EsUUFBQTtBQStEUjtBQTVESTtFQUNJLFdBQUE7RUFDQSxPQUFBO0FBOERSO0FBM0RJO0VBQ0ksMEJBQUE7RUFDQSxtQkFBQTtBQTZEUjtBQTFESTtFQUNJLG1CQUFBO0FBNERSO0FBM0RRO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FBNkRaO0FBekRJO0VBQ0ksbUJBQUE7QUEyRFI7QUF4REk7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQTBEUjtBQXZESTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtBQXlEUjtBQXZEUTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUF5RFo7QUF2RFk7RUFDSSxxQkFBQTtBQXlEaEI7QUF0RFk7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQXdEaEI7QUFyRFk7RUFDSSxXQUFBO0FBdURoQiIsImZpbGUiOiJleHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiBibGFjaztcbiAgICAtLWFjY2VudC1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6ICMwODllZTU2OTtcbiAgICAtLXRpdGxlLWNvbG9yOiBibGFjaztcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiBibGFjaztcbiAgICAtLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJnLWNvbG9yLW9wYXF1ZTogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1pbWc6IHdoaXRlO1xuICAgIC0tYm9yZGVyLWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IGJsYWNrO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiBibGFjaztcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiBibGFjaztcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHdoaXRlO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1jdWJlLWZhY2U6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHdoaXRlO1xuICAgIC0tYnVsbGV0LWNvbG9yOiBibGFjaztcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xuICAgIC0tc2hhZG93OiAwIDBweCAxMHB4IC01cHggYmxhY2s7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG59XG5cbltkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjZTZmMWZmO1xuICAgIC0tYWNjZW50LWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogIzA4OWVlNTY5O1xuICAgIC0tdGl0bGUtY29sb3I6ICMwODllZTU7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWJnLWNvbG9yOiAjMGYwZjBmO1xuICAgIC0tYmctY29sb3Itb3BhcXVlOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYmctaW1nOiB1cmwoJy4uL2ltYWdlcy9iYWNrZ3JvdW5kL2NvZGUucG5nJykgbm8tcmVwZWF0O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIzA4OWVlNTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6ICMwODllZTU7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tbWVudS1idG4tY29sb3I6ICMwODllZTU7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6ICNlNmYxZmY7XG4gICAgLS1idG4tYmctY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdWJlLWZhY2U6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6ICNlNmYxZmY7XG4gICAgLS1idWxsZXQtY29sb3I6ICMwODllZTU7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gICAgLS1zaGFkb3c6IDAgMHB4IDEwcHggLTVweCBibGFjazs7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIjtcblxuLmpvYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3Itb3BhcXVlKTtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgb3BhY2l0eTogMC45O1xuXG4gICAgJjphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICAgIGxlZnQ6IDAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZSAwcywgbGVmdCAwLjNzIGVhc2UgMHM7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgIH1cblxuICAgICY6aG92ZXI6YWZ0ZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG5cbiAgICAuam9iLXRpbWUge1xuICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG5cbiAgICAuam9iLWRlc2NyaXB0aW9ucyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIC5qb2ItZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5qb2ItbG9jYXRpb24ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIC5qb2ItbG9nbyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC01cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICB9XG5cbiAgICAuam9iLWVudmlyb25tZW50IHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAudGVjaG5vbG9neSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS43NTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb2RlLWZvbnQpO1xuXG4gICAgICAgICAgICAuaGlnaGxpZ2h0IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMy41cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6dmFyKC0tZGl2aWRlcik7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZDphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkNBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkNBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSw0REFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwRUFBQTtFQUNBLHlGQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDREQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBFQUFBO0VBQ0EseUZBQUE7QUNDSjs7QUE1REE7RUFDSSx3Q0FBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLFlBQUE7QUErREo7QUE3REk7RUFDSSw4Q0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGlEQUFBO0VBQ0EsUUFBQTtBQStEUjtBQTVESTtFQUNJLFdBQUE7RUFDQSxPQUFBO0FBOERSO0FBM0RJO0VBQ0ksMEJBQUE7RUFDQSxtQkFBQTtBQTZEUjtBQTFESTtFQUNJLG1CQUFBO0FBNERSO0FBM0RRO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FBNkRaO0FBekRJO0VBQ0ksbUJBQUE7QUEyRFI7QUF4REk7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQTBEUjtBQXZESTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtBQXlEUjtBQXZEUTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUF5RFo7QUF2RFk7RUFDSSxxQkFBQTtBQXlEaEI7QUF0RFk7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQXdEaEI7QUFyRFk7RUFDSSxXQUFBO0FBdURoQjtBQUVBLHc2T0FBdzZPIiwic291cmNlc0NvbnRlbnQiOlsiW2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiBibGFjaztcbiAgICAtLWFjY2VudC1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6ICMwODllZTU2OTtcbiAgICAtLXRpdGxlLWNvbG9yOiBibGFjaztcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiBibGFjaztcbiAgICAtLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJnLWNvbG9yLW9wYXF1ZTogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1pbWc6IHdoaXRlO1xuICAgIC0tYm9yZGVyLWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IGJsYWNrO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiBibGFjaztcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiBibGFjaztcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHdoaXRlO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1jdWJlLWZhY2U6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHdoaXRlO1xuICAgIC0tYnVsbGV0LWNvbG9yOiBibGFjaztcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xuICAgIC0tc2hhZG93OiAwIDBweCAxMHB4IC01cHggYmxhY2s7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG59XG5cbltkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjZTZmMWZmO1xuICAgIC0tYWNjZW50LWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogIzA4OWVlNTY5O1xuICAgIC0tdGl0bGUtY29sb3I6ICMwODllZTU7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWJnLWNvbG9yOiAjMGYwZjBmO1xuICAgIC0tYmctY29sb3Itb3BhcXVlOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYmctaW1nOiB1cmwoJy4uL2ltYWdlcy9iYWNrZ3JvdW5kL2NvZGUucG5nJykgbm8tcmVwZWF0O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIzA4OWVlNTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6ICMwODllZTU7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tbWVudS1idG4tY29sb3I6ICMwODllZTU7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6ICNlNmYxZmY7XG4gICAgLS1idG4tYmctY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdWJlLWZhY2U6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6ICNlNmYxZmY7XG4gICAgLS1idWxsZXQtY29sb3I6ICMwODllZTU7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gICAgLS1zaGFkb3c6IDAgMHB4IDEwcHggLTVweCBibGFjazs7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIjtcblxuLmpvYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3Itb3BhcXVlKTtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgb3BhY2l0eTogMC45O1xuXG4gICAgJjphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICAgIGxlZnQ6IDAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZSAwcywgbGVmdCAwLjNzIGVhc2UgMHM7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgIH1cblxuICAgICY6aG92ZXI6YWZ0ZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG5cbiAgICAuam9iLXRpbWUge1xuICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG5cbiAgICAuam9iLWRlc2NyaXB0aW9ucyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIC5qb2ItZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5qb2ItbG9jYXRpb24ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIC5qb2ItbG9nbyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC01cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICB9XG5cbiAgICAuam9iLWVudmlyb25tZW50IHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAudGVjaG5vbG9neSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS43NTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb2RlLWZvbnQpO1xuXG4gICAgICAgICAgICAuaGlnaGxpZ2h0IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMy41cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6dmFyKC0tZGl2aWRlcik7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZDphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7708:
/*!********************************************************************!*\
  !*** ./src/app/components/home/highlights/highlights.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HighlightsComponent: () => (/* binding */ HighlightsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 2584);



function HighlightsComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 8);
  }
  if (rf & 2) {
    const text_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", text_r2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function HighlightsComponent_div_12_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12)(1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-aos-delay", i_r6 * 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r5);
  }
}
function HighlightsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HighlightsComponent_div_12_span_4_Template, 3, 2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r3.Category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", skill_r3.Elements);
  }
}
class HighlightsComponent {
  static #_ = this.ɵfac = function HighlightsComponent_Factory(t) {
    return new (t || HighlightsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HighlightsComponent,
    selectors: [["app-highlights"]],
    decls: 14,
    vars: 9,
    consts: [[1, "container"], [1, "section-box"], ["data-aos", "fade-up", 1, "title"], [1, "section-title"], [1, "description"], ["data-aos", "fade-up", 1, "qualifications-list"], ["class", "qualifications-element bullet", "data-aos", "fade-up", "data-aos-duration", "500", 3, "innerHTML", 4, "ngFor", "ngForOf"], ["class", "skills", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "qualifications-element", "bullet", 3, "innerHTML"], [1, "skills"], ["data-aos", "fade-up"], ["class", "skill-element", "data-aos", "zoom-out", "data-aos-duration", "500", 4, "ngFor", "ngForOf"], ["data-aos", "zoom-out", "data-aos-duration", "500", 1, "skill-element"], [1, "highlight"]],
    template: function HighlightsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div")(8, "div", 4)(9, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HighlightsComponent_li_10_Template, 1, 1, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HighlightsComponent_div_12_Template, 5, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, "Highlights.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 5, "Highlights.Qualifications"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 7, "Highlights.Skills"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    styles: ["[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: black;\n  --accent-color: #089ee5;\n  --accent-color-opaque: #089ee569;\n  --title-color: black;\n  --btn-text-color: black;\n  --bg-color: white;\n  --bg-color-opaque: transparent;\n  --bg-img: white;\n  --border-color: rgb(0 0 0 / 30%);\n  --border: 1px solid rgb(0 0 0 / 30%);\n  --border-radius: 3px;\n  --scroll-btn-color: black;\n  --scroll-btn-bg-color: rgb(255 255 255 / 30%);\n  --menu-btn-color: black;\n  --code-highlight-color: black;\n  --code-highlight-text-color: white;\n  --btn-bg-color: white;\n  --btn-hover-bg-color: white;\n  --menu-bar-bg-color: rgb(255 255 255 / 30%);\n  --menu-overlay-bg-color: white;\n  --cube-face: rgb(0 0 0 / 60%);\n  --cube-icon-color: white;\n  --bullet-color: black;\n  --divider: \"/\";\n  --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  --cursor-type: pointer;\n  --shadow: 0 0px 10px -5px black;\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: #e6f1ff;\n  --accent-color: #089ee5;\n  --accent-color-opaque: #089ee569;\n  --title-color: #089ee5;\n  --btn-text-color: #089ee5;\n  --bg-color: #0f0f0f;\n  --bg-color-opaque: rgb(0 0 0 / 30%);\n  --bg-img: url('code.png') no-repeat;\n  --border-color: #089ee5;\n  --border: 1px solid #089ee5;\n  --border-radius: 3px;\n  --scroll-btn-color: #089ee5;\n  --scroll-btn-bg-color: rgb(0 0 0 / 30%);\n  --menu-btn-color: #089ee5;\n  --code-highlight-color: rgb(0 0 0 / 30%);\n  --code-highlight-text-color: #e6f1ff;\n  --btn-bg-color: transparent;\n  --btn-hover-bg-color: rgb(0 0 0 / 30%);\n  --menu-bar-bg-color: rgb(0 0 0 / 30%);\n  --menu-overlay-bg-color: rgb(0 0 0 / 60%);\n  --cube-face: rgb(0 0 0 / 30%);\n  --cube-icon-color: #e6f1ff;\n  --bullet-color: #089ee5;\n  --divider: \"/\";\n  --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  --shadow: 0 0px 10px -5px black;\n  --cursor-type: pointer;\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n}\n\n.description[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.qualifications-list[_ngcontent-%COMP%] {\n  padding: 0;\n  margin-bottom: 50px;\n}\n.qualifications-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n\n.skills[_ngcontent-%COMP%] {\n  margin: 15px 0px;\n}\n.skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 12px;\n  color: var(--accent-color);\n  font-family: var(--code-font);\n}\n.skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]:after {\n  content: var(--divider);\n  color: var(--primary-color);\n  font-weight: 600;\n  opacity: 0.7;\n  margin: 5px;\n}\n.skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n.skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIiwiaGlnaGxpZ2h0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkNBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkNBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSw0REFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwRUFBQTtFQUNBLHlGQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDREQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBFQUFBO0VBQ0EseUZBQUE7QUNDSjs7QUE1REE7RUFDSSxnQkFBQTtBQStESjs7QUE1REE7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7QUErREo7QUE3REk7RUFDSSxjQUFBO0FBK0RSOztBQTNEQTtFQUNJLGdCQUFBO0FBOERKO0FBNURJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQThEUjtBQTVEUTtFQUNJLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBOERaO0FBM0RRO0VBQ0ksV0FBQTtBQTZEWjtBQTFEUTtFQUNJLG1CQUFBO0FBNERaIiwiZmlsZSI6ImhpZ2hsaWdodHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJbZGF0YS10aGVtZT1cImxpZ2h0XCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IGJsYWNrO1xuICAgIC0tYWNjZW50LWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogIzA4OWVlNTY5O1xuICAgIC0tdGl0bGUtY29sb3I6IGJsYWNrO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IGJsYWNrO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3Itb3BhcXVlOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWltZzogd2hpdGU7XG4gICAgLS1ib3JkZXItY29sb3I6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogYmxhY2s7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyAzMCUpO1xuICAgIC0tbWVudS1idG4tY29sb3I6IGJsYWNrO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IGJsYWNrO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogd2hpdGU7XG4gICAgLS1idG4tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyAzMCUpO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWN1YmUtZmFjZTogcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogd2hpdGU7XG4gICAgLS1idWxsZXQtY29sb3I6IGJsYWNrO1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG4gICAgLS1zaGFkb3c6IDAgMHB4IDEwcHggLTVweCBibGFjaztcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6ICNlNmYxZmY7XG4gICAgLS1hY2NlbnQtY29sb3I6ICMwODllZTU7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiAjMDg5ZWU1Njk7XG4gICAgLS10aXRsZS1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tYmctY29sb3I6ICMwZjBmMGY7XG4gICAgLS1iZy1jb2xvci1vcGFxdWU6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1iZy1pbWc6IHVybCgnLi4vaW1hZ2VzL2JhY2tncm91bmQvY29kZS5wbmcnKSBuby1yZXBlYXQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICMwODllZTU7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAjMDg5ZWU1O1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogIzA4OWVlNTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogI2U2ZjFmZjtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1YmUtZmFjZTogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogI2U2ZjFmZjtcbiAgICAtLWJ1bGxldC1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgICAtLXNoYWRvdzogMCAwcHggMTBweCAtNXB4IGJsYWNrOztcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xufVxuIiwiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3RoZW1lc1wiO1xuXG4uZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5xdWFsaWZpY2F0aW9ucy1saXN0IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG5cbiAgICBsaSB7XG4gICAgICAgIG1hcmdpbjogMTVweCAwO1xuICAgIH1cbn1cblxuLnNraWxscyB7XG4gICAgbWFyZ2luOiAxNXB4IDBweDtcblxuICAgIC5za2lsbC1lbGVtZW50IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tY29kZS1mb250KTtcblxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IHZhcigtLWRpdmlkZXIpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hpZ2hsaWdodHMvaGlnaGxpZ2h0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkNBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkNBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSw0REFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwRUFBQTtFQUNBLHlGQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDREQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBFQUFBO0VBQ0EseUZBQUE7QUNDSjs7QUE1REE7RUFDSSxnQkFBQTtBQStESjs7QUE1REE7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7QUErREo7QUE3REk7RUFDSSxjQUFBO0FBK0RSOztBQTNEQTtFQUNJLGdCQUFBO0FBOERKO0FBNURJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQThEUjtBQTVEUTtFQUNJLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBOERaO0FBM0RRO0VBQ0ksV0FBQTtBQTZEWjtBQTFEUTtFQUNJLG1CQUFBO0FBNERaO0FBQ0Esd2hMQUF3aEwiLCJzb3VyY2VzQ29udGVudCI6WyJbZGF0YS10aGVtZT1cImxpZ2h0XCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IGJsYWNrO1xuICAgIC0tYWNjZW50LWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogIzA4OWVlNTY5O1xuICAgIC0tdGl0bGUtY29sb3I6IGJsYWNrO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IGJsYWNrO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3Itb3BhcXVlOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWltZzogd2hpdGU7XG4gICAgLS1ib3JkZXItY29sb3I6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogYmxhY2s7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyAzMCUpO1xuICAgIC0tbWVudS1idG4tY29sb3I6IGJsYWNrO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IGJsYWNrO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogd2hpdGU7XG4gICAgLS1idG4tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyAzMCUpO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWN1YmUtZmFjZTogcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogd2hpdGU7XG4gICAgLS1idWxsZXQtY29sb3I6IGJsYWNrO1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG4gICAgLS1zaGFkb3c6IDAgMHB4IDEwcHggLTVweCBibGFjaztcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6ICNlNmYxZmY7XG4gICAgLS1hY2NlbnQtY29sb3I6ICMwODllZTU7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiAjMDg5ZWU1Njk7XG4gICAgLS10aXRsZS1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tYmctY29sb3I6ICMwZjBmMGY7XG4gICAgLS1iZy1jb2xvci1vcGFxdWU6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1iZy1pbWc6IHVybCgnLi4vaW1hZ2VzL2JhY2tncm91bmQvY29kZS5wbmcnKSBuby1yZXBlYXQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICMwODllZTU7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAjMDg5ZWU1O1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogIzA4OWVlNTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogI2U2ZjFmZjtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1YmUtZmFjZTogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogI2U2ZjFmZjtcbiAgICAtLWJ1bGxldC1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgICAtLXNoYWRvdzogMCAwcHggMTBweCAtNXB4IGJsYWNrOztcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xufVxuIiwiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3RoZW1lc1wiO1xuXG4uZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5xdWFsaWZpY2F0aW9ucy1saXN0IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG5cbiAgICBsaSB7XG4gICAgICAgIG1hcmdpbjogMTVweCAwO1xuICAgIH1cbn1cblxuLnNraWxscyB7XG4gICAgbWFyZ2luOiAxNXB4IDBweDtcblxuICAgIC5za2lsbC1lbGVtZW50IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tY29kZS1mb250KTtcblxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IHZhcigtLWRpdmlkZXIpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4044:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about/about.component */ 1412);
/* harmony import */ var _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highlights/highlights.component */ 7708);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./experience/experience.component */ 5884);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects/projects.component */ 6520);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ 2948);






class HomeComponent {
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 5,
    vars: 0,
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-about")(1, "app-highlights")(2, "app-experience")(3, "app-projects")(4, "app-contact");
      }
    },
    dependencies: [_about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent, _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_1__.HighlightsComponent, _experience_experience_component__WEBPACK_IMPORTED_MODULE_2__.ExperienceComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__.ProjectsComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__.ContactComponent],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdLQUFnSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7376:
/*!************************************************!*\
  !*** ./src/app/components/home/home.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeModule: () => (/* binding */ HomeModule),
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 4044);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 2584);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 1332);
/* harmony import */ var _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highlights/highlights.component */ 7708);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.component */ 2948);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects/projects.component */ 6520);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ 5531);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experience/experience.component */ 5884);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ 1412);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loader/loader.component */ 7308);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4280);













function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class HomeModule {
  static #_ = this.ɵfac = function HomeModule_Factory(t) {
    return new (t || HomeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: HomeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule.forChild({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient]
      }
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_5__.AboutComponent, _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_1__.HighlightsComponent, _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__.ExperienceComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__.ProjectsComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__.ContactComponent, _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__.LoaderComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule]
  });
})();

/***/ }),

/***/ 7308:
/*!************************************************************!*\
  !*** ./src/app/components/home/loader/loader.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderComponent: () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);

class LoaderComponent {
  static #_ = this.ɵfac = function LoaderComponent_Factory(t) {
    return new (t || LoaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LoaderComponent,
    selectors: [["app-loader"]],
    decls: 12,
    vars: 0,
    consts: [[1, "cube-loader"], [1, "cube-face", "cube-face-front", "profile"], [1, "cube-face", "cube-face-back"], [1, "fab", "fa-npm"], [1, "cube-face", "cube-face-left"], [1, "fab", "fa-docker"], [1, "cube-face", "cube-face-right"], [1, "fab", "fa-angular"], [1, "cube-face", "cube-face-bottom"], [1, "fab", "fa-github"], [1, "cube-face", "cube-face-top"], [1, "fab", "fa-java"]],
    template: function LoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: ["[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: black;\n  --accent-color: #089ee5;\n  --accent-color-opaque: #089ee569;\n  --title-color: black;\n  --btn-text-color: black;\n  --bg-color: white;\n  --bg-color-opaque: transparent;\n  --bg-img: white;\n  --border-color: rgb(0 0 0 / 30%);\n  --border: 1px solid rgb(0 0 0 / 30%);\n  --border-radius: 3px;\n  --scroll-btn-color: black;\n  --scroll-btn-bg-color: rgb(255 255 255 / 30%);\n  --menu-btn-color: black;\n  --code-highlight-color: black;\n  --code-highlight-text-color: white;\n  --btn-bg-color: white;\n  --btn-hover-bg-color: white;\n  --menu-bar-bg-color: rgb(255 255 255 / 30%);\n  --menu-overlay-bg-color: white;\n  --cube-face: rgb(0 0 0 / 60%);\n  --cube-icon-color: white;\n  --bullet-color: black;\n  --divider: \"/\";\n  --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  --cursor-type: pointer;\n  --shadow: 0 0px 10px -5px black;\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: #e6f1ff;\n  --accent-color: #089ee5;\n  --accent-color-opaque: #089ee569;\n  --title-color: #089ee5;\n  --btn-text-color: #089ee5;\n  --bg-color: #0f0f0f;\n  --bg-color-opaque: rgb(0 0 0 / 30%);\n  --bg-img: url('code.png') no-repeat;\n  --border-color: #089ee5;\n  --border: 1px solid #089ee5;\n  --border-radius: 3px;\n  --scroll-btn-color: #089ee5;\n  --scroll-btn-bg-color: rgb(0 0 0 / 30%);\n  --menu-btn-color: #089ee5;\n  --code-highlight-color: rgb(0 0 0 / 30%);\n  --code-highlight-text-color: #e6f1ff;\n  --btn-bg-color: transparent;\n  --btn-hover-bg-color: rgb(0 0 0 / 30%);\n  --menu-bar-bg-color: rgb(0 0 0 / 30%);\n  --menu-overlay-bg-color: rgb(0 0 0 / 60%);\n  --cube-face: rgb(0 0 0 / 30%);\n  --cube-icon-color: #e6f1ff;\n  --bullet-color: #089ee5;\n  --divider: \"/\";\n  --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  --shadow: 0 0px 10px -5px black;\n  --cursor-type: pointer;\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n}\n\n.cube-loader[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  line-height: 150px;\n  text-align: center;\n  font-size: 50px;\n  transform-style: preserve-3d;\n  transition: transform 0.5s 0.1s;\n  perspective: 9999px;\n  color: #333;\n  margin: -50px 0 0 -50px;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  animation: _ngcontent-%COMP%_spin 5s infinite forwards;\n}\n.cube-loader[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  background-image: url('profile-small.png') !important;\n  filter: grayscale(1);\n  transform-origin: center;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 2px 1px var(--accent-color-opaque), 0 0 1px 1px var(--accent-color-opaque);\n  width: inherit;\n  height: inherit;\n  position: absolute;\n  background-color: var(--cube-face);\n  color: var(--cube-icon-color);\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face-front[_ngcontent-%COMP%] {\n  transform: translate3d(0, 0, 75px);\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face-back[_ngcontent-%COMP%] {\n  transform: rotateY(180deg) translate3d(0, 0, 75px);\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face-left[_ngcontent-%COMP%] {\n  transform: rotateY(-90deg) translate3d(0, 0, 75px);\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face-right[_ngcontent-%COMP%] {\n  transform: rotateY(90deg) translate3d(0, 0, 75px);\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face-top[_ngcontent-%COMP%] {\n  transform: rotateX(90deg) translate3d(0, 0, 75px);\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face-bottom[_ngcontent-%COMP%] {\n  transform: rotateX(-90deg) translate3d(0, 0, 75px);\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotateY(0deg) rotateZ(0deg);\n  }\n  15% {\n    transform: rotateY(90deg) rotateZ(0deg);\n  }\n  30% {\n    transform: rotateX(45deg) rotateZ(45deg);\n  }\n  45% {\n    transform: rotateX(90deg) rotateY(180deg) rotateX(90deg);\n  }\n  60% {\n    transform: rotateX(310deg) rotateZ(230deg);\n  }\n  75% {\n    transform: rotateX(360deg) rotateZ(360deg);\n  }\n  100% {\n    transform: rotateX(360deg) rotateZ(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIiwibG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSw2Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLDREQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtFQUNBLDBFQUFBO0VBQ0EseUZBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLHVDQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsNERBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEVBQUE7RUFDQSx5RkFBQTtBQ0NKOztBQTFEQTtFQUNJLFlBSE87RUFJUCxhQUpPO0VBS1Asa0JBTE87RUFNUCxrQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esb0NBQUE7QUE2REo7QUEzREk7RUFDSSxxREFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBNkRSO0FBMURJO0VBQ0ksZ0dBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSw2QkFBQTtBQTREUjtBQXpESTtFQUNJLGtDQUFBO0FBMkRSO0FBeERJO0VBQ0ksa0RBQUE7QUEwRFI7QUF2REk7RUFDSSxrREFBQTtBQXlEUjtBQXRESTtFQUNJLGlEQUFBO0FBd0RSO0FBckRJO0VBQ0ksaURBQUE7QUF1RFI7QUFwREk7RUFDSSxrREFBQTtBQXNEUjs7QUFsREE7RUFDSTtJQUNJLHNDQUFBO0VBcUROO0VBbERFO0lBQ0ksdUNBQUE7RUFvRE47RUFqREU7SUFDSSx3Q0FBQTtFQW1ETjtFQWhERTtJQUNJLHdEQUFBO0VBa0ROO0VBL0NFO0lBQ0ksMENBQUE7RUFpRE47RUE5Q0U7SUFDSSwwQ0FBQTtFQWdETjtFQTdDRTtJQUNJLDBDQUFBO0VBK0NOO0FBQ0YiLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiBibGFjaztcbiAgICAtLWFjY2VudC1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6ICMwODllZTU2OTtcbiAgICAtLXRpdGxlLWNvbG9yOiBibGFjaztcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiBibGFjaztcbiAgICAtLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJnLWNvbG9yLW9wYXF1ZTogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1pbWc6IHdoaXRlO1xuICAgIC0tYm9yZGVyLWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IGJsYWNrO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiBibGFjaztcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiBibGFjaztcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHdoaXRlO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1jdWJlLWZhY2U6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHdoaXRlO1xuICAgIC0tYnVsbGV0LWNvbG9yOiBibGFjaztcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xuICAgIC0tc2hhZG93OiAwIDBweCAxMHB4IC01cHggYmxhY2s7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG59XG5cbltkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjZTZmMWZmO1xuICAgIC0tYWNjZW50LWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogIzA4OWVlNTY5O1xuICAgIC0tdGl0bGUtY29sb3I6ICMwODllZTU7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWJnLWNvbG9yOiAjMGYwZjBmO1xuICAgIC0tYmctY29sb3Itb3BhcXVlOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYmctaW1nOiB1cmwoJy4uL2ltYWdlcy9iYWNrZ3JvdW5kL2NvZGUucG5nJykgbm8tcmVwZWF0O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIzA4OWVlNTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6ICMwODllZTU7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tbWVudS1idG4tY29sb3I6ICMwODllZTU7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6ICNlNmYxZmY7XG4gICAgLS1idG4tYmctY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdWJlLWZhY2U6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6ICNlNmYxZmY7XG4gICAgLS1idWxsZXQtY29sb3I6ICMwODllZTU7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gICAgLS1zaGFkb3c6IDAgMHB4IDEwcHggLTVweCBibGFjazs7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIjtcblxuJEN1YmVTaXplOiAxNTBweDtcblxuLmN1YmUtbG9hZGVyIHtcbiAgICB3aWR0aDogJEN1YmVTaXplO1xuICAgIGhlaWdodDogJEN1YmVTaXplO1xuICAgIGxpbmUtaGVpZ2h0OiAkQ3ViZVNpemU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIDAuMXM7XG4gICAgcGVyc3BlY3RpdmU6IDk5OTlweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBtYXJnaW46IC01MHB4IDAgMCAtNTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIGFuaW1hdGlvbjogc3BpbiA1cyBpbmZpbml0ZSBmb3J3YXJkcztcblxuICAgIC5wcm9maWxlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3Byb2ZpbGUvcHJvZmlsZS1zbWFsbC5wbmcnKSAhaW1wb3J0YW50O1xuICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIC5jdWJlLWZhY2Uge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMnB4IDFweCB2YXIoLS1hY2NlbnQtY29sb3Itb3BhcXVlKSwgMCAwIDFweCAxcHggdmFyKC0tYWNjZW50LWNvbG9yLW9wYXF1ZSk7XG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3ViZS1mYWNlKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWN1YmUtaWNvbi1jb2xvcik7XG4gICAgfVxuXG4gICAgLmN1YmUtZmFjZS1mcm9udCB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgY2FsYygkQ3ViZVNpemUgLyAyKSk7XG4gICAgfVxuXG4gICAgLmN1YmUtZmFjZS1iYWNrIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZykgdHJhbnNsYXRlM2QoMCwgMCwgY2FsYygkQ3ViZVNpemUgLyAyKSk7XG4gICAgfVxuXG4gICAgLmN1YmUtZmFjZS1sZWZ0IHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlM2QoMCwgMCwgY2FsYygkQ3ViZVNpemUgLyAyKSk7XG4gICAgfVxuXG4gICAgLmN1YmUtZmFjZS1yaWdodCB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlM2QoMCwgMCwgY2FsYygkQ3ViZVNpemUgLyAyKSk7XG4gICAgfVxuXG4gICAgLmN1YmUtZmFjZS10b3Age1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZTNkKDAsIDAsIGNhbGMoJEN1YmVTaXplIC8gMikpO1xuICAgIH1cblxuICAgIC5jdWJlLWZhY2UtYm90dG9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlM2QoMCwgMCwgY2FsYyhjYWxjKCRDdWJlU2l6ZSAvIDIpKSk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XG4gICAgfVxuXG4gICAgMTUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSByb3RhdGVaKDBkZWcpO1xuICAgIH1cblxuICAgIDMwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCg0NWRlZykgcm90YXRlWig0NWRlZyk7XG4gICAgfVxuXG4gICAgNDUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVZKDE4MGRlZykgcm90YXRlWCg5MGRlZyk7XG4gICAgfVxuXG4gICAgNjAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDMxMGRlZykgcm90YXRlWigyMzBkZWcpO1xuICAgIH1cblxuICAgIDc1JSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgzNjBkZWcpIHJvdGF0ZVooMzYwZGVnKTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDM2MGRlZykgcm90YXRlWigzNjBkZWcpO1xuICAgIH1cbn1cblxuXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLDZDQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtDQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLDJDQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsNERBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEVBQUE7RUFDQSx5RkFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSw0REFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwRUFBQTtFQUNBLHlGQUFBO0FDQ0o7O0FBMURBO0VBQ0ksWUFITztFQUlQLGFBSk87RUFLUCxrQkFMTztFQU1QLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxvQ0FBQTtBQTZESjtBQTNESTtFQUNJLHFEQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUE2RFI7QUExREk7RUFDSSxnR0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0FBNERSO0FBekRJO0VBQ0ksa0NBQUE7QUEyRFI7QUF4REk7RUFDSSxrREFBQTtBQTBEUjtBQXZESTtFQUNJLGtEQUFBO0FBeURSO0FBdERJO0VBQ0ksaURBQUE7QUF3RFI7QUFyREk7RUFDSSxpREFBQTtBQXVEUjtBQXBESTtFQUNJLGtEQUFBO0FBc0RSOztBQWxEQTtFQUNJO0lBQ0ksc0NBQUE7RUFxRE47RUFsREU7SUFDSSx1Q0FBQTtFQW9ETjtFQWpERTtJQUNJLHdDQUFBO0VBbUROO0VBaERFO0lBQ0ksd0RBQUE7RUFrRE47RUEvQ0U7SUFDSSwwQ0FBQTtFQWlETjtFQTlDRTtJQUNJLDBDQUFBO0VBZ0ROO0VBN0NFO0lBQ0ksMENBQUE7RUErQ047QUFDRjtBQUNBLG80UEFBbzRQIiwic291cmNlc0NvbnRlbnQiOlsiW2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiBibGFjaztcbiAgICAtLWFjY2VudC1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6ICMwODllZTU2OTtcbiAgICAtLXRpdGxlLWNvbG9yOiBibGFjaztcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiBibGFjaztcbiAgICAtLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJnLWNvbG9yLW9wYXF1ZTogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1pbWc6IHdoaXRlO1xuICAgIC0tYm9yZGVyLWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IGJsYWNrO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiBibGFjaztcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiBibGFjaztcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHdoaXRlO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1jdWJlLWZhY2U6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHdoaXRlO1xuICAgIC0tYnVsbGV0LWNvbG9yOiBibGFjaztcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xuICAgIC0tc2hhZG93OiAwIDBweCAxMHB4IC01cHggYmxhY2s7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG59XG5cbltkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjZTZmMWZmO1xuICAgIC0tYWNjZW50LWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogIzA4OWVlNTY5O1xuICAgIC0tdGl0bGUtY29sb3I6ICMwODllZTU7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWJnLWNvbG9yOiAjMGYwZjBmO1xuICAgIC0tYmctY29sb3Itb3BhcXVlOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYmctaW1nOiB1cmwoJy4uL2ltYWdlcy9iYWNrZ3JvdW5kL2NvZGUucG5nJykgbm8tcmVwZWF0O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIzA4OWVlNTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6ICMwODllZTU7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tbWVudS1idG4tY29sb3I6ICMwODllZTU7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6ICNlNmYxZmY7XG4gICAgLS1idG4tYmctY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdWJlLWZhY2U6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6ICNlNmYxZmY7XG4gICAgLS1idWxsZXQtY29sb3I6ICMwODllZTU7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gICAgLS1zaGFkb3c6IDAgMHB4IDEwcHggLTVweCBibGFjazs7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIjtcblxuJEN1YmVTaXplOiAxNTBweDtcblxuLmN1YmUtbG9hZGVyIHtcbiAgICB3aWR0aDogJEN1YmVTaXplO1xuICAgIGhlaWdodDogJEN1YmVTaXplO1xuICAgIGxpbmUtaGVpZ2h0OiAkQ3ViZVNpemU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIDAuMXM7XG4gICAgcGVyc3BlY3RpdmU6IDk5OTlweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBtYXJnaW46IC01MHB4IDAgMCAtNTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIGFuaW1hdGlvbjogc3BpbiA1cyBpbmZpbml0ZSBmb3J3YXJkcztcblxuICAgIC5wcm9maWxlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3Byb2ZpbGUvcHJvZmlsZS1zbWFsbC5wbmcnKSAhaW1wb3J0YW50O1xuICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIC5jdWJlLWZhY2Uge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMnB4IDFweCB2YXIoLS1hY2NlbnQtY29sb3Itb3BhcXVlKSwgMCAwIDFweCAxcHggdmFyKC0tYWNjZW50LWNvbG9yLW9wYXF1ZSk7XG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3ViZS1mYWNlKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWN1YmUtaWNvbi1jb2xvcik7XG4gICAgfVxuXG4gICAgLmN1YmUtZmFjZS1mcm9udCB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgY2FsYygkQ3ViZVNpemUgLyAyKSk7XG4gICAgfVxuXG4gICAgLmN1YmUtZmFjZS1iYWNrIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZykgdHJhbnNsYXRlM2QoMCwgMCwgY2FsYygkQ3ViZVNpemUgLyAyKSk7XG4gICAgfVxuXG4gICAgLmN1YmUtZmFjZS1sZWZ0IHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlM2QoMCwgMCwgY2FsYygkQ3ViZVNpemUgLyAyKSk7XG4gICAgfVxuXG4gICAgLmN1YmUtZmFjZS1yaWdodCB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlM2QoMCwgMCwgY2FsYygkQ3ViZVNpemUgLyAyKSk7XG4gICAgfVxuXG4gICAgLmN1YmUtZmFjZS10b3Age1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZTNkKDAsIDAsIGNhbGMoJEN1YmVTaXplIC8gMikpO1xuICAgIH1cblxuICAgIC5jdWJlLWZhY2UtYm90dG9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlM2QoMCwgMCwgY2FsYyhjYWxjKCRDdWJlU2l6ZSAvIDIpKSk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XG4gICAgfVxuXG4gICAgMTUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSByb3RhdGVaKDBkZWcpO1xuICAgIH1cblxuICAgIDMwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCg0NWRlZykgcm90YXRlWig0NWRlZyk7XG4gICAgfVxuXG4gICAgNDUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVZKDE4MGRlZykgcm90YXRlWCg5MGRlZyk7XG4gICAgfVxuXG4gICAgNjAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDMxMGRlZykgcm90YXRlWigyMzBkZWcpO1xuICAgIH1cblxuICAgIDc1JSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgzNjBkZWcpIHJvdGF0ZVooMzYwZGVnKTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDM2MGRlZykgcm90YXRlWigzNjBkZWcpO1xuICAgIH1cbn1cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6520:
/*!****************************************************************!*\
  !*** ./src/app/components/home/projects/projects.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsComponent: () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 2584);



function ProjectsComponent_div_8_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12)(1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const technology_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](technology_r5);
  }
}
function ProjectsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div")(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectsComponent_div_8_span_9_Template, 3, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const project_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-aos-delay", i_r3 * 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", project_r2.CompanyLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r2.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r2.Description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", project_r2.Technologies);
  }
}
function ProjectsComponent_div_16_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r6["DemoLink"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function ProjectsComponent_div_16_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r6["GithubLink"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function ProjectsComponent_div_16_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12)(1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const technology_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](technology_r13);
  }
}
function ProjectsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div")(2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectsComponent_div_16_a_3_Template, 2, 1, "a", 15)(4, ProjectsComponent_div_16_a_4_Template, 2, 1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProjectsComponent_div_16_span_10_Template, 3, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const project_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-aos-delay", i_r7 * 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r6["DemoLink"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r6["GithubLink"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r6.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r6.Description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", project_r6.Technologies);
  }
}
class ProjectsComponent {
  static #_ = this.ɵfac = function ProjectsComponent_Factory(t) {
    return new (t || ProjectsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProjectsComponent,
    selectors: [["app-projects"]],
    decls: 18,
    vars: 12,
    consts: [[1, "container"], [1, "section-box"], [1, "section-title"], [1, "grid"], ["class", "grid-item project-box", "data-aos", "fade-up", "data-aos-duration", "500", 4, "ngFor", "ngForOf"], [1, ""], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "grid-item", "project-box"], [1, "project-img"], ["alt", "CompanyLogo", 3, "src"], [1, "title"], [1, "description"], ["class", "skills", 4, "ngFor", "ngForOf"], [1, "skills"], [1, "highlight"], [1, "external-links"], ["style", "color: inherit", "target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 2, "color", "inherit", 3, "href"], [1, "external-link-btn", "ml-3", "fas", "fa-external-link-alt"], ["id", "ghLink", 1, "external-link-btn", "ml-4", "fab", "fa-github"]],
    template: function ProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "div")(4, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProjectsComponent_div_8_Template, 10, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1)(11, "div", 5)(12, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProjectsComponent_div_16_Template, 11, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "FeatureProjects.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 6, "FeatureProjects.Projects"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 8, "PersonalProjects.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 10, "PersonalProjects.Projects"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    styles: ["[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: black;\n  --accent-color: #089ee5;\n  --accent-color-opaque: #089ee569;\n  --title-color: black;\n  --btn-text-color: black;\n  --bg-color: white;\n  --bg-color-opaque: transparent;\n  --bg-img: white;\n  --border-color: rgb(0 0 0 / 30%);\n  --border: 1px solid rgb(0 0 0 / 30%);\n  --border-radius: 3px;\n  --scroll-btn-color: black;\n  --scroll-btn-bg-color: rgb(255 255 255 / 30%);\n  --menu-btn-color: black;\n  --code-highlight-color: black;\n  --code-highlight-text-color: white;\n  --btn-bg-color: white;\n  --btn-hover-bg-color: white;\n  --menu-bar-bg-color: rgb(255 255 255 / 30%);\n  --menu-overlay-bg-color: white;\n  --cube-face: rgb(0 0 0 / 60%);\n  --cube-icon-color: white;\n  --bullet-color: black;\n  --divider: \"/\";\n  --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  --cursor-type: pointer;\n  --shadow: 0 0px 10px -5px black;\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: #e6f1ff;\n  --accent-color: #089ee5;\n  --accent-color-opaque: #089ee569;\n  --title-color: #089ee5;\n  --btn-text-color: #089ee5;\n  --bg-color: #0f0f0f;\n  --bg-color-opaque: rgb(0 0 0 / 30%);\n  --bg-img: url('code.png') no-repeat;\n  --border-color: #089ee5;\n  --border: 1px solid #089ee5;\n  --border-radius: 3px;\n  --scroll-btn-color: #089ee5;\n  --scroll-btn-bg-color: rgb(0 0 0 / 30%);\n  --menu-btn-color: #089ee5;\n  --code-highlight-color: rgb(0 0 0 / 30%);\n  --code-highlight-text-color: #e6f1ff;\n  --btn-bg-color: transparent;\n  --btn-hover-bg-color: rgb(0 0 0 / 30%);\n  --menu-bar-bg-color: rgb(0 0 0 / 30%);\n  --menu-overlay-bg-color: rgb(0 0 0 / 60%);\n  --cube-face: rgb(0 0 0 / 30%);\n  --cube-icon-color: #e6f1ff;\n  --bullet-color: #089ee5;\n  --divider: \"/\";\n  --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  --shadow: 0 0px 10px -5px black;\n  --cursor-type: pointer;\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n}\n\n.project-box[_ngcontent-%COMP%] {\n  height: 350px;\n  border: var(--border);\n  box-shadow: var(--shadow);\n  transition: var(--transition);\n  background-color: var(--bg-color-opaque);\n  border-radius: var(--border-radius);\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: flex-start;\n  position: relative;\n  padding: 1.5rem;\n}\n.project-box[_ngcontent-%COMP%]:after {\n  background: none repeat scroll 0 0 transparent;\n  bottom: 0px;\n  content: \"\";\n  display: block;\n  height: 3px;\n  left: 50%;\n  position: absolute;\n  background: var(--accent-color);\n  transition: width 0.3s ease 0s, left 0.3s ease 0s;\n  width: 0;\n}\n.project-box[_ngcontent-%COMP%]:hover:after {\n  width: 100%;\n  left: 0;\n}\n.project-box[_ngcontent-%COMP%]   .external-links[_ngcontent-%COMP%] {\n  text-align: end;\n}\n.project-box[_ngcontent-%COMP%]   .project-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 35px;\n  margin-bottom: 10px;\n}\n.project-box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 22px;\n}\n.project-box[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.project-box[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 1.75;\n  font-family: var(--code-font);\n}\n.project-box[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  padding-bottom: 3.5px;\n}\n.project-box[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]:after {\n  content: var(--divider);\n  color: var(--primary-color);\n  font-weight: 600;\n  opacity: 0.7;\n  margin: 5px;\n}\n.project-box[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 30% 30% 30%;\n  grid-template-rows: auto;\n  gap: 15px 15px;\n  grid-template-areas: \". . .\" \". . .\" \". . .\";\n}\n.grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%] {\n  background-color: var(--bg-color-opaque);\n}\n.grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n\n.external-link-btn[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n\n@media (max-width: 1400px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 50% 50%;\n    grid-template-rows: auto auto;\n    grid-template-areas: \". .\" \". .\" \". .\";\n  }\n}\n@media (max-width: 1000px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 100%;\n    grid-template-rows: auto;\n    grid-template-areas: \".\" \".\" \".\";\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIiwicHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLDZDQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtDQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLDJDQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsNERBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEVBQUE7RUFDQSx5RkFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSw0REFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwRUFBQTtFQUNBLHlGQUFBO0FDQ0o7O0FBNURBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLHdDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQStESjtBQTVESTtFQUNJLDhDQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaURBQUE7RUFDQSxRQUFBO0FBOERSO0FBM0RJO0VBQ0ksV0FBQTtFQUNBLE9BQUE7QUE2RFI7QUExREk7RUFDSSxlQUFBO0FBNERSO0FBekRRO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FBMkRaO0FBdkRJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBeURSO0FBdERJO0VBQ0ksZUFBQTtBQXdEUjtBQXJESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBdURSO0FBckRRO0VBQ0kscUJBQUE7QUF1RFo7QUFwRFE7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQXNEWjtBQW5EUTtFQUNJLFdBQUE7QUFxRFo7O0FBaERBO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsNENBQ0E7QUFrREo7QUE5Q0k7RUFDSSx3Q0FBQTtBQWdEUjtBQTlDUTtFQUNJLDJCQUFBO0FBZ0RaOztBQTFDQTtFQUNJLGNBQUE7QUE2Q0o7O0FBMUNBO0VBQ0k7SUFDSSw4QkFBQTtJQUNBLDZCQUFBO0lBQ0Esc0NBQ0o7RUE0Q0Y7QUFDRjtBQXZDQTtFQUNJO0lBQ0ksMkJBQUE7SUFDQSx3QkFBQTtJQUNBLGdDQUNKO0VBd0NGO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJbZGF0YS10aGVtZT1cImxpZ2h0XCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IGJsYWNrO1xuICAgIC0tYWNjZW50LWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogIzA4OWVlNTY5O1xuICAgIC0tdGl0bGUtY29sb3I6IGJsYWNrO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IGJsYWNrO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3Itb3BhcXVlOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWltZzogd2hpdGU7XG4gICAgLS1ib3JkZXItY29sb3I6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogYmxhY2s7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyAzMCUpO1xuICAgIC0tbWVudS1idG4tY29sb3I6IGJsYWNrO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IGJsYWNrO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogd2hpdGU7XG4gICAgLS1idG4tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyAzMCUpO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWN1YmUtZmFjZTogcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogd2hpdGU7XG4gICAgLS1idWxsZXQtY29sb3I6IGJsYWNrO1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG4gICAgLS1zaGFkb3c6IDAgMHB4IDEwcHggLTVweCBibGFjaztcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6ICNlNmYxZmY7XG4gICAgLS1hY2NlbnQtY29sb3I6ICMwODllZTU7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiAjMDg5ZWU1Njk7XG4gICAgLS10aXRsZS1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tYmctY29sb3I6ICMwZjBmMGY7XG4gICAgLS1iZy1jb2xvci1vcGFxdWU6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1iZy1pbWc6IHVybCgnLi4vaW1hZ2VzL2JhY2tncm91bmQvY29kZS5wbmcnKSBuby1yZXBlYXQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICMwODllZTU7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAjMDg5ZWU1O1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogIzA4OWVlNTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogI2U2ZjFmZjtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1YmUtZmFjZTogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogI2U2ZjFmZjtcbiAgICAtLWJ1bGxldC1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgICAtLXNoYWRvdzogMCAwcHggMTBweCAtNXB4IGJsYWNrOztcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xufVxuIiwiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3RoZW1lc1wiO1xuXG4ucHJvamVjdC1ib3gge1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3Itb3BhcXVlKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG5cblxuICAgICY6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlIDBzLCBsZWZ0IDAuM3MgZWFzZSAwcztcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgfVxuXG4gICAgJjpob3ZlcjphZnRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgIC5leHRlcm5hbC1saW5rcyB7XG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICB9XG4gICAgLnByb2plY3QtaW1nIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgICBtYXJnaW46IDAgMCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuXG4gICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgIH1cblxuICAgIC5za2lsbHMge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tY29kZS1mb250KTtcblxuICAgICAgICAuaGlnaGxpZ2h0IHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzLjVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDp2YXIoLS1kaXZpZGVyKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAlIDMwJSAzMCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICAgIGdhcDogMTVweCAxNXB4O1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCIuIC4gLlwiXG4gICAgXCIuIC4gLlwiXG4gICAgXCIuIC4gLlwiO1xuXG4gICAgLmdyaWQtaXRlbSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLW9wYXF1ZSk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLmV4dGVybmFsLWxpbmstYnRuIHtcbiAgICBtYXJnaW46IDAgMTBweDtcbn1cblxuQG1lZGlhKG1heC13aWR0aDogMTQwMHB4KSB7XG4gICAgLmdyaWQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiLiAuXCJcbiAgICBcIi4gLlwiXG4gICAgXCIuIC5cIjtcbiAgICB9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIC5ncmlkIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCIuXCJcbiAgICBcIi5cIlxuICAgIFwiLlwiO1xuICAgIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSw2Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLDREQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtFQUNBLDBFQUFBO0VBQ0EseUZBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLHVDQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsNERBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEVBQUE7RUFDQSx5RkFBQTtBQ0NKOztBQTVEQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3Q0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUErREo7QUE1REk7RUFDSSw4Q0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGlEQUFBO0VBQ0EsUUFBQTtBQThEUjtBQTNESTtFQUNJLFdBQUE7RUFDQSxPQUFBO0FBNkRSO0FBMURJO0VBQ0ksZUFBQTtBQTREUjtBQXpEUTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQTJEWjtBQXZESTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQXlEUjtBQXRESTtFQUNJLGVBQUE7QUF3RFI7QUFyREk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQXVEUjtBQXJEUTtFQUNJLHFCQUFBO0FBdURaO0FBcERRO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFzRFo7QUFuRFE7RUFDSSxXQUFBO0FBcURaOztBQWhEQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLDRDQUNBO0FBa0RKO0FBOUNJO0VBQ0ksd0NBQUE7QUFnRFI7QUE5Q1E7RUFDSSwyQkFBQTtBQWdEWjs7QUExQ0E7RUFDSSxjQUFBO0FBNkNKOztBQTFDQTtFQUNJO0lBQ0ksOEJBQUE7SUFDQSw2QkFBQTtJQUNBLHNDQUNKO0VBNENGO0FBQ0Y7QUF2Q0E7RUFDSTtJQUNJLDJCQUFBO0lBQ0Esd0JBQUE7SUFDQSxnQ0FDSjtFQXdDRjtBQUNGO0FBRUEsNDhRQUE0OFEiLCJzb3VyY2VzQ29udGVudCI6WyJbZGF0YS10aGVtZT1cImxpZ2h0XCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IGJsYWNrO1xuICAgIC0tYWNjZW50LWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogIzA4OWVlNTY5O1xuICAgIC0tdGl0bGUtY29sb3I6IGJsYWNrO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IGJsYWNrO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3Itb3BhcXVlOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWltZzogd2hpdGU7XG4gICAgLS1ib3JkZXItY29sb3I6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogYmxhY2s7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyAzMCUpO1xuICAgIC0tbWVudS1idG4tY29sb3I6IGJsYWNrO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IGJsYWNrO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogd2hpdGU7XG4gICAgLS1idG4tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyAzMCUpO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWN1YmUtZmFjZTogcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogd2hpdGU7XG4gICAgLS1idWxsZXQtY29sb3I6IGJsYWNrO1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG4gICAgLS1zaGFkb3c6IDAgMHB4IDEwcHggLTVweCBibGFjaztcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6ICNlNmYxZmY7XG4gICAgLS1hY2NlbnQtY29sb3I6ICMwODllZTU7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiAjMDg5ZWU1Njk7XG4gICAgLS10aXRsZS1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiAjMDg5ZWU1O1xuICAgIC0tYmctY29sb3I6ICMwZjBmMGY7XG4gICAgLS1iZy1jb2xvci1vcGFxdWU6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1iZy1pbWc6IHVybCgnLi4vaW1hZ2VzL2JhY2tncm91bmQvY29kZS5wbmcnKSBuby1yZXBlYXQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICMwODllZTU7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAjMDg5ZWU1O1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogIzA4OWVlNTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogI2U2ZjFmZjtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1YmUtZmFjZTogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogI2U2ZjFmZjtcbiAgICAtLWJ1bGxldC1jb2xvcjogIzA4OWVlNTtcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgICAtLXNoYWRvdzogMCAwcHggMTBweCAtNXB4IGJsYWNrOztcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xufVxuIiwiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3RoZW1lc1wiO1xuXG4ucHJvamVjdC1ib3gge1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3Itb3BhcXVlKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG5cblxuICAgICY6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlIDBzLCBsZWZ0IDAuM3MgZWFzZSAwcztcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgfVxuXG4gICAgJjpob3ZlcjphZnRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgIC5leHRlcm5hbC1saW5rcyB7XG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICB9XG4gICAgLnByb2plY3QtaW1nIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgICBtYXJnaW46IDAgMCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuXG4gICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgIH1cblxuICAgIC5za2lsbHMge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tY29kZS1mb250KTtcblxuICAgICAgICAuaGlnaGxpZ2h0IHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzLjVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDp2YXIoLS1kaXZpZGVyKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAlIDMwJSAzMCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICAgIGdhcDogMTVweCAxNXB4O1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCIuIC4gLlwiXG4gICAgXCIuIC4gLlwiXG4gICAgXCIuIC4gLlwiO1xuXG4gICAgLmdyaWQtaXRlbSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLW9wYXF1ZSk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLmV4dGVybmFsLWxpbmstYnRuIHtcbiAgICBtYXJnaW46IDAgMTBweDtcbn1cblxuQG1lZGlhKG1heC13aWR0aDogMTQwMHB4KSB7XG4gICAgLmdyaWQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiLiAuXCJcbiAgICBcIi4gLlwiXG4gICAgXCIuIC5cIjtcbiAgICB9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIC5ncmlkIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCIuXCJcbiAgICBcIi5cIlxuICAgIFwiLlwiO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9928:
/*!*******************************************************!*\
  !*** ./src/app/services/language/language.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageService: () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 2584);



class LanguageService {
  constructor(translateService) {
    this.translateService = translateService;
    this.DEFAULT = "en";
  }
  static #_ = this.ɵfac = function LanguageService_Factory(t) {
    return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: LanguageService,
    factory: LanguageService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6716:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  trackAnalyticID: "G-4ML1VNCP9T"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 7460:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 5204);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 6716);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(7460)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map