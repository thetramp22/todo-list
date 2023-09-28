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
        tasklistDisplay.appendChild(createTaskCard(task));
    }
}

function createTaskCard(task) {
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1E7O0FBRWxDLHFCQUFxQixpREFBUTs7QUFFZDtBQUNmOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQiw2Q0FBSTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM5RWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZDZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ1pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNONEI7O0FBRTVCLCtDQUFRLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tsaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgVGFza2xpc3QgZnJvbSBcIi4vdGFza2xpc3RcIjtcblxuY29uc3QgdGFza2xpc3QgPSBuZXcgVGFza2xpc3QoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XG4gICAgaW5pdGlhbGl6ZUV2ZW50TGlzdGVuZXJzKCk7XG5cbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IG9wZW5BZGRUYXNrTW9kYWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3BlbkFkZFRhc2tNb2RhbEJ0bicpO1xuICAgIGluaXRpYWxpemVBZGRUYXNrTW9kYWxCdG5zKCk7XG5cbiAgICBvcGVuQWRkVGFza01vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbkFkZFRhc2tNb2RhbCk7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVBZGRUYXNrTW9kYWxCdG5zKCkge1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrUHJpb3JpdHlCdG4nKTtcbiAgICBjb25zdCBjYW5jZWxBZGRUYXNrTW9kYWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsQWRkVGFza01vZGFsQnRuJyk7XG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrQnRuJyk7XG5cbiAgICB0YXNrUHJpb3JpdHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVQcmlvcml0eSk7XG4gICAgY2FuY2VsQWRkVGFza01vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsQWRkVGFza01vZGFsKTtcbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVGFzayk7XG59XG5cbmZ1bmN0aW9uIG9wZW5BZGRUYXNrTW9kYWwoKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFza01vZGFsJyk7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVByaW9yaXR5KCkge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrUHJpb3JpdHlCdG4nKTtcbiAgICBjb25zdCBjdXJycmVudFByaW9yaXR5ID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmlvcml0eS1pbXBvcnRhbnQnKTtcbiAgICBpZihjdXJycmVudFByaW9yaXR5ID09ICdmYWxzZScpIHtcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmlvcml0eS1pbXBvcnRhbnQnLCAndHJ1ZScpO1xuICAgICAgICBidG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtc3RhclwiPjwvaT4nO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpb3JpdHktaW1wb3J0YW50JywgJ2ZhbHNlJyk7XG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLXN0YXJcIj48L2k+JztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNhbmNlbEFkZFRhc2tNb2RhbCgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrTW9kYWwnKTtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrKCl7XG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza05hbWVJbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbklucHV0JykudmFsdWU7XG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZUlucHV0JykudmFsdWU7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tQcmlvcml0eUJ0bicpLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmlvcml0eS1pbXBvcnRhbnQnKTtcblxuICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzaygpO1xuICAgIHRhc2submFtZSA9IHRhc2tOYW1lO1xuICAgIHRhc2suZGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb247XG4gICAgdGFzay5kdWVEYXRlID0gdGFza0R1ZURhdGU7XG5cbiAgICBpZih0YXNrUHJpb3JpdHkgPT0gJ3RydWUnKSB7XG4gICAgICAgIHRhc2sucHJpb3JpdHkgPSB0cnVlO1xuICAgIH1cblxuICAgIHRhc2tsaXN0LnB1c2godGFzayk7XG4gICAgcmVuZGVyVGFza3MoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFza3MoKXtcbiAgICBjb25zdCB0YXNrbGlzdERpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1saXN0LWRpc3BsYXknKTtcblxuICAgIGZvcihsZXQgdGFzayBpbiB0YXNrbGlzdCl7XG4gICAgICAgIHRhc2tsaXN0RGlzcGxheS5hcHBlbmRDaGlsZChjcmVhdGVUYXNrQ2FyZCh0YXNrKSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrQ2FyZCh0YXNrKSB7XG4gICAgXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5ID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIHNldE5hbWUobmFtZSl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pe1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgZ2V0RHVlRGF0ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICAgIH1cblxuICAgIHNldER1ZURhdGUoZHVlRGF0ZSl7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgfVxuXG4gICAgZ2V0UHJpb3JpdHkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XG4gICAgfVxuXG4gICAgc2V0UHJpb3JpdHkocHJpb3JpdHkpe1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tsaXN0IHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnRhc2tsaXN0ID0gW107XG4gICAgfVxuXG4gICAgZ2V0VGFza2xpc3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza2xpc3Q7XG4gICAgfVxuXG4gICAgYWRkTmV3VGFzayh0YXNrKXtcbiAgICAgICAgdGhpcy50YXNrbGlzdC5wdXNoKHRhc2spO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkUGFnZSBmcm9tIFwiLi9VSVwiO1xuXG5sb2FkUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==