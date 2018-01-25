import io from 'socket.io-client';

const socket = io('https://spotim-demo-chat-server.herokuapp.com');

export const postMessage = (message) => {
  socket.emit('spotim/chat', message);
};

export const subscribeToMessages = (cb) => {
  socket.on('spotim/chat', cb);
};

export const connectIO = () => {
  socket.on("connect", () => {
    console.log("connected to chat server!");
  });
  socket.on("disconnect", () => {
    console.log("disconnected from chat server!");
  });
};
