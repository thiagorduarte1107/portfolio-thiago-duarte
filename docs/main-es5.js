(function () {
  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Thiago-510\Desktop\potifolio\portfolio-thiago-duarte\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "6bE9":
    /*!***********************************************************!*\
      !*** ./src/app/components/projects/projects.component.ts ***!
      \***********************************************************/

    /*! exports provided: ProjectsComponent */

    /***/
    function bE9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
        return ProjectsComponent;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/project.service */
      "c3AT");

      var ProjectsComponent = /*#__PURE__*/function () {
        function ProjectsComponent(projectService) {
          _classCallCheck(this, ProjectsComponent);

          this.projectService = projectService;
          this.projects = [];
        }

        return _createClass(ProjectsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadProjects();
          }
        }, {
          key: "loadProjects",
          value: function loadProjects() {
            var _this = this;

            this.projectService.getProjects().subscribe(function (projects) {
              return _this.projects = projects;
            });
          }
        }]);
      }();

      ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
        return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]));
      };

      ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ProjectsComponent,
        selectors: [["app-projects"]],
        decls: 3,
        vars: 0,
        consts: [["id", "projetos", 1, "min-h-screen", "bg-[#1A1A2E]", "text-[#CBD5E1]", "p-8"], [1, "max-w-6xl", "mx-auto"], [1, "grid", "md:grid-cols-2", "gap-8"]],
        template: function ProjectsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        styles: ["@charset \"UTF-8\";\n.projects-section[_ngcontent-%COMP%] {\n  padding: 4rem 2rem;\n  background: var(--cyber-bg);\n  position: relative;\n  overflow: hidden;\n}\n.projects-section[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: radial-gradient(circle at center, rgba(0, 199, 255, 0.15) 0%, transparent 70%);\n  pointer-events: none;\n}\n.projects-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--cyber-primary);\n  font-size: 2.5rem;\n  margin-bottom: 3rem;\n  text-align: center;\n  font-weight: 600;\n  text-shadow: var(--cyber-glow);\n}\n.project-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.project-card[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.9);\n  padding: 2rem;\n  border-radius: 12px;\n  border: 1px solid var(--cyber-primary);\n  box-shadow: var(--cyber-shadow);\n  -webkit-backdrop-filter: blur(12px);\n          backdrop-filter: blur(12px);\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  min-height: 400px;\n  justify-content: space-between;\n}\n.project-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--cyber-shadow-lg);\n}\n.project-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.project-tags[_ngcontent-%COMP%] {\n  margin-top: auto;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  padding-top: 1rem;\n  position: relative;\n}\n.project-tags[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: radial-gradient(circle at top right, rgba(0, 199, 255, 0.15), transparent 70%);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.project-tags[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  border-color: var(--cyber-primary);\n  box-shadow: var(--cyber-glow), 0 12px 48px rgba(0, 199, 255, 0.2);\n}\n.project-tags[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.project-tags[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%] {\n  color: var(--cyber-primary);\n  text-shadow: var(--cyber-glow);\n}\n.project-tags[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--cyber-text);\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.project-tags[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--cyber-text);\n  margin-bottom: 1.5rem;\n  line-height: 1.6;\n}\n.project-tags[_ngcontent-%COMP%]   .tech-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-top: auto;\n  justify-content: center;\n  padding-top: 1.5rem;\n}\n.project-tags[_ngcontent-%COMP%]   .tech-tags[_ngcontent-%COMP%]   .tech-tag[_ngcontent-%COMP%] {\n  background: rgba(0, 199, 255, 0.1);\n  color: var(--cyber-primary);\n  padding: 0.5rem 1rem;\n  border-radius: 4px;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 199, 255, 0.2);\n  transition: all 0.3s ease;\n}\n.project-tags[_ngcontent-%COMP%]   .tech-tags[_ngcontent-%COMP%]   .tech-tag[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 199, 255, 0.2);\n  transform: translateY(-2px);\n  box-shadow: var(--cyber-glow);\n}\n.project-tags[_ngcontent-%COMP%]   .view-project[_ngcontent-%COMP%] {\n  color: var(--cyber-primary);\n  text-decoration: none;\n  font-weight: 500;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.3s ease;\n}\n.project-tags[_ngcontent-%COMP%]   .view-project[_ngcontent-%COMP%]:hover {\n  transform: translateX(4px);\n  text-shadow: var(--cyber-glow);\n}\n.project-tags[_ngcontent-%COMP%]   .view-project[_ngcontent-%COMP%]::after {\n  content: \"\u2192\";\n  transition: transform 0.3s ease;\n}\n.project-tags[_ngcontent-%COMP%]   .view-project[_ngcontent-%COMP%]:hover::after {\n  transform: translateX(4px);\n}\n.tech-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 1.5rem;\n}\n.tech-tags[_ngcontent-%COMP%]   .tech-tag[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: var(--vibrant-green);\n  padding: 0.5rem 1rem;\n  border-radius: 4px;\n  font-size: 0.875rem;\n  border: 1px solid rgba(16, 185, 129, 0.2);\n}\n.view-project[_ngcontent-%COMP%] {\n  color: var(--vibrant-green);\n  text-decoration: none;\n  font-weight: 500;\n  display: inline-flex;\n  align-items: center;\n  transition: all 0.3s ease;\n}\n.view-project[_ngcontent-%COMP%]:hover {\n  transform: translateX(4px);\n  text-shadow: var(--glow-effect);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUVGO0FBQUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsMEZBQUE7RUFDQSxvQkFBQTtBQUVKO0FBQ0U7RUFDRSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUFDSjtBQUdBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUFGO0FBR0E7RUFDRSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsaURBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQUFGO0FBRUU7RUFDRSwyQkFBQTtFQUNBLGtDQUFBO0FBQUo7QUFJQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFERjtBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBREY7QUFHRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwwRkFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtBQURKO0FBSUU7RUFDRSwyQkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUVBQUE7QUFGSjtBQUlJO0VBQ0UsVUFBQTtBQUZOO0FBS0k7RUFDRSwyQkFBQTtFQUNBLDhCQUFBO0FBSE47QUFPRTtFQUNFLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFMSjtBQVFFO0VBQ0Usd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBTko7QUFTRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVBKO0FBU0k7RUFDRSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSx5QkFBQTtBQVBOO0FBU007RUFDRSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7QUFQUjtBQVlFO0VBQ0UsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQVZKO0FBWUk7RUFDRSwwQkFBQTtFQUNBLDhCQUFBO0FBVk47QUFhSTtFQUNFLFlBQUE7RUFDQSwrQkFBQTtBQVhOO0FBY0k7RUFDRSwwQkFBQTtBQVpOO0FBaUJBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFkRjtBQWdCRTtFQUNFLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtBQWRKO0FBa0JBO0VBQ0UsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBZkY7QUFpQkU7RUFDRSwwQkFBQTtFQUNBLCtCQUFBO0FBZkoiLCJmaWxlIjoicHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ucHJvamVjdHMtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDRyZW0gMnJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY3liZXItYmcpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucHJvamVjdHMtc2VjdGlvbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgY2VudGVyLCByZ2JhKDAsIDE5OSwgMjU1LCAwLjE1KSAwJSwgdHJhbnNwYXJlbnQgNzAlKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ucHJvamVjdHMtc2VjdGlvbiBoMiB7XG4gIGNvbG9yOiB2YXIoLS1jeWJlci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1zaGFkb3c6IHZhcigtLWN5YmVyLWdsb3cpO1xufVxuXG4ucHJvamVjdC1jYXJkcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICBnYXA6IDJyZW07XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnByb2plY3QtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTUsIDIzLCA0MiwgMC45KTtcbiAgcGFkZGluZzogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY3liZXItcHJpbWFyeSk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWN5YmVyLXNoYWRvdyk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnByb2plY3QtY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgYm94LXNoYWRvdzogdmFyKC0tY3liZXItc2hhZG93LWxnKTtcbn1cblxuLnByb2plY3QtY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wcm9qZWN0LXRhZ3Mge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMC41cmVtO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2plY3QtdGFnczo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCB0b3AgcmlnaHQsIHJnYmEoMCwgMTk5LCAyNTUsIDAuMTUpLCB0cmFuc3BhcmVudCA3MCUpO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cbi5wcm9qZWN0LXRhZ3M6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY3liZXItcHJpbWFyeSk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWN5YmVyLWdsb3cpLCAwIDEycHggNDhweCByZ2JhKDAsIDE5OSwgMjU1LCAwLjIpO1xufVxuLnByb2plY3QtdGFnczpob3Zlcjo6YmVmb3JlIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5wcm9qZWN0LXRhZ3M6aG92ZXIgaDMge1xuICBjb2xvcjogdmFyKC0tY3liZXItcHJpbWFyeSk7XG4gIHRleHQtc2hhZG93OiB2YXIoLS1jeWJlci1nbG93KTtcbn1cbi5wcm9qZWN0LXRhZ3MgaDMge1xuICBjb2xvcjogdmFyKC0tY3liZXItdGV4dCk7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLnByb2plY3QtdGFncyBwIHtcbiAgY29sb3I6IHZhcigtLWN5YmVyLXRleHQpO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG4ucHJvamVjdC10YWdzIC50ZWNoLXRhZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMC41cmVtO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcbn1cbi5wcm9qZWN0LXRhZ3MgLnRlY2gtdGFncyAudGVjaC10YWcge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDE5OSwgMjU1LCAwLjEpO1xuICBjb2xvcjogdmFyKC0tY3liZXItcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMTk5LCAyNTUsIDAuMik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4ucHJvamVjdC10YWdzIC50ZWNoLXRhZ3MgLnRlY2gtdGFnOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAxOTksIDI1NSwgMC4yKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiB2YXIoLS1jeWJlci1nbG93KTtcbn1cbi5wcm9qZWN0LXRhZ3MgLnZpZXctcHJvamVjdCB7XG4gIGNvbG9yOiB2YXIoLS1jeWJlci1wcmltYXJ5KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4ucHJvamVjdC10YWdzIC52aWV3LXByb2plY3Q6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTtcbiAgdGV4dC1zaGFkb3c6IHZhcigtLWN5YmVyLWdsb3cpO1xufVxuLnByb2plY3QtdGFncyAudmlldy1wcm9qZWN0OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4oaSXCI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG4ucHJvamVjdC10YWdzIC52aWV3LXByb2plY3Q6aG92ZXI6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCk7XG59XG5cbi50ZWNoLXRhZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG4udGVjaC10YWdzIC50ZWNoLXRhZyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTYsIDE4NSwgMTI5LCAwLjEpO1xuICBjb2xvcjogdmFyKC0tdmlicmFudC1ncmVlbik7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsIDE4NSwgMTI5LCAwLjIpO1xufVxuXG4udmlldy1wcm9qZWN0IHtcbiAgY29sb3I6IHZhcigtLXZpYnJhbnQtZ3JlZW4pO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLnZpZXctcHJvamVjdDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpO1xuICB0ZXh0LXNoYWRvdzogdmFyKC0tZ2xvdy1lZmZlY3QpO1xufSJdfQ== */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'translateY(20px)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'translateY(0)'
          }))])])]
        }
      });
      /***/
    },

    /***/
    "A9VX":
    /*!*******************************************************!*\
      !*** ./src/app/components/skills/skills.component.ts ***!
      \*******************************************************/

    /*! exports provided: SkillsComponent */

    /***/
    function A9VX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillsComponent", function () {
        return SkillsComponent;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_skills_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/skills.service */
      "pYtu");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SkillsComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var skill_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@skillAnimation", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](skill_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("aria-label", "Skill level: ", skill_r1.level, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", skill_r1.level, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-valuenow", skill_r1.level);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", skill_r1.level, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@progressAnimation", undefined);
        }
      }

      var SkillsComponent = /*#__PURE__*/function () {
        function SkillsComponent(skillsService) {
          _classCallCheck(this, SkillsComponent);

          this.skillsService = skillsService;
          this.skills = [];
        }

        return _createClass(SkillsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadSkills();
          }
        }, {
          key: "loadSkills",
          value: function loadSkills() {
            var _this2 = this;

            this.skillsService.getSkills().subscribe(function (skills) {
              return _this2.skills = skills;
            });
          }
        }]);
      }();

      SkillsComponent.ɵfac = function SkillsComponent_Factory(t) {
        return new (t || SkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_skills_service__WEBPACK_IMPORTED_MODULE_2__["SkillsService"]));
      };

      SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SkillsComponent,
        selectors: [["app-skills"]],
        decls: 3,
        vars: 1,
        consts: [["aria-label", "Skills Section", 1, "skills-container"], [1, "skills-grid"], ["class", "skill-item", 4, "ngFor", "ngForOf"], [1, "skill-item"], [1, "skill-header"], ["role", "heading", "aria-level", "3", 1, "skill-name"], [1, "skill-level", 3, "aria-label"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "skill-bar"], [1, "skill-progress"]],
        template: function SkillsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SkillsComponent_div_2_Template, 8, 8, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.skills);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: [".skills-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background: var(--bg-glass);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border: 1px solid rgba(0, 199, 255, 0.1);\n  border-radius: 8px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n}\n\n.skills-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n}\n\n@media (max-width: 768px) {\n  .skills-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.skill-item[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  opacity: 0;\n  animation: skillFadeIn 0.5s ease-out forwards;\n  animation-delay: calc(var(--index) * 0.1s);\n}\n\n.skill-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n\n.skill-name[_ngcontent-%COMP%] {\n  font-family: \"Fira Code\", monospace;\n  font-size: 1.1rem;\n  color: var(--neon-primary);\n  text-shadow: 0 0 5px var(--neon-primary);\n  letter-spacing: 0.5px;\n}\n\n.skill-name[_ngcontent-%COMP%]::before {\n  content: \"> \";\n  opacity: 0.7;\n  color: rgba(0, 199, 255, 0.7);\n}\n\n.skill-level[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n}\n\n.skill-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 2px;\n  overflow: hidden;\n  position: relative;\n}\n\n.skill-progress[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--neon-primary);\n  box-shadow: 0 0 10px var(--neon-primary);\n  transition: width 1s ease-in-out;\n  position: relative;\n}\n\n.skill-progress[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 5px;\n  height: 100%;\n  background: #fff;\n  filter: blur(3px);\n  opacity: 0.8;\n}\n\n.skill-progress[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 4px;\n  height: 8px;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 0 10px #00C7FF, 0 0 20px #00C7FF;\n}\n\n@keyframes skillFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes shimmer {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n@media (max-width: 768px) {\n  .skills-container[_ngcontent-%COMP%] {\n    margin: 1rem;\n    padding: 1.5rem;\n  }\n\n  .skill-name[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n\n  .skill-level[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxza2lsbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUNFO0VBTEY7SUFNSSwwQkFBQTtFQUVGO0FBQ0Y7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSw2Q0FBQTtFQUNBLDBDQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBRUY7O0FBQ0E7RUFDRSxtQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3Q0FBQTtFQUNBLHFCQUFBO0FBRUY7O0FBQUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBRUo7O0FBRUE7RUFDRSw0QkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSwrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7QUFBSjs7QUFLQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VBRkY7RUFJQTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQUZGO0FBQ0Y7O0FBS0E7RUFDRTtJQUNFLDRCQUFBO0VBSEY7RUFLQTtJQUNFLDJCQUFBO0VBSEY7QUFDRjs7QUFNQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGVBQUE7RUFKRjs7RUFPQTtJQUNFLGlCQUFBO0VBSkY7O0VBT0E7SUFDRSxpQkFBQTtFQUpGO0FBQ0YiLCJmaWxlIjoic2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNraWxscy1jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1nbGFzcyk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMTk5LCAyNTUsIDAuMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4uc2tpbGxzLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XHJcbiAgZ2FwOiAycmVtO1xyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG59XHJcblxyXG4uc2tpbGwtaXRlbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYW5pbWF0aW9uOiBza2lsbEZhZGVJbiAwLjVzIGVhc2Utb3V0IGZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYyh2YXIoLS1pbmRleCkgKiAwLjFzKTtcclxufVxyXG5cclxuLnNraWxsLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5za2lsbC1uYW1lIHtcclxuICBmb250LWZhbWlseTogJ0ZpcmEgQ29kZScsIG1vbm9zcGFjZTtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBjb2xvcjogdmFyKC0tbmVvbi1wcmltYXJ5KTtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDVweCB2YXIoLS1uZW9uLXByaW1hcnkpO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICBcclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJz4gJztcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIGNvbG9yOiByZ2JhKDAsIDE5OSwgMjU1LCAwLjcpO1xyXG4gIH1cclxufVxyXG5cclxuLnNraWxsLWxldmVsIHtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4uc2tpbGwtYmFyIHtcclxuICBoZWlnaHQ6IDRweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2tpbGwtcHJvZ3Jlc3Mge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1uZW9uLXByaW1hcnkpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHZhcigtLW5lb24tcHJpbWFyeSk7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMXMgZWFzZS1pbi1vdXQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIFxyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogNXB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGZpbHRlcjogYmx1cigzcHgpO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuICBcclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgd2lkdGg6IDRweDtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICMwMEM3RkYsXHJcbiAgICAgICAgICAgICAgIDAgMCAyMHB4ICMwMEM3RkY7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNraWxsRmFkZUluIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNoaW1tZXIge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnNraWxscy1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gIH1cclxuICBcclxuICAuc2tpbGwtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnNraWxsLWxldmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIH1cclxufSJdfQ== */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('skillAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'translateY(20px)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms cubic-bezier(0.4, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'translateY(0)'
          }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('progressAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            width: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1000ms cubic-bezier(0.4, 0, 0.2, 1)')])])]
        }
      });
      /***/
    },

    /***/
    "Krdw":
    /*!*********************************************************************!*\
      !*** ./src/app/components/project-modal/project-modal.component.ts ***!
      \*********************************************************************/

    /*! exports provided: ProjectModalComponent */

    /***/
    function Krdw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectModalComponent", function () {
        return ProjectModalComponent;
      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProjectModalComponent = /*#__PURE__*/function () {
        function ProjectModalComponent(dialogRef, project) {
          _classCallCheck(this, ProjectModalComponent);

          this.dialogRef = dialogRef;
          this.project = project;
        }

        return _createClass(ProjectModalComponent, [{
          key: "close",
          value: function close() {
            this.dialogRef.close();
          }
        }]);
      }();

      ProjectModalComponent.ɵfac = function ProjectModalComponent_Factory(t) {
        return new (t || ProjectModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]));
      };

      ProjectModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ProjectModalComponent,
        selectors: [["app-project-modal"]],
        decls: 9,
        vars: 3,
        consts: [[1, "modal-container"], [1, "modal-content"], [1, "project-description"], [1, "close-button", 3, "click"], [1, "command"]],
        template: function ProjectModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectModalComponent_Template_button_click_6_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "$ exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@dialogAnimation", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.project.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.project.description);
          }
        },
        styles: [".modal-container[_ngcontent-%COMP%] {\n  background: rgba(16, 16, 24, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border: 1px solid rgba(0, 199, 255, 0.3);\n  border-radius: 8px;\n  padding: 2rem;\n  max-width: 800px;\n  width: 90vw;\n  max-height: 90vh;\n  overflow-y: auto;\n  position: relative;\n  box-shadow: 0 0 20px rgba(0, 199, 255, 0.2);\n}\n.modal-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.modal-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(16, 16, 24, 0.95);\n}\n.modal-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(0, 199, 255, 0.5);\n  border-radius: 4px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n  border-bottom: 1px solid rgba(0, 199, 255, 0.3);\n  padding-bottom: 1rem;\n}\n.modal-title[_ngcontent-%COMP%] {\n  color: #00C7FF;\n  font-size: 2rem;\n  margin: 0;\n  text-shadow: 0 0 10px rgba(0, 199, 255, 0.5);\n}\n.close-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #00C7FF;\n  font-size: 1.5rem;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 4px;\n  transition: all 0.3s ease;\n}\n.close-button[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 199, 255, 0.1);\n  transform: scale(1.1);\n}\n.close-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px rgba(0, 199, 255, 0.5);\n}\n.detail-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.section-title[_ngcontent-%COMP%] {\n  color: #00C7FF;\n  font-size: 1.2rem;\n  margin-bottom: 1rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.project-description[_ngcontent-%COMP%] {\n  color: #fff;\n  line-height: 1.6;\n  margin-bottom: 1.5rem;\n}\n.tech-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.tech-tag[_ngcontent-%COMP%] {\n  background: rgba(0, 199, 255, 0.1);\n  border: 1px solid rgba(0, 199, 255, 0.3);\n  color: #00C7FF;\n  padding: 0.3rem 0.8rem;\n  border-radius: 4px;\n  font-size: 0.9rem;\n}\n.technical-list[_ngcontent-%COMP%], .features-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.technical-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-bottom: 0.5rem;\n  padding-left: 1.5rem;\n  position: relative;\n}\n.technical-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before, .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \">\";\n  position: absolute;\n  left: 0;\n  color: #00C7FF;\n}\n.project-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-top: 2rem;\n  flex-wrap: wrap;\n}\n.project-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  text-decoration: none;\n  color: #00C7FF;\n  background: rgba(0, 199, 255, 0.1);\n  padding: 0.5rem 1rem;\n  border-radius: 4px;\n  border: 1px solid rgba(0, 199, 255, 0.3);\n  transition: all 0.3s ease;\n}\n.project-link[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 199, 255, 0.2);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 199, 255, 0.2);\n}\n.project-link[_ngcontent-%COMP%]   .command[_ngcontent-%COMP%] {\n  color: #00FF9C;\n}\n.project-link[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\n.project-link[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  color: #FF00FF;\n}\n@media (max-width: 768px) {\n  .modal-container[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n    width: 95vw;\n  }\n\n  .modal-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n\n  .project-links[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9qZWN0LW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBQUNGO0FBQ0U7RUFDRSxVQUFBO0FBQ0o7QUFFRTtFQUNFLGtDQUFBO0FBQUo7QUFHRTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUtBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0Esb0JBQUE7QUFGRjtBQUtBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsNENBQUE7QUFGRjtBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRkY7QUFJRTtFQUNFLGtDQUFBO0VBQ0EscUJBQUE7QUFGSjtBQUtFO0VBQ0UsYUFBQTtFQUNBLDRDQUFBO0FBSEo7QUFPQTtFQUNFLG1CQUFBO0FBSkY7QUFPQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUpGO0FBT0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUpGO0FBT0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFKRjtBQU9BO0VBQ0Usa0NBQUE7RUFDQSx3Q0FBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFKRjtBQU9BOztFQUVFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFKRjtBQU1FOztFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFISjtBQUtJOztFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0FBRk47QUFPQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBSkY7QUFPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLHlCQUFBO0FBSkY7QUFNRTtFQUNFLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSw2Q0FBQTtBQUpKO0FBT0U7RUFDRSxjQUFBO0FBTEo7QUFRRTtFQUNFLCtCQUFBO0FBTko7QUFTRTtFQUNFLGNBQUE7QUFQSjtBQVdBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsV0FBQTtFQVJGOztFQVdBO0lBQ0UsaUJBQUE7RUFSRjs7RUFXQTtJQUNFLHNCQUFBO0VBUkY7QUFDRiIsImZpbGUiOiJwcm9qZWN0LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxNiwgMTYsIDI0LCAwLjk1KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAxOTksIDI1NSwgMC4zKTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIHdpZHRoOiA5MHZ3O1xyXG4gIG1heC1oZWlnaHQ6IDkwdmg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAxOTksIDI1NSwgMC4yKTtcclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDhweDtcclxuICB9XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTYsIDE2LCAyNCwgMC45NSk7XHJcbiAgfVxyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDE5OSwgMjU1LCAwLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDE5OSwgMjU1LCAwLjMpO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4ubW9kYWwtdGl0bGUge1xyXG4gIGNvbG9yOiAjMDBDN0ZGO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMTk5LCAyNTUsIDAuNSk7XHJcbn1cclxuXHJcbi5jbG9zZS1idXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjMDBDN0ZGO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAxOTksIDI1NSwgMC4xKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDAsIDE5OSwgMjU1LCAwLjUpO1xyXG4gIH1cclxufVxyXG5cclxuLmRldGFpbC1zZWN0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZSB7XHJcbiAgY29sb3I6ICMwMEM3RkY7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLnRlY2gtdGFncyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi50ZWNoLXRhZyB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAxOTksIDI1NSwgMC4xKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDE5OSwgMjU1LCAwLjMpO1xyXG4gIGNvbG9yOiAjMDBDN0ZGO1xyXG4gIHBhZGRpbmc6IDAuM3JlbSAwLjhyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4udGVjaG5pY2FsLWxpc3QsXHJcbi5mZWF0dXJlcy1saXN0IHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG5cclxuICBsaSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICc+JztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBjb2xvcjogIzAwQzdGRjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpbmtzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMXJlbTtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnByb2plY3QtbGluayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzAwQzdGRjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDE5OSwgMjU1LCAwLjEpO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDE5OSwgMjU1LCAwLjMpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAxOTksIDI1NSwgMC4yKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAxOTksIDI1NSwgMC4yKTtcclxuICB9XHJcblxyXG4gIC5jb21tYW5kIHtcclxuICAgIGNvbG9yOiAjMDBGRjlDO1xyXG4gIH1cclxuXHJcbiAgLnNlcGFyYXRvciB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gIH1cclxuXHJcbiAgLmFjdGlvbiB7XHJcbiAgICBjb2xvcjogI0ZGMDBGRjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5tb2RhbC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgd2lkdGg6IDk1dnc7XHJcbiAgfVxyXG5cclxuICAubW9kYWwtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAucHJvamVjdC1saW5rcyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxufSJdfQ== */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('dialogAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0,
            transform: 'scale(0.8)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms cubic-bezier(0.4, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1,
            transform: 'scale(1)'
          }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms cubic-bezier(0.4, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0,
            transform: 'scale(0.8)'
          }))])])]
        }
      });
      /***/
    },

    /***/
    "M0Pn":
    /*!*******************************************************************!*\
      !*** ./src/app/components/project-card/project-card.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ProjectCardComponent */

    /***/
    function M0Pn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectCardComponent", function () {
        return ProjectCardComponent;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../project-modal/project-modal.component */
      "Krdw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ProjectCardComponent_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", tag_r3, " ");
        }
      }

      function ProjectCardComponent_a_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectCardComponent_a_9_Template_a_click_0_listener($event) {
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "$ git clone");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "//");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "view_source.exe");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r1.project.githubUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        }
      }

      function ProjectCardComponent_a_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectCardComponent_a_10_Template_a_click_0_listener($event) {
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "$ ssh");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "//");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "launch_demo.exe");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r2.project.liveUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        }
      }

      var ProjectCardComponent = /*#__PURE__*/function () {
        function ProjectCardComponent(dialog) {
          _classCallCheck(this, ProjectCardComponent);

          this.dialog = dialog;
        }

        return _createClass(ProjectCardComponent, [{
          key: "openProjectDetails",
          value: function openProjectDetails() {
            this.dialog.open(_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_1__["ProjectModalComponent"], {
              panelClass: 'project-modal-dialog',
              data: this.project
            });
          }
        }]);
      }();

      ProjectCardComponent.ɵfac = function ProjectCardComponent_Factory(t) {
        return new (t || ProjectCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]));
      };

      ProjectCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ProjectCardComponent,
        selectors: [["app-project-card"]],
        inputs: {
          project: "project"
        },
        decls: 11,
        vars: 6,
        consts: [[1, "project-card", 3, "click"], [1, "project-card-overlay"], [1, "project-title"], [1, "project-description"], [1, "project-tags"], ["class", "project-tag", 4, "ngFor", "ngForOf"], [1, "project-links"], ["target", "_blank", "rel", "noopener noreferrer", "class", "project-link", 3, "href", "click", 4, "ngIf"], [1, "project-tag"], ["target", "_blank", "rel", "noopener noreferrer", 1, "project-link", 3, "href", "click"], [1, "command"], [1, "separator"], [1, "action"]],
        template: function ProjectCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectCardComponent_Template_div_click_0_listener() {
              return ctx.openProjectDetails();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ProjectCardComponent_span_7_Template, 2, 1, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ProjectCardComponent_a_9_Template, 7, 1, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ProjectCardComponent_a_10_Template, 7, 1, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fadeIn", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.project.title, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.project.description, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.project.tags);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.project.githubUrl);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.project.liveUrl);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: [".project-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: rgba(0, 0, 0, 0.8);\n  border: 1px solid rgba(0, 255, 224, 0.3);\n  border-radius: 0.5rem;\n  padding: 1.5rem;\n  position: relative;\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n}\n.project-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  border-color: rgba(0, 255, 224, 0.6);\n  box-shadow: 0 0 20px rgba(0, 255, 224, 0.2);\n}\n.project-card[_ngcontent-%COMP%]:hover   .project-card-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.project-card-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(90deg, rgba(0, 255, 224, 0.1), transparent);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.project-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  color: #00FFE0;\n  font-family: \"Space Mono\", monospace;\n  text-shadow: 0 0 10px rgba(0, 255, 224, 0.5);\n}\n.project-description[_ngcontent-%COMP%] {\n  color: #0ABFBC;\n  margin-bottom: 1rem;\n  line-height: 1.5;\n}\n.project-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.project-tag[_ngcontent-%COMP%] {\n  background: rgba(26, 26, 46, 0.8);\n  color: #FF2A6D;\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.875rem;\n  border: 1px solid rgba(255, 42, 109, 0.3);\n}\n.project-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.project-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #00FFE0;\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n.project-link[_ngcontent-%COMP%]:hover {\n  color: #FF2A6D;\n}\n.project-link[_ngcontent-%COMP%]   .command[_ngcontent-%COMP%] {\n  font-family: \"Space Mono\", monospace;\n}\n.project-link[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  color: #0ABFBC;\n}\n.project-link[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  color: #FF2A6D;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9qZWN0LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSx3Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUNFO0VBQ0UsMkJBQUE7RUFDQSxvQ0FBQTtFQUNBLDJDQUFBO0FBQ0o7QUFDSTtFQUNFLFVBQUE7QUFDTjtBQUlBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsdUVBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7QUFERjtBQUlBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0VBQ0EsNENBQUE7QUFERjtBQUlBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFERjtBQUlBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUlBO0VBQ0UsaUNBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7QUFERjtBQUlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQURGO0FBSUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUFERjtBQUdFO0VBQ0UsY0FBQTtBQURKO0FBSUU7RUFDRSxvQ0FBQTtBQUZKO0FBS0U7RUFDRSxjQUFBO0FBSEo7QUFNRTtFQUNFLGNBQUE7QUFKSiIsImZpbGUiOiJwcm9qZWN0LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdC1jYXJkIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMjU1LCAyMjQsIDAuMyk7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMjU1LCAyMjQsIDAuNik7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDI1NSwgMjI0LCAwLjIpO1xyXG5cclxuICAgIC5wcm9qZWN0LWNhcmQtb3ZlcmxheSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvamVjdC1jYXJkLW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBpbnNldDogMDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMCwgMjU1LCAyMjQsIDAuMSksIHRyYW5zcGFyZW50KTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4ucHJvamVjdC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBjb2xvcjogIzAwRkZFMDtcclxuICBmb250LWZhbWlseTogJ1NwYWNlIE1vbm8nLCBtb25vc3BhY2U7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMjU1LCAyMjQsIDAuNSk7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcclxuICBjb2xvcjogIzBBQkZCQztcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRhZ3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRhZyB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNiwgMjYsIDQ2LCAwLjgpO1xyXG4gIGNvbG9yOiAjRkYyQTZEO1xyXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgNDIsIDEwOSwgMC4zKTtcclxufVxyXG5cclxuLnByb2plY3QtbGlua3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLnByb2plY3QtbGluayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIGNvbG9yOiAjMDBGRkUwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICNGRjJBNkQ7XHJcbiAgfVxyXG5cclxuICAuY29tbWFuZCB7XHJcbiAgICBmb250LWZhbWlseTogJ1NwYWNlIE1vbm8nLCBtb25vc3BhY2U7XHJcbiAgfVxyXG5cclxuICAuc2VwYXJhdG9yIHtcclxuICAgIGNvbG9yOiAjMEFCRkJDO1xyXG4gIH1cclxuXHJcbiAgLmFjdGlvbiB7XHJcbiAgICBjb2xvcjogI0ZGMkE2RDtcclxuICB9XHJcbn0iXX0= */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'translateY(20px)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'translateY(0)'
          }))])])]
        }
      });
      /***/
    },

    /***/
    "Qbzz":
    /*!***************************************************!*\
      !*** ./src/app/components/hero/hero.component.ts ***!
      \***************************************************/

    /*! exports provided: HeroComponent */

    /***/
    function Qbzz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeroComponent", function () {
        return HeroComponent;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/project.service */
      "c3AT");
      /* harmony import */


      var _services_skills_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/skills.service */
      "pYtu");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function HeroComponent_div_19_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tag_r4);
        }
      }

      function HeroComponent_div_19_a_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ver no GitHub");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r1.githubUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function HeroComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HeroComponent_div_19_span_6_Template, 2, 1, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HeroComponent_div_19_a_7_Template, 2, 1, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r1.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r1.tags);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r1.githubUrl);
        }
      }

      var HeroComponent = /*#__PURE__*/function () {
        function HeroComponent(projectService, skillsService) {
          _classCallCheck(this, HeroComponent);

          this.projectService = projectService;
          this.skillsService = skillsService;
          this.title = 'Thiago Duarte';
          this.subtitle = 'Software Developer';
          this.description = 'Desenvolvedor Full Stack especializado em Java/Spring Boot e Angular, criando aplicações modernas e escaláveis com práticas DevOps e soluções cloud-native.';
          this.glitchState = 'normal';
          this.featuredProjects = [];
          this.skills = [];
          this.cliText = '';
        }

        return _createClass(HeroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadFeaturedProjects();
            this.loadSkills();
            this.simulateTyping('> Iniciando sistema...');
          }
        }, {
          key: "loadFeaturedProjects",
          value: function loadFeaturedProjects() {
            var _this3 = this;

            this.projectService.getFeaturedProjects().subscribe(function (projects) {
              return _this3.featuredProjects = projects;
            });
          }
        }, {
          key: "loadSkills",
          value: function loadSkills() {
            var _this4 = this;

            this.skillsService.getSkills().subscribe(function (skills) {
              return _this4.skills = skills;
            });
          }
        }, {
          key: "simulateTyping",
          value: function simulateTyping(text) {
            var _this5 = this;

            var index = 0;
            var interval = setInterval(function () {
              if (index < text.length) {
                _this5.cliText += text.charAt(index);
                index++;
              } else {
                clearInterval(interval);
              }
            }, 100);
          }
        }]);
      }();

      HeroComponent.ɵfac = function HeroComponent_Factory(t) {
        return new (t || HeroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_skills_service__WEBPACK_IMPORTED_MODULE_3__["SkillsService"]));
      };

      HeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HeroComponent,
        selectors: [["app-hero"]],
        decls: 20,
        vars: 5,
        consts: [[1, "hero-section"], [1, "content-container"], [1, "hero-content"], [1, "name", 3, "mouseenter", "mouseleave"], [1, "role"], [1, "description"], [1, "social-links"], ["href", "https://github.com/thiagoduarte", "target", "_blank", 1, "social-link"], [1, "fab", "fa-github"], ["href", "https://linkedin.com/in/thiagoduarte", "target", "_blank", 1, "social-link"], [1, "fab", "fa-linkedin"], ["href", "mailto:contato@thiagoduarte.dev", 1, "social-link"], [1, "fas", "fa-envelope"], [1, "featured-projects"], [1, "project-grid"], ["class", "project-card", 4, "ngFor", "ngForOf"], [1, "project-card"], [1, "tech-tags"], ["class", "tech-tag", 4, "ngFor", "ngForOf"], ["class", "view-project", 3, "href", 4, "ngIf"], [1, "tech-tag"], [1, "view-project", 3, "href"]],
        template: function HeroComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function HeroComponent_Template_span_mouseenter_4_listener() {
              return ctx.glitchState = "glitch";
            })("mouseleave", function HeroComponent_Template_span_mouseleave_4_listener() {
              return ctx.glitchState = "normal";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Thiago Duarte");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Software Developer");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Desenvolvedor Full Stack especializado em Java/Spring Boot e Angular, criando aplica\xE7\xF5es modernas e escal\xE1veis com pr\xE1ticas DevOps e solu\xE7\xF5es cloud-native.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, HeroComponent_div_19_Template, 8, 4, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@terminalEffect", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@glitchText", ctx.glitchState);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@typewriter", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@typewriter", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.featuredProjects);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: [".hero-section[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #0a0a0f;\n  position: relative;\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n.hero-section[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: radial-gradient(circle at center, rgba(0, 199, 255, 0.1) 0%, rgba(10, 10, 15, 0) 70%), linear-gradient(45deg, rgba(255, 0, 128, 0.05) 0%, rgba(10, 10, 15, 0) 70%);\n  pointer-events: none;\n  animation: pulseBackground 8s ease infinite;\n}\n.hero-section[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  width: 100%;\n  text-align: center;\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  line-height: 1.2;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 4rem;\n  font-weight: bold;\n  color: #00C7FF;\n  margin-bottom: 0.5rem;\n  text-shadow: 0 0 10px rgba(0, 199, 255, 0.5), 0 0 20px rgba(0, 199, 255, 0.3), 0 0 30px rgba(0, 199, 255, 0.2);\n  animation: glow 2s infinite;\n  position: relative;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]::before {\n  content: attr(data-text);\n  position: absolute;\n  left: 2px;\n  text-shadow: -2px 0 #ff00ff;\n  top: 0;\n  color: #00C7FF;\n  overflow: hidden;\n  clip: rect(0, 900px, 0, 0);\n  animation: noise-anim 3s infinite linear alternate-reverse;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 3rem;\n  color: #ffffff;\n  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.2);\n  position: relative;\n  overflow: hidden;\n  font-weight: 600;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: var(--text-secondary);\n  max-width: 600px;\n  margin: 2rem auto;\n  line-height: 1.6;\n  opacity: 0.9;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]   .view-projects-btn[_ngcontent-%COMP%] {\n  background: #00C7FF;\n  color: #0B1221;\n  padding: 0.75rem 2rem;\n  border-radius: 4px;\n  font-weight: 600;\n  font-size: 1.125rem;\n  transition: all 0.3s ease;\n  border: none;\n  cursor: pointer;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]   .view-projects-btn[_ngcontent-%COMP%]:hover {\n  background: #33D3FF;\n  transform: translateY(-2px);\n}\n.hero-section[_ngcontent-%COMP%]   .featured-projects[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n  padding: 2rem;\n}\n.hero-section[_ngcontent-%COMP%]   .featured-projects[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--cyber-primary);\n  font-size: 2.5rem;\n  margin-bottom: 3rem;\n  text-align: left;\n}\n.hero-section[_ngcontent-%COMP%]   .featured-projects[_ngcontent-%COMP%]   .project-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n}\n.hero-section[_ngcontent-%COMP%]   .featured-projects[_ngcontent-%COMP%]   .project-grid[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%] {\n  background: rgba(11, 18, 33, 0.8);\n  border: 1px solid rgba(0, 199, 255, 0.2);\n  border-radius: 12px;\n  padding: 2rem;\n  transition: all 0.3s ease;\n}\n.hero-section[_ngcontent-%COMP%]   .featured-projects[_ngcontent-%COMP%]   .project-grid[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--cyber-primary);\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n}\n.hero-section[_ngcontent-%COMP%]   .featured-projects[_ngcontent-%COMP%]   .project-grid[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--cyber-text);\n  margin-bottom: 1.5rem;\n}\n.hero-section[_ngcontent-%COMP%]   .featured-projects[_ngcontent-%COMP%]   .project-grid[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .tech-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 1.5rem;\n}\n.hero-section[_ngcontent-%COMP%]   .featured-projects[_ngcontent-%COMP%]   .project-grid[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .tech-tags[_ngcontent-%COMP%]   .tech-tag[_ngcontent-%COMP%] {\n  background: rgba(0, 199, 255, 0.1);\n  color: var(--cyber-primary);\n  padding: 0.25rem 0.75rem;\n  border-radius: 4px;\n  font-size: 0.875rem;\n}\n.hero-section[_ngcontent-%COMP%]   .featured-projects[_ngcontent-%COMP%]   .project-grid[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .view-project[_ngcontent-%COMP%] {\n  color: var(--cyber-primary);\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.hero-section[_ngcontent-%COMP%]   .featured-projects[_ngcontent-%COMP%]   .project-grid[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .view-project[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.hero-section[_ngcontent-%COMP%]   .featured-projects[_ngcontent-%COMP%]   .project-grid[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  border-color: var(--cyber-primary);\n  box-shadow: 0 0 30px rgba(0, 199, 255, 0.1);\n}\n.hero-section[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: radial-gradient(circle at center, rgba(0, 199, 255, 0.1) 0%, transparent 70%);\n  pointer-events: none;\n}\n.hero-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: var(--cyber-primary);\n  margin-bottom: 0.5rem;\n  font-weight: 700;\n  animation: fadeInDown 0.8s ease-out;\n  letter-spacing: -0.02em;\n  text-shadow: 0 0 10px rgba(0, 199, 255, 0.5);\n}\n.hero-section[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: var(--cyber-text);\n  margin-bottom: 2rem;\n  animation: fadeInUp 0.8s ease-out 0.2s backwards;\n  font-weight: 400;\n  line-height: 1.5;\n  text-shadow: 0 0 5px rgba(203, 213, 225, 0.3);\n}\n.hero-section[_ngcontent-%COMP%]   .cli-output[_ngcontent-%COMP%] {\n  font-family: \"IBM Plex Mono\", monospace;\n  font-size: 0.875rem;\n  color: var(--cyber-primary);\n  text-shadow: 0 0 5px rgba(0, 199, 255, 0.5);\n}\n.content-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  text-align: center;\n}\n.button-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n}\n.cyber-button[_ngcontent-%COMP%] {\n  @apply px-8 py-3 rounded relative overflow-hidden transition-all duration-300;\n}\n.cyber-button.primary[_ngcontent-%COMP%] {\n  @apply bg-cyber-primary text-cyber-bg;\n}\n.cyber-button.primary[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 25px var(--cyber-primary);\n  transform: translateY(-2px);\n}\n.cyber-button.outline[_ngcontent-%COMP%] {\n  @apply border-2 border-cyber-primary text-cyber-primary;\n}\n.cyber-button.outline[_ngcontent-%COMP%]:hover {\n  @apply bg-cyber-primary text-cyber-bg;\n  transform: translateY(-2px);\n}\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes scan-line {\n  0% {\n    transform: translateY(-100%);\n  }\n  100% {\n    transform: translateY(100vh);\n  }\n}\n@keyframes blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZXJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsOEtBQ0U7RUFFRixvQkFBQTtFQUNBLDJDQUFBO0FBQUo7QUFHRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBREo7QUFLSTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUFITjtBQUtNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDhHQUNFO0VBR0YsMkJBQUE7RUFDQSxrQkFBQTtBQU5SO0FBT1E7RUFDRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsTUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMERBQUE7QUFMVjtBQVNNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUZBQ0U7RUFFRixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFUUjtBQWFJO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFYTjtBQWVNO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBYlI7QUFlUTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7QUFiVjtBQW1CRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQWpCSjtBQW1CSTtFQUNFLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBakJOO0FBb0JJO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtBQWxCTjtBQW9CTTtFQUNFLGlDQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQWxCUjtBQW9CUTtFQUNFLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQWxCVjtBQXFCUTtFQUNFLHdCQUFBO0VBQ0EscUJBQUE7QUFuQlY7QUFzQlE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQXBCVjtBQXNCVTtFQUNFLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFwQlo7QUF3QlE7RUFDRSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUF0QlY7QUF3QlU7RUFDRSwwQkFBQTtBQXRCWjtBQTBCUTtFQUNFLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQ0FBQTtBQXhCVjtBQThCRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx5RkFBQTtFQUNBLG9CQUFBO0FBNUJKO0FBK0JFO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0EsdUJBQUE7RUFDQSw0Q0FBQTtBQTdCSjtBQWdDRTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZDQUFBO0FBOUJKO0FBaUNFO0VBQ0UsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkNBQUE7QUEvQko7QUFtQ0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWhDRjtBQW1DQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUFoQ0Y7QUFtQ0E7RUFDRSw2RUFBQTtBQWhDRjtBQWlDRTtFQUNFLHFDQUFBO0FBL0JKO0FBZ0NJO0VBQ0UseUNBQUE7RUFDQSwyQkFBQTtBQTlCTjtBQWlDRTtFQUNFLHVEQUFBO0FBL0JKO0FBZ0NJO0VBQ0UscUNBQUE7RUFDQSwyQkFBQTtBQTlCTjtBQW1DQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VBaENGO0VBa0NBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBaENGO0FBQ0Y7QUFtQ0E7RUFDRTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFQWpDRjtFQW1DQTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQWpDRjtBQUNGO0FBb0NBO0VBQ0U7SUFBSyw0QkFBQTtFQWpDTDtFQWtDQTtJQUFPLDRCQUFBO0VBL0JQO0FBQ0Y7QUFpQ0E7RUFDRTtJQUFXLFVBQUE7RUE5Qlg7RUErQkE7SUFBTSxVQUFBO0VBNUJOO0FBQ0YiLCJmaWxlIjoiaGVyby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZXJvLXNlY3Rpb24ge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTBhMGY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBcclxuICAgICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsIHJnYmEoMCwxOTksMjU1LDAuMSkgMCUsIHJnYmEoMTAsMTAsMTUsMCkgNzAlKSxcclxuICAgICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwwLDEyOCwwLjA1KSAwJSwgcmdiYSgxMCwxMCwxNSwwKSA3MCUpO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBhbmltYXRpb246IHB1bHNlQmFja2dyb3VuZCA4cyBlYXNlIGluZmluaXRlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmhlcm8tY29udGVudCB7XHJcbiAgICBoMSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgXHJcbiAgICAgIC5uYW1lIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICMwMEM3RkY7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiBcclxuICAgICAgICAgIDAgMCAxMHB4IHJnYmEoMCwxOTksMjU1LDAuNSksXHJcbiAgICAgICAgICAwIDAgMjBweCByZ2JhKDAsMTk5LDI1NSwwLjMpLFxyXG4gICAgICAgICAgMCAwIDMwcHggcmdiYSgwLDE5OSwyNTUsMC4yKTtcclxuICAgICAgICBhbmltYXRpb246IGdsb3cgMnMgaW5maW5pdGU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBsZWZ0OiAycHg7XHJcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogLTJweCAwICNmZjAwZmY7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBjb2xvcjogIzAwQzdGRjtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICBjbGlwOiByZWN0KDAsIDkwMHB4LCAwLCAwKTtcclxuICAgICAgICAgIGFuaW1hdGlvbjogbm9pc2UtYW5pbSAzcyBpbmZpbml0ZSBsaW5lYXIgYWx0ZXJuYXRlLXJldmVyc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAucm9sZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiBcclxuICAgICAgICAgIDAgMCAxMHB4IHJnYmEoMjU1LDI1NSwyNTUsMC4zKSxcclxuICAgICAgICAgIDAgMCAyMHB4IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xyXG4gICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICBtYXJnaW46IDJyZW0gYXV0bztcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgfVxyXG5cclxuICAgIC5jdGEtYnV0dG9uIHtcclxuICAgICAgLnZpZXctcHJvamVjdHMtYnRuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDBDN0ZGO1xyXG4gICAgICAgIGNvbG9yOiAjMEIxMjIxO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMnJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzNEM0ZGO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZlYXR1cmVkLXByb2plY3RzIHtcclxuICAgIG1hcmdpbi10b3A6IDZyZW07XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgXHJcbiAgICBoMiB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jeWJlci1wcmltYXJ5KTtcclxuICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcm9qZWN0LWdyaWQge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcclxuICAgICAgZ2FwOiAycmVtO1xyXG4gICAgICBcclxuICAgICAgLnByb2plY3QtY2FyZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxMSwgMTgsIDMzLCAwLjgpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMTk5LCAyNTUsIDAuMik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWN5YmVyLXByaW1hcnkpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jeWJlci10ZXh0KTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnRlY2gtdGFncyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgZ2FwOiAwLjVyZW07XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC50ZWNoLXRhZyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTk5LCAyNTUsIDAuMSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jeWJlci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC52aWV3LXByb2plY3Qge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWN5YmVyLXByaW1hcnkpO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgZ2FwOiAwLjVyZW07XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWN5YmVyLXByaW1hcnkpO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDMwcHggcmdiYSgwLCAxOTksIDI1NSwgMC4xKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgY2VudGVyLCByZ2JhKDAsIDE5OSwgMjU1LCAwLjEpIDAlLCB0cmFuc3BhcmVudCA3MCUpO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgY29sb3I6IHZhcigtLWN5YmVyLXByaW1hcnkpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGFuaW1hdGlvbjogZmFkZUluRG93biAwLjhzIGVhc2Utb3V0O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAxOTksIDI1NSwgMC41KTtcclxuICB9XHJcblxyXG4gIC5zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tY3liZXItdGV4dCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW5VcCAwLjhzIGVhc2Utb3V0IDAuMnMgYmFja3dhcmRzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCByZ2JhKDIwMywgMjEzLCAyMjUsIDAuMyk7XHJcbiAgfVxyXG5cclxuICAuY2xpLW91dHB1dCB7XHJcbiAgICBmb250LWZhbWlseTogJ0lCTSBQbGV4IE1vbm8nLCBtb25vc3BhY2U7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgY29sb3I6IHZhcigtLWN5YmVyLXByaW1hcnkpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAxOTksIDI1NSwgMC41KTtcclxuICB9XHJcbn1cclxuXHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b24tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY3liZXItYnV0dG9uIHtcclxuICBAYXBwbHkgcHgtOCBweS0zIHJvdW5kZWQgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMDtcclxuICAmLnByaW1hcnkge1xyXG4gICAgQGFwcGx5IGJnLWN5YmVyLXByaW1hcnkgdGV4dC1jeWJlci1iZztcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMjVweCB2YXIoLS1jeWJlci1wcmltYXJ5KTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgfVxyXG4gIH1cclxuICAmLm91dGxpbmUge1xyXG4gICAgQGFwcGx5IGJvcmRlci0yIGJvcmRlci1jeWJlci1wcmltYXJ5IHRleHQtY3liZXItcHJpbWFyeTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBAYXBwbHkgYmctY3liZXItcHJpbWFyeSB0ZXh0LWN5YmVyLWJnO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNjYW4tbGluZSB7XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpOyB9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBibGluayB7XHJcbiAgMCUsIDEwMCUgeyBvcGFjaXR5OiAxOyB9XHJcbiAgNTAlIHsgb3BhY2l0eTogMDsgfVxyXG59XHJcbiJdfQ== */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('terminalEffect', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'translateY(20px)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-out')])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('glitchText', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'none'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('glitch', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'skew(0deg)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('normal <=> glitch', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.1s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'skew(20deg)',
            offset: 0.2
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'skew(-20deg)',
            offset: 0.4
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'skew(0deg)',
            offset: 0.6
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'skew(10deg)',
            offset: 0.8
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'skew(0deg)',
            offset: 1
          })]))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('typewriter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            width: 0,
            overflow: 'hidden'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s steps(40, end)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            width: '100%'
          }))])])]
        }
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/hero/hero.component */
      "Qbzz");
      /* harmony import */


      var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/projects/projects.component */
      "6bE9");
      /* harmony import */


      var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/skills/skills.component */
      "A9VX");

      var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
        _classCallCheck(this, AppComponent);
      });

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 4,
        vars: 0,
        consts: [[1, "bg-[var(--background)]", "min-h-screen"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-hero");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_components_hero_hero_component__WEBPACK_IMPORTED_MODULE_1__["HeroComponent"], _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"], _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_3__["SkillsComponent"]],
        styles: ["[_nghost-%COMP%] {\n      display: block;\n      min-height: 100vh;\n      background-color: var(--background);\n    }"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/hero/hero.component */
      "Qbzz");
      /* harmony import */


      var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/projects/projects.component */
      "6bE9");
      /* harmony import */


      var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/skills/skills.component */
      "A9VX");
      /* harmony import */


      var _components_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/project-card/project-card.component */
      "M0Pn");
      /* harmony import */


      var _components_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/project-modal/project-modal.component */
      "Krdw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_6__["HeroComponent"], _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"], _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_8__["SkillsComponent"], _components_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_9__["ProjectCardComponent"], _components_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_10__["ProjectModalComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"]]
        });
      })();
      /***/

    },

    /***/
    "c3AT":
    /*!*********************************************!*\
      !*** ./src/app/services/project.service.ts ***!
      \*********************************************/

    /*! exports provided: ProjectService */

    /***/
    function c3AT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectService", function () {
        return ProjectService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProjectService = /*#__PURE__*/function () {
        function ProjectService() {
          _classCallCheck(this, ProjectService);

          this.projects = [{
            id: 8,
            title: 'Cadastro Nacional de Pessoas Desaparecidas',
            description: 'Sistema nacional para registro e gestão de informações sobre pessoas desaparecidas, desenvolvido para o Ministério da Justiça e Segurança Pública.',
            period: '2023',
            tags: ['Java 17', 'Spring Boot', 'Docker', 'Swagger'],
            technologies: ['Java 17', 'Spring Boot 2.7.5', 'Maven 3.x', 'Docker', 'Docker Compose', 'Swagger', 'Postman'],
            imageUrl: 'assets/images/missing-persons.jpg',
            client: 'Ministério da Justiça e Segurança Pública'
          }, {
            id: 1,
            title: 'Evolução do Projeto - Sistema de Gestão para Petshop',
            description: 'Sistema avançado de gestão para pet shop com arquitetura de microserviços, implementando práticas modernas de DevOps e cloud computing.',
            period: '20/05/2022 - 20/05/2023',
            tags: ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Microservices'],
            technologies: ['Docker', 'Kubernetes', 'AWS (EC2, S3)', 'Jenkins', 'Microservices'],
            imageUrl: 'assets/images/petshop-evolution.jpg',
            client: 'Animal World Pet Shop Riacho Fundo Ltda.'
          }, {
            id: 2,
            title: 'Sistema de Gestão para Pizzaria',
            description: 'Sistema completo para gerenciamento de pedidos e operações de pizzaria, com interface intuitiva e banco de dados otimizado.',
            period: '14/01/2018 - 14/09/2018',
            tags: ['Java', 'MySQL', 'Web Development'],
            technologies: ['MySQL', 'Java', 'Web Framework'],
            imageUrl: 'assets/images/pizzaria.jpg',
            client: 'Pizzaria Marathon'
          }, {
            id: 3,
            title: 'Matriz do Projeto - Sistema de Gestão para Petshop',
            description: 'Sistema integrado com emissão de notas fiscais e chatbot para WhatsApp, oferecendo automação de processos e melhor experiência ao cliente.',
            period: '13/04/2021 - 13/04/2022',
            tags: ['NF-e', 'WhatsApp API', 'MySQL'],
            technologies: ['Sistema NF-e', 'WhatsApp Chatbot', 'MySQL'],
            imageUrl: 'assets/images/petshop-matrix.jpg',
            client: 'Animal World Pet Shop Riacho Fundo Ltda.'
          }, {
            id: 4,
            title: 'Sistema de Gestão de Pedidos e Produção',
            description: 'Aplicação web moderna com relatórios personalizados e integração com WhatsApp para comunicação com clientes.',
            period: '17/05/2019 - 17/05/2020',
            tags: ['Angular', 'Spring Boot', 'TypeScript', 'MySQL'],
            technologies: ['Angular', 'Spring Boot', 'TypeScript', 'MySQL', 'JasperReports', 'WhatsApp API'],
            imageUrl: 'assets/images/orders-management.jpg',
            client: 'Manoel da Costa Rodrigues'
          }, {
            id: 5,
            title: 'Sistema de Gestão para Petshop (Microservices)',
            description: 'Versão modernizada do sistema de gestão utilizando arquitetura de microserviços e práticas DevOps para maior escalabilidade.',
            period: '20/05/2022 - 20/05/2023',
            tags: ['Docker', 'Kubernetes', 'AWS', 'Jenkins'],
            technologies: ['Docker', 'Kubernetes', 'AWS (EC2, S3)', 'Jenkins', 'Microservices'],
            imageUrl: 'assets/images/petshop-micro.jpg',
            client: 'Animal World Pet Shop Riacho Fundo Ltda.'
          }, {
            id: 6,
            title: 'Sistema de Gestão para Pizzaria - Versão Base',
            description: 'Sistema fundamental para gerenciamento de pedidos e operações de pizzaria com interface simplificada.',
            period: '14/01/2018 - 14/09/2018',
            tags: ['MySQL', 'Java', 'Web Development'],
            technologies: ['MySQL', 'Java', 'Web Framework'],
            imageUrl: 'assets/images/pizzaria-base.jpg',
            client: 'Pizzaria Marathon'
          }, {
            id: 7,
            title: 'Sistema Genérico de Gestão',
            description: 'Sistema versátil para gestão de pedidos e produção com relatórios personalizados e integração com WhatsApp.',
            period: '17/05/2019 - 17/05/2020',
            tags: ['Angular', 'Spring Boot', 'TypeScript'],
            technologies: ['Angular', 'Spring Boot', 'TypeScript', 'MySQL', 'JasperReports', 'WhatsApp API'],
            imageUrl: 'assets/images/generic-management.jpg',
            client: 'Manoel da Costa Rodrigues'
          }];
        }

        return _createClass(ProjectService, [{
          key: "getProjects",
          value: function getProjects() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.projects);
          }
        }, {
          key: "getFeaturedProjects",
          value: function getFeaturedProjects() {
            // For now, return all projects as featured
            // You can implement logic to filter featured projects if needed
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.projects);
          }
        }]);
      }();

      ProjectService.ɵfac = function ProjectService_Factory(t) {
        return new (t || ProjectService)();
      };

      ProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ProjectService,
        factory: ProjectService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "pYtu":
    /*!********************************************!*\
      !*** ./src/app/services/skills.service.ts ***!
      \********************************************/

    /*! exports provided: SkillsService */

    /***/
    function pYtu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillsService", function () {
        return SkillsService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SkillsService = /*#__PURE__*/function () {
        function SkillsService() {
          _classCallCheck(this, SkillsService);

          this.skills = [{
            name: 'Java',
            level: 90
          }, {
            name: 'Spring Boot',
            level: 85
          }, {
            name: 'Angular',
            level: 85
          }, {
            name: 'TypeScript',
            level: 80
          }, {
            name: 'Docker',
            level: 75
          }, {
            name: 'Kubernetes',
            level: 70
          }, {
            name: 'Jenkins',
            level: 75
          }, {
            name: 'Maven',
            level: 80
          }, {
            name: 'Hibernate',
            level: 85
          }, {
            name: 'JavaFX',
            level: 75
          }, {
            name: 'SCSS',
            level: 80
          }, {
            name: 'Angular CLI',
            level: 85
          }];
        }

        return _createClass(SkillsService, [{
          key: "getSkills",
          value: function getSkills() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.skills);
          }
        }, {
          key: "getSkillsByCategory",
          value: function getSkillsByCategory(category) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.skills.filter(function (skill) {
              return skill.level >= 80;
            }));
          }
        }]);
      }();

      SkillsService.ɵfac = function SkillsService_Factory(t) {
        return new (t || SkillsService)();
      };

      SkillsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: SkillsService,
        factory: SkillsService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/hero/hero.component */
      "Qbzz");
      /* harmony import */


      var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/projects/projects.component */
      "6bE9");
      /* harmony import */


      var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/skills/skills.component */
      "A9VX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_1__["HeroComponent"]
      }, {
        path: 'projects',
        component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]
      }, {
        path: 'skills',
        component: _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_3__["SkillsComponent"]
      }, {
        path: '**',
        redirectTo: ''
      }];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
          useHash: true,
          relativeLinkResolution: 'legacy',
          paramsInheritanceStrategy: 'always'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");

      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map