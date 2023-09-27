/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _tasklist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasklist */ "./src/tasklist.js");



const tasklist = new _tasklist__WEBPACK_IMPORTED_MODULE_1__["default"]();

function loadPage() {
    initializeEventListeners();

}

function initializeEventListeners() {
    const openAddTaskModalBtn = document.getElementById('openAddTaskModalBtn');
    initializeAddTaskModalBtns();

    openAddTaskModalBtn.addEventListener('click', openAddTaskModal);
}

function initializeAddTaskModalBtns() {
    const taskPriorityBtn = document.getElementById('taskPriorityBtn');
    const cancelAddTaskModalBtn = document.getElementById('cancelAddTaskModalBtn');
    const addTaskBtn = document.getElementById('addTaskBtn');

    taskPriorityBtn.addEventListener('click', togglePriority);
    cancelAddTaskModalBtn.addEventListener('click', cancelAddTaskModal);
    addTaskBtn.addEventListener('click', addTask);
}

function openAddTaskModal() {
    const modal = document.getElementById('addTaskModal');
    modal.style.display = 'block';
}

function togglePriority() {
    const btn = document.getElementById('taskPriorityBtn');
    const currrentPriority = btn.getAttribute('data-priority-important');
    if(currrentPriority == 'false') {
        btn.setAttribute('data-priority-important', 'true');
        btn.innerHTML = '<i class="fa-solid fa-star"></i>';
    } else {
        btn.setAttribute('data-priority-important', 'false');
        btn.innerHTML = '<i class="fa-regular fa-star"></i>';
    }
}

function cancelAddTaskModal() {
    const modal = document.getElementById('addTaskModal');
    modal.style.display = 'none';
}

function addTask(){
    const taskName = document.getElementById('taskNameInput').value;
    const taskDescription = document.getElementById('descriptionInput').value;
    const taskDueDate = document.getElementById('dueDateInput').value;
    const taskPriority = document.getElementById('taskPriorityBtn').getAttribute('data-priority-important');

    const task = new _task__WEBPACK_IMPORTED_MODULE_0__["default"]();
    task.name = taskName;
    task.description = taskDescription;
    task.dueDate = taskDueDate;

    if(taskPriority == 'true') {
        task.priority = true;
    }

    tasklist.push(task);
    renderTasks();
}

function renderTasks(){
    const tasklistDisplay = document.getElementById('task-list-display');

    for(let task in tasklist){
        createTaskCard();
    }
}

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor(name, description, dueDate, priority = false) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getDescription(){
        return this.description;
    }

    setDescription(description){
        this.description = description;
    }

    getDueDate(){
        return this.dueDate;
    }

    setDueDate(dueDate){
        this.dueDate = dueDate;
    }

    getPriority(){
        return this.priority;
    }

    setPriority(priority){
        this.priority = priority;
    }
}

/***/ }),

/***/ "./src/tasklist.js":
/*!*************************!*\
  !*** ./src/tasklist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tasklist)
/* harmony export */ });
class Tasklist {
    constructor(){
        this.tasklist = [];
    }

    getTasklist(){
        return this.tasklist;
    }

    addNewTask(task){
        this.tasklist.push(task);
    }
}

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
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/UI.js");


(0,_UI__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1E7O0FBRWxDLHFCQUFxQixpREFBUTs7QUFFZDtBQUNmOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQiw2Q0FBSTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdkNlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDWkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ040Qjs7QUFFNUIsK0NBQVEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCBUYXNrbGlzdCBmcm9tIFwiLi90YXNrbGlzdFwiO1xuXG5jb25zdCB0YXNrbGlzdCA9IG5ldyBUYXNrbGlzdCgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgICBpbml0aWFsaXplRXZlbnRMaXN0ZW5lcnMoKTtcblxufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3Qgb3BlbkFkZFRhc2tNb2RhbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuQWRkVGFza01vZGFsQnRuJyk7XG4gICAgaW5pdGlhbGl6ZUFkZFRhc2tNb2RhbEJ0bnMoKTtcblxuICAgIG9wZW5BZGRUYXNrTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuQWRkVGFza01vZGFsKTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUFkZFRhc2tNb2RhbEJ0bnMoKSB7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tQcmlvcml0eUJ0bicpO1xuICAgIGNvbnN0IGNhbmNlbEFkZFRhc2tNb2RhbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWxBZGRUYXNrTW9kYWxCdG4nKTtcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tCdG4nKTtcblxuICAgIHRhc2tQcmlvcml0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVByaW9yaXR5KTtcbiAgICBjYW5jZWxBZGRUYXNrTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYW5jZWxBZGRUYXNrTW9kYWwpO1xuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrKTtcbn1cblxuZnVuY3Rpb24gb3BlbkFkZFRhc2tNb2RhbCgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrTW9kYWwnKTtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuZnVuY3Rpb24gdG9nZ2xlUHJpb3JpdHkoKSB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tQcmlvcml0eUJ0bicpO1xuICAgIGNvbnN0IGN1cnJyZW50UHJpb3JpdHkgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLXByaW9yaXR5LWltcG9ydGFudCcpO1xuICAgIGlmKGN1cnJyZW50UHJpb3JpdHkgPT0gJ2ZhbHNlJykge1xuICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdkYXRhLXByaW9yaXR5LWltcG9ydGFudCcsICd0cnVlJyk7XG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1zdGFyXCI+PC9pPic7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmlvcml0eS1pbXBvcnRhbnQnLCAnZmFsc2UnKTtcbiAgICAgICAgYnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtc3RhclwiPjwvaT4nO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2FuY2VsQWRkVGFza01vZGFsKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tNb2RhbCcpO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2soKXtcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTmFtZUlucHV0JykudmFsdWU7XG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uSW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlSW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1ByaW9yaXR5QnRuJykuZ2V0QXR0cmlidXRlKCdkYXRhLXByaW9yaXR5LWltcG9ydGFudCcpO1xuXG4gICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKCk7XG4gICAgdGFzay5uYW1lID0gdGFza05hbWU7XG4gICAgdGFzay5kZXNjcmlwdGlvbiA9IHRhc2tEZXNjcmlwdGlvbjtcbiAgICB0YXNrLmR1ZURhdGUgPSB0YXNrRHVlRGF0ZTtcblxuICAgIGlmKHRhc2tQcmlvcml0eSA9PSAndHJ1ZScpIHtcbiAgICAgICAgdGFzay5wcmlvcml0eSA9IHRydWU7XG4gICAgfVxuXG4gICAgdGFza2xpc3QucHVzaCh0YXNrKTtcbiAgICByZW5kZXJUYXNrcygpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUYXNrcygpe1xuICAgIGNvbnN0IHRhc2tsaXN0RGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWxpc3QtZGlzcGxheScpO1xuXG4gICAgZm9yKGxldCB0YXNrIGluIHRhc2tsaXN0KXtcbiAgICAgICAgY3JlYXRlVGFza0NhcmQoKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5ID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIHNldE5hbWUobmFtZSl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pe1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgZ2V0RHVlRGF0ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICAgIH1cblxuICAgIHNldER1ZURhdGUoZHVlRGF0ZSl7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgfVxuXG4gICAgZ2V0UHJpb3JpdHkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XG4gICAgfVxuXG4gICAgc2V0UHJpb3JpdHkocHJpb3JpdHkpe1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tsaXN0IHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnRhc2tsaXN0ID0gW107XG4gICAgfVxuXG4gICAgZ2V0VGFza2xpc3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza2xpc3Q7XG4gICAgfVxuXG4gICAgYWRkTmV3VGFzayh0YXNrKXtcbiAgICAgICAgdGhpcy50YXNrbGlzdC5wdXNoKHRhc2spO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkUGFnZSBmcm9tIFwiLi9VSVwiO1xuXG5sb2FkUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==