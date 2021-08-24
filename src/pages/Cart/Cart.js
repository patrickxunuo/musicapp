import React from 'react';
import CartItem from "../../components/CartItem/CartItem";
import {useSelector} from "react-redux";
import './Cart.css'
import {addQuantity, desQuantity, removeItem} from "../../redux/reducers/cartReducer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus, faTimes} from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const items = useSelector(state => state.cartReducer.items)
  const total = useSelector(state => state.cartReducer.total).toFixed(2)
  const totalQuantity = useSelector(state => state.cartReducer.totalQuantity)

  return (
    <div className="cart-page">
      <div className="cart-page-container">
        <div className="cart-page-top">
          Shopping Cart
        </div>
        <div className="cart-page-middle">

          <div className="cart-item-container  cart-page-bar">
            <div>
              Cover
            </div>
            <div className="cart-item-column-second product-container">
              Info
            </div>
            <div>Subtotal</div>
            <div className="product-remove">
              Remove
            </div>
          </div>

          {
            totalQuantity === 0 &&
            <h1 className="cart-page-empty">
              Your cart is empty.
            </h1>
          }
          {
            items.map((item, index) => <CartItem key={index} item={item}/>)
          }
        </div>
        <div className="cart-page-bottom">
          <div className="cart-page-checkout-container">
            <div className="cart-page-checkout-info"><span>Subtotal:</span><span>${total}</span></div>
            <div className="cart-page-checkout-info"><span>Estimated tax:</span> <span>${(total * 0.12).toFixed(2)}</span></div>
            <div className="cart-page-total cart-page-checkout-info"><span>Estimated total:</span><span> ${(total * 1.12).toFixed(2)}</span></div>
            <div className="cart-page-checkout-info">
              <button className="cart-page-checkout" disabled={totalQuantity === 0}>CHECKOUT</button>
            </div>
            <div className="cart-page-checkout-info">Free Shipping on all orders.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
