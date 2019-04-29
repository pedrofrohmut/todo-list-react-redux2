import React, { Component } from "react"
import { ADD_TODO } from "../consts/actionTypes"

class AddTodo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todoText: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  render() {
    return (
      <form className="my-3" onSubmit={ this.handleSubmit }>
        <span className="text-dark h3">Add Todo</span>
        <div className="form-row">
          <div className="col-7">
            <input type="text" name="todoText" value={ this.state.todoText } onChange={ this.handleChange } 
              className="form-control mr-3" placeholder="Todo Text" autoFocus />
          </div>
          <div className="col">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </div>
      </form>
    )
  }

  handleSubmit(e) {
    e.preventDefault()
    const text = this.state.todoText
    const newTodo = this.createTodo(text)
    this.props.onAddTodo(newTodo)
    this.setState({
      todoText: ""
    })
  }

  createTodo(todoText) {
    const todos = this.props.todos
    let biggestId = todos[0].id
    todos.forEach(todo => biggestId = (biggestId > todo.id) ? biggestId : todo.id)
    return {
      id: biggestId + 1,
      text: todoText,
      isCompleted: false
    }
  }

  handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }
}

export default AddTodo
