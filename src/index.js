import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store'
import {addPost} from './redux/state'
import {updateNewPostText} from './redux/state'
import {subscriber} from './redux/state'

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';



  
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
      <App store={store} />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
