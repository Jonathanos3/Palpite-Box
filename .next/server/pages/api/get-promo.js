"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/get-promo";
exports.ids = ["pages/api/get-promo"];
exports.modules = {

/***/ "google-spreadsheet":
/*!*************************************!*\
  !*** external "google-spreadsheet" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("google-spreadsheet");

/***/ }),

/***/ "./pages/api/get-promo.js":
/*!********************************!*\
  !*** ./pages/api/get-promo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-spreadsheet */ \"google-spreadsheet\");\n/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__);\n\nconst doc = new google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__.GoogleSpreadsheet(process.env.SHEET_DOC_ID);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    try {\n        await doc.useServiceAccountAuth({\n            client_email: process.env.SHEET_CLIENT_EMAIL,\n            private_key: process.env.SHEET_PRIVATE_KEY\n        });\n        await doc.loadInfo();\n        const sheet = doc.sheetsByIndex[2];\n        await sheet.loadCells('A2:B2');\n        const mostrarPromocaoCell = sheet.getCell(1, 0);\n        const textoCell = sheet.getCell(1, 1);\n        res.end(JSON.stringify({\n            showCoupon: mostrarPromocaoCell.value === 'VERDADEIRO',\n            message: textoCell.value\n        }));\n    } catch (err) {\n        res.end(JSON.stringify({\n            showCoupon: FALSE,\n            message: ''\n        }));\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ2V0LXByb21vLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzRDtBQUV0RCxLQUFLLENBQUNDLEdBQUcsR0FBRyxHQUFHLENBQUNELGlFQUFpQixDQUFDRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsWUFBWTtBQUUxRCxpRUFBTSxPQUFnQkMsR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUVsQyxHQUFHLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQ0wsR0FBRyxDQUFDTSxxQkFBcUIsQ0FBQyxDQUFDO1lBQy9CQyxZQUFZLEVBQUVOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxrQkFBa0I7WUFDNUNDLFdBQVcsRUFBRVIsT0FBTyxDQUFDQyxHQUFHLENBQUNRLGlCQUFpQjtRQUM1QyxDQUFDO1FBRUQsS0FBSyxDQUFDVixHQUFHLENBQUNXLFFBQVE7UUFFbEIsS0FBSyxDQUFDQyxLQUFLLEdBQUdaLEdBQUcsQ0FBQ2EsYUFBYSxDQUFDLENBQUM7UUFDakMsS0FBSyxDQUFDRCxLQUFLLENBQUNFLFNBQVMsQ0FBQyxDQUFPO1FBRTdCLEtBQUssQ0FBQ0MsbUJBQW1CLEdBQUdILEtBQUssQ0FBQ0ksT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzlDLEtBQUssQ0FBQ0MsU0FBUyxHQUFHTCxLQUFLLENBQUNJLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVwQ1gsR0FBRyxDQUFDYSxHQUFHLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7WUFDdEJDLFVBQVUsRUFBRU4sbUJBQW1CLENBQUNPLEtBQUssS0FBSyxDQUFZO1lBQ3REQyxPQUFPLEVBQUVOLFNBQVMsQ0FBQ0ssS0FBSztRQUMxQixDQUFDO0lBRUgsQ0FBQyxDQUFDLEtBQUssRUFBRUUsR0FBRyxFQUFFLENBQUM7UUFDYm5CLEdBQUcsQ0FBQ2EsR0FBRyxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO1lBQ3RCQyxVQUFVLEVBQUVJLEtBQUs7WUFDakJGLE9BQU8sRUFBRSxDQUFFO1FBQ2IsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFscGl0ZS1ib3gvLi9wYWdlcy9hcGkvZ2V0LXByb21vLmpzPzNjZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29vZ2xlU3ByZWFkc2hlZXQgfSBmcm9tICdnb29nbGUtc3ByZWFkc2hlZXQnXHJcblxyXG5jb25zdCBkb2MgPSBuZXcgR29vZ2xlU3ByZWFkc2hlZXQocHJvY2Vzcy5lbnYuU0hFRVRfRE9DX0lEKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBkb2MudXNlU2VydmljZUFjY291bnRBdXRoKHtcclxuICAgICAgY2xpZW50X2VtYWlsOiBwcm9jZXNzLmVudi5TSEVFVF9DTElFTlRfRU1BSUwsXHJcbiAgICAgIHByaXZhdGVfa2V5OiBwcm9jZXNzLmVudi5TSEVFVF9QUklWQVRFX0tFWVxyXG4gICAgfSlcclxuXHJcbiAgICBhd2FpdCBkb2MubG9hZEluZm8oKVxyXG5cclxuICAgIGNvbnN0IHNoZWV0ID0gZG9jLnNoZWV0c0J5SW5kZXhbMl1cclxuICAgIGF3YWl0IHNoZWV0LmxvYWRDZWxscygnQTI6QjInKVxyXG5cclxuICAgIGNvbnN0IG1vc3RyYXJQcm9tb2Nhb0NlbGwgPSBzaGVldC5nZXRDZWxsKDEsIDApXHJcbiAgICBjb25zdCB0ZXh0b0NlbGwgPSBzaGVldC5nZXRDZWxsKDEsIDEpXHJcblxyXG4gICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIHNob3dDb3Vwb246IG1vc3RyYXJQcm9tb2Nhb0NlbGwudmFsdWUgPT09ICdWRVJEQURFSVJPJyxcclxuICAgICAgbWVzc2FnZTogdGV4dG9DZWxsLnZhbHVlXHJcbiAgICB9KSlcclxuXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgc2hvd0NvdXBvbjogRkFMU0UsXHJcbiAgICAgIG1lc3NhZ2U6ICcnXHJcbiAgICB9KSlcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkdvb2dsZVNwcmVhZHNoZWV0IiwiZG9jIiwicHJvY2VzcyIsImVudiIsIlNIRUVUX0RPQ19JRCIsInJlcSIsInJlcyIsInVzZVNlcnZpY2VBY2NvdW50QXV0aCIsImNsaWVudF9lbWFpbCIsIlNIRUVUX0NMSUVOVF9FTUFJTCIsInByaXZhdGVfa2V5IiwiU0hFRVRfUFJJVkFURV9LRVkiLCJsb2FkSW5mbyIsInNoZWV0Iiwic2hlZXRzQnlJbmRleCIsImxvYWRDZWxscyIsIm1vc3RyYXJQcm9tb2Nhb0NlbGwiLCJnZXRDZWxsIiwidGV4dG9DZWxsIiwiZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsInNob3dDb3Vwb24iLCJ2YWx1ZSIsIm1lc3NhZ2UiLCJlcnIiLCJGQUxTRSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/get-promo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/get-promo.js"));
module.exports = __webpack_exports__;

})();