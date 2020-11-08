import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const items = [
  {
    "id": 0,
    "name": "Notebook",
    "price": 12500, 
  },
  {
    "id": 1,
    "name": "Computer",
    "price": 25000, 
  },
  {
    "id": 2,
    "name": "CPU",
    "price": 3000, 
  },
  {
    "id": 3,
    "name": "GPU",
    "price": 9000, 
  },
  {
    "id": 4,
    "name": "Smartphone",
    "price": 32000, 
  }
] 

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );



ReactDOM.render(
  <App items={items} />,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
