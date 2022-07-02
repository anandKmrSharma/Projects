

export const todosActions= {

    GET_TODO_REQUEST: "GET_TODO_REQUEST",
    GET_TODO_SUCCESS: "GET_TODO_SUCCESS",
    GET_TODO_FAILURE: "GET_TODO_FAILURE"

};

// Action createor

export const getTodosRequest= ()=>({
   type: todosActions.GET_TODO_REQUEST
});

export const getTodosSuccess= (data)=>({
    type: todosActions.GET_TODO_SUCCESS,
    payload: data
 });

 export const getTodosFailure= ()=>({
    type: todosActions.GET_TODO_FAILURE
 });