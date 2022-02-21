import { SEARCH } from "./actionTypes";

const initState = {
    results:[]
};

export const reducer = (state = initState , {type,payload})=>{
    switch(type){
        case SEARCH:{
            return{
                ...state,
                results:[...state.results,payload]
            }
        }
        default:
            return state;
    }
}