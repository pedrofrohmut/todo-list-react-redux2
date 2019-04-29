import { SHOW_ALL } from "../consts/strings"
import { CHANGE_FILTER, ADD_TODO, TOGGLE_TODO_AS_COMPLETED } from "../consts/actionTypes"
  
const initialState = {
  todos: [
    { id: 14, text: "Dummy the Villa", isCompleted: false },
     { id: 4, text: "Get Lots of Money", isCompleted: true },
     { id: 5, text: "Conquer The World!", isCompleted: false },
     { id: 2, text: "Buy Some Milk", isCompleted: true },
     { id: 23, text: "Orc the way out", isCompleted: false },
     { id: 1, text: "Hello World", isCompleted: false },
     { id: 3, text: "Fight The Ninjas", isCompleted: false }
   ],
   todosFilter: SHOW_ALL
 }

const appReducer = (state = initialState, action) => {
  if (action.type === CHANGE_FILTER) {
    return {
      ...state,
      todosFilter: action.todosFilter
    }
  }

  if (action.type === ADD_TODO) {
    const newTodo = action.todo 
    return {
      ...state,
      todos: [ ...state.todos, newTodo ]
    }
  }
  
  if (action.type === TOGGLE_TODO_AS_COMPLETED) {
    const todos = [ ...state.todos ].map(todo => {
      if (todo.id === action.id) {
        return { ...todo, isCompleted: !todo.isCompleted }
      } else {
        return todo
      }
    })
    return {
      ...state,
      todos: todos
    }
  }
  
  if (action.state === undefined) {
    return state
  }
}

export default appReducer
