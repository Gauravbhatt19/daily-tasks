(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Home_jsx"],{

/***/ "./resources/js/Layouts/AppLayout.jsx":
/*!********************************************!*\
  !*** ./resources/js/Layouts/AppLayout.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _components_BrandLogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BrandLogo */ "./resources/js/components/BrandLogo.jsx");
/* harmony import */ var _components_Logout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Logout */ "./resources/js/components/Logout.jsx");
/* harmony import */ var _components_UserAlt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UserAlt */ "./resources/js/components/UserAlt.jsx");
/* harmony import */ var _contexts_TasksContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/TasksContext */ "./resources/js/contexts/TasksContext.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









var AppLayout = function AppLayout(_ref) {
  var children = _ref.children;
  var tasksContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_TasksContext__WEBPACK_IMPORTED_MODULE_5__.default);
  var user = tasksContext.user;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("nav", {
      className: "navbar navbar-expand-md navbar-light bg-white shadow-md p-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_BrandLogo__WEBPACK_IMPORTED_MODULE_2__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "rounded-0 text-primary border border-primary px-1 d-block d-md-none",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
          id: "menu-hamburger",
          className: "navbar-toggler border-0",
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#primaryNavbarToggler",
          "aria-controls": "primaryNavbarToggler",
          "aria-expanded": "false",
          "aria-label": "Toggle Primary navigation",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {})]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "collapse navbar-collapse",
        id: "primaryNavbarToggler",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("ul", {
          className: "navbar-nav ml-auto mt-2 mt-lg-0",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
            className: "nav-item mx-md-4 border-bottom border-md-0 border-gray-light d-none",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.InertiaLink, {
              className: "nav-link font-weight-bolder text-primary fz-24",
              href: "#",
              children: ["Manage Profile ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "d-inline-block text-primary w-38 h-38",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_UserAlt__WEBPACK_IMPORTED_MODULE_4__.default, {})
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
            className: "nav-item mx-md-4 align-items-center d-flex fz-18",
            children: ["Hello,\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("b", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("i", {
                children: [user.name, " !"]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
            className: "nav-item mx-md-4",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Logout__WEBPACK_IMPORTED_MODULE_3__.default, {})
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "bg-gray-light h-md-screen pb-4",
      children: children
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppLayout);

/***/ }),

/***/ "./resources/js/Pages/Home.jsx":
/*!*************************************!*\
  !*** ./resources/js/Pages/Home.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layouts/AppLayout */ "./resources/js/Layouts/AppLayout.jsx");
/* harmony import */ var _components_AddTaskButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AddTaskButton */ "./resources/js/components/AddTaskButton.jsx");
/* harmony import */ var _components_TaskList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TaskList */ "./resources/js/components/TaskList.jsx");
/* harmony import */ var _components_PreviousDayTaskButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PreviousDayTaskButton */ "./resources/js/components/PreviousDayTaskButton.jsx");
/* harmony import */ var _components_NextDayTaskButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/NextDayTaskButton */ "./resources/js/components/NextDayTaskButton.jsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _contexts_TasksContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contexts/TasksContext */ "./resources/js/contexts/TasksContext.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












var Home = function Home(props) {
  var todaysDate = dateFormat();
  var tommorowsDate = dateFormat(moment__WEBPACK_IMPORTED_MODULE_7___default()().add(1, 'days'));
  var yesterdaysDate = dateFormat(moment__WEBPACK_IMPORTED_MODULE_7___default()().subtract(1, 'days'));
  var tasksDate = dateFormat(props.date);
  var isTasksToday = todaysDate === tasksDate;
  var isTasksTommorow = tommorowsDate === tasksDate;
  var isTasksPast = todaysDate > tasksDate;
  var isTasksYesterday = yesterdaysDate === tasksDate;

  function dateFormat() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var dateObj = date == null ? new Date() : new Date(date);
    return moment__WEBPACK_IMPORTED_MODULE_7___default()(dateObj).format('DD MMM YYYY');
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_contexts_TasksContext__WEBPACK_IMPORTED_MODULE_8__.TasksContextProvider, {
    value: {
      todaysDate: todaysDate,
      tommorowsDate: tommorowsDate,
      yesterdaysDate: yesterdaysDate,
      tasksDate: tasksDate,
      isTasksToday: isTasksToday,
      isTasksTommorow: isTasksTommorow,
      isTasksPast: isTasksPast,
      isTasksYesterday: isTasksYesterday,
      user: props.user
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "section-heading text-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_PreviousDayTaskButton__WEBPACK_IMPORTED_MODULE_5__.default, {
              value: tasksDate
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
            className: "d-inline-block w-220",
            children: (isTasksToday ? "Today's" : isTasksTommorow ? "Tommorow's" : isTasksYesterday ? "Yesterday's" : tasksDate) + " Tasks"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_NextDayTaskButton__WEBPACK_IMPORTED_MODULE_6__.default, {
              value: tasksDate
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "d-flex justify-content-center flex-wrap",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "todo-tasks mx-auto mx-sm-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: (isTasksToday || !isTasksPast ? "" : "mt-3 pb-2 ") + "section-heading text-left",
              children: ["To Dos ", (isTasksToday || !isTasksPast) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_AddTaskButton__WEBPACK_IMPORTED_MODULE_3__.default, {})]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "bg-white shadow-sm w-300",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_TaskList__WEBPACK_IMPORTED_MODULE_4__.default, {
                value: props.tasks.pending
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "completed-tasks mx-auto mx-sm-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "section-heading text-left mt-3 pb-2",
              children: "Completed"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "bg-white shadow-sm w-300",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_TaskList__WEBPACK_IMPORTED_MODULE_4__.default, {
                value: props.tasks.completed
              })
            })]
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./resources/js/components/AddTaskButton.jsx":
/*!***************************************************!*\
  !*** ./resources/js/components/AddTaskButton.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _svg_plus_square_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/plus-square.svg */ "./resources/svg/plus-square.svg");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _SecondaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SecondaryButton */ "./resources/js/components/SecondaryButton.jsx");
/* harmony import */ var _PrimaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PrimaryButton */ "./resources/js/components/PrimaryButton.jsx");
/* harmony import */ var _InputText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InputText */ "./resources/js/components/InputText.jsx");
/* harmony import */ var _InputTextArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InputTextArea */ "./resources/js/components/InputTextArea.jsx");
/* harmony import */ var _contexts_TasksContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contexts/TasksContext */ "./resources/js/contexts/TasksContext.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var AddTaskButton = function AddTaskButton() {
  var _jsx2, _jsx3;

  var tasksContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_TasksContext__WEBPACK_IMPORTED_MODULE_7__.default);

  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    taskname: "",
    taskdescription: "",
    taskdate: tasksContext.tasksDate
  }),
      data = _useForm.data,
      setData = _useForm.setData,
      post = _useForm.post,
      processing = _useForm.processing,
      errors = _useForm.errors,
      reset = _useForm.reset;

  function submit(e) {
    e.preventDefault();
    post(route('task.store'), {
      onSuccess: function onSuccess() {
        reset('taskname');
        reset('taskdescription');
        $('#add-task-form-modal').modal('hide');
      }
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    className: "d-inline-block",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("form", {
      onSubmit: submit,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
        type: "button",
        className: "nav-link bg-transparent border-0 font-weight-bolder text-red-light fz-24",
        "data-toggle": "modal",
        "data-target": "#add-task-form-modal",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
          className: "d-inline-block w-25 h-25",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
            src: _svg_plus_square_svg__WEBPACK_IMPORTED_MODULE_1__.default,
            alt: "AddTaskButton"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "modal fade",
        id: "add-task-form-modal",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "modal-dialog modal-dialog-centered w-full max-w-340 m-auto",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "modal-content rounded-0",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "modal-header border-0 px-4 pt-5",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h5", {
                className: "modal-title font-roboto-bold fz-16",
                children: "Add Task"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
                type: "button",
                className: "close",
                "data-dismiss": "modal",
                "aria-label": "Close",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                  "aria-hidden": "true",
                  children: "\xD7"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "mx-auto",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_InputText__WEBPACK_IMPORTED_MODULE_5__.default, (_jsx2 = {
                  className: "input-text",
                  id: "taskname",
                  value: data.taskname,
                  onChange: function onChange(e) {
                    return setData('taskname', e.target.value);
                  }
                }, _defineProperty(_jsx2, "className", (errors.taskname ? "is-invalid " : '') + "form-control input-text"), _defineProperty(_jsx2, "placeholder", "Task Name"), _defineProperty(_jsx2, "required", true), _jsx2)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "invalid-feedback text-left ml-2",
                  children: errors.taskname ? errors.taskname : "Task name is required!"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_InputTextArea__WEBPACK_IMPORTED_MODULE_6__.default, (_jsx3 = {
                  rows: "3",
                  className: "input-textarea",
                  id: "taskdescription",
                  value: data.taskdescription,
                  onChange: function onChange(e) {
                    return setData('taskdescription', e.target.value);
                  }
                }, _defineProperty(_jsx3, "className", (errors.taskdescription ? "is-invalid " : '') + "form-control input-textarea"), _defineProperty(_jsx3, "placeholder", "Task Description"), _jsx3)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "invalid-feedback text-left ml-2",
                  children: errors.taskdescription ? errors.taskdescription : "Task description is invalid!"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "modal-footer border-0",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__.default, {
                type: "submit",
                value: "Add",
                addClass: "w-full w-md-290 mx-auto mb-3"
              })
            })]
          })
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddTaskButton);

/***/ }),

/***/ "./resources/js/components/BrandLogo.jsx":
/*!***********************************************!*\
  !*** ./resources/js/components/BrandLogo.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _png_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../png/logo.png */ "./resources/png/logo.png");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var BrandLogo = function BrandLogo() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.InertiaLink, {
    href: route('home'),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
      src: _png_logo_png__WEBPACK_IMPORTED_MODULE_1__.default,
      alt: "Logo",
      className: "w-132"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrandLogo);

/***/ }),

/***/ "./resources/js/components/CheckCircle.jsx":
/*!*************************************************!*\
  !*** ./resources/js/components/CheckCircle.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _svg_check_circle_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/check-circle.svg */ "./resources/svg/check-circle.svg");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var CheckCircle = function CheckCircle(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.InertiaLink, {
    href: props.href,
    only: ['tasks'],
    preserveScroll: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
      src: _svg_check_circle_svg__WEBPACK_IMPORTED_MODULE_1__.default,
      alt: "CheckCircle",
      width: "38",
      height: "38"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckCircle);

/***/ }),

/***/ "./resources/js/components/Circle.jsx":
/*!********************************************!*\
  !*** ./resources/js/components/Circle.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _svg_circle_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/circle.svg */ "./resources/svg/circle.svg");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var Circle = function Circle(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.InertiaLink, {
    href: props.href,
    only: ['tasks'],
    preserveScroll: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
      src: _svg_circle_svg__WEBPACK_IMPORTED_MODULE_1__.default,
      alt: "Circle",
      width: "38",
      height: "38"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Circle);

/***/ }),

/***/ "./resources/js/components/EditTaskButton.jsx":
/*!****************************************************!*\
  !*** ./resources/js/components/EditTaskButton.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _svg_edit_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/edit.svg */ "./resources/svg/edit.svg");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _SecondaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SecondaryButton */ "./resources/js/components/SecondaryButton.jsx");
/* harmony import */ var _PrimaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PrimaryButton */ "./resources/js/components/PrimaryButton.jsx");
/* harmony import */ var _InputText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InputText */ "./resources/js/components/InputText.jsx");
/* harmony import */ var _InputTextArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InputTextArea */ "./resources/js/components/InputTextArea.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var EditTaskButton = function EditTaskButton(props) {
  var _jsx2, _jsx3;

  var task = props.value;

  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    taskname: task.name,
    taskdescription: task.description,
    taskid: task.id
  }),
      data = _useForm.data,
      setData = _useForm.setData,
      post = _useForm.post,
      processing = _useForm.processing,
      errors = _useForm.errors,
      reset = _useForm.reset;

  function submit(e) {
    e.preventDefault();
    post(route('task.update', task.id), {
      onSuccess: function onSuccess() {
        $("#edit-task-form-modal-" + task.id).modal('hide');
      }
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    className: "d-inline-block align-top pl-1",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("form", {
      onSubmit: submit,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
        type: "button",
        className: "p-0 nav-link bg-transparent border-0 font-weight-bolder text-red-light fz-24",
        "data-toggle": "modal",
        "data-target": "#edit-task-form-modal-" + data.taskid,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          className: "d-inline-block w-25 h-25",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
            src: _svg_edit_svg__WEBPACK_IMPORTED_MODULE_1__.default,
            alt: "EditTaskButton"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "modal fade",
        id: "edit-task-form-modal-" + data.taskid,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "modal-dialog modal-dialog-centered w-full max-w-340 m-auto",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "modal-content rounded-0",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "modal-header border-0 px-4 pt-5",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h5", {
                className: "modal-title font-roboto-bold fz-16",
                children: "Edit Task"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
                type: "button",
                className: "close",
                "data-dismiss": "modal",
                "aria-label": "Close",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                  "aria-hidden": "true",
                  children: "\xD7"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "mx-auto",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_InputText__WEBPACK_IMPORTED_MODULE_5__.default, (_jsx2 = {
                  className: "input-text",
                  id: "taskname",
                  value: data.taskname,
                  onChange: function onChange(e) {
                    return setData('taskname', e.target.value);
                  }
                }, _defineProperty(_jsx2, "className", (errors.taskname ? "is-invalid " : '') + "form-control input-text"), _defineProperty(_jsx2, "placeholder", "Task Name"), _defineProperty(_jsx2, "required", true), _jsx2)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                  className: "invalid-feedback text-left ml-2",
                  children: errors.taskname ? errors.taskname : "Task name is required!"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_InputTextArea__WEBPACK_IMPORTED_MODULE_6__.default, (_jsx3 = {
                  rows: "3",
                  className: "input-textarea",
                  id: "taskdescription",
                  value: data.taskdescription,
                  onChange: function onChange(e) {
                    return setData('taskdescription', e.target.value);
                  }
                }, _defineProperty(_jsx3, "className", (errors.taskdescription ? "is-invalid " : '') + "form-control input-textarea"), _defineProperty(_jsx3, "placeholder", "Task Description"), _jsx3)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                  className: "invalid-feedback text-left ml-2",
                  children: errors.taskdescription ? errors.taskdescription : "Task description is invalid!"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "modal-footer border-0",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__.default, {
                type: "submit",
                value: "Add",
                addClass: "w-full w-md-290 mx-auto mb-3"
              })
            })]
          })
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditTaskButton);

/***/ }),

/***/ "./resources/js/components/InputText.jsx":
/*!***********************************************!*\
  !*** ./resources/js/components/InputText.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var InputText = function InputText(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
    type: "text",
    id: props.id,
    value: props.value,
    onChange: props.onChange,
    className: props.className ? props.className : "input-text",
    placeholder: props.placeholder,
    required: props.required,
    pattern: props.pattern
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputText);

/***/ }),

/***/ "./resources/js/components/InputTextArea.jsx":
/*!***************************************************!*\
  !*** ./resources/js/components/InputTextArea.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var InputTextArea = function InputTextArea(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("textarea", {
    id: props.id,
    rows: props.rows,
    onChange: props.onChange,
    className: props.className ? props.className : "input-textarea",
    placeholder: props.placeholder,
    required: props.required,
    pattern: props.pattern,
    defaultValue: props.value
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputTextArea);

/***/ }),

/***/ "./resources/js/components/Logout.jsx":
/*!********************************************!*\
  !*** ./resources/js/components/Logout.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _svg_logout_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/logout.svg */ "./resources/svg/logout.svg");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _SecondaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SecondaryButton */ "./resources/js/components/SecondaryButton.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var Logout = function Logout() {
  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.useForm)(),
      data = _useForm.data,
      setData = _useForm.setData,
      post = _useForm.post,
      processing = _useForm.processing,
      errors = _useForm.errors;

  function submit(e) {
    e.preventDefault();
    post(route('logout'));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form", {
      onSubmit: submit,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
        type: "button",
        className: "nav-link bg-transparent border-0 font-weight-bolder text-red-light fz-24",
        "data-toggle": "modal",
        "data-target": "#logout-confirmation",
        children: ["Logout ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "d-inline-block text-red-light w-38 h-38",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
            src: _svg_logout_svg__WEBPACK_IMPORTED_MODULE_1__.default,
            alt: "Logout"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "modal fade",
        id: "logout-confirmation",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "modal-dialog",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "modal-content rounded-0",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "modal-header border-0",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h5", {
                className: "modal-title font-roboto-bold fz-16",
                children: "Logout Confirmation"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                type: "button",
                className: "close",
                "data-dismiss": "modal",
                "aria-label": "Close",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  "aria-hidden": "true",
                  children: "\xD7"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "modal-body",
              children: "Are You Sure, You Want To Logout! This action can't be undone"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "modal-footer border-0",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SecondaryButton__WEBPACK_IMPORTED_MODULE_3__.default, {
                value: "No",
                dataDismiss: "modal"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                type: "submit",
                className: "btn btn-danger rounded-0 shadow-md font-roboto-bold fz-16",
                children: "Yes"
              })]
            })]
          })
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logout);

/***/ }),

/***/ "./resources/js/components/NextDayTaskButton.jsx":
/*!*******************************************************!*\
  !*** ./resources/js/components/NextDayTaskButton.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _svg_right_arrow_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/right-arrow.svg */ "./resources/svg/right-arrow.svg");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var NextDayTaskButton = function NextDayTaskButton(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.InertiaLink, {
    href: route('home'),
    data: {
      date: props.value,
      action: "next"
    },
    only: ['tasks', 'date'],
    preserveScroll: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
      src: _svg_right_arrow_svg__WEBPACK_IMPORTED_MODULE_1__.default,
      alt: "NextDayTaskButton",
      width: "25",
      height: "40"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NextDayTaskButton);

/***/ }),

/***/ "./resources/js/components/PreviousDayTaskButton.jsx":
/*!***********************************************************!*\
  !*** ./resources/js/components/PreviousDayTaskButton.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _svg_left_arrow_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/left-arrow.svg */ "./resources/svg/left-arrow.svg");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var PreviousDayTaskButton = function PreviousDayTaskButton(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.InertiaLink, {
    href: route('home'),
    data: {
      date: props.value,
      action: "prev"
    },
    only: ['tasks', 'date'],
    preserveScroll: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
      src: _svg_left_arrow_svg__WEBPACK_IMPORTED_MODULE_1__.default,
      alt: "PreviousDayTaskButton",
      width: "25",
      height: "40"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreviousDayTaskButton);

/***/ }),

/***/ "./resources/js/components/PrimaryButton.jsx":
/*!***************************************************!*\
  !*** ./resources/js/components/PrimaryButton.jsx ***!
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

/***/ "./resources/js/components/SecondaryButton.jsx":
/*!*****************************************************!*\
  !*** ./resources/js/components/SecondaryButton.jsx ***!
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

/***/ "./resources/js/components/TaskList.jsx":
/*!**********************************************!*\
  !*** ./resources/js/components/TaskList.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _TaskListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskListItem */ "./resources/js/components/TaskListItem.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var TaskList = function TaskList(props) {
  var tasks = props.value;
  var taskListItems = tasks.map(function (task) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TaskListItem__WEBPACK_IMPORTED_MODULE_1__.default, {
      value: task
    }, task.id);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
    className: "list-group rounded-0",
    children: tasks.length != 0 ? taskListItems : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
      className: "text-gray-light list-group-item text-center",
      children: "No Tasks"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskList);

/***/ }),

/***/ "./resources/js/components/TaskListItem.jsx":
/*!**************************************************!*\
  !*** ./resources/js/components/TaskListItem.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _CheckCircle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckCircle */ "./resources/js/components/CheckCircle.jsx");
/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Circle */ "./resources/js/components/Circle.jsx");
/* harmony import */ var _EditTaskButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditTaskButton */ "./resources/js/components/EditTaskButton.jsx");
/* harmony import */ var _contexts_TasksContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/TasksContext */ "./resources/js/contexts/TasksContext.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var TaskListItem = function TaskListItem(props) {
  var task = props.value;
  var tasksContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_TasksContext__WEBPACK_IMPORTED_MODULE_4__.default);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("li", {
    className: "text-gray list-group-item",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
      className: (tasksContext.isTasksToday ? "w-220 " : "w-full ") + "d-inline-block",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
        className: "d-block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: (tasksContext.isTasksToday ? "w-180 " : "w-220 ") + "fz-24 d-inline-block",
          children: task.name
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_EditTaskButton__WEBPACK_IMPORTED_MODULE_3__.default, {
          value: task
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        className: "d-block fz-16 text-justify white-space-pre-line",
        children: task.description
      })]
    }), tasksContext.isTasksToday && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
      className: "d-inline-block align-top",
      children: task.completed_at ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_CheckCircle__WEBPACK_IMPORTED_MODULE_1__.default, {
        href: route('task.pending', task.id)
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Circle__WEBPACK_IMPORTED_MODULE_2__.default, {
        href: route('task.completed', task.id)
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskListItem);

/***/ }),

/***/ "./resources/js/components/UserAlt.jsx":
/*!*********************************************!*\
  !*** ./resources/js/components/UserAlt.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _svg_user_alt_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/user-alt.svg */ "./resources/svg/user-alt.svg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var UserAlt = function UserAlt() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
    src: _svg_user_alt_svg__WEBPACK_IMPORTED_MODULE_1__.default,
    alt: "UserAlt"
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserAlt);

/***/ }),

/***/ "./resources/js/contexts/TasksContext.jsx":
/*!************************************************!*\
  !*** ./resources/js/contexts/TasksContext.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksContextProvider": () => (/* binding */ TasksContextProvider),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var TasksContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var TasksContextProvider = TasksContext.Provider;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TasksContext);

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

/***/ }),

/***/ "./resources/svg/check-circle.svg":
/*!****************************************!*\
  !*** ./resources/svg/check-circle.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/check-circle.svg?36c64ac18686acf9955fdd254fd7ae4f");

/***/ }),

/***/ "./resources/svg/circle.svg":
/*!**********************************!*\
  !*** ./resources/svg/circle.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/circle.svg?b3333dfda2668c660c9955c69756d995");

/***/ }),

/***/ "./resources/svg/edit.svg":
/*!********************************!*\
  !*** ./resources/svg/edit.svg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/edit.svg?a7af1d31e8fb995206991faf202188cc");

/***/ }),

/***/ "./resources/svg/left-arrow.svg":
/*!**************************************!*\
  !*** ./resources/svg/left-arrow.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/left-arrow.svg?5e4b12110f1dc09b6600d299bd723cf8");

/***/ }),

/***/ "./resources/svg/logout.svg":
/*!**********************************!*\
  !*** ./resources/svg/logout.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/logout.svg?ee73826a6e4d5a19f4ebba0305535635");

/***/ }),

/***/ "./resources/svg/plus-square.svg":
/*!***************************************!*\
  !*** ./resources/svg/plus-square.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/plus-square.svg?80afed0e178aa1dd736d8c20f97a4e7a");

/***/ }),

/***/ "./resources/svg/right-arrow.svg":
/*!***************************************!*\
  !*** ./resources/svg/right-arrow.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/right-arrow.svg?2177d12b067d7c44deb2f8c328421229");

/***/ }),

/***/ "./resources/svg/user-alt.svg":
/*!************************************!*\
  !*** ./resources/svg/user-alt.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/user-alt.svg?16dce2344c0e1709e0b6e3e782cec0f5");

/***/ })

}]);