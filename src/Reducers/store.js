import {reducer as formReducer} from "redux-form";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./Reducer";



let reducers = combineReducers({
    roomsRed: reducer,
    form: formReducer
});


const store = createStore(reducers, (applyMiddleware(thunkMiddleware)))
window.__store__ = store;


export default store;