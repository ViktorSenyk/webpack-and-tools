import { listElem } from "./elements";

export const renderTasks = () => {
  fetch('https://6384c3013fa7acb14fffc5eb.mockapi.io/tasks')
    .then((response) => response.json())
    .then((tasks) => {
      tasks.sort((a, b) => b.time - a.time);
      listElem.innerHTML = tasks
        .map(({ text, done, id }) => {
          return `<li 
                class="list__item${done ? ' list__item_done' : ''}" 
                data-task-id="${id}" data-task-done="${done}">
                <input
                class="list__item-checkbox"
                ${done ? ' checked' : ''} 
                type="checkbox">${text}<button class="list__item-deleteButton">Delete</button></li>`;
        })
        .join('');
    });
};
