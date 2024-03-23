"use strict";
(self["webpackChunkng"] = self["webpackChunkng"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 2865);
/* harmony import */ var _components_home_projects_projects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/projects/projects.component */ 3979);
/* harmony import */ var _components_home_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/contact/contact.component */ 7301);
/* harmony import */ var _components_home_experience_experience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/experience/experience.component */ 5755);
/* harmony import */ var _components_home_highlights_highlights_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/highlights/highlights.component */ 7229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);








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
  static ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ 7502);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _components_general_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/general/header/header.component */ 3538);
/* harmony import */ var _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/general/footer/footer.component */ 678);
/* harmony import */ var _components_general_background_background_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/general/background/background.component */ 7344);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);







class AppComponent {
  titleService;
  metaService;
  title = 'Arun Varghese';
  constructor(titleService, metaService) {
    this.titleService = titleService;
    this.metaService = metaService;
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
  static ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Meta));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 4,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-header")(1, "router-outlet")(2, "app-footer")(3, "app-background");
      }
    },
    dependencies: [_components_general_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _components_general_background_background_component__WEBPACK_IMPORTED_MODULE_3__.BackgroundComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _components_home_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.module */ 3908);
/* harmony import */ var _components_general_general_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/general/general.module */ 2864);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/service-worker */ 6140);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ 5312);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ 8952);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);














function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class AppModule {
  static ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
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

/***/ 7344:
/*!***********************************************************************!*\
  !*** ./src/app/components/general/background/background.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackgroundComponent: () => (/* binding */ BackgroundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


const _c0 = a0 => ({
  "background-image": a0
});
class BackgroundComponent {
  BG_IMG = 'assets/images/background/code.png';
  static ɵfac = function BackgroundComponent_Factory(t) {
    return new (t || BackgroundComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
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
    styles: [".bg-img[_ngcontent-%COMP%] {\n  background: #282f35 no-repeat center center;\n  transform-origin: center;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhY2tncm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJiYWNrZ3JvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWltZyB7XG4gIGJhY2tncm91bmQ6ICMyODJmMzUgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IC0xO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL2JhY2tncm91bmQvYmFja2dyb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJDQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0Esd29CQUF3b0IiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctaW1nIHtcbiAgYmFja2dyb3VuZDogIzI4MmYzNSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTE7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 678:
/*!***************************************************************!*\
  !*** ./src/app/components/general/footer/footer.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 852);



class FooterComponent {
  static ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 19,
    vars: 16,
    consts: [["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "3000", 1, "footer-left-bar", "d-none", "d-md-block"], ["target", "_blank", 3, "href"], [1, "fab", "fa-github"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "1000", 1, "footer-right-bar", "d-none", "d-md-block"], [1, "footer-credits", "text-center"], ["target", "_blank", "rel", "nofollow noopener noreferrer", 3, "href"], ["alt", "Angular", 1, "logo", 3, "src"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer")(1, "div")(2, "ul", 0)(3, "li")(4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3)(8, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4)(13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Built with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animateFooter", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, "Github"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", "mailto:" + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, "Email"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 10, "Email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 12, "Repo"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 14, "Footer.Logo"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    styles: ["footer[_ngcontent-%COMP%] {\n  color: #e6f1ff;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]:after, footer[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  width: 1px;\n  height: 90px;\n  margin: 0 auto;\n  background-color: #089ee5;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -16px;\n  left: 51px;\n  padding: 0;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 19px;\n  color: #e6f1ff;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 33px;\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0px;\n  right: 41px;\n  padding: 0;\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  font-size: 12px;\n  -webkit-letter-spacing: 0.1em;\n  -moz-letter-spacing: 0.1em;\n  -ms-letter-spacing: 0.1em;\n  letter-spacing: 0.1em;\n  writing-mode: vertical-rl;\n  margin: 20px auto;\n  padding: 10px;\n  color: #e6f1ff;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%] {\n  font-family: Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  font-size: 12px;\n  line-height: 1;\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  margin-top: -60px;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #e6f1ff;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition-property: all;\n  transition-duration: 0.25s;\n  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition-delay: 0s;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, footer[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  color: #089ee5;\n}\nfooter[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 25px;\n  margin-top: -5px;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0NIWTtBREVoQjtBQUdJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkNWUTtBRFNoQjtBQUlJO0VBQ0ksZ0JBQUE7QUFGUjtBQUtJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQUhSO0FBS1E7RUFDSSxlQUFBO0VBQ0EsY0MxQkk7QUR1QmhCO0FBTVE7RUFDSSxnQkFBQTtBQUpaO0FBTVk7RUFDSSxtQkFBQTtBQUpoQjtBQVNJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQVBSO0FBU1E7RUFDSSx3QkFBQTtBQVBaO0FBVVE7RUFDSSw0REM1Q0Q7RUQ2Q0MsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBR0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxjQzVESTtBRG9EaEI7QUFXSTtFQUNJLDREQzNERztFRDRESCxlQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7QUFWUjtBQVlRO0VBQ0ksY0MzRUk7RUQ2RUosMERBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0VBQUE7RUFDQSxvQkFBQTtBQVZaO0FBWVk7RUFDSSxxQkFBQTtFQUNBLGNDcEZBO0FEMEVoQjtBQWVJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFiUiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xuXG5mb290ZXJ7XG4gICAgY29sb3I6ICRQcmltYXJ5O1xuXG4gICAgLmZvb3Rlci1sZWZ0LWJhcjphZnRlciwgLmZvb3Rlci1yaWdodC1iYXI6YWZ0ZXJ7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJEFjY2VudDtcbiAgICB9XG5cbiAgICAuZm9vdGVyLWxlZnQtYmFyIGxpLCAuZm9vdGVyLXJpZ2h0LWJhciBsaXtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICAuZm9vdGVyLWxlZnQtYmFye1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogLTE2cHg7XG4gICAgICAgIGxlZnQ6IDUxcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgaXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgICAgIGNvbG9yOiAkUHJpbWFyeTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpe1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcblxuICAgICAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZm9vdGVyLXJpZ2h0LWJhcntcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgcmlnaHQ6IDQxcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgbGl7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICBhe1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRNYWluRm9udDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIC13ZWJraXQtbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgICAgLW1vei1sZXR0ZXItc3BhY2luZzogMC4xZW07XG4gICAgICAgICAgICAtbXMtbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgICAgLXdlYmtpdC13cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xuICAgICAgICAgICAgLW1zLXdyaXRpbmctbW9kZTogdGItcmw7XG4gICAgICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICRQcmltYXJ5O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5mb290ZXItY3JlZGl0c3tcbiAgICAgICAgZm9udC1mYW1pbHk6ICRNYWluRm9udDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcblxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IC02MHB4O1xuXG4gICAgICAgIGF7XG4gICAgICAgICAgICBjb2xvcjogJFByaW1hcnk7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsMC4wNDUsMC4zNTUsMSk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNXM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG5cbiAgICAgICAgICAgICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJEFjY2VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5sb2dvIHtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIH1cbn1cbiIsIiRQcmltYXJ5ICAgICAgOiAjZTZmMWZmO1xuJEFjY2VudCAgICAgICA6ICMwODllZTU7XG4kQWNjZW50T3BhcXVlIDogIzA4OWVlNTY5O1xuJEdyYXkgICAgICAgICA6ICMxYzFjMWM7XG5cbiRNYWluRm9udDogTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kQ29kZUZvbnQ6ICdTRiBNb25vJywgJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQ0hZO0FERWhCO0FBR0k7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQ1ZRO0FEU2hCO0FBSUk7RUFDSSxnQkFBQTtBQUZSO0FBS0k7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBSFI7QUFLUTtFQUNJLGVBQUE7RUFDQSxjQzFCSTtBRHVCaEI7QUFNUTtFQUNJLGdCQUFBO0FBSlo7QUFNWTtFQUNJLG1CQUFBO0FBSmhCO0FBU0k7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBUFI7QUFTUTtFQUNJLHdCQUFBO0FBUFo7QUFVUTtFQUNJLDREQzVDRDtFRDZDQyxlQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFHQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNDNURJO0FEb0RoQjtBQVdJO0VBQ0ksNERDM0RHO0VENERILGVBQUE7RUFDQSxjQUFBO0VBRUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtBQVZSO0FBWVE7RUFDSSxjQzNFSTtFRDZFSiwwREFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnRUFBQTtFQUNBLG9CQUFBO0FBVlo7QUFZWTtFQUNJLHFCQUFBO0VBQ0EsY0NwRkE7QUQwRWhCO0FBZUk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWJSO0FBRkEsbzZJQUFvNkkiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xuXG5mb290ZXJ7XG4gICAgY29sb3I6ICRQcmltYXJ5O1xuXG4gICAgLmZvb3Rlci1sZWZ0LWJhcjphZnRlciwgLmZvb3Rlci1yaWdodC1iYXI6YWZ0ZXJ7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJEFjY2VudDtcbiAgICB9XG5cbiAgICAuZm9vdGVyLWxlZnQtYmFyIGxpLCAuZm9vdGVyLXJpZ2h0LWJhciBsaXtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICAuZm9vdGVyLWxlZnQtYmFye1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogLTE2cHg7XG4gICAgICAgIGxlZnQ6IDUxcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgaXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgICAgIGNvbG9yOiAkUHJpbWFyeTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpe1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcblxuICAgICAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZm9vdGVyLXJpZ2h0LWJhcntcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgcmlnaHQ6IDQxcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgbGl7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICBhe1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRNYWluRm9udDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIC13ZWJraXQtbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgICAgLW1vei1sZXR0ZXItc3BhY2luZzogMC4xZW07XG4gICAgICAgICAgICAtbXMtbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgICAgLXdlYmtpdC13cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xuICAgICAgICAgICAgLW1zLXdyaXRpbmctbW9kZTogdGItcmw7XG4gICAgICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICRQcmltYXJ5O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5mb290ZXItY3JlZGl0c3tcbiAgICAgICAgZm9udC1mYW1pbHk6ICRNYWluRm9udDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcblxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IC02MHB4O1xuXG4gICAgICAgIGF7XG4gICAgICAgICAgICBjb2xvcjogJFByaW1hcnk7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsMC4wNDUsMC4zNTUsMSk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNXM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG5cbiAgICAgICAgICAgICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJEFjY2VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5sb2dvIHtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIH1cbn1cbiIsIiRQcmltYXJ5ICAgICAgOiAjZTZmMWZmO1xuJEFjY2VudCAgICAgICA6ICMwODllZTU7XG4kQWNjZW50T3BhcXVlIDogIzA4OWVlNTY5O1xuJEdyYXkgICAgICAgICA6ICMxYzFjMWM7XG5cbiRNYWluRm9udDogTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kQ29kZUZvbnQ6ICdTRiBNb25vJywgJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)("animateFooter", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(":enter", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)("*", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
        opacity: 0,
        transform: "translateY(100%)"
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.stagger)(50, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)("250ms cubic-bezier(0.35, 0, 0.25, 1)", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
        opacity: 1,
        transform: "none"
      }))])])])])]
    }
  });
}

/***/ }),

/***/ 2864:
/*!******************************************************!*\
  !*** ./src/app/components/general/general.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralModule: () => (/* binding */ GeneralModule),
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ 678);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 3538);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 8952);
/* harmony import */ var _background_background_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background/background.component */ 7344);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);












function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class GeneralModule {
  static ɵfac = function GeneralModule_Factory(t) {
    return new (t || GeneralModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: GeneralModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
      }
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](GeneralModule, {
    declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _background_background_component__WEBPACK_IMPORTED_MODULE_2__.BackgroundComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule],
    exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _background_background_component__WEBPACK_IMPORTED_MODULE_2__.BackgroundComponent]
  });
})();

/***/ }),

/***/ 3538:
/*!***************************************************************!*\
  !*** ./src/app/components/general/header/header.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/language/language.service */ 9263);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 852);








const _c0 = a0 => ({
  "pointer-events": a0
});
function HeaderComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 14)(1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_li_7_Template_a_click_1_listener() {
      const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.navigate(item_r3.link));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-aos-delay", i_r5 * 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r3.label, " ");
  }
}
function HeaderComponent_li_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 17)(1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_li_19_Template_a_click_1_listener() {
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.navigate(item_r7.link));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-aos-delay", i_r8 * 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r7.label, " ");
  }
}
class HeaderComponent {
  router;
  languageService;
  responsiveMenuVisible = false;
  pageYPosition;
  languageFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl();
  fileName = "";
  constructor(router, languageService) {
    this.router = router;
    this.languageService = languageService;
  }
  ngOnInit() {
    this.languageFormControl.setValue(this.languageService.DEFAULT);
  }
  navigate(link) {
    this.router.navigate([link]);
  }
  scroll(el) {
    if (document.getElementById(el)) {
      document.getElementById(el).scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      this.router.navigate(['/home']).then(() => document.getElementById(el).scrollIntoView({
        behavior: 'smooth'
      }));
    }
    this.responsiveMenuVisible = false;
  }
  downloadResume() {
    this.languageService.translateService.get("ResumeFileName").subscribe(val => {
      this.fileName = val;
      window.open(window.location.href + "/../assets/resume/" + this.fileName, "_blank");
    });
  }
  getScrollPosition(event) {
    this.pageYPosition = window.pageYOffset;
  }
  static ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler($event) {
          return ctx.getScrollPosition(ctx.getScrollPosition($event));
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
      }
    },
    decls: 25,
    vars: 28,
    consts: [["nav", "ngbNav"], [1, "navbar", "main-navbar", "on-top"], [1, "container"], [1, "navbar-brand", "text-light", 3, "routerLink"], ["ngbNav", "", 1, "menu-ul"], ["ngbNavItem", "", "data-aos", "zoom-out", "data-aos-duration", "1000", 4, "ngFor", "ngForOf"], ["ngbNavItem", ""], ["ngbNavLink", "", 1, "main-btn", "resume-btn", 3, "click"], [1, "menu-wrapper"], [1, "hamburger-menu", 3, "click"], [1, "menu-responsive", 3, "ngStyle"], [1, "on-top"], ["data-aos", "fade-down", "data-aos-duration", "1000", 4, "ngFor", "ngForOf"], [1, "main-btn", "resume-btn", 3, "click"], ["ngbNavItem", "", "data-aos", "zoom-out", "data-aos-duration", "1000"], ["ngbNavLink", "", 3, "click"], [1, "underline", "nav-text"], ["data-aos", "fade-down", "data-aos-duration", "1000"], [3, "click"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 1)(1, "div", 2)(2, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 4, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HeaderComponent_li_7_Template, 4, 2, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 6)(10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.downloadResume());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8)(14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.responsiveMenuVisible = !ctx.responsiveMenuVisible);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10)(16, "aside", 11)(17, "nav")(18, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, HeaderComponent_li_19_Template, 3, 2, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li")(22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.downloadResume());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("nav-shadow", ctx.pageYPosition > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animateMenu", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "top");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 16, "Header.InitialsLogo"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 18, "Header.NavItems"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 20, "Header.ResumeBtn"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("animate", ctx.responsiveMenuVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](26, _c0, !ctx.responsiveMenuVisible ? "none" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("aside-show", ctx.responsiveMenuVisible)("nav-shadow", ctx.pageYPosition > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 22, "Header.NavItems"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 24, "Header.ResumeBtn"), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavItemRole, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavLinkBase, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
    styles: [".main-navbar[_ngcontent-%COMP%] {\n  height: 70px;\n  background: #1c1c1c;\n  font-family: Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0px 13px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-left: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  bottom: 0px;\n  right: 0px;\n  width: 100%;\n  height: 100vh;\n  z-index: 10;\n  transform: translateX(0vw);\n  visibility: visible;\n  outline: 0px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .resume-btn[_ngcontent-%COMP%] {\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n  margin-left: 20px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .language-container[_ngcontent-%COMP%] {\n  width: 200px;\n  margin-left: 18px;\n  margin-top: 50px;\n  padding-left: 0px;\n  padding-bottom: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .language-container-selector[_ngcontent-%COMP%] {\n  display: flex;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .language-container-selector[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.main-navbar[_ngcontent-%COMP%]   .aside-show[_ngcontent-%COMP%] {\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  right: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%] {\n  width: 75vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: #1c1c1c;\n  height: 100%;\n  position: relative;\n  right: -625px;\n  margin-left: auto;\n  font-family: Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  box-shadow: rgba(2, 12, 27, 0.7) -10px 0px 30px -15px;\n  padding: 25px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  flex-direction: column;\n  text-align: center;\n  color: #e6f1ff;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin: 0px auto 10px;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #089ee5;\n  font-size: 14px;\n  margin-bottom: 5px;\n  margin-right: 5px;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  -webkit-text-decoration-skip: ink;\n          text-decoration-skip-ink: auto;\n  color: inherit;\n  position: relative;\n  cursor: pointer;\n  width: 100%;\n  text-decoration: none;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  padding: 3px 20px 20px;\n}\n.main-navbar[_ngcontent-%COMP%]   .resume-btn[_ngcontent-%COMP%] {\n  padding: 7px 15px !important;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding: 5px 0px;\n  color: inherit;\n  margin: 0px;\n  font-size: 13px;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #089ee5;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-number[_ngcontent-%COMP%] {\n  color: #089ee5;\n  font-size: 12px;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%] {\n  color: #e6f1ff !important;\n  padding-bottom: 4px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 36px;\n  height: 60px;\n  cursor: pointer;\n  z-index: 11;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%], .main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:after, .main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:before {\n  width: 36px;\n  height: 1.5px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%] {\n  position: relative;\n  transform: translateY(25px);\n  background: #089ee5;\n  transition: all 0ms 300ms;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 8px;\n  background: #089ee5;\n  transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 8px;\n  background: #089ee5;\n  transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%]:after {\n  top: 0;\n  transform: rotate(45deg);\n  transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%]:before {\n  bottom: 0;\n  transform: rotate(-45deg);\n  transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.on-top[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 9;\n  height: 100px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n\n.nav-shadow[_ngcontent-%COMP%] {\n  height: 70px;\n  box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n\n@media (max-width: 1000px) {\n  .main-navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0.5rem 0.7rem;\n  }\n}\n@media (max-width: 827px) {\n  nav[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 827px) {\n  .menu-wrapper[_ngcontent-%COMP%], .menu-responsive[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.flag-text[_ngcontent-%COMP%] {\n  color: inherit;\n  margin: 0 10px;\n  font-size: 13px;\n  font-family: Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n}\n\n.language-container[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-bottom: 4px;\n  background: #172a45;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.language-container-selector[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  color: #cbd5f5 !important;\n  padding: 11px 8px !important;\n  text-align: center;\n  background: #0a192f !important;\n}\n\n.language-container-selector.active[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  color: #cbd5f5 !important;\n  padding: 11px 8px !important;\n  text-align: center;\n  background: #172a45 !important;\n}\n\n.language-container-selector[_ngcontent-%COMP%]:hover {\n  background: #172a45 !important;\n}\n\n.arrow-language[_ngcontent-%COMP%] {\n  font-size: 10px;\n  height: 10px;\n  width: 10px;\n  fill: #089ee5;\n}\n\n  .dropdown-toggle::after {\n  display: none;\n}\n\n  .dropdown-menu.show {\n  padding: 0 !important;\n  border-radius: 7px !important;\n  background: #ccd6f6 !important;\n  margin-top: 10px !important;\n  left: 20px !important;\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n}\n\n.arrow-active[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 25px;\n  fill: #089ee5;\n  visibility: hidden;\n}\n\n.language-container-selector.active[_ngcontent-%COMP%]   .arrow-active[_ngcontent-%COMP%] {\n  visibility: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNERDQ087QUREWDtBQUVNO0VBQ0UsZ0JBQUE7QUFBUjtBQUdNO0VBQ0UsZ0JBQUE7QUFEUjtBQUdNO0VBQ0UsaUJBQUE7QUFEUjtBQUtJO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkRBQUE7QUFIUjtBQUtVO0VBQ0Usd0JBQUE7QUFIWjtBQUtVO0VBQ0Usa0NBQUE7RUFBQSw2QkFBQTtFQUNBLGlCQUFBO0FBSFo7QUFLVTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUhaO0FBS1U7RUFDRSxhQUFBO0FBSFo7QUFJWTtFQUNFLFdBQUE7QUFGZDtBQVFJO0VBQ0ksNkRBQUE7RUFDQSxVQUFBO0FBTlI7QUFRSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBRUEsdUJBQUE7RUFFQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJDL0RRO0VEZ0VSLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDREQ2xFRztFRG1FSCxxREFBQTtFQUNBLGFBQUE7RUFDQSw2REFBQTtBQU5SO0FBT1E7RUFDSSxhQUFBO0VBRUEsOEJBQUE7RUFFQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0NwRkk7QUQrRWhCO0FBTVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUpoQjtBQUtnQjtFQUNJLGVBQUE7RUFDQSxxQkFBQTtBQUhwQjtBQUlvQjtFQUNJLGNBQUE7RUFDQSxjQzlGUjtFRCtGUSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUZ4QjtBQUlvQjtFQUNJLHFCQUFBO0VBQ0EsaUNBQUE7VUFBQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSw2REFBQTtFQUNBLHNCQUFBO0FBRnhCO0FBUUk7RUFDRSw0QkFBQTtBQU5OO0FBUUk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQU5SO0FBT1E7RUFDSSxjQzNISTtBRHNIaEI7QUFRSTtFQUNJLGNDL0hRO0VEZ0lSLGVBQUE7QUFOUjtBQVFJO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQU5OO0FBUUk7RUFDSSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQU5SO0FBT1E7OztFQUdJLFdBQUE7RUFDQSxhQUFBO0FBTFo7QUFPUTtFQUNJLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkN4Skk7RUR5SkoseUJBQUE7QUFMWjtBQU1ZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxtQkMvSkE7RURnS0EsNkdBQUE7QUFKaEI7QUFNWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsbUJDdktBO0VEd0tBLDBHQUFBO0FBSmhCO0FBTVk7RUFDSSxrQ0FBQTtBQUpoQjtBQUtnQjtFQUNJLE1BQUE7RUFDQSx3QkFBQTtFQUNBLDBHQUFBO0FBSHBCO0FBS2dCO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkdBQUE7QUFIcEI7O0FBVUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDZEQUFBO0FBUEo7O0FBVUE7RUFDSSxZQUFBO0VBQ0Esa0RBQUE7RUFDQSw2REFBQTtBQVBKOztBQVVBO0VBRVE7SUFDSSxTQUFBO0lBQ0Esc0JBQUE7RUFSVjtBQUNGO0FBWUE7RUFDSTtJQUNJLGFBQUE7RUFWTjtBQUNGO0FBYUE7RUFDSTs7SUFFSSxhQUFBO0VBWE47QUFDRjtBQWNBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNERDaE9PO0FEb05YOztBQWVBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFaSjs7QUFlQTtFQUNJLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUFaSjs7QUFlQTtFQUNJLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUFaSjs7QUFlQTtFQUNJLDhCQUFBO0FBWko7O0FBMkJBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUNwUlk7QUQ0UGhCOztBQTJCQTtFQUNJLGFBQUE7QUF4Qko7O0FBMkJBO0VBQ0kscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLGtEQUFBO0FBeEJKOztBQTJCQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFDeFNZO0VEeVNaLGtCQUFBO0FBeEJKOztBQTRCSTtFQUNJLG1CQUFBO0FBekJSIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XG4ubWFpbi1uYXZiYXIge1xuICAgIGhlaWdodDogNzBweDtcbiAgICBiYWNrZ3JvdW5kOiAkR3JheTtcbiAgICBmb250LWZhbWlseTogJE1haW5Gb250O1xuICAgIC5tZW51LXVse1xuICAgICAgbGl7XG4gICAgICAgIG1hcmdpbjogMHB4IDEzcHg7XG4gICAgICB9XG5cbiAgICAgIGxpOmZpcnN0LWNoaWxke1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgfVxuICAgICAgbGk6bGFzdC1jaGlsZHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICB9XG5cbiAgICB9XG4gICAgLm1lbnUtcmVzcG9uc2l2ZSB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwdncpO1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICBvdXRsaW5lOiAwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG4gICAgICAgIGxpe1xuICAgICAgICAgIGF7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZXN1bWUtYnRue1xuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxhbmd1YWdlLWNvbnRhaW5lcntcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxhbmd1YWdlLWNvbnRhaW5lci1zZWxlY3RvcntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuICAgIC5hc2lkZS1zaG93IHtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICB9XG4gICAgYXNpZGUge1xuICAgICAgICB3aWR0aDogNzV2dztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJEdyYXk7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogLTYyNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgZm9udC1mYW1pbHk6ICRNYWluRm9udDtcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgyLCAxMiwgMjcsIDAuNykgLTEwcHggMHB4IDMwcHggLTE1cHg7XG4gICAgICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG4gICAgICAgIG5hdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICRQcmltYXJ5O1xuICAgICAgICAgICAgb2wge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvIDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJEFjY2VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggMjBweCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5yZXN1bWUtYnRue1xuICAgICAgcGFkZGluZzogN3B4IDE1cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLm5hdi1saW5rIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDBweDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICRBY2NlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm5hdi1udW1iZXIge1xuICAgICAgICBjb2xvcjogJEFjY2VudDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICAubmF2LXRleHR7XG4gICAgICBjb2xvcjogJFByaW1hcnkgIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgfVxuICAgIC5tZW51LXdyYXBwZXIge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgei1pbmRleDogMTE7XG4gICAgICAgIC5oYW1idXJnZXItbWVudSxcbiAgICAgICAgLmhhbWJ1cmdlci1tZW51OmFmdGVyLFxuICAgICAgICAuaGFtYnVyZ2VyLW1lbnU6YmVmb3JlIHtcbiAgICAgICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxLjVweDtcbiAgICAgICAgfVxuICAgICAgICAuaGFtYnVyZ2VyLW1lbnUge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI1cHgpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJEFjY2VudDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwbXMgMzAwbXM7XG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IDhweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkQWNjZW50O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAzMDBtcyAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHRvcDogOHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRBY2NlbnQ7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdG9wIDMwMG1zIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuYW5pbWF0ZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRvcCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIHRyYW5zZm9ybSAzMDBtcyAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBib3R0b20gMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCB0cmFuc2Zvcm0gMzAwbXMgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm9uLXRvcCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiA5O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbn1cblxuLm5hdi1zaGFkb3cge1xuICAgIGhlaWdodDogNzBweDtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAtMTBweCByZ2JhKDIsIDEyLCAyNywgMC43KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgLm1haW4tbmF2YmFyIHtcbiAgICAgICAgLm5hdi1saW5rIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtIC43cmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODI3cHgpIHtcbiAgICBuYXYgLm5hdiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogODI3cHgpIHtcbiAgICAubWVudS13cmFwcGVyLFxuICAgIC5tZW51LXJlc3BvbnNpdmUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuLmZsYWctdGV4dCB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiAkTWFpbkZvbnQ7XG59XG5cbi5sYW5ndWFnZS1jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgYmFja2dyb3VuZDogIzE3MmE0NTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGFuZ3VhZ2UtY29udGFpbmVyLXNlbGVjdG9yIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2NiZDVmNSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDExcHggOHB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICMwYTE5MmYgIWltcG9ydGFudDtcbn1cblxuLmxhbmd1YWdlLWNvbnRhaW5lci1zZWxlY3Rvci5hY3RpdmUge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjY2JkNWY1ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTFweCA4cHggIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogIzE3MmE0NSAhaW1wb3J0YW50O1xufVxuXG4ubGFuZ3VhZ2UtY29udGFpbmVyLXNlbGVjdG9yOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTcyYTQ1ICFpbXBvcnRhbnQ7XG59XG5cbi8vIC5sYW5ndWFnZS1jb250YWluZXItc2VsZWN0b3IuYWN0aXZlOmFmdGVyIHtcbi8vICAgICBjb250ZW50OiBcIiBcIjtcbi8vICAgICBiYWNrZ3JvdW5kOiAjNThlMmM0O1xuLy8gICAgIHdpZHRoOiA2MSU7XG4vLyAgICAgaGVpZ2h0OiAxcHg7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgICAgbGVmdDogMDtcbi8vICAgICByaWdodDogMDtcbi8vICAgICBtYXJnaW46IGF1dG87XG4vLyAgICAgbWFyZ2luLXRvcDogMjFweDtcbi8vIH1cbi5hcnJvdy1sYW5ndWFnZSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICB3aWR0aDogMTBweDtcbiAgICBmaWxsOiAkQWNjZW50O1xufVxuXG46Om5nLWRlZXAgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbjo6bmctZGVlcCAuZHJvcGRvd24tbWVudS5zaG93IHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogI2NjZDZmNiAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICBsZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggLTE1cHggcmdiKDIgMTIgMjcgLyA3MCUpO1xufVxuXG4uYXJyb3ctYWN0aXZlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGZpbGw6ICRBY2NlbnQ7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4ubGFuZ3VhZ2UtY29udGFpbmVyLXNlbGVjdG9yLmFjdGl2ZSB7XG4gICAgLmFycm93LWFjdGl2ZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IGluaGVyaXQ7XG4gICAgfVxufVxuIiwiJFByaW1hcnkgICAgICA6ICNlNmYxZmY7XG4kQWNjZW50ICAgICAgIDogIzA4OWVlNTtcbiRBY2NlbnRPcGFxdWUgOiAjMDg5ZWU1Njk7XG4kR3JheSAgICAgICAgIDogIzFjMWMxYztcblxuJE1haW5Gb250OiBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRDb2RlRm9udDogJ1NGIE1vbm8nLCAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw0RENDTztBRERYO0FBRU07RUFDRSxnQkFBQTtBQUFSO0FBR007RUFDRSxnQkFBQTtBQURSO0FBR007RUFDRSxpQkFBQTtBQURSO0FBS0k7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw2REFBQTtBQUhSO0FBS1U7RUFDRSx3QkFBQTtBQUhaO0FBS1U7RUFDRSxrQ0FBQTtFQUFBLDZCQUFBO0VBQ0EsaUJBQUE7QUFIWjtBQUtVO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBSFo7QUFLVTtFQUNFLGFBQUE7QUFIWjtBQUlZO0VBQ0UsV0FBQTtBQUZkO0FBUUk7RUFDSSw2REFBQTtFQUNBLFVBQUE7QUFOUjtBQVFJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFFQSx1QkFBQTtFQUVBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkMvRFE7RURnRVIsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsNERDbEVHO0VEbUVILHFEQUFBO0VBQ0EsYUFBQTtFQUNBLDZEQUFBO0FBTlI7QUFPUTtFQUNJLGFBQUE7RUFFQSw4QkFBQTtFQUVBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQ3BGSTtBRCtFaEI7QUFNWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBSmhCO0FBS2dCO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0FBSHBCO0FBSW9CO0VBQ0ksY0FBQTtFQUNBLGNDOUZSO0VEK0ZRLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRnhCO0FBSW9CO0VBQ0kscUJBQUE7RUFDQSxpQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLDZEQUFBO0VBQ0Esc0JBQUE7QUFGeEI7QUFRSTtFQUNFLDRCQUFBO0FBTk47QUFRSTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBTlI7QUFPUTtFQUNJLGNDM0hJO0FEc0hoQjtBQVFJO0VBQ0ksY0MvSFE7RURnSVIsZUFBQTtBQU5SO0FBUUk7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBTk47QUFRSTtFQUNJLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBTlI7QUFPUTs7O0VBR0ksV0FBQTtFQUNBLGFBQUE7QUFMWjtBQU9RO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQ3hKSTtFRHlKSix5QkFBQTtBQUxaO0FBTVk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQy9KQTtFRGdLQSw2R0FBQTtBQUpoQjtBQU1ZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxtQkN2S0E7RUR3S0EsMEdBQUE7QUFKaEI7QUFNWTtFQUNJLGtDQUFBO0FBSmhCO0FBS2dCO0VBQ0ksTUFBQTtFQUNBLHdCQUFBO0VBQ0EsMEdBQUE7QUFIcEI7QUFLZ0I7RUFDSSxTQUFBO0VBQ0EseUJBQUE7RUFDQSw2R0FBQTtBQUhwQjs7QUFVQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsNkRBQUE7QUFQSjs7QUFVQTtFQUNJLFlBQUE7RUFDQSxrREFBQTtFQUNBLDZEQUFBO0FBUEo7O0FBVUE7RUFFUTtJQUNJLFNBQUE7SUFDQSxzQkFBQTtFQVJWO0FBQ0Y7QUFZQTtFQUNJO0lBQ0ksYUFBQTtFQVZOO0FBQ0Y7QUFhQTtFQUNJOztJQUVJLGFBQUE7RUFYTjtBQUNGO0FBY0E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSw0RENoT087QURvTlg7O0FBZUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVpKOztBQWVBO0VBQ0ksb0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQVpKOztBQWVBO0VBQ0ksb0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQVpKOztBQWVBO0VBQ0ksOEJBQUE7QUFaSjs7QUEyQkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQ3BSWTtBRDRQaEI7O0FBMkJBO0VBQ0ksYUFBQTtBQXhCSjs7QUEyQkE7RUFDSSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0RBQUE7QUF4Qko7O0FBMkJBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUN4U1k7RUR5U1osa0JBQUE7QUF4Qko7O0FBNEJJO0VBQ0ksbUJBQUE7QUF6QlI7QUFEQSw0MmJBQTQyYiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XG4ubWFpbi1uYXZiYXIge1xuICAgIGhlaWdodDogNzBweDtcbiAgICBiYWNrZ3JvdW5kOiAkR3JheTtcbiAgICBmb250LWZhbWlseTogJE1haW5Gb250O1xuICAgIC5tZW51LXVse1xuICAgICAgbGl7XG4gICAgICAgIG1hcmdpbjogMHB4IDEzcHg7XG4gICAgICB9XG5cbiAgICAgIGxpOmZpcnN0LWNoaWxke1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgfVxuICAgICAgbGk6bGFzdC1jaGlsZHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICB9XG5cbiAgICB9XG4gICAgLm1lbnUtcmVzcG9uc2l2ZSB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwdncpO1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICBvdXRsaW5lOiAwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG4gICAgICAgIGxpe1xuICAgICAgICAgIGF7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZXN1bWUtYnRue1xuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxhbmd1YWdlLWNvbnRhaW5lcntcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxhbmd1YWdlLWNvbnRhaW5lci1zZWxlY3RvcntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuICAgIC5hc2lkZS1zaG93IHtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICB9XG4gICAgYXNpZGUge1xuICAgICAgICB3aWR0aDogNzV2dztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJEdyYXk7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogLTYyNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgZm9udC1mYW1pbHk6ICRNYWluRm9udDtcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgyLCAxMiwgMjcsIDAuNykgLTEwcHggMHB4IDMwcHggLTE1cHg7XG4gICAgICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG4gICAgICAgIG5hdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICRQcmltYXJ5O1xuICAgICAgICAgICAgb2wge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvIDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJEFjY2VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggMjBweCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5yZXN1bWUtYnRue1xuICAgICAgcGFkZGluZzogN3B4IDE1cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLm5hdi1saW5rIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDBweDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICRBY2NlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm5hdi1udW1iZXIge1xuICAgICAgICBjb2xvcjogJEFjY2VudDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICAubmF2LXRleHR7XG4gICAgICBjb2xvcjogJFByaW1hcnkgIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgfVxuICAgIC5tZW51LXdyYXBwZXIge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgei1pbmRleDogMTE7XG4gICAgICAgIC5oYW1idXJnZXItbWVudSxcbiAgICAgICAgLmhhbWJ1cmdlci1tZW51OmFmdGVyLFxuICAgICAgICAuaGFtYnVyZ2VyLW1lbnU6YmVmb3JlIHtcbiAgICAgICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxLjVweDtcbiAgICAgICAgfVxuICAgICAgICAuaGFtYnVyZ2VyLW1lbnUge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI1cHgpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJEFjY2VudDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwbXMgMzAwbXM7XG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IDhweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkQWNjZW50O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAzMDBtcyAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHRvcDogOHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRBY2NlbnQ7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdG9wIDMwMG1zIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuYW5pbWF0ZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRvcCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIHRyYW5zZm9ybSAzMDBtcyAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBib3R0b20gMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCB0cmFuc2Zvcm0gMzAwbXMgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm9uLXRvcCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiA5O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbn1cblxuLm5hdi1zaGFkb3cge1xuICAgIGhlaWdodDogNzBweDtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAtMTBweCByZ2JhKDIsIDEyLCAyNywgMC43KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgLm1haW4tbmF2YmFyIHtcbiAgICAgICAgLm5hdi1saW5rIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtIC43cmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODI3cHgpIHtcbiAgICBuYXYgLm5hdiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogODI3cHgpIHtcbiAgICAubWVudS13cmFwcGVyLFxuICAgIC5tZW51LXJlc3BvbnNpdmUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuLmZsYWctdGV4dCB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiAkTWFpbkZvbnQ7XG59XG5cbi5sYW5ndWFnZS1jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgYmFja2dyb3VuZDogIzE3MmE0NTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGFuZ3VhZ2UtY29udGFpbmVyLXNlbGVjdG9yIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2NiZDVmNSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDExcHggOHB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICMwYTE5MmYgIWltcG9ydGFudDtcbn1cblxuLmxhbmd1YWdlLWNvbnRhaW5lci1zZWxlY3Rvci5hY3RpdmUge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjY2JkNWY1ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTFweCA4cHggIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogIzE3MmE0NSAhaW1wb3J0YW50O1xufVxuXG4ubGFuZ3VhZ2UtY29udGFpbmVyLXNlbGVjdG9yOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTcyYTQ1ICFpbXBvcnRhbnQ7XG59XG5cbi8vIC5sYW5ndWFnZS1jb250YWluZXItc2VsZWN0b3IuYWN0aXZlOmFmdGVyIHtcbi8vICAgICBjb250ZW50OiBcIiBcIjtcbi8vICAgICBiYWNrZ3JvdW5kOiAjNThlMmM0O1xuLy8gICAgIHdpZHRoOiA2MSU7XG4vLyAgICAgaGVpZ2h0OiAxcHg7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgICAgbGVmdDogMDtcbi8vICAgICByaWdodDogMDtcbi8vICAgICBtYXJnaW46IGF1dG87XG4vLyAgICAgbWFyZ2luLXRvcDogMjFweDtcbi8vIH1cbi5hcnJvdy1sYW5ndWFnZSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICB3aWR0aDogMTBweDtcbiAgICBmaWxsOiAkQWNjZW50O1xufVxuXG46Om5nLWRlZXAgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbjo6bmctZGVlcCAuZHJvcGRvd24tbWVudS5zaG93IHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogI2NjZDZmNiAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICBsZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggLTE1cHggcmdiKDIgMTIgMjcgLyA3MCUpO1xufVxuXG4uYXJyb3ctYWN0aXZlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGZpbGw6ICRBY2NlbnQ7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4ubGFuZ3VhZ2UtY29udGFpbmVyLXNlbGVjdG9yLmFjdGl2ZSB7XG4gICAgLmFycm93LWFjdGl2ZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IGluaGVyaXQ7XG4gICAgfVxufVxuIiwiJFByaW1hcnkgICAgICA6ICNlNmYxZmY7XG4kQWNjZW50ICAgICAgIDogIzA4OWVlNTtcbiRBY2NlbnRPcGFxdWUgOiAjMDg5ZWU1Njk7XG4kR3JheSAgICAgICAgIDogIzFjMWMxYztcblxuJE1haW5Gb250OiBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRDb2RlRm9udDogJ1NGIE1vbm8nLCAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)("animateMenu", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(":enter", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.query)("*", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        opacity: 0,
        transform: "translateY(-50%)"
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.stagger)(50, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)("250ms cubic-bezier(0.35, 0, 0.25, 1)", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        opacity: 1,
        transform: "none"
      }))])])])])]
    }
  });
}

/***/ }),

/***/ 155:
/*!************************************************************!*\
  !*** ./src/app/components/home/banner/banner.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BannerComponent: () => (/* binding */ BannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_language_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/language/language.service */ 9263);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 852);




class BannerComponent {
  languageService;
  constructor(languageService) {
    this.languageService = languageService;
  }
  downloadResume() {
    this.languageService.translateService.get("ResumeFileName").subscribe(val => {
      window.open(window.location.href + "/../assets/resume/" + val, "_blank");
    });
  }
  static ɵfac = function BannerComponent_Factory(t) {
    return new (t || BannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_language_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BannerComponent,
    selectors: [["app-banner"]],
    decls: 22,
    vars: 16,
    consts: [[1, "section", "banner"], [1, "container"], [1, "section-box-banner"], [1, "content"], [1, "banner-title"], [1, "banner-description"], [1, "mt-4", 3, "innerHTML"], [1, "div-btn-banner"], [1, "main-btn", 3, "click"]],
    template: function BannerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4)(9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7)(19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BannerComponent_Template_a_click_19_listener() {
          return ctx.downloadResume();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bannerTrigger", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 6, "Banner.Pretitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 8, "Banner.Name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 10, "Banner.Role"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 12, "Banner.Description"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 14, "Banner.ResumeBtn"), " ");
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    styles: [".banner[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: table;\n  height: 100vh;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 98px;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #089ee5;\n  margin: 0 0 20px 3px;\n  font-size: 16px;\n  font-weight: normal;\n  font-family: Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  line-height: 1.1;\n  margin: 0;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 80px;\n  color: #e6f1ff;\n  font-family: Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 60px;\n  color: #e6f1ff;\n  font-family: \"SF Mono\", \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   .banner-description[_ngcontent-%COMP%] {\n  margin-bottom: 70px;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   .div-btn-banner[_ngcontent-%COMP%] {\n  height: 43px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksaUJBQUE7QUFGSjtBQUlJO0VBQ0ksY0FBQTtFQUNBLGFBQUE7QUFGUjtBQUlRO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtBQUZaO0FBSVk7RUFDSSxnQkFBQTtBQUZoQjtBQUtZO0VBRUksY0NuQkE7RURvQkEsb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw0RENuQkw7QURlWDtBQU9ZO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFMaEI7QUFRWTtFQUNJLGVBQUE7RUFDQSxjQ25DQTtFRG9DQSw0REMvQkw7QUR5Qlg7QUFRWTtFQUNJLGVBQUE7RUFDQSxjQ3hDQTtFRHlDQSxvR0NuQ0w7QUQ2Qlg7QUFTWTtFQUNJLG1CQUFBO0FBUGhCO0FBVVk7RUFDSSxnQkFBQTtBQVJoQjtBQVdZO0VBQ0ksWUFBQTtBQVRoQiIsImZpbGUiOiJiYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5iYW5uZXJ7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG5cbiAgICAuY29udGFpbmVye1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcblxuICAgICAgICAuc2VjdGlvbi1ib3gtYmFubmVye1xuICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgICAgICAgIC5jb250ZW50e1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDk4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgxe1xuXG4gICAgICAgICAgICAgICAgY29sb3I6ICRBY2NlbnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjBweCAzcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRNYWluRm9udDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDIsIGgzIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRQcmltYXJ5O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkTWFpbkZvbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoM3tcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRQcmltYXJ5O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5iYW5uZXItZGVzY3JpcHRpb257XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGl2LWJ0bi1iYW5uZXJ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0M3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgIH1cbn1cblxuXG5cbiIsIiRQcmltYXJ5ICAgICAgOiAjZTZmMWZmO1xuJEFjY2VudCAgICAgICA6ICMwODllZTU7XG4kQWNjZW50T3BhcXVlIDogIzA4OWVlNTY5O1xuJEdyYXkgICAgICAgICA6ICMxYzFjMWM7XG5cbiRNYWluRm9udDogTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kQ29kZUZvbnQ6ICdTRiBNb25vJywgJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxpQkFBQTtBQUZKO0FBSUk7RUFDSSxjQUFBO0VBQ0EsYUFBQTtBQUZSO0FBSVE7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0FBRlo7QUFJWTtFQUNJLGdCQUFBO0FBRmhCO0FBS1k7RUFFSSxjQ25CQTtFRG9CQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDREQ25CTDtBRGVYO0FBT1k7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQUxoQjtBQVFZO0VBQ0ksZUFBQTtFQUNBLGNDbkNBO0VEb0NBLDREQy9CTDtBRHlCWDtBQVFZO0VBQ0ksZUFBQTtFQUNBLGNDeENBO0VEeUNBLG9HQ25DTDtBRDZCWDtBQVNZO0VBQ0ksbUJBQUE7QUFQaEI7QUFVWTtFQUNJLGdCQUFBO0FBUmhCO0FBV1k7RUFDSSxZQUFBO0FBVGhCO0FBQ0EsNHNGQUE0c0YiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5iYW5uZXJ7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG5cbiAgICAuY29udGFpbmVye1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcblxuICAgICAgICAuc2VjdGlvbi1ib3gtYmFubmVye1xuICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgICAgICAgIC5jb250ZW50e1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDk4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgxe1xuXG4gICAgICAgICAgICAgICAgY29sb3I6ICRBY2NlbnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjBweCAzcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRNYWluRm9udDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDIsIGgzIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRQcmltYXJ5O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkTWFpbkZvbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoM3tcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRQcmltYXJ5O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5iYW5uZXItZGVzY3JpcHRpb257XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGl2LWJ0bi1iYW5uZXJ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0M3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgIH1cbn1cblxuXG5cbiIsIiRQcmltYXJ5ICAgICAgOiAjZTZmMWZmO1xuJEFjY2VudCAgICAgICA6ICMwODllZTU7XG4kQWNjZW50T3BhcXVlIDogIzA4OWVlNTY5O1xuJEdyYXkgICAgICAgICA6ICMxYzFjMWM7XG5cbiRNYWluRm9udDogTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kQ29kZUZvbnQ6ICdTRiBNb25vJywgJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('bannerTrigger', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)(":enter", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.query)("*", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        opacity: 0,
        transform: "translateX(-50px)"
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.stagger)(50, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)("250ms cubic-bezier(0.35, 0, 0.25, 1)", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        opacity: 1,
        transform: "none"
      }))])])])])]
    }
  });
}

/***/ }),

/***/ 7301:
/*!**************************************************************!*\
  !*** ./src/app/components/home/contact/contact.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 852);


class ContactComponent {
  ngOnInit() {}
  static ɵfac = function ContactComponent_Factory(t) {
    return new (t || ContactComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ContactComponent,
    selectors: [["app-contact"]],
    decls: 15,
    vars: 12,
    consts: [["id", "contact", 1, "section", "contact"], [1, "container"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "mb-4"], [1, "contact-pre-title", "big-subtitle"], [1, "e-font", "contact-title", "big-title"], [1, "mt-5"], ["target", "_blank", "data-aos", "fade-up", "data-aos-duration", "1000", 1, "main-btn", 3, "href"]],
    template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6)(11, "a", 7);
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
    styles: [".contact[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1000px;\n  text-align: center;\n  max-width: 600px;\n  margin: 0 auto;\n  height: 100vh;\n  display: table;\n}\n.contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.contact[_ngcontent-%COMP%]   .contact-title[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  font-size: 60px;\n  font-weight: 600;\n  color: #e6f1ff;\n  margin: auto;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.contact[_ngcontent-%COMP%]   .contact-pre-title[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin: 10px 0 40px;\n  width: 100%;\n  white-space: nowrap;\n  font-size: 32px;\n  display: block;\n  color: #089ee5;\n  font-size: 16px;\n  font-family: Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  font-weight: normal;\n  margin-bottom: 20px;\n  justify-content: center;\n  text-align: center;\n}\n\n@media (max-width: 768px) {\n  .contact[_ngcontent-%COMP%] {\n    height: 100vh;\n    padding: 0 !important;\n    margin: 0 auto !important;\n    display: table;\n  }\n  .contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    display: table-cell;\n    vertical-align: middle;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFGSjtBQUlJO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtBQUZSO0FBS0k7RUFFSSxrQkFBQTtFQUlBLGFBQUE7RUFJQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0MvQlE7RURnQ1IsWUFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7QUFKUjtBQU1JO0VBQ0ksa0JBQUE7RUFJQSxhQUFBO0VBSUEsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0NqRFE7RURrRFIsZUFBQTtFQUNBLDREQy9DRztFRGdESCxtQkFBQTtFQUNBLG1CQUFBO0VBSUEsdUJBQUE7RUFDQSxrQkFBQTtBQUpSOztBQVNBO0VBRUk7SUFDSSxhQUFBO0lBQ0EscUJBQUE7SUFDQSx5QkFBQTtJQUNBLGNBQUE7RUFQTjtFQVNNO0lBQ0ksbUJBQUE7SUFDQSxzQkFBQTtFQVBWO0FBQ0YiLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5jb250YWN0e1xuXG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiB0YWJsZTtcblxuICAgIC5jb250YWluZXJ7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuXG4gICAgLmNvbnRhY3QtdGl0bGV7XG5cbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAkUHJpbWFyeTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgfVxuICAgIC5jb250YWN0LXByZS10aXRsZXtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDEwcHggMCA0MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6ICRBY2NlbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRNYWluRm9udDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XG5cbiAgICAuY29udGFjdHtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcblxuICAgICAgICAuY29udGFpbmVye1xuICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIkUHJpbWFyeSAgICAgIDogI2U2ZjFmZjtcbiRBY2NlbnQgICAgICAgOiAjMDg5ZWU1O1xuJEFjY2VudE9wYXF1ZSA6ICMwODllZTU2OTtcbiRHcmF5ICAgICAgICAgOiAjMWMxYzFjO1xuXG4kTWFpbkZvbnQ6IE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJENvZGVGb250OiAnU0YgTW9ubycsICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFGSjtBQUlJO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtBQUZSO0FBS0k7RUFFSSxrQkFBQTtFQUlBLGFBQUE7RUFJQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0MvQlE7RURnQ1IsWUFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7QUFKUjtBQU1JO0VBQ0ksa0JBQUE7RUFJQSxhQUFBO0VBSUEsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0NqRFE7RURrRFIsZUFBQTtFQUNBLDREQy9DRztFRGdESCxtQkFBQTtFQUNBLG1CQUFBO0VBSUEsdUJBQUE7RUFDQSxrQkFBQTtBQUpSOztBQVNBO0VBRUk7SUFDSSxhQUFBO0lBQ0EscUJBQUE7SUFDQSx5QkFBQTtJQUNBLGNBQUE7RUFQTjtFQVNNO0lBQ0ksbUJBQUE7SUFDQSxzQkFBQTtFQVBWO0FBQ0Y7QUFiQSxvcEhBQW9wSCIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5jb250YWN0e1xuXG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiB0YWJsZTtcblxuICAgIC5jb250YWluZXJ7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuXG4gICAgLmNvbnRhY3QtdGl0bGV7XG5cbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAkUHJpbWFyeTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgfVxuICAgIC5jb250YWN0LXByZS10aXRsZXtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDEwcHggMCA0MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6ICRBY2NlbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRNYWluRm9udDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XG5cbiAgICAuY29udGFjdHtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcblxuICAgICAgICAuY29udGFpbmVye1xuICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIkUHJpbWFyeSAgICAgIDogI2U2ZjFmZjtcbiRBY2NlbnQgICAgICAgOiAjMDg5ZWU1O1xuJEFjY2VudE9wYXF1ZSA6ICMwODllZTU2OTtcbiRHcmF5ICAgICAgICAgOiAjMWMxYzFjO1xuXG4kTWFpbkZvbnQ6IE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJENvZGVGb250OiAnU0YgTW9ubycsICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5755:
/*!********************************************************************!*\
  !*** ./src/app/components/home/experience/experience.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExperienceComponent: () => (/* binding */ ExperienceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 852);




function ExperienceComponent_li_10_ng_template_3_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    const jobDescriptionParagraph_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, jobDescriptionParagraph_r2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function ExperienceComponent_li_10_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExperienceComponent_li_10_ng_template_3_p_7_Template, 2, 3, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span");
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r3.Title, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r3.Logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", item_r3.Tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.Location);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.Date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r3.Description);
  }
}
function ExperienceComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10)(1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExperienceComponent_li_10_ng_template_3_Template, 9, 6, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", item_r3.Tab)("ngbNavItem", i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.Tab);
  }
}
class ExperienceComponent {
  active = 0;
  static ɵfac = function ExperienceComponent_Factory(t) {
    return new (t || ExperienceComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ExperienceComponent,
    selectors: [["app-experience"]],
    decls: 13,
    vars: 8,
    consts: [["nav", "ngbNav"], ["id", "experience", 1, "section", "jobs"], [1, "container"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "title", "mb-5"], [1, "e-font", "section-title"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "job-tabs"], ["ngbNav", "", "orientation", "vertical", 1, "nav-tabs", "job-tabs", 3, "activeIdChange", "activeId"], [3, "title", "ngbNavItem", 4, "ngFor", "ngForOf"], [1, "mt-2", 3, "ngbNavOutlet"], [3, "title", "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "title-tab-content"], [1, "job-logo", 3, "src", "alt"], [1, "job-location"], [1, "job-time"], ["class", "job-description", 3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "job-description", 3, "innerHTML"]],
    template: function ExperienceComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "ul", 7, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("activeIdChange", function ExperienceComponent_Template_ul_activeIdChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.active, $event) || (ctx.active = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExperienceComponent_li_10_Template, 4, 3, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        const nav_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "Experience.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("activeId", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 6, "Experience.Items"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", nav_r5);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavItemRole, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavLinkBase, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavOutlet, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    styles: [".jobs .job-tabs {\n  display: flex;\n}\n  .jobs .job-tabs .tab-content {\n  margin-left: 38px;\n}\n  .jobs .job-tabs ul {\n  display: block;\n  width: 114.33px;\n  border: none;\n}\n  .jobs .job-tabs a.active {\n  background-color: rgba(8, 158, 229, 0.4117647059) !important;\n  color: #089ee5 !important;\n  border-color: transparent !important;\n  border-radius: 0px;\n}\n  .jobs .job-tabs a:hover {\n  background-color: rgba(8, 158, 229, 0.4117647059) !important;\n  color: #089ee5 !important;\n  border-color: transparent !important;\n  border-radius: 0px;\n}\n  .jobs .job-tabs a {\n  display: inline-block;\n  -webkit-text-decoration: none;\n  text-decoration: none;\n  -webkit-text-decoration-skip-ink: auto;\n  text-decoration-skip-ink: auto;\n  color: inherit;\n  position: relative;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  background-color: transparent;\n  height: 42px;\n  padding: 0 20px 2px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  text-align: left;\n  white-space: nowrap;\n  font-family: Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  font-size: 13px;\n  color: #e6f1ff;\n}\n  .jobs .job-tabs li {\n  border-left: 2px solid #089ee5;\n  border-left-width: 2px;\n  border-left-style: solid;\n  border-left-color: rgb(48, 60, 85);\n}\n\n.jobs[_ngcontent-%COMP%] {\n  max-width: 90vw;\n  margin: auto;\n}\n.jobs[_ngcontent-%COMP%]   .title-tab-content[_ngcontent-%COMP%] {\n  color: #e6f1ff;\n  font-size: 18px;\n  font-weight: 500;\n  margin-bottom: 5px;\n}\n.jobs[_ngcontent-%COMP%]   .title-tab-content[_ngcontent-%COMP%]   .company-tab-content[_ngcontent-%COMP%] {\n  color: #089ee5;\n}\n.jobs[_ngcontent-%COMP%]   .job-time[_ngcontent-%COMP%] {\n  font-family: Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  font-size: 13px;\n  font-weight: normal;\n  -webkit-letter-spacing: 0.05em;\n  -moz-letter-spacing: 0.05em;\n  -ms-letter-spacing: 0.05em;\n  letter-spacing: 0.05em;\n  color: #e6f1ff;\n  margin-bottom: 30px;\n}\n.jobs[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 15px;\n}\n\n.job-location[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.job-logo[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  height: 25px;\n}\n\n@media (max-width: 768px) {\n  .jobs[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n    padding: 0px;\n  }\n    .job-tabs {\n    display: block !important;\n  }\n    .job-tabs .tab-content {\n    margin-left: 0px !important;\n  }\n    .job-tabs ul {\n    display: block;\n    width: 100% !important;\n    margin-bottom: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLGFBQUE7QUFIRjtBQUtFO0VBQ0UsaUJBQUE7QUFISjtBQU1FO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBSko7QUFPRTtFQUNFLDREQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBTEo7QUFRRTtFQUNFLDREQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBTko7QUFTRTtFQUNFLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSwwREFBQTtFQUNBLGVBQUE7RUFJQSxhQUFBO0VBSUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFFQSwwREFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0RENyRE87RURzRFAsZUFBQTtFQUNBLGNDNURZO0FEcURoQjtBQVVFO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0NBQUE7QUFSSjs7QUFZQTtFQUVFLGVBQUE7RUFDQSxZQUFBO0FBVkY7QUFZRTtFQUNFLGNDN0VZO0VEOEVaLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBVko7QUFZSTtFQUNFLGNDbEZVO0FEd0VoQjtBQWNFO0VBQ0ksNERDbkZLO0VEb0ZMLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0MvRlU7RURnR1YsbUJBQUE7QUFaTjtBQWVFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBYko7O0FBaUJBO0VBQ0UsbUJBQUE7QUFkRjs7QUFpQkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFkRjs7QUFrQkE7RUFFSTtJQUNFLFlBQUE7RUFoQko7RUFtQkE7SUFDRSx5QkFBQTtFQWpCRjtFQW1CRTtJQUNFLDJCQUFBO0VBakJKO0VBb0JFO0lBQ0UsY0FBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7RUFsQko7QUFDRiIsImZpbGUiOiJleHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xuXG5cbjo6bmctZGVlcCAuam9icyAuam9iLXRhYnMge1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIC50YWItY29udGVudHtcbiAgICBtYXJnaW4tbGVmdDogMzhweDtcbiAgfVxuXG4gIHVse1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMTQuMzNweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cblxuICBhLmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgJEFjY2VudE9wYXF1ZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAkQWNjZW50ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgfVxuXG4gIGE6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJEFjY2VudE9wYXF1ZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAkQWNjZW50ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgfVxuXG4gIGF7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcbiAgICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwwLjA0NSwwLjM1NSwxKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIHBhZGRpbmc6IDAgMjBweCAycHg7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsMC4wNDUsMC4zNTUsMSk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGZvbnQtZmFtaWx5OiAkTWFpbkZvbnQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAkUHJpbWFyeTtcbiAgfVxuXG4gIGxpe1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgJEFjY2VudDtcbiAgICBib3JkZXItbGVmdC13aWR0aDogMnB4O1xuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDQ4LCA2MCwgODUpO1xuICB9XG59XG5cbi5qb2Jze1xuXG4gIG1heC13aWR0aDogOTB2dztcbiAgbWFyZ2luOiBhdXRvO1xuXG4gIC50aXRsZS10YWItY29udGVudHtcbiAgICBjb2xvcjogJFByaW1hcnk7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuXG4gICAgLmNvbXBhbnktdGFiLWNvbnRlbnR7XG4gICAgICBjb2xvcjogJEFjY2VudDtcbiAgICB9XG4gIH1cblxuICAuam9iLXRpbWV7XG4gICAgICBmb250LWZhbWlseTogJE1haW5Gb250O1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIC13ZWJraXQtbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgICAgIC1tb3otbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgICAgIC1tcy1sZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgICAgIGNvbG9yOiAkUHJpbWFyeTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cblxuICAuam9iLWRlc2NyaXB0aW9ue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbn1cblxuLmpvYi1sb2NhdGlvbntcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmpvYi1sb2dve1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xuICAuam9icyB7XG4gICAgLmpvYi1kZXNjcmlwdGlvbntcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG4gIH1cbiAgOjpuZy1kZWVwIC5qb2ItdGFic3tcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuXG4gICAgLnRhYi1jb250ZW50e1xuICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIHVsIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgfVxuICB9XG59XG4iLCIkUHJpbWFyeSAgICAgIDogI2U2ZjFmZjtcbiRBY2NlbnQgICAgICAgOiAjMDg5ZWU1O1xuJEFjY2VudE9wYXF1ZSA6ICMwODllZTU2OTtcbiRHcmF5ICAgICAgICAgOiAjMWMxYzFjO1xuXG4kTWFpbkZvbnQ6IE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJENvZGVGb250OiAnU0YgTW9ubycsICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLGFBQUE7QUFIRjtBQUtFO0VBQ0UsaUJBQUE7QUFISjtBQU1FO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBSko7QUFPRTtFQUNFLDREQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBTEo7QUFRRTtFQUNFLDREQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBTko7QUFTRTtFQUNFLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSwwREFBQTtFQUNBLGVBQUE7RUFJQSxhQUFBO0VBSUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFFQSwwREFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0RENyRE87RURzRFAsZUFBQTtFQUNBLGNDNURZO0FEcURoQjtBQVVFO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0NBQUE7QUFSSjs7QUFZQTtFQUVFLGVBQUE7RUFDQSxZQUFBO0FBVkY7QUFZRTtFQUNFLGNDN0VZO0VEOEVaLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBVko7QUFZSTtFQUNFLGNDbEZVO0FEd0VoQjtBQWNFO0VBQ0ksNERDbkZLO0VEb0ZMLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0MvRlU7RURnR1YsbUJBQUE7QUFaTjtBQWVFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBYko7O0FBaUJBO0VBQ0UsbUJBQUE7QUFkRjs7QUFpQkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFkRjs7QUFrQkE7RUFFSTtJQUNFLFlBQUE7RUFoQko7RUFtQkE7SUFDRSx5QkFBQTtFQWpCRjtFQW1CRTtJQUNFLDJCQUFBO0VBakJKO0VBb0JFO0lBQ0UsY0FBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7RUFsQko7QUFDRjtBQVBBLHcxS0FBdzFLIiwic291cmNlc0NvbnRlbnQiOlsiXG5AaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xuXG5cbjo6bmctZGVlcCAuam9icyAuam9iLXRhYnMge1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIC50YWItY29udGVudHtcbiAgICBtYXJnaW4tbGVmdDogMzhweDtcbiAgfVxuXG4gIHVse1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMTQuMzNweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cblxuICBhLmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgJEFjY2VudE9wYXF1ZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAkQWNjZW50ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgfVxuXG4gIGE6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJEFjY2VudE9wYXF1ZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAkQWNjZW50ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgfVxuXG4gIGF7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcbiAgICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwwLjA0NSwwLjM1NSwxKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIHBhZGRpbmc6IDAgMjBweCAycHg7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsMC4wNDUsMC4zNTUsMSk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGZvbnQtZmFtaWx5OiAkTWFpbkZvbnQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAkUHJpbWFyeTtcbiAgfVxuXG4gIGxpe1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgJEFjY2VudDtcbiAgICBib3JkZXItbGVmdC13aWR0aDogMnB4O1xuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDQ4LCA2MCwgODUpO1xuICB9XG59XG5cbi5qb2Jze1xuXG4gIG1heC13aWR0aDogOTB2dztcbiAgbWFyZ2luOiBhdXRvO1xuXG4gIC50aXRsZS10YWItY29udGVudHtcbiAgICBjb2xvcjogJFByaW1hcnk7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuXG4gICAgLmNvbXBhbnktdGFiLWNvbnRlbnR7XG4gICAgICBjb2xvcjogJEFjY2VudDtcbiAgICB9XG4gIH1cblxuICAuam9iLXRpbWV7XG4gICAgICBmb250LWZhbWlseTogJE1haW5Gb250O1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIC13ZWJraXQtbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgICAgIC1tb3otbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgICAgIC1tcy1sZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgICAgIGNvbG9yOiAkUHJpbWFyeTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cblxuICAuam9iLWRlc2NyaXB0aW9ue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbn1cblxuLmpvYi1sb2NhdGlvbntcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmpvYi1sb2dve1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xuICAuam9icyB7XG4gICAgLmpvYi1kZXNjcmlwdGlvbntcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG4gIH1cbiAgOjpuZy1kZWVwIC5qb2ItdGFic3tcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuXG4gICAgLnRhYi1jb250ZW50e1xuICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIHVsIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgfVxuICB9XG59XG4iLCIkUHJpbWFyeSAgICAgIDogI2U2ZjFmZjtcbiRBY2NlbnQgICAgICAgOiAjMDg5ZWU1O1xuJEFjY2VudE9wYXF1ZSA6ICMwODllZTU2OTtcbiRHcmF5ICAgICAgICAgOiAjMWMxYzFjO1xuXG4kTWFpbkZvbnQ6IE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJENvZGVGb250OiAnU0YgTW9ubycsICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7229:
/*!********************************************************************!*\
  !*** ./src/app/components/home/highlights/highlights.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HighlightsComponent: () => (/* binding */ HighlightsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 852);



function HighlightsComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const text_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", text_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function HighlightsComponent_div_12_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-aos-delay", i_r3 * 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", s_r2, " ");
  }
}
function HighlightsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HighlightsComponent_div_12_span_4_Template, 2, 2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const skill_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r4.Category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", skill_r4.Elements);
  }
}
class HighlightsComponent {
  static ɵfac = function HighlightsComponent_Factory(t) {
    return new (t || HighlightsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HighlightsComponent,
    selectors: [["app-highlights"]],
    decls: 14,
    vars: 9,
    consts: [["id", "highlights", 1, "section", "highlights"], [1, "container"], [1, "section-box"], ["data-aos", "fade-up", 1, "title"], [1, "section-title"], [1, "description"], ["data-aos", "fade-up", 1, "qualifications-list"], ["class", "qualifications-element", "data-aos", "fade-up", "data-aos-duration", "1000", 3, "innerHTML", 4, "ngFor", "ngForOf"], ["class", "skills", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "qualifications-element", 3, "innerHTML"], [1, "skills"], ["data-aos", "fade-up"], ["class", "skill-element", "data-aos", "zoom-out", "data-aos-duration", "1000", 4, "ngFor", "ngForOf"], ["data-aos", "zoom-out", "data-aos-duration", "1000", 1, "skill-element"]],
    template: function HighlightsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div")(8, "div", 5)(9, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HighlightsComponent_li_10_Template, 2, 1, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HighlightsComponent_div_12_Template, 5, 2, "div", 8);
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
    styles: [".highlights[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.highlights[_ngcontent-%COMP%]   .qualifications-list[_ngcontent-%COMP%] {\n  padding: 0;\n  list-style: none;\n}\n.highlights[_ngcontent-%COMP%]   .qualifications-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n.highlights[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%] {\n  margin: 15px 0px;\n}\n.highlights[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 12px;\n  font-family: Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  color: #089ee5;\n}\n.highlights[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]:after {\n  content: \"/\";\n  color: #e6f1ff;\n  font-weight: 600;\n  opacity: 0.7;\n  margin: 5px;\n}\n.highlights[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZ2hsaWdodHMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJSTtFQUNJLGdCQUFBO0FBSFI7QUFNSTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQUpOO0FBS007RUFDRSxjQUFBO0FBSFI7QUFNSTtFQUNJLGdCQUFBO0FBSlI7QUFLUTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDREQ2ZEO0VEZ0JDLGNDcEJJO0FEaUJoQjtBQUlnQjtFQUNJLFlBQUE7RUFDQSxjQ3hCSjtFRHlCSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRnBCO0FBSWdCO0VBQ0ksV0FBQTtBQUZwQiIsImZpbGUiOiJoaWdobGlnaHRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcblxuLmhpZ2hsaWdodHN7XG5cbiAgICAuZGVzY3JpcHRpb257XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgfVxuXG4gICAgLnF1YWxpZmljYXRpb25zLWxpc3Qge1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBsaXtcbiAgICAgICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgICB9XG4gICAgfVxuICAgIC5za2lsbHMge1xuICAgICAgICBtYXJnaW46IDE1cHggMHB4O1xuICAgICAgICAuc2tpbGwtZWxlbWVudCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJE1haW5Gb250O1xuICAgICAgICAgICAgY29sb3I6ICRBY2NlbnQ7XG4gICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiL1wiO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJFByaW1hcnk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbiIsIiRQcmltYXJ5ICAgICAgOiAjZTZmMWZmO1xuJEFjY2VudCAgICAgICA6ICMwODllZTU7XG4kQWNjZW50T3BhcXVlIDogIzA4OWVlNTY5O1xuJEdyYXkgICAgICAgICA6ICMxYzFjMWM7XG5cbiRNYWluRm9udDogTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kQ29kZUZvbnQ6ICdTRiBNb25vJywgJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hpZ2hsaWdodHMvaGlnaGxpZ2h0cy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJSTtFQUNJLGdCQUFBO0FBSFI7QUFNSTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQUpOO0FBS007RUFDRSxjQUFBO0FBSFI7QUFNSTtFQUNJLGdCQUFBO0FBSlI7QUFLUTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDREQ2ZEO0VEZ0JDLGNDcEJJO0FEaUJoQjtBQUlnQjtFQUNJLFlBQUE7RUFDQSxjQ3hCSjtFRHlCSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRnBCO0FBSWdCO0VBQ0ksV0FBQTtBQUZwQjtBQUNBLHc4REFBdzhEIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcblxuLmhpZ2hsaWdodHN7XG5cbiAgICAuZGVzY3JpcHRpb257XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgfVxuXG4gICAgLnF1YWxpZmljYXRpb25zLWxpc3Qge1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBsaXtcbiAgICAgICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgICB9XG4gICAgfVxuICAgIC5za2lsbHMge1xuICAgICAgICBtYXJnaW46IDE1cHggMHB4O1xuICAgICAgICAuc2tpbGwtZWxlbWVudCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJE1haW5Gb250O1xuICAgICAgICAgICAgY29sb3I6ICRBY2NlbnQ7XG4gICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiL1wiO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJFByaW1hcnk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbiIsIiRQcmltYXJ5ICAgICAgOiAjZTZmMWZmO1xuJEFjY2VudCAgICAgICA6ICMwODllZTU7XG4kQWNjZW50T3BhcXVlIDogIzA4OWVlNTY5O1xuJEdyYXkgICAgICAgICA6ICMxYzFjMWM7XG5cbiRNYWluRm9udDogTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kQ29kZUZvbnQ6ICdTRiBNb25vJywgJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 2865:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner/banner.component */ 155);
/* harmony import */ var _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highlights/highlights.component */ 7229);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./experience/experience.component */ 5755);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects/projects.component */ 3979);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ 7301);






class HomeComponent {
  static ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 6,
    vars: 0,
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-banner")(2, "app-highlights")(3, "app-experience")(4, "app-projects")(5, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__.BannerComponent, _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_1__.HighlightsComponent, _experience_experience_component__WEBPACK_IMPORTED_MODULE_2__.ExperienceComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__.ProjectsComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__.ContactComponent],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdLQUFnSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3908:
/*!************************************************!*\
  !*** ./src/app/components/home/home.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeModule: () => (/* binding */ HomeModule),
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 2865);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highlights/highlights.component */ 7229);
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner/banner.component */ 155);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ 7301);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ 3979);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ 8952);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./experience/experience.component */ 5755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);













function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class HomeModule {
  static ɵfac = function HomeModule_Factory(t) {
    return new (t || HomeModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: HomeModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule.forChild({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient]
      }
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent, _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__.BannerComponent, _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_1__.HighlightsComponent, _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__.ExperienceComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__.ProjectsComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule]
  });
})();

/***/ }),

/***/ 3979:
/*!****************************************************************!*\
  !*** ./src/app/components/home/projects/projects.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsComponent: () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 852);



function ProjectsComponent_div_9_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const technology_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](technology_r1);
  }
}
function ProjectsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div")(8, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectsComponent_div_9_li_9_Template, 3, 1, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const project_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-aos-delay", i_r3 * 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r2.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r2.Description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", project_r2.Technologies);
  }
}
function ProjectsComponent_div_18_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r4["DemoLink"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function ProjectsComponent_div_18_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r4["GithubLink"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function ProjectsComponent_div_18_li_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const technology_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](technology_r5);
  }
}
function ProjectsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectsComponent_div_18_a_4_Template, 2, 1, "a", 17)(5, ProjectsComponent_div_18_a_5_Template, 2, 1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div")(11, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProjectsComponent_div_18_li_12_Template, 3, 1, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const project_r4 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-aos-delay", i_r6 * 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r4["DemoLink"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r4["GithubLink"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r4.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r4.Description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", project_r4.Technologies);
  }
}
class ProjectsComponent {
  static ɵfac = function ProjectsComponent_Factory(t) {
    return new (t || ProjectsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProjectsComponent,
    selectors: [["app-projects"]],
    decls: 20,
    vars: 12,
    consts: [[1, "section", "more-projects"], [1, "container"], [1, "section-box"], [1, ""], [1, "section-title"], [1, "mt-5"], [1, "row", "p-0"], ["class", "col-12 col-md-6 col-lg-6 col-xl-4 project-col", "data-aos", "fade-up", "data-aos-duration", "1000", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "col-12", "col-md-6", "col-lg-6", "col-xl-4", "project-col"], [1, "more-project-box"], [1, "w-100", "text-left", "m-0", "p-0"], [1, "other-project-title", "mt-4"], [1, "other-project-description"], [1, "more-projects-skills"], [4, "ngFor", "ngForOf"], [1, "underline"], [1, "d-flex", "p-0", "justify-content-end"], ["style", "color: inherit", "target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 2, "color", "inherit", 3, "href"], ["id", "demoLink", 1, "ml-3", "fas", "fa-external-link-alt"], ["id", "ghLink", 1, "ml-4", "fab", "fa-github"]],
    template: function ProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectsComponent_div_9_Template, 10, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2)(12, "div", 3)(13, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5)(17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProjectsComponent_div_18_Template, 13, 6, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "FeatureProjects.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 6, "FeatureProjects.Projects"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 8, "PersonalProjects.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 10, "PersonalProjects.Projects"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    styles: [".more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%] {\n  padding: 10px;\n  height: 400px;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  align-items: flex-start;\n  position: relative;\n  padding: 2rem 1.75rem;\n  height: 100%;\n  border-radius: 3px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  background-color: #1c1c1c;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]:hover, .more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  color: #089ee5;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]   .other-project-title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 22px;\n  color: #e6f1ff;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]   .other-project-description[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #e6f1ff;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]   .more-projects-skills[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: 20px 0 0 0;\n  list-style: none;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]   .more-projects-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #e6f1ff;\n  line-height: 1.75;\n  font-family: Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]   .more-projects-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .underline[_ngcontent-%COMP%] {\n  padding-bottom: 3.5px;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]   .more-projects-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  content: \"/\";\n  color: #e6f1ff;\n  font-weight: 600;\n  opacity: 0.7;\n  margin: 5px;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]   .more-projects-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n\n@media (max-width: 1300px) {\n  .more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBQUZKO0FBSUk7RUFDRSxrREFBQTtFQUVBLDBEQUFBO0VBSUEsYUFBQTtFQUlBLDhCQUFBO0VBSUEsbUJBQUE7RUFHQSxzQkFBQTtFQUlBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLDBEQUFBO0VBQ0EseUJDakNVO0FEK0JoQjtBQUlNO0VBR0UsMkJBQUE7QUFGUjtBQUlNO0VBQ0Usa0RBQUE7QUFGUjtBQUtNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQ2pEUTtBRDhDaEI7QUFNTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNDeERRO0FEb0RoQjtBQU9NO0VBQ0UsZUFBQTtFQUNBLGNDN0RRO0FEd0RoQjtBQVFNO0VBSUUsYUFBQTtFQUlBLHFCQUFBO0VBSUEsWUFBQTtFQUdBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQU5SO0FBUVE7RUFDRSxlQUFBO0VBQ0EsY0N0Rk07RUR1Rk4saUJBQUE7RUFDQSw0RENuRkM7QUQ2RVg7QUFPVTtFQUNFLHFCQUFBO0FBTFo7QUFPVTtFQUNFLFlBQUE7RUFDQSxjQzlGSTtFRCtGSixnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBTFo7QUFPVTtFQUNFLFdBQUE7QUFMWjs7QUFlQTtFQUVJO0lBQ0UsWUFBQTtFQWJKO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xuXG4ubW9yZS1wcm9qZWN0c3tcbiAgLnByb2plY3QtY29se1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcblxuICAgIC5tb3JlLXByb2plY3QtYm94IHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0xNXB4IHJnYmEoMiwxMiwyNywwLjcpO1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwwLjA0NSwwLjM1NSwxKTtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAtd2Via2l0LWJveC1hbGlnbjogZmxleC1zdGFydDtcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBmbGV4LXN0YXJ0O1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBwYWRkaW5nOiAycmVtIDEuNzVyZW07XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsMC4wNDUsMC4zNTUsMSk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJEdyYXk7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgICAgfVxuICAgICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMjBweCAzMHB4IC0xNXB4IHJnYmEoMiwxMiwyNywwLjcpO1xuICAgICAgfVxuXG4gICAgICBzdmd7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGNvbG9yOiAkQWNjZW50O1xuICAgICAgfVxuXG4gICAgICAub3RoZXItcHJvamVjdC10aXRsZXtcbiAgICAgICAgbWFyZ2luOiAwIDAgMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBjb2xvcjogJFByaW1hcnk7XG4gICAgICB9XG5cbiAgICAgIC5vdGhlci1wcm9qZWN0LWRlc2NyaXB0aW9ue1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGNvbG9yOiAkUHJpbWFyeTtcbiAgICAgIH1cblxuICAgICAgLm1vcmUtcHJvamVjdHMtc2tpbGxze1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBmbGV4LWVuZDtcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGZsZXgtZW5kO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgICAgIC13ZWJraXQtZmxleC1ncm93OiAxO1xuICAgICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDIwcHggMCAwIDA7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgICAgICAgbGl7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGNvbG9yOiAkUHJpbWFyeTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS43NTtcbiAgICAgICAgICBmb250LWZhbWlseTogJE1haW5Gb250O1xuICAgICAgICAgIC51bmRlcmxpbmV7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMy41cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCIvXCI7XG4gICAgICAgICAgICBjb2xvcjogJFByaW1hcnk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuXG5AbWVkaWEobWF4LXdpZHRoOiAxMzAwcHgpe1xuICAubW9yZS1wcm9qZWN0c3tcbiAgICAucHJvamVjdC1jb2x7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICB9XG59XG4iLCIkUHJpbWFyeSAgICAgIDogI2U2ZjFmZjtcbiRBY2NlbnQgICAgICAgOiAjMDg5ZWU1O1xuJEFjY2VudE9wYXF1ZSA6ICMwODllZTU2OTtcbiRHcmF5ICAgICAgICAgOiAjMWMxYzFjO1xuXG4kTWFpbkZvbnQ6IE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJENvZGVGb250OiAnU0YgTW9ubycsICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsYUFBQTtFQUNBLGFBQUE7QUFGSjtBQUlJO0VBQ0Usa0RBQUE7RUFFQSwwREFBQTtFQUlBLGFBQUE7RUFJQSw4QkFBQTtFQUlBLG1CQUFBO0VBR0Esc0JBQUE7RUFJQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSwwREFBQTtFQUNBLHlCQ2pDVTtBRCtCaEI7QUFJTTtFQUdFLDJCQUFBO0FBRlI7QUFJTTtFQUNFLGtEQUFBO0FBRlI7QUFLTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0NqRFE7QUQ4Q2hCO0FBTU07RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQ3hEUTtBRG9EaEI7QUFPTTtFQUNFLGVBQUE7RUFDQSxjQzdEUTtBRHdEaEI7QUFRTTtFQUlFLGFBQUE7RUFJQSxxQkFBQTtFQUlBLFlBQUE7RUFHQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFOUjtBQVFRO0VBQ0UsZUFBQTtFQUNBLGNDdEZNO0VEdUZOLGlCQUFBO0VBQ0EsNERDbkZDO0FENkVYO0FBT1U7RUFDRSxxQkFBQTtBQUxaO0FBT1U7RUFDRSxZQUFBO0VBQ0EsY0M5Rkk7RUQrRkosZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUxaO0FBT1U7RUFDRSxXQUFBO0FBTFo7O0FBZUE7RUFFSTtJQUNFLFlBQUE7RUFiSjtBQUNGO0FBNUJBLDR6S0FBNHpLIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcblxuLm1vcmUtcHJvamVjdHN7XG4gIC5wcm9qZWN0LWNvbHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG5cbiAgICAubW9yZS1wcm9qZWN0LWJveCB7XG4gICAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAtMTVweCByZ2JhKDIsMTIsMjcsMC43KTtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwwLjA0NSwwLjM1NSwxKTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsMC4wNDUsMC4zNTUsMSk7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGZsZXgtc3RhcnQ7XG4gICAgICAtbXMtZmxleC1hbGlnbjogZmxleC1zdGFydDtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcGFkZGluZzogMnJlbSAxLjc1cmVtO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwwLjA0NSwwLjM1NSwxKTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRHcmF5O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICAgIH1cbiAgICAgICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgICBib3gtc2hhZG93OiAwIDIwcHggMzBweCAtMTVweCByZ2JhKDIsMTIsMjcsMC43KTtcbiAgICAgIH1cblxuICAgICAgc3Zne1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBjb2xvcjogJEFjY2VudDtcbiAgICAgIH1cblxuICAgICAgLm90aGVyLXByb2plY3QtdGl0bGV7XG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgY29sb3I6ICRQcmltYXJ5O1xuICAgICAgfVxuXG4gICAgICAub3RoZXItcHJvamVjdC1kZXNjcmlwdGlvbntcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBjb2xvcjogJFByaW1hcnk7XG4gICAgICB9XG5cbiAgICAgIC5tb3JlLXByb2plY3RzLXNraWxsc3tcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogZmxleC1lbmQ7XG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBmbGV4LWVuZDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgICAgICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcbiAgICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuXG4gICAgICAgIGxpe1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBjb2xvcjogJFByaW1hcnk7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzU7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRNYWluRm9udDtcbiAgICAgICAgICAudW5kZXJsaW5le1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMuNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiL1wiO1xuICAgICAgICAgICAgY29sb3I6ICRQcmltYXJ5O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgICY6bGFzdC1jaGlsZDphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cblxuQG1lZGlhKG1heC13aWR0aDogMTMwMHB4KXtcbiAgLm1vcmUtcHJvamVjdHN7XG4gICAgLnByb2plY3QtY29se1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgfVxufVxuIiwiJFByaW1hcnkgICAgICA6ICNlNmYxZmY7XG4kQWNjZW50ICAgICAgIDogIzA4OWVlNTtcbiRBY2NlbnRPcGFxdWUgOiAjMDg5ZWU1Njk7XG4kR3JheSAgICAgICAgIDogIzFjMWMxYztcblxuJE1haW5Gb250OiBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRDb2RlRm9udDogJ1NGIE1vbm8nLCAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9263:
/*!*******************************************************!*\
  !*** ./src/app/services/language/language.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageService: () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 852);


class LanguageService {
  translateService;
  DEFAULT;
  constructor(translateService) {
    this.translateService = translateService;
  }
  static ɵfac = function LanguageService_Factory(t) {
    return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: LanguageService,
    factory: LanguageService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5312:
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

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map