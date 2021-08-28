const SHOW_CART = "SHOW_CART"
const HIDE_CART = "HIDE_CART"
const ADD_ITEM = "ADD_ITEM"
const ADD_QUANTITY = "ADD_QUANTITY"
const DES_QUANTITY = "DES_QUANTITY"
const REMOVE_ITEM = "REMOVE_ITEM"
const CHANGE_TOTAL = "CHANGE_TOTAL"
const ADD_TOTAL_QUANTITY = "ADD_TOTAL_QUANTITY"
const DES_TOTAL_QUANTITY = "DES_TOTAL_QUANTITY"

const initCart = {
  show: false,
  total: 0,
  items: [],
  totalQuantity: 0,
}

export const hideCart = () => dispatch => {
  dispatch({
    type: HIDE_CART
  })
}

export const showCart = () => dispatch => {
  dispatch({
    type: SHOW_CART
  })
}

export const addNewItemToCart = (item) => dispatch => {
  const quantity = 1
  const newItem = {item, quantity}
  const total = item.price
  dispatch({
    type: ADD_ITEM,
    newItem,
  })
  dispatch({
    type: CHANGE_TOTAL,
    total
  })
  dispatch({
    type: SHOW_CART,
  })
  dispatch({
    type: ADD_TOTAL_QUANTITY,
    quantity
  })
}

export const removeItem = (item, quantity) => dispatch => {
  const total = -1 * quantity * item.price
  dispatch({
    type: REMOVE_ITEM,
    item
  })
  dispatch({
    type: CHANGE_TOTAL,
    total
  })
  dispatch({
    type: DES_TOTAL_QUANTITY,
    quantity
  })
}

export const addQuantity = item => dispatch => {
  const quantity = 1
  const total = item.item.price
  dispatch({
    type: ADD_QUANTITY,
    item
  })
  dispatch({
    type: CHANGE_TOTAL,
    total
  })
  dispatch({
    type: ADD_TOTAL_QUANTITY,
    quantity
  })
}

export const desQuantity = item => dispatch => {
  const quantity = 1
  const total = -1 * item.item.price
  dispatch({
    type: DES_QUANTITY,
    item
  })
  dispatch({
    type: CHANGE_TOTAL,
    total
  })
  dispatch({
    type: DES_TOTAL_QUANTITY,
    quantity
  })
}


const addItemReducerHelper = (state, action) => {
  const copyItems = state.items
  const index = copyItems.findIndex(item=>item.item.id===action.newItem.item.id)
  if(index===-1){
    return {...state, items: [...copyItems, action.newItem]}
  }else{
    copyItems[index].quantity += 1
    return {...state, items: copyItems}
  }
}

const removeReducerHelper = (state, action) => {
  const copyItems = state.items
  const index = copyItems.findIndex(item => item.item.id === action.item.id)
  copyItems.splice(index, 1)
  return {...state, items: copyItems}
}

const addQuantityReducerHelper = (state, action) => {
  const copyItems = state.items
  const changeItems = copyItems.map(item => {
    if (item.item.id === action.item.item.id) {
      item.quantity++
    }
    return item
  })
  return {...state, items: changeItems}
}

const desQuantityReducerHelper = (state, action) => {
  const copyItems = state.items
  const changeItems = copyItems.map(item => {
    if (item.item.id === action.item.item.id) {
      item.quantity--
    }
    return item
  })
  return {...state, items: changeItems}
}

export const cartReducer = (state = initCart, action) => {
  switch (action.type) {
    case SHOW_CART:
      return {...state, show: true}
    case HIDE_CART:
      return {...state, show: false}
    case ADD_ITEM:
      return addItemReducerHelper(state,action)
    case ADD_QUANTITY:
      return addQuantityReducerHelper(state, action)
    case DES_QUANTITY:
      return desQuantityReducerHelper(state, action)
    case ADD_TOTAL_QUANTITY:
      return {...state, totalQuantity: state.totalQuantity + 1}
    case DES_TOTAL_QUANTITY:
      return {...state, totalQuantity: state.totalQuantity - action.quantity}
    case REMOVE_ITEM:
      return removeReducerHelper(state, action)
    case CHANGE_TOTAL:
      return {...state, total: state.total + action.total}
    default:
      return state
  }
}
