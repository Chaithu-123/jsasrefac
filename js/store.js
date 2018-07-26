import { createStore } from "redux"
import collection from "./reducer"



const state = []


let stateList = []


export const store = createStore(collection, state)
store.subscribe(renderCollection)


export const getCollection = (state, action) => {
    stateList = action.dataItem
    return action.dataItem
}

export const addCollection = (state, action) => {
    console.log(state)
    if (state.length === 0) {
        stateList.push(state)
        return [
            action.dataItem,
        ]
    } else {
        stateList.push(state)
        return [
            ...state,
            {
                "id": action.dataItem.id,
                "Name": action.dataItem.Name,
                "Description": action.dataItem.Description,
                "Movies": action.dataItem.Movies,
            },
        ]
        console.log("added")
    }
}

export const editCollection = (state, action) => {
    stateList.push(state)
    return [
        ...state,
        {
            "id": action.dataItem.id,
            "Name": action.dataItem.Name,
            "Description": action.dataItem.Description,
            "Movies": action.dataItem.Movies,
        },
    ]
}

export const deleteCollection = (state, action) => {}

export const getCollectionStateData = () => {
    return stateList
}