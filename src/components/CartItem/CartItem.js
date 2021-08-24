import React from 'react';
import './CartItem.css'
import {useDispatch} from "react-redux";
import {addQuantity, desQuantity, removeItem} from "../../redux/reducers/cartReducer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'

const CartItem = ({item}) => {
  const dispatch = useDispatch()

  return (
    <div className="cart-item-container">
      <div>
        <img src={item.item.cover} alt=""/>
      </div>
      <div className="cart-item-column-second product-container">
        <div className="product-title">{item.item.title}</div>
        <div className="product-price">${item.item.price}</div>
        <div className="product-artist">{item.item.artist}</div>
        <div>
          <button disabled={item.quantity === 1} onClick={() => desQuantity(item)(dispatch)}><FontAwesomeIcon icon={faMinus}/></button>
          <span>{item.quantity}</span>
          <button onClick={() => addQuantity(item)(dispatch)}><FontAwesomeIcon icon={faPlus}/></button>
        </div>
      </div>
      <div className="product-subtotal">${(item.item.price * item.quantity).toFixed(2)}</div>
      <div className="product-remove">
        <button onClick={() => removeItem(item.item, item.quantity)(dispatch)}>
          <FontAwesomeIcon icon={faTimes}/>
        </button>
      </div>
    </div>
  )
}

export default CartItem
