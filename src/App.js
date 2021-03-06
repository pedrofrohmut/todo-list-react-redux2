import React from "react"
import Navbar from "./components/Navbar"
import AddTodoContainer from "./containers/AddTodoContainer"
import FilterContainer from "./containers/FilterContainer"
import TodoListContainer from "./containers/TodoListContainer"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <AddTodoContainer />
        <FilterContainer />
        <TodoListContainer />
      </div>
    </div>
  )
}

export default App
