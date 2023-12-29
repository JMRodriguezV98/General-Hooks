import { useEffect, useReducer } from "react"
import { todoReducer } from '../08-useReducer/todoReducer'

const initialState = [];

const init = () => {
    return JSON.parse( localStorage.getItem( 'todos' ) ) || [];
}

export const useTodos = () => {
    
    const [ todos, dispatch ] = useReducer( todoReducer,initialState,init );
    
    const todosCount = todos.length;
    const todosPending = todos.filter( todo => !todo.done ).length;

    useEffect(() => {
        localStorage.setItem( 'todos',JSON.stringify( todos ) );
    }, [ todos ])

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    return{
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount,
        todosPending
    }
}