const socket = io("http://localhost");
socket.on("connect", () => {
  socket.emit('message', 'Hello server!', 'Hello again, server!', { anio: 2021 }, function (response) {
    console.log(response);
    document.getElementById('message').innerHTML = response;
  })
});