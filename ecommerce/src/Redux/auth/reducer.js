
import {
    SIGIN_REQUEST,
    SIGIN_SUCCESS,
    SIGIN_FAILURE
    
} from './actions'



const initialState={
    auth: false,
    token:'',
    error:'error value'
}



const authReducer= (state=initialState, action)=>{
    const {type,payload}= action;

    switch(type){
        case SIGIN_REQUEST:
            return{
                auth: false,
                token:'',
                error:'false'
            };
            case SIGIN_SUCCESS:
                return{
                    auth: true,
                    token:payload,
                    error:'false'
                };
                case SIGIN_FAILURE:
                    return{
                        auth: false,
                        error:payload
                    };

                    default:
                    return state
    }

}                    


export {authReducer}

