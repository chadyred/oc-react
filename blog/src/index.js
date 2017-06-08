import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

var name = "bar";

ReactDOM.render(<App name={name} />, document.getElementById('root'));
registerServiceWorker();