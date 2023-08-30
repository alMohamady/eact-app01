import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MyApp, OtherApp } from './MyApp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function tick() {
 const element = (
    <div>
        <h4>Time Now</h4>
        <h5> { new Date().toLocaleTimeString() } </h5>
    </div>
 )
 return root.render(
    <>
       <App />
       <hr />
       <MyApp />
       <OtherApp />
       <hr />
       { element}
    </>
 );
}

setInterval(tick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
