import { connect } from "react-redux"
import AddTodo from "../components/AddTodo"
import { ADD_TODO } from "../consts/actionTypes"

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: newTodo => {
      const addTodoAction = {
        type: ADD_TODO,
        todo: newTodo
      }
      dispatch(addTodoAction)
    }
  }
}

const AddTodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)

export default AddTodoContainer
