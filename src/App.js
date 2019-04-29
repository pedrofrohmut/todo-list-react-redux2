import React from "react"
import FilterContainer from "./containers/FilterContainer"
import TodoListContainer from "./containers/TodoListContainer"
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="container">
        {/*Add Form*/}
        {/*Filter Container*/}
        <FilterContainer />
        {/*Todo List Container*/}
        <TodoListContainer />
      </div>
    </div>
  )
}

export default App
