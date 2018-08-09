import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Chat from './Chat';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import store from "./store";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Chat />
  </Provider>,
  rootElement
);

