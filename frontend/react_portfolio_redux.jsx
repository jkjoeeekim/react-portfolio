import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import Store from './store/store';
// import rootReducer from '../reducers/root_reducer';

document.addEventListener("DOMContentLoaded", function () {
  let root = document.getElementById("root");
  let store = Store();

  window.store = store;

  // for testing purpose, put methods onto windows. 
  // window.receiveTodo = receiveTodo;
  // window.receiveTodos = receiveTodos;

  // ReactDOM.render(<Root store={store} />, root);
});