const ADD_TICKET = "ADD_TICKET"

const initTicket = []

export const addTicket = newTicket => dispatch => {
  dispatch({
    type: ADD_TICKET,
    newTicket
  })
}

export const ticketReducer = (state = initTicket, action) => {
  switch (action.type) {
    case ADD_TICKET:
      return [...state, action.newTicket]
    default:
      return state
  }
}
