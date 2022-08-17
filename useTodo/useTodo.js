
import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";




const init = () =>{
    return JSON.parse( localStorage.getItem('todos')) || [];
}


export const useTodo = () => {
  
    const [ todos, dispatch ] = useReducer( todoReducer, [], init );


    useEffect(() => {
        localStorage.setItem( 'todos', JSON.stringify( todos )) || [];
    }, [todos])
    


    const handleNewTodo = ( todo ) => {
        dispatch({ type: '[TODO] Add Todo', payload: todo });
    }


    const handleDelete = ( id ) =>{
        dispatch({ type: '[TODO] Add Delete', payload: id });
    }


    const handleToggleTodo = ( id ) =>{
        dispatch({ type: '[TODO] Toggle', payload: id });
    }
  
    return {
        todos,
        handleNewTodo,
        handleDelete,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => todo.done === false ).length
    }
}
