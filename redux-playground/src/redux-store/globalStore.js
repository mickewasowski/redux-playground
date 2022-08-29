import { createStore, combineReducers } from 'redux';
import changeNameReducer from './reducers/changeNameReducer';
import todoReducer from './reducers/todoReducer';

let allReducers = combineReducers({
    changeNameReducer,
    todoReducer,
});

export const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);