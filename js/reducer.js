import {
    addCollection,
    getCollection,
    editCollection,
    deleteMovie
} from "./store"

export default function collection(state, action) {
    switch (action.type) {
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