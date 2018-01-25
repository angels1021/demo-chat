
//This is then entry point for your app. Do as you wish.

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.css";
import { connectIO } from './utils/socket';
import { loadImages } from './utils/profileImages';
import configureStore from './store';
import App from "./containers/App/index";

const store = configureStore();

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById("root")
);
//connecting to Socket.IO chat server
// const socket = io("https://spotim-demo-chat-server.herokuapp.com");
connectIO();
loadImages();
