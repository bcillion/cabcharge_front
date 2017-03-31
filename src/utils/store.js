import { createStore, applyMiddleware } from 'redux';
import apiService from '../services/apiService';

import reducer from '../reducers/index';

const store = createStore(reducer, {}, applyMiddleware(apiService));

export default store;