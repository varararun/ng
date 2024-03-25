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
    styles: [".bg-img[_ngcontent-%COMP%] {\n  background: #0f0f0f no-repeat;\n  transform-origin: center;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhY2tncm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUFERiIsImZpbGUiOiJiYWNrZ3JvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy92YXJpYWJsZXNcIjtcblxuLmJnLWltZyB7XG4gIGJhY2tncm91bmQ6ICRCYWNrZ3JvdW5kIG5vLXJlcGVhdDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTE7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL2JhY2tncm91bmQvYmFja2dyb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQURGO0FBQ0Esb3FCQUFvcUIiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3ZhcmlhYmxlc1wiO1xuXG4uYmctaW1nIHtcbiAgYmFja2dyb3VuZDogJEJhY2tncm91bmQgbm8tcmVwZWF0O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAtMTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
    styles: [".menu-btn[_ngcontent-%COMP%] {\n  font-size: 35px;\n  position: fixed;\n  top: 0;\n  right: 0;\n  margin-right: 40px;\n  margin-top: 30px;\n  color: #e6f1ff;\n  cursor: pointer;\n  z-index: 20;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%] {\n  display: block;\n  cursor: pointer;\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  width: 35px;\n  height: 2px;\n  background-color: #e6f1ff;\n  margin: 6px 0;\n  transition: 0.4s;\n  box-shadow: 2px 2px 10px 0px #000;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\n  background-color: #089ee5;\n  box-shadow: none;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%] {\n  transform: translate(0, 10px) rotate(-45deg);\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\n  transform: translate(0, -6px) rotate(45deg);\n}\n\n.menu-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background: #0f0f0f;\n  z-index: 10;\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 15%;\n  left: 38%;\n  width: 30%;\n  margin: auto;\n  list-style: none;\n  color: #e6f1ff;\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  font-size: 50px;\n  cursor: pointer;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit !important;\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover {\n  color: #089ee5;\n  transform: translateX(5px);\n}\n\n@media (max-width: 827px) {\n  .menu-items[_ngcontent-%COMP%] {\n    left: 15% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0NUYztFRFVkLGVDRmM7RURHZCxXQUFBO0FBREY7QUFFRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0RBQUE7QUFBSjtBQUVJO0VBQ0UsMERDWFU7RURZVixXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQ3JCVTtFRHNCVixhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtBQUFOO0FBSU07RUFDRSx5QkM1QlE7RUQ2QlIsZ0JBQUE7QUFGUjtBQUlNO0VBQ0UsNENBQUE7QUFGUjtBQUtNO0VBQ0UsVUFBQTtBQUhSO0FBTU07RUFDRSwyQ0FBQTtBQUpSOztBQVdBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxtQkNuRGM7RURvRGQsV0FBQTtBQVJGO0FBU0U7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0MvRFk7QUR3RGhCO0FBUUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVDM0RVO0VENERWLDBEQzdEVTtBRHVEaEI7QUFPTTtFQUNFLHlCQUFBO0FBTFI7QUFXTTtFQUNFLGNDNUVRO0VENkVSLDBCQUFBO0FBVFI7O0FBZUE7RUFDRTtJQUNFLG9CQUFBO0VBWkY7QUFDRiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy92YXJpYWJsZXNcIjtcblxuLm1lbnUtYnRuIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgY29sb3I6ICRQcmltYXJ5O1xuICBjdXJzb3I6ICRDdXJzb3I7XG4gIHotaW5kZXg6IDIwO1xuICAubWVudS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAtMTVweCByZ2JhKDIsMTIsMjcsMC43KTtcblxuICAgIC5iYXIxLCAuYmFyMiwgLmJhcjMge1xuICAgICAgdHJhbnNpdGlvbjogJFRyYW5zaXRpb247XG4gICAgICB3aWR0aDogMzVweDtcbiAgICAgIGhlaWdodDogMnB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJFByaW1hcnk7XG4gICAgICBtYXJnaW46IDZweCAwO1xuICAgICAgdHJhbnNpdGlvbjogMC40cztcbiAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAwcHggIzAwMDtcbiAgICB9XG5cbiAgICAmLm1lbnUtb3BlbiB7XG4gICAgICAuYmFyMSwgLmJhcjIsIC5iYXIzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJEFjY2VudDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5iYXIxIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCkgcm90YXRlKC00NWRlZyk7XG4gICAgICB9XG5cbiAgICAgIC5iYXIyIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cblxuICAgICAgLmJhcjMge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNnB4KSByb3RhdGUoNDVkZWcpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG59XG5cbi5tZW51LW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAkQmFja2dyb3VuZDtcbiAgei1pbmRleDogMTA7XG4gIC5tZW51LWl0ZW1zIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAxNSU7XG4gICAgbGVmdDogMzglO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgY29sb3I6ICRQcmltYXJ5O1xuICAgIC5tZW51LWl0ZW0ge1xuICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICBjdXJzb3I6ICRDdXJzb3I7XG4gICAgICB0cmFuc2l0aW9uOiAkVHJhbnNpdGlvbjtcbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgICAmOmhvdmVyIHtcblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogJEFjY2VudDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4MjdweCkge1xuICAubWVudS1pdGVtcyB7XG4gICAgbGVmdDogMTUlICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuIiwiJFByaW1hcnkgICAgICA6ICNlNmYxZmY7XG4kQWNjZW50ICAgICAgIDogIzA4OWVlNTtcbiRBY2NlbnRPcGFxdWUgOiAjMDg5ZWU1Njk7XG4kQmFja2dyb3VuZCAgIDogIzBmMGYwZjtcbiRCZ09wYXF1ZSAgICAgOiByZ2JhKDE1LCAxNSwgMTUsIDAuNjgpO1xuXG4kRGl2aWRlciAgICAgIDogXCIvXCI7XG4kVHJhbnNpdGlvbiAgIDogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwwLjA0NSwwLjM1NSwxKTtcbiRDdXJzb3IgICAgICAgOiBwb2ludGVyO1xuJE1haW5Gb250ICAgICA6IE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJENvZGVGb250ICAgICA6ICdTRiBNb25vJywgJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0NUYztFRFVkLGVDRmM7RURHZCxXQUFBO0FBREY7QUFFRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0RBQUE7QUFBSjtBQUVJO0VBQ0UsMERDWFU7RURZVixXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQ3JCVTtFRHNCVixhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtBQUFOO0FBSU07RUFDRSx5QkM1QlE7RUQ2QlIsZ0JBQUE7QUFGUjtBQUlNO0VBQ0UsNENBQUE7QUFGUjtBQUtNO0VBQ0UsVUFBQTtBQUhSO0FBTU07RUFDRSwyQ0FBQTtBQUpSOztBQVdBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxtQkNuRGM7RURvRGQsV0FBQTtBQVJGO0FBU0U7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0MvRFk7QUR3RGhCO0FBUUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVDM0RVO0VENERWLDBEQzdEVTtBRHVEaEI7QUFPTTtFQUNFLHlCQUFBO0FBTFI7QUFXTTtFQUNFLGNDNUVRO0VENkVSLDBCQUFBO0FBVFI7O0FBZUE7RUFDRTtJQUNFLG9CQUFBO0VBWkY7QUFDRjtBQUNBLGd1SEFBZ3VIIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy92YXJpYWJsZXNcIjtcblxuLm1lbnUtYnRuIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgY29sb3I6ICRQcmltYXJ5O1xuICBjdXJzb3I6ICRDdXJzb3I7XG4gIHotaW5kZXg6IDIwO1xuICAubWVudS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAtMTVweCByZ2JhKDIsMTIsMjcsMC43KTtcblxuICAgIC5iYXIxLCAuYmFyMiwgLmJhcjMge1xuICAgICAgdHJhbnNpdGlvbjogJFRyYW5zaXRpb247XG4gICAgICB3aWR0aDogMzVweDtcbiAgICAgIGhlaWdodDogMnB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJFByaW1hcnk7XG4gICAgICBtYXJnaW46IDZweCAwO1xuICAgICAgdHJhbnNpdGlvbjogMC40cztcbiAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAwcHggIzAwMDtcbiAgICB9XG5cbiAgICAmLm1lbnUtb3BlbiB7XG4gICAgICAuYmFyMSwgLmJhcjIsIC5iYXIzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJEFjY2VudDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5iYXIxIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCkgcm90YXRlKC00NWRlZyk7XG4gICAgICB9XG5cbiAgICAgIC5iYXIyIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cblxuICAgICAgLmJhcjMge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNnB4KSByb3RhdGUoNDVkZWcpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG59XG5cbi5tZW51LW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAkQmFja2dyb3VuZDtcbiAgei1pbmRleDogMTA7XG4gIC5tZW51LWl0ZW1zIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAxNSU7XG4gICAgbGVmdDogMzglO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgY29sb3I6ICRQcmltYXJ5O1xuICAgIC5tZW51LWl0ZW0ge1xuICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICBjdXJzb3I6ICRDdXJzb3I7XG4gICAgICB0cmFuc2l0aW9uOiAkVHJhbnNpdGlvbjtcbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgICAmOmhvdmVyIHtcblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogJEFjY2VudDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4MjdweCkge1xuICAubWVudS1pdGVtcyB7XG4gICAgbGVmdDogMTUlICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuIiwiJFByaW1hcnkgICAgICA6ICNlNmYxZmY7XG4kQWNjZW50ICAgICAgIDogIzA4OWVlNTtcbiRBY2NlbnRPcGFxdWUgOiAjMDg5ZWU1Njk7XG4kQmFja2dyb3VuZCAgIDogIzBmMGYwZjtcbiRCZ09wYXF1ZSAgICAgOiByZ2JhKDE1LCAxNSwgMTUsIDAuNjgpO1xuXG4kRGl2aWRlciAgICAgIDogXCIvXCI7XG4kVHJhbnNpdGlvbiAgIDogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwwLjA0NSwwLjM1NSwxKTtcbiRDdXJzb3IgICAgICAgOiBwb2ludGVyO1xuJE1haW5Gb250ICAgICA6IE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJENvZGVGb250ICAgICA6ICdTRiBNb25vJywgJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
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
    consts: [[1, "container"], [1, "section-box-about"], [1, "content"], ["data-aos", "fade-right", "data-aos-duration", "500"], [1, "title"], [1, "about-title"], ["data-aos", "fade-right", "data-aos-duration", "500", "data-aos-delay", "100", 1, "name"], ["data-aos", "fade-right", "data-aos-duration", "500", "data-aos-delay", "200", 1, "role"], ["data-aos", "fade-right", "data-aos-duration", "500", "data-aos-delay", "300", 1, "about-description"], [1, "mt-4", 3, "innerHTML"], ["data-aos", "fade-right", "data-aos-duration", "500", "data-aos-delay", "400", 1, "div-btn-about"], [1, "main-btn", "resume-btn", 3, "click"]],
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
    styles: [".container[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 200px;\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #089ee5;\n  margin: 0 0 20px 3px;\n  font-size: 16px;\n  font-weight: normal;\n  font-family: Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  line-height: 1.1;\n  margin: 0;\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 80px;\n  color: #e6f1ff;\n  font-family: Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 60px;\n  color: #e6f1ff;\n  font-family: \"SF Mono\", \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   .about-description[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   .div-btn-about[_ngcontent-%COMP%] {\n  height: 43px;\n}\n\n@media (max-width: 480px) {\n  .title[_ngcontent-%COMP%], .name[_ngcontent-%COMP%], .role[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .name[_ngcontent-%COMP%] {\n    font-size: 45px !important;\n  }\n  .role[_ngcontent-%COMP%] {\n    font-size: 30px !important;\n  }\n  .resume-btn[_ngcontent-%COMP%] {\n    left: 25%;\n    position: relative;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0FBREY7QUFHRTtFQUNFLHNCQUFBO0FBREo7QUFHSTtFQUNFLGlCQUFBO0FBRE47QUFJSTtFQUVFLGNDYlU7RURjVixvQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDREQ1RVO0FETWhCO0FBTUk7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQUpOO0FBT0k7RUFDRSxlQUFBO0VBQ0EsY0M3QlU7RUQ4QlYsNERDckJVO0FEZ0JoQjtBQVFJO0VBQ0UsZUFBQTtFQUNBLGNDbkNVO0VEb0NWLG9HQzFCVTtBRG9CaEI7QUFTSTtFQUNFLG1CQUFBO0FBUE47QUFVSTtFQUNFLGdCQUFBO0FBUk47QUFXSTtFQUNFLFlBQUE7QUFUTjs7QUFjQTtFQUNFO0lBQ0Usa0JBQUE7RUFYRjtFQWFBO0lBQ0UsMEJBQUE7RUFYRjtFQWFBO0lBQ0UsMEJBQUE7RUFYRjtFQWNBO0lBQ0UsU0FBQTtJQUNBLGtCQUFBO0VBWkY7QUFDRiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvdmFyaWFibGVzXCI7XG5cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuXG4gIC5zZWN0aW9uLWJveC1hYm91dCB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgIC5jb250ZW50IHtcbiAgICAgIG1hcmdpbi10b3A6IDIwMHB4O1xuICAgIH1cblxuICAgIGgxIHtcblxuICAgICAgY29sb3I6ICRBY2NlbnQ7XG4gICAgICBtYXJnaW46IDAgMCAyMHB4IDNweDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LWZhbWlseTogJE1haW5Gb250O1xuICAgIH1cblxuICAgIGgyLCBoMyB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICBjb2xvcjogJFByaW1hcnk7XG4gICAgICBmb250LWZhbWlseTogJE1haW5Gb250O1xuICAgIH1cblxuICAgIGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgIGNvbG9yOiAkUHJpbWFyeTtcbiAgICAgIGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XG4gICAgfVxuXG4gICAgLmFib3V0LWRlc2NyaXB0aW9uIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIH1cblxuICAgIC5kaXYtYnRuLWFib3V0IHtcbiAgICAgIGhlaWdodDogNDNweDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC50aXRsZSwgLm5hbWUsIC5yb2xlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLm5hbWUge1xuICAgIGZvbnQtc2l6ZTogNDVweCAhaW1wb3J0YW50O1xuICB9XG4gIC5yb2xlIHtcbiAgICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5yZXN1bWUtYnRuIHtcbiAgICBsZWZ0OiAyNSU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG5cblxuXG4iLCIkUHJpbWFyeSAgICAgIDogI2U2ZjFmZjtcbiRBY2NlbnQgICAgICAgOiAjMDg5ZWU1O1xuJEFjY2VudE9wYXF1ZSA6ICMwODllZTU2OTtcbiRCYWNrZ3JvdW5kICAgOiAjMGYwZjBmO1xuJEJnT3BhcXVlICAgICA6IHJnYmEoMTUsIDE1LCAxNSwgMC42OCk7XG5cbiREaXZpZGVyICAgICAgOiBcIi9cIjtcbiRUcmFuc2l0aW9uICAgOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xuJEN1cnNvciAgICAgICA6IHBvaW50ZXI7XG4kTWFpbkZvbnQgICAgIDogTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kQ29kZUZvbnQgICAgIDogJ1NGIE1vbm8nLCAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtBQURGO0FBR0U7RUFDRSxzQkFBQTtBQURKO0FBR0k7RUFDRSxpQkFBQTtBQUROO0FBSUk7RUFFRSxjQ2JVO0VEY1Ysb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw0RENUVTtBRE1oQjtBQU1JO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFKTjtBQU9JO0VBQ0UsZUFBQTtFQUNBLGNDN0JVO0VEOEJWLDREQ3JCVTtBRGdCaEI7QUFRSTtFQUNFLGVBQUE7RUFDQSxjQ25DVTtFRG9DVixvR0MxQlU7QURvQmhCO0FBU0k7RUFDRSxtQkFBQTtBQVBOO0FBVUk7RUFDRSxnQkFBQTtBQVJOO0FBV0k7RUFDRSxZQUFBO0FBVE47O0FBY0E7RUFDRTtJQUNFLGtCQUFBO0VBWEY7RUFhQTtJQUNFLDBCQUFBO0VBWEY7RUFhQTtJQUNFLDBCQUFBO0VBWEY7RUFjQTtJQUNFLFNBQUE7SUFDQSxrQkFBQTtFQVpGO0FBQ0Y7QUFDQSxvdUZBQW91RiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvdmFyaWFibGVzXCI7XG5cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuXG4gIC5zZWN0aW9uLWJveC1hYm91dCB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgIC5jb250ZW50IHtcbiAgICAgIG1hcmdpbi10b3A6IDIwMHB4O1xuICAgIH1cblxuICAgIGgxIHtcblxuICAgICAgY29sb3I6ICRBY2NlbnQ7XG4gICAgICBtYXJnaW46IDAgMCAyMHB4IDNweDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LWZhbWlseTogJE1haW5Gb250O1xuICAgIH1cblxuICAgIGgyLCBoMyB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICBjb2xvcjogJFByaW1hcnk7XG4gICAgICBmb250LWZhbWlseTogJE1haW5Gb250O1xuICAgIH1cblxuICAgIGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgIGNvbG9yOiAkUHJpbWFyeTtcbiAgICAgIGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XG4gICAgfVxuXG4gICAgLmFib3V0LWRlc2NyaXB0aW9uIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIH1cblxuICAgIC5kaXYtYnRuLWFib3V0IHtcbiAgICAgIGhlaWdodDogNDNweDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC50aXRsZSwgLm5hbWUsIC5yb2xlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLm5hbWUge1xuICAgIGZvbnQtc2l6ZTogNDVweCAhaW1wb3J0YW50O1xuICB9XG4gIC5yb2xlIHtcbiAgICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5yZXN1bWUtYnRuIHtcbiAgICBsZWZ0OiAyNSU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG5cblxuXG4iLCIkUHJpbWFyeSAgICAgIDogI2U2ZjFmZjtcbiRBY2NlbnQgICAgICAgOiAjMDg5ZWU1O1xuJEFjY2VudE9wYXF1ZSA6ICMwODllZTU2OTtcbiRCYWNrZ3JvdW5kICAgOiAjMGYwZjBmO1xuJEJnT3BhcXVlICAgICA6IHJnYmEoMTUsIDE1LCAxNSwgMC42OCk7XG5cbiREaXZpZGVyICAgICAgOiBcIi9cIjtcbiRUcmFuc2l0aW9uICAgOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xuJEN1cnNvciAgICAgICA6IHBvaW50ZXI7XG4kTWFpbkZvbnQgICAgIDogTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kQ29kZUZvbnQgICAgIDogJ1NGIE1vbm8nLCAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
    consts: [[1, "container"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "contact-box"], [1, "contact-pre-title"], [1, "contact-title"], ["data-aos", "fade-up", "data-aos-duration", "500", "data-aos-delay", "100", 1, "contact-btn"], ["target", "_blank", "data-aos", "fade-up", "data-aos-duration", "500", 1, "main-btn", 3, "href"]],
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
    styles: [".contact-box[_ngcontent-%COMP%] {\n  margin-top: 20%;\n}\n.contact-box[_ngcontent-%COMP%]   .contact-title[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  font-size: 50px;\n  font-weight: 600;\n  color: #e6f1ff;\n  margin: auto;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.contact-box[_ngcontent-%COMP%]   .contact-pre-title[_ngcontent-%COMP%] {\n  position: relative;\n  align-items: center;\n  margin: 10px 0 25px;\n  width: 100%;\n  white-space: nowrap;\n  display: block;\n  color: #089ee5;\n  font-size: 16px;\n  font-family: Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  font-weight: normal;\n  justify-content: center;\n  text-align: center;\n}\n\n.contact-btn[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7QUFERjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNDWlk7RURhWixZQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtBQURKO0FBSUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0N2Qlk7RUR3QlosZUFBQTtFQUNBLDREQ2pCWTtFRGtCWixtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFIRiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy92YXJpYWJsZXNcIjtcblxuLmNvbnRhY3QtYm94IHtcbiAgbWFyZ2luLXRvcDogMjAlO1xuXG4gIC5jb250YWN0LXRpdGxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICRQcmltYXJ5O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIH1cblxuICAuY29udGFjdC1wcmUtdGl0bGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMTBweCAwIDI1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogJEFjY2VudDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1mYW1pbHk6ICRNYWluRm9udDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG4uY29udGFjdC1idG4ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCIkUHJpbWFyeSAgICAgIDogI2U2ZjFmZjtcbiRBY2NlbnQgICAgICAgOiAjMDg5ZWU1O1xuJEFjY2VudE9wYXF1ZSA6ICMwODllZTU2OTtcbiRCYWNrZ3JvdW5kICAgOiAjMGYwZjBmO1xuJEJnT3BhcXVlICAgICA6IHJnYmEoMTUsIDE1LCAxNSwgMC42OCk7XG5cbiREaXZpZGVyICAgICAgOiBcIi9cIjtcbiRUcmFuc2l0aW9uICAgOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xuJEN1cnNvciAgICAgICA6IHBvaW50ZXI7XG4kTWFpbkZvbnQgICAgIDogTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kQ29kZUZvbnQgICAgIDogJ1NGIE1vbm8nLCAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7QUFERjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNDWlk7RURhWixZQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtBQURKO0FBSUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0N2Qlk7RUR3QlosZUFBQTtFQUNBLDREQ2pCWTtFRGtCWixtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFIRjtBQUVBLHdvRUFBd29FIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy92YXJpYWJsZXNcIjtcblxuLmNvbnRhY3QtYm94IHtcbiAgbWFyZ2luLXRvcDogMjAlO1xuXG4gIC5jb250YWN0LXRpdGxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICRQcmltYXJ5O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIH1cblxuICAuY29udGFjdC1wcmUtdGl0bGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMTBweCAwIDI1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogJEFjY2VudDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1mYW1pbHk6ICRNYWluRm9udDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG4uY29udGFjdC1idG4ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCIkUHJpbWFyeSAgICAgIDogI2U2ZjFmZjtcbiRBY2NlbnQgICAgICAgOiAjMDg5ZWU1O1xuJEFjY2VudE9wYXF1ZSA6ICMwODllZTU2OTtcbiRCYWNrZ3JvdW5kICAgOiAjMGYwZjBmO1xuJEJnT3BhcXVlICAgICA6IHJnYmEoMTUsIDE1LCAxNSwgMC42OCk7XG5cbiREaXZpZGVyICAgICAgOiBcIi9cIjtcbiRUcmFuc2l0aW9uICAgOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xuJEN1cnNvciAgICAgICA6IHBvaW50ZXI7XG4kTWFpbkZvbnQgICAgIDogTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kQ29kZUZvbnQgICAgIDogJ1NGIE1vbm8nLCAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.Logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", item_r1.Tab);
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
    consts: [[1, "container"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "title", "mb-5"], [1, "e-font", "section-title"], [1, "jobs"], ["class", "job", "data-aos", "fade-up", "data-aos-duration", "500", 3, "title", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "job", 3, "title"], ["data-aos", "zoom-out", "data-aos-duration", "500", 1, "job-logo", 3, "src", "alt"], [1, "job-location"], [1, "job-time"], ["class", "job-description", 3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "job-environment"], ["class", "technology", 4, "ngFor", "ngForOf"], [1, "job-description", 3, "innerHTML"], [1, "technology"], [1, "underline"]],
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
    styles: [".job[_ngcontent-%COMP%] {\n  background-color: rgba(15, 15, 15, 0.68);\n  padding: 25px;\n  margin-bottom: 25px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  opacity: 0.9;\n}\n.job[_ngcontent-%COMP%]:hover {\n  transform: translateX(5px);\n}\n.job[_ngcontent-%COMP%]   .job-time[_ngcontent-%COMP%] {\n  color: #089ee5;\n  margin-bottom: 30px;\n}\n.job[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 15px;\n}\n.job[_ngcontent-%COMP%]   .job-location[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.job[_ngcontent-%COMP%]   .job-logo[_ngcontent-%COMP%] {\n  margin-bottom: -5px;\n  margin-left: 5px;\n  height: 25px;\n}\n.job[_ngcontent-%COMP%]   .job-environment[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.job[_ngcontent-%COMP%]   .job-environment[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #e6f1ff;\n  line-height: 1.75;\n  font-family: Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n}\n.job[_ngcontent-%COMP%]   .job-environment[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%]   .underline[_ngcontent-%COMP%] {\n  padding-bottom: 3.5px;\n}\n.job[_ngcontent-%COMP%]   .job-environment[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%]:after {\n  content: \"/\";\n  color: #e6f1ff;\n  font-weight: 600;\n  opacity: 0.7;\n  margin: 5px;\n}\n.job[_ngcontent-%COMP%]   .job-environment[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHdDQ0NjO0VEQWQsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMERDQ2M7RURBZCxrREFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxZQUFBO0FBREY7QUFHRTtFQUNFLDBCQUFBO0FBREo7QUFJRTtFQUNFLGNDZlk7RURnQlosbUJBQUE7QUFGSjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBSEo7QUFNRTtFQUNFLG1CQUFBO0FBSko7QUFPRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBTEo7QUFRRTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQU5KO0FBUUk7RUFDRSxlQUFBO0VBQ0EsY0N6Q1U7RUQwQ1YsaUJBQUE7RUFDQSw0RENsQ1U7QUQ0QmhCO0FBUU07RUFDRSxxQkFBQTtBQU5SO0FBU007RUFDRSxZQzVDUTtFRDZDUixjQ25EUTtFRG9EUixnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBUFI7QUFVTTtFQUNFLFdBQUE7QUFSUiIsImZpbGUiOiJleHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy92YXJpYWJsZXNcIjtcblxuLmpvYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRCZ09wYXF1ZTtcbiAgcGFkZGluZzogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgdHJhbnNpdGlvbjogJFRyYW5zaXRpb247XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0xNXB4IHJnYmEoMiwgMTIsIDI3LCAwLjcpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgb3BhY2l0eTogMC45O1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xuICB9XG5cbiAgLmpvYi10aW1lIHtcbiAgICBjb2xvcjogJEFjY2VudDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG5cbiAgLmpvYi1kZXNjcmlwdGlvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuXG4gIC5qb2ItbG9jYXRpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICAuam9iLWxvZ28ge1xuICAgIG1hcmdpbi1ib3R0b206IC01cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gIH1cblxuICAuam9iLWVudmlyb25tZW50IHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG5cbiAgICAudGVjaG5vbG9neSB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogJFByaW1hcnk7XG4gICAgICBsaW5lLWhlaWdodDogMS43NTtcbiAgICAgIGZvbnQtZmFtaWx5OiAkTWFpbkZvbnQ7XG5cbiAgICAgIC51bmRlcmxpbmUge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMy41cHg7XG4gICAgICB9XG5cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAkRGl2aWRlcjtcbiAgICAgICAgY29sb3I6ICRQcmltYXJ5O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICB9XG5cbiAgICAgICY6bGFzdC1jaGlsZDphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIkUHJpbWFyeSAgICAgIDogI2U2ZjFmZjtcbiRBY2NlbnQgICAgICAgOiAjMDg5ZWU1O1xuJEFjY2VudE9wYXF1ZSA6ICMwODllZTU2OTtcbiRCYWNrZ3JvdW5kICAgOiAjMGYwZjBmO1xuJEJnT3BhcXVlICAgICA6IHJnYmEoMTUsIDE1LCAxNSwgMC42OCk7XG5cbiREaXZpZGVyICAgICAgOiBcIi9cIjtcbiRUcmFuc2l0aW9uICAgOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xuJEN1cnNvciAgICAgICA6IHBvaW50ZXI7XG4kTWFpbkZvbnQgICAgIDogTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kQ29kZUZvbnQgICAgIDogJ1NGIE1vbm8nLCAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHdDQ0NjO0VEQWQsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMERDQ2M7RURBZCxrREFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxZQUFBO0FBREY7QUFHRTtFQUNFLDBCQUFBO0FBREo7QUFJRTtFQUNFLGNDZlk7RURnQlosbUJBQUE7QUFGSjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBSEo7QUFNRTtFQUNFLG1CQUFBO0FBSko7QUFPRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBTEo7QUFRRTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQU5KO0FBUUk7RUFDRSxlQUFBO0VBQ0EsY0N6Q1U7RUQwQ1YsaUJBQUE7RUFDQSw0RENsQ1U7QUQ0QmhCO0FBUU07RUFDRSxxQkFBQTtBQU5SO0FBU007RUFDRSxZQzVDUTtFRDZDUixjQ25EUTtFRG9EUixnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBUFI7QUFVTTtFQUNFLFdBQUE7QUFSUjtBQUVBLHd5RkFBd3lGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy92YXJpYWJsZXNcIjtcblxuLmpvYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRCZ09wYXF1ZTtcbiAgcGFkZGluZzogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgdHJhbnNpdGlvbjogJFRyYW5zaXRpb247XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0xNXB4IHJnYmEoMiwgMTIsIDI3LCAwLjcpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgb3BhY2l0eTogMC45O1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xuICB9XG5cbiAgLmpvYi10aW1lIHtcbiAgICBjb2xvcjogJEFjY2VudDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG5cbiAgLmpvYi1kZXNjcmlwdGlvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuXG4gIC5qb2ItbG9jYXRpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICAuam9iLWxvZ28ge1xuICAgIG1hcmdpbi1ib3R0b206IC01cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gIH1cblxuICAuam9iLWVudmlyb25tZW50IHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG5cbiAgICAudGVjaG5vbG9neSB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogJFByaW1hcnk7XG4gICAgICBsaW5lLWhlaWdodDogMS43NTtcbiAgICAgIGZvbnQtZmFtaWx5OiAkTWFpbkZvbnQ7XG5cbiAgICAgIC51bmRlcmxpbmUge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMy41cHg7XG4gICAgICB9XG5cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAkRGl2aWRlcjtcbiAgICAgICAgY29sb3I6ICRQcmltYXJ5O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICB9XG5cbiAgICAgICY6bGFzdC1jaGlsZDphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIkUHJpbWFyeSAgICAgIDogI2U2ZjFmZjtcbiRBY2NlbnQgICAgICAgOiAjMDg5ZWU1O1xuJEFjY2VudE9wYXF1ZSA6ICMwODllZTU2OTtcbiRCYWNrZ3JvdW5kICAgOiAjMGYwZjBmO1xuJEJnT3BhcXVlICAgICA6IHJnYmEoMTUsIDE1LCAxNSwgMC42OCk7XG5cbiREaXZpZGVyICAgICAgOiBcIi9cIjtcbiRUcmFuc2l0aW9uICAgOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xuJEN1cnNvciAgICAgICA6IHBvaW50ZXI7XG4kTWFpbkZvbnQgICAgIDogTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kQ29kZUZvbnQgICAgIDogJ1NGIE1vbm8nLCAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
    consts: [["data-aos", "fade-up", "data-aos-duration", "500", 1, "footer-left-bar"], ["data-aos", "fade-right", "data-aos-duration", "500", "data-aos-delay", "500"], ["target", "_blank", 3, "href"], [1, "fab", "fa-github"], ["data-aos", "fade-right", "data-aos-duration", "500", "data-aos-delay", "600"], [1, "fab", "fa-linkedin"], ["data-aos", "fade-right", "data-aos-duration", "500", "data-aos-delay", "700"], [1, "fab", "fa-instagram"], ["data-aos", "fade-up", "data-aos-duration", "500", "data-aos-delay", "500", 1, "footer-right-bar"], ["target", "_blank", "data-aos", "fade-up", "data-aos-duration", "500", "data-aos-delay", "600", 3, "href"], [1, "footer-credits"], [1, "credit"], ["target", "_blank", "rel", "nofollow noopener noreferrer", 3, "href"], ["alt", "Angular", 1, "logo", 3, "src"]],
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
    styles: ["footer[_ngcontent-%COMP%] {\n  color: #e6f1ff;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]:after, footer[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  width: 1px;\n  height: 90px;\n  margin: 0 auto;\n  background-color: #089ee5;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -16px;\n  left: 51px;\n  padding: 0;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 19px;\n  color: #e6f1ff;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 33px;\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0px;\n  right: 41px;\n  padding: 0;\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  font-size: 12px;\n  -webkit-letter-spacing: 0.1em;\n  -moz-letter-spacing: 0.1em;\n  -ms-letter-spacing: 0.1em;\n  letter-spacing: 0.1em;\n  writing-mode: vertical-rl;\n  margin: 20px auto;\n  padding: 10px;\n  color: #e6f1ff;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%] {\n  font-family: Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  font-size: 12px;\n  line-height: 1;\n  text-align: center;\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  margin-top: -60px;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   .credit[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #e6f1ff;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition-property: all;\n  transition-duration: 0.25s;\n  transition-delay: 0s;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, footer[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  color: #089ee5;\n}\nfooter[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 25px;\n  margin-top: -5px;\n  margin-left: 5px;\n}\n\n@media (max-width: 768px) {\n  .footer-right-bar[_ngcontent-%COMP%], .footer-left-bar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0NIWTtBREVoQjtBQUdJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkNWUTtBRFNoQjtBQUlJO0VBQ0ksZ0JBQUE7QUFGUjtBQUtJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQUhSO0FBS1E7RUFDSSxlQUFBO0VBQ0EsY0MxQkk7QUR1QmhCO0FBTVE7RUFDSSxnQkFBQTtBQUpaO0FBTVk7RUFDSSxtQkFBQTtBQUpoQjtBQVNJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQVBSO0FBU1E7RUFDSSx3QkFBQTtBQVBaO0FBVVE7RUFDSSw0REN4Q0k7RUR5Q0osZUFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBR0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxjQzVESTtBRG9EaEI7QUFXSTtFQUNJLDREQ3ZEUTtFRHdEUixlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtBQVRSO0FBVVE7RUFDRSxtQkFBQTtBQVJWO0FBVVE7RUFDSSxjQzdFSTtFRDhFSiwwREN2RUk7RUR3RUosd0JBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0FBUlo7QUFVWTtFQUNJLHFCQUFBO0VBQ0EsY0NwRkE7QUQ0RWhCO0FBYUk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQVhSOztBQWVBO0VBQ0U7SUFDRSxhQUFBO0VBWkY7QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3ZhcmlhYmxlc1wiO1xuXG5mb290ZXJ7XG4gICAgY29sb3I6ICRQcmltYXJ5O1xuXG4gICAgLmZvb3Rlci1sZWZ0LWJhcjphZnRlciwgLmZvb3Rlci1yaWdodC1iYXI6YWZ0ZXJ7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJEFjY2VudDtcbiAgICB9XG5cbiAgICAuZm9vdGVyLWxlZnQtYmFyIGxpLCAuZm9vdGVyLXJpZ2h0LWJhciBsaXtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICAuZm9vdGVyLWxlZnQtYmFye1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogLTE2cHg7XG4gICAgICAgIGxlZnQ6IDUxcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgaXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgICAgIGNvbG9yOiAkUHJpbWFyeTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpe1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcblxuICAgICAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZm9vdGVyLXJpZ2h0LWJhcntcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgcmlnaHQ6IDQxcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgbGl7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICBhe1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRNYWluRm9udDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIC13ZWJraXQtbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgICAgLW1vei1sZXR0ZXItc3BhY2luZzogMC4xZW07XG4gICAgICAgICAgICAtbXMtbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgICAgLXdlYmtpdC13cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xuICAgICAgICAgICAgLW1zLXdyaXRpbmctbW9kZTogdGItcmw7XG4gICAgICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICRQcmltYXJ5O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5mb290ZXItY3JlZGl0c3tcbiAgICAgICAgZm9udC1mYW1pbHk6ICRNYWluRm9udDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IC02MHB4O1xuICAgICAgICAuY3JlZGl0IHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIGF7XG4gICAgICAgICAgICBjb2xvcjogJFByaW1hcnk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAkVHJhbnNpdGlvbjtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG5cbiAgICAgICAgICAgICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJEFjY2VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5sb2dvIHtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIH1cbn1cblxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpe1xuICAuZm9vdGVyLXJpZ2h0LWJhciwgLmZvb3Rlci1sZWZ0LWJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIiwiJFByaW1hcnkgICAgICA6ICNlNmYxZmY7XG4kQWNjZW50ICAgICAgIDogIzA4OWVlNTtcbiRBY2NlbnRPcGFxdWUgOiAjMDg5ZWU1Njk7XG4kQmFja2dyb3VuZCAgIDogIzBmMGYwZjtcbiRCZ09wYXF1ZSAgICAgOiByZ2JhKDE1LCAxNSwgMTUsIDAuNjgpO1xuXG4kRGl2aWRlciAgICAgIDogXCIvXCI7XG4kVHJhbnNpdGlvbiAgIDogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwwLjA0NSwwLjM1NSwxKTtcbiRDdXJzb3IgICAgICAgOiBwb2ludGVyO1xuJE1haW5Gb250ICAgICA6IE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJENvZGVGb250ICAgICA6ICdTRiBNb25vJywgJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQ0hZO0FERWhCO0FBR0k7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQ1ZRO0FEU2hCO0FBSUk7RUFDSSxnQkFBQTtBQUZSO0FBS0k7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBSFI7QUFLUTtFQUNJLGVBQUE7RUFDQSxjQzFCSTtBRHVCaEI7QUFNUTtFQUNJLGdCQUFBO0FBSlo7QUFNWTtFQUNJLG1CQUFBO0FBSmhCO0FBU0k7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBUFI7QUFTUTtFQUNJLHdCQUFBO0FBUFo7QUFVUTtFQUNJLDREQ3hDSTtFRHlDSixlQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFHQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNDNURJO0FEb0RoQjtBQVdJO0VBQ0ksNERDdkRRO0VEd0RSLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0FBVFI7QUFVUTtFQUNFLG1CQUFBO0FBUlY7QUFVUTtFQUNJLGNDN0VJO0VEOEVKLDBEQ3ZFSTtFRHdFSix3QkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7QUFSWjtBQVVZO0VBQ0kscUJBQUE7RUFDQSxjQ3BGQTtBRDRFaEI7QUFhSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBWFI7O0FBZUE7RUFDRTtJQUNFLGFBQUE7RUFaRjtBQUNGO0FBREEsNHFKQUE0cUoiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3ZhcmlhYmxlc1wiO1xuXG5mb290ZXJ7XG4gICAgY29sb3I6ICRQcmltYXJ5O1xuXG4gICAgLmZvb3Rlci1sZWZ0LWJhcjphZnRlciwgLmZvb3Rlci1yaWdodC1iYXI6YWZ0ZXJ7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJEFjY2VudDtcbiAgICB9XG5cbiAgICAuZm9vdGVyLWxlZnQtYmFyIGxpLCAuZm9vdGVyLXJpZ2h0LWJhciBsaXtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICAuZm9vdGVyLWxlZnQtYmFye1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogLTE2cHg7XG4gICAgICAgIGxlZnQ6IDUxcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgaXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgICAgIGNvbG9yOiAkUHJpbWFyeTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpe1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcblxuICAgICAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZm9vdGVyLXJpZ2h0LWJhcntcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgcmlnaHQ6IDQxcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgbGl7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICBhe1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRNYWluRm9udDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIC13ZWJraXQtbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgICAgLW1vei1sZXR0ZXItc3BhY2luZzogMC4xZW07XG4gICAgICAgICAgICAtbXMtbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgICAgLXdlYmtpdC13cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xuICAgICAgICAgICAgLW1zLXdyaXRpbmctbW9kZTogdGItcmw7XG4gICAgICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICRQcmltYXJ5O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5mb290ZXItY3JlZGl0c3tcbiAgICAgICAgZm9udC1mYW1pbHk6ICRNYWluRm9udDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IC02MHB4O1xuICAgICAgICAuY3JlZGl0IHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIGF7XG4gICAgICAgICAgICBjb2xvcjogJFByaW1hcnk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAkVHJhbnNpdGlvbjtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG5cbiAgICAgICAgICAgICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJEFjY2VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5sb2dvIHtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIH1cbn1cblxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpe1xuICAuZm9vdGVyLXJpZ2h0LWJhciwgLmZvb3Rlci1sZWZ0LWJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIiwiJFByaW1hcnkgICAgICA6ICNlNmYxZmY7XG4kQWNjZW50ICAgICAgIDogIzA4OWVlNTtcbiRBY2NlbnRPcGFxdWUgOiAjMDg5ZWU1Njk7XG4kQmFja2dyb3VuZCAgIDogIzBmMGYwZjtcbiRCZ09wYXF1ZSAgICAgOiByZ2JhKDE1LCAxNSwgMTUsIDAuNjgpO1xuXG4kRGl2aWRlciAgICAgIDogXCIvXCI7XG4kVHJhbnNpdGlvbiAgIDogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwwLjA0NSwwLjM1NSwxKTtcbiRDdXJzb3IgICAgICAgOiBwb2ludGVyO1xuJE1haW5Gb250ICAgICA6IE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJENvZGVGb250ICAgICA6ICdTRiBNb25vJywgJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
    styles: [".description[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.qualifications-list[_ngcontent-%COMP%] {\n  padding: 0;\n  margin-bottom: 50px;\n}\n.qualifications-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n\n.skills[_ngcontent-%COMP%] {\n  margin: 15px 0px;\n}\n.skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 12px;\n  color: #089ee5;\n}\n.skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]:after {\n  content: \"/\";\n  color: #e6f1ff;\n  font-weight: 600;\n  opacity: 0.7;\n  margin: 5px;\n}\n.skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n.skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZ2hsaWdodHMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUdFO0VBQ0UsY0FBQTtBQURKOztBQUtBO0VBQ0UsZ0JBQUE7QUFGRjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0NwQlk7QURrQmhCO0FBSUk7RUFDRSxZQ2xCVTtFRG1CVixjQ3pCVTtFRDBCVixnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRk47QUFLSTtFQUNFLFdBQUE7QUFITjtBQU1JO0VBQ0UsbUJBQUE7QUFKTiIsImZpbGUiOiJoaWdobGlnaHRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy92YXJpYWJsZXNcIjtcblxuLmRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnF1YWxpZmljYXRpb25zLWxpc3Qge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuXG4gIGxpIHtcbiAgICBtYXJnaW46IDE1cHggMDtcbiAgfVxufVxuXG4uc2tpbGxzIHtcbiAgbWFyZ2luOiAxNXB4IDBweDtcblxuICAuc2tpbGwtZWxlbWVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogJEFjY2VudDtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogJERpdmlkZXI7XG4gICAgICBjb2xvcjogJFByaW1hcnk7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgb3BhY2l0eTogLjc7XG4gICAgICBtYXJnaW46IDVweDtcbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgfVxuICB9XG59XG5cblxuIiwiJFByaW1hcnkgICAgICA6ICNlNmYxZmY7XG4kQWNjZW50ICAgICAgIDogIzA4OWVlNTtcbiRBY2NlbnRPcGFxdWUgOiAjMDg5ZWU1Njk7XG4kQmFja2dyb3VuZCAgIDogIzBmMGYwZjtcbiRCZ09wYXF1ZSAgICAgOiByZ2JhKDE1LCAxNSwgMTUsIDAuNjgpO1xuXG4kRGl2aWRlciAgICAgIDogXCIvXCI7XG4kVHJhbnNpdGlvbiAgIDogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwwLjA0NSwwLjM1NSwxKTtcbiRDdXJzb3IgICAgICAgOiBwb2ludGVyO1xuJE1haW5Gb250ICAgICA6IE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJENvZGVGb250ICAgICA6ICdTRiBNb25vJywgJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hpZ2hsaWdodHMvaGlnaGxpZ2h0cy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUdFO0VBQ0UsY0FBQTtBQURKOztBQUtBO0VBQ0UsZ0JBQUE7QUFGRjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0NwQlk7QURrQmhCO0FBSUk7RUFDRSxZQ2xCVTtFRG1CVixjQ3pCVTtFRDBCVixnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRk47QUFLSTtFQUNFLFdBQUE7QUFITjtBQU1JO0VBQ0UsbUJBQUE7QUFKTjtBQUNBLGc0REFBZzREIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy92YXJpYWJsZXNcIjtcblxuLmRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnF1YWxpZmljYXRpb25zLWxpc3Qge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuXG4gIGxpIHtcbiAgICBtYXJnaW46IDE1cHggMDtcbiAgfVxufVxuXG4uc2tpbGxzIHtcbiAgbWFyZ2luOiAxNXB4IDBweDtcblxuICAuc2tpbGwtZWxlbWVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogJEFjY2VudDtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogJERpdmlkZXI7XG4gICAgICBjb2xvcjogJFByaW1hcnk7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgb3BhY2l0eTogLjc7XG4gICAgICBtYXJnaW46IDVweDtcbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgfVxuICB9XG59XG5cblxuIiwiJFByaW1hcnkgICAgICA6ICNlNmYxZmY7XG4kQWNjZW50ICAgICAgIDogIzA4OWVlNTtcbiRBY2NlbnRPcGFxdWUgOiAjMDg5ZWU1Njk7XG4kQmFja2dyb3VuZCAgIDogIzBmMGYwZjtcbiRCZ09wYXF1ZSAgICAgOiByZ2JhKDE1LCAxNSwgMTUsIDAuNjgpO1xuXG4kRGl2aWRlciAgICAgIDogXCIvXCI7XG4kVHJhbnNpdGlvbiAgIDogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwwLjA0NSwwLjM1NSwxKTtcbiRDdXJzb3IgICAgICAgOiBwb2ludGVyO1xuJE1haW5Gb250ICAgICA6IE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJENvZGVGb250ICAgICA6ICdTRiBNb25vJywgJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
    styles: [".project-box[_ngcontent-%COMP%] {\n  height: 350px;\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  background-color: rgba(15, 15, 15, 0.68);\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: flex-start;\n  position: relative;\n  padding: 2rem 1.75rem;\n  border-radius: 3px;\n}\n.project-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  color: #089ee5;\n}\n.project-box[_ngcontent-%COMP%]   .external-links[_ngcontent-%COMP%] {\n  text-align: end;\n}\n.project-box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 22px;\n}\n.project-box[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.project-box[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 1.75;\n}\n.project-box[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   .underline[_ngcontent-%COMP%] {\n  padding-bottom: 3.5px;\n}\n.project-box[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]:after {\n  content: \"/\";\n  color: #e6f1ff;\n  font-weight: 600;\n  opacity: 0.7;\n  margin: 5px;\n}\n.project-box[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 30% 30% 30%;\n  grid-template-rows: auto;\n  gap: 15px 15px;\n  grid-template-areas: \". . .\" \". . .\" \". . .\";\n}\n.grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%] {\n  background-color: rgba(15, 15, 15, 0.68);\n}\n.grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n\n.external-link-btn[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n\n@media (max-width: 1400px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 50% 50%;\n    grid-template-rows: auto auto;\n    grid-template-areas: \". .\" \". .\" \". .\";\n  }\n}\n@media (max-width: 1000px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 100%;\n    grid-template-rows: auto;\n    grid-template-areas: \".\" \".\" \".\";\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0Esa0RBQUE7RUFDQSwwRENFYztFRERkLHdDQ0ZjO0VER2Qsa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFERjtBQUdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQ2xCWTtBRGlCaEI7QUFHRTtFQUNFLGVBQUE7QUFESjtBQUlFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBRko7QUFLRTtFQUNFLGVBQUE7QUFISjtBQU1FO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBSko7QUFNSTtFQUNFLHFCQUFBO0FBSk47QUFPSTtFQUNFLFlDckNVO0VEc0NWLGNDNUNVO0VENkNWLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFMTjtBQVFJO0VBQ0UsV0FBQTtBQU5OOztBQVdBO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsNENBQ0U7QUFUSjtBQWFFO0VBQ0Usd0NDL0RZO0FEb0RoQjtBQWFJO0VBQ0UsMkJBQUE7QUFYTjs7QUFpQkE7RUFDRSxjQUFBO0FBZEY7O0FBaUJBO0VBQ0U7SUFDRSw4QkFBQTtJQUNBLDZCQUFBO0lBQ0Esc0NBQ0E7RUFmRjtBQUNGO0FBb0JBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLHdCQUFBO0lBQ0EsZ0NBQ0E7RUFuQkY7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvdmFyaWFibGVzXCI7XG5cbi5wcm9qZWN0LWJveCB7XG4gIGhlaWdodDogMzUwcHg7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0xNXB4IHJnYmEoMiwgMTIsIDI3LCAwLjcpO1xuICB0cmFuc2l0aW9uOiAkVHJhbnNpdGlvbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJEJnT3BhcXVlO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAycmVtIDEuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcblxuICBzdmcge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBjb2xvcjogJEFjY2VudDtcbiAgfVxuICAuZXh0ZXJuYWwtbGlua3Mge1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgbWFyZ2luOiAwIDAgMTBweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cblxuICAuZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgfVxuXG4gIC5za2lsbHMge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMS43NTtcblxuICAgIC51bmRlcmxpbmUge1xuICAgICAgcGFkZGluZy1ib3R0b206IDMuNXB4O1xuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogJERpdmlkZXI7XG4gICAgICBjb2xvcjogJFByaW1hcnk7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgb3BhY2l0eTogLjc7XG4gICAgICBtYXJnaW46IDVweDtcbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICB9XG4gIH1cbn1cblxuLmdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSAzMCUgMzAlO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gIGdhcDogMTVweCAxNXB4O1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiLiAuIC5cIlxuICAgIFwiLiAuIC5cIlxuICAgIFwiLiAuIC5cIjtcblxuICAuZ3JpZC1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkQmdPcGFxdWU7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICB9XG4gIH1cbn1cblxuXG4uZXh0ZXJuYWwtbGluay1idG4ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuQG1lZGlhKG1heC13aWR0aDogMTQwMHB4KSB7XG4gIC5ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcIi4gLlwiXG4gICAgXCIuIC5cIlxuICAgIFwiLiAuXCI7XG4gIH1cbn1cblxuQG1lZGlhKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCIuXCJcbiAgICBcIi5cIlxuICAgIFwiLlwiO1xuICB9XG59XG4iLCIkUHJpbWFyeSAgICAgIDogI2U2ZjFmZjtcbiRBY2NlbnQgICAgICAgOiAjMDg5ZWU1O1xuJEFjY2VudE9wYXF1ZSA6ICMwODllZTU2OTtcbiRCYWNrZ3JvdW5kICAgOiAjMGYwZjBmO1xuJEJnT3BhcXVlICAgICA6IHJnYmEoMTUsIDE1LCAxNSwgMC42OCk7XG5cbiREaXZpZGVyICAgICAgOiBcIi9cIjtcbiRUcmFuc2l0aW9uICAgOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xuJEN1cnNvciAgICAgICA6IHBvaW50ZXI7XG4kTWFpbkZvbnQgICAgIDogTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kQ29kZUZvbnQgICAgIDogJ1NGIE1vbm8nLCAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLGtEQUFBO0VBQ0EsMERDRWM7RUREZCx3Q0NGYztFREdkLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBREY7QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0NsQlk7QURpQmhCO0FBR0U7RUFDRSxlQUFBO0FBREo7QUFJRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUZKO0FBS0U7RUFDRSxlQUFBO0FBSEo7QUFNRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUpKO0FBTUk7RUFDRSxxQkFBQTtBQUpOO0FBT0k7RUFDRSxZQ3JDVTtFRHNDVixjQzVDVTtFRDZDVixnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBTE47QUFRSTtFQUNFLFdBQUE7QUFOTjs7QUFXQTtFQUNFLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLDRDQUNFO0FBVEo7QUFhRTtFQUNFLHdDQy9EWTtBRG9EaEI7QUFhSTtFQUNFLDJCQUFBO0FBWE47O0FBaUJBO0VBQ0UsY0FBQTtBQWRGOztBQWlCQTtFQUNFO0lBQ0UsOEJBQUE7SUFDQSw2QkFBQTtJQUNBLHNDQUNBO0VBZkY7QUFDRjtBQW9CQTtFQUNFO0lBQ0UsMkJBQUE7SUFDQSx3QkFBQTtJQUNBLGdDQUNBO0VBbkJGO0FBQ0Y7QUFFQSxnMUhBQWcxSCIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvdmFyaWFibGVzXCI7XG5cbi5wcm9qZWN0LWJveCB7XG4gIGhlaWdodDogMzUwcHg7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0xNXB4IHJnYmEoMiwgMTIsIDI3LCAwLjcpO1xuICB0cmFuc2l0aW9uOiAkVHJhbnNpdGlvbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJEJnT3BhcXVlO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAycmVtIDEuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcblxuICBzdmcge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBjb2xvcjogJEFjY2VudDtcbiAgfVxuICAuZXh0ZXJuYWwtbGlua3Mge1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgbWFyZ2luOiAwIDAgMTBweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cblxuICAuZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgfVxuXG4gIC5za2lsbHMge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMS43NTtcblxuICAgIC51bmRlcmxpbmUge1xuICAgICAgcGFkZGluZy1ib3R0b206IDMuNXB4O1xuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogJERpdmlkZXI7XG4gICAgICBjb2xvcjogJFByaW1hcnk7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgb3BhY2l0eTogLjc7XG4gICAgICBtYXJnaW46IDVweDtcbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICB9XG4gIH1cbn1cblxuLmdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSAzMCUgMzAlO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gIGdhcDogMTVweCAxNXB4O1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiLiAuIC5cIlxuICAgIFwiLiAuIC5cIlxuICAgIFwiLiAuIC5cIjtcblxuICAuZ3JpZC1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkQmdPcGFxdWU7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICB9XG4gIH1cbn1cblxuXG4uZXh0ZXJuYWwtbGluay1idG4ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuQG1lZGlhKG1heC13aWR0aDogMTQwMHB4KSB7XG4gIC5ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcIi4gLlwiXG4gICAgXCIuIC5cIlxuICAgIFwiLiAuXCI7XG4gIH1cbn1cblxuQG1lZGlhKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCIuXCJcbiAgICBcIi5cIlxuICAgIFwiLlwiO1xuICB9XG59XG4iLCIkUHJpbWFyeSAgICAgIDogI2U2ZjFmZjtcbiRBY2NlbnQgICAgICAgOiAjMDg5ZWU1O1xuJEFjY2VudE9wYXF1ZSA6ICMwODllZTU2OTtcbiRCYWNrZ3JvdW5kICAgOiAjMGYwZjBmO1xuJEJnT3BhcXVlICAgICA6IHJnYmEoMTUsIDE1LCAxNSwgMC42OCk7XG5cbiREaXZpZGVyICAgICAgOiBcIi9cIjtcbiRUcmFuc2l0aW9uICAgOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xuJEN1cnNvciAgICAgICA6IHBvaW50ZXI7XG4kTWFpbkZvbnQgICAgIDogTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kQ29kZUZvbnQgICAgIDogJ1NGIE1vbm8nLCAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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