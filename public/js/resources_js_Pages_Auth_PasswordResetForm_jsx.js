(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Auth_PasswordResetForm_jsx"],{

/***/ "./resources/js/Components/BrandLogo.jsx":
/*!***********************************************!*\
  !*** ./resources/js/Components/BrandLogo.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _png_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../png/logo.png */ "./resources/png/logo.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var BrandLogo = function BrandLogo() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.InertiaLink, {
    href: route('home'),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
      src: _png_logo_png__WEBPACK_IMPORTED_MODULE_2__.default,
      alt: "Logo",
      className: "w-132"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrandLogo);

/***/ }),

/***/ "./resources/js/Components/DefaultModal.jsx":
/*!**************************************************!*\
  !*** ./resources/js/Components/DefaultModal.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _PrimaryButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrimaryButton */ "./resources/js/Components/PrimaryButton.jsx");
/* harmony import */ var _SecondaryButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SecondaryButton */ "./resources/js/Components/SecondaryButton.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var DefaultModal = function DefaultModal(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    shown: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (props.show && !values.shown) {
      setValues(function (values) {
        return _objectSpread(_objectSpread({}, values), {}, _defineProperty({}, 'shown', true));
      });
      $('#' + props.id).modal('show');
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "modal fade",
    id: props.id,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "modal-dialog",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "modal-content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "modal-header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h5", {
            className: "modal-title",
            children: props.title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            type: "button",
            className: "close",
            "data-dismiss": "modal",
            "aria-label": "Close",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              "aria-hidden": "true",
              children: "\xD7"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "modal-body",
          children: props.msg
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "modal-footer",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_SecondaryButton__WEBPACK_IMPORTED_MODULE_2__.default, {
            value: "Close",
            dataDismiss: "modal"
          }), props.showconfirmationmsg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_PrimaryButton__WEBPACK_IMPORTED_MODULE_1__.default, {
            href: props.confirmationlnk ? props.confirmationlnk : "",
            value: props.confirmationmsg ? props.confirmationmsg : 'Ok'
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultModal);

/***/ }),

/***/ "./resources/js/Components/InputPassword.jsx":
/*!***************************************************!*\
  !*** ./resources/js/Components/InputPassword.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var InputPassword = function InputPassword(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
    type: "password",
    id: props.id,
    value: props.value,
    onChange: props.onChange,
    className: props.className ? props.className : "input-text",
    placeholder: props.placeholder,
    required: props.required,
    pattern: props.pattern
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputPassword);

/***/ }),

/***/ "./resources/js/Components/PrimaryButton.jsx":
/*!***************************************************!*\
  !*** ./resources/js/Components/PrimaryButton.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var PrimaryButton = function PrimaryButton(props) {
  if (props.href) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.InertiaLink, {
      className: props.addClass + " btn btn-primary rounded-0 shadow-md font-roboto-bold fz-16",
      href: props.href,
      children: props.value
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
    type: props.type,
    className: props.addClass + " btn btn-primary rounded-0 shadow-md font-roboto-bold fz-16",
    "data-dismiss": props.dataDismiss,
    children: props.value
  });
};

PrimaryButton.defaultProps = {
  type: 'button'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrimaryButton);

/***/ }),

/***/ "./resources/js/Components/SecondaryButton.jsx":
/*!*****************************************************!*\
  !*** ./resources/js/Components/SecondaryButton.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var SecondaryButton = function SecondaryButton(props) {
  if (props.href) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.InertiaLink, {
      className: props.addClass + " btn btn-secondary rounded-0 shadow-md font-roboto-bold fz-16",
      href: props.href,
      children: props.value
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
    type: props.type,
    className: props.addClass + " btn btn-secondary rounded-0 shadow-md font-roboto-bold fz-16",
    "data-dismiss": props.dataDismiss,
    children: props.value
  });
};

SecondaryButton.defaultProps = {
  type: 'button'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SecondaryButton);

/***/ }),

/***/ "./resources/js/Pages/Auth/PasswordResetForm.jsx":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/Auth/PasswordResetForm.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _Components_BrandLogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/BrandLogo */ "./resources/js/Components/BrandLogo.jsx");
/* harmony import */ var _Components_DefaultModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/DefaultModal */ "./resources/js/Components/DefaultModal.jsx");
/* harmony import */ var _Components_InputPassword__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/InputPassword */ "./resources/js/Components/InputPassword.jsx");
/* harmony import */ var _Components_PrimaryButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/PrimaryButton */ "./resources/js/Components/PrimaryButton.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









var PasswordResetForm = function PasswordResetForm(_ref) {
  var token = _ref.token,
      email = _ref.email;

  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.useForm)({
    password: "",
    password_confirmation: "",
    token: token,
    userid: email
  }),
      data = _useForm.data,
      setData = _useForm.setData,
      post = _useForm.post,
      processing = _useForm.processing,
      errors = _useForm.errors;

  function submit(e) {
    e.preventDefault();
    post(route('password.update'));
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var forms = document.getElementsByClassName('needs-validation'); // Loop over them and prevent submission

    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (e) {
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }

        form.classList.add('was-validated');
      }, false);
    });
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "d-flex flex-column align-items-center bg-md-gray w-screen h-md-screen justify-content-center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("header", {
      className: "text-center pb-7 d-none d-md-block",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Components_BrandLogo__WEBPACK_IMPORTED_MODULE_2__.default, {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "bg-white border-none border-md-1 border-gray w-full w-md-360 md-shadow-sm  pb-7",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("header", {
        className: "text-center mt-7 d-block d-md-none",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Components_BrandLogo__WEBPACK_IMPORTED_MODULE_2__.default, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "section-heading text-center",
        children: ["Reset Password For \"", email, "\""]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("form", {
        onSubmit: submit,
        className: "needs-validation",
        noValidate: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "text-center d-flex flex-column flex-md-row align-items-center justify-content-center flex-wrap",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Components_InputPassword__WEBPACK_IMPORTED_MODULE_4__.default, {
            id: "password",
            value: data.password,
            onChange: function onChange(e) {
              return setData('password', e.target.value);
            },
            className: (errors.fail || errors.password ? "is-invalid " : '') + "form-control input-text",
            placeholder: "Password",
            pattern: "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",
            required: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "invalid-feedback text-left ml-2 text-wrap w-290",
            children: (errors.fail ? errors.fail : errors.password ? errors.password : '') + (errors.fail ? "" : " and Password must contain at least one number, one uppercase, lowercase letter, and at least 8 or more characters")
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "text-center d-flex flex-column flex-md-row align-items-center justify-content-center flex-wrap",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Components_InputPassword__WEBPACK_IMPORTED_MODULE_4__.default, {
            id: "password_confirmation",
            value: data.password_confirmation,
            onChange: function onChange(e) {
              return setData('password_confirmation', e.target.value);
            },
            className: "form-control input-text",
            placeholder: "Confirm Password",
            pattern: "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",
            required: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "invalid-feedback text-left ml-2 text-wrap w-290",
            children: "Invalid Password Confirmation!"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "text-center d-flex align-items-center flex-column",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Components_PrimaryButton__WEBPACK_IMPORTED_MODULE_5__.default, {
            type: "submit",
            value: "Send Password Reset Request",
            addClass: "w-290 m-2"
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Components_DefaultModal__WEBPACK_IMPORTED_MODULE_3__.default, {
      title: "System Info",
      msg: errors.userid,
      id: "invalid_userid-error",
      show: errors.userid,
      showconfirmationmsg: false
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Components_DefaultModal__WEBPACK_IMPORTED_MODULE_3__.default, {
      title: "System Info",
      msg: errors.token,
      id: "invalid_token-error",
      show: errors.token,
      showconfirmationmsg: false
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Components_DefaultModal__WEBPACK_IMPORTED_MODULE_3__.default, {
      title: "Something went wrong!",
      msg: errors.fail,
      id: "fail-error",
      show: errors.fail,
      showconfirmationmsg: false
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordResetForm);

/***/ }),

/***/ "./resources/png/logo.png":
/*!********************************!*\
  !*** ./resources/png/logo.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/logo.png?4c3be64c5f5bc30d104d3839fddfa6b1");

/***/ })

}]);