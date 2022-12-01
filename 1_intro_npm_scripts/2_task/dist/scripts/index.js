import { btnElem, listElem } from "./elements";
import { renderTasks } from "./render.js";
import { addTask } from "./add"; 
import { changeTask } from "./change"; 

window.addEventListener('load', renderTasks);
btnElem.addEventListener('click', addTask);
listElem.addEventListener('click', changeTask)