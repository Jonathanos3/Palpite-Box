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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-spreadsheet */ \"google-spreadsheet\");\n/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__);\n\nconst doc = new google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__.GoogleSpreadsheet(process.env.SHEET_DOC_ID);\nconst fromBase64 = (value)=>{\n    const buff = new Buffer.from(value, 'base64');\n    return buff.toString('ascii');\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    try {\n        await doc.useServiceAccountAuth({\n            client_email: process.env.SHEET_CLIENT_EMAIL,\n            private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)\n        });\n        await doc.loadInfo();\n        const sheet = doc.sheetsByIndex[2];\n        await sheet.loadCells('A2:B2');\n        const mostrarPromocaoCell = sheet.getCell(1, 0);\n        const textoCell = sheet.getCell(1, 1);\n        res.end(JSON.stringify({\n            showCoupon: mostrarPromocaoCell.value === 'VERDADEIRO',\n            message: textoCell.value\n        }));\n    } catch (err) {\n        res.end(JSON.stringify({\n            showCoupon: FALSE,\n            message: ''\n        }));\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ2V0LXByb21vLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzRDtBQUV0RCxLQUFLLENBQUNDLEdBQUcsR0FBRyxHQUFHLENBQUNELGlFQUFpQixDQUFDRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsWUFBWTtBQUUxRCxLQUFLLENBQUNDLFVBQVUsSUFBR0MsS0FBSyxHQUFJLENBQUM7SUFDM0IsS0FBSyxDQUFDQyxJQUFJLEdBQUcsR0FBRyxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0gsS0FBSyxFQUFFLENBQVE7SUFDNUMsTUFBTSxDQUFDQyxJQUFJLENBQUNHLFFBQVEsQ0FBQyxDQUFPO0FBQzlCLENBQUM7QUFFRCxpRUFBTSxPQUFnQkMsR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUNsQyxHQUFHLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQ1gsR0FBRyxDQUFDWSxxQkFBcUIsQ0FBQyxDQUFDO1lBQy9CQyxZQUFZLEVBQUVaLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWSxrQkFBa0I7WUFDNUNDLFdBQVcsRUFBRVgsVUFBVSxDQUFDSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ2MsaUJBQWlCO1FBQ3ZELENBQUM7UUFFRCxLQUFLLENBQUNoQixHQUFHLENBQUNpQixRQUFRO1FBRWxCLEtBQUssQ0FBQ0MsS0FBSyxHQUFHbEIsR0FBRyxDQUFDbUIsYUFBYSxDQUFDLENBQUM7UUFDakMsS0FBSyxDQUFDRCxLQUFLLENBQUNFLFNBQVMsQ0FBQyxDQUFPO1FBRTdCLEtBQUssQ0FBQ0MsbUJBQW1CLEdBQUdILEtBQUssQ0FBQ0ksT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzlDLEtBQUssQ0FBQ0MsU0FBUyxHQUFHTCxLQUFLLENBQUNJLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVwQ1gsR0FBRyxDQUFDYSxHQUFHLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7WUFDdEJDLFVBQVUsRUFBRU4sbUJBQW1CLENBQUNoQixLQUFLLEtBQUssQ0FBWTtZQUN0RHVCLE9BQU8sRUFBRUwsU0FBUyxDQUFDbEIsS0FBSztRQUMxQixDQUFDO0lBRUgsQ0FBQyxDQUFDLEtBQUssRUFBRXdCLEdBQUcsRUFBRSxDQUFDO1FBQ2JsQixHQUFHLENBQUNhLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQztZQUN0QkMsVUFBVSxFQUFFRyxLQUFLO1lBQ2pCRixPQUFPLEVBQUUsQ0FBRTtRQUNiLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BhbHBpdGUtYm94Ly4vcGFnZXMvYXBpL2dldC1wcm9tby5qcz8zY2ZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvb2dsZVNwcmVhZHNoZWV0IH0gZnJvbSAnZ29vZ2xlLXNwcmVhZHNoZWV0J1xyXG5cclxuY29uc3QgZG9jID0gbmV3IEdvb2dsZVNwcmVhZHNoZWV0KHByb2Nlc3MuZW52LlNIRUVUX0RPQ19JRClcclxuXHJcbmNvbnN0IGZyb21CYXNlNjQgPSB2YWx1ZSA9PiB7XHJcbiAgY29uc3QgYnVmZiA9IG5ldyBCdWZmZXIuZnJvbSh2YWx1ZSwgJ2Jhc2U2NCcpO1xyXG4gIHJldHVybiBidWZmLnRvU3RyaW5nKCdhc2NpaScpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgZG9jLnVzZVNlcnZpY2VBY2NvdW50QXV0aCh7XHJcbiAgICAgIGNsaWVudF9lbWFpbDogcHJvY2Vzcy5lbnYuU0hFRVRfQ0xJRU5UX0VNQUlMLFxyXG4gICAgICBwcml2YXRlX2tleTogZnJvbUJhc2U2NChwcm9jZXNzLmVudi5TSEVFVF9QUklWQVRFX0tFWSlcclxuICAgIH0pXHJcblxyXG4gICAgYXdhaXQgZG9jLmxvYWRJbmZvKClcclxuXHJcbiAgICBjb25zdCBzaGVldCA9IGRvYy5zaGVldHNCeUluZGV4WzJdXHJcbiAgICBhd2FpdCBzaGVldC5sb2FkQ2VsbHMoJ0EyOkIyJylcclxuXHJcbiAgICBjb25zdCBtb3N0cmFyUHJvbW9jYW9DZWxsID0gc2hlZXQuZ2V0Q2VsbCgxLCAwKVxyXG4gICAgY29uc3QgdGV4dG9DZWxsID0gc2hlZXQuZ2V0Q2VsbCgxLCAxKVxyXG5cclxuICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBzaG93Q291cG9uOiBtb3N0cmFyUHJvbW9jYW9DZWxsLnZhbHVlID09PSAnVkVSREFERUlSTycsXHJcbiAgICAgIG1lc3NhZ2U6IHRleHRvQ2VsbC52YWx1ZVxyXG4gICAgfSkpXHJcblxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIHNob3dDb3Vwb246IEZBTFNFLFxyXG4gICAgICBtZXNzYWdlOiAnJ1xyXG4gICAgfSkpXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJHb29nbGVTcHJlYWRzaGVldCIsImRvYyIsInByb2Nlc3MiLCJlbnYiLCJTSEVFVF9ET0NfSUQiLCJmcm9tQmFzZTY0IiwidmFsdWUiLCJidWZmIiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwicmVxIiwicmVzIiwidXNlU2VydmljZUFjY291bnRBdXRoIiwiY2xpZW50X2VtYWlsIiwiU0hFRVRfQ0xJRU5UX0VNQUlMIiwicHJpdmF0ZV9rZXkiLCJTSEVFVF9QUklWQVRFX0tFWSIsImxvYWRJbmZvIiwic2hlZXQiLCJzaGVldHNCeUluZGV4IiwibG9hZENlbGxzIiwibW9zdHJhclByb21vY2FvQ2VsbCIsImdldENlbGwiLCJ0ZXh0b0NlbGwiLCJlbmQiLCJKU09OIiwic3RyaW5naWZ5Iiwic2hvd0NvdXBvbiIsIm1lc3NhZ2UiLCJlcnIiLCJGQUxTRSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/get-promo.js\n");

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