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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 168);
/* harmony import */ var _components_general_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/general/menu/menu.component */ 156);
/* harmony import */ var _components_general_background_background_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/general/background/background.component */ 7216);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 4040);







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
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Meta));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 3,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-menu")(1, "router-outlet")(2, "app-background");
      }
    },
    dependencies: [_components_general_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent, _components_general_background_background_component__WEBPACK_IMPORTED_MODULE_2__.BackgroundComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet],
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 2676);


const _c0 = a0 => ({
  "background-image": a0
});
class BackgroundComponent {
  constructor() {
    this.BG_IMG = 'assets/images/background/code.png';
  }
  static #_ = this.ɵfac = function BackgroundComponent_Factory(t) {
    return new (t || BackgroundComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BackgroundComponent,
    selectors: [["app-background"]],
    decls: 1,
    vars: 3,
    consts: [[1, "bg-img", 3, "ngStyle"]],
    template: function BackgroundComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, "url(" + ctx.BG_IMG + ")"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
    styles: [".bg-img[_ngcontent-%COMP%] {\n  background: #0f0f0f no-repeat;\n  transform-origin: center;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhY2tncm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUFESiIsImZpbGUiOiJiYWNrZ3JvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy92YXJpYWJsZXNcIjtcblxuLmJnLWltZyB7XG4gICAgYmFja2dyb3VuZDogJEJhY2tncm91bmQgbm8tcmVwZWF0O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogLTE7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL2JhY2tncm91bmQvYmFja2dyb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQURKO0FBQ0EsNHJCQUE0ckIiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3ZhcmlhYmxlc1wiO1xuXG4uYmctaW1nIHtcbiAgICBiYWNrZ3JvdW5kOiAkQmFja2dyb3VuZCBuby1yZXBlYXQ7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAtMTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu/menu.component */ 156);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 2584);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 1332);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 5531);
/* harmony import */ var _background_background_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background/background.component */ 7216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4280);










function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class GeneralModule {
  static #_ = this.ɵfac = function GeneralModule_Factory(t) {
    return new (t || GeneralModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: GeneralModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient]
      }
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](GeneralModule, {
    declarations: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent, _background_background_component__WEBPACK_IMPORTED_MODULE_1__.BackgroundComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
    exports: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent, _background_background_component__WEBPACK_IMPORTED_MODULE_1__.BackgroundComponent]
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
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 3291);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/language/language.service */ 9928);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 2584);









function MenuComponent_div_5_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 9)(1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_div_5_li_2_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const item_r2 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      ctx_r4.navigate(item_r2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.menuOpen = !ctx_r4.menuOpen);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r2.label, " ");
  }
}
function MenuComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "ol", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MenuComponent_div_5_li_2_Template, 3, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@OutAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, "Menu.NavItems"));
  }
}
const _c0 = a0 => ({
  "menu-open": a0
});
class MenuComponent {
  constructor(router, languageService) {
    this.router = router;
    this.languageService = languageService;
    this.menuOpen = false;
    this.languageFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl();
    this.fileName = "";
  }
  ngOnInit() {
    this.languageFormControl.setValue(this.languageService.DEFAULT);
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
  static #_ = this.ɵfac = function MenuComponent_Factory(t) {
    return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MenuComponent,
    selectors: [["app-menu"]],
    decls: 6,
    vars: 4,
    consts: [[1, "menu-btn", 3, "click"], [1, "menu-container", 3, "ngClass"], [1, "bar1"], [1, "bar2"], [1, "bar3"], ["class", "menu-overlay", "data-aos", "fade-out", 4, "ngIf"], ["data-aos", "fade-out", 1, "menu-overlay"], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "menu-items"], ["class", "menu-item", 4, "ngFor", "ngForOf"], [1, "menu-item"], [3, "click"]],
    template: function MenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_Template_div_click_0_listener() {
          return ctx.menuOpen = !ctx.menuOpen;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MenuComponent_div_5_Template, 4, 4, "div", 5);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx.menuOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.menuOpen);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
    styles: [".menu-btn[_ngcontent-%COMP%] {\n  font-size: 35px;\n  position: fixed;\n  top: 0;\n  right: 0;\n  margin-right: 40px;\n  margin-top: 30px;\n  color: #e6f1ff;\n  cursor: pointer;\n  z-index: 20;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%] {\n  display: block;\n  cursor: pointer;\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  width: 35px;\n  height: 2px;\n  background-color: #e6f1ff;\n  margin: 6px 0;\n  transition: 0.4s;\n  box-shadow: 2px 2px 10px 0px #000;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\n  background-color: #089ee5;\n  box-shadow: none;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%] {\n  transform: translate(0, 10px) rotate(-45deg);\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\n  transform: translate(0, -6px) rotate(45deg);\n}\n\n.menu-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background: #0f0f0f;\n  z-index: 10;\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 15%;\n  left: 38%;\n  width: 100vw;\n  margin: auto;\n  list-style: none;\n  color: #e6f1ff;\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  font-size: 50px;\n  cursor: pointer;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:before {\n  content: \"<\";\n  opacity: 0;\n  margin-right: 10px;\n  color: #089ee5;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:after {\n  content: \">\";\n  opacity: 0;\n  margin-left: 10px;\n  color: #089ee5;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover {\n  color: #089ee5;\n  transform: translateX(5px);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover:before {\n  content: \"<\";\n  opacity: 1;\n  margin: 0;\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover:after {\n  content: \">\";\n  opacity: 1;\n  margin: 0;\n}\n\n@media (max-width: 827px) {\n  .menu-items[_ngcontent-%COMP%] {\n    left: 15% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0NUTTtFRFVOLGVDRks7RURHTCxXQUFBO0FBREo7QUFHSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0RBQUE7QUFEUjtBQUdRO0VBQ0ksMERDWkM7RURhRCxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQ3RCRjtFRHVCRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtBQURaO0FBS1k7RUFDSSx5QkM3QlA7RUQ4Qk8sZ0JBQUE7QUFIaEI7QUFNWTtFQUNJLDRDQUFBO0FBSmhCO0FBT1k7RUFDSSxVQUFBO0FBTGhCO0FBUVk7RUFDSSwyQ0FBQTtBQU5oQjs7QUFhQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsbUJDckRTO0VEc0RULFdBQUE7QUFWSjtBQVlJO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNDbEVFO0FEd0RWO0FBWVE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVDL0RIO0VEZ0VHLDBEQ2pFQztBRHVEYjtBQVlZO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGNDN0VQO0VEOEVPLDBEQ3hFSDtBRDhEYjtBQVlZO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNDcEZQO0VEcUZPLDBEQy9FSDtBRHFFYjtBQVlZO0VBQ0ksY0N4RlA7RUR5Rk8sMEJBQUE7QUFWaEI7QUFXZ0I7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFUcEI7QUFXZ0I7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFUcEI7O0FBZ0JBO0VBQ0k7SUFDSSxvQkFBQTtFQWJOO0FBQ0YiLCJmaWxlIjoibWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvdmFyaWFibGVzXCI7XG5cbi5tZW51LWJ0biB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgY29sb3I6ICRQcmltYXJ5O1xuICAgIGN1cnNvcjogJEN1cnNvcjtcbiAgICB6LWluZGV4OiAyMDtcblxuICAgIC5tZW51LWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0xNXB4IHJnYmEoMiwgMTIsIDI3LCAwLjcpO1xuXG4gICAgICAgIC5iYXIxLCAuYmFyMiwgLmJhcjMge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogJFRyYW5zaXRpb247XG4gICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJFByaW1hcnk7XG4gICAgICAgICAgICBtYXJnaW46IDZweCAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAwcHggIzAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgICYubWVudS1vcGVuIHtcbiAgICAgICAgICAgIC5iYXIxLCAuYmFyMiwgLmJhcjMge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRBY2NlbnQ7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJhcjEge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpIHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmFyMiB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJhcjMge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC02cHgpIHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuLm1lbnUtb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQ6ICRCYWNrZ3JvdW5kO1xuICAgIHotaW5kZXg6IDEwO1xuXG4gICAgLm1lbnUtaXRlbXMge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMTUlO1xuICAgICAgICBsZWZ0OiAzOCU7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBjb2xvcjogJFByaW1hcnk7XG5cbiAgICAgICAgLm1lbnUtaXRlbSB7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgIGN1cnNvcjogJEN1cnNvcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICRUcmFuc2l0aW9uO1xuXG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJzwnO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkQWNjZW50O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICRUcmFuc2l0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJz4nO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRBY2NlbnQ7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJFRyYW5zaXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJEFjY2VudDtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICc8JztcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJz4nO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODI3cHgpIHtcbiAgICAubWVudS1pdGVtcyB7XG4gICAgICAgIGxlZnQ6IDE1JSAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuIiwiJFByaW1hcnk6ICNlNmYxZmY7XG4kQWNjZW50OiAjMDg5ZWU1O1xuJEFjY2VudE9wYXF1ZTogIzA4OWVlNTY5O1xuJEJhY2tncm91bmQ6ICMwZjBmMGY7XG4kQmdPcGFxdWU6IHJnYmEoMTUsIDE1LCAxNSwgMC42OCk7XG5cbiREaXZpZGVyOiBcIi9cIjtcbiRUcmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuJEN1cnNvcjogcG9pbnRlcjtcbiRNYWluRm9udDogTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kQ29kZUZvbnQ6ICdTRiBNb25vJywgJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0NUTTtFRFVOLGVDRks7RURHTCxXQUFBO0FBREo7QUFHSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0RBQUE7QUFEUjtBQUdRO0VBQ0ksMERDWkM7RURhRCxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQ3RCRjtFRHVCRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtBQURaO0FBS1k7RUFDSSx5QkM3QlA7RUQ4Qk8sZ0JBQUE7QUFIaEI7QUFNWTtFQUNJLDRDQUFBO0FBSmhCO0FBT1k7RUFDSSxVQUFBO0FBTGhCO0FBUVk7RUFDSSwyQ0FBQTtBQU5oQjs7QUFhQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsbUJDckRTO0VEc0RULFdBQUE7QUFWSjtBQVlJO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNDbEVFO0FEd0RWO0FBWVE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVDL0RIO0VEZ0VHLDBEQ2pFQztBRHVEYjtBQVlZO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGNDN0VQO0VEOEVPLDBEQ3hFSDtBRDhEYjtBQVlZO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNDcEZQO0VEcUZPLDBEQy9FSDtBRHFFYjtBQVlZO0VBQ0ksY0N4RlA7RUR5Rk8sMEJBQUE7QUFWaEI7QUFXZ0I7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFUcEI7QUFXZ0I7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFUcEI7O0FBZ0JBO0VBQ0k7SUFDSSxvQkFBQTtFQWJOO0FBQ0Y7QUFDQSx3b0tBQXdvSyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvdmFyaWFibGVzXCI7XG5cbi5tZW51LWJ0biB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgY29sb3I6ICRQcmltYXJ5O1xuICAgIGN1cnNvcjogJEN1cnNvcjtcbiAgICB6LWluZGV4OiAyMDtcblxuICAgIC5tZW51LWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0xNXB4IHJnYmEoMiwgMTIsIDI3LCAwLjcpO1xuXG4gICAgICAgIC5iYXIxLCAuYmFyMiwgLmJhcjMge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogJFRyYW5zaXRpb247XG4gICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJFByaW1hcnk7XG4gICAgICAgICAgICBtYXJnaW46IDZweCAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAwcHggIzAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgICYubWVudS1vcGVuIHtcbiAgICAgICAgICAgIC5iYXIxLCAuYmFyMiwgLmJhcjMge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRBY2NlbnQ7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJhcjEge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpIHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmFyMiB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJhcjMge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC02cHgpIHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuLm1lbnUtb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQ6ICRCYWNrZ3JvdW5kO1xuICAgIHotaW5kZXg6IDEwO1xuXG4gICAgLm1lbnUtaXRlbXMge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMTUlO1xuICAgICAgICBsZWZ0OiAzOCU7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBjb2xvcjogJFByaW1hcnk7XG5cbiAgICAgICAgLm1lbnUtaXRlbSB7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgIGN1cnNvcjogJEN1cnNvcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICRUcmFuc2l0aW9uO1xuXG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJzwnO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkQWNjZW50O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICRUcmFuc2l0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJz4nO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRBY2NlbnQ7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJFRyYW5zaXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJEFjY2VudDtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICc8JztcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJz4nO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODI3cHgpIHtcbiAgICAubWVudS1pdGVtcyB7XG4gICAgICAgIGxlZnQ6IDE1JSAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuIiwiJFByaW1hcnk6ICNlNmYxZmY7XG4kQWNjZW50OiAjMDg5ZWU1O1xuJEFjY2VudE9wYXF1ZTogIzA4OWVlNTY5O1xuJEJhY2tncm91bmQ6ICMwZjBmMGY7XG4kQmdPcGFxdWU6IHJnYmEoMTUsIDE1LCAxNSwgMC42OCk7XG5cbiREaXZpZGVyOiBcIi9cIjtcbiRUcmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuJEN1cnNvcjogcG9pbnRlcjtcbiRNYWluRm9udDogTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kQ29kZUZvbnQ6ICdTRiBNb25vJywgJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 2584);




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
    return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_language_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["app-about"]],
    decls: 22,
    vars: 15,
    consts: [[1, "container"], [1, "section-box-about"], [1, "content"], ["data-aos", "fade-right", "data-aos-duration", "500"], [1, "title"], [1, "about-title"], ["data-aos", "fade-right", "data-aos-delay", "100", "data-aos-duration", "500", 1, "name"], ["data-aos", "fade-right", "data-aos-delay", "200", "data-aos-duration", "500", 1, "role"], ["data-aos", "fade-right", "data-aos-delay", "300", "data-aos-duration", "500", 1, "about-description"], [1, "mt-4", 3, "innerHTML"], ["data-aos", "fade-right", "data-aos-delay", "400", "data-aos-duration", "500", 1, "div-btn-about"], [1, "main-btn", "resume-btn", 3, "click"]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5)(9, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10)(19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AboutComponent_Template_a_click_19_listener() {
          return ctx.downloadResume();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 5, "About.Pretitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 7, "About.Name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 9, "About.Role"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 11, "About.Description"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 13, "About.ResumeBtn"), " ");
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    styles: [".container[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 200px;\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #089ee5;\n  margin: 0 0 20px 3px;\n  font-size: 16px;\n  font-weight: normal;\n  font-family: Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  line-height: 1.1;\n  margin: 0;\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 80px;\n  color: #e6f1ff;\n  font-family: Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 60px;\n  color: #e6f1ff;\n  font-family: \"SF Mono\", \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   .about-description[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   .div-btn-about[_ngcontent-%COMP%] {\n  height: 43px;\n}\n\n@media (max-width: 480px) {\n  .name[_ngcontent-%COMP%] {\n    font-size: 45px !important;\n  }\n  .role[_ngcontent-%COMP%] {\n    font-size: 30px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0FBREo7QUFHSTtFQUNJLHNCQUFBO0FBRFI7QUFHUTtFQUNJLGlCQUFBO0FBRFo7QUFJUTtFQUVJLGNDYkg7RURjRyxvQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDREQ1REO0FETVg7QUFNUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBSlo7QUFPUTtFQUNJLGVBQUE7RUFDQSxjQzdCRjtFRDhCRSw0RENyQkQ7QURnQlg7QUFRUTtFQUNJLGVBQUE7RUFDQSxjQ25DRjtFRG9DRSxvR0MxQkQ7QURvQlg7QUFTUTtFQUNJLG1CQUFBO0FBUFo7QUFVUTtFQUNJLGdCQUFBO0FBUlo7QUFXUTtFQUNJLFlBQUE7QUFUWjs7QUFjQTtFQUNJO0lBQ0ksMEJBQUE7RUFYTjtFQWFFO0lBQ0ksMEJBQUE7RUFYTjtBQUNGIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy92YXJpYWJsZXNcIjtcblxuLmNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcblxuICAgIC5zZWN0aW9uLWJveC1hYm91dCB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBoMSB7XG5cbiAgICAgICAgICAgIGNvbG9yOiAkQWNjZW50O1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjBweCAzcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRNYWluRm9udDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyLCBoMyB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICAgICAgICAgIGNvbG9yOiAkUHJpbWFyeTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkTWFpbkZvbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBoMyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICAgICAgICBjb2xvcjogJFByaW1hcnk7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJENvZGVGb250O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFib3V0LWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGl2LWJ0bi1hYm91dCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDQzcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC5uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiA0NXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5yb2xlIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5cblxuIiwiJFByaW1hcnk6ICNlNmYxZmY7XG4kQWNjZW50OiAjMDg5ZWU1O1xuJEFjY2VudE9wYXF1ZTogIzA4OWVlNTY5O1xuJEJhY2tncm91bmQ6ICMwZjBmMGY7XG4kQmdPcGFxdWU6IHJnYmEoMTUsIDE1LCAxNSwgMC42OCk7XG5cbiREaXZpZGVyOiBcIi9cIjtcbiRUcmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuJEN1cnNvcjogcG9pbnRlcjtcbiRNYWluRm9udDogTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kQ29kZUZvbnQ6ICdTRiBNb25vJywgJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtBQURKO0FBR0k7RUFDSSxzQkFBQTtBQURSO0FBR1E7RUFDSSxpQkFBQTtBQURaO0FBSVE7RUFFSSxjQ2JIO0VEY0csb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw0RENURDtBRE1YO0FBTVE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQUpaO0FBT1E7RUFDSSxlQUFBO0VBQ0EsY0M3QkY7RUQ4QkUsNERDckJEO0FEZ0JYO0FBUVE7RUFDSSxlQUFBO0VBQ0EsY0NuQ0Y7RURvQ0Usb0dDMUJEO0FEb0JYO0FBU1E7RUFDSSxtQkFBQTtBQVBaO0FBVVE7RUFDSSxnQkFBQTtBQVJaO0FBV1E7RUFDSSxZQUFBO0FBVFo7O0FBY0E7RUFDSTtJQUNJLDBCQUFBO0VBWE47RUFhRTtJQUNJLDBCQUFBO0VBWE47QUFDRjtBQUNBLHdzRkFBd3NGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy92YXJpYWJsZXNcIjtcblxuLmNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcblxuICAgIC5zZWN0aW9uLWJveC1hYm91dCB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBoMSB7XG5cbiAgICAgICAgICAgIGNvbG9yOiAkQWNjZW50O1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjBweCAzcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRNYWluRm9udDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyLCBoMyB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICAgICAgICAgIGNvbG9yOiAkUHJpbWFyeTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkTWFpbkZvbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBoMyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICAgICAgICBjb2xvcjogJFByaW1hcnk7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJENvZGVGb250O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFib3V0LWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGl2LWJ0bi1hYm91dCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDQzcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC5uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiA0NXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5yb2xlIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5cblxuIiwiJFByaW1hcnk6ICNlNmYxZmY7XG4kQWNjZW50OiAjMDg5ZWU1O1xuJEFjY2VudE9wYXF1ZTogIzA4OWVlNTY5O1xuJEJhY2tncm91bmQ6ICMwZjBmMGY7XG4kQmdPcGFxdWU6IHJnYmEoMTUsIDE1LCAxNSwgMC42OCk7XG5cbiREaXZpZGVyOiBcIi9cIjtcbiRUcmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuJEN1cnNvcjogcG9pbnRlcjtcbiRNYWluRm9udDogTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kQ29kZUZvbnQ6ICdTRiBNb25vJywgJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
    decls: 15,
    vars: 12,
    consts: [[1, "container"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "contact-box"], [1, "contact-pre-title"], [1, "contact-title"], ["data-aos", "fade-up", "data-aos-delay", "100", "data-aos-duration", "500", 1, "contact-btn"], ["data-aos", "fade-up", "data-aos-duration", "500", "target", "_blank", 1, "main-btn", 3, "href"]],
    template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5)(11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "Contact.Pretitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 6, "Contact.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", "mailto:" + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 8, "Email"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 10, "Contact.Btn"), " ");
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    styles: [".contact-box[_ngcontent-%COMP%] {\n  margin-top: 20%;\n}\n.contact-box[_ngcontent-%COMP%]   .contact-title[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  font-size: 50px;\n  font-weight: 600;\n  color: #e6f1ff;\n  margin: auto;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.contact-box[_ngcontent-%COMP%]   .contact-pre-title[_ngcontent-%COMP%] {\n  position: relative;\n  align-items: center;\n  margin: 10px 0 25px;\n  width: 100%;\n  white-space: nowrap;\n  display: block;\n  color: #089ee5;\n  font-size: 16px;\n  font-family: Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  font-weight: normal;\n  justify-content: center;\n  text-align: center;\n}\n\n.contact-btn[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGVBQUE7QUFESjtBQUdJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNDWkU7RURhRixZQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtBQURSO0FBSUk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0N2QkM7RUR3QkQsZUFBQTtFQUNBLDREQ2pCRztFRGtCSCxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFGUjs7QUFNQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFISiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy92YXJpYWJsZXNcIjtcblxuLmNvbnRhY3QtYm94IHtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG5cbiAgICAuY29udGFjdC10aXRsZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogJFByaW1hcnk7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIH1cblxuICAgIC5jb250YWN0LXByZS10aXRsZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMjVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb2xvcjogJEFjY2VudDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LWZhbWlseTogJE1haW5Gb250O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuLmNvbnRhY3QtYnRuIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsIiRQcmltYXJ5OiAjZTZmMWZmO1xuJEFjY2VudDogIzA4OWVlNTtcbiRBY2NlbnRPcGFxdWU6ICMwODllZTU2OTtcbiRCYWNrZ3JvdW5kOiAjMGYwZjBmO1xuJEJnT3BhcXVlOiByZ2JhKDE1LCAxNSwgMTUsIDAuNjgpO1xuXG4kRGl2aWRlcjogXCIvXCI7XG4kVHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiRDdXJzb3I6IHBvaW50ZXI7XG4kTWFpbkZvbnQ6IE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJENvZGVGb250OiAnU0YgTW9ubycsICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGVBQUE7QUFESjtBQUdJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNDWkU7RURhRixZQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtBQURSO0FBSUk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0N2QkM7RUR3QkQsZUFBQTtFQUNBLDREQ2pCRztFRGtCSCxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFGUjs7QUFNQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFISjtBQUVBLGd0RUFBZ3RFIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy92YXJpYWJsZXNcIjtcblxuLmNvbnRhY3QtYm94IHtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG5cbiAgICAuY29udGFjdC10aXRsZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogJFByaW1hcnk7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIH1cblxuICAgIC5jb250YWN0LXByZS10aXRsZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMjVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb2xvcjogJEFjY2VudDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LWZhbWlseTogJE1haW5Gb250O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuLmNvbnRhY3QtYnRuIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsIiRQcmltYXJ5OiAjZTZmMWZmO1xuJEFjY2VudDogIzA4OWVlNTtcbiRBY2NlbnRPcGFxdWU6ICMwODllZTU2OTtcbiRCYWNrZ3JvdW5kOiAjMGYwZjBmO1xuJEJnT3BhcXVlOiByZ2JhKDE1LCAxNSwgMTUsIDAuNjgpO1xuXG4kRGl2aWRlcjogXCIvXCI7XG4kVHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiRDdXJzb3I6IHBvaW50ZXI7XG4kTWFpbkZvbnQ6IE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJENvZGVGb250OiAnU0YgTW9ubycsICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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



function ExperienceComponent_li_8_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    const jobDescriptionParagraph_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, jobDescriptionParagraph_r5), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function ExperienceComponent_li_8_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14)(1, "span", 15);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExperienceComponent_li_8_p_10_Template, 2, 3, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExperienceComponent_li_8_span_12_Template, 3, 1, "span", 12);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.Location);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.Date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
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
    consts: [[1, "container"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "title", "mb-5"], [1, "e-font", "section-title"], [1, "jobs"], ["class", "job", "data-aos", "fade-up", "data-aos-duration", "500", 3, "title", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "job", 3, "title"], ["data-aos", "zoom-out", "data-aos-duration", "500", 1, "job-logo", 3, "alt", "src"], [1, "job-location"], [1, "job-time"], ["class", "job-description", 3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "job-environment"], ["class", "technology", 4, "ngFor", "ngForOf"], [1, "job-description", 3, "innerHTML"], [1, "technology"], [1, "underline"]],
    template: function ExperienceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExperienceComponent_li_8_Template, 13, 10, "li", 5);
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
    styles: [".job[_ngcontent-%COMP%] {\n  background-color: rgba(15, 15, 15, 0.68);\n  padding: 25px;\n  margin-bottom: 25px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  opacity: 0.9;\n}\n.job[_ngcontent-%COMP%]:after {\n  background: none repeat scroll 0 0 transparent;\n  bottom: 0px;\n  content: \"\";\n  display: block;\n  height: 3px;\n  left: 0%;\n  position: absolute;\n  background: #089ee5;\n  transition: width 0.3s ease 0s, left 0.3s ease 0s;\n  width: 0;\n}\n.job[_ngcontent-%COMP%]:hover:after {\n  width: 100%;\n  left: 0;\n}\n.job[_ngcontent-%COMP%]:hover {\n  transform: translateX(5px);\n}\n.job[_ngcontent-%COMP%]   .job-time[_ngcontent-%COMP%] {\n  color: #089ee5;\n  margin-bottom: 30px;\n}\n.job[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 15px;\n}\n.job[_ngcontent-%COMP%]   .job-location[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.job[_ngcontent-%COMP%]   .job-logo[_ngcontent-%COMP%] {\n  margin-bottom: -5px;\n  margin-left: 5px;\n  height: 25px;\n}\n.job[_ngcontent-%COMP%]   .job-environment[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.job[_ngcontent-%COMP%]   .job-environment[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #e6f1ff;\n  line-height: 1.75;\n  font-family: Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n}\n.job[_ngcontent-%COMP%]   .job-environment[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%]   .underline[_ngcontent-%COMP%] {\n  padding-bottom: 3.5px;\n}\n.job[_ngcontent-%COMP%]   .job-environment[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%]:after {\n  content: \"/\";\n  color: #e6f1ff;\n  font-weight: 600;\n  opacity: 0.7;\n  margin: 5px;\n}\n.job[_ngcontent-%COMP%]   .job-environment[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHdDQ0NPO0VEQVAsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMERDQ1M7RURBVCxrREFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxZQUFBO0FBREo7QUFHSTtFQUNJLDhDQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQ2xCQztFRG1CRCxpREFBQTtFQUNBLFFBQUE7QUFEUjtBQUlJO0VBQ0ksV0FBQTtFQUNBLE9BQUE7QUFGUjtBQUtJO0VBQ0ksMEJBQUE7QUFIUjtBQU1JO0VBQ0ksY0NqQ0M7RURrQ0QsbUJBQUE7QUFKUjtBQU9JO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBTFI7QUFRSTtFQUNJLG1CQUFBO0FBTlI7QUFTSTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBUFI7QUFVSTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtBQVJSO0FBVVE7RUFDSSxlQUFBO0VBQ0EsY0MzREY7RUQ0REUsaUJBQUE7RUFDQSw0RENwREQ7QUQ0Q1g7QUFVWTtFQUNJLHFCQUFBO0FBUmhCO0FBV1k7RUFDSSxZQzlETjtFRCtETSxjQ3JFTjtFRHNFTSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBVGhCO0FBWVk7RUFDSSxXQUFBO0FBVmhCIiwiZmlsZSI6ImV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3ZhcmlhYmxlc1wiO1xuXG4uam9iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkQmdPcGFxdWU7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIHRyYW5zaXRpb246ICRUcmFuc2l0aW9uO1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0xNXB4IHJnYmEoMiwgMTIsIDI3LCAwLjcpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICAgIG9wYWNpdHk6IDAuOTtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgICBsZWZ0OiAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkQWNjZW50O1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UgMHMsIGxlZnQgMC4zcyBlYXNlIDBzO1xuICAgICAgICB3aWR0aDogMDtcbiAgICB9XG5cbiAgICAmOmhvdmVyOmFmdGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xuICAgIH1cblxuICAgIC5qb2ItdGltZSB7XG4gICAgICAgIGNvbG9yOiAkQWNjZW50O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cblxuICAgIC5qb2ItZGVzY3JpcHRpb24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG5cbiAgICAuam9iLWxvY2F0aW9uIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAuam9iLWxvZ28ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgfVxuXG4gICAgLmpvYi1lbnZpcm9ubWVudCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgLnRlY2hub2xvZ3kge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgY29sb3I6ICRQcmltYXJ5O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJE1haW5Gb250O1xuXG4gICAgICAgICAgICAudW5kZXJsaW5lIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMy41cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICREaXZpZGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkUHJpbWFyeTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIkUHJpbWFyeTogI2U2ZjFmZjtcbiRBY2NlbnQ6ICMwODllZTU7XG4kQWNjZW50T3BhcXVlOiAjMDg5ZWU1Njk7XG4kQmFja2dyb3VuZDogIzBmMGYwZjtcbiRCZ09wYXF1ZTogcmdiYSgxNSwgMTUsIDE1LCAwLjY4KTtcblxuJERpdmlkZXI6IFwiL1wiO1xuJFRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4kQ3Vyc29yOiBwb2ludGVyO1xuJE1haW5Gb250OiBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRDb2RlRm9udDogJ1NGIE1vbm8nLCAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHdDQ0NPO0VEQVAsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMERDQ1M7RURBVCxrREFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxZQUFBO0FBREo7QUFHSTtFQUNJLDhDQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQ2xCQztFRG1CRCxpREFBQTtFQUNBLFFBQUE7QUFEUjtBQUlJO0VBQ0ksV0FBQTtFQUNBLE9BQUE7QUFGUjtBQUtJO0VBQ0ksMEJBQUE7QUFIUjtBQU1JO0VBQ0ksY0NqQ0M7RURrQ0QsbUJBQUE7QUFKUjtBQU9JO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBTFI7QUFRSTtFQUNJLG1CQUFBO0FBTlI7QUFTSTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBUFI7QUFVSTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtBQVJSO0FBVVE7RUFDSSxlQUFBO0VBQ0EsY0MzREY7RUQ0REUsaUJBQUE7RUFDQSw0RENwREQ7QUQ0Q1g7QUFVWTtFQUNJLHFCQUFBO0FBUmhCO0FBV1k7RUFDSSxZQzlETjtFRCtETSxjQ3JFTjtFRHNFTSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBVGhCO0FBWVk7RUFDSSxXQUFBO0FBVmhCO0FBRUEsNHRIQUE0dEgiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3ZhcmlhYmxlc1wiO1xuXG4uam9iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkQmdPcGFxdWU7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIHRyYW5zaXRpb246ICRUcmFuc2l0aW9uO1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0xNXB4IHJnYmEoMiwgMTIsIDI3LCAwLjcpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICAgIG9wYWNpdHk6IDAuOTtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgICBsZWZ0OiAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkQWNjZW50O1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UgMHMsIGxlZnQgMC4zcyBlYXNlIDBzO1xuICAgICAgICB3aWR0aDogMDtcbiAgICB9XG5cbiAgICAmOmhvdmVyOmFmdGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xuICAgIH1cblxuICAgIC5qb2ItdGltZSB7XG4gICAgICAgIGNvbG9yOiAkQWNjZW50O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cblxuICAgIC5qb2ItZGVzY3JpcHRpb24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG5cbiAgICAuam9iLWxvY2F0aW9uIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAuam9iLWxvZ28ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgfVxuXG4gICAgLmpvYi1lbnZpcm9ubWVudCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgLnRlY2hub2xvZ3kge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgY29sb3I6ICRQcmltYXJ5O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJE1haW5Gb250O1xuXG4gICAgICAgICAgICAudW5kZXJsaW5lIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMy41cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICREaXZpZGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkUHJpbWFyeTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIkUHJpbWFyeTogI2U2ZjFmZjtcbiRBY2NlbnQ6ICMwODllZTU7XG4kQWNjZW50T3BhcXVlOiAjMDg5ZWU1Njk7XG4kQmFja2dyb3VuZDogIzBmMGYwZjtcbiRCZ09wYXF1ZTogcmdiYSgxNSwgMTUsIDE1LCAwLjY4KTtcblxuJERpdmlkZXI6IFwiL1wiO1xuJFRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4kQ3Vyc29yOiBwb2ludGVyO1xuJE1haW5Gb250OiBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRDb2RlRm9udDogJ1NGIE1vbm8nLCAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2464:
/*!************************************************************!*\
  !*** ./src/app/components/home/footer/footer.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 2584);


class FooterComponent {
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 27,
    vars: 21,
    consts: [["data-aos", "fade-up", "data-aos-duration", "500", 1, "footer-left-bar"], ["data-aos", "fade-right", "data-aos-delay", "500", "data-aos-duration", "500"], ["target", "_blank", 3, "href"], [1, "fab", "fa-github"], ["data-aos", "fade-right", "data-aos-delay", "600", "data-aos-duration", "500"], [1, "fab", "fa-linkedin"], ["data-aos", "fade-right", "data-aos-delay", "700", "data-aos-duration", "500"], [1, "fab", "fa-instagram"], ["data-aos", "fade-up", "data-aos-delay", "500", "data-aos-duration", "500", 1, "footer-right-bar"], ["data-aos", "fade-up", "data-aos-delay", "600", "data-aos-duration", "500", "target", "_blank", 3, "href"], [1, "footer-credits"], [1, "credit"], ["rel", "nofollow noopener noreferrer", "target", "_blank", 3, "href"], ["alt", "Angular", 1, "logo", 3, "src"]],
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8)(15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10)(20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Designed by Arun Varghese");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div")(23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, "Github"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 9, "LinkedIn"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 11, "Instagram"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", "mailto:" + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 13, "Email"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 15, "Email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 17, "Repo"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 19, "Footer.Logo"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    styles: ["footer[_ngcontent-%COMP%] {\n  color: #e6f1ff;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]:after, footer[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  width: 1px;\n  height: 90px;\n  margin: 0 auto;\n  background-color: #089ee5;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -16px;\n  left: 51px;\n  padding: 0;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 19px;\n  color: #e6f1ff;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 33px;\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0px;\n  right: 41px;\n  padding: 0;\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  font-size: 12px;\n  -webkit-letter-spacing: 0.1em;\n  -moz-letter-spacing: 0.1em;\n  -ms-letter-spacing: 0.1em;\n  letter-spacing: 0.1em;\n  writing-mode: vertical-rl;\n  margin: 20px auto;\n  padding: 10px;\n  color: #e6f1ff;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%] {\n  font-family: Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  font-size: 12px;\n  line-height: 1;\n  text-align: center;\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  margin-top: -60px;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   .credit[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #e6f1ff;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition-property: all;\n  transition-duration: 0.25s;\n  transition-delay: 0s;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, footer[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  color: #089ee5;\n}\nfooter[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 25px;\n  margin-top: -5px;\n  margin-left: 5px;\n}\n\n@media (max-width: 768px) {\n  .footer-right-bar[_ngcontent-%COMP%], .footer-left-bar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0NITTtBREVWO0FBR0k7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQ1ZDO0FEU1Q7QUFJSTtFQUNJLGdCQUFBO0FBRlI7QUFLSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFIUjtBQUtRO0VBQ0ksZUFBQTtFQUNBLGNDMUJGO0FEdUJWO0FBTVE7RUFDSSxnQkFBQTtBQUpaO0FBTVk7RUFDSSxtQkFBQTtBQUpoQjtBQVNJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQVBSO0FBU1E7RUFDSSx3QkFBQTtBQVBaO0FBVVE7RUFDSSw0REN4Q0Q7RUR5Q0MsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBR0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxjQzVERjtBRG9EVjtBQVlJO0VBQ0ksNERDeERHO0VEeURILGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0FBVlI7QUFZUTtFQUNJLG1CQUFBO0FBVlo7QUFhUTtFQUNJLGNDaEZGO0VEaUZFLDBEQzFFQztFRDJFRCx3QkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7QUFYWjtBQWFZO0VBQ0kscUJBQUE7RUFDQSxjQ3ZGUDtBRDRFVDtBQWdCSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBZFI7O0FBa0JBO0VBQ0k7SUFDSSxhQUFBO0VBZk47QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3ZhcmlhYmxlc1wiO1xuXG5mb290ZXIge1xuICAgIGNvbG9yOiAkUHJpbWFyeTtcblxuICAgIC5mb290ZXItbGVmdC1iYXI6YWZ0ZXIsIC5mb290ZXItcmlnaHQtYmFyOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkQWNjZW50O1xuICAgIH1cblxuICAgIC5mb290ZXItbGVmdC1iYXIgbGksIC5mb290ZXItcmlnaHQtYmFyIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICAuZm9vdGVyLWxlZnQtYmFyIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IC0xNnB4O1xuICAgICAgICBsZWZ0OiA1MXB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIGkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICAgICAgY29sb3I6ICRQcmltYXJ5O1xuICAgICAgICB9XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcblxuICAgICAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZm9vdGVyLXJpZ2h0LWJhciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIHJpZ2h0OiA0MXB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRNYWluRm9udDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIC13ZWJraXQtbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgICAgLW1vei1sZXR0ZXItc3BhY2luZzogMC4xZW07XG4gICAgICAgICAgICAtbXMtbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgICAgLXdlYmtpdC13cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xuICAgICAgICAgICAgLW1zLXdyaXRpbmctbW9kZTogdGItcmw7XG4gICAgICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICRQcmltYXJ5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmZvb3Rlci1jcmVkaXRzIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRNYWluRm9udDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IC02MHB4O1xuXG4gICAgICAgIC5jcmVkaXQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6ICRQcmltYXJ5O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogJFRyYW5zaXRpb247XG4gICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuXG4gICAgICAgICAgICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRBY2NlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubG9nbyB7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmZvb3Rlci1yaWdodC1iYXIsIC5mb290ZXItbGVmdC1iYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbiIsIiRQcmltYXJ5OiAjZTZmMWZmO1xuJEFjY2VudDogIzA4OWVlNTtcbiRBY2NlbnRPcGFxdWU6ICMwODllZTU2OTtcbiRCYWNrZ3JvdW5kOiAjMGYwZjBmO1xuJEJnT3BhcXVlOiByZ2JhKDE1LCAxNSwgMTUsIDAuNjgpO1xuXG4kRGl2aWRlcjogXCIvXCI7XG4kVHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiRDdXJzb3I6IHBvaW50ZXI7XG4kTWFpbkZvbnQ6IE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJENvZGVGb250OiAnU0YgTW9ubycsICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQ0hNO0FERVY7QUFHSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJDVkM7QURTVDtBQUlJO0VBQ0ksZ0JBQUE7QUFGUjtBQUtJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQUhSO0FBS1E7RUFDSSxlQUFBO0VBQ0EsY0MxQkY7QUR1QlY7QUFNUTtFQUNJLGdCQUFBO0FBSlo7QUFNWTtFQUNJLG1CQUFBO0FBSmhCO0FBU0k7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBUFI7QUFTUTtFQUNJLHdCQUFBO0FBUFo7QUFVUTtFQUNJLDREQ3hDRDtFRHlDQyxlQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFHQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNDNURGO0FEb0RWO0FBWUk7RUFDSSw0REN4REc7RUR5REgsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7QUFWUjtBQVlRO0VBQ0ksbUJBQUE7QUFWWjtBQWFRO0VBQ0ksY0NoRkY7RURpRkUsMERDMUVDO0VEMkVELHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtBQVhaO0FBYVk7RUFDSSxxQkFBQTtFQUNBLGNDdkZQO0FENEVUO0FBZ0JJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFkUjs7QUFrQkE7RUFDSTtJQUNJLGFBQUE7RUFmTjtBQUNGO0FBREEsZ3BKQUFncEoiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3ZhcmlhYmxlc1wiO1xuXG5mb290ZXIge1xuICAgIGNvbG9yOiAkUHJpbWFyeTtcblxuICAgIC5mb290ZXItbGVmdC1iYXI6YWZ0ZXIsIC5mb290ZXItcmlnaHQtYmFyOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkQWNjZW50O1xuICAgIH1cblxuICAgIC5mb290ZXItbGVmdC1iYXIgbGksIC5mb290ZXItcmlnaHQtYmFyIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICAuZm9vdGVyLWxlZnQtYmFyIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IC0xNnB4O1xuICAgICAgICBsZWZ0OiA1MXB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIGkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICAgICAgY29sb3I6ICRQcmltYXJ5O1xuICAgICAgICB9XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcblxuICAgICAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZm9vdGVyLXJpZ2h0LWJhciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIHJpZ2h0OiA0MXB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRNYWluRm9udDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIC13ZWJraXQtbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgICAgLW1vei1sZXR0ZXItc3BhY2luZzogMC4xZW07XG4gICAgICAgICAgICAtbXMtbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgICAgLXdlYmtpdC13cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xuICAgICAgICAgICAgLW1zLXdyaXRpbmctbW9kZTogdGItcmw7XG4gICAgICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICRQcmltYXJ5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmZvb3Rlci1jcmVkaXRzIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRNYWluRm9udDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IC02MHB4O1xuXG4gICAgICAgIC5jcmVkaXQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6ICRQcmltYXJ5O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogJFRyYW5zaXRpb247XG4gICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuXG4gICAgICAgICAgICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRBY2NlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubG9nbyB7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmZvb3Rlci1yaWdodC1iYXIsIC5mb290ZXItbGVmdC1iYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbiIsIiRQcmltYXJ5OiAjZTZmMWZmO1xuJEFjY2VudDogIzA4OWVlNTtcbiRBY2NlbnRPcGFxdWU6ICMwODllZTU2OTtcbiRCYWNrZ3JvdW5kOiAjMGYwZjBmO1xuJEJnT3BhcXVlOiByZ2JhKDE1LCAxNSwgMTUsIDAuNjgpO1xuXG4kRGl2aWRlcjogXCIvXCI7XG4kVHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiRDdXJzb3I6IHBvaW50ZXI7XG4kTWFpbkZvbnQ6IE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJENvZGVGb250OiAnU0YgTW9ubycsICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
    consts: [[1, "container"], [1, "section-box"], ["data-aos", "fade-up", 1, "title"], [1, "section-title"], [1, "description"], ["data-aos", "fade-up", 1, "qualifications-list"], ["class", "qualifications-element", "data-aos", "fade-up", "data-aos-duration", "500", 3, "innerHTML", 4, "ngFor", "ngForOf"], ["class", "skills", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "qualifications-element", 3, "innerHTML"], [1, "skills"], ["data-aos", "fade-up"], ["class", "skill-element", "data-aos", "zoom-out", "data-aos-duration", "500", 4, "ngFor", "ngForOf"], ["data-aos", "zoom-out", "data-aos-duration", "500", 1, "skill-element"], [1, "underline"]],
    template: function HighlightsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div")(8, "div", 4)(9, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HighlightsComponent_li_10_Template, 2, 1, "li", 6);
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
    styles: [".description[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.qualifications-list[_ngcontent-%COMP%] {\n  padding: 0;\n  margin-bottom: 50px;\n}\n.qualifications-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n\n.skills[_ngcontent-%COMP%] {\n  margin: 15px 0px;\n}\n.skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 12px;\n  color: #089ee5;\n}\n.skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]:after {\n  content: \"/\";\n  color: #e6f1ff;\n  font-weight: 600;\n  opacity: 0.7;\n  margin: 5px;\n}\n.skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n.skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZ2hsaWdodHMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUdJO0VBQ0ksY0FBQTtBQURSOztBQUtBO0VBQ0ksZ0JBQUE7QUFGSjtBQUlJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0NwQkM7QURrQlQ7QUFJUTtFQUNJLFlDbEJGO0VEbUJFLGNDekJGO0VEMEJFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFGWjtBQUtRO0VBQ0ksV0FBQTtBQUhaO0FBTVE7RUFDSSxtQkFBQTtBQUpaIiwiZmlsZSI6ImhpZ2hsaWdodHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3ZhcmlhYmxlc1wiO1xuXG4uZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5xdWFsaWZpY2F0aW9ucy1saXN0IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG5cbiAgICBsaSB7XG4gICAgICAgIG1hcmdpbjogMTVweCAwO1xuICAgIH1cbn1cblxuLnNraWxscyB7XG4gICAgbWFyZ2luOiAxNXB4IDBweDtcblxuICAgIC5za2lsbC1lbGVtZW50IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAkQWNjZW50O1xuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJERpdmlkZXI7XG4gICAgICAgICAgICBjb2xvcjogJFByaW1hcnk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZDphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbiIsIiRQcmltYXJ5OiAjZTZmMWZmO1xuJEFjY2VudDogIzA4OWVlNTtcbiRBY2NlbnRPcGFxdWU6ICMwODllZTU2OTtcbiRCYWNrZ3JvdW5kOiAjMGYwZjBmO1xuJEJnT3BhcXVlOiByZ2JhKDE1LCAxNSwgMTUsIDAuNjgpO1xuXG4kRGl2aWRlcjogXCIvXCI7XG4kVHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiRDdXJzb3I6IHBvaW50ZXI7XG4kTWFpbkZvbnQ6IE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJENvZGVGb250OiAnU0YgTW9ubycsICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hpZ2hsaWdodHMvaGlnaGxpZ2h0cy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUdJO0VBQ0ksY0FBQTtBQURSOztBQUtBO0VBQ0ksZ0JBQUE7QUFGSjtBQUlJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0NwQkM7QURrQlQ7QUFJUTtFQUNJLFlDbEJGO0VEbUJFLGNDekJGO0VEMEJFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFGWjtBQUtRO0VBQ0ksV0FBQTtBQUhaO0FBTVE7RUFDSSxtQkFBQTtBQUpaO0FBQ0EsbzhEQUFvOEQiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3ZhcmlhYmxlc1wiO1xuXG4uZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5xdWFsaWZpY2F0aW9ucy1saXN0IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG5cbiAgICBsaSB7XG4gICAgICAgIG1hcmdpbjogMTVweCAwO1xuICAgIH1cbn1cblxuLnNraWxscyB7XG4gICAgbWFyZ2luOiAxNXB4IDBweDtcblxuICAgIC5za2lsbC1lbGVtZW50IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAkQWNjZW50O1xuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJERpdmlkZXI7XG4gICAgICAgICAgICBjb2xvcjogJFByaW1hcnk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZDphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbiIsIiRQcmltYXJ5OiAjZTZmMWZmO1xuJEFjY2VudDogIzA4OWVlNTtcbiRBY2NlbnRPcGFxdWU6ICMwODllZTU2OTtcbiRCYWNrZ3JvdW5kOiAjMGYwZjBmO1xuJEJnT3BhcXVlOiByZ2JhKDE1LCAxNSwgMTUsIDAuNjgpO1xuXG4kRGl2aWRlcjogXCIvXCI7XG4kVHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiRDdXJzb3I6IHBvaW50ZXI7XG4kTWFpbkZvbnQ6IE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJENvZGVGb250OiAnU0YgTW9ubycsICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ 2464);







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
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-about")(1, "app-highlights")(2, "app-experience")(3, "app-projects")(4, "app-contact")(5, "app-footer");
      }
    },
    dependencies: [_about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent, _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_1__.HighlightsComponent, _experience_experience_component__WEBPACK_IMPORTED_MODULE_2__.ExperienceComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__.ProjectsComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__.ContactComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent],
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
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ 2464);
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
    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_5__.AboutComponent, _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_1__.HighlightsComponent, _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__.ExperienceComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__.ProjectsComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__.ContactComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule]
  });
})();

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



function ProjectsComponent_div_8_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10)(1, "span", 11);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div")(2, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProjectsComponent_div_8_span_7_Template, 3, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const project_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-aos-delay", i_r3 * 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r2.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r2.Description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", project_r2.Technologies);
  }
}
function ProjectsComponent_div_16_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r6["DemoLink"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function ProjectsComponent_div_16_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r6["GithubLink"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function ProjectsComponent_div_16_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10)(1, "span", 11);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div")(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectsComponent_div_16_a_3_Template, 2, 1, "a", 13)(4, ProjectsComponent_div_16_a_4_Template, 2, 1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProjectsComponent_div_16_span_10_Template, 3, 1, "span", 9);
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
    consts: [[1, "container"], [1, "section-box"], [1, "section-title"], [1, "grid"], ["class", "grid-item project-box", "data-aos", "fade-up", "data-aos-duration", "500", 4, "ngFor", "ngForOf"], [1, ""], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "grid-item", "project-box"], [1, "title"], [1, "description"], ["class", "skills", 4, "ngFor", "ngForOf"], [1, "skills"], [1, "underline"], [1, "external-links"], ["style", "color: inherit", "target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 2, "color", "inherit", 3, "href"], [1, "external-link-btn", "ml-3", "fas", "fa-external-link-alt"], ["id", "ghLink", 1, "external-link-btn", "ml-4", "fab", "fa-github"]],
    template: function ProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "div")(4, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProjectsComponent_div_8_Template, 8, 4, "div", 4);
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
    styles: [".project-box[_ngcontent-%COMP%] {\n  height: 350px;\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  background-color: rgba(15, 15, 15, 0.68);\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: flex-start;\n  position: relative;\n  padding: 2rem 1.75rem;\n  border-radius: 3px;\n}\n.project-box[_ngcontent-%COMP%]:after {\n  background: none repeat scroll 0 0 transparent;\n  bottom: 0px;\n  content: \"\";\n  display: block;\n  height: 3px;\n  left: 50%;\n  position: absolute;\n  background: #089ee5;\n  transition: width 0.3s ease 0s, left 0.3s ease 0s;\n  width: 0;\n}\n.project-box[_ngcontent-%COMP%]:hover:after {\n  width: 100%;\n  left: 0;\n}\n.project-box[_ngcontent-%COMP%]   .external-links[_ngcontent-%COMP%] {\n  text-align: end;\n}\n.project-box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 22px;\n}\n.project-box[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.project-box[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 1.75;\n}\n.project-box[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   .underline[_ngcontent-%COMP%] {\n  padding-bottom: 3.5px;\n}\n.project-box[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]:after {\n  content: \"/\";\n  color: #e6f1ff;\n  font-weight: 600;\n  opacity: 0.7;\n  margin: 5px;\n}\n.project-box[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 30% 30% 30%;\n  grid-template-rows: auto;\n  gap: 15px 15px;\n  grid-template-areas: \". . .\" \". . .\" \". . .\";\n}\n.grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%] {\n  background-color: rgba(15, 15, 15, 0.68);\n}\n.grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n\n.external-link-btn[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n\n@media (max-width: 1400px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 50% 50%;\n    grid-template-rows: auto auto;\n    grid-template-areas: \". .\" \". .\" \". .\";\n  }\n}\n@media (max-width: 1000px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 100%;\n    grid-template-rows: auto;\n    grid-template-areas: \".\" \".\" \".\";\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0Esa0RBQUE7RUFDQSwwRENFUztFRERULHdDQ0ZPO0VER1Asa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUdJO0VBQ0ksOENBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJDdkJDO0VEd0JELGlEQUFBO0VBQ0EsUUFBQTtBQURSO0FBSUk7RUFDSSxXQUFBO0VBQ0EsT0FBQTtBQUZSO0FBS0k7RUFDSSxlQUFBO0FBSFI7QUFNSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUpSO0FBT0k7RUFDSSxlQUFBO0FBTFI7QUFRSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQU5SO0FBUVE7RUFDSSxxQkFBQTtBQU5aO0FBU1E7RUFDSSxZQ2xERjtFRG1ERSxjQ3pERjtFRDBERSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBUFo7QUFVUTtFQUNJLFdBQUE7QUFSWjs7QUFhQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLDRDQUNBO0FBWEo7QUFlSTtFQUNJLHdDQzVFRztBRCtEWDtBQWVRO0VBQ0ksMkJBQUE7QUFiWjs7QUFtQkE7RUFDSSxjQUFBO0FBaEJKOztBQW1CQTtFQUNJO0lBQ0ksOEJBQUE7SUFDQSw2QkFBQTtJQUNBLHNDQUNKO0VBakJGO0FBQ0Y7QUFzQkE7RUFDSTtJQUNJLDJCQUFBO0lBQ0Esd0JBQUE7SUFDQSxnQ0FDSjtFQXJCRjtBQUNGIiwiZmlsZSI6InByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy92YXJpYWJsZXNcIjtcblxuLnByb2plY3QtYm94IHtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0xNXB4IHJnYmEoMiwgMTIsIDI3LCAwLjcpO1xuICAgIHRyYW5zaXRpb246ICRUcmFuc2l0aW9uO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRCZ09wYXF1ZTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAycmVtIDEuNzVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuXG4gICAgJjphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkQWNjZW50O1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UgMHMsIGxlZnQgMC4zcyBlYXNlIDBzO1xuICAgICAgICB3aWR0aDogMDtcbiAgICB9XG5cbiAgICAmOmhvdmVyOmFmdGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgfVxuXG4gICAgLmV4dGVybmFsLWxpbmtzIHtcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIH1cblxuICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB9XG5cbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgfVxuXG4gICAgLnNraWxscyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzU7XG5cbiAgICAgICAgLnVuZGVybGluZSB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMy41cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICREaXZpZGVyO1xuICAgICAgICAgICAgY29sb3I6ICRQcmltYXJ5O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgMzAlIDMwJTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gICAgZ2FwOiAxNXB4IDE1cHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcIi4gLiAuXCJcbiAgICBcIi4gLiAuXCJcbiAgICBcIi4gLiAuXCI7XG5cbiAgICAuZ3JpZC1pdGVtIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJEJnT3BhcXVlO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi5leHRlcm5hbC1saW5rLWJ0biB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDE0MDBweCkge1xuICAgIC5ncmlkIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcIi4gLlwiXG4gICAgXCIuIC5cIlxuICAgIFwiLiAuXCI7XG4gICAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAuZ3JpZCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiLlwiXG4gICAgXCIuXCJcbiAgICBcIi5cIjtcbiAgICB9XG59XG4iLCIkUHJpbWFyeTogI2U2ZjFmZjtcbiRBY2NlbnQ6ICMwODllZTU7XG4kQWNjZW50T3BhcXVlOiAjMDg5ZWU1Njk7XG4kQmFja2dyb3VuZDogIzBmMGYwZjtcbiRCZ09wYXF1ZTogcmdiYSgxNSwgMTUsIDE1LCAwLjY4KTtcblxuJERpdmlkZXI6IFwiL1wiO1xuJFRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4kQ3Vyc29yOiBwb2ludGVyO1xuJE1haW5Gb250OiBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRDb2RlRm9udDogJ1NGIE1vbm8nLCAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLGtEQUFBO0VBQ0EsMERDRVM7RUREVCx3Q0NGTztFREdQLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBREo7QUFHSTtFQUNJLDhDQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQ3ZCQztFRHdCRCxpREFBQTtFQUNBLFFBQUE7QUFEUjtBQUlJO0VBQ0ksV0FBQTtFQUNBLE9BQUE7QUFGUjtBQUtJO0VBQ0ksZUFBQTtBQUhSO0FBTUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFKUjtBQU9JO0VBQ0ksZUFBQTtBQUxSO0FBUUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFOUjtBQVFRO0VBQ0kscUJBQUE7QUFOWjtBQVNRO0VBQ0ksWUNsREY7RURtREUsY0N6REY7RUQwREUsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQVBaO0FBVVE7RUFDSSxXQUFBO0FBUlo7O0FBYUE7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSw0Q0FDQTtBQVhKO0FBZUk7RUFDSSx3Q0M1RUc7QUQrRFg7QUFlUTtFQUNJLDJCQUFBO0FBYlo7O0FBbUJBO0VBQ0ksY0FBQTtBQWhCSjs7QUFtQkE7RUFDSTtJQUNJLDhCQUFBO0lBQ0EsNkJBQUE7SUFDQSxzQ0FDSjtFQWpCRjtBQUNGO0FBc0JBO0VBQ0k7SUFDSSwyQkFBQTtJQUNBLHdCQUFBO0lBQ0EsZ0NBQ0o7RUFyQkY7QUFDRjtBQUVBLDRsSkFBNGxKIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy92YXJpYWJsZXNcIjtcblxuLnByb2plY3QtYm94IHtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0xNXB4IHJnYmEoMiwgMTIsIDI3LCAwLjcpO1xuICAgIHRyYW5zaXRpb246ICRUcmFuc2l0aW9uO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRCZ09wYXF1ZTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAycmVtIDEuNzVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuXG4gICAgJjphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkQWNjZW50O1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UgMHMsIGxlZnQgMC4zcyBlYXNlIDBzO1xuICAgICAgICB3aWR0aDogMDtcbiAgICB9XG5cbiAgICAmOmhvdmVyOmFmdGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgfVxuXG4gICAgLmV4dGVybmFsLWxpbmtzIHtcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIH1cblxuICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB9XG5cbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgfVxuXG4gICAgLnNraWxscyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzU7XG5cbiAgICAgICAgLnVuZGVybGluZSB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMy41cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICREaXZpZGVyO1xuICAgICAgICAgICAgY29sb3I6ICRQcmltYXJ5O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgMzAlIDMwJTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gICAgZ2FwOiAxNXB4IDE1cHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcIi4gLiAuXCJcbiAgICBcIi4gLiAuXCJcbiAgICBcIi4gLiAuXCI7XG5cbiAgICAuZ3JpZC1pdGVtIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJEJnT3BhcXVlO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi5leHRlcm5hbC1saW5rLWJ0biB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDE0MDBweCkge1xuICAgIC5ncmlkIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcIi4gLlwiXG4gICAgXCIuIC5cIlxuICAgIFwiLiAuXCI7XG4gICAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAuZ3JpZCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiLlwiXG4gICAgXCIuXCJcbiAgICBcIi5cIjtcbiAgICB9XG59XG4iLCIkUHJpbWFyeTogI2U2ZjFmZjtcbiRBY2NlbnQ6ICMwODllZTU7XG4kQWNjZW50T3BhcXVlOiAjMDg5ZWU1Njk7XG4kQmFja2dyb3VuZDogIzBmMGYwZjtcbiRCZ09wYXF1ZTogcmdiYSgxNSwgMTUsIDE1LCAwLjY4KTtcblxuJERpdmlkZXI6IFwiL1wiO1xuJFRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4kQ3Vyc29yOiBwb2ludGVyO1xuJE1haW5Gb250OiBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRDb2RlRm9udDogJ1NGIE1vbm8nLCAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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