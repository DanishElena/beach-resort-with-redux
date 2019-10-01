import {roomsAPI} from "../api";

const ROOMS_IS_LOADING = 'ROOMS_IS_LOADING';
const SET_ROOMS = 'SET_NOTES';


let initialState = {
    rooms: [],
    isLoading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ROOMS_IS_LOADING: {
            return {...state, isLoading: action.isLoading}
        }
        case SET_ROOMS: {
            return  { ...state,
                rooms: action.rooms
            }
        }

        default:
            return state;
    }
}

export const getRoomsToRC = () => {
    return async (dispatch) => {
        dispatch(roomIsLoading(true));
        let data = await roomsAPI.getRooms()
       dispatch(setRooms(data));
        dispatch(roomIsLoading(false));
    }
}



export const roomIsLoading = (isLoading) => ({type: ROOMS_IS_LOADING, isLoading})
export const setRooms = (rooms) => ({type: SET_ROOMS, rooms })


export default reducer;