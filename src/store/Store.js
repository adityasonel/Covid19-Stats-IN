import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import dataReducer from './Reducer';

const reducers = combineReducers({
  dataReducer: dataReducer,
});

let configureStore = () => {
  return createStore(reducers);
};

export default compose(applyMiddleware(thunk))(configureStore);
