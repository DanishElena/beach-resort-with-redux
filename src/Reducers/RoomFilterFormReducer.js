import {roomsAPI} from "../api";
import {setRooms} from "./FeaturedRoomsReducer";

const FILTER_BY_TYPE = 'FILTER_BY_TYPE';
const FILTER_BY_CAPACITY = 'FILTER_BY_CAPACITY';
const FILTER_BY_PRICE = 'FILTER_BY_PRICE';
const FILTER_BY_SIZE = 'FILTER_BY_SIZE';
const FILTER_BY_BREAKFAST = 'FILTER_BY_BREAKFAST';
const FILTER_BY_PETS = 'FILTER_BY_PETS';


let initialState = {
    rooms: [],
    types: "",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    size: 0,
    breakfast: false,
    pets: false
};

const forFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_BY_TYPE:
            return { ...state,
                rooms: state.rooms.filter(room => room.types === action.types)
            }
        case FILTER_BY_CAPACITY:
            return { ...state,
                rooms: state.rooms.filter(room => room.capacity >= action.capacity)
            }
        case FILTER_BY_PRICE :
            return { ...state,
                rooms: state.rooms.filter(room => room.price <= action.price)
            }
        case FILTER_BY_SIZE:
            let maxSize = Math.max(state.rooms.map(item => item.size))
            let minSize = state.rooms.size;
            return { ...state,
                rooms: state.rooms.filter(room => room.action.size >= minSize && room.action.size <= maxSize)
            }
        case FILTER_BY_BREAKFAST :
            return { ...state,
                rooms: state.rooms.filter(room => room.breakfast === true )
            }
        case FILTER_BY_PETS :
            return { ...state,
                rooms: state.rooms.filter(room => room.pets === true  )
            }
        default:
            return state;

    }
}


export const filterRooms = (rooms, types, capacity, price, size, breakfast, pets) => {
    return async (dispatch) => {
        let rooms = await roomsAPI.getRooms()
        dispatch(setRooms(rooms));
        dispatch(filterByType(rooms, types));
        dispatch(filterByCapacity(rooms, capacity))
        dispatch(filterByPrice(rooms, price))
        dispatch(filterBySize(rooms, size))
        dispatch(filterByBreakfast(rooms, breakfast))
        dispatch(filterByPets(rooms, pets))
    }
}

export const filterByType = (rooms, types) => ({type: FILTER_BY_TYPE, rooms, types});
export const filterByCapacity = (rooms, capacity) => ({type: FILTER_BY_CAPACITY, rooms, capacity});
export const filterByPrice = (rooms, price) => ({type: FILTER_BY_PRICE, rooms, price});
export const filterBySize = (rooms, size) => ({type: FILTER_BY_SIZE, rooms, size});
export const filterByBreakfast = (rooms, breakfast) => ({type: FILTER_BY_BREAKFAST, rooms, breakfast});
export const filterByPets = (rooms, pets) => ({type: FILTER_BY_TYPE, rooms, pets});

export default forFormReducer;


