import React from "react"
import PropTypes from "prop-types"

const Todo = props => {

  const { onCheck, todo } = props

  const getLiCompletedClass = isCompleted => (
    isCompleted
      ? "list-group-item is-todo-completed"
      : "list-group-item"
  )

  return (
    <li className={ getLiCompletedClass(todo.isCompleted) }>
      <label>
        <input type="checkbox" onChange={ () => onCheck(todo.id) } checked={ todo.isCompleted } />
        <span className="mx-3">{ todo.text }</span>
      </label>
    </li>
  )
}

export default Todo
