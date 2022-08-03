import  Axios  from "axios"


export const SIGIN_REQUEST= 'SIGIN_REQUEST'
export const SIGIN_SUCCESS= 'SIGIN_SUCCESS'
export const SIGIN_FAILURE= 'SIGIN_FAILURE'



const siginRequest= ()=>{
    return {
    type: SIGIN_REQUEST
    }
}

const siginSuccess= (payload)=>{
    return {
    type: SIGIN_SUCCESS,
    payload
    }
}

const siginFailure= (payload)=>{
    return {
    type: SIGIN_FAILURE,
    payload
    }
}

const signin= (payload) => (dispatch) => {
    dispatch(siginRequest())
    Axios.post("api/login", payload, {baseURL:'https://reqres.in'})
    .then((res)=>dispatch(siginSuccess(res.data)))
    .catch((err)=>dispatch(siginFailure(err.data)))
}


export {signin}