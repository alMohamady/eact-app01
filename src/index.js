import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MyApp, OtherApp } from './MyApp';
import SyaHi from './componenets/MyCom';
import reportWebVitals from './reportWebVitals';


 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
      <App />
      <hr />
      <MyApp />
      <OtherApp />
      <hr />
      <SyaHi name="Ahmed" age ="37"/>
      <SyaHi name="Mohamed" age ="40"/>
   </>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
