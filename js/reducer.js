import {
    addMovieToCollection,
    getCollection,
    editCollection,
    addCollection
} from "./store"

let states = []
export default function collection(state = { 'popularMovies': [], "searchResults": [] }, action) {
    switch (action.type) {
        case "POPULAR_MOVIE":
            const s = { movies: [...state.popularMovies, ...action.popularMovies] }
            states.push(s);
            return s;
        case "ADD_MOVIE":
            console.log("gheloo")
            return addMovieToCollection(state, action)

        case "GET_COLLECTION":
            return getCollection(state, action)

        case "EDIT_COLLECTION":
            return editCollection(state, action)

        case "ADD_COLLECTION":
            return addCollection(state, action)

        default:
            return state
    }
}