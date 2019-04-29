import React from "react"
import { SHOW_ALL, SHOW_COMPLETED, SHOW_INCOMPLETE } from "../consts/strings"

const Filters = props => {
  const { onFilterChange } = props

  const handleFilterChange = e => {
    const filterName = e.target.value
    onFilterChange(filterName)
  }

  return (
    <div className="filterWrapper">
      <label>
        <input type="radio" name="filter" onChange={ handleFilterChange } value={ SHOW_INCOMPLETE } />
        Show Incomplete
      </label>
      <label>
        <input type="radio" name="filter" onChange={ handleFilterChange } value={ SHOW_COMPLETED } />
        Show Completed
      </label>
      <label>
        <input type="radio" name="filter" onChange={ handleFilterChange } value={ SHOW_ALL } />
        Show All
      </label>

    </div>
  )
}

export default Filters
