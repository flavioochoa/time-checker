import { combineReducers } from 'redux';
import admin from './admin';
import timeClock from './timeClock';
import user from './access';

// Redux: Root Reducer
const rootReducer = combineReducers({
    admin,
    timeClock,
    user,
});
export default rootReducer;