import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';
import history from './services/history';
import Routes from './routes';

const App: React.FC = () => (
  <Router history={history}>
    <Routes />
    <ToastContainer autoClose={3000} />
  </Router>

);

export default App;
