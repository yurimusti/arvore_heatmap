import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { init } from '@rematch/core';
import App from './App';
import models from './models';
import 'antd/dist/antd.css';

const store = init({
    models
})


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,document.getElementById('root'));
