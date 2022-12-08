import { btnElem, listElem } from './list/elements';
import renderTasks from './list/render';
import addTask from './list/add';
import changeTask from './list/change';
import './index.scss';

window.addEventListener('load', renderTasks);
btnElem.addEventListener('click', addTask);
listElem.addEventListener('click', changeTask);
