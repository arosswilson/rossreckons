import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import NavBar from './components/NavBar';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NavBar delta={5}/>, document.getElementById('header'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
