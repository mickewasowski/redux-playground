import { createStore, combineReducers } from 'redux';
import changeNameReducer from './reducers/changeNameReducer';

let allReducers = combineReducers({
    changeNameReducer,
});

export const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);