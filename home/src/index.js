import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeRouter from './HomeRouter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HomeRouter />, document.getElementById('root'));
registerServiceWorker();
