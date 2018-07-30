import {

    addCollection,
    getCollection,
    addMovieToCollection,
    delMovieFromCollection
} from "./store"


export default function collection(state = [], action) {
    switch (action.type) {
        case "GET_COLLECTION":
            return getCollection(state, action)
        case "POPULAR_MOVIE":
            const s = { movies: [...state.popularMovies, ...action.popularMovies] }
            states.push(s);
            return s;

        case "ADD_COLLECTION":
            return addCollection(state, action)

        case "ADD_MOVIE":
            return addMovieToCollection(state, action)
        default:
            return state

        case "DEL_MOVIE":

        case "DEL_COLLECTION":

    }
}