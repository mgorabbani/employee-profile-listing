import reducers from './reducers'
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

export default  store = createStore(reducers,{},applyMiddleware(ReduxThunk,logger));