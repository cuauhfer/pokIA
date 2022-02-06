import { createStore, combineReducers } from "redux";
import { mapReducer } from '../reducers/mapReducer';

const reducers = combineReducers({
    map: mapReducer
});

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);