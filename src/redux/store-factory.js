import { createStore, combineReducers, applyMiddleware } from 'redux';
import defaultData from './initialState.json';
import { selectedSubcategory, data, fetchingData } from './reducers';

let store;

const logger = store => next => action => {
  console.groupCollapsed('dispatching', action.type);
  console.log('prev state:', store.getState());
  console.log('action: ', action);
  next(action);
  console.log('next state:', store.getState());
  console.groupEnd();
};

const storeFactory = (initialState = defaultData) => {
  store = createStore(
    combineReducers({ selectedSubcategory, fetchingData, data }),
    initialState,
    applyMiddleware(logger));
  console.log('new store: ', store.getState());
  return store;
};

export default storeFactory;

