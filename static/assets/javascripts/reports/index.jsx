/* eslint no-unused-vars: 0 */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { appSetup } from '../common';

import './main.css';

appSetup();

const reportsViewContainer = document.getElementById('appp');

ReactDOM.render(
  <h1>模块功能建设中...</h1>,
  reportsViewContainer
);