const TaskIds = {
  task25: 'task25',
  task28: 'task28',
  task1: 'task1',
  task4: 'task4',
  task7: 'task7',
}

const setDisableForm = (form, value) => {
  const submitTrigger = form.querySelector('[type="submit"]');

  if (submitTrigger) {
    submitTrigger.disabled = value;
  }
}

const defaultHandleTask = (data, error, formId, labelResultId) => {
  const form = document.getElementById(formId);
  const labelResult = document.getElementById(labelResultId);

  setDisableForm(form, false);

  if (error) {
    labelResult.textContent = error;
    return;
  }

  labelResult.textContent = data.join(', ');
}

const handleTask25 = (data, error) => defaultHandleTask(data, error, 'task25', 'task25Result');
const handleTask28 = (data, error) => defaultHandleTask(data, error, 'task28', 'task28Result');
const handleTask1 = (data, error) => defaultHandleTask(data, error, 'task1', 'task1Result');
const handleTask4 = (data, error) => defaultHandleTask(data, error, 'task4', 'task4Result');
const handleTask7 = (data, error) => {
  const form = document.getElementById('task7');
  const labelResult = document.getElementById('task7Result');

  if (error) {
    alert(error);
    return;
  }

  setDisableForm(form, false);

  const values = [
    ...labelResult.textContent.split(', ')
      .filter(value => value !== '' && Number.isFinite(Number(value))),
    data,
  ];
  labelResult.textContent = values.join(', ');
}

const socket = new WebSocket(`ws://${window.location.host}/ws`);

socket.onopen = () => {
  alert('Соединение установлено');
}

socket.onclose = () => {
  alert('Соединение прервано');
}

socket.onmessage = (ev) => {
  const parsedData = JSON.parse(ev.data);
  const { data, taskId, error } = parsedData;

  console.log('parsedData', parsedData);

  switch (taskId) {
    case TaskIds.task25:
      handleTask25(data, error);
      break;

    case TaskIds.task28:
      handleTask28(data, error);
      break;

    case TaskIds.task1:
      handleTask1(data, error);
      break;

    case TaskIds.task4:
      handleTask4(data, error);
      break;

    case TaskIds.task7:
      handleTask7(data, error);
      break;

    default:
      break;
  }
}

Array.from(document.forms).forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    setDisableForm(form, true);

    const formData = {};

    Array.from(form.elements).forEach(({ name, value }) => {
      if (name && value) {
        formData[name] = value;
      }
    });

    const message = {
      taskId: form.id,
      data: formData,
    }

    console.log('Отправленные данные', message);

    socket.send(JSON.stringify(message));
  });
});
