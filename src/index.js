import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/APP';
import reducer from './reducers/index';
import apiService from './services/apiService';
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'PRODUCTION';

const store = createStore(reducer, {}, applyMiddleware(apiService));

const root = document.getElementById('root');


const render = () => ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, root
)

render();

