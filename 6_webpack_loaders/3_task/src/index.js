import { btnElem, listElem } from './list/elements.js';
import { renderTasks } from "./list/render.js";
import { addTask } from './list/add.js'; 
import { changeTask } from './list/change.js'; 
import './index.scss';

window.addEventListener('load', renderTasks);
btnElem.addEventListener('click', addTask);
listElem.addEventListener('click', changeTask)