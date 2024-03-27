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
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --blue: #089ee5;\n  --blue-50: #089ee569;\n  --bg-dark: black;\n  --bg-0: transparent;\n  --bg-dark-30: rgb(0 0 0 / 30%);\n  --bg-dark-60: rgb(0 0 0 / 60%);\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-50);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --border-color: var(--bg-dark-60);\n  --border: 1px solid var(--bg-dark-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white);\n  --cube-face: var(--bg-dark-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-50);\n  --bg-color: var(--bg-dark);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--bg-dark-30);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--bg-dark-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--bg-dark-30);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--bg-dark-30);\n  --menu-bar-bg-color: var(--bg-dark-30);\n  --menu-overlay-bg-color: var(--bg-dark-60);\n  --cube-face: var(--bg-dark-30);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--blue);\n}\n\n.bg-img[_ngcontent-%COMP%] {\n  background: url('code.png') no-repeat;\n  transform-origin: center;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n.bg-img[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--bg-overlay-color);\n  opacity: 1;\n  transition: var(--transition);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiYmFja2dyb3VuZC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEVBQUE7RUFDQSx5RkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQ0NKOztBQ2ZBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtBRGtCSjs7QUNmQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsNkJBQUE7RUFDQSx5Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsMENBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMkJBQUE7QURrQko7O0FBbkVBO0VBQ0kscUNBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FBc0VKO0FBcEVJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUFTLE1BQUE7RUFDVCxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0FBdUVSIiwiZmlsZSI6ImJhY2tncm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4gICAgLS1ibGFjazogYmxhY2s7XG4gICAgLS13aGl0ZTogd2hpdGU7XG4gICAgLS13aGl0ZS0zMDogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLWJsdWU6ICMwODllZTU7XG4gICAgLS1ibHVlLTUwOiAjMDg5ZWU1Njk7XG4gICAgLS1iZy1kYXJrOiBibGFjaztcbiAgICAtLWJnLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctZGFyay0zMDogcmdiKDAgMCAwIC8gMzAlKTs7XG4gICAgLS1iZy1kYXJrLTYwOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtLWJveC1zaGFkb3c6IDAgMCA1cHggMHB4IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIjtcblxuLmJnLWltZyB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQvY29kZS5wbmcnKSBuby1yZXBlYXQ7O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogLTE7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDsgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1vdmVybGF5LWNvbG9yKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbilcbiAgICB9XG59XG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNTApO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3ItMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0td2hpdGUpO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJnLWRhcmstNjApO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmctZGFyay02MCk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJnLWRhcmstNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsYWNrKTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTUwKTtcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1iZy1kYXJrKTtcbiAgICAtLWJnLWNvbG9yLTA6IHZhcigtLWJnLTApO1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0tYmctMCk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0wKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLWJnLWRhcmstNjApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL2JhY2tncm91bmQvYmFja2dyb3VuZC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QUNmQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7QURrQko7O0FDZkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDJCQUFBO0FEa0JKOztBQW5FQTtFQUNJLHFDQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQXNFSjtBQXBFSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFBUyxNQUFBO0VBQ1QsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtBQXVFUjtBQUNBLG9nTEFBb2dMIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuICAgIC0tYmxhY2s6IGJsYWNrO1xuICAgIC0td2hpdGU6IHdoaXRlO1xuICAgIC0td2hpdGUtMzA6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS1ibHVlOiAjMDg5ZWU1O1xuICAgIC0tYmx1ZS01MDogIzA4OWVlNTY5O1xuICAgIC0tYmctZGFyazogYmxhY2s7XG4gICAgLS1iZy0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWRhcmstMzA6IHJnYigwIDAgMCAvIDMwJSk7O1xuICAgIC0tYmctZGFyay02MDogcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLS1ib3gtc2hhZG93OiAwIDAgNXB4IDBweCByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG59XG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCI7XG5cbi5iZy1pbWcge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kL2NvZGUucG5nJykgbm8tcmVwZWF0OztcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IC0xO1xuXG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7IHRvcDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctb3ZlcmxheS1jb2xvcik7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pXG4gICAgfVxufVxuIiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5bZGF0YS10aGVtZT1cImxpZ2h0XCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTUwKTtcbiAgICAtLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJnLWNvbG9yLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1iZy1kYXJrLTYwKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJnLWRhcmstNjApO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1iZy1kYXJrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG59XG5cbltkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS01MCk7XG4gICAgLS1iZy1jb2xvcjogdmFyKC0tYmctZGFyayk7XG4gICAgLS1iZy1jb2xvci0wOiB2YXIoLS1iZy0wKTtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLWJnLTApO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmctY29sb3ItMCk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS1iZy1kYXJrLTYwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmx1ZSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
    decls: 20,
    vars: 15,
    consts: [["data-aos", "fade-up", "data-aos-duration", "500", 1, "footer-left-bar"], ["data-aos", "fade-right", "data-aos-delay", "800", "data-aos-duration", "500"], ["target", "_blank", 3, "href"], [1, "fas", "fa-envelope"], ["data-aos", "fade-right", "data-aos-delay", "700", "data-aos-duration", "500"], [1, "fab", "fa-github"], ["data-aos", "fade-right", "data-aos-delay", "600", "data-aos-duration", "500"], [1, "fab", "fa-linkedin"], ["data-aos", "fade-right", "data-aos-delay", "500", "data-aos-duration", "500"], [1, "fab", "fa-instagram"], [1, "scroll-top-btn", 3, "ngClass", "click"], [1, "fas", "fa-chevron-up"]],
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_div_click_18_listener() {
          return ctx.scrollTop();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "Email"), "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, "Github"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 9, "LinkedIn"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 11, "Instagram"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.scrollPosition > 100));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --blue: #089ee5;\n  --blue-50: #089ee569;\n  --bg-dark: black;\n  --bg-0: transparent;\n  --bg-dark-30: rgb(0 0 0 / 30%);\n  --bg-dark-60: rgb(0 0 0 / 60%);\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-50);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --border-color: var(--bg-dark-60);\n  --border: 1px solid var(--bg-dark-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white);\n  --cube-face: var(--bg-dark-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-50);\n  --bg-color: var(--bg-dark);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--bg-dark-30);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--bg-dark-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--bg-dark-30);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--bg-dark-30);\n  --menu-bar-bg-color: var(--bg-dark-30);\n  --menu-overlay-bg-color: var(--bg-dark-60);\n  --cube-face: var(--bg-dark-30);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--blue);\n}\n\nfooter[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-family: var(--code-font);\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  width: 1px;\n  height: 90px;\n  margin: 0 auto 0px 7.5px;\n  background-color: var(--border-color);\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -16px;\n  left: 51px;\n  padding: 0;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 19px;\n  color: var(--primary-color);\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 33px;\n}\nfooter[_ngcontent-%COMP%]   .scroll-top-btn[_ngcontent-%COMP%] {\n  border: var(--border);\n  border-radius: var(--border-radius);\n  padding: 0.5em 2em;\n  font-size: 20px;\n  line-height: 1;\n  position: fixed;\n  left: 50%;\n  bottom: -15px;\n  margin-left: -48.5px;\n  width: 20px;\n  text-align: center;\n  cursor: pointer;\n  transition: var(--transition) !important;\n  color: var(--scroll-btn-color);\n  background-color: var(--scroll-btn-bg-color);\n  box-shadow: var(--box-shadow);\n  opacity: 0;\n}\nfooter[_ngcontent-%COMP%]   .scroll-top-btn.show-scroll-btn[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(-5px);\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n}\n\n@media (max-width: 768px) {\n  .footer-left-bar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9fdGhlbWVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwRUFBQTtFQUNBLHlGQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FDZkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0FEa0JKOztBQ2ZBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esd0NBQUE7RUFDQSw2QkFBQTtFQUNBLHlDQUFBO0VBQ0EseUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQkFBQTtBRGtCSjs7QUFuRUE7RUFDSSwyQkFBQTtFQUNBLDZCQUFBO0FBc0VKO0FBcEVJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EscUNBQUE7QUFzRVI7QUFuRUk7RUFDSSxnQkFBQTtBQXFFUjtBQWxFSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFvRVI7QUFsRVE7RUFDSSxlQUFBO0VBQ0EsMkJBQUE7QUFvRVo7QUFqRVE7RUFDSSxnQkFBQTtBQW1FWjtBQWpFWTtFQUNJLG1CQUFBO0FBbUVoQjtBQTlESTtFQUNJLHFCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSw4QkFBQTtFQUNBLDRDQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FBZ0VSO0FBOURRO0VBQ0ksVUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtBQWdFWjs7QUEzREE7RUFDSTtJQUNJLGFBQUE7RUE4RE47QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4gICAgLS1ibGFjazogYmxhY2s7XG4gICAgLS13aGl0ZTogd2hpdGU7XG4gICAgLS13aGl0ZS0zMDogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLWJsdWU6ICMwODllZTU7XG4gICAgLS1ibHVlLTUwOiAjMDg5ZWU1Njk7XG4gICAgLS1iZy1kYXJrOiBibGFjaztcbiAgICAtLWJnLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctZGFyay0zMDogcmdiKDAgMCAwIC8gMzAlKTs7XG4gICAgLS1iZy1kYXJrLTYwOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtLWJveC1zaGFkb3c6IDAgMCA1cHggMHB4IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIjtcblxuZm9vdGVyIHtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvZGUtZm9udCk7XG5cbiAgICAuZm9vdGVyLWxlZnQtYmFyOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDBweCA3LjVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICB9XG5cbiAgICAuZm9vdGVyLWxlZnQtYmFyIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICAuZm9vdGVyLWxlZnQtYmFyIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IC0xNnB4O1xuICAgICAgICBsZWZ0OiA1MXB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIGkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcblxuICAgICAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2Nyb2xsLXRvcC1idG4ge1xuICAgICAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgICAgICBwYWRkaW5nOiAuNWVtIDJlbTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIGJvdHRvbTogLTE1cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNDguNXB4O1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zY3JvbGwtYnRuLWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcik7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuXG4gICAgICAgICYuc2hvdy1zY3JvbGwtYnRuIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuZm9vdGVyLWxlZnQtYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNTApO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3ItMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0td2hpdGUpO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJnLWRhcmstNjApO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmctZGFyay02MCk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJnLWRhcmstNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsYWNrKTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTUwKTtcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1iZy1kYXJrKTtcbiAgICAtLWJnLWNvbG9yLTA6IHZhcigtLWJnLTApO1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0tYmctMCk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0wKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLWJnLWRhcmstNjApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9fdGhlbWVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwRUFBQTtFQUNBLHlGQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FDZkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0FEa0JKOztBQ2ZBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esd0NBQUE7RUFDQSw2QkFBQTtFQUNBLHlDQUFBO0VBQ0EseUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQkFBQTtBRGtCSjs7QUFuRUE7RUFDSSwyQkFBQTtFQUNBLDZCQUFBO0FBc0VKO0FBcEVJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EscUNBQUE7QUFzRVI7QUFuRUk7RUFDSSxnQkFBQTtBQXFFUjtBQWxFSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFvRVI7QUFsRVE7RUFDSSxlQUFBO0VBQ0EsMkJBQUE7QUFvRVo7QUFqRVE7RUFDSSxnQkFBQTtBQW1FWjtBQWpFWTtFQUNJLG1CQUFBO0FBbUVoQjtBQTlESTtFQUNJLHFCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSw4QkFBQTtFQUNBLDRDQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FBZ0VSO0FBOURRO0VBQ0ksVUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtBQWdFWjs7QUEzREE7RUFDSTtJQUNJLGFBQUE7RUE4RE47QUFDRjtBQUVBLDR3T0FBNHdPIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuICAgIC0tYmxhY2s6IGJsYWNrO1xuICAgIC0td2hpdGU6IHdoaXRlO1xuICAgIC0td2hpdGUtMzA6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS1ibHVlOiAjMDg5ZWU1O1xuICAgIC0tYmx1ZS01MDogIzA4OWVlNTY5O1xuICAgIC0tYmctZGFyazogYmxhY2s7XG4gICAgLS1iZy0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWRhcmstMzA6IHJnYigwIDAgMCAvIDMwJSk7O1xuICAgIC0tYmctZGFyay02MDogcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLS1ib3gtc2hhZG93OiAwIDAgNXB4IDBweCByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG59XG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCI7XG5cbmZvb3RlciB7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb2RlLWZvbnQpO1xuXG4gICAgLmZvb3Rlci1sZWZ0LWJhcjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0byAwcHggNy41cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgfVxuXG4gICAgLmZvb3Rlci1sZWZ0LWJhciBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgfVxuXG4gICAgLmZvb3Rlci1sZWZ0LWJhciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiAtMTZweDtcbiAgICAgICAgbGVmdDogNTFweDtcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICBpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwcHg7XG5cbiAgICAgICAgICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNjcm9sbC10b3AtYnRuIHtcbiAgICAgICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICAgICAgcGFkZGluZzogLjVlbSAyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBib3R0b206IC0xNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTQ4LjVweDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Nyb2xsLWJ0bi1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjcm9sbC1idG4tYmctY29sb3IpO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbiAgICAgICAgb3BhY2l0eTogMDtcblxuICAgICAgICAmLnNob3ctc2Nyb2xsLWJ0biB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmZvb3Rlci1sZWZ0LWJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuIiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5bZGF0YS10aGVtZT1cImxpZ2h0XCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTUwKTtcbiAgICAtLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJnLWNvbG9yLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1iZy1kYXJrLTYwKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJnLWRhcmstNjApO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1iZy1kYXJrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG59XG5cbltkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS01MCk7XG4gICAgLS1iZy1jb2xvcjogdmFyKC0tYmctZGFyayk7XG4gICAgLS1iZy1jb2xvci0wOiB2YXIoLS1iZy0wKTtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLWJnLTApO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmctY29sb3ItMCk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS1iZy1kYXJrLTYwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmx1ZSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
    this.menuOpen ? document.body.classList.add('scroll-lock') : document.body.classList.remove('scroll-lock');
  }
  navigate(item) {
    if (item.label === 'Resume') {
      this.downloadResume();
    }
    this.router.navigate([item.link]);
    document.body.classList.remove('scroll-lock');
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
    consts: [[1, "menu-btn", 3, "click"], [1, "menu-container", 3, "ngClass"], [1, "bar1"], [1, "bar2"], [1, "bar3"], ["class", "menu-overlay", "data-aos", "fade-out", 4, "ngIf"], [1, "menu-bar"], [1, "menu-bar-items", 3, "ngClass"], ["class", "menu-bar-item", "data-aos", "fade-down", "data-aos-duration", "500", 4, "ngFor", "ngForOf"], ["data-aos", "fade-down", "data-aos-duration", "500", "data-aos-delay", "700", 1, "menu-bar-item", "theme-toggle", 3, "click"], ["data-aos", "fade-out", 1, "menu-overlay"], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "menu-items"], ["class", "menu-item", 4, "ngFor", "ngForOf"], [1, "overlay-theme-toggle", 3, "click"], [1, "menu-item"], [3, "click"], ["data-aos", "fade-down", "data-aos-duration", "500", 1, "menu-bar-item"]],
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
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --blue: #089ee5;\n  --blue-50: #089ee569;\n  --bg-dark: black;\n  --bg-0: transparent;\n  --bg-dark-30: rgb(0 0 0 / 30%);\n  --bg-dark-60: rgb(0 0 0 / 60%);\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-50);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --border-color: var(--bg-dark-60);\n  --border: 1px solid var(--bg-dark-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white);\n  --cube-face: var(--bg-dark-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-50);\n  --bg-color: var(--bg-dark);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--bg-dark-30);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--bg-dark-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--bg-dark-30);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--bg-dark-30);\n  --menu-bar-bg-color: var(--bg-dark-30);\n  --menu-overlay-bg-color: var(--bg-dark-60);\n  --cube-face: var(--bg-dark-30);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--blue);\n}\n\n.menu-btn[_ngcontent-%COMP%] {\n  display: none;\n  font-size: 35px;\n  position: fixed;\n  top: 0;\n  right: 0;\n  margin-right: 15px;\n  margin-top: 15px;\n  color: var(--primary-color);\n  cursor: var(--cursor-type);\n  z-index: 2;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%] {\n  display: block;\n  cursor: pointer;\n  border-radius: var(--border-radius);\n  color: blue;\n  padding: 5px;\n  transition: var(--transition);\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]:hover {\n  background: var(--bg-color-30);\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\n  transition: var(--transition);\n  width: 35px;\n  height: 2px;\n  background-color: var(--menu-btn-color);\n  margin: 6px 0;\n  transition: 0.4s;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%] {\n  transform: translate(0, 10px) rotate(-45deg);\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\n  transform: translate(0, -6px) rotate(45deg);\n}\n\n.menu-overlay[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background: var(--menu-overlay-bg-color);\n  -webkit-backdrop-filter: blur(3px);\n          backdrop-filter: blur(3px);\n  z-index: 1;\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15%;\n  left: 0;\n  width: 100vw;\n  margin: auto;\n  list-style: none;\n  color: var(--primary-color);\n  font-family: var(--code-font);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  font-size: 3em;\n  cursor: var(--cursor-type);\n  transition: var(--transition);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:before {\n  content: \">\";\n  opacity: 0;\n  margin: 20px 10px;\n  color: var(--bullet-color);\n  transition: var(--transition);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover {\n  transform: translateX(5px);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover:before {\n  opacity: 1;\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover:after {\n  opacity: 1;\n}\n\n.menu-bar[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 50px;\n  z-index: 1;\n}\n.menu-bar[_ngcontent-%COMP%]   .menu-bar-items[_ngcontent-%COMP%] {\n  padding: 2em 1.5em 1.25em;\n  float: left;\n  border: 1px solid transparent;\n  border-radius: var(--border-radius);\n  position: fixed;\n  top: -30px;\n  left: 50%;\n  transform: translateX(-50%);\n  transition: var(--transition);\n  z-index: 1;\n  min-width: 553px;\n}\n.menu-bar[_ngcontent-%COMP%]   .menu-bar-items.show-menu-bg[_ngcontent-%COMP%] {\n  background: var(--menu-bar-bg-color);\n  box-shadow: var(--box-shadow);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  border: var(--border) !important;\n}\n.menu-bar[_ngcontent-%COMP%]   .menu-bar-items[_ngcontent-%COMP%]   .menu-bar-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  float: left;\n  color: var(--primary-color);\n}\n.menu-bar[_ngcontent-%COMP%]   .menu-bar-items[_ngcontent-%COMP%]   .menu-bar-item[_ngcontent-%COMP%]:after {\n  content: var(--divider);\n  color: var(--accent-color);\n  font-weight: 600;\n  opacity: 0.7;\n  margin: 10px;\n}\n.menu-bar[_ngcontent-%COMP%]   .menu-bar-items[_ngcontent-%COMP%]   .menu-bar-item[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n\n.active[_ngcontent-%COMP%] {\n  color: var(--accent-color);\n}\n\n.menu-bar-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .theme-toggle[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--primary-color);\n}\n\n.overlay-theme-toggle[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-left: 50px;\n  cursor: pointer;\n}\n\n.theme-toggle[_ngcontent-%COMP%] {\n  font-size: 19px;\n  color: var(--primary-color);\n}\n\n@media (max-width: 1000px) {\n  .menu-btn[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .menu-bar-items[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .menu-overlay[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwibWVudS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEVBQUE7RUFDQSx5RkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQ0NKOztBQ2ZBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtBRGtCSjs7QUNmQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsNkJBQUE7RUFDQSx5Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsMENBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMkJBQUE7QURrQko7O0FBbkVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7QUFzRUo7QUFwRUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQXNFUjtBQXBFUTtFQUNJLDhCQUFBO0FBc0VaO0FBbkVRO0VBQ0ksNkJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBcUVaO0FBakVZO0VBQ0ksc0NBQUE7QUFtRWhCO0FBaEVZO0VBQ0ksNENBQUE7QUFrRWhCO0FBL0RZO0VBQ0ksVUFBQTtBQWlFaEI7QUE5RFk7RUFDSSwyQ0FBQTtBQWdFaEI7O0FBekRBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsVUFBQTtBQTRESjtBQTFESTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtBQTREUjtBQTFEUTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQTREWjtBQTFEWTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FBNERoQjtBQXpEWTtFQUtJLDBCQUFBO0FBdURoQjtBQTNEZ0I7RUFDSSwyQkFBQTtBQTZEcEI7QUF4RGdCO0VBQ0ksVUFBQTtBQTBEcEI7QUF2RGdCO0VBQ0ksVUFBQTtBQXlEcEI7O0FBbERBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBcURKO0FBbkRJO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFxRFI7QUFuRFE7RUFDSSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGdDQUFBO0FBcURaO0FBbERRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQW9EWjtBQWxEWTtFQUNJLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBb0RoQjtBQWpEWTtFQUNJLFdBQUE7QUFtRGhCOztBQTdDQTtFQUNJLDBCQUFBO0FBZ0RKOztBQTNDUTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtBQThDWjs7QUF6Q0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBNENKOztBQXpDQTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtBQTRDSjs7QUF4Q0E7RUFDSTtJQUNJLGNBQUE7RUEyQ047RUF6Q0U7SUFDSSxhQUFBO0VBMkNOO0VBekNFO0lBQ0ksY0FBQTtFQTJDTjtBQUNGIiwiZmlsZSI6Im1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4gICAgLS1ibGFjazogYmxhY2s7XG4gICAgLS13aGl0ZTogd2hpdGU7XG4gICAgLS13aGl0ZS0zMDogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLWJsdWU6ICMwODllZTU7XG4gICAgLS1ibHVlLTUwOiAjMDg5ZWU1Njk7XG4gICAgLS1iZy1kYXJrOiBibGFjaztcbiAgICAtLWJnLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctZGFyay0zMDogcmdiKDAgMCAwIC8gMzAlKTs7XG4gICAgLS1iZy1kYXJrLTYwOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtLWJveC1zaGFkb3c6IDAgMCA1cHggMHB4IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIjtcblxuLm1lbnUtYnRuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICBjdXJzb3I6IHZhcigtLWN1cnNvci10eXBlKTtcbiAgICB6LWluZGV4OiAyO1xuXG4gICAgLm1lbnUtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3ItMzApO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhcjEsIC5iYXIyLCAuYmFyMyB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LWJ0bi1jb2xvcik7XG4gICAgICAgICAgICBtYXJnaW46IDZweCAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcbiAgICAgICAgfVxuXG4gICAgICAgICYubWVudS1vcGVuIHtcbiAgICAgICAgICAgIC5iYXIxLCAuYmFyMiwgLmJhcjMge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmFyMSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCkgcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5iYXIyIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmFyMyB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCkgcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG4ubWVudS1vdmVybGF5IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tZW51LW92ZXJsYXktYmctY29sb3IpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xuICAgIHotaW5kZXg6IDE7XG5cbiAgICAubWVudS1pdGVtcyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxNSU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb2RlLWZvbnQpO1xuXG4gICAgICAgIC5tZW51LWl0ZW0ge1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgICAgIGN1cnNvcjogdmFyKC0tY3Vyc29yLXR5cGUpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG5cbiAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnPic7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMTBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYnVsbGV0LWNvbG9yKTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcblxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5tZW51LWJhciB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgLm1lbnUtYmFyLWl0ZW1zIHtcbiAgICAgICAgcGFkZGluZzogMmVtIDEuNWVtIDEuMjVlbTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IC0zMHB4O1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIG1pbi13aWR0aDogNTUzcHg7XG5cbiAgICAgICAgJi5zaG93LW1lbnUtYmcge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbWVudS1iYXItYmctY29sb3IpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgICAgICAgICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lbnUtYmFyLWl0ZW0ge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG5cbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHZhcigtLWRpdmlkZXIpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5hY3RpdmUge1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4ubWVudS1iYXItaXRlbSB7XG4gICAgc3BhbiB7XG4gICAgICAgIC50aGVtZS10b2dnbGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ub3ZlcmxheS10aGVtZS10b2dnbGUge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50aGVtZS10b2dnbGUge1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIC5tZW51LWJ0biB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAubWVudS1iYXItaXRlbXMge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubWVudS1vdmVybGF5IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufVxuIiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5bZGF0YS10aGVtZT1cImxpZ2h0XCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTUwKTtcbiAgICAtLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJnLWNvbG9yLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1iZy1kYXJrLTYwKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJnLWRhcmstNjApO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1iZy1kYXJrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG59XG5cbltkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS01MCk7XG4gICAgLS1iZy1jb2xvcjogdmFyKC0tYmctZGFyayk7XG4gICAgLS1iZy1jb2xvci0wOiB2YXIoLS1iZy0wKTtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLWJnLTApO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmctY29sb3ItMCk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS1iZy1kYXJrLTYwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmx1ZSk7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QUNmQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7QURrQko7O0FDZkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDJCQUFBO0FEa0JKOztBQW5FQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0FBc0VKO0FBcEVJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUFzRVI7QUFwRVE7RUFDSSw4QkFBQTtBQXNFWjtBQW5FUTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQXFFWjtBQWpFWTtFQUNJLHNDQUFBO0FBbUVoQjtBQWhFWTtFQUNJLDRDQUFBO0FBa0VoQjtBQS9EWTtFQUNJLFVBQUE7QUFpRWhCO0FBOURZO0VBQ0ksMkNBQUE7QUFnRWhCOztBQXpEQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHdDQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLFVBQUE7QUE0REo7QUExREk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7QUE0RFI7QUExRFE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUE0RFo7QUExRFk7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQTREaEI7QUF6RFk7RUFLSSwwQkFBQTtBQXVEaEI7QUEzRGdCO0VBQ0ksMkJBQUE7QUE2RHBCO0FBeERnQjtFQUNJLFVBQUE7QUEwRHBCO0FBdkRnQjtFQUNJLFVBQUE7QUF5RHBCOztBQWxEQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQXFESjtBQW5ESTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBcURSO0FBbkRRO0VBQ0ksb0NBQUE7RUFDQSw2QkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxnQ0FBQTtBQXFEWjtBQWxEUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUFvRFo7QUFsRFk7RUFDSSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQW9EaEI7QUFqRFk7RUFDSSxXQUFBO0FBbURoQjs7QUE3Q0E7RUFDSSwwQkFBQTtBQWdESjs7QUEzQ1E7RUFDSSxlQUFBO0VBQ0EsMkJBQUE7QUE4Q1o7O0FBekNBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQTRDSjs7QUF6Q0E7RUFDSSxlQUFBO0VBQ0EsMkJBQUE7QUE0Q0o7O0FBeENBO0VBQ0k7SUFDSSxjQUFBO0VBMkNOO0VBekNFO0lBQ0ksYUFBQTtFQTJDTjtFQXpDRTtJQUNJLGNBQUE7RUEyQ047QUFDRjtBQUdBLG9zWEFBb3NYIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuICAgIC0tYmxhY2s6IGJsYWNrO1xuICAgIC0td2hpdGU6IHdoaXRlO1xuICAgIC0td2hpdGUtMzA6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS1ibHVlOiAjMDg5ZWU1O1xuICAgIC0tYmx1ZS01MDogIzA4OWVlNTY5O1xuICAgIC0tYmctZGFyazogYmxhY2s7XG4gICAgLS1iZy0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWRhcmstMzA6IHJnYigwIDAgMCAvIDMwJSk7O1xuICAgIC0tYmctZGFyay02MDogcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLS1ib3gtc2hhZG93OiAwIDAgNXB4IDBweCByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG59XG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCI7XG5cbi5tZW51LWJ0biB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgY3Vyc29yOiB2YXIoLS1jdXJzb3ItdHlwZSk7XG4gICAgei1pbmRleDogMjtcblxuICAgIC5tZW51LWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yLTMwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYXIxLCAuYmFyMiwgLmJhcjMge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1idG4tY29sb3IpO1xuICAgICAgICAgICAgbWFyZ2luOiA2cHggMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgICAgIH1cblxuICAgICAgICAmLm1lbnUtb3BlbiB7XG4gICAgICAgICAgICAuYmFyMSwgLmJhcjIsIC5iYXIzIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJhcjEge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpIHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmFyMiB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJhcjMge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC02cHgpIHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuLm1lbnUtb3ZlcmxheSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWVudS1vdmVybGF5LWJnLWNvbG9yKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgLm1lbnUtaXRlbXMge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTUlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tY29kZS1mb250KTtcblxuICAgICAgICAubWVudS1pdGVtIHtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgICAgICAgICBjdXJzb3I6IHZhcigtLWN1cnNvci10eXBlKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuXG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJz4nO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDEwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJ1bGxldC1jb2xvcik7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XG5cbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ubWVudS1iYXIge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgei1pbmRleDogMTtcblxuICAgIC5tZW51LWJhci1pdGVtcyB7XG4gICAgICAgIHBhZGRpbmc6IDJlbSAxLjVlbSAxLjI1ZW07XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAtMzBweDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBtaW4td2lkdGg6IDU1M3B4O1xuXG4gICAgICAgICYuc2hvdy1tZW51LWJnIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW1lbnUtYmFyLWJnLWNvbG9yKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gICAgICAgICAgICBib3JkZXI6IHZhcigtLWJvcmRlcikgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZW51LWJhci1pdGVtIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuXG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiB2YXIoLS1kaXZpZGVyKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uYWN0aXZlIHtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLm1lbnUtYmFyLWl0ZW0ge1xuICAgIHNwYW4ge1xuICAgICAgICAudGhlbWUtdG9nZ2xlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm92ZXJsYXktdGhlbWUtdG9nZ2xlIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGhlbWUtdG9nZ2xlIHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAubWVudS1idG4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLm1lbnUtYmFyLWl0ZW1zIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLm1lbnUtb3ZlcmxheSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuW2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS01MCk7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmctZGFyay02MCk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iZy1kYXJrLTYwKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmctZGFyay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmxhY2spO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNTApO1xuICAgIC0tYmctY29sb3I6IHZhcigtLWJnLWRhcmspO1xuICAgIC0tYmctY29sb3ItMDogdmFyKC0tYmctMCk7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS1iZy0wKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLWJnLWNvbG9yLTApO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0tYmctZGFyay02MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsdWUpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
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
    consts: [[1, "about"], [1, "container"], [1, "section-box-about"], [1, "content"], [1, "row"], [1, "column"], ["data-aos", "fade-right", "data-aos-duration", "500"], [1, "title"], [1, "about-title"], ["data-aos", "fade-right", "data-aos-delay", "100", "data-aos-duration", "500", 1, "name"], ["data-aos", "fade-right", "data-aos-delay", "200", "data-aos-duration", "500", 1, "role"], [1, "code-highlight"], [1, "blinking-cursor"], ["data-aos", "fade-right", "data-aos-delay", "300", "data-aos-duration", "500", 1, "about-description"], [1, "mt-4", 3, "innerHTML"], ["data-aos", "fade-right", "data-aos-duration", "500", 1, "main-btn", "resume-btn", 3, "click"], ["data-aos", "zoom-out", "data-aos-duration", "500", 1, "column", "loader"]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h3", 10)(15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AboutComponent_Template_a_click_23_listener() {
          return ctx.downloadResume();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 16);
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
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --blue: #089ee5;\n  --blue-50: #089ee569;\n  --bg-dark: black;\n  --bg-0: transparent;\n  --bg-dark-30: rgb(0 0 0 / 30%);\n  --bg-dark-60: rgb(0 0 0 / 60%);\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-50);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --border-color: var(--bg-dark-60);\n  --border: 1px solid var(--bg-dark-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white);\n  --cube-face: var(--bg-dark-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-50);\n  --bg-color: var(--bg-dark);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--bg-dark-30);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--bg-dark-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--bg-dark-30);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--bg-dark-30);\n  --menu-bar-bg-color: var(--bg-dark-30);\n  --menu-overlay-bg-color: var(--bg-dark-60);\n  --cube-face: var(--bg-dark-30);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--blue);\n}\n\n.about[_ngcontent-%COMP%] {\n  min-height: 35vw;\n}\n\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 200px;\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--title-color);\n  margin: 0 0 20px 3px;\n  font-size: 16px;\n  font-weight: normal;\n  font-family: var(--code-font);\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  line-height: 1.1;\n  margin: 0;\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 60px;\n  color: var(--primary-color);\n  font-family: var(--primary-font);\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 40px;\n  color: var(--primary-color);\n  font-family: var(--code-font);\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   .about-description[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap-reverse;\n  justify-content: normal;\n  align-items: normal;\n  align-content: normal;\n}\n.row[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  display: block;\n  flex-grow: 1;\n  flex-shrink: 1;\n  flex-basis: auto;\n  align-self: center;\n  order: 0;\n}\n\n.code-highlight[_ngcontent-%COMP%] {\n  background: var(--code-highlight-color);\n  padding: 0 0px 0px 10px;\n  margin-left: -10px;\n  color: var(--code-highlight-text-color);\n}\n.code-highlight[_ngcontent-%COMP%]   .blinking-cursor[_ngcontent-%COMP%] {\n  animation: 1s _ngcontent-%COMP%_blink step-end infinite;\n}\n\n@keyframes _ngcontent-%COMP%_blink {\n  from, to {\n    color: transparent;\n  }\n  50% {\n    color: var(--code-highlight-text-color);\n  }\n}\n@media (max-width: 480px) {\n  .name[_ngcontent-%COMP%] {\n    font-size: 45px !important;\n  }\n  .role[_ngcontent-%COMP%] {\n    font-size: 28px !important;\n  }\n}\n@media (max-width: 1160px) {\n  .column.loader[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: -30px;\n    margin-bottom: 15vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiYWJvdXQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QUNmQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7QURrQko7O0FDZkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDJCQUFBO0FEa0JKOztBQW5FQTtFQUNJLGdCQUFBO0FBc0VKOztBQWxFSTtFQUNJLHNCQUFBO0FBcUVSO0FBbkVRO0VBQ0ksaUJBQUE7QUFxRVo7QUFsRVE7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFvRVo7QUFqRVE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQW1FWjtBQWhFUTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0FBa0VaO0FBL0RRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtBQWlFWjtBQTlEUTtFQUNJLG1CQUFBO0FBZ0VaO0FBN0RRO0VBQ0ksZ0JBQUE7QUErRFo7O0FBMURBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUE2REo7QUEzREk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQTZEUjs7QUF6REE7RUFDSSx1Q0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtBQTRESjtBQTNESTtFQUNJLHFDQUFBO0FBNkRSOztBQXhEQTtFQUNJO0lBQ0ksa0JBQUE7RUEyRE47RUF6REU7SUFDSSx1Q0FBQTtFQTJETjtBQUNGO0FBeERBO0VBQ0k7SUFDSSwwQkFBQTtFQTBETjtFQXhERTtJQUNJLDBCQUFBO0VBMEROO0FBQ0Y7QUF2REE7RUFDSTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VBeUROO0FBQ0YiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4gICAgLS1ibGFjazogYmxhY2s7XG4gICAgLS13aGl0ZTogd2hpdGU7XG4gICAgLS13aGl0ZS0zMDogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLWJsdWU6ICMwODllZTU7XG4gICAgLS1ibHVlLTUwOiAjMDg5ZWU1Njk7XG4gICAgLS1iZy1kYXJrOiBibGFjaztcbiAgICAtLWJnLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctZGFyay0zMDogcmdiKDAgMCAwIC8gMzAlKTs7XG4gICAgLS1iZy1kYXJrLTYwOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtLWJveC1zaGFkb3c6IDAgMCA1cHggMHB4IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIjtcblxuLmFib3V0IHtcbiAgICBtaW4taGVpZ2h0OiAzNXZ3O1xufVxuLmNvbnRhaW5lciB7XG5cbiAgICAuc2VjdGlvbi1ib3gtYWJvdXQge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDIwcHggM3B4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb2RlLWZvbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaDIsIGgzIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gICAgICAgIH1cblxuICAgICAgICBoMyB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWNvZGUtZm9udCk7XG4gICAgICAgIH1cblxuICAgICAgICAuYWJvdXQtZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xuICAgIGp1c3RpZnktY29udGVudDogbm9ybWFsO1xuICAgIGFsaWduLWl0ZW1zOiBub3JtYWw7XG4gICAgYWxpZ24tY29udGVudDogbm9ybWFsO1xuXG4gICAgLmNvbHVtbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAxO1xuICAgICAgICBmbGV4LWJhc2lzOiBhdXRvO1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIG9yZGVyOiAwO1xuICAgIH1cbn1cblxuLmNvZGUtaGlnaGxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2RlLWhpZ2hsaWdodC1jb2xvcik7XG4gICAgcGFkZGluZzogMCAwcHggMHB4IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICAgIGNvbG9yOiB2YXIoLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yKTtcbiAgICAuYmxpbmtpbmctY3Vyc29yIHtcbiAgICAgICAgYW5pbWF0aW9uOiAxcyBibGluayBzdGVwLWVuZCBpbmZpbml0ZTtcbiAgICB9XG5cbn1cblxuQGtleWZyYW1lcyBibGluayB7XG4gICAgZnJvbSwgdG8ge1xuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yKTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC5uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiA0NXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5yb2xlIHtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiAxMTYwcHgpIHtcbiAgICAuY29sdW1uLmxvYWRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTMwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1dmg7XG4gICAgfVxufVxuXG5cblxuXG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNTApO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3ItMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0td2hpdGUpO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJnLWRhcmstNjApO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmctZGFyay02MCk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJnLWRhcmstNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsYWNrKTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTUwKTtcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1iZy1kYXJrKTtcbiAgICAtLWJnLWNvbG9yLTA6IHZhcigtLWJnLTApO1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0tYmctMCk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0wKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLWJnLWRhcmstNjApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEVBQUE7RUFDQSx5RkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQ0NKOztBQ2ZBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtBRGtCSjs7QUNmQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsNkJBQUE7RUFDQSx5Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsMENBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMkJBQUE7QURrQko7O0FBbkVBO0VBQ0ksZ0JBQUE7QUFzRUo7O0FBbEVJO0VBQ0ksc0JBQUE7QUFxRVI7QUFuRVE7RUFDSSxpQkFBQTtBQXFFWjtBQWxFUTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQW9FWjtBQWpFUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBbUVaO0FBaEVRO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7QUFrRVo7QUEvRFE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0FBaUVaO0FBOURRO0VBQ0ksbUJBQUE7QUFnRVo7QUE3RFE7RUFDSSxnQkFBQTtBQStEWjs7QUExREE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQTZESjtBQTNESTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBNkRSOztBQXpEQTtFQUNJLHVDQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0FBNERKO0FBM0RJO0VBQ0kscUNBQUE7QUE2RFI7O0FBeERBO0VBQ0k7SUFDSSxrQkFBQTtFQTJETjtFQXpERTtJQUNJLHVDQUFBO0VBMkROO0FBQ0Y7QUF4REE7RUFDSTtJQUNJLDBCQUFBO0VBMEROO0VBeERFO0lBQ0ksMEJBQUE7RUEwRE47QUFDRjtBQXZEQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUF5RE47QUFDRjtBQUNBLGduUUFBZ25RIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuICAgIC0tYmxhY2s6IGJsYWNrO1xuICAgIC0td2hpdGU6IHdoaXRlO1xuICAgIC0td2hpdGUtMzA6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS1ibHVlOiAjMDg5ZWU1O1xuICAgIC0tYmx1ZS01MDogIzA4OWVlNTY5O1xuICAgIC0tYmctZGFyazogYmxhY2s7XG4gICAgLS1iZy0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWRhcmstMzA6IHJnYigwIDAgMCAvIDMwJSk7O1xuICAgIC0tYmctZGFyay02MDogcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLS1ib3gtc2hhZG93OiAwIDAgNXB4IDBweCByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG59XG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCI7XG5cbi5hYm91dCB7XG4gICAgbWluLWhlaWdodDogMzV2dztcbn1cbi5jb250YWluZXIge1xuXG4gICAgLnNlY3Rpb24tYm94LWFib3V0IHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAyMHB4IDNweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tY29kZS1mb250KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyLCBoMyB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaDMge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb2RlLWZvbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFib3V0LWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IG5vcm1hbDtcbiAgICBhbGlnbi1pdGVtczogbm9ybWFsO1xuICAgIGFsaWduLWNvbnRlbnQ6IG5vcm1hbDtcblxuICAgIC5jb2x1bW4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICBmbGV4LXNocmluazogMTtcbiAgICAgICAgZmxleC1iYXNpczogYXV0bztcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICBvcmRlcjogMDtcbiAgICB9XG59XG5cbi5jb2RlLWhpZ2hsaWdodCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29kZS1oaWdobGlnaHQtY29sb3IpO1xuICAgIHBhZGRpbmc6IDAgMHB4IDBweCAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICBjb2xvcjogdmFyKC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcik7XG4gICAgLmJsaW5raW5nLWN1cnNvciB7XG4gICAgICAgIGFuaW1hdGlvbjogMXMgYmxpbmsgc3RlcC1lbmQgaW5maW5pdGU7XG4gICAgfVxuXG59XG5cbkBrZXlmcmFtZXMgYmxpbmsge1xuICAgIGZyb20sIHRvIHtcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICBjb2xvcjogdmFyKC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcik7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAubmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDVweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAucm9sZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhKG1heC13aWR0aDogMTE2MHB4KSB7XG4gICAgLmNvbHVtbi5sb2FkZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXZoO1xuICAgIH1cbn1cblxuXG5cblxuIiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5bZGF0YS10aGVtZT1cImxpZ2h0XCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTUwKTtcbiAgICAtLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJnLWNvbG9yLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1iZy1kYXJrLTYwKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJnLWRhcmstNjApO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1iZy1kYXJrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG59XG5cbltkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS01MCk7XG4gICAgLS1iZy1jb2xvcjogdmFyKC0tYmctZGFyayk7XG4gICAgLS1iZy1jb2xvci0wOiB2YXIoLS1iZy0wKTtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLWJnLTApO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmctY29sb3ItMCk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS1iZy1kYXJrLTYwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmx1ZSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --blue: #089ee5;\n  --blue-50: #089ee569;\n  --bg-dark: black;\n  --bg-0: transparent;\n  --bg-dark-30: rgb(0 0 0 / 30%);\n  --bg-dark-60: rgb(0 0 0 / 60%);\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-50);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --border-color: var(--bg-dark-60);\n  --border: 1px solid var(--bg-dark-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white);\n  --cube-face: var(--bg-dark-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-50);\n  --bg-color: var(--bg-dark);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--bg-dark-30);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--bg-dark-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--bg-dark-30);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--bg-dark-30);\n  --menu-bar-bg-color: var(--bg-dark-30);\n  --menu-overlay-bg-color: var(--bg-dark-60);\n  --cube-face: var(--bg-dark-30);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--blue);\n}\n\n.contact-box[_ngcontent-%COMP%] {\n  margin: 20vh auto 30vh;\n}\n.contact-box[_ngcontent-%COMP%]   .contact-title[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  font-size: 50px;\n  font-weight: 600;\n  color: var(--primary-color);\n  margin: auto;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.contact-box[_ngcontent-%COMP%]   .contact-pre-title[_ngcontent-%COMP%] {\n  position: relative;\n  align-items: center;\n  margin: 10px 0 25px;\n  width: 100%;\n  white-space: nowrap;\n  display: block;\n  color: var(--title-color);\n  font-size: 16px;\n  font-family: var(--primary-font);\n  font-weight: normal;\n  justify-content: center;\n  text-align: center;\n}\n\n.contact-btn[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiY29udGFjdC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEVBQUE7RUFDQSx5RkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQ0NKOztBQ2ZBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtBRGtCSjs7QUNmQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsNkJBQUE7RUFDQSx5Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsMENBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMkJBQUE7QURrQko7O0FBbkVBO0VBQ0ksc0JBQUE7QUFzRUo7QUFwRUk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtBQXNFUjtBQW5FSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQXFFUjs7QUFqRUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBb0VKIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4gICAgLS1ibGFjazogYmxhY2s7XG4gICAgLS13aGl0ZTogd2hpdGU7XG4gICAgLS13aGl0ZS0zMDogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLWJsdWU6ICMwODllZTU7XG4gICAgLS1ibHVlLTUwOiAjMDg5ZWU1Njk7XG4gICAgLS1iZy1kYXJrOiBibGFjaztcbiAgICAtLWJnLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctZGFyay0zMDogcmdiKDAgMCAwIC8gMzAlKTs7XG4gICAgLS1iZy1kYXJrLTYwOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtLWJveC1zaGFkb3c6IDAgMCA1cHggMHB4IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIjtcblxuLmNvbnRhY3QtYm94IHtcbiAgICBtYXJnaW46IDIwdmggYXV0byAzMHZoO1xuXG4gICAgLmNvbnRhY3QtdGl0bGUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICB9XG5cbiAgICAuY29udGFjdC1wcmUtdGl0bGUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMTBweCAwIDI1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbi5jb250YWN0LWJ0biB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNTApO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3ItMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0td2hpdGUpO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJnLWRhcmstNjApO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmctZGFyay02MCk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJnLWRhcmstNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsYWNrKTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTUwKTtcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1iZy1kYXJrKTtcbiAgICAtLWJnLWNvbG9yLTA6IHZhcigtLWJnLTApO1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0tYmctMCk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0wKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLWJnLWRhcmstNjApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QUNmQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7QURrQko7O0FDZkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDJCQUFBO0FEa0JKOztBQW5FQTtFQUNJLHNCQUFBO0FBc0VKO0FBcEVJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7QUFzRVI7QUFuRUk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFxRVI7O0FBakVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQW9FSjtBQUVBLGdoTUFBZ2hNIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuICAgIC0tYmxhY2s6IGJsYWNrO1xuICAgIC0td2hpdGU6IHdoaXRlO1xuICAgIC0td2hpdGUtMzA6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS1ibHVlOiAjMDg5ZWU1O1xuICAgIC0tYmx1ZS01MDogIzA4OWVlNTY5O1xuICAgIC0tYmctZGFyazogYmxhY2s7XG4gICAgLS1iZy0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWRhcmstMzA6IHJnYigwIDAgMCAvIDMwJSk7O1xuICAgIC0tYmctZGFyay02MDogcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLS1ib3gtc2hhZG93OiAwIDAgNXB4IDBweCByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG59XG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCI7XG5cbi5jb250YWN0LWJveCB7XG4gICAgbWFyZ2luOiAyMHZoIGF1dG8gMzB2aDtcblxuICAgIC5jb250YWN0LXRpdGxlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgfVxuXG4gICAgLmNvbnRhY3QtcHJlLXRpdGxlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDEwcHggMCAyNXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG4uY29udGFjdC1idG4ge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5bZGF0YS10aGVtZT1cImxpZ2h0XCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTUwKTtcbiAgICAtLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJnLWNvbG9yLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1iZy1kYXJrLTYwKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJnLWRhcmstNjApO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1iZy1kYXJrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG59XG5cbltkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS01MCk7XG4gICAgLS1iZy1jb2xvcjogdmFyKC0tYmctZGFyayk7XG4gICAgLS1iZy1jb2xvci0wOiB2YXIoLS1iZy0wKTtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLWJnLTApO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmctY29sb3ItMCk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS1iZy1kYXJrLTYwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmx1ZSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4440:
/*!************************************************************!*\
  !*** ./src/app/components/home/credit/credit.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreditComponent: () => (/* binding */ CreditComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 2584);


class CreditComponent {
  static #_ = this.ɵfac = function CreditComponent_Factory(t) {
    return new (t || CreditComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CreditComponent,
    selectors: [["app-credit"]],
    decls: 8,
    vars: 6,
    consts: [[1, "credits"], [1, "credit"], ["rel", "nofollow noopener noreferrer", "target", "_blank", 3, "href"], ["alt", "Angular", 1, "logo", 3, "src"]],
    template: function CreditComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Designed by Arun Varghese");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div")(4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "Repo"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, "Footer.Logo"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    styles: [".credits[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 1;\n  text-align: center;\n  height: 15vh;\n}\n.credits[_ngcontent-%COMP%]   .credit[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  transition: var(--transition);\n}\n.credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  color: var(--accent-color);\n}\n.credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 25px;\n  margin-top: -5px;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDSTtFQUNJLG1CQUFBO0FBQ1I7QUFFSTtFQUNJLDJCQUFBO0VBQ0EsNkJBQUE7QUFBUjtBQUVRO0VBQ0kscUJBQUE7RUFDQSwwQkFBQTtBQUFaO0FBR1E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQURaIiwiZmlsZSI6ImNyZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmVkaXRzIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMTV2aDtcblxuICAgIC5jcmVkaXQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cblxuICAgIGEge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuXG4gICAgICAgICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2NyZWRpdC9jcmVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0k7RUFDSSxtQkFBQTtBQUNSO0FBRUk7RUFDSSwyQkFBQTtFQUNBLDZCQUFBO0FBQVI7QUFFUTtFQUNJLHFCQUFBO0VBQ0EsMEJBQUE7QUFBWjtBQUdRO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFEWjtBQUNBLHdsQ0FBd2xDIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZWRpdHMge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxNXZoO1xuXG4gICAgLmNyZWRpdCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG5cbiAgICAgICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --blue: #089ee5;\n  --blue-50: #089ee569;\n  --bg-dark: black;\n  --bg-0: transparent;\n  --bg-dark-30: rgb(0 0 0 / 30%);\n  --bg-dark-60: rgb(0 0 0 / 60%);\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-50);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --border-color: var(--bg-dark-60);\n  --border: 1px solid var(--bg-dark-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white);\n  --cube-face: var(--bg-dark-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-50);\n  --bg-color: var(--bg-dark);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--bg-dark-30);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--bg-dark-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--bg-dark-30);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--bg-dark-30);\n  --menu-bar-bg-color: var(--bg-dark-30);\n  --menu-overlay-bg-color: var(--bg-dark-60);\n  --cube-face: var(--bg-dark-30);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--blue);\n}\n\n.job[_ngcontent-%COMP%] {\n  background-color: var(--bg-color-30);\n  transition: var(--transition);\n  border: var(--border);\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow);\n  padding: 25px;\n  margin-bottom: 25px;\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  opacity: 0.9;\n}\n.job[_ngcontent-%COMP%]:after {\n  background: none repeat scroll 0 0 transparent;\n  bottom: 0px;\n  content: \"\";\n  display: block;\n  height: 3px;\n  left: 0%;\n  position: absolute;\n  background: var(--accent-color);\n  transition: width 0.3s ease 0s, left 0.3s ease 0s;\n  width: 0;\n}\n.job[_ngcontent-%COMP%]:hover:after {\n  width: 100%;\n  left: 0;\n}\n.job[_ngcontent-%COMP%]   .job-time[_ngcontent-%COMP%] {\n  color: var(--accent-color);\n  margin-bottom: 30px;\n}\n.job[_ngcontent-%COMP%]   .job-descriptions[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.job[_ngcontent-%COMP%]   .job-descriptions[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 14px;\n}\n.job[_ngcontent-%COMP%]   .job-location[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.job[_ngcontent-%COMP%]   .job-logo[_ngcontent-%COMP%] {\n  margin-bottom: -5px;\n  margin-left: 5px;\n  height: 25px;\n}\n.job[_ngcontent-%COMP%]   .job-environment[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.job[_ngcontent-%COMP%]   .job-environment[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--primary-color);\n  line-height: 1.75;\n  font-family: var(--code-font);\n}\n.job[_ngcontent-%COMP%]   .job-environment[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  padding-bottom: 3.5px;\n}\n.job[_ngcontent-%COMP%]   .job-environment[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%]:after {\n  content: var(--divider);\n  color: var(--primary-color);\n  font-weight: 600;\n  opacity: 0.7;\n  margin: 5px;\n}\n.job[_ngcontent-%COMP%]   .job-environment[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEVBQUE7RUFDQSx5RkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQ0NKOztBQ2ZBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtBRGtCSjs7QUNmQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsNkJBQUE7RUFDQSx5Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsMENBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMkJBQUE7QURrQko7O0FBbkVBO0VBQ0ksb0NBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUNBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxZQUFBO0FBc0VKO0FBcEVJO0VBQ0ksOENBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpREFBQTtFQUNBLFFBQUE7QUFzRVI7QUFuRUk7RUFDSSxXQUFBO0VBQ0EsT0FBQTtBQXFFUjtBQWxFSTtFQUNJLDBCQUFBO0VBQ0EsbUJBQUE7QUFvRVI7QUFqRUk7RUFDSSxtQkFBQTtBQW1FUjtBQWxFUTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQW9FWjtBQWhFSTtFQUNJLG1CQUFBO0FBa0VSO0FBL0RJO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFpRVI7QUE5REk7RUFDSSxnQkFBQTtFQUNBLFVBQUE7QUFnRVI7QUE5RFE7RUFDSSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBZ0VaO0FBOURZO0VBQ0kscUJBQUE7QUFnRWhCO0FBN0RZO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUErRGhCO0FBNURZO0VBQ0ksV0FBQTtBQThEaEIiLCJmaWxlIjoiZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgICAtLWJsYWNrOiBibGFjaztcbiAgICAtLXdoaXRlOiB3aGl0ZTtcbiAgICAtLXdoaXRlLTMwOiByZ2IoMjU1IDI1NSAyNTUgLyAzMCUpO1xuICAgIC0tYmx1ZTogIzA4OWVlNTtcbiAgICAtLWJsdWUtNTA6ICMwODllZTU2OTtcbiAgICAtLWJnLWRhcms6IGJsYWNrO1xuICAgIC0tYmctMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1kYXJrLTMwOiByZ2IoMCAwIDAgLyAzMCUpOztcbiAgICAtLWJnLWRhcmstNjA6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC0tYm94LXNoYWRvdzogMCAwIDVweCAwcHggcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xufVxuIiwiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3RoZW1lc1wiO1xuXG4uam9iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0zMCk7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICBvcGFjaXR5OiAwLjk7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgbGVmdDogMCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlIDBzLCBsZWZ0IDAuM3MgZWFzZSAwcztcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgfVxuXG4gICAgJjpob3ZlcjphZnRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgIC5qb2ItdGltZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cblxuICAgIC5qb2ItZGVzY3JpcHRpb25zIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgLmpvYi1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmpvYi1sb2NhdGlvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgLmpvYi1sb2dvIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgIH1cblxuICAgIC5qb2ItZW52aXJvbm1lbnQge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIC50ZWNobm9sb2d5IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWNvZGUtZm9udCk7XG5cbiAgICAgICAgICAgIC5oaWdobGlnaHQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzLjVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDp2YXIoLS1kaXZpZGVyKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5bZGF0YS10aGVtZT1cImxpZ2h0XCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTUwKTtcbiAgICAtLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJnLWNvbG9yLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1iZy1kYXJrLTYwKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJnLWRhcmstNjApO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1iZy1kYXJrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG59XG5cbltkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS01MCk7XG4gICAgLS1iZy1jb2xvcjogdmFyKC0tYmctZGFyayk7XG4gICAgLS1iZy1jb2xvci0wOiB2YXIoLS1iZy0wKTtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLWJnLTApO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmctY29sb3ItMCk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS1iZy1kYXJrLTYwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmx1ZSk7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QUNmQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7QURrQko7O0FDZkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDJCQUFBO0FEa0JKOztBQW5FQTtFQUNJLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsWUFBQTtBQXNFSjtBQXBFSTtFQUNJLDhDQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaURBQUE7RUFDQSxRQUFBO0FBc0VSO0FBbkVJO0VBQ0ksV0FBQTtFQUNBLE9BQUE7QUFxRVI7QUFsRUk7RUFDSSwwQkFBQTtFQUNBLG1CQUFBO0FBb0VSO0FBakVJO0VBQ0ksbUJBQUE7QUFtRVI7QUFsRVE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUFvRVo7QUFoRUk7RUFDSSxtQkFBQTtBQWtFUjtBQS9ESTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBaUVSO0FBOURJO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0FBZ0VSO0FBOURRO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQWdFWjtBQTlEWTtFQUNJLHFCQUFBO0FBZ0VoQjtBQTdEWTtFQUNJLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBK0RoQjtBQTVEWTtFQUNJLFdBQUE7QUE4RGhCO0FBRUEsZ3RQQUFndFAiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4gICAgLS1ibGFjazogYmxhY2s7XG4gICAgLS13aGl0ZTogd2hpdGU7XG4gICAgLS13aGl0ZS0zMDogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLWJsdWU6ICMwODllZTU7XG4gICAgLS1ibHVlLTUwOiAjMDg5ZWU1Njk7XG4gICAgLS1iZy1kYXJrOiBibGFjaztcbiAgICAtLWJnLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctZGFyay0zMDogcmdiKDAgMCAwIC8gMzAlKTs7XG4gICAgLS1iZy1kYXJrLTYwOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtLWJveC1zaGFkb3c6IDAgMCA1cHggMHB4IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIjtcblxuLmpvYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItMzApO1xuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgb3BhY2l0eTogMC45O1xuXG4gICAgJjphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICAgIGxlZnQ6IDAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZSAwcywgbGVmdCAwLjNzIGVhc2UgMHM7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgIH1cblxuICAgICY6aG92ZXI6YWZ0ZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG5cbiAgICAuam9iLXRpbWUge1xuICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG5cbiAgICAuam9iLWRlc2NyaXB0aW9ucyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIC5qb2ItZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5qb2ItbG9jYXRpb24ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIC5qb2ItbG9nbyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC01cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICB9XG5cbiAgICAuam9iLWVudmlyb25tZW50IHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAudGVjaG5vbG9neSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS43NTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb2RlLWZvbnQpO1xuXG4gICAgICAgICAgICAuaGlnaGxpZ2h0IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMy41cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6dmFyKC0tZGl2aWRlcik7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZDphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuW2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS01MCk7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmctZGFyay02MCk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iZy1kYXJrLTYwKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmctZGFyay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmxhY2spO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNTApO1xuICAgIC0tYmctY29sb3I6IHZhcigtLWJnLWRhcmspO1xuICAgIC0tYmctY29sb3ItMDogdmFyKC0tYmctMCk7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS1iZy0wKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLWJnLWNvbG9yLTApO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0tYmctZGFyay02MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsdWUpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --blue: #089ee5;\n  --blue-50: #089ee569;\n  --bg-dark: black;\n  --bg-0: transparent;\n  --bg-dark-30: rgb(0 0 0 / 30%);\n  --bg-dark-60: rgb(0 0 0 / 60%);\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-50);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --border-color: var(--bg-dark-60);\n  --border: 1px solid var(--bg-dark-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white);\n  --cube-face: var(--bg-dark-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-50);\n  --bg-color: var(--bg-dark);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--bg-dark-30);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--bg-dark-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--bg-dark-30);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--bg-dark-30);\n  --menu-bar-bg-color: var(--bg-dark-30);\n  --menu-overlay-bg-color: var(--bg-dark-60);\n  --cube-face: var(--bg-dark-30);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--blue);\n}\n\n.description[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.qualifications-list[_ngcontent-%COMP%] {\n  padding: 0;\n  margin-bottom: 50px;\n}\n.qualifications-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n\n.skills[_ngcontent-%COMP%] {\n  margin: 15px 0px;\n}\n.skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 12px;\n  color: var(--accent-color);\n  font-family: var(--code-font);\n}\n.skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]:after {\n  content: var(--divider);\n  color: var(--primary-color);\n  font-weight: 600;\n  opacity: 0.7;\n  margin: 5px;\n}\n.skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n.skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiaGlnaGxpZ2h0cy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEVBQUE7RUFDQSx5RkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQ0NKOztBQ2ZBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtBRGtCSjs7QUNmQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsNkJBQUE7RUFDQSx5Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsMENBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMkJBQUE7QURrQko7O0FBbkVBO0VBQ0ksZ0JBQUE7QUFzRUo7O0FBbkVBO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0FBc0VKO0FBcEVJO0VBQ0ksY0FBQTtBQXNFUjs7QUFsRUE7RUFDSSxnQkFBQTtBQXFFSjtBQW5FSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUFxRVI7QUFuRVE7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQXFFWjtBQWxFUTtFQUNJLFdBQUE7QUFvRVo7QUFqRVE7RUFDSSxtQkFBQTtBQW1FWiIsImZpbGUiOiJoaWdobGlnaHRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuICAgIC0tYmxhY2s6IGJsYWNrO1xuICAgIC0td2hpdGU6IHdoaXRlO1xuICAgIC0td2hpdGUtMzA6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS1ibHVlOiAjMDg5ZWU1O1xuICAgIC0tYmx1ZS01MDogIzA4OWVlNTY5O1xuICAgIC0tYmctZGFyazogYmxhY2s7XG4gICAgLS1iZy0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWRhcmstMzA6IHJnYigwIDAgMCAvIDMwJSk7O1xuICAgIC0tYmctZGFyay02MDogcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLS1ib3gtc2hhZG93OiAwIDAgNXB4IDBweCByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG59XG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCI7XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnF1YWxpZmljYXRpb25zLWxpc3Qge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcblxuICAgIGxpIHtcbiAgICAgICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgfVxufVxuXG4uc2tpbGxzIHtcbiAgICBtYXJnaW46IDE1cHggMHB4O1xuXG4gICAgLnNraWxsLWVsZW1lbnQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb2RlLWZvbnQpO1xuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogdmFyKC0tZGl2aWRlcik7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZDphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuW2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS01MCk7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmctZGFyay02MCk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iZy1kYXJrLTYwKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmctZGFyay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmxhY2spO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNTApO1xuICAgIC0tYmctY29sb3I6IHZhcigtLWJnLWRhcmspO1xuICAgIC0tYmctY29sb3ItMDogdmFyKC0tYmctMCk7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS1iZy0wKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLWJnLWNvbG9yLTApO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0tYmctZGFyay02MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsdWUpO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hpZ2hsaWdodHMvaGlnaGxpZ2h0cy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QUNmQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7QURrQko7O0FDZkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDJCQUFBO0FEa0JKOztBQW5FQTtFQUNJLGdCQUFBO0FBc0VKOztBQW5FQTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtBQXNFSjtBQXBFSTtFQUNJLGNBQUE7QUFzRVI7O0FBbEVBO0VBQ0ksZ0JBQUE7QUFxRUo7QUFuRUk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FBcUVSO0FBbkVRO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFxRVo7QUFsRVE7RUFDSSxXQUFBO0FBb0VaO0FBakVRO0VBQ0ksbUJBQUE7QUFtRVo7QUFDQSxnMExBQWcwTCIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgICAtLWJsYWNrOiBibGFjaztcbiAgICAtLXdoaXRlOiB3aGl0ZTtcbiAgICAtLXdoaXRlLTMwOiByZ2IoMjU1IDI1NSAyNTUgLyAzMCUpO1xuICAgIC0tYmx1ZTogIzA4OWVlNTtcbiAgICAtLWJsdWUtNTA6ICMwODllZTU2OTtcbiAgICAtLWJnLWRhcms6IGJsYWNrO1xuICAgIC0tYmctMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1kYXJrLTMwOiByZ2IoMCAwIDAgLyAzMCUpOztcbiAgICAtLWJnLWRhcmstNjA6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC0tYm94LXNoYWRvdzogMCAwIDVweCAwcHggcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xufVxuIiwiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3RoZW1lc1wiO1xuXG4uZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5xdWFsaWZpY2F0aW9ucy1saXN0IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG5cbiAgICBsaSB7XG4gICAgICAgIG1hcmdpbjogMTVweCAwO1xuICAgIH1cbn1cblxuLnNraWxscyB7XG4gICAgbWFyZ2luOiAxNXB4IDBweDtcblxuICAgIC5za2lsbC1lbGVtZW50IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tY29kZS1mb250KTtcblxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IHZhcigtLWRpdmlkZXIpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNTApO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3ItMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0td2hpdGUpO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJnLWRhcmstNjApO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmctZGFyay02MCk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJnLWRhcmstNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsYWNrKTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTUwKTtcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1iZy1kYXJrKTtcbiAgICAtLWJnLWNvbG9yLTA6IHZhcigtLWJnLTApO1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0tYmctMCk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0wKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLWJnLWRhcmstNjApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about/about.component */ 1412);
/* harmony import */ var _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highlights/highlights.component */ 7708);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./experience/experience.component */ 5884);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects/projects.component */ 6520);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ 2948);
/* harmony import */ var _credit_credit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./credit/credit.component */ 4440);







class HomeComponent {
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 6,
    vars: 0,
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-about")(1, "app-highlights")(2, "app-experience")(3, "app-projects")(4, "app-contact")(5, "app-credit");
      }
    },
    dependencies: [_about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent, _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_1__.HighlightsComponent, _experience_experience_component__WEBPACK_IMPORTED_MODULE_2__.ExperienceComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__.ProjectsComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__.ContactComponent, _credit_credit_component__WEBPACK_IMPORTED_MODULE_5__.CreditComponent],
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 4044);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 2584);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 1332);
/* harmony import */ var _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highlights/highlights.component */ 7708);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.component */ 2948);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects/projects.component */ 6520);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ 5531);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experience/experience.component */ 5884);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ 1412);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loader/loader.component */ 7308);
/* harmony import */ var _credit_credit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./credit/credit.component */ 4440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4280);














function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class HomeModule {
  static #_ = this.ɵfac = function HomeModule_Factory(t) {
    return new (t || HomeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: HomeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule.forChild({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient]
      }
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_5__.AboutComponent, _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_1__.HighlightsComponent, _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__.ExperienceComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__.ProjectsComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__.ContactComponent, _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__.LoaderComponent, _credit_credit_component__WEBPACK_IMPORTED_MODULE_7__.CreditComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule]
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
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --blue: #089ee5;\n  --blue-50: #089ee569;\n  --bg-dark: black;\n  --bg-0: transparent;\n  --bg-dark-30: rgb(0 0 0 / 30%);\n  --bg-dark-60: rgb(0 0 0 / 60%);\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-50);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --border-color: var(--bg-dark-60);\n  --border: 1px solid var(--bg-dark-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white);\n  --cube-face: var(--bg-dark-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-50);\n  --bg-color: var(--bg-dark);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--bg-dark-30);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--bg-dark-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--bg-dark-30);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--bg-dark-30);\n  --menu-bar-bg-color: var(--bg-dark-30);\n  --menu-overlay-bg-color: var(--bg-dark-60);\n  --cube-face: var(--bg-dark-30);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--blue);\n}\n\n.cube-loader[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  line-height: 150px;\n  text-align: center;\n  font-size: 50px;\n  transform-style: preserve-3d;\n  transition: transform 0.5s 0.1s;\n  perspective: 9999px;\n  color: #333;\n  margin: -50px 0 0 -50px;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  animation: _ngcontent-%COMP%_spin 5s infinite forwards;\n}\n.cube-loader[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  background-image: url('profile-small.png') !important;\n  filter: grayscale(1);\n  transform-origin: center;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 2px 1px var(--accent-color-opaque), 0 0 1px 1px var(--accent-color-opaque);\n  width: inherit;\n  height: inherit;\n  position: absolute;\n  background-color: var(--cube-face);\n  color: var(--cube-icon-color);\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face-front[_ngcontent-%COMP%] {\n  transform: translate3d(0, 0, 75px);\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face-back[_ngcontent-%COMP%] {\n  transform: rotateY(180deg) translate3d(0, 0, 75px);\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face-left[_ngcontent-%COMP%] {\n  transform: rotateY(-90deg) translate3d(0, 0, 75px);\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face-right[_ngcontent-%COMP%] {\n  transform: rotateY(90deg) translate3d(0, 0, 75px);\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face-top[_ngcontent-%COMP%] {\n  transform: rotateX(90deg) translate3d(0, 0, 75px);\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face-bottom[_ngcontent-%COMP%] {\n  transform: rotateX(-90deg) translate3d(0, 0, 75px);\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotateY(0deg) rotateZ(0deg);\n  }\n  15% {\n    transform: rotateY(90deg) rotateZ(0deg);\n  }\n  30% {\n    transform: rotateX(45deg) rotateZ(45deg);\n  }\n  45% {\n    transform: rotateX(90deg) rotateY(180deg) rotateX(90deg);\n  }\n  60% {\n    transform: rotateX(310deg) rotateZ(230deg);\n  }\n  75% {\n    transform: rotateX(360deg) rotateZ(360deg);\n  }\n  100% {\n    transform: rotateX(360deg) rotateZ(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwibG9hZGVyLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9fdGhlbWVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwRUFBQTtFQUNBLHlGQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FDZkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0FEa0JKOztBQ2ZBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esd0NBQUE7RUFDQSw2QkFBQTtFQUNBLHlDQUFBO0VBQ0EseUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQkFBQTtBRGtCSjs7QUFqRUE7RUFDSSxZQUhPO0VBSVAsYUFKTztFQUtQLGtCQUxPO0VBTVAsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0FBb0VKO0FBbEVJO0VBQ0kscURBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQW9FUjtBQWpFSTtFQUNJLGdHQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNkJBQUE7QUFtRVI7QUFoRUk7RUFDSSxrQ0FBQTtBQWtFUjtBQS9ESTtFQUNJLGtEQUFBO0FBaUVSO0FBOURJO0VBQ0ksa0RBQUE7QUFnRVI7QUE3REk7RUFDSSxpREFBQTtBQStEUjtBQTVESTtFQUNJLGlEQUFBO0FBOERSO0FBM0RJO0VBQ0ksa0RBQUE7QUE2RFI7O0FBekRBO0VBQ0k7SUFDSSxzQ0FBQTtFQTRETjtFQXpERTtJQUNJLHVDQUFBO0VBMkROO0VBeERFO0lBQ0ksd0NBQUE7RUEwRE47RUF2REU7SUFDSSx3REFBQTtFQXlETjtFQXRERTtJQUNJLDBDQUFBO0VBd0ROO0VBckRFO0lBQ0ksMENBQUE7RUF1RE47RUFwREU7SUFDSSwwQ0FBQTtFQXNETjtBQUNGIiwiZmlsZSI6ImxvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgICAtLWJsYWNrOiBibGFjaztcbiAgICAtLXdoaXRlOiB3aGl0ZTtcbiAgICAtLXdoaXRlLTMwOiByZ2IoMjU1IDI1NSAyNTUgLyAzMCUpO1xuICAgIC0tYmx1ZTogIzA4OWVlNTtcbiAgICAtLWJsdWUtNTA6ICMwODllZTU2OTtcbiAgICAtLWJnLWRhcms6IGJsYWNrO1xuICAgIC0tYmctMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1kYXJrLTMwOiByZ2IoMCAwIDAgLyAzMCUpOztcbiAgICAtLWJnLWRhcmstNjA6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC0tYm94LXNoYWRvdzogMCAwIDVweCAwcHggcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xufVxuIiwiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3RoZW1lc1wiO1xuXG4kQ3ViZVNpemU6IDE1MHB4O1xuXG4uY3ViZS1sb2FkZXIge1xuICAgIHdpZHRoOiAkQ3ViZVNpemU7XG4gICAgaGVpZ2h0OiAkQ3ViZVNpemU7XG4gICAgbGluZS1oZWlnaHQ6ICRDdWJlU2l6ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgMC4xcztcbiAgICBwZXJzcGVjdGl2ZTogOTk5OXB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIG1hcmdpbjogLTUwcHggMCAwIC01MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgYW5pbWF0aW9uOiBzcGluIDVzIGluZmluaXRlIGZvcndhcmRzO1xuXG4gICAgLnByb2ZpbGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcHJvZmlsZS9wcm9maWxlLXNtYWxsLnBuZycpICFpbXBvcnRhbnQ7XG4gICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgLmN1YmUtZmFjZSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAycHggMXB4IHZhcigtLWFjY2VudC1jb2xvci1vcGFxdWUpLCAwIDAgMXB4IDFweCB2YXIoLS1hY2NlbnQtY29sb3Itb3BhcXVlKTtcbiAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdWJlLWZhY2UpO1xuICAgICAgICBjb2xvcjogdmFyKC0tY3ViZS1pY29uLWNvbG9yKTtcbiAgICB9XG5cbiAgICAuY3ViZS1mYWNlLWZyb250IHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCBjYWxjKCRDdWJlU2l6ZSAvIDIpKTtcbiAgICB9XG5cbiAgICAuY3ViZS1mYWNlLWJhY2sge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGUzZCgwLCAwLCBjYWxjKCRDdWJlU2l6ZSAvIDIpKTtcbiAgICB9XG5cbiAgICAuY3ViZS1mYWNlLWxlZnQge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGUzZCgwLCAwLCBjYWxjKCRDdWJlU2l6ZSAvIDIpKTtcbiAgICB9XG5cbiAgICAuY3ViZS1mYWNlLXJpZ2h0IHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGUzZCgwLCAwLCBjYWxjKCRDdWJlU2l6ZSAvIDIpKTtcbiAgICB9XG5cbiAgICAuY3ViZS1mYWNlLXRvcCB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlM2QoMCwgMCwgY2FsYygkQ3ViZVNpemUgLyAyKSk7XG4gICAgfVxuXG4gICAgLmN1YmUtZmFjZS1ib3R0b20ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGUzZCgwLCAwLCBjYWxjKGNhbGMoJEN1YmVTaXplIC8gMikpKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcbiAgICB9XG5cbiAgICAxNSUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVooMGRlZyk7XG4gICAgfVxuXG4gICAgMzAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDQ1ZGVnKSByb3RhdGVaKDQ1ZGVnKTtcbiAgICB9XG5cbiAgICA0NSUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVkoMTgwZGVnKSByb3RhdGVYKDkwZGVnKTtcbiAgICB9XG5cbiAgICA2MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMzEwZGVnKSByb3RhdGVaKDIzMGRlZyk7XG4gICAgfVxuXG4gICAgNzUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDM2MGRlZykgcm90YXRlWigzNjBkZWcpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMzYwZGVnKSByb3RhdGVaKDM2MGRlZyk7XG4gICAgfVxufVxuXG5cbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuW2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS01MCk7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmctZGFyay02MCk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iZy1kYXJrLTYwKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmctZGFyay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmxhY2spO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNTApO1xuICAgIC0tYmctY29sb3I6IHZhcigtLWJnLWRhcmspO1xuICAgIC0tYmctY29sb3ItMDogdmFyKC0tYmctMCk7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS1iZy0wKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLWJnLWNvbG9yLTApO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0tYmctZGFyay02MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsdWUpO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9fdGhlbWVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwRUFBQTtFQUNBLHlGQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FDZkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0FEa0JKOztBQ2ZBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esd0NBQUE7RUFDQSw2QkFBQTtFQUNBLHlDQUFBO0VBQ0EseUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQkFBQTtBRGtCSjs7QUFqRUE7RUFDSSxZQUhPO0VBSVAsYUFKTztFQUtQLGtCQUxPO0VBTVAsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0FBb0VKO0FBbEVJO0VBQ0kscURBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQW9FUjtBQWpFSTtFQUNJLGdHQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNkJBQUE7QUFtRVI7QUFoRUk7RUFDSSxrQ0FBQTtBQWtFUjtBQS9ESTtFQUNJLGtEQUFBO0FBaUVSO0FBOURJO0VBQ0ksa0RBQUE7QUFnRVI7QUE3REk7RUFDSSxpREFBQTtBQStEUjtBQTVESTtFQUNJLGlEQUFBO0FBOERSO0FBM0RJO0VBQ0ksa0RBQUE7QUE2RFI7O0FBekRBO0VBQ0k7SUFDSSxzQ0FBQTtFQTRETjtFQXpERTtJQUNJLHVDQUFBO0VBMkROO0VBeERFO0lBQ0ksd0NBQUE7RUEwRE47RUF2REU7SUFDSSx3REFBQTtFQXlETjtFQXRERTtJQUNJLDBDQUFBO0VBd0ROO0VBckRFO0lBQ0ksMENBQUE7RUF1RE47RUFwREU7SUFDSSwwQ0FBQTtFQXNETjtBQUNGO0FBQ0EsNHFRQUE0cVEiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4gICAgLS1ibGFjazogYmxhY2s7XG4gICAgLS13aGl0ZTogd2hpdGU7XG4gICAgLS13aGl0ZS0zMDogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLWJsdWU6ICMwODllZTU7XG4gICAgLS1ibHVlLTUwOiAjMDg5ZWU1Njk7XG4gICAgLS1iZy1kYXJrOiBibGFjaztcbiAgICAtLWJnLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctZGFyay0zMDogcmdiKDAgMCAwIC8gMzAlKTs7XG4gICAgLS1iZy1kYXJrLTYwOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtLWJveC1zaGFkb3c6IDAgMCA1cHggMHB4IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIjtcblxuJEN1YmVTaXplOiAxNTBweDtcblxuLmN1YmUtbG9hZGVyIHtcbiAgICB3aWR0aDogJEN1YmVTaXplO1xuICAgIGhlaWdodDogJEN1YmVTaXplO1xuICAgIGxpbmUtaGVpZ2h0OiAkQ3ViZVNpemU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIDAuMXM7XG4gICAgcGVyc3BlY3RpdmU6IDk5OTlweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBtYXJnaW46IC01MHB4IDAgMCAtNTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIGFuaW1hdGlvbjogc3BpbiA1cyBpbmZpbml0ZSBmb3J3YXJkcztcblxuICAgIC5wcm9maWxlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3Byb2ZpbGUvcHJvZmlsZS1zbWFsbC5wbmcnKSAhaW1wb3J0YW50O1xuICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIC5jdWJlLWZhY2Uge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMnB4IDFweCB2YXIoLS1hY2NlbnQtY29sb3Itb3BhcXVlKSwgMCAwIDFweCAxcHggdmFyKC0tYWNjZW50LWNvbG9yLW9wYXF1ZSk7XG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3ViZS1mYWNlKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWN1YmUtaWNvbi1jb2xvcik7XG4gICAgfVxuXG4gICAgLmN1YmUtZmFjZS1mcm9udCB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgY2FsYygkQ3ViZVNpemUgLyAyKSk7XG4gICAgfVxuXG4gICAgLmN1YmUtZmFjZS1iYWNrIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZykgdHJhbnNsYXRlM2QoMCwgMCwgY2FsYygkQ3ViZVNpemUgLyAyKSk7XG4gICAgfVxuXG4gICAgLmN1YmUtZmFjZS1sZWZ0IHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlM2QoMCwgMCwgY2FsYygkQ3ViZVNpemUgLyAyKSk7XG4gICAgfVxuXG4gICAgLmN1YmUtZmFjZS1yaWdodCB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlM2QoMCwgMCwgY2FsYygkQ3ViZVNpemUgLyAyKSk7XG4gICAgfVxuXG4gICAgLmN1YmUtZmFjZS10b3Age1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZTNkKDAsIDAsIGNhbGMoJEN1YmVTaXplIC8gMikpO1xuICAgIH1cblxuICAgIC5jdWJlLWZhY2UtYm90dG9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlM2QoMCwgMCwgY2FsYyhjYWxjKCRDdWJlU2l6ZSAvIDIpKSk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XG4gICAgfVxuXG4gICAgMTUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSByb3RhdGVaKDBkZWcpO1xuICAgIH1cblxuICAgIDMwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCg0NWRlZykgcm90YXRlWig0NWRlZyk7XG4gICAgfVxuXG4gICAgNDUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVZKDE4MGRlZykgcm90YXRlWCg5MGRlZyk7XG4gICAgfVxuXG4gICAgNjAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDMxMGRlZykgcm90YXRlWigyMzBkZWcpO1xuICAgIH1cblxuICAgIDc1JSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgzNjBkZWcpIHJvdGF0ZVooMzYwZGVnKTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDM2MGRlZykgcm90YXRlWigzNjBkZWcpO1xuICAgIH1cbn1cblxuXG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNTApO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3ItMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0td2hpdGUpO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJnLWRhcmstNjApO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmctZGFyay02MCk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJnLWRhcmstNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsYWNrKTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTUwKTtcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1iZy1kYXJrKTtcbiAgICAtLWJnLWNvbG9yLTA6IHZhcigtLWJnLTApO1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0tYmctMCk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0wKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLWJnLWRhcmstNjApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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



function ProjectsComponent_div_8_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13)(1, "span", 14);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div")(2, "div", 7)(3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProjectsComponent_div_8_span_10_Template, 3, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const project_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-aos-delay", i_r3 * 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r2.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", project_r2.CompanyLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r2.Description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", project_r2.Technologies);
  }
}
function ProjectsComponent_div_16_a_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r6["DemoLink"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function ProjectsComponent_div_16_a_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r6["GithubLink"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function ProjectsComponent_div_16_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13)(1, "span", 14);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div")(2, "div", 7)(3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectsComponent_div_16_a_6_Template, 2, 1, "a", 16)(7, ProjectsComponent_div_16_a_7_Template, 2, 1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProjectsComponent_div_16_span_11_Template, 3, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const project_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-aos-delay", i_r7 * 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r6.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r6["DemoLink"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r6["GithubLink"]);
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
    consts: [[1, "container"], [1, "section-box"], [1, "section-title"], [1, "grid"], ["class", "grid-item project-box", "data-aos", "fade-up", "data-aos-duration", "500", 4, "ngFor", "ngForOf"], [1, ""], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "grid-item", "project-box"], [1, "header"], [1, "title"], [1, "project-img"], ["alt", "CompanyLogo", 3, "src"], [1, "description"], ["class", "skills", 4, "ngFor", "ngForOf"], [1, "skills"], [1, "highlight"], [1, "external-links"], ["style", "color: inherit", "target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 2, "color", "inherit", 3, "href"], [1, "external-link-btn", "fas", "fa-external-link-alt"], ["id", "ghLink", 1, "external-link-btn", "fab", "fa-github"]],
    template: function ProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "div")(4, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProjectsComponent_div_8_Template, 11, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1)(11, "div", 5)(12, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProjectsComponent_div_16_Template, 12, 6, "div", 4);
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
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --blue: #089ee5;\n  --blue-50: #089ee569;\n  --bg-dark: black;\n  --bg-0: transparent;\n  --bg-dark-30: rgb(0 0 0 / 30%);\n  --bg-dark-60: rgb(0 0 0 / 60%);\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-50);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --border-color: var(--bg-dark-60);\n  --border: 1px solid var(--bg-dark-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white);\n  --cube-face: var(--bg-dark-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-50);\n  --bg-color: var(--bg-dark);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--bg-dark-30);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--bg-dark-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--bg-dark-30);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--bg-dark-30);\n  --menu-bar-bg-color: var(--bg-dark-30);\n  --menu-overlay-bg-color: var(--bg-dark-60);\n  --cube-face: var(--bg-dark-30);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--blue);\n}\n\n.project-box[_ngcontent-%COMP%] {\n  height: 350px;\n  border: var(--border);\n  box-shadow: var(--box-shadow);\n  transition: var(--transition);\n  background-color: var(--bg-color-30);\n  border-radius: var(--border-radius);\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: flex-start;\n  position: relative;\n  padding: 1.5rem;\n}\n.project-box[_ngcontent-%COMP%]:after {\n  background: none repeat scroll 0 0 transparent;\n  bottom: 0px;\n  content: \"\";\n  display: block;\n  height: 3px;\n  left: 50%;\n  position: absolute;\n  background: var(--accent-color);\n  transition: width 0.3s ease 0s, left 0.3s ease 0s;\n  width: 0;\n}\n.project-box[_ngcontent-%COMP%]:hover:after {\n  width: 100%;\n  left: 0;\n}\n.project-box[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.project-box[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  float: left;\n  text-align: start;\n}\n.project-box[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .external-links[_ngcontent-%COMP%], .project-box[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .project-img[_ngcontent-%COMP%] {\n  text-align: end;\n}\n.project-box[_ngcontent-%COMP%]   .project-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 30px;\n  margin-bottom: 10px;\n}\n.project-box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 22px;\n  transition: var(--transition);\n}\n.project-box[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 17px;\n}\n.project-box[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 1.75;\n  font-family: var(--code-font);\n}\n.project-box[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  padding-bottom: 3.5px;\n}\n.project-box[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]:after {\n  content: var(--divider);\n  color: var(--primary-color);\n  font-weight: 600;\n  opacity: 0.7;\n  margin: 5px;\n}\n.project-box[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 30% 30% 30%;\n  grid-template-rows: auto;\n  gap: 15px 15px;\n  grid-template-areas: \". . .\" \". . .\" \". . .\";\n}\n.grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%] {\n  background-color: var(--bg-color-30);\n}\n.grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n\n.external-link-btn[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n\n@media (max-width: 1400px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 50% 50%;\n    grid-template-rows: auto auto;\n    grid-template-areas: \". .\" \". .\" \". .\";\n  }\n}\n@media (max-width: 1000px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 100%;\n    grid-template-rows: auto;\n    grid-template-areas: \".\" \".\" \".\";\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwicHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QUNmQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7QURrQko7O0FDZkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDJCQUFBO0FEa0JKOztBQW5FQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFzRUo7QUFuRUk7RUFDSSw4Q0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGlEQUFBO0VBQ0EsUUFBQTtBQXFFUjtBQWxFSTtFQUNJLFdBQUE7RUFDQSxPQUFBO0FBb0VSO0FBakVJO0VBQ0ksV0FBQTtBQW1FUjtBQWxFUTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQW9FWjtBQWxFUTtFQUNJLGVBQUE7QUFvRVo7QUEvRFE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFpRVo7QUE3REk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQStEUjtBQTVESTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBOERSO0FBM0RJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUE2RFI7QUEzRFE7RUFDSSxxQkFBQTtBQTZEWjtBQTFEUTtFQUNJLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBNERaO0FBekRRO0VBQ0ksV0FBQTtBQTJEWjs7QUF0REE7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSw0Q0FDQTtBQXdESjtBQXBESTtFQUNJLG9DQUFBO0FBc0RSO0FBcERRO0VBQ0ksMkJBQUE7QUFzRFo7O0FBaERBO0VBQ0ksY0FBQTtBQW1ESjs7QUFoREE7RUFDSTtJQUNJLDhCQUFBO0lBQ0EsNkJBQUE7SUFDQSxzQ0FDSjtFQWtERjtBQUNGO0FBN0NBO0VBQ0k7SUFDSSwyQkFBQTtJQUNBLHdCQUFBO0lBQ0EsZ0NBQ0o7RUE4Q0Y7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgICAtLWJsYWNrOiBibGFjaztcbiAgICAtLXdoaXRlOiB3aGl0ZTtcbiAgICAtLXdoaXRlLTMwOiByZ2IoMjU1IDI1NSAyNTUgLyAzMCUpO1xuICAgIC0tYmx1ZTogIzA4OWVlNTtcbiAgICAtLWJsdWUtNTA6ICMwODllZTU2OTtcbiAgICAtLWJnLWRhcms6IGJsYWNrO1xuICAgIC0tYmctMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1kYXJrLTMwOiByZ2IoMCAwIDAgLyAzMCUpOztcbiAgICAtLWJnLWRhcmstNjA6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC0tYm94LXNoYWRvdzogMCAwIDVweCAwcHggcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xufVxuIiwiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3RoZW1lc1wiO1xuXG4ucHJvamVjdC1ib3gge1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLTMwKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG5cblxuICAgICY6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlIDBzLCBsZWZ0IDAuM3MgZWFzZSAwcztcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgfVxuXG4gICAgJjpob3ZlcjphZnRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgIC5oZWFkZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmV4dGVybmFsLWxpbmtzLCAucHJvamVjdC1pbWcge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnByb2plY3QtaW1nIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgICBtYXJnaW46IDAgMCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgIH1cblxuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgfVxuXG4gICAgLnNraWxscyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb2RlLWZvbnQpO1xuXG4gICAgICAgIC5oaWdobGlnaHQge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMuNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OnZhcigtLWRpdmlkZXIpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgMzAlIDMwJTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gICAgZ2FwOiAxNXB4IDE1cHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcIi4gLiAuXCJcbiAgICBcIi4gLiAuXCJcbiAgICBcIi4gLiAuXCI7XG5cbiAgICAuZ3JpZC1pdGVtIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItMzApO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi5leHRlcm5hbC1saW5rLWJ0biB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDE0MDBweCkge1xuICAgIC5ncmlkIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcIi4gLlwiXG4gICAgXCIuIC5cIlxuICAgIFwiLiAuXCI7XG4gICAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAuZ3JpZCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiLlwiXG4gICAgXCIuXCJcbiAgICBcIi5cIjtcbiAgICB9XG59XG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNTApO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3ItMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0td2hpdGUpO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJnLWRhcmstNjApO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmctZGFyay02MCk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJnLWRhcmstNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsYWNrKTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTUwKTtcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1iZy1kYXJrKTtcbiAgICAtLWJnLWNvbG9yLTA6IHZhcigtLWJnLTApO1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0tYmctMCk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0wKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLWJnLWRhcmstNjApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEVBQUE7RUFDQSx5RkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQ0NKOztBQ2ZBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtBRGtCSjs7QUNmQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsNkJBQUE7RUFDQSx5Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsMENBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMkJBQUE7QURrQko7O0FBbkVBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQXNFSjtBQW5FSTtFQUNJLDhDQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaURBQUE7RUFDQSxRQUFBO0FBcUVSO0FBbEVJO0VBQ0ksV0FBQTtFQUNBLE9BQUE7QUFvRVI7QUFqRUk7RUFDSSxXQUFBO0FBbUVSO0FBbEVRO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBb0VaO0FBbEVRO0VBQ0ksZUFBQTtBQW9FWjtBQS9EUTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQWlFWjtBQTdESTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FBK0RSO0FBNURJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUE4RFI7QUEzREk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQTZEUjtBQTNEUTtFQUNJLHFCQUFBO0FBNkRaO0FBMURRO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUE0RFo7QUF6RFE7RUFDSSxXQUFBO0FBMkRaOztBQXREQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLDRDQUNBO0FBd0RKO0FBcERJO0VBQ0ksb0NBQUE7QUFzRFI7QUFwRFE7RUFDSSwyQkFBQTtBQXNEWjs7QUFoREE7RUFDSSxjQUFBO0FBbURKOztBQWhEQTtFQUNJO0lBQ0ksOEJBQUE7SUFDQSw2QkFBQTtJQUNBLHNDQUNKO0VBa0RGO0FBQ0Y7QUE3Q0E7RUFDSTtJQUNJLDJCQUFBO0lBQ0Esd0JBQUE7SUFDQSxnQ0FDSjtFQThDRjtBQUNGO0FBRUEsNG5TQUE0blMiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4gICAgLS1ibGFjazogYmxhY2s7XG4gICAgLS13aGl0ZTogd2hpdGU7XG4gICAgLS13aGl0ZS0zMDogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLWJsdWU6ICMwODllZTU7XG4gICAgLS1ibHVlLTUwOiAjMDg5ZWU1Njk7XG4gICAgLS1iZy1kYXJrOiBibGFjaztcbiAgICAtLWJnLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctZGFyay0zMDogcmdiKDAgMCAwIC8gMzAlKTs7XG4gICAgLS1iZy1kYXJrLTYwOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtLWJveC1zaGFkb3c6IDAgMCA1cHggMHB4IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIjtcblxuLnByb2plY3QtYm94IHtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0zMCk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMS41cmVtO1xuXG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZSAwcywgbGVmdCAwLjNzIGVhc2UgMHM7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgIH1cblxuICAgICY6aG92ZXI6YWZ0ZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIC5leHRlcm5hbC1saW5rcywgLnByb2plY3QtaW1nIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5wcm9qZWN0LWltZyB7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAwIDAgMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICB9XG5cbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgIH1cblxuICAgIC5za2lsbHMge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tY29kZS1mb250KTtcblxuICAgICAgICAuaGlnaGxpZ2h0IHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzLjVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDp2YXIoLS1kaXZpZGVyKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAlIDMwJSAzMCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICAgIGdhcDogMTVweCAxNXB4O1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCIuIC4gLlwiXG4gICAgXCIuIC4gLlwiXG4gICAgXCIuIC4gLlwiO1xuXG4gICAgLmdyaWQtaXRlbSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLTMwKTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4uZXh0ZXJuYWwtbGluay1idG4ge1xuICAgIG1hcmdpbjogMCAxMHB4O1xufVxuXG5AbWVkaWEobWF4LXdpZHRoOiAxNDAwcHgpIHtcbiAgICAuZ3JpZCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCIuIC5cIlxuICAgIFwiLiAuXCJcbiAgICBcIi4gLlwiO1xuICAgIH1cbn1cblxuQG1lZGlhKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgLmdyaWQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcIi5cIlxuICAgIFwiLlwiXG4gICAgXCIuXCI7XG4gICAgfVxufVxuIiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5bZGF0YS10aGVtZT1cImxpZ2h0XCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTUwKTtcbiAgICAtLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJnLWNvbG9yLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1iZy1kYXJrLTYwKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJnLWRhcmstNjApO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1iZy1kYXJrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG59XG5cbltkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS01MCk7XG4gICAgLS1iZy1jb2xvcjogdmFyKC0tYmctZGFyayk7XG4gICAgLS1iZy1jb2xvci0wOiB2YXIoLS1iZy0wKTtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLWJnLTApO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1iZy1kYXJrLTMwKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmctY29sb3ItMCk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLWJnLWRhcmstMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS1iZy1kYXJrLTYwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmctZGFyay0zMCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmx1ZSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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