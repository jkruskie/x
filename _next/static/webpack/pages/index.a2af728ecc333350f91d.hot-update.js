webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/Taskbar/ButtonBar.tsx":
/*!*************************************************!*\
  !*** ./components/System/Taskbar/ButtonBar.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_System_Taskbar_ButtonBar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/System/Taskbar/ButtonBar.module.scss */ \"./styles/System/Taskbar/ButtonBar.module.scss\");\n/* harmony import */ var _styles_System_Taskbar_ButtonBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_System_Taskbar_ButtonBar_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_FileSystem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/FileSystem */ \"./contexts/FileSystem.tsx\");\n/* harmony import */ var _contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contexts/ProcessManager */ \"./contexts/ProcessManager.tsx\");\n/* harmony import */ var _contexts_SessionManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/contexts/SessionManager */ \"./contexts/SessionManager.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/System/Taskbar/ButtonBar.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar defaultView = 'All apps';\n\nvar ButtonBar = function ButtonBar(_ref) {\n  _s();\n\n  var startButtonRef = _ref.startButtonRef,\n      buttonsRef = _ref.buttonsRef,\n      setShowMenu = _ref.setShowMenu;\n  var fs = Object(react__WEBPACK_IMPORTED_MODULE_7__[\"useContext\"])(_contexts_FileSystem__WEBPACK_IMPORTED_MODULE_4__[\"FileContext\"]);\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_7__[\"useContext\"])(_contexts_SessionManager__WEBPACK_IMPORTED_MODULE_6__[\"SessionContext\"]),\n      foreground = _useContext.foreground;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_7__[\"useContext\"])(_contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_5__[\"ProcessContext\"]),\n      open = _useContext2.open;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__[\"useState\"])(defaultView),\n      view = _useState[0],\n      setView = _useState[1];\n\n  var buttons = [{\n    title: 'START',\n    alt: 'Expand',\n    icon: \"\\uE700\",\n    isBold: true\n  }, {\n    title: 'All apps',\n    icon: \"\\uE179\",\n    isView: true\n  }, {\n    title: 'Documents',\n    icon: \"\\uE160\",\n    onClick: function () {\n      var _onClick = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(clickEvent) {\n        var processId;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return open({\n                  icon: '/icons/programs/explorer.png',\n                  name: 'Documents',\n                  url: '/docs'\n                }, {}, clickEvent.target);\n\n              case 2:\n                processId = _context.sent;\n                foreground(processId);\n                setShowMenu(false);\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function onClick(_x) {\n        return _onClick.apply(this, arguments);\n      }\n\n      return onClick;\n    }()\n  }, {\n    title: 'Power',\n    icon: \"\\uE7E8\",\n    onClick: function onClick() {\n      // TODO: You sure?\n      // emptyDirectory(fs, ROOT_DIRECTORY);\n      sessionStorage.clear(); // TODO: Reload\n    }\n  }];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"ol\", {\n    className: _styles_System_Taskbar_ButtonBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.buttons,\n    ref: buttonsRef,\n    tabIndex: -1,\n    onMouseLeave: function onMouseLeave() {\n      var _startButtonRef$curre;\n\n      return (_startButtonRef$curre = startButtonRef.current) === null || _startButtonRef$curre === void 0 ? void 0 : _startButtonRef$curre.focus();\n    },\n    children: buttons.map(function (_ref2) {\n      var alt = _ref2.alt,\n          icon = _ref2.icon,\n          isBold = _ref2.isBold,\n          isView = _ref2.isView,\n          title = _ref2.title,\n          onClick = _ref2.onClick;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"figure\", {\n          className: view === title ? _styles_System_Taskbar_ButtonBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.buttonSelected : '',\n          onClick: isView ? function () {\n            return setView(view);\n          } : onClick,\n          tabIndex: -1,\n          title: alt || title,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n            \"data-icon\": icon\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"figcaption\", {\n            children: isBold ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"strong\", {\n              children: title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 35\n            }, _this) : title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, _this)\n      }, title, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ButtonBar, \"GiJMjGmAoebyaxL+FffADTS6/3w=\");\n\n_c = ButtonBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ButtonBar);\n\nvar _c;\n\n$RefreshReg$(_c, \"ButtonBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9CdXR0b25CYXIudHN4Pzc1ZjAiXSwibmFtZXMiOlsiZGVmYXVsdFZpZXciLCJCdXR0b25CYXIiLCJzdGFydEJ1dHRvblJlZiIsImJ1dHRvbnNSZWYiLCJzZXRTaG93TWVudSIsImZzIiwidXNlQ29udGV4dCIsIkZpbGVDb250ZXh0IiwiU2Vzc2lvbkNvbnRleHQiLCJmb3JlZ3JvdW5kIiwiUHJvY2Vzc0NvbnRleHQiLCJvcGVuIiwidXNlU3RhdGUiLCJ2aWV3Iiwic2V0VmlldyIsImJ1dHRvbnMiLCJ0aXRsZSIsImFsdCIsImljb24iLCJpc0JvbGQiLCJpc1ZpZXciLCJvbkNsaWNrIiwiY2xpY2tFdmVudCIsIm5hbWUiLCJ1cmwiLCJ0YXJnZXQiLCJwcm9jZXNzSWQiLCJzZXNzaW9uU3RvcmFnZSIsImNsZWFyIiwic3R5bGVzIiwiY3VycmVudCIsImZvY3VzIiwibWFwIiwiYnV0dG9uU2VsZWN0ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxXQUFXLEdBQUcsVUFBcEI7O0FBRUEsSUFBTUMsU0FJSixHQUFHLFNBSkNBLFNBSUQsT0FBaUQ7QUFBQTs7QUFBQSxNQUE5Q0MsY0FBOEMsUUFBOUNBLGNBQThDO0FBQUEsTUFBOUJDLFVBQThCLFFBQTlCQSxVQUE4QjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7QUFDcEQsTUFBTUMsRUFBRSxHQUFHQyx3REFBVSxDQUFDQyxnRUFBRCxDQUFyQjs7QUFEb0Qsb0JBRTdCRCx3REFBVSxDQUFDRSx1RUFBRCxDQUZtQjtBQUFBLE1BRTVDQyxVQUY0QyxlQUU1Q0EsVUFGNEM7O0FBQUEscUJBR25DSCx3REFBVSxDQUFDSSx1RUFBRCxDQUh5QjtBQUFBLE1BRzVDQyxJQUg0QyxnQkFHNUNBLElBSDRDOztBQUFBLGtCQUk1QkMsc0RBQVEsQ0FBQ1osV0FBRCxDQUpvQjtBQUFBLE1BSTdDYSxJQUo2QztBQUFBLE1BSXZDQyxPQUp1Qzs7QUFNcEQsTUFBTUMsT0FBTyxHQUFHLENBQ2Q7QUFDRUMsU0FBSyxFQUFFLE9BRFQ7QUFFRUMsT0FBRyxFQUFFLFFBRlA7QUFHRUMsUUFBSSxFQUFFLFFBSFI7QUFJRUMsVUFBTSxFQUFFO0FBSlYsR0FEYyxFQU9kO0FBQ0VILFNBQUssRUFBRSxVQURUO0FBRUVFLFFBQUksRUFBRSxRQUZSO0FBR0VFLFVBQU0sRUFBRTtBQUhWLEdBUGMsRUFZZDtBQUNFSixTQUFLLEVBQUUsV0FEVDtBQUVFRSxRQUFJLEVBQUUsUUFGUjtBQUdFRyxXQUFPO0FBQUEsc01BQUUsaUJBQ1BDLFVBRE87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFHaUJYLElBQUksQ0FDMUI7QUFDRU8sc0JBQUksRUFBRSw4QkFEUjtBQUVFSyxzQkFBSSxFQUFFLFdBRlI7QUFHRUMscUJBQUcsRUFBRTtBQUhQLGlCQUQwQixFQU0xQixFQU4wQixFQU8xQkYsVUFBVSxDQUFDRyxNQVBlLENBSHJCOztBQUFBO0FBR0RDLHlCQUhDO0FBWVBqQiwwQkFBVSxDQUFDaUIsU0FBRCxDQUFWO0FBQ0F0QiwyQkFBVyxDQUFDLEtBQUQsQ0FBWDs7QUFiTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFGOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBSFQsR0FaYyxFQStCZDtBQUNFWSxTQUFLLEVBQUUsT0FEVDtBQUVFRSxRQUFJLEVBQUUsUUFGUjtBQUdFRyxXQUFPLEVBQUUsbUJBQU07QUFDYjtBQUNBO0FBQ0FNLG9CQUFjLENBQUNDLEtBQWYsR0FIYSxDQUliO0FBQ0Q7QUFSSCxHQS9CYyxDQUFoQjtBQTJDQSxzQkFDRTtBQUNFLGFBQVMsRUFBRUMsbUZBQU0sQ0FBQ2QsT0FEcEI7QUFFRSxPQUFHLEVBQUVaLFVBRlA7QUFHRSxZQUFRLEVBQUUsQ0FBQyxDQUhiO0FBSUUsZ0JBQVksRUFBRTtBQUFBOztBQUFBLHNDQUFNRCxjQUFjLENBQUM0QixPQUFyQiwwREFBTSxzQkFBd0JDLEtBQXhCLEVBQU47QUFBQSxLQUpoQjtBQUFBLGNBTUdoQixPQUFPLENBQUNpQixHQUFSLENBQVk7QUFBQSxVQUFHZixHQUFILFNBQUdBLEdBQUg7QUFBQSxVQUFRQyxJQUFSLFNBQVFBLElBQVI7QUFBQSxVQUFjQyxNQUFkLFNBQWNBLE1BQWQ7QUFBQSxVQUFzQkMsTUFBdEIsU0FBc0JBLE1BQXRCO0FBQUEsVUFBOEJKLEtBQTlCLFNBQThCQSxLQUE5QjtBQUFBLFVBQXFDSyxPQUFyQyxTQUFxQ0EsT0FBckM7QUFBQSwwQkFDWDtBQUFBLCtCQUNFO0FBQ0UsbUJBQVMsRUFBRVIsSUFBSSxLQUFLRyxLQUFULEdBQWlCYSxtRkFBTSxDQUFDSSxjQUF4QixHQUF5QyxFQUR0RDtBQUVFLGlCQUFPLEVBQUViLE1BQU0sR0FBRztBQUFBLG1CQUFNTixPQUFPLENBQUNELElBQUQsQ0FBYjtBQUFBLFdBQUgsR0FBeUJRLE9BRjFDO0FBR0Usa0JBQVEsRUFBRSxDQUFDLENBSGI7QUFJRSxlQUFLLEVBQUVKLEdBQUcsSUFBSUQsS0FKaEI7QUFBQSxrQ0FNRTtBQUFNLHlCQUFXRTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GLGVBT0U7QUFBQSxzQkFBYUMsTUFBTSxnQkFBRztBQUFBLHdCQUFTSDtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQUgsR0FBOEJBO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FBU0EsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFc7QUFBQSxLQUFaO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0JELENBM0VEOztHQUFNZixTOztLQUFBQSxTO0FBNkVTQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU3lzdGVtL1Rhc2tiYXIvQnV0dG9uQmFyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvU3lzdGVtL1Rhc2tiYXIvQnV0dG9uQmFyLm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IHsgRmlsZUNvbnRleHQgfSBmcm9tICdAL2NvbnRleHRzL0ZpbGVTeXN0ZW0nO1xuaW1wb3J0IHsgUHJvY2Vzc0NvbnRleHQgfSBmcm9tICdAL2NvbnRleHRzL1Byb2Nlc3NNYW5hZ2VyJztcbmltcG9ydCB7IFNlc3Npb25Db250ZXh0IH0gZnJvbSAnQC9jb250ZXh0cy9TZXNzaW9uTWFuYWdlcic7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJPT1RfRElSRUNUT1JZIH0gZnJvbSAnQC91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgZW1wdHlEaXJlY3RvcnkgfSBmcm9tICdAL3V0aWxzL2ZpbGVtYW5hZ2VyJztcblxuY29uc3QgZGVmYXVsdFZpZXcgPSAnQWxsIGFwcHMnO1xuXG5jb25zdCBCdXR0b25CYXI6IFJlYWN0LkZDPHtcbiAgc3RhcnRCdXR0b25SZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MQnV0dG9uRWxlbWVudD47XG4gIGJ1dHRvbnNSZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MT0xpc3RFbGVtZW50PjtcbiAgc2V0U2hvd01lbnU6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGJvb2xlYW4+Pjtcbn0+ID0gKHsgc3RhcnRCdXR0b25SZWYsIGJ1dHRvbnNSZWYsIHNldFNob3dNZW51IH0pID0+IHtcbiAgY29uc3QgZnMgPSB1c2VDb250ZXh0KEZpbGVDb250ZXh0KTtcbiAgY29uc3QgeyBmb3JlZ3JvdW5kIH0gPSB1c2VDb250ZXh0KFNlc3Npb25Db250ZXh0KTtcbiAgY29uc3QgeyBvcGVuIH0gPSB1c2VDb250ZXh0KFByb2Nlc3NDb250ZXh0KTtcbiAgY29uc3QgW3ZpZXcsIHNldFZpZXddID0gdXNlU3RhdGUoZGVmYXVsdFZpZXcpO1xuXG4gIGNvbnN0IGJ1dHRvbnMgPSBbXG4gICAge1xuICAgICAgdGl0bGU6ICdTVEFSVCcsXG4gICAgICBhbHQ6ICdFeHBhbmQnLFxuICAgICAgaWNvbjogJ1xcdWU3MDAnLFxuICAgICAgaXNCb2xkOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0FsbCBhcHBzJyxcbiAgICAgIGljb246ICdcXHVlMTc5JyxcbiAgICAgIGlzVmlldzogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdEb2N1bWVudHMnLFxuICAgICAgaWNvbjogJ1xcdWUxNjAnLFxuICAgICAgb25DbGljazogYXN5bmMgKFxuICAgICAgICBjbGlja0V2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50LCBNb3VzZUV2ZW50PlxuICAgICAgKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2Nlc3NJZCA9IGF3YWl0IG9wZW4oXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogJy9pY29ucy9wcm9ncmFtcy9leHBsb3Jlci5wbmcnLFxuICAgICAgICAgICAgbmFtZTogJ0RvY3VtZW50cycsXG4gICAgICAgICAgICB1cmw6ICcvZG9jcydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHt9LFxuICAgICAgICAgIGNsaWNrRXZlbnQudGFyZ2V0XG4gICAgICAgICk7XG4gICAgICAgIGZvcmVncm91bmQocHJvY2Vzc0lkKTtcbiAgICAgICAgc2V0U2hvd01lbnUoZmFsc2UpO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdQb3dlcicsXG4gICAgICBpY29uOiAnXFx1ZTdlOCcsXG4gICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgIC8vIFRPRE86IFlvdSBzdXJlP1xuICAgICAgICAvLyBlbXB0eURpcmVjdG9yeShmcywgUk9PVF9ESVJFQ1RPUlkpO1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICAvLyBUT0RPOiBSZWxvYWRcbiAgICAgIH1cbiAgICB9XG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8b2xcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9XG4gICAgICByZWY9e2J1dHRvbnNSZWZ9XG4gICAgICB0YWJJbmRleD17LTF9XG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHN0YXJ0QnV0dG9uUmVmLmN1cnJlbnQ/LmZvY3VzKCl9XG4gICAgPlxuICAgICAge2J1dHRvbnMubWFwKCh7IGFsdCwgaWNvbiwgaXNCb2xkLCBpc1ZpZXcsIHRpdGxlLCBvbkNsaWNrIH0pID0+IChcbiAgICAgICAgPGxpIGtleT17dGl0bGV9PlxuICAgICAgICAgIDxmaWd1cmVcbiAgICAgICAgICAgIGNsYXNzTmFtZT17dmlldyA9PT0gdGl0bGUgPyBzdHlsZXMuYnV0dG9uU2VsZWN0ZWQgOiAnJ31cbiAgICAgICAgICAgIG9uQ2xpY2s9e2lzVmlldyA/ICgpID0+IHNldFZpZXcodmlldykgOiBvbkNsaWNrfVxuICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgICAgICAgdGl0bGU9e2FsdCB8fCB0aXRsZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBkYXRhLWljb249e2ljb259IC8+XG4gICAgICAgICAgICA8ZmlnY2FwdGlvbj57aXNCb2xkID8gPHN0cm9uZz57dGl0bGV9PC9zdHJvbmc+IDogdGl0bGV9PC9maWdjYXB0aW9uPlxuICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC9vbD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/System/Taskbar/ButtonBar.tsx\n");

/***/ })

})