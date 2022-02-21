import { SEARCH } from "./actionTypes"

export const SearchResults = (payload)=>{
    return{
        type:SEARCH,
        payload
    }
}