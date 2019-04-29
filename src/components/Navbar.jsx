import React from "react"
import logo from "../images/reduxLogo.svg"

const Navbar = props => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <span className="navbar-brand text-dark border-0">
          <img src={ logo } style={{ height: "30px" }} className="d-inline-block mr-3" alt="" />
          Todo App | React & Redux
        </span>
      </div>
    </nav>
  )
}

export default Navbar
