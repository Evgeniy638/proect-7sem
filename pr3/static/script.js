const disableForm = () => {

}

const socket = new WebSocket(`ws://${window.location.host}/ws`);

socket.onopen = () => {
  alert('Соединение установлено');
  socket.send(JSON.stringify('Привет'));
}

socket.onclose = () => {
  alert('Соединение прервано')
}

socket.onmessage = (ev) => {
  console.log('onmessage', ev.data);
}

console.log("script");

