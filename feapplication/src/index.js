import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import './index.css';
import axios from 'axios'
import App from './App';

axios.defaults.baseURL = 'https://api-test.innoloft.com';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);