import React from 'react'

export const TodoItem = ( { todo,onDeleteTodo,onToggleTodo } ) => {
  return (
    <li key={ todo.id } className="list-group-item d-flex justify-content-between">
        <span onClick={ () => onToggleTodo( todo.id ) } className={ `align-self-center ${ (todo.done) ? 'text-decoration-line-through' : '' }` }>{ todo.description }</span>
        <button className="btn btn-danger" onClick={ () => onDeleteTodo( todo.id ) } >Borrar</button>
    </li>
  )
}
