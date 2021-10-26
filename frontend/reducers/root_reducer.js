import { combineReducers } from 'redux';
import splashReducer from './splash_reducer';
// import todosReducer from './todos_reducer';

const rootReducer = combineReducers({
    splash: splashReducer
});

export default rootReducer;