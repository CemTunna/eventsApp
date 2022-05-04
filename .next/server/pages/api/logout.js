"use strict";
(() => {
var exports = {};
exports.id = 30;
exports.ids = [30];
exports.modules = {

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 3577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    if (req.method === "POST") {
        res.setHeader("Set-Cookie", cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize("token", "", {
            httpOnly: true,
            secure: "production" !== "development",
            expires: new Date(0),
            sameSite: "strict",
            path: "/"
        }));
        res.status(200).json({
            message: "Success"
        });
    } else {
        res.setHeader("Allow", [
            "POST"
        ]);
        res.status(405).json({
            message: `Method ${req.method} not allowed`
        });
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3577));
module.exports = __webpack_exports__;

})();