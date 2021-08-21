import React, {useEffect, useState} from "react";
import "./Header.css";
import {Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {showCart} from "../../redux/reducers/cartReducer";

const Header = () => {
  const items = useSelector(state => state.cartReducer.items)
  const totalQuantity = useSelector(state => state.cartReducer.totalQuantity)
  const dispatch = useDispatch()
  const {pathname} = useLocation()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = (e) => {
    setScrollY(e.target.scrollingElement.scrollTop)
  }

  return (
    <header className="header" style={scrollY > 100 || pathname.includes('product') ? {
      color: 'black',
      background: 'white'
    } : {color: 'white', background: 'transparent'}}>
      <div className="header-item header-left">
        <ul>
          <li>
            <svg style={scrollY > 100 || pathname.includes('product') ? {fill: 'black'} : {fill: 'white'}}
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 342 35" id="tds-wordmark">
              <path className="tds-icon-fill--primary"
                    d="M0 .1a9.7 9.7 0 007 6.93h10.93l.56.22v27.58h6.82V7.29l.62-.22h10.94a9.82 9.82 0 007-6.93V.07H0V.1zM238.61.06h-6.8v34.85h31.14a9.68 9.68 0 005.94-6.86h-30.3l.02-27.99zm-52.33 6.86c3.62-1 6.66-3.82 7.39-6.88l-38.1.06v20.55h31.17v7.23h-24.46a13.6 13.6 0 00-8.71 7h39.89V13.81H162.3V6.92h23.98zm116.17 27.97h6.76V20.87h24.58v14.02h6.75V13.87l-38.09-.04zM85.35 7h26a9.57 9.57 0 007.05-7H78.3a9.61 9.61 0 007.05 7zm0 13.77h26a9.59 9.59 0 007.05-7H78.3a9.63 9.63 0 007.05 7zm0 14.14h26a9.59 9.59 0 007.05-7H78.3a9.62 9.62 0 007.05 7zM308.46 7.02h26a9.58 9.58 0 007.06-7h-40.11a9.59 9.59 0 007.05 7z"/>
            </svg>
          </li>
          <li>|</li>
          <li><Link to="/shop"><span
            style={scrollY > 100 || pathname.includes('product') ? {color: 'black'} : {color: 'white'}}>SHOP</span></Link>
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
            <button>
              <svg style={scrollY > 100 || pathname.includes('product') ? {fill: 'black'} : {fill: 'white'}}
                   className="svg-large" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="tds-magnify">
                <path
                  d="M99.6 92.6L70.9 63.8c5.2-6.7 8.2-15 8.2-24.1C79.1 18 61.5.4 39.7.4S.4 18 .4 39.7 18 79.1 39.7 79.1c9.1 0 17.4-3.1 24.1-8.2l28.8 28.8 7-7.1zM39.7 69.1c-16.2 0-29.4-13.2-29.4-29.4s13.2-29.4 29.4-29.4 29.4 13.2 29.4 29.4-13.2 29.4-29.4 29.4z"/>
              </svg>
            </button>
          </li>
          <li>
            <button onClick={() => showCart()(dispatch)}>
              <svg style={scrollY > 100 || pathname.includes('product') ? {fill: 'black'} : {fill: 'white'}}
                   className="svg-large" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="tds-cart">
                <path className="tds-icon-fill--primary"
                      d="M17.2 11c2.3.2 3.9 3 4.8 8.3h71.5c3.1 0 7.9 0 6.1 6.4-4.3 19-6.9 30.9-7.7 35.4-.7 2.3-1.5 3.9-6 3.9h-55c-3.8 0-5 0-6.5-5.7l-10.8-40H0V11h17.2zm73.2 16.8H24.3l8.2 29.1h51.7l6.2-29.1z"/>
                <circle className="tds-icon-fill--primary" cx="37.5" cy="81.5" r="8.5"/>
                <circle className="tds-icon-fill--primary" cx="83.5" cy="81.5" r="8.5"/>
              </svg>
              {
                totalQuantity !== 0 &&
                <div className="cart-number" style={scrollY > 100 || pathname.includes('product') ? {
                  color: 'white',
                  background: 'black'
                } : {background: 'white', color: 'black'}}>
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
