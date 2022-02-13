import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { App } from './components';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ToastProvider autoDismiss autoDismissTimeout={2000} placement='top-right'>
        <App />
      </ToastProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

