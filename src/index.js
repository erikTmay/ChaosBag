import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import chaosBagReducers from './reducers/reducers';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

let store = createStore(chaosBagReducers)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
