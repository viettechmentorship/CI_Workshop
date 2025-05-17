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
exports.id = "app/page";
exports.ids = ["app/page"];
exports.modules = {

/***/ "(rsc)/./component/getHello.ts":
/*!*******************************!*\
  !*** ./component/getHello.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getHello)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(rsc)/./node_modules/axios/lib/axios.js\");\n\nasync function getHello() {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('http://back-end:4000/hello');\n        return response.data;\n    } catch (error) {\n        console.error('Error fetching hello:', error);\n        throw error;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9jb21wb25lbnQvZ2V0SGVsbG8udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEI7QUFFWCxlQUFlQztJQUMxQixJQUFJO1FBQ0EsTUFBTUMsV0FBVyxNQUFNRiw2Q0FBS0EsQ0FBQ0csR0FBRyxDQUFDO1FBQ2pDLE9BQU9ELFNBQVNFLElBQUk7SUFDeEIsRUFBRSxPQUFPQyxPQUFPO1FBQ1pDLFFBQVFELEtBQUssQ0FBQyx5QkFBeUJBO1FBQ3ZDLE1BQU1BO0lBQ1Y7QUFDSiIsInNvdXJjZXMiOlsiL2FwcC9jb21wb25lbnQvZ2V0SGVsbG8udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0SGVsbG8oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9iYWNrLWVuZDo0MDAwL2hlbGxvJyk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGhlbGxvOicsIGVycm9yKTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiZ2V0SGVsbG8iLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./component/getHello.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fpage&page=%2Fpage&appPaths=%2Fpage&pagePath=private-next-app-dir%2Fpage.tsx&appDir=%2Fapp%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fpage&page=%2Fpage&appPaths=%2Fpage&pagePath=private-next-app-dir%2Fpage.tsx&appDir=%2Fapp%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),\n/* harmony export */   __next_app__: () => (/* binding */ __next_app__),\n/* harmony export */   pages: () => (/* binding */ pages),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   tree: () => (/* binding */ tree)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-page/module.compiled */ \"(ssr)/./node_modules/next/dist/server/route-modules/app-page/module.compiled.js?cc4a\");\n/* harmony import */ var next_dist_server_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/client/components/error-boundary */ \"(rsc)/./node_modules/next/dist/client/components/error-boundary.js\");\n/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/server/app-render/entry-base */ \"(rsc)/./node_modules/next/dist/server/app-render/entry-base.js\");\n/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if([\"default\",\"tree\",\"pages\",\"GlobalError\",\"__next_app__\",\"routeModule\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\nconst module0 = () => Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./src/app/layout.tsx */ \"(rsc)/./src/app/layout.tsx\"));\nconst module1 = () => Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! next/dist/client/components/not-found-error */ \"(rsc)/./node_modules/next/dist/client/components/not-found-error.js\", 23));\nconst module2 = () => Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! next/dist/client/components/forbidden-error */ \"(rsc)/./node_modules/next/dist/client/components/forbidden-error.js\", 23));\nconst module3 = () => Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! next/dist/client/components/unauthorized-error */ \"(rsc)/./node_modules/next/dist/client/components/unauthorized-error.js\", 23));\nconst page4 = () => Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./src/app/page.tsx */ \"(rsc)/./src/app/page.tsx\"));\n\n\n// We inject the tree and pages here so that we can use them in the route\n// module.\nconst tree = {\n        children: [\n        '',\n        {\n        children: ['__PAGE__', {}, {\n          page: [page4, \"/app/src/app/page.tsx\"],\n          metadata: {\n    icon: [(async (props) => (await Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! next-metadata-image-loader?type=favicon&segment=&basePath=&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./src/app/favicon.ico?__next_metadata__ */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/next-metadata-image-loader.js?type=favicon&segment=&basePath=&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./src/app/favicon.ico?__next_metadata__\"))).default(props))],\n    apple: [],\n    openGraph: [],\n    twitter: [],\n    manifest: undefined\n  }\n        }]\n      },\n        {\n        'layout': [module0, \"/app/src/app/layout.tsx\"],\n'not-found': [module1, \"next/dist/client/components/not-found-error\"],\n'forbidden': [module2, \"next/dist/client/components/forbidden-error\"],\n'unauthorized': [module3, \"next/dist/client/components/unauthorized-error\"],\n        metadata: {\n    icon: [(async (props) => (await Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! next-metadata-image-loader?type=favicon&segment=&basePath=&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./src/app/favicon.ico?__next_metadata__ */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/next-metadata-image-loader.js?type=favicon&segment=&basePath=&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./src/app/favicon.ico?__next_metadata__\"))).default(props))],\n    apple: [],\n    openGraph: [],\n    twitter: [],\n    manifest: undefined\n  }\n      }\n      ]\n      }.children;\nconst pages = [\"/app/src/app/page.tsx\"];\n\n\nconst __next_app_require__ = __webpack_require__\nconst __next_app_load_chunk__ = () => Promise.resolve()\nconst __next_app__ = {\n    require: __next_app_require__,\n    loadChunk: __next_app_load_chunk__\n};\n\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,\n        page: \"/page\",\n        pathname: \"/\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: '',\n        appPaths: []\n    },\n    userland: {\n        loaderTree: tree\n    }\n});\n\n//# sourceMappingURL=app-page.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZwYWdlJnBhZ2U9JTJGcGFnZSZhcHBQYXRocz0lMkZwYWdlJnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGcGFnZS50c3gmYXBwRGlyPSUyRmFwcCUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGYXBwJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQkFBc0Isb0pBQTREO0FBQ2xGLHNCQUFzQiwwTkFBZ0Y7QUFDdEcsc0JBQXNCLDBOQUFnRjtBQUN0RyxzQkFBc0IsZ09BQW1GO0FBQ3pHLG9CQUFvQixnSkFBMEQ7QUFHNUU7QUFHQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0Esb0NBQW9DLHNmQUFvTjtBQUN4UDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msc2ZBQW9OO0FBQ3hQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ3VCO0FBR3JCO0FBQ0YsNkJBQTZCLG1CQUFtQjtBQUNoRDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBR0U7QUFDRjtBQUNPLHdCQUF3Qix1R0FBa0I7QUFDakQ7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9kdWxlMCA9ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovIFwiL2FwcC9zcmMvYXBwL2xheW91dC50c3hcIik7XG5jb25zdCBtb2R1bGUxID0gKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gXCJuZXh0L2Rpc3QvY2xpZW50L2NvbXBvbmVudHMvbm90LWZvdW5kLWVycm9yXCIpO1xuY29uc3QgbW9kdWxlMiA9ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovIFwibmV4dC9kaXN0L2NsaWVudC9jb21wb25lbnRzL2ZvcmJpZGRlbi1lcnJvclwiKTtcbmNvbnN0IG1vZHVsZTMgPSAoKSA9PiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyBcIm5leHQvZGlzdC9jbGllbnQvY29tcG9uZW50cy91bmF1dGhvcml6ZWQtZXJyb3JcIik7XG5jb25zdCBwYWdlNCA9ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovIFwiL2FwcC9zcmMvYXBwL3BhZ2UudHN4XCIpO1xuaW1wb3J0IHsgQXBwUGFnZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcGFnZS9tb2R1bGUuY29tcGlsZWRcIiB3aXRoIHtcbiAgICAndHVyYm9wYWNrLXRyYW5zaXRpb24nOiAnbmV4dC1zc3InXG59O1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiIHdpdGgge1xuICAgICd0dXJib3BhY2stdHJhbnNpdGlvbic6ICduZXh0LXNlcnZlci11dGlsaXR5J1xufTtcbi8vIFdlIGluamVjdCB0aGUgdHJlZSBhbmQgcGFnZXMgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IHRyZWUgPSB7XG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICcnLFxuICAgICAgICB7XG4gICAgICAgIGNoaWxkcmVuOiBbJ19fUEFHRV9fJywge30sIHtcbiAgICAgICAgICBwYWdlOiBbcGFnZTQsIFwiL2FwcC9zcmMvYXBwL3BhZ2UudHN4XCJdLFxuICAgICAgICAgIG1ldGFkYXRhOiB7XG4gICAgaWNvbjogWyhhc3luYyAocHJvcHMpID0+IChhd2FpdCBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyBcIm5leHQtbWV0YWRhdGEtaW1hZ2UtbG9hZGVyP3R5cGU9ZmF2aWNvbiZzZWdtZW50PSZiYXNlUGF0aD0mcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyEvYXBwL3NyYy9hcHAvZmF2aWNvbi5pY28/X19uZXh0X21ldGFkYXRhX19cIikpLmRlZmF1bHQocHJvcHMpKV0sXG4gICAgYXBwbGU6IFtdLFxuICAgIG9wZW5HcmFwaDogW10sXG4gICAgdHdpdHRlcjogW10sXG4gICAgbWFuaWZlc3Q6IHVuZGVmaW5lZFxuICB9XG4gICAgICAgIH1dXG4gICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICdsYXlvdXQnOiBbbW9kdWxlMCwgXCIvYXBwL3NyYy9hcHAvbGF5b3V0LnRzeFwiXSxcbidub3QtZm91bmQnOiBbbW9kdWxlMSwgXCJuZXh0L2Rpc3QvY2xpZW50L2NvbXBvbmVudHMvbm90LWZvdW5kLWVycm9yXCJdLFxuJ2ZvcmJpZGRlbic6IFttb2R1bGUyLCBcIm5leHQvZGlzdC9jbGllbnQvY29tcG9uZW50cy9mb3JiaWRkZW4tZXJyb3JcIl0sXG4ndW5hdXRob3JpemVkJzogW21vZHVsZTMsIFwibmV4dC9kaXN0L2NsaWVudC9jb21wb25lbnRzL3VuYXV0aG9yaXplZC1lcnJvclwiXSxcbiAgICAgICAgbWV0YWRhdGE6IHtcbiAgICBpY29uOiBbKGFzeW5jIChwcm9wcykgPT4gKGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovIFwibmV4dC1tZXRhZGF0YS1pbWFnZS1sb2FkZXI/dHlwZT1mYXZpY29uJnNlZ21lbnQ9JmJhc2VQYXRoPSZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzIS9hcHAvc3JjL2FwcC9mYXZpY29uLmljbz9fX25leHRfbWV0YWRhdGFfX1wiKSkuZGVmYXVsdChwcm9wcykpXSxcbiAgICBhcHBsZTogW10sXG4gICAgb3BlbkdyYXBoOiBbXSxcbiAgICB0d2l0dGVyOiBbXSxcbiAgICBtYW5pZmVzdDogdW5kZWZpbmVkXG4gIH1cbiAgICAgIH1cbiAgICAgIF1cbiAgICAgIH0uY2hpbGRyZW47XG5jb25zdCBwYWdlcyA9IFtcIi9hcHAvc3JjL2FwcC9wYWdlLnRzeFwiXTtcbmV4cG9ydCB7IHRyZWUsIHBhZ2VzIH07XG5leHBvcnQgeyBkZWZhdWx0IGFzIEdsb2JhbEVycm9yIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvY29tcG9uZW50cy9lcnJvci1ib3VuZGFyeVwiIHdpdGgge1xuICAgICd0dXJib3BhY2stdHJhbnNpdGlvbic6ICduZXh0LXNlcnZlci11dGlsaXR5J1xufTtcbmNvbnN0IF9fbmV4dF9hcHBfcmVxdWlyZV9fID0gX193ZWJwYWNrX3JlcXVpcmVfX1xuY29uc3QgX19uZXh0X2FwcF9sb2FkX2NodW5rX18gPSAoKSA9PiBQcm9taXNlLnJlc29sdmUoKVxuZXhwb3J0IGNvbnN0IF9fbmV4dF9hcHBfXyA9IHtcbiAgICByZXF1aXJlOiBfX25leHRfYXBwX3JlcXVpcmVfXyxcbiAgICBsb2FkQ2h1bms6IF9fbmV4dF9hcHBfbG9hZF9jaHVua19fXG59O1xuZXhwb3J0ICogZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvYXBwLXJlbmRlci9lbnRyeS1iYXNlXCIgd2l0aCB7XG4gICAgJ3R1cmJvcGFjay10cmFuc2l0aW9uJzogJ25leHQtc2VydmVyLXV0aWxpdHknXG59O1xuLy8gQ3JlYXRlIGFuZCBleHBvcnQgdGhlIHJvdXRlIG1vZHVsZSB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG5leHBvcnQgY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUGFnZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUEFHRSxcbiAgICAgICAgcGFnZTogXCIvcGFnZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogJycsXG4gICAgICAgIGZpbGVuYW1lOiAnJyxcbiAgICAgICAgYXBwUGF0aHM6IFtdXG4gICAgfSxcbiAgICB1c2VybGFuZDoge1xuICAgICAgICBsb2FkZXJUcmVlOiB0cmVlXG4gICAgfVxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1wYWdlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fpage&page=%2Fpage&appPaths=%2Fpage&pagePath=private-next-app-dir%2Fpage.tsx&appDir=%2Fapp%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fclient-page.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fclient-segment.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Ferror-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fhttp-access-fallback%2Ferror-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Flayout-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fmetadata%2Fasync-metadata.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fmetadata%2Fmetadata-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Frender-from-template-context.js%22%2C%22ids%22%3A%5B%5D%7D&server=true!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fclient-page.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fclient-segment.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Ferror-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fhttp-access-fallback%2Ferror-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Flayout-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fmetadata%2Fasync-metadata.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fmetadata%2Fmetadata-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Frender-from-template-context.js%22%2C%22ids%22%3A%5B%5D%7D&server=true! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/client-page.js */ \"(rsc)/./node_modules/next/dist/client/components/client-page.js\", 23));\n;\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/client-segment.js */ \"(rsc)/./node_modules/next/dist/client/components/client-segment.js\", 23));\n;\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/error-boundary.js */ \"(rsc)/./node_modules/next/dist/client/components/error-boundary.js\", 23));\n;\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/http-access-fallback/error-boundary.js */ \"(rsc)/./node_modules/next/dist/client/components/http-access-fallback/error-boundary.js\", 23));\n;\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/layout-router.js */ \"(rsc)/./node_modules/next/dist/client/components/layout-router.js\", 23));\n;\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/metadata/async-metadata.js */ \"(rsc)/./node_modules/next/dist/client/components/metadata/async-metadata.js\", 23));\n;\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/metadata/metadata-boundary.js */ \"(rsc)/./node_modules/next/dist/client/components/metadata/metadata-boundary.js\", 23));\n;\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/render-from-template-context.js */ \"(rsc)/./node_modules/next/dist/client/components/render-from-template-context.js\", 23));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWZsaWdodC1jbGllbnQtZW50cnktbG9hZGVyLmpzP21vZHVsZXM9JTdCJTIycmVxdWVzdCUyMiUzQSUyMiUyRmFwcCUyRm5vZGVfbW9kdWxlcyUyRm5leHQlMkZkaXN0JTJGY2xpZW50JTJGY29tcG9uZW50cyUyRmNsaWVudC1wYWdlLmpzJTIyJTJDJTIyaWRzJTIyJTNBJTVCJTVEJTdEJm1vZHVsZXM9JTdCJTIycmVxdWVzdCUyMiUzQSUyMiUyRmFwcCUyRm5vZGVfbW9kdWxlcyUyRm5leHQlMkZkaXN0JTJGY2xpZW50JTJGY29tcG9uZW50cyUyRmNsaWVudC1zZWdtZW50LmpzJTIyJTJDJTIyaWRzJTIyJTNBJTVCJTVEJTdEJm1vZHVsZXM9JTdCJTIycmVxdWVzdCUyMiUzQSUyMiUyRmFwcCUyRm5vZGVfbW9kdWxlcyUyRm5leHQlMkZkaXN0JTJGY2xpZW50JTJGY29tcG9uZW50cyUyRmVycm9yLWJvdW5kYXJ5LmpzJTIyJTJDJTIyaWRzJTIyJTNBJTVCJTVEJTdEJm1vZHVsZXM9JTdCJTIycmVxdWVzdCUyMiUzQSUyMiUyRmFwcCUyRm5vZGVfbW9kdWxlcyUyRm5leHQlMkZkaXN0JTJGY2xpZW50JTJGY29tcG9uZW50cyUyRmh0dHAtYWNjZXNzLWZhbGxiYWNrJTJGZXJyb3ItYm91bmRhcnkuanMlMjIlMkMlMjJpZHMlMjIlM0ElNUIlNUQlN0QmbW9kdWxlcz0lN0IlMjJyZXF1ZXN0JTIyJTNBJTIyJTJGYXBwJTJGbm9kZV9tb2R1bGVzJTJGbmV4dCUyRmRpc3QlMkZjbGllbnQlMkZjb21wb25lbnRzJTJGbGF5b3V0LXJvdXRlci5qcyUyMiUyQyUyMmlkcyUyMiUzQSU1QiU1RCU3RCZtb2R1bGVzPSU3QiUyMnJlcXVlc3QlMjIlM0ElMjIlMkZhcHAlMkZub2RlX21vZHVsZXMlMkZuZXh0JTJGZGlzdCUyRmNsaWVudCUyRmNvbXBvbmVudHMlMkZtZXRhZGF0YSUyRmFzeW5jLW1ldGFkYXRhLmpzJTIyJTJDJTIyaWRzJTIyJTNBJTVCJTVEJTdEJm1vZHVsZXM9JTdCJTIycmVxdWVzdCUyMiUzQSUyMiUyRmFwcCUyRm5vZGVfbW9kdWxlcyUyRm5leHQlMkZkaXN0JTJGY2xpZW50JTJGY29tcG9uZW50cyUyRm1ldGFkYXRhJTJGbWV0YWRhdGEtYm91bmRhcnkuanMlMjIlMkMlMjJpZHMlMjIlM0ElNUIlNUQlN0QmbW9kdWxlcz0lN0IlMjJyZXF1ZXN0JTIyJTNBJTIyJTJGYXBwJTJGbm9kZV9tb2R1bGVzJTJGbmV4dCUyRmRpc3QlMkZjbGllbnQlMkZjb21wb25lbnRzJTJGcmVuZGVyLWZyb20tdGVtcGxhdGUtY29udGV4dC5qcyUyMiUyQyUyMmlkcyUyMiUzQSU1QiU1RCU3RCZzZXJ2ZXI9dHJ1ZSEiLCJtYXBwaW5ncyI6IkFBQUEsb09BQWlHO0FBQ2pHO0FBQ0EsME9BQW9HO0FBQ3BHO0FBQ0EsME9BQW9HO0FBQ3BHO0FBQ0Esb1JBQXlIO0FBQ3pIO0FBQ0Esd09BQW1HO0FBQ25HO0FBQ0EsNFBBQTZHO0FBQzdHO0FBQ0Esa1FBQWdIO0FBQ2hIO0FBQ0Esc1FBQWtIIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gXCIvYXBwL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2NvbXBvbmVudHMvY2xpZW50LXBhZ2UuanNcIik7XG47XG5pbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyBcIi9hcHAvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvY29tcG9uZW50cy9jbGllbnQtc2VnbWVudC5qc1wiKTtcbjtcbmltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovIFwiL2FwcC9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9jb21wb25lbnRzL2Vycm9yLWJvdW5kYXJ5LmpzXCIpO1xuO1xuaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gXCIvYXBwL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2NvbXBvbmVudHMvaHR0cC1hY2Nlc3MtZmFsbGJhY2svZXJyb3ItYm91bmRhcnkuanNcIik7XG47XG5pbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyBcIi9hcHAvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvY29tcG9uZW50cy9sYXlvdXQtcm91dGVyLmpzXCIpO1xuO1xuaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gXCIvYXBwL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2NvbXBvbmVudHMvbWV0YWRhdGEvYXN5bmMtbWV0YWRhdGEuanNcIik7XG47XG5pbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyBcIi9hcHAvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvY29tcG9uZW50cy9tZXRhZGF0YS9tZXRhZGF0YS1ib3VuZGFyeS5qc1wiKTtcbjtcbmltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovIFwiL2FwcC9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9jb21wb25lbnRzL3JlbmRlci1mcm9tLXRlbXBsYXRlLWNvbnRleHQuanNcIik7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fclient-page.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fclient-segment.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Ferror-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fhttp-access-fallback%2Ferror-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Flayout-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fmetadata%2Fasync-metadata.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fmetadata%2Fmetadata-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Frender-from-template-context.js%22%2C%22ids%22%3A%5B%5D%7D&server=true!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-metadata-image-loader.js?type=favicon&segment=&basePath=&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./src/app/favicon.ico?__next_metadata__":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-metadata-image-loader.js?type=favicon&segment=&basePath=&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./src/app/favicon.ico?__next_metadata__ ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/lib/metadata/get-metadata-route */ \"(rsc)/./node_modules/next/dist/lib/metadata/get-metadata-route.js\");\n/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);\n  \n\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (props) => {\n    const imageData = {\"type\":\"image/x-icon\",\"sizes\":\"16x16\"}\n    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(\".\", await props.params, \"favicon.ico\")\n\n    return [{\n      ...imageData,\n      url: imageUrl + \"\",\n    }]\n  });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LW1ldGFkYXRhLWltYWdlLWxvYWRlci5qcz90eXBlPWZhdmljb24mc2VnbWVudD0mYmFzZVBhdGg9JnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMhLi9zcmMvYXBwL2Zhdmljb24uaWNvP19fbmV4dF9tZXRhZGF0YV9fIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEVBQWlGOztBQUVqRixFQUFFLGlFQUFlO0FBQ2pCLHVCQUF1QjtBQUN2QixxQkFBcUIsOEZBQW1COztBQUV4QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIi9hcHAvc3JjL2FwcC9mYXZpY29uLmljbz9fX25leHRfbWV0YWRhdGFfXyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIGltcG9ydCB7IGZpbGxNZXRhZGF0YVNlZ21lbnQgfSBmcm9tICduZXh0L2Rpc3QvbGliL21ldGFkYXRhL2dldC1tZXRhZGF0YS1yb3V0ZSdcblxuICBleHBvcnQgZGVmYXVsdCBhc3luYyAocHJvcHMpID0+IHtcbiAgICBjb25zdCBpbWFnZURhdGEgPSB7XCJ0eXBlXCI6XCJpbWFnZS94LWljb25cIixcInNpemVzXCI6XCIxNngxNlwifVxuICAgIGNvbnN0IGltYWdlVXJsID0gZmlsbE1ldGFkYXRhU2VnbWVudChcIi5cIiwgYXdhaXQgcHJvcHMucGFyYW1zLCBcImZhdmljb24uaWNvXCIpXG5cbiAgICByZXR1cm4gW3tcbiAgICAgIC4uLmltYWdlRGF0YSxcbiAgICAgIHVybDogaW1hZ2VVcmwgKyBcIlwiLFxuICAgIH1dXG4gIH0iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-metadata-image-loader.js?type=favicon&segment=&basePath=&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./src/app/favicon.ico?__next_metadata__\n");

/***/ }),

/***/ "(rsc)/./src/app/layout.tsx":
/*!****************************!*\
  !*** ./src/app/layout.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RootLayout),\n/* harmony export */   metadata: () => (/* binding */ metadata)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst metadata = {\n    title: 'Next.js',\n    description: 'Generated by Next.js'\n};\nfunction RootLayout({ children }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"en\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n            children: children\n        }, void 0, false, {\n            fileName: \"/app/src/app/layout.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/app/src/app/layout.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2xheW91dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBTyxNQUFNQSxXQUFXO0lBQ3RCQyxPQUFPO0lBQ1BDLGFBQWE7QUFDZixFQUFDO0FBRWMsU0FBU0MsV0FBVyxFQUNqQ0MsUUFBUSxFQUdUO0lBQ0MscUJBQ0UsOERBQUNDO1FBQUtDLE1BQUs7a0JBQ1QsNEVBQUNDO3NCQUFNSDs7Ozs7Ozs7Ozs7QUFHYiIsInNvdXJjZXMiOlsiL2FwcC9zcmMvYXBwL2xheW91dC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG1ldGFkYXRhID0ge1xuICB0aXRsZTogJ05leHQuanMnLFxuICBkZXNjcmlwdGlvbjogJ0dlbmVyYXRlZCBieSBOZXh0LmpzJyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm9vdExheW91dCh7XG4gIGNoaWxkcmVuLFxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8Ym9keT57Y2hpbGRyZW59PC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIm1ldGFkYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIlJvb3RMYXlvdXQiLCJjaGlsZHJlbiIsImh0bWwiLCJsYW5nIiwiYm9keSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/layout.tsx\n");

/***/ }),

/***/ "(rsc)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component_getHello__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/getHello */ \"(rsc)/./component/getHello.ts\");\n\n\nfunction Home() {\n    const backendResponse = (0,_component_getHello__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const yourName = \"John Doe\"; // Replace with your name\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Welcome to the Frontend \",\n                    yourName,\n                    \"!\"\n                ]\n            }, void 0, true, {\n                fileName: \"/app/src/app/page.tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: backendResponse\n            }, void 0, false, {\n                fileName: \"/app/src/app/page.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"This is a simple frontend application.\"\n            }, void 0, false, {\n                fileName: \"/app/src/app/page.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"It fetches data from the backend and displays it here.\"\n            }, void 0, false, {\n                fileName: \"/app/src/app/page.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Enjoy your stay!\"\n            }, void 0, false, {\n                fileName: \"/app/src/app/page.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/src/app/page.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdEO0FBQ2pDLFNBQVNDO0lBQ3RCLE1BQU1DLGtCQUFrQkYsK0RBQVFBO0lBQ2hDLE1BQU1HLFdBQVcsWUFBWSx5QkFBeUI7SUFDdEQscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7O29CQUFHO29CQUF5QkY7b0JBQVM7Ozs7Ozs7MEJBQ3RDLDhEQUFDRzswQkFBR0o7Ozs7OzswQkFDSiw4REFBQ0k7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ0E7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ0E7MEJBQUU7Ozs7Ozs7Ozs7OztBQUdUIiwic291cmNlcyI6WyIvYXBwL3NyYy9hcHAvcGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldEhlbGxvIGZyb20gXCIuLi8uLi9jb21wb25lbnQvZ2V0SGVsbG9cIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGJhY2tlbmRSZXNwb25zZSA9IGdldEhlbGxvKCk7XG4gIGNvbnN0IHlvdXJOYW1lID0gXCJKb2huIERvZVwiOyAvLyBSZXBsYWNlIHdpdGggeW91ciBuYW1lXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5XZWxjb21lIHRvIHRoZSBGcm9udGVuZCB7eW91ck5hbWV9ITwvaDE+XG4gICAgICA8cD57YmFja2VuZFJlc3BvbnNlfTwvcD5cbiAgICAgIDxwPlRoaXMgaXMgYSBzaW1wbGUgZnJvbnRlbmQgYXBwbGljYXRpb24uPC9wPlxuICAgICAgPHA+SXQgZmV0Y2hlcyBkYXRhIGZyb20gdGhlIGJhY2tlbmQgYW5kIGRpc3BsYXlzIGl0IGhlcmUuPC9wPlxuICAgICAgPHA+RW5qb3kgeW91ciBzdGF5ITwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJnZXRIZWxsbyIsIkhvbWUiLCJiYWNrZW5kUmVzcG9uc2UiLCJ5b3VyTmFtZSIsImRpdiIsImgxIiwicCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/page.tsx\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fclient-page.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fclient-segment.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Ferror-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fhttp-access-fallback%2Ferror-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Flayout-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fmetadata%2Fasync-metadata.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fmetadata%2Fmetadata-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Frender-from-template-context.js%22%2C%22ids%22%3A%5B%5D%7D&server=true!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fclient-page.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fclient-segment.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Ferror-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fhttp-access-fallback%2Ferror-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Flayout-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fmetadata%2Fasync-metadata.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fmetadata%2Fmetadata-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Frender-from-template-context.js%22%2C%22ids%22%3A%5B%5D%7D&server=true! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/client-page.js */ \"(ssr)/./node_modules/next/dist/client/components/client-page.js\", 23));\n;\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/client-segment.js */ \"(ssr)/./node_modules/next/dist/client/components/client-segment.js\", 23));\n;\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/error-boundary.js */ \"(ssr)/./node_modules/next/dist/client/components/error-boundary.js\", 23));\n;\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/http-access-fallback/error-boundary.js */ \"(ssr)/./node_modules/next/dist/client/components/http-access-fallback/error-boundary.js\", 23));\n;\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/layout-router.js */ \"(ssr)/./node_modules/next/dist/client/components/layout-router.js\", 23));\n;\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/metadata/async-metadata.js */ \"(ssr)/./node_modules/next/dist/client/components/metadata/async-metadata.js\", 23));\n;\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/metadata/metadata-boundary.js */ \"(ssr)/./node_modules/next/dist/client/components/metadata/metadata-boundary.js\", 23));\n;\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/render-from-template-context.js */ \"(ssr)/./node_modules/next/dist/client/components/render-from-template-context.js\", 23));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWZsaWdodC1jbGllbnQtZW50cnktbG9hZGVyLmpzP21vZHVsZXM9JTdCJTIycmVxdWVzdCUyMiUzQSUyMiUyRmFwcCUyRm5vZGVfbW9kdWxlcyUyRm5leHQlMkZkaXN0JTJGY2xpZW50JTJGY29tcG9uZW50cyUyRmNsaWVudC1wYWdlLmpzJTIyJTJDJTIyaWRzJTIyJTNBJTVCJTVEJTdEJm1vZHVsZXM9JTdCJTIycmVxdWVzdCUyMiUzQSUyMiUyRmFwcCUyRm5vZGVfbW9kdWxlcyUyRm5leHQlMkZkaXN0JTJGY2xpZW50JTJGY29tcG9uZW50cyUyRmNsaWVudC1zZWdtZW50LmpzJTIyJTJDJTIyaWRzJTIyJTNBJTVCJTVEJTdEJm1vZHVsZXM9JTdCJTIycmVxdWVzdCUyMiUzQSUyMiUyRmFwcCUyRm5vZGVfbW9kdWxlcyUyRm5leHQlMkZkaXN0JTJGY2xpZW50JTJGY29tcG9uZW50cyUyRmVycm9yLWJvdW5kYXJ5LmpzJTIyJTJDJTIyaWRzJTIyJTNBJTVCJTVEJTdEJm1vZHVsZXM9JTdCJTIycmVxdWVzdCUyMiUzQSUyMiUyRmFwcCUyRm5vZGVfbW9kdWxlcyUyRm5leHQlMkZkaXN0JTJGY2xpZW50JTJGY29tcG9uZW50cyUyRmh0dHAtYWNjZXNzLWZhbGxiYWNrJTJGZXJyb3ItYm91bmRhcnkuanMlMjIlMkMlMjJpZHMlMjIlM0ElNUIlNUQlN0QmbW9kdWxlcz0lN0IlMjJyZXF1ZXN0JTIyJTNBJTIyJTJGYXBwJTJGbm9kZV9tb2R1bGVzJTJGbmV4dCUyRmRpc3QlMkZjbGllbnQlMkZjb21wb25lbnRzJTJGbGF5b3V0LXJvdXRlci5qcyUyMiUyQyUyMmlkcyUyMiUzQSU1QiU1RCU3RCZtb2R1bGVzPSU3QiUyMnJlcXVlc3QlMjIlM0ElMjIlMkZhcHAlMkZub2RlX21vZHVsZXMlMkZuZXh0JTJGZGlzdCUyRmNsaWVudCUyRmNvbXBvbmVudHMlMkZtZXRhZGF0YSUyRmFzeW5jLW1ldGFkYXRhLmpzJTIyJTJDJTIyaWRzJTIyJTNBJTVCJTVEJTdEJm1vZHVsZXM9JTdCJTIycmVxdWVzdCUyMiUzQSUyMiUyRmFwcCUyRm5vZGVfbW9kdWxlcyUyRm5leHQlMkZkaXN0JTJGY2xpZW50JTJGY29tcG9uZW50cyUyRm1ldGFkYXRhJTJGbWV0YWRhdGEtYm91bmRhcnkuanMlMjIlMkMlMjJpZHMlMjIlM0ElNUIlNUQlN0QmbW9kdWxlcz0lN0IlMjJyZXF1ZXN0JTIyJTNBJTIyJTJGYXBwJTJGbm9kZV9tb2R1bGVzJTJGbmV4dCUyRmRpc3QlMkZjbGllbnQlMkZjb21wb25lbnRzJTJGcmVuZGVyLWZyb20tdGVtcGxhdGUtY29udGV4dC5qcyUyMiUyQyUyMmlkcyUyMiUzQSU1QiU1RCU3RCZzZXJ2ZXI9dHJ1ZSEiLCJtYXBwaW5ncyI6IkFBQUEsb09BQWlHO0FBQ2pHO0FBQ0EsME9BQW9HO0FBQ3BHO0FBQ0EsME9BQW9HO0FBQ3BHO0FBQ0Esb1JBQXlIO0FBQ3pIO0FBQ0Esd09BQW1HO0FBQ25HO0FBQ0EsNFBBQTZHO0FBQzdHO0FBQ0Esa1FBQWdIO0FBQ2hIO0FBQ0Esc1FBQWtIIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gXCIvYXBwL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2NvbXBvbmVudHMvY2xpZW50LXBhZ2UuanNcIik7XG47XG5pbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyBcIi9hcHAvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvY29tcG9uZW50cy9jbGllbnQtc2VnbWVudC5qc1wiKTtcbjtcbmltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovIFwiL2FwcC9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9jb21wb25lbnRzL2Vycm9yLWJvdW5kYXJ5LmpzXCIpO1xuO1xuaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gXCIvYXBwL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2NvbXBvbmVudHMvaHR0cC1hY2Nlc3MtZmFsbGJhY2svZXJyb3ItYm91bmRhcnkuanNcIik7XG47XG5pbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyBcIi9hcHAvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvY29tcG9uZW50cy9sYXlvdXQtcm91dGVyLmpzXCIpO1xuO1xuaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gXCIvYXBwL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2NvbXBvbmVudHMvbWV0YWRhdGEvYXN5bmMtbWV0YWRhdGEuanNcIik7XG47XG5pbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyBcIi9hcHAvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvY29tcG9uZW50cy9tZXRhZGF0YS9tZXRhZGF0YS1ib3VuZGFyeS5qc1wiKTtcbjtcbmltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovIFwiL2FwcC9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9jb21wb25lbnRzL3JlbmRlci1mcm9tLXRlbXBsYXRlLWNvbnRleHQuanNcIik7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fclient-page.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fclient-segment.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Ferror-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fhttp-access-fallback%2Ferror-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Flayout-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fmetadata%2Fasync-metadata.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fmetadata%2Fmetadata-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Frender-from-template-context.js%22%2C%22ids%22%3A%5B%5D%7D&server=true!\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/server/app-render/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/action-async-storage.external.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/axios","vendor-chunks/asynckit","vendor-chunks/math-intrinsics","vendor-chunks/es-errors","vendor-chunks/@swc","vendor-chunks/form-data","vendor-chunks/call-bind-apply-helpers","vendor-chunks/debug","vendor-chunks/get-proto","vendor-chunks/has-symbols","vendor-chunks/gopd","vendor-chunks/function-bind","vendor-chunks/follow-redirects","vendor-chunks/supports-color","vendor-chunks/proxy-from-env","vendor-chunks/ms","vendor-chunks/hasown","vendor-chunks/has-tostringtag","vendor-chunks/has-flag","vendor-chunks/get-intrinsic","vendor-chunks/es-set-tostringtag","vendor-chunks/es-object-atoms","vendor-chunks/es-define-property","vendor-chunks/dunder-proto","vendor-chunks/delayed-stream","vendor-chunks/combined-stream"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fpage&page=%2Fpage&appPaths=%2Fpage&pagePath=private-next-app-dir%2Fpage.tsx&appDir=%2Fapp%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();