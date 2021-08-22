/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module './style.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


function createAbout(){
    var main = document.querySelector("main");

    var title = document.createElement("h1");
    title.textContent = "About Us";
    main.appendChild(title);

    console.log("about working");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAbout);

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function createContact(){
    console.log("contact working");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module './style.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


function createHome(){
    var main = document.querySelector("main");

    var img1 = document.createElement("img");
    img1.id = "left-top";
    img1.src = "./public/icons/Manchester-5-1.jpeg";
    img1.alt = "Picture of Manchester harbor";
    main.append(img1);

    var img2 = document.createElement("img");
    img2.id = "left-bottom";
    img2.src = "./public/icons/shrimp-scampi-2.jpeg";
    img2.alt = "Shrimp scampi dish";
    main.append(img2);

    var img3 = document.createElement("img");
    img3.id = "right-full";
    img3.src = "./public/icons/dining-room-2.jpeg";
    img3.alt = "A maximalist pink dining room";
    main.append(img3);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenu(){
    console.log("menu working");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './style.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());






const body = document.querySelector("body");

// if click menu ==> menu function

// contact function

// welcome function

// about function
console.log("website");

function createHeader(){
    var header = document.createElement("header");
    header.id = "header";
    body.appendChild(header);

    var logo = document.createElement("img");
    logo.id = "header-logo";
    logo.src = "./public/icons/saras-kitchen-logo.png";
    logo.alt = "Sara's Kitchen Logo with Chef's Hat";
    header.appendChild(logo);


    header.appendChild(createNav());

}


function createNav(){
    var nav = document.createElement("nav");
    nav.id = "nav";

    var homeTab = document.createElement("button");
    homeTab.classList.add("nav-button");
    homeTab.innerHTML = "Home";
    homeTab.addEventListener("click", (e) => {
        clearContent();
        (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.default)();
    });

    var menuTab = document.createElement("button");
    menuTab.classList.add("nav-button");
    menuTab.innerHTML = "Menu";
    menuTab.addEventListener("click", (e) => {
        clearContent();
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.default)();
    });

    var aboutTab = document.createElement("button");
    aboutTab.classList.add("nav-button");
    aboutTab.innerHTML = "About";
    aboutTab.addEventListener("click", (e) => {
        clearContent();
        (0,_about_js__WEBPACK_IMPORTED_MODULE_2__.default)();
    });

    var contactTab = document.createElement("button");
    contactTab.classList.add("nav-button");
    contactTab.innerHTML = "Contact";
    contactTab.addEventListener("click", (e) => {
        clearContent();
        (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.default)();
    });

    nav.appendChild(homeTab);
    nav.appendChild(menuTab);
    nav.appendChild(aboutTab);
    nav.appendChild(contactTab);

    return nav;
}


function createMain(){
    var main = document.createElement("main");
    main.id = "content";
    body.appendChild(main);
}


function clearContent(){
    var main = document.querySelector("main");
    var length = main.children.length;

    for(let i = 0; i < length; i++){
        main.children[0].remove();
    }
    
}


function createFooter(){
    var footer = document.createElement("footer");
    footer.id = "footer";
    body.appendChild(footer);

    var developDiv = document.createElement("div");
    developDiv.innerText = "Developed by Kelly Finnerty in 2021."
    footer.appendChild(developDiv);
}


function createWebsite(){
    createHeader();
    createMain();
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.default)();
    createFooter();
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createWebsite);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './style.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./website.js */ "./src/website.js");




const CONTENT = document.querySelector("#content");

const restCopy = document.createElement("div");
restCopy.textContent = `Sara is excited to welcome you to her kitchen. 
                        Located in Sara's very own dining room in pituresque Manchester-by-the-Sea, Massachusetts, 
                        guests always receive first class service in Sara's warm, multi-generational bungalow. 
                        From homemade pasta to dumplings to smoothies, you can really have it all at Sara's Kitchen.`;


(0,_website_js__WEBPACK_IMPORTED_MODULE_1__.default)()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXFCOztBQUVyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUNYZjtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ0xNOztBQUVyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDeEJmO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pvQjtBQUNBO0FBQ0U7QUFDSTtBQUNwQjs7QUFFckI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFVO0FBQ2xCLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQVU7QUFDbEIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrREFBVztBQUNuQixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFhO0FBQ3JCLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBVTtBQUNkO0FBQ0E7OztBQUdBLGlFQUFlOzs7Ozs7VUNwSGY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDbUI7OztBQUd4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxvREFBYSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUFib3V0KCl7XG4gICAgdmFyIG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcblxuICAgIHZhciB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQWJvdXQgVXNcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnNvbGUubG9nKFwiYWJvdXQgd29ya2luZ1wiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWJvdXQiLCJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKXtcbiAgICBjb25zb2xlLmxvZyhcImNvbnRhY3Qgd29ya2luZ1wiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdCIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5mdW5jdGlvbiBjcmVhdGVIb21lKCl7XG4gICAgdmFyIG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcblxuICAgIHZhciBpbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWcxLmlkID0gXCJsZWZ0LXRvcFwiO1xuICAgIGltZzEuc3JjID0gXCIuL3B1YmxpYy9pY29ucy9NYW5jaGVzdGVyLTUtMS5qcGVnXCI7XG4gICAgaW1nMS5hbHQgPSBcIlBpY3R1cmUgb2YgTWFuY2hlc3RlciBoYXJib3JcIjtcbiAgICBtYWluLmFwcGVuZChpbWcxKTtcblxuICAgIHZhciBpbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWcyLmlkID0gXCJsZWZ0LWJvdHRvbVwiO1xuICAgIGltZzIuc3JjID0gXCIuL3B1YmxpYy9pY29ucy9zaHJpbXAtc2NhbXBpLTIuanBlZ1wiO1xuICAgIGltZzIuYWx0ID0gXCJTaHJpbXAgc2NhbXBpIGRpc2hcIjtcbiAgICBtYWluLmFwcGVuZChpbWcyKTtcblxuICAgIHZhciBpbWczID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWczLmlkID0gXCJyaWdodC1mdWxsXCI7XG4gICAgaW1nMy5zcmMgPSBcIi4vcHVibGljL2ljb25zL2RpbmluZy1yb29tLTIuanBlZ1wiO1xuICAgIGltZzMuYWx0ID0gXCJBIG1heGltYWxpc3QgcGluayBkaW5pbmcgcm9vbVwiO1xuICAgIG1haW4uYXBwZW5kKGltZzMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lIiwiZnVuY3Rpb24gY3JlYXRlTWVudSgpe1xuICAgIGNvbnNvbGUubG9nKFwibWVudSB3b3JraW5nXCIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51IiwiaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IGNyZWF0ZUFib3V0IGZyb20gXCIuL2Fib3V0LmpzXCI7XG5pbXBvcnQgY3JlYXRlQ29udGFjdCBmcm9tIFwiLi9jb250YWN0LmpzXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4vLyBpZiBjbGljayBtZW51ID09PiBtZW51IGZ1bmN0aW9uXG5cbi8vIGNvbnRhY3QgZnVuY3Rpb25cblxuLy8gd2VsY29tZSBmdW5jdGlvblxuXG4vLyBhYm91dCBmdW5jdGlvblxuY29uc29sZS5sb2coXCJ3ZWJzaXRlXCIpO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKXtcbiAgICB2YXIgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBoZWFkZXIuaWQgPSBcImhlYWRlclwiO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIHZhciBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBsb2dvLmlkID0gXCJoZWFkZXItbG9nb1wiO1xuICAgIGxvZ28uc3JjID0gXCIuL3B1YmxpYy9pY29ucy9zYXJhcy1raXRjaGVuLWxvZ28ucG5nXCI7XG4gICAgbG9nby5hbHQgPSBcIlNhcmEncyBLaXRjaGVuIExvZ28gd2l0aCBDaGVmJ3MgSGF0XCI7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xuXG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xuXG59XG5cblxuZnVuY3Rpb24gY3JlYXRlTmF2KCl7XG4gICAgdmFyIG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgbmF2LmlkID0gXCJuYXZcIjtcblxuICAgIHZhciBob21lVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBob21lVGFiLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnV0dG9uXCIpO1xuICAgIGhvbWVUYWIuaW5uZXJIVE1MID0gXCJIb21lXCI7XG4gICAgaG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY2xlYXJDb250ZW50KCk7XG4gICAgICAgIGNyZWF0ZUhvbWUoKTtcbiAgICB9KTtcblxuICAgIHZhciBtZW51VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnV0dG9uXCIpO1xuICAgIG1lbnVUYWIuaW5uZXJIVE1MID0gXCJNZW51XCI7XG4gICAgbWVudVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY2xlYXJDb250ZW50KCk7XG4gICAgICAgIGNyZWF0ZU1lbnUoKTtcbiAgICB9KTtcblxuICAgIHZhciBhYm91dFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWJvdXRUYWIuY2xhc3NMaXN0LmFkZChcIm5hdi1idXR0b25cIik7XG4gICAgYWJvdXRUYWIuaW5uZXJIVE1MID0gXCJBYm91dFwiO1xuICAgIGFib3V0VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgY3JlYXRlQWJvdXQoKTtcbiAgICB9KTtcblxuICAgIHZhciBjb250YWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb250YWN0VGFiLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnV0dG9uXCIpO1xuICAgIGNvbnRhY3RUYWIuaW5uZXJIVE1MID0gXCJDb250YWN0XCI7XG4gICAgY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY2xlYXJDb250ZW50KCk7XG4gICAgICAgIGNyZWF0ZUNvbnRhY3QoKTtcbiAgICB9KTtcblxuICAgIG5hdi5hcHBlbmRDaGlsZChob21lVGFiKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobWVudVRhYik7XG4gICAgbmF2LmFwcGVuZENoaWxkKGFib3V0VGFiKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdFRhYik7XG5cbiAgICByZXR1cm4gbmF2O1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKXtcbiAgICB2YXIgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgIG1haW4uaWQgPSBcImNvbnRlbnRcIjtcbiAgICBib2R5LmFwcGVuZENoaWxkKG1haW4pO1xufVxuXG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpe1xuICAgIHZhciBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgdmFyIGxlbmd0aCA9IG1haW4uY2hpbGRyZW4ubGVuZ3RoO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgbWFpbi5jaGlsZHJlblswXS5yZW1vdmUoKTtcbiAgICB9XG4gICAgXG59XG5cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCl7XG4gICAgdmFyIGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgZm9vdGVyLmlkID0gXCJmb290ZXJcIjtcbiAgICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgICB2YXIgZGV2ZWxvcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGV2ZWxvcERpdi5pbm5lclRleHQgPSBcIkRldmVsb3BlZCBieSBLZWxseSBGaW5uZXJ0eSBpbiAyMDIxLlwiXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGRldmVsb3BEaXYpO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVdlYnNpdGUoKXtcbiAgICBjcmVhdGVIZWFkZXIoKTtcbiAgICBjcmVhdGVNYWluKCk7XG4gICAgY3JlYXRlSG9tZSgpO1xuICAgIGNyZWF0ZUZvb3RlcigpO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVdlYnNpdGUiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNyZWF0ZVdlYnNpdGUgZnJvbSBcIi4vd2Vic2l0ZS5qc1wiXG5cblxuY29uc3QgQ09OVEVOVCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuY29uc3QgcmVzdENvcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucmVzdENvcHkudGV4dENvbnRlbnQgPSBgU2FyYSBpcyBleGNpdGVkIHRvIHdlbGNvbWUgeW91IHRvIGhlciBraXRjaGVuLiBcbiAgICAgICAgICAgICAgICAgICAgICAgIExvY2F0ZWQgaW4gU2FyYSdzIHZlcnkgb3duIGRpbmluZyByb29tIGluIHBpdHVyZXNxdWUgTWFuY2hlc3Rlci1ieS10aGUtU2VhLCBNYXNzYWNodXNldHRzLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGd1ZXN0cyBhbHdheXMgcmVjZWl2ZSBmaXJzdCBjbGFzcyBzZXJ2aWNlIGluIFNhcmEncyB3YXJtLCBtdWx0aS1nZW5lcmF0aW9uYWwgYnVuZ2Fsb3cuIFxuICAgICAgICAgICAgICAgICAgICAgICAgRnJvbSBob21lbWFkZSBwYXN0YSB0byBkdW1wbGluZ3MgdG8gc21vb3RoaWVzLCB5b3UgY2FuIHJlYWxseSBoYXZlIGl0IGFsbCBhdCBTYXJhJ3MgS2l0Y2hlbi5gO1xuXG5cbmNyZWF0ZVdlYnNpdGUoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==