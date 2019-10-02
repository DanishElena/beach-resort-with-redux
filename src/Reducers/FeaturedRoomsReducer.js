import {roomsAPI} from "../api";

const ROOMS_IS_LOADING = 'ROOMS_IS_LOADING';
const SET_ROOMS = 'SET_NOTES';
const SET_FEATURED_ROOMS = "SET_FEATURED_ROOMS"



let initialState = {
    rooms: [],
    isLoading: false,
    featured: "",

};

const featuredRoomsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ROOMS_IS_LOADING: {
            return {...state, isLoading: action.isLoading}
        }
        case SET_ROOMS: {
            return  { ...state,
                rooms: action.rooms
            }
        }
        case SET_FEATURED_ROOMS: {
            return  { ...state,
                rooms: state.rooms.filter(room => room.featured === true)
            }
       }

        default:
            return state;
    }
}

export const getFeaturedRooms = () => {
    return async (dispatch) => {
        dispatch(roomIsLoading(true));
        let data = await roomsAPI.getRooms()
       dispatch(setRooms(data));
        dispatch(setFeaturedRooms(data))
        dispatch(roomIsLoading(false));
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
export const setFeaturedRooms = (rooms) => ({type: SET_FEATURED_ROOMS, rooms })


export default featuredRoomsReducer;