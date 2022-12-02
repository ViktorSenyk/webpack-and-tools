import "core-js/modules/es.promise.js";
import "core-js/modules/es.array.sort.js";
import { listElem } from './elements.js';
export const renderTasks = () => {
  fetch('https://6384c3013fa7acb14fffc5eb.mockapi.io/tasks').then(response => response.json()).then(tasks => {
    tasks.sort((a, b) => b.time - a.time);
    listElem.innerHTML = tasks.map(_ref => {
      let {
        text,
        done,
        id
      } = _ref;
      return "<li \n                class=\"list__item".concat(done ? ' list__item_done' : '', "\" \n                data-task-id=\"").concat(id, "\" data-task-done=\"").concat(done, "\">\n                <input\n                class=\"list__item-checkbox\"\n                ").concat(done ? ' checked' : '', " \n                type=\"checkbox\">").concat(text, "<button class=\"list__item-deleteButton\">Delete</button></li>");
    }).join('');
  });
};