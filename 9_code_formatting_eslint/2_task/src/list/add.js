import { inputElem } from './elements';
import renderTasks from './render';

const addTask = () => {
  if (!inputElem.value) {
    return;
  }
  fetch('https://6384c3013fa7acb14fffc5eb.mockapi.io/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: inputElem.value,
      done: false,
      time: new Date().getTime(),
    }),
  }).then(() => renderTasks());
  inputElem.value = '';
};
export default addTask;
