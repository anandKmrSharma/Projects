import {appAction} from "./action"

const initState={
    count:0
}
const counterReducer= (state=initState, action)=>{
    switch(action.type){
        case appAction.INCREMENT_COUNT:
            return {
                ...state,
                count: state.count+ action.payload
            }
            case appAction.DECERMENT_Count:
                return{
                    ...state,
                    count: state.count-action.payload
                }
                default:
                    state;
    }
}

export {counterReducer}