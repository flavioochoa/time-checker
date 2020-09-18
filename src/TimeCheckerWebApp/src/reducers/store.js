import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../Sagas';
import rootReducer from './index';

const initialState = {};

//SAGAS CONFIG
const sagaMiddleware = createSagaMiddleware();
/*
  Descomentar la linea del enhancers para usar el plugin de redux en chrome
*/
const enhancers = [
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
];
const middleware = [sagaMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(rootReducer, initialState, composedEnhancers);

export { store };
sagaMiddleware.run(rootSaga);
