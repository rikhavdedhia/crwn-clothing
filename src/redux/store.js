import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import combineReducers from './root-reducer.js';

const middlewares = [logger];

const store = createStore(combineReducers, applyMiddleware(...middlewares));

export default store;