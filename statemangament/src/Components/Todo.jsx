import React, { useState } from "react";
import {Todoinput} from "./Todoinput"
import {TodoItems} from "./TodoItems"
import {nanoid} from "nanoid"
const Todo=()=>{
      
      const [task,setTask]= useState([])

      const getData=(data)=>{
            console.log("get data", data);

            const payload= {
                  title:data,
                  status: false,
                  id:nanoid(7)
            }
            setTask([...task,data]);
      }

     
      
      console.log("task",task);
      return<>
         <Todoinput getData= {getData}/>
                  <h3>list items need to do :-
               {
                          task.map((e)=> 
                                <TodoItems key= {e.id} {...e}/> 
                          )
               }


                    

         </h3>
      </>
}
export {Todo}