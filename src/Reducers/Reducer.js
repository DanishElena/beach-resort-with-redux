
const ROOMS_IS_LOADING = 'ROOMS_IS_LOADING';
const SET_ROOMS = 'SET_NOTES';
const GET_SLUG = 'GET_SLUG';

let initialState = {
    rooms: [],
    isLoading: false,
    slug: ""
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
        case GET_SLUG: {
            return {...state, slug: action.slug}
        }
        default:
            return state;
    }
}

// export const getNotesToNC = () => {
//     return async (dispatch) => {
//         dispatch(noteIsDisplaying(false));
//         let data = await notesAPI.getNotes()
//        dispatch(setNotes(data));
//         dispatch(noteIsDisplaying(true));
//     }
// }
//
// export const deleteNoteFromNC = (notes) => {
//     return (dispatch) => {
//          notesAPI.deleteNote(notes)
//         dispatch(removeNote(notes));
//     }
// }

export const roomIsLoading = (isLoading) => ({type: ROOMS_IS_LOADING, isLoading})
export const setRooms = (rooms) => ({type: SET_ROOMS, rooms })
export const getSlug = (slug) => ({type: GET_SLUG, slug})

export default reducer;