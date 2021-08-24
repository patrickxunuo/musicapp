import React, {useState} from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {showCart} from "../../redux/reducers/cartReducer";
import {motion} from 'framer-motion'

const inputVariants = {
  initial: {
    width: 0,
  },
  animate: {
    width: 150,
    transition: {duration: 0.5, ease: 'easeOut',}
  }
}

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false)

  const totalQuantity = useSelector(state => state.cartReducer.totalQuantity)
  const dispatch = useDispatch()


  return (
    <header className="header">
      <div className="header-item header-left">
        <ul>
          <li>
            <Link to="/"><span className="tesla-font">Spotify</span></Link>
          </li>
          <li>|</li>
          <li><Link to="/shop"><span>SHOP</span></Link>
          </li>
        </ul>
      </div>
      <div className="header-item header-middle">
        <nav>
          <ul>
            <li>CHARGING</li>
            <li>VEHICLE ACCESSORIES</li>
            <li>APPAREL</li>
            <li>LIFESTYLE</li>
          </ul>
        </nav>
      </div>
      <div className="header-item header-right">
        <ul>
          <li>SIGN IN</li>
          <li>
            {searchOpen ?
              <motion.div className="header-search">
                <motion.input type="text" className="header-search-input"
                              placeholder="Search"
                              variants={inputVariants}
                              initial="initial"
                              animate="animate"/>
                <div className="header-btn-search" onClick={() => {
                }}>
                  <svg className="header-svg-large" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
                       id="tds-magnify">
                    <path
                      d="M99.6 92.6L70.9 63.8c5.2-6.7 8.2-15 8.2-24.1C79.1 18 61.5.4 39.7.4S.4 18 .4 39.7 18 79.1 39.7 79.1c9.1 0 17.4-3.1 24.1-8.2l28.8 28.8 7-7.1zM39.7 69.1c-16.2 0-29.4-13.2-29.4-29.4s13.2-29.4 29.4-29.4 29.4 13.2 29.4 29.4-13.2 29.4-29.4 29.4z"/>
                  </svg>
                </div>
              </motion.div>
              : <div className="header-btn-search" onClick={() => setSearchOpen(true)}>
                <svg className="header-svg-large" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
                     id="tds-magnify">
                  <path
                    d="M99.6 92.6L70.9 63.8c5.2-6.7 8.2-15 8.2-24.1C79.1 18 61.5.4 39.7.4S.4 18 .4 39.7 18 79.1 39.7 79.1c9.1 0 17.4-3.1 24.1-8.2l28.8 28.8 7-7.1zM39.7 69.1c-16.2 0-29.4-13.2-29.4-29.4s13.2-29.4 29.4-29.4 29.4 13.2 29.4 29.4-13.2 29.4-29.4 29.4z"/>
                </svg>
              </div>
            }
          </li>
          <li>
            <button className="header-btn-cart" onClick={() => showCart()(dispatch)}>
              <svg className="header-svg-large" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="tds-cart">
                <path
                  d="M17.2 11c2.3.2 3.9 3 4.8 8.3h71.5c3.1 0 7.9 0 6.1 6.4-4.3 19-6.9 30.9-7.7 35.4-.7 2.3-1.5 3.9-6 3.9h-55c-3.8 0-5 0-6.5-5.7l-10.8-40H0V11h17.2zm73.2 16.8H24.3l8.2 29.1h51.7l6.2-29.1z"/>
                <circle className="tds-icon-fill--primary" cx="37.5" cy="81.5" r="8.5"/>
                <circle className="tds-icon-fill--primary" cx="83.5" cy="81.5" r="8.5"/>
              </svg>
              {
                totalQuantity !== 0 &&
                <div className="header-cart-number">
                  {totalQuantity}
                </div>
              }
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
