import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/App.test';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Store } from './store';

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
