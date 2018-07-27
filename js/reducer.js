import {

    addCollection,
    getCollection
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

        default:
            return state
    }
}