import renderTasks from './render';

const changeTask = (event) => {
  if (event.target.classList.contains('list__item-checkbox')) {
    fetch(
      `https://6384c3013fa7acb14fffc5eb.mockapi.io/tasks/${
        event.target.closest('.list__item').dataset.taskId
      }`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          done:
            event.target.closest('.list__item').dataset.taskDone === 'false',
          time:
            event.target.closest('.list__item').dataset.taskDone === 'false'
              ? new Date().getTime() - 1e6
              : new Date().getTime(),
        }),
      },
    ).then(() => renderTasks());
  }
  if (event.target.classList.contains('list__item-deleteButton')) {
    fetch(
      `https://6384c3013fa7acb14fffc5eb.mockapi.io/tasks/${
        event.target.closest('.list__item').dataset.taskId
      }`,
      { method: 'DELETE' },
    ).then(() => renderTasks());
  }
};
export default changeTask;
