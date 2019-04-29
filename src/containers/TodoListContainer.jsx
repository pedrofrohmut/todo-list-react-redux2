import { connect } from "react-redux"
import TodoList from "../components/TodoList"
import { SHOW_ALL, SHOW_COMPLETED, SHOW_INCOMPLETE } from "../consts/strings"
import { TOGGLE_TODO_AS_COMPLETED } from "../consts/actionTypes"

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.isCompleted)
    case SHOW_INCOMPLETE:
      return todos.filter(todo => !todo.isCompleted)
    default:
      return todos
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.todosFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCheck: todoId => {
      const toggleTodoAction = {
        type: TOGGLE_TODO_AS_COMPLETED,
        id: todoId
      }
      dispatch(toggleTodoAction)
    }
  }
}

// Connects returns a high order component of TodoList that interacts with Redux Store
const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListContainer
