import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app/';   // если не указать какой именно файл, по умолчанию будет искать index.js

ReactDOM.render(
  <App />, document.getElementById('root')
);
