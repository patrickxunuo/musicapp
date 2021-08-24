import axios from "axios";

const LOAD_PRODUCT = "LOAD_PRODUCT"
const FILTER_PRODUCT = "FILTER_PRODUCT"
const CHANGE_SHOW_PRODUCT = "CHANGE_SHOW_PRODUCT"
const SET_PLAYING = "SET_PLAYING"
const REMOVE_PLAYING = "REMOVE_PLAYING"

const initProduct = {
  products: [],
  productShowing: [],
  songPlaying: '',
}

export const setPlaying = stream => dispatch => {
  dispatch({
    type: SET_PLAYING,
    stream
  })
}

export const removePlaying = () => dispatch => {
  dispatch({
    type: REMOVE_PLAYING
  })
}

export const filterShowings = filter => dispatch => {
  dispatch({
    type: FILTER_PRODUCT,
    filter,
  })
}

export const loadProducts = () => dispatch => {
  axios.get("http://course-data.mark2win.com/solo")
    .then(res => {
      const productList = res.data.data
      dispatch({
        type: LOAD_PRODUCT,
        productList
      })
      dispatch({
        type: CHANGE_SHOW_PRODUCT,
        filter: null
      })
    })
    .catch(err => console.log(err))
}


const filterHelperFunction = (state, filter) => {
  if (filter === 1) {
    const copyProduct = state.products
    const filteredProduct = copyProduct.filter(product => product.price > 2)
    return {...state, productShowing: filteredProduct}
  } else if (filter === 2) {
    const copyProduct = state.products
    const filteredProduct = copyProduct.filter(product => product.price < 2 && product.price > 1)
    return {...state, productShowing: filteredProduct}
  } else if (filter === 3) {
    const copyProduct = state.products
    const filteredProduct = copyProduct.filter(product => product.price < 1)
    return {...state, productShowing: filteredProduct}
  } else {
    return {...state, productShowing: state.products}
  }
}

export const productReducer = (state = initProduct, action) => {
  switch (action.type) {
    case LOAD_PRODUCT:
      return {...state, products: action.productList}
    case CHANGE_SHOW_PRODUCT:
      return filterHelperFunction(state, action.filter)
    case FILTER_PRODUCT:
      return filterHelperFunction(state, action.filter)
    case SET_PLAYING:
      return {...state, songPlaying: action.stream}
    case REMOVE_PLAYING:
      return {...state, songPlaying: ''}
    default:
      return state
  }
}
