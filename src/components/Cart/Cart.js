import React, {useEffect} from 'react';
import './Cart.css'
import {useDispatch, useSelector} from "react-redux";
import {hideCart} from "../../redux/reducers/cartReducer";
import {AnimatePresence, motion} from 'framer-motion'
import CartItem from "../CartItem/CartItem";

const transition = {duration: 0.5, ease: 'easeOut'}

const backdropVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition
  },
  exit: {
    opacity: 0,
    transition
  }
}

const variants = {
  initial: {
    right: -500,
  },
  animate: {
    right: 0,
    transition
  },
  exit: {
    right: -500,
    transition
  }
}


const Cart = () => {
  const cartIsShow = useSelector(state => state.cartReducer.show)
  const items = useSelector(state => state.cartReducer.items)
  const total = useSelector(state=>state.cartReducer.total)
  const totalQuantity = useSelector(state=>state.cartReducer.totalQuantity)
  const dispatch = useDispatch()

  useEffect(() => {
    if (cartIsShow) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [cartIsShow]);


  return (
    cartIsShow &&
    <AnimatePresence>
      <motion.div onClick={()=>hideCart()(dispatch)} key="backdrop" className="cart-backdrop" variants={backdropVariants} initial="initial" animate="animate"
                  exit="exit"/>
      <motion.div key="cart" className="cart-container"
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit">
        <div className="cart-top">
          <div>Your Cart ({totalQuantity})</div>
          <button onClick={() => hideCart()(dispatch)}><span>x</span></button>
        </div>
        <div className="cart-middle">
          {
            items.map((item, index) => <CartItem key={index} item={item}/>)
          }
        </div>
        <div className="cart-bottom">
          <div>Cart Total: ${total}</div>
          <div>
            <button disabled={totalQuantity===0}>CHECKOUT</button>
          </div>
          <div>Free Shipping on all orders.</div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Cart
