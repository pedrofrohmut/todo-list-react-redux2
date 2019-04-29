import { connect } from "react-redux"
import Filters from "../components/Filters"
import { CHANGE_FILTER } from "../consts/actionTypes"

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFilterChange: filter => {
      const changeFilterAction = {
        type: CHANGE_FILTER,
        todosFilter: filter
      }
      dispatch(changeFilterAction)
    }
  }
}

const FilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters)

export default FilterContainer
