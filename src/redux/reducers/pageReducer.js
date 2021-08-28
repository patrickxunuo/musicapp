const IS_CHANGING = "IS_CHANGING"
const CHANGE_DONE = "CHANGE_DONE"
const initState = false

export const changePage = () => dispatch => {
  dispatch({
    type: IS_CHANGING,
  })
  setTimeout(() => {
    dispatch({
      type: CHANGE_DONE,
    })
  }, 1500)
}

export const pageReducer = (state = initState, action) => {
  switch (action.type) {
    case IS_CHANGING:
      return true
    case CHANGE_DONE:
      return false
    default:
      return state
  }
}

