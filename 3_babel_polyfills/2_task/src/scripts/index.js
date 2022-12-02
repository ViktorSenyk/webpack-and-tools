import { btnElem, listElem } from './elements.js';
import { renderTasks } from "./render.js";
import { addTask } from './add.js'; 
import { changeTask } from './change.js'; 

window.addEventListener('load', renderTasks);
btnElem.addEventListener('click', addTask);
listElem.addEventListener('click', changeTask)