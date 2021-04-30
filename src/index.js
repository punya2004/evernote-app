import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase'

// const firebase = require('firebase');
// require('firebase/firestore');

firebase.initializeApp({
  apiKey: "AIzaSyAs8FMx0tQ1szi6Uc8KzyM22tiE7EotKJA",
  authDomain: "keep-notes-56992.firebaseapp.com",
  projectId: "keep-notes-56992",
  storageBucket: "keep-notes-56992.appspot.com",
  messagingSenderId: "858667205120",
  appId: "1:858667205120:web:c1e7bf1d5fb37974a4cee5"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
