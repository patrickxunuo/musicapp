import React, {useState} from "react";
import './QuantitySelector.css'
import {addExistingItemToCart, addNewItemToCart} from "../../redux/reducers/cartReducer";
import {useDispatch, useSelector} from "react-redux";

const QuantitySelector = ({product}) => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cartReducer.items)
  const [quantity, setQuantity] =useState(1)

  const handleAddNewItem = () => {
    const filterItem = items.filter(item => item.item.id===product.id)
    if(filterItem.length){
      addExistingItemToCart(product,quantity)(dispatch)
    }else{
      addNewItemToCart(product,quantity)(dispatch)
    }
  }

  return(
    <li className="quantity-selector-li">
      <div>Quantity</div>
      <div className="quantity-selector">
        <button onClick={()=>setQuantity(quantity-1)} disabled={quantity===1}>-</button>
        <span>{quantity}</span>
        <button onClick={()=>setQuantity(quantity+1)}>+</button>
      </div>
      <div><button className="quantity-selector-btn-add" onClick={handleAddNewItem}>ADD TO CART</button></div>
    </li>
  )
}

export default QuantitySelector
