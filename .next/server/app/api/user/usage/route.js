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
exports.id = "app/api/user/usage/route";
exports.ids = ["app/api/user/usage/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuser%2Fusage%2Froute&page=%2Fapi%2Fuser%2Fusage%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fusage%2Froute.ts&appDir=C%3A%5CUsers%5CSamruddhi%5COneDrive%5CDesktop%5CLeadMapr%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CSamruddhi%5COneDrive%5CDesktop%5CLeadMapr&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuser%2Fusage%2Froute&page=%2Fapi%2Fuser%2Fusage%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fusage%2Froute.ts&appDir=C%3A%5CUsers%5CSamruddhi%5COneDrive%5CDesktop%5CLeadMapr%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CSamruddhi%5COneDrive%5CDesktop%5CLeadMapr&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Samruddhi_OneDrive_Desktop_LeadMapr_src_app_api_user_usage_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/user/usage/route.ts */ \"(rsc)/./src/app/api/user/usage/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/user/usage/route\",\n        pathname: \"/api/user/usage\",\n        filename: \"route\",\n        bundlePath: \"app/api/user/usage/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Samruddhi\\\\OneDrive\\\\Desktop\\\\LeadMapr\\\\src\\\\app\\\\api\\\\user\\\\usage\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Samruddhi_OneDrive_Desktop_LeadMapr_src_app_api_user_usage_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/user/usage/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VyJTJGdXNhZ2UlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnVzZXIlMkZ1c2FnZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnVzZXIlMkZ1c2FnZSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNTYW1ydWRkaGklNUNPbmVEcml2ZSU1Q0Rlc2t0b3AlNUNMZWFkTWFwciU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDU2FtcnVkZGhpJTVDT25lRHJpdmUlNUNEZXNrdG9wJTVDTGVhZE1hcHImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3VDO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhZG1hcHIvPzc0MTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcU2FtcnVkZGhpXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcTGVhZE1hcHJcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcdXNlclxcXFx1c2FnZVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdXNlci91c2FnZS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3VzZXIvdXNhZ2VcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3VzZXIvdXNhZ2Uvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxTYW1ydWRkaGlcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxMZWFkTWFwclxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx1c2VyXFxcXHVzYWdlXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS91c2VyL3VzYWdlL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuser%2Fusage%2Froute&page=%2Fapi%2Fuser%2Fusage%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fusage%2Froute.ts&appDir=C%3A%5CUsers%5CSamruddhi%5COneDrive%5CDesktop%5CLeadMapr%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CSamruddhi%5COneDrive%5CDesktop%5CLeadMapr&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/user/usage/route.ts":
/*!*****************************************!*\
  !*** ./src/app/api/user/usage/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var _lib_usage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/usage */ \"(rsc)/./src/lib/usage.ts\");\n\n\n\n\nasync function GET() {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session?.user?.id) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        // Get current usage (includes founder premium override)\n        const usage = await (0,_lib_usage__WEBPACK_IMPORTED_MODULE_3__.checkUsageLimit)(session.user.id);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            tier: usage.tier || \"free\",\n            used: usage.used,\n            limit: usage.limit,\n            remaining: usage.remaining\n        });\n    } catch (error) {\n        console.error(\"Usage fetch error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to fetch usage\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91c2VyL3VzYWdlL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUNFO0FBQ0o7QUFDSztBQUV2QyxlQUFlSTtJQUNsQixJQUFJO1FBQ0EsTUFBTUMsVUFBVSxNQUFNSiwyREFBZ0JBLENBQUNDLGtEQUFXQTtRQUVsRCxJQUFJLENBQUNHLFNBQVNDLE1BQU1DLElBQUk7WUFDcEIsT0FBT1AscURBQVlBLENBQUNRLElBQUksQ0FDcEI7Z0JBQUVDLE9BQU87WUFBZSxHQUN4QjtnQkFBRUMsUUFBUTtZQUFJO1FBRXRCO1FBRUEsd0RBQXdEO1FBQ3hELE1BQU1DLFFBQVEsTUFBTVIsMkRBQWVBLENBQUNFLFFBQVFDLElBQUksQ0FBQ0MsRUFBRTtRQUVuRCxPQUFPUCxxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1lBQ3JCSSxNQUFNRCxNQUFNQyxJQUFJLElBQUk7WUFDcEJDLE1BQU1GLE1BQU1FLElBQUk7WUFDaEJDLE9BQU9ILE1BQU1HLEtBQUs7WUFDbEJDLFdBQVdKLE1BQU1JLFNBQVM7UUFDOUI7SUFDSixFQUFFLE9BQU9OLE9BQU87UUFDWk8sUUFBUVAsS0FBSyxDQUFDLHNCQUFzQkE7UUFDcEMsT0FBT1QscURBQVlBLENBQUNRLElBQUksQ0FDcEI7WUFBRUMsT0FBTztRQUF3QixHQUNqQztZQUFFQyxRQUFRO1FBQUk7SUFFdEI7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYWRtYXByLy4vc3JjL2FwcC9hcGkvdXNlci91c2FnZS9yb3V0ZS50cz80ZjgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aCc7XHJcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSAnQC9saWIvYXV0aCc7XHJcbmltcG9ydCB7IGNoZWNrVXNhZ2VMaW1pdCB9IGZyb20gJ0AvbGliL3VzYWdlJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcclxuXHJcbiAgICAgICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgICAgICAgICB7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBzdGF0dXM6IDQwMSB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBHZXQgY3VycmVudCB1c2FnZSAoaW5jbHVkZXMgZm91bmRlciBwcmVtaXVtIG92ZXJyaWRlKVxyXG4gICAgICAgIGNvbnN0IHVzYWdlID0gYXdhaXQgY2hlY2tVc2FnZUxpbWl0KHNlc3Npb24udXNlci5pZCk7XHJcblxyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgICAgIHRpZXI6IHVzYWdlLnRpZXIgfHwgJ2ZyZWUnLFxyXG4gICAgICAgICAgICB1c2VkOiB1c2FnZS51c2VkLFxyXG4gICAgICAgICAgICBsaW1pdDogdXNhZ2UubGltaXQsXHJcbiAgICAgICAgICAgIHJlbWFpbmluZzogdXNhZ2UucmVtYWluaW5nLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdVc2FnZSBmZXRjaCBlcnJvcjonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgICAgICB7IGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIHVzYWdlJyB9LFxyXG4gICAgICAgICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJjaGVja1VzYWdlTGltaXQiLCJHRVQiLCJzZXNzaW9uIiwidXNlciIsImlkIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwidXNhZ2UiLCJ0aWVyIiwidXNlZCIsImxpbWl0IiwicmVtYWluaW5nIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/user/usage/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    throw new Error(\"Email and password required\");\n                }\n                const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user) {\n                    throw new Error(\"No user found with this email\");\n                }\n                const isValid = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().compare(credentials.password, user.password);\n                if (!isValid) {\n                    throw new Error(\"Invalid password\");\n                }\n                return {\n                    id: user.id,\n                    email: user.email,\n                    name: user.name\n                };\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\",\n        maxAge: 30 * 24 * 60 * 60\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session.user) {\n                session.user.id = token.id;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/login\",\n        error: \"/login\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDa0U7QUFDNUI7QUFDUjtBQUV2QixNQUFNRyxjQUErQjtJQUN4Q0MsV0FBVztRQUNQSiwyRUFBbUJBLENBQUM7WUFDaEJLLE1BQU07WUFDTkMsYUFBYTtnQkFDVEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtnQkFBUTtnQkFDdkNDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDcEQ7WUFDQSxNQUFNRSxXQUFVTCxXQUFXO2dCQUN2QixJQUFJLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsYUFBYUksVUFBVTtvQkFDL0MsTUFBTSxJQUFJRSxNQUFNO2dCQUNwQjtnQkFFQSxNQUFNQyxPQUFPLE1BQU1aLCtDQUFNQSxDQUFDWSxJQUFJLENBQUNDLFVBQVUsQ0FBQztvQkFDdENDLE9BQU87d0JBQUVSLE9BQU9ELFlBQVlDLEtBQUs7b0JBQUM7Z0JBQ3RDO2dCQUVBLElBQUksQ0FBQ00sTUFBTTtvQkFDUCxNQUFNLElBQUlELE1BQU07Z0JBQ3BCO2dCQUVBLE1BQU1JLFVBQVUsTUFBTWQsdURBQWMsQ0FBQ0ksWUFBWUksUUFBUSxFQUFFRyxLQUFLSCxRQUFRO2dCQUV4RSxJQUFJLENBQUNNLFNBQVM7b0JBQ1YsTUFBTSxJQUFJSixNQUFNO2dCQUNwQjtnQkFFQSxPQUFPO29CQUNITSxJQUFJTCxLQUFLSyxFQUFFO29CQUNYWCxPQUFPTSxLQUFLTixLQUFLO29CQUNqQkYsTUFBTVEsS0FBS1IsSUFBSTtnQkFDbkI7WUFDSjtRQUNKO0tBQ0g7SUFDRGMsU0FBUztRQUNMQyxVQUFVO1FBQ1ZDLFFBQVEsS0FBSyxLQUFLLEtBQUs7SUFDM0I7SUFDQUMsV0FBVztRQUNQLE1BQU1DLEtBQUksRUFBRUMsS0FBSyxFQUFFWCxJQUFJLEVBQUU7WUFDckIsSUFBSUEsTUFBTTtnQkFDTlcsTUFBTU4sRUFBRSxHQUFHTCxLQUFLSyxFQUFFO1lBQ3RCO1lBQ0EsT0FBT007UUFDWDtRQUNBLE1BQU1MLFNBQVEsRUFBRUEsT0FBTyxFQUFFSyxLQUFLLEVBQUU7WUFDNUIsSUFBSUwsUUFBUU4sSUFBSSxFQUFFO2dCQUNkTSxRQUFRTixJQUFJLENBQUNLLEVBQUUsR0FBR00sTUFBTU4sRUFBRTtZQUM5QjtZQUNBLE9BQU9DO1FBQ1g7SUFDSjtJQUNBTSxPQUFPO1FBQ0hDLFFBQVE7UUFDUkMsT0FBTztJQUNYO0FBQ0osRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYWRtYXByLy4vc3JjL2xpYi9hdXRoLnRzPzY2OTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSAnbmV4dC1hdXRoJztcclxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscyc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSc7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcclxuICAgICAgICAgICAgbmFtZTogJ2NyZWRlbnRpYWxzJyxcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6IHtcclxuICAgICAgICAgICAgICAgIGVtYWlsOiB7IGxhYmVsOiAnRW1haWwnLCB0eXBlOiAnZW1haWwnIH0sXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogJ1Bhc3N3b3JkJywgdHlwZTogJ3Bhc3N3b3JkJyB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjcmVkZW50aWFscz8uZW1haWwgfHwgIWNyZWRlbnRpYWxzPy5wYXNzd29yZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRW1haWwgYW5kIHBhc3N3b3JkIHJlcXVpcmVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHVzZXIgZm91bmQgd2l0aCB0aGlzIGVtYWlsJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcGFzc3dvcmQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB1c2VyLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgXSxcclxuICAgIHNlc3Npb246IHtcclxuICAgICAgICBzdHJhdGVneTogJ2p3dCcsXHJcbiAgICAgICAgbWF4QWdlOiAzMCAqIDI0ICogNjAgKiA2MCwgLy8gMzAgZGF5c1xyXG4gICAgfSxcclxuICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcclxuICAgICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgIHRva2VuLmlkID0gdXNlci5pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xyXG4gICAgICAgICAgICBpZiAoc2Vzc2lvbi51c2VyKSB7XHJcbiAgICAgICAgICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5pZCBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHNlc3Npb247XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBhZ2VzOiB7XHJcbiAgICAgICAgc2lnbkluOiAnL2xvZ2luJyxcclxuICAgICAgICBlcnJvcjogJy9sb2dpbicsXHJcbiAgICB9LFxyXG59O1xyXG4iXSwibmFtZXMiOlsiQ3JlZGVudGlhbHNQcm92aWRlciIsInByaXNtYSIsImJjcnlwdCIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsIkVycm9yIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImlzVmFsaWQiLCJjb21wYXJlIiwiaWQiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJtYXhBZ2UiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInBhZ2VzIiwic2lnbkluIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log:  true ? [\n        \"query\",\n        \"error\",\n        \"warn\"\n    ] : 0\n});\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsa0JBQWtCQztBQUlqQixNQUFNQyxTQUNURixnQkFBZ0JFLE1BQU0sSUFDdEIsSUFBSUgsd0RBQVlBLENBQUM7SUFDYkksS0FBS0MsS0FBeUIsR0FBZ0I7UUFBQztRQUFTO1FBQVM7S0FBTyxHQUFHLENBQVM7QUFDeEYsR0FBRztBQUVQLElBQUlBLElBQXlCLEVBQWNKLGdCQUFnQkUsTUFBTSxHQUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYWRtYXByLy4vc3JjL2xpYi9wcmlzbWEudHM/MDFkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcblxyXG5jb25zdCBnbG9iYWxGb3JQcmlzbWEgPSBnbG9iYWxUaGlzIGFzIHVua25vd24gYXMge1xyXG4gICAgcHJpc21hOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJpc21hID1cclxuICAgIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPz9cclxuICAgIG5ldyBQcmlzbWFDbGllbnQoe1xyXG4gICAgICAgIGxvZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgPyBbJ3F1ZXJ5JywgJ2Vycm9yJywgJ3dhcm4nXSA6IFsnZXJyb3InXSxcclxuICAgIH0pO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBwcmlzbWE7XHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWxUaGlzIiwicHJpc21hIiwibG9nIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/prisma.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/usage.ts":
/*!**************************!*\
  !*** ./src/lib/usage.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkUsageLimit: () => (/* binding */ checkUsageLimit),\n/* harmony export */   getUserSubscription: () => (/* binding */ getUserSubscription),\n/* harmony export */   incrementUsage: () => (/* binding */ incrementUsage)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var _types_lead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/types/lead */ \"(rsc)/./src/types/lead.ts\");\n\n\n// Founder premium override for development/testing\nconst FOUNDER_EMAIL = \"samruddhitiwari003@gmail.com\";\nconst FOUNDER_LIMIT = 100000;\nasync function checkUsageLimit(userId) {\n    const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findUnique({\n        where: {\n            id: userId\n        },\n        select: {\n            email: true,\n            subscriptionTier: true,\n            leadsUsedThisMonth: true,\n            usageResetDate: true\n        }\n    });\n    if (!user) {\n        throw new Error(\"User not found\");\n    }\n    // Founder premium override - unlimited for testing\n    if (user.email === FOUNDER_EMAIL) {\n        return {\n            allowed: true,\n            remaining: FOUNDER_LIMIT - user.leadsUsedThisMonth,\n            limit: FOUNDER_LIMIT,\n            used: user.leadsUsedThisMonth,\n            tier: \"pro\"\n        };\n    }\n    // Check if we need to reset monthly usage\n    const now = new Date();\n    const resetDate = new Date(user.usageResetDate);\n    const monthsSinceReset = (now.getFullYear() - resetDate.getFullYear()) * 12 + now.getMonth() - resetDate.getMonth();\n    if (monthsSinceReset >= 1) {\n        // Reset usage for new month\n        await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.user.update({\n            where: {\n                id: userId\n            },\n            data: {\n                leadsUsedThisMonth: 0,\n                usageResetDate: now\n            }\n        });\n        const limit = _types_lead__WEBPACK_IMPORTED_MODULE_1__.PLAN_LIMITS[user.subscriptionTier] || _types_lead__WEBPACK_IMPORTED_MODULE_1__.PLAN_LIMITS.free;\n        return {\n            allowed: true,\n            remaining: limit,\n            limit,\n            used: 0,\n            tier: user.subscriptionTier\n        };\n    }\n    const tier = user.subscriptionTier;\n    const limit = _types_lead__WEBPACK_IMPORTED_MODULE_1__.PLAN_LIMITS[tier] || _types_lead__WEBPACK_IMPORTED_MODULE_1__.PLAN_LIMITS.free;\n    const used = user.leadsUsedThisMonth;\n    const remaining = Math.max(0, limit - used);\n    return {\n        allowed: remaining > 0,\n        remaining,\n        limit,\n        used,\n        tier\n    };\n}\nasync function incrementUsage(userId, count) {\n    await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.user.update({\n        where: {\n            id: userId\n        },\n        data: {\n            leadsUsedThisMonth: {\n                increment: count\n            }\n        }\n    });\n}\nasync function getUserSubscription(userId) {\n    const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findUnique({\n        where: {\n            id: userId\n        },\n        select: {\n            subscriptionTier: true,\n            dodoCustomerId: true,\n            dodoSubscriptionId: true,\n            leadsUsedThisMonth: true,\n            usageResetDate: true\n        }\n    });\n    return user;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3VzYWdlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNDO0FBQ3VCO0FBRTdELG1EQUFtRDtBQUNuRCxNQUFNRSxnQkFBZ0I7QUFDdEIsTUFBTUMsZ0JBQWdCO0FBRWYsZUFBZUMsZ0JBQWdCQyxNQUFjO0lBT2hELE1BQU1DLE9BQU8sTUFBTU4sK0NBQU1BLENBQUNNLElBQUksQ0FBQ0MsVUFBVSxDQUFDO1FBQ3RDQyxPQUFPO1lBQUVDLElBQUlKO1FBQU87UUFDcEJLLFFBQVE7WUFDSkMsT0FBTztZQUNQQyxrQkFBa0I7WUFDbEJDLG9CQUFvQjtZQUNwQkMsZ0JBQWdCO1FBQ3BCO0lBQ0o7SUFFQSxJQUFJLENBQUNSLE1BQU07UUFDUCxNQUFNLElBQUlTLE1BQU07SUFDcEI7SUFFQSxtREFBbUQ7SUFDbkQsSUFBSVQsS0FBS0ssS0FBSyxLQUFLVCxlQUFlO1FBQzlCLE9BQU87WUFDSGMsU0FBUztZQUNUQyxXQUFXZCxnQkFBZ0JHLEtBQUtPLGtCQUFrQjtZQUNsREssT0FBT2Y7WUFDUGdCLE1BQU1iLEtBQUtPLGtCQUFrQjtZQUM3Qk8sTUFBTTtRQUNWO0lBQ0o7SUFFQSwwQ0FBMEM7SUFDMUMsTUFBTUMsTUFBTSxJQUFJQztJQUNoQixNQUFNQyxZQUFZLElBQUlELEtBQUtoQixLQUFLUSxjQUFjO0lBQzlDLE1BQU1VLG1CQUFtQixDQUFDSCxJQUFJSSxXQUFXLEtBQUtGLFVBQVVFLFdBQVcsRUFBQyxJQUFLLEtBQ25FSixJQUFJSyxRQUFRLEtBQUtILFVBQVVHLFFBQVE7SUFFekMsSUFBSUYsb0JBQW9CLEdBQUc7UUFDdkIsNEJBQTRCO1FBQzVCLE1BQU14QiwrQ0FBTUEsQ0FBQ00sSUFBSSxDQUFDcUIsTUFBTSxDQUFDO1lBQ3JCbkIsT0FBTztnQkFBRUMsSUFBSUo7WUFBTztZQUNwQnVCLE1BQU07Z0JBQ0ZmLG9CQUFvQjtnQkFDcEJDLGdCQUFnQk87WUFDcEI7UUFDSjtRQUVBLE1BQU1ILFFBQVFqQixvREFBVyxDQUFDSyxLQUFLTSxnQkFBZ0IsQ0FBcUIsSUFBSVgsb0RBQVdBLENBQUM0QixJQUFJO1FBQ3hGLE9BQU87WUFDSGIsU0FBUztZQUNUQyxXQUFXQztZQUNYQTtZQUNBQyxNQUFNO1lBQ05DLE1BQU1kLEtBQUtNLGdCQUFnQjtRQUMvQjtJQUNKO0lBRUEsTUFBTVEsT0FBT2QsS0FBS00sZ0JBQWdCO0lBQ2xDLE1BQU1NLFFBQVFqQixvREFBVyxDQUFDbUIsS0FBSyxJQUFJbkIsb0RBQVdBLENBQUM0QixJQUFJO0lBQ25ELE1BQU1WLE9BQU9iLEtBQUtPLGtCQUFrQjtJQUNwQyxNQUFNSSxZQUFZYSxLQUFLQyxHQUFHLENBQUMsR0FBR2IsUUFBUUM7SUFFdEMsT0FBTztRQUNISCxTQUFTQyxZQUFZO1FBQ3JCQTtRQUNBQztRQUNBQztRQUNBQztJQUNKO0FBQ0o7QUFFTyxlQUFlWSxlQUFlM0IsTUFBYyxFQUFFNEIsS0FBYTtJQUM5RCxNQUFNakMsK0NBQU1BLENBQUNNLElBQUksQ0FBQ3FCLE1BQU0sQ0FBQztRQUNyQm5CLE9BQU87WUFBRUMsSUFBSUo7UUFBTztRQUNwQnVCLE1BQU07WUFDRmYsb0JBQW9CO2dCQUNoQnFCLFdBQVdEO1lBQ2Y7UUFDSjtJQUNKO0FBQ0o7QUFFTyxlQUFlRSxvQkFBb0I5QixNQUFjO0lBQ3BELE1BQU1DLE9BQU8sTUFBTU4sK0NBQU1BLENBQUNNLElBQUksQ0FBQ0MsVUFBVSxDQUFDO1FBQ3RDQyxPQUFPO1lBQUVDLElBQUlKO1FBQU87UUFDcEJLLFFBQVE7WUFDSkUsa0JBQWtCO1lBQ2xCd0IsZ0JBQWdCO1lBQ2hCQyxvQkFBb0I7WUFDcEJ4QixvQkFBb0I7WUFDcEJDLGdCQUFnQjtRQUNwQjtJQUNKO0lBRUEsT0FBT1I7QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYWRtYXByLy4vc3JjL2xpYi91c2FnZS50cz9kNTc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvblRpZXIsIFBMQU5fTElNSVRTIH0gZnJvbSAnQC90eXBlcy9sZWFkJztcclxuXHJcbi8vIEZvdW5kZXIgcHJlbWl1bSBvdmVycmlkZSBmb3IgZGV2ZWxvcG1lbnQvdGVzdGluZ1xyXG5jb25zdCBGT1VOREVSX0VNQUlMID0gJ3NhbXJ1ZGRoaXRpd2FyaTAwM0BnbWFpbC5jb20nO1xyXG5jb25zdCBGT1VOREVSX0xJTUlUID0gMTAwMDAwO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrVXNhZ2VMaW1pdCh1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8e1xyXG4gICAgYWxsb3dlZDogYm9vbGVhbjtcclxuICAgIHJlbWFpbmluZzogbnVtYmVyO1xyXG4gICAgbGltaXQ6IG51bWJlcjtcclxuICAgIHVzZWQ6IG51bWJlcjtcclxuICAgIHRpZXI/OiBTdWJzY3JpcHRpb25UaWVyO1xyXG59PiB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHVzZXJJZCB9LFxyXG4gICAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgICAgICBlbWFpbDogdHJ1ZSxcclxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uVGllcjogdHJ1ZSxcclxuICAgICAgICAgICAgbGVhZHNVc2VkVGhpc01vbnRoOiB0cnVlLFxyXG4gICAgICAgICAgICB1c2FnZVJlc2V0RGF0ZTogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgbm90IGZvdW5kJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm91bmRlciBwcmVtaXVtIG92ZXJyaWRlIC0gdW5saW1pdGVkIGZvciB0ZXN0aW5nXHJcbiAgICBpZiAodXNlci5lbWFpbCA9PT0gRk9VTkRFUl9FTUFJTCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGFsbG93ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHJlbWFpbmluZzogRk9VTkRFUl9MSU1JVCAtIHVzZXIubGVhZHNVc2VkVGhpc01vbnRoLFxyXG4gICAgICAgICAgICBsaW1pdDogRk9VTkRFUl9MSU1JVCxcclxuICAgICAgICAgICAgdXNlZDogdXNlci5sZWFkc1VzZWRUaGlzTW9udGgsXHJcbiAgICAgICAgICAgIHRpZXI6ICdwcm8nLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgd2UgbmVlZCB0byByZXNldCBtb250aGx5IHVzYWdlXHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgcmVzZXREYXRlID0gbmV3IERhdGUodXNlci51c2FnZVJlc2V0RGF0ZSk7XHJcbiAgICBjb25zdCBtb250aHNTaW5jZVJlc2V0ID0gKG5vdy5nZXRGdWxsWWVhcigpIC0gcmVzZXREYXRlLmdldEZ1bGxZZWFyKCkpICogMTJcclxuICAgICAgICArIG5vdy5nZXRNb250aCgpIC0gcmVzZXREYXRlLmdldE1vbnRoKCk7XHJcblxyXG4gICAgaWYgKG1vbnRoc1NpbmNlUmVzZXQgPj0gMSkge1xyXG4gICAgICAgIC8vIFJlc2V0IHVzYWdlIGZvciBuZXcgbW9udGhcclxuICAgICAgICBhd2FpdCBwcmlzbWEudXNlci51cGRhdGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogdXNlcklkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGxlYWRzVXNlZFRoaXNNb250aDogMCxcclxuICAgICAgICAgICAgICAgIHVzYWdlUmVzZXREYXRlOiBub3csXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgbGltaXQgPSBQTEFOX0xJTUlUU1t1c2VyLnN1YnNjcmlwdGlvblRpZXIgYXMgU3Vic2NyaXB0aW9uVGllcl0gfHwgUExBTl9MSU1JVFMuZnJlZTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBhbGxvd2VkOiB0cnVlLFxyXG4gICAgICAgICAgICByZW1haW5pbmc6IGxpbWl0LFxyXG4gICAgICAgICAgICBsaW1pdCxcclxuICAgICAgICAgICAgdXNlZDogMCxcclxuICAgICAgICAgICAgdGllcjogdXNlci5zdWJzY3JpcHRpb25UaWVyIGFzIFN1YnNjcmlwdGlvblRpZXIsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0aWVyID0gdXNlci5zdWJzY3JpcHRpb25UaWVyIGFzIFN1YnNjcmlwdGlvblRpZXI7XHJcbiAgICBjb25zdCBsaW1pdCA9IFBMQU5fTElNSVRTW3RpZXJdIHx8IFBMQU5fTElNSVRTLmZyZWU7XHJcbiAgICBjb25zdCB1c2VkID0gdXNlci5sZWFkc1VzZWRUaGlzTW9udGg7XHJcbiAgICBjb25zdCByZW1haW5pbmcgPSBNYXRoLm1heCgwLCBsaW1pdCAtIHVzZWQpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYWxsb3dlZDogcmVtYWluaW5nID4gMCxcclxuICAgICAgICByZW1haW5pbmcsXHJcbiAgICAgICAgbGltaXQsXHJcbiAgICAgICAgdXNlZCxcclxuICAgICAgICB0aWVyLFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluY3JlbWVudFVzYWdlKHVzZXJJZDogc3RyaW5nLCBjb3VudDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBhd2FpdCBwcmlzbWEudXNlci51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGxlYWRzVXNlZFRoaXNNb250aDoge1xyXG4gICAgICAgICAgICAgICAgaW5jcmVtZW50OiBjb3VudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyU3Vic2NyaXB0aW9uKHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHVzZXJJZCB9LFxyXG4gICAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25UaWVyOiB0cnVlLFxyXG4gICAgICAgICAgICBkb2RvQ3VzdG9tZXJJZDogdHJ1ZSxcclxuICAgICAgICAgICAgZG9kb1N1YnNjcmlwdGlvbklkOiB0cnVlLFxyXG4gICAgICAgICAgICBsZWFkc1VzZWRUaGlzTW9udGg6IHRydWUsXHJcbiAgICAgICAgICAgIHVzYWdlUmVzZXREYXRlOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB1c2VyO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJQTEFOX0xJTUlUUyIsIkZPVU5ERVJfRU1BSUwiLCJGT1VOREVSX0xJTUlUIiwiY2hlY2tVc2FnZUxpbWl0IiwidXNlcklkIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImlkIiwic2VsZWN0IiwiZW1haWwiLCJzdWJzY3JpcHRpb25UaWVyIiwibGVhZHNVc2VkVGhpc01vbnRoIiwidXNhZ2VSZXNldERhdGUiLCJFcnJvciIsImFsbG93ZWQiLCJyZW1haW5pbmciLCJsaW1pdCIsInVzZWQiLCJ0aWVyIiwibm93IiwiRGF0ZSIsInJlc2V0RGF0ZSIsIm1vbnRoc1NpbmNlUmVzZXQiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwidXBkYXRlIiwiZGF0YSIsImZyZWUiLCJNYXRoIiwibWF4IiwiaW5jcmVtZW50VXNhZ2UiLCJjb3VudCIsImluY3JlbWVudCIsImdldFVzZXJTdWJzY3JpcHRpb24iLCJkb2RvQ3VzdG9tZXJJZCIsImRvZG9TdWJzY3JpcHRpb25JZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/usage.ts\n");

/***/ }),

/***/ "(rsc)/./src/types/lead.ts":
/*!***************************!*\
  !*** ./src/types/lead.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PLAN_LIMITS: () => (/* binding */ PLAN_LIMITS),\n/* harmony export */   PLAN_PRICES: () => (/* binding */ PLAN_PRICES)\n/* harmony export */ });\nconst PLAN_LIMITS = {\n    free: 50,\n    starter: 1000,\n    pro: 10000,\n    agency: 50000\n};\nconst PLAN_PRICES = {\n    starter: 5,\n    pro: 15,\n    agency: 39\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdHlwZXMvbGVhZC50cyIsIm1hcHBpbmdzIjoiOzs7OztBQTBCTyxNQUFNQSxjQUFnRDtJQUN6REMsTUFBTTtJQUNOQyxTQUFTO0lBQ1RDLEtBQUs7SUFDTEMsUUFBUTtBQUNaLEVBQUU7QUFFSyxNQUFNQyxjQUFpRTtJQUMxRUgsU0FBUztJQUNUQyxLQUFLO0lBQ0xDLFFBQVE7QUFDWixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhZG1hcHIvLi9zcmMvdHlwZXMvbGVhZC50cz84NjY3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgTGVhZCB7XHJcbiAgICBwbGFjZUlkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgICBwaG9uZT86IHN0cmluZztcclxuICAgIHdlYnNpdGU/OiBzdHJpbmc7XHJcbiAgICByYXRpbmc/OiBudW1iZXI7XHJcbiAgICByZXZpZXdDb3VudD86IG51bWJlcjtcclxuICAgIG1hcHNVcmw6IHN0cmluZztcclxuICAgIGFpU3VtbWFyeT86IHN0cmluZztcclxuICAgIGlzT3Blbj86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmlsdGVyT3B0aW9ucyB7XHJcbiAgICBoYXNXZWJzaXRlPzogYm9vbGVhbjtcclxuICAgIGhhc1Bob25lPzogYm9vbGVhbjtcclxuICAgIG1pblJhdGluZz86IG51bWJlcjtcclxuICAgIG1pblJldmlld3M/OiBudW1iZXI7XHJcbiAgICBleGNsdWRlQ2xvc2VkPzogYm9vbGVhbjtcclxuICAgIGV4Y2x1ZGVDaGFpbnM/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBFeHBvcnRGb3JtYXQgPSAnY3N2JyB8ICd4bHN4JyB8ICd3aGF0c2FwcCc7XHJcblxyXG5leHBvcnQgdHlwZSBTdWJzY3JpcHRpb25UaWVyID0gJ2ZyZWUnIHwgJ3N0YXJ0ZXInIHwgJ3BybycgfCAnYWdlbmN5JztcclxuXHJcbmV4cG9ydCBjb25zdCBQTEFOX0xJTUlUUzogUmVjb3JkPFN1YnNjcmlwdGlvblRpZXIsIG51bWJlcj4gPSB7XHJcbiAgICBmcmVlOiA1MCxcclxuICAgIHN0YXJ0ZXI6IDEwMDAsXHJcbiAgICBwcm86IDEwMDAwLFxyXG4gICAgYWdlbmN5OiA1MDAwMCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQTEFOX1BSSUNFUzogUmVjb3JkPEV4Y2x1ZGU8U3Vic2NyaXB0aW9uVGllciwgJ2ZyZWUnPiwgbnVtYmVyPiA9IHtcclxuICAgIHN0YXJ0ZXI6IDUsXHJcbiAgICBwcm86IDE1LFxyXG4gICAgYWdlbmN5OiAzOSxcclxufTtcclxuIl0sIm5hbWVzIjpbIlBMQU5fTElNSVRTIiwiZnJlZSIsInN0YXJ0ZXIiLCJwcm8iLCJhZ2VuY3kiLCJQTEFOX1BSSUNFUyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/types/lead.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/bcryptjs","vendor-chunks/preact","vendor-chunks/oidc-token-hash","vendor-chunks/object-hash","vendor-chunks/lru-cache","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuser%2Fusage%2Froute&page=%2Fapi%2Fuser%2Fusage%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fusage%2Froute.ts&appDir=C%3A%5CUsers%5CSamruddhi%5COneDrive%5CDesktop%5CLeadMapr%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CSamruddhi%5COneDrive%5CDesktop%5CLeadMapr&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();