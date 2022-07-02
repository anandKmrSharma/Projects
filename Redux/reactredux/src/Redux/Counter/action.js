

const appAction= {
    
    INCREMENT_COUNT: INCREMENT_COUNT,
    DECREMENT_COUNT: DECREMENT_COUNT,   
}

// action createor
export const incrementCountAction=(count)=>{
    return {
        type:appAction.appAction.INCREMENT_COUNT,
        payload: count
    };
}