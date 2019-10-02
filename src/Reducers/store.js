import {reducer as formReducer} from "redux-form";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import featuredRoomsReducer from "./FeaturedRoomsReducer";
import singleRoomsReducer from "./SingleRoomsReducer";
import forFormReducer from "./RoomFilterFormReducer";



let reducers = combineReducers({
    featuredRoomsRed: featuredRoomsReducer,
    singleRoomsRed: singleRoomsReducer,
    forformRed: forFormReducer,
    form: formReducer
});


const store = createStore(reducers, (applyMiddleware(thunkMiddleware)))
window.__store__ = store;


export default store;