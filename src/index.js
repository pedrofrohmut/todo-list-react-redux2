// React
import React from "react"
import ReactDOM from "react-dom"

// Redux / React-Redux
import { Provider } from "react-redux"
import { createStore } from "redux"
import appReducer from "./reducers/appReducer"

// React Components
import App from "./App"

import "./index.css"

// Creates An Redux Store with the App Reducer
const store = createStore(appReducer)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, 
  document.getElementById("root")
)
