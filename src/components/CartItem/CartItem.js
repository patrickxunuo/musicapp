import React from 'react';
import './CartItem.css'
import {useDispatch} from "react-redux";
import {addQuantity, desQuantity, removeItem} from "../../redux/reducers/cartReducer";

const CartItem = ({item}) => {
  const dispatch = useDispatch()

  return(
     <div className="cart-item-container">
       <div>
         <img src={item.item.img.thumb} alt=""/>
       </div>
       <div className="cart-column-second">
         <div>{item.item.name}</div>
         <div>${item.item.price}</div>
         <div>
           <button disabled={item.quantity===1} onClick={()=>desQuantity(item)(dispatch)}>-</button>
           <span>{item.quantity}</span>
           <button onClick={()=>addQuantity(item)(dispatch)}>+</button>
         </div>
       </div>
       <div>${item.item.price*item.quantity}</div>
       <div><button onClick={()=>removeItem(item.item,item.quantity)(dispatch)}>x</button></div>
     </div>
  )
}

export default CartItem
