import {combineReducers} from 'redux'
import {cartReducer} from "./cartReducer";
import {productReducer} from "./productReducer";
import {ticketReducer} from "./ticketReducer";
import {pageReducer} from "./pageReducer";

export default combineReducers({
  cartReducer,
  productReducer,
  ticketReducer,
  pageReducer,
})
