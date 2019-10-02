import {roomsAPI} from "../api";
import {roomIsLoading, setRooms} from "./FeaturedRoomsReducer";


const SET_SINGLE_ROOMS = "SET_SINGLE_ROOMS"


let initialState = {
    rooms: [],
};

const singleRoomsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SINGLE_ROOMS: {
            return  { ...state,
                rooms: action.rooms
            }
        }
        default:
            return state;
    }
}

export const getRoomsToSR = (slug) => {
    return async (dispatch) => {
        //dispatch(roomIsLoading(true));
        let data = await roomsAPI.getSingleRoom(slug)
       // dispatch(setRooms(data));
        dispatch(setSingleRooms(data));
    //    dispatch(roomIsLoading(false));

    }
}

export const setSingleRooms = (rooms) => ({type: SET_SINGLE_ROOMS, rooms })

export default singleRoomsReducer;