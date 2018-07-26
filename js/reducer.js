import {
    addCollection,
    getCollection,
    editCollection,
    deleteMovie
} from "./store"

let states = []
export default function collection(state = { 'popularMovies': [], "searchResults": [] }, action) {
    switch (action.type) {
        case "POPULAR_MOVIE":
            const s = {...state.popularMovies, ...action.popularMovies }
            states.push(s);
            return s;
        case "ADD_COLLECTION":
            return addCollection(state, action)

        case "GET_COLLECTION":
            return getCollection(state, action)

        case "EDIT_COLLECTION":
            return editCollection(state, action)

        case "DELETE_COLLECTION":
            return deleteMovie(state, action)

        default:
            return state
    }
}