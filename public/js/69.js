(self.webpackChunk=self.webpackChunk||[]).push([[69],{7069:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var s=r(7294),a=r(1636),n=r(1625),o=r(3473),i=r(5506),d=r(9355),l=r(3664),c=r(5850),u=r(5893);const m=function(){var e=(0,a.cI)({userid:"8954382491",password:"Gaurav@1924"}),t=e.data,r=e.setData,m=e.post,f=(e.processing,e.errors);return(0,s.useEffect)((function(){var e=document.getElementsByClassName("needs-validation");Array.prototype.filter.call(e,(function(e){e.addEventListener("submit",(function(t){!1===e.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.classList.add("was-validated")}),!1)}))})),(0,u.jsxs)("div",{className:"d-flex flex-column-reverse flex-md-row align-items-center bg-md-gray w-screen h-md-screen justify-content-center",children:[(0,u.jsx)("div",{className:"mx-md-8",children:(0,u.jsxs)("header",{className:"text-center text-md-left mt-7",children:[(0,u.jsxs)("div",{className:"px-md-2",children:[(0,u.jsx)(n.Z,{}),(0,u.jsx)("div",{className:"fz-16 fz-md-24 font-roboto-bold text-primary mt-2 mt-md-3",children:"Easily track your daily tasks"}),(0,u.jsx)("div",{className:"fz-16 fz-md-18 font-roboto-bold mt-md-1",children:"New User? It’s quick and easy"})]}),(0,u.jsx)(d.Z,{value:"Join now",href:route("register"),addClass:"w-290 m-2"})]})}),(0,u.jsx)("div",{className:"bg-white border-none border-md-1 border-gray w-full w-md-360 md-shadow-sm  pb-7",children:(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m(route("login"))},className:"needs-validation",noValidate:!0,children:[(0,u.jsx)("header",{className:"text-center mt-7 d-block d-md-none",children:(0,u.jsx)(n.Z,{})}),(0,u.jsx)("div",{className:"section-heading text-center",children:"Welcome Back"}),(0,u.jsxs)("div",{className:"text-center d-flex flex-column align-items-center",children:[(0,u.jsxs)("div",{children:[(0,u.jsx)(o.Z,{id:"userid",value:t.userid,onChange:function(e){return r("userid",e.target.value)},className:(f.userid||f.invalid_credentials?"is-invalid ":"")+"form-control input-text",placeholder:"Email address or phone number",pattern:"([_a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,5}))|([789]\\d{9})$",required:!0}),(0,u.jsx)("div",{className:"invalid-feedback text-left ml-2",children:f.invalid_credentials?f.invalid_credentials:f.userid?f.userid:"Email address or phone no is required!"})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)(i.Z,{id:"password",value:t.password,onChange:function(e){return r("password",e.target.value)},className:(f.password?"is-invalid ":"")+"form-control input-text",placeholder:"Password",pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",required:!0}),(0,u.jsx)("div",{className:"invalid-feedback text-left ml-2 text-wrap w-290",children:"Password is required!"}),(0,u.jsx)(a.ZQ,{href:route("password.request"),className:"mt-n2 text-right w-290 fz-16 d-inline-block",children:"Forgot Password?"})]}),(0,u.jsx)(d.Z,{type:"submit",value:"Login",addClass:"w-290 m-2"}),(0,u.jsxs)("div",{className:"d-flex align-items-center justify-content-around my-3",children:[(0,u.jsx)("hr",{className:"w-123 border-gray mx-2"}),(0,u.jsx)("span",{className:"fz-16 text-gray",children:"or"}),(0,u.jsx)("hr",{className:"w-123 border-gray mx-2"})]}),(0,u.jsx)(l.Z,{value:"Login using"})]})]})}),(0,u.jsx)(c.Z,{title:"Invalid Credentials!",msg:f.invalid_credentials,id:"invalid_credentials-error",show:f.invalid_credentials,showconfirmationmsg:!1})]})}},1625:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});r(7294);var s=r(1636),a=r(5893);const n=function(){return(0,a.jsx)(s.ZQ,{href:route("home"),children:(0,a.jsx)("img",{src:"/images/logo.png?4c3be64c5f5bc30d104d3839fddfa6b1",alt:"Logo",className:"w-132"})})}},5850:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var s=r(7294),a=r(9355),n=r(1636),o=r(5893),i=function(e){return e.href?(0,o.jsx)(n.ZQ,{className:e.addClass+" btn btn-secondary rounded-0 shadow-md font-roboto-bold fz-16",href:e.href,children:e.value}):(0,o.jsx)("button",{type:e.type,className:e.addClass+" btn btn-secondary rounded-0 shadow-md font-roboto-bold fz-16","data-dismiss":e.dataDismiss,children:e.value})};i.defaultProps={type:"button"};const d=i;function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==r)return;var s,a,n=[],o=!0,i=!1;try{for(r=r.call(e);!(o=(s=r.next()).done)&&(n.push(s.value),!t||n.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(i)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,s=new Array(t);r<t;r++)s[r]=e[r];return s}const h=function(e){var t=m((0,s.useState)({shown:!1}),2),r=t[0],n=t[1];return(0,s.useEffect)((function(){e.show&&!r.shown&&(n((function(e){return c(c({},e),{},u({},"shown",!0))})),$("#"+e.id).modal("show"))})),(0,o.jsx)("div",{className:"modal fade",id:e.id,children:(0,o.jsx)("div",{className:"modal-dialog",children:(0,o.jsxs)("div",{className:"modal-content",children:[(0,o.jsxs)("div",{className:"modal-header",children:[(0,o.jsx)("h5",{className:"modal-title",children:e.title}),(0,o.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:(0,o.jsx)("span",{"aria-hidden":"true",children:"×"})})]}),(0,o.jsx)("div",{className:"modal-body",children:e.msg}),(0,o.jsxs)("div",{className:"modal-footer",children:[(0,o.jsx)(d,{value:"Close",dataDismiss:"modal"}),e.showconfirmationmsg&&(0,o.jsx)(a.Z,{href:e.confirmationlnk?e.confirmationlnk:"",value:e.confirmationmsg?e.confirmationmsg:"Ok"})]})]})})})}},3664:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});r(7294);var s=r(5893);const a=function(e){return(0,s.jsxs)("button",{type:"button",className:"btn btn-outline-light border-1 border-gray text-gray rounded-0 w-290 shadow-md font-roboto-bold fz-16 m-2",children:[e.value," ",(0,s.jsx)("img",{src:"/images/google_logo.png?b99d018e5dd8d64417c5aa70fbc1d7b3",alt:"Logo",className:"w-70 mx-0.5"})," "]})}},5506:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});r(7294);var s=r(5893);const a=function(e){return(0,s.jsx)("input",{type:"password",id:e.id,value:e.value,onChange:e.onChange,className:e.className?e.className:"input-text",placeholder:e.placeholder,required:e.required,pattern:e.pattern})}},3473:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});r(7294);var s=r(5893);const a=function(e){return(0,s.jsx)("input",{type:"text",id:e.id,value:e.value,onChange:e.onChange,className:e.className?e.className:"input-text",placeholder:e.placeholder,required:e.required,pattern:e.pattern})}},9355:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});r(7294);var s=r(1636),a=r(5893),n=function(e){return e.href?(0,a.jsx)(s.ZQ,{className:e.addClass+" btn btn-primary rounded-0 shadow-md font-roboto-bold fz-16",href:e.href,children:e.value}):(0,a.jsx)("button",{type:e.type,className:e.addClass+" btn btn-primary rounded-0 shadow-md font-roboto-bold fz-16","data-dismiss":e.dataDismiss,children:e.value})};n.defaultProps={type:"button"};const o=n}}]);