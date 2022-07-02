import { todosActions } from "./action";

const initState={
    loading: false,
    todo:[],
    error: false
}
export const todoReducer= (state=initState, action)=>{

    switch(action.type){
        case GET_TODO_REQUEST:
            return{
                state
            }
            case GET_TODO_SUCCESS:
                return { 
                    state
               }
               case GET_TODO_FAILURE:
                   return {
                       state
                   }
                   default :
                   return{
                       state
                   }
    }
}