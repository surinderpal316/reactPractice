import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todo:[{
            id: " ",
            todo: "TodoMsg",
            completed:false,        
        }
    ],
    addTodo:(todo)=> {},
    updateTodo:(id)=>{},
    deleteTodo:(id,Todo) => {},
    toggleComplete:(id)=> {},
})

export  const useTodo = () => {
    return useContext(TodoContext)
}
 
export const TodoProvider = TodoContext.Provider