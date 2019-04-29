import React from "react"
import Todo from "./Todo"

const TodoList = props => {  
  
  const { todos, onCheck } = props

  return (
    <ul className="list-group text-white">
      {todos.map((todo, i) => 
        <Todo key={ i } todo={ todo } onCheck={ onCheck } />)}
    </ul>
  )

}

export default TodoList
