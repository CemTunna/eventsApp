"use strict";
(() => {
var exports = {};
exports.id = 541;
exports.ids = [541];
exports.modules = {

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 9464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T5": () => (/* binding */ API_URL)
/* harmony export */ });
/* unused harmony exports PER_PAGE, NEXT_URL */
const API_URL = "https://backendforevents.herokuapp.com" || 0;
const PER_PAGE = 6;
const NEXT_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";


/***/ }),

/***/ 2866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9464);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    if (req.method === "GET") {
        if (!req.headers.cookie) {
            res.status(403).json({
                message: "Not Authoriezd"
            });
            return;
        }
        const { token  } = cookie__WEBPACK_IMPORTED_MODULE_1___default().parse(req.headers.cookie);
        const backendRes = await fetch(`${Config_index__WEBPACK_IMPORTED_MODULE_0__/* .API_URL */ .T5}/users/me`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const user = await backendRes.json();
        if (backendRes.ok) {
            res.status(200).json({
                user
            });
        } else {
            res.status(403).json({
                message: "User forbidden"
            });
        }
    } else {
        res.setHeader("Allow", [
            "GET"
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
var __webpack_exports__ = (__webpack_exec__(2866));
module.exports = __webpack_exports__;

})();