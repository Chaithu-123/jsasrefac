import { createStore } from "redux"
import collection from "./reducer"
import { renderCard } from './userCollection/userCollectionController'


let state = []


let stateList = []


export const store = createStore(collection, state)
store.subscribe(() => {
    state = store.getState()
    console.log(state)
    renderCard(store.getState())
})

export const getCollection = (state, action) => {
    stateList = action.details
    return action.details
}
export const addCollection = (state, action) => {
    if (state.length === 0) {
        stateList.push(state)
        return [
            action.details,
        ]
    } else {
        stateList.push(state)
        return [
            ...state,
            {

                "Name": action.details.Name,
                "Description": action.details.Desc,
                "Movies": action.details.Movies,
            },
        ]
    }
}

export const addMovieToCollection = (state, action) => {
    const curIndex = state.findIndex((x) => { x.id == action.details.id })
    state[curIndex] = action.details
    return state
}

export const delMovieFromCollection = (state, action) => {

}

export const deleteCollection = (state, action) => {

}