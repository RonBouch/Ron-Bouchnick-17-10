import allReducers from './reducers'
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const store = createStore(allReducers,applyMiddleware(thunkMiddleware,logger));
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  



export default store;