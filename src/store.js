import { createStore, combineReducers, applyMiddleware } from 'redux';

/* middleware */
import logger from 'redux-logger';

/* reducer */
import reducers from 'app/src/reducers';

/* create store */
const store = createStore(
  combineReducers({ ...reducers }),
  applyMiddleware(process.env.NODE_ENV === 'development' && logger),
);

export default store;
