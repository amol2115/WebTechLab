import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import VirtualDOMExample from './virtual-dom';
import UseRefDemo from './useRefDemo';
import Counter from './useEffectDemo';
import Message from './message';
import LifecycleDemo from './LifeCycleDemo';
import CounterUseState from './useStateDemo';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Message name='AP' message='How are you?'/> */}
    <App /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
