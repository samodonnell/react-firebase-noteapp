import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyARULYLFl94OutNba3Yde2XgfwddBoi16w',
  authDomain: 'react-notes-app-c072e.firebaseapp.com',
  databaseURL: 'https://react-notes-app-c072e.firebaseio.com',
  projectId: 'react-notes-app-c072e',
  storageBucket: 'react-notes-app-c072e.appspot.com',
  messagingSenderId: '321553553030',
  appId: '1:321553553030:web:4a17e49a451e58eb0a6307',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
