import React from "react";
import './ProductItem.css'
import {addNewItemToCart} from "../../redux/reducers/cartReducer";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const ProductItem = ({product}) => {
  const dispatch = useDispatch()
  const {id, title, artist, price, cover} = product

  return (
    <div className="product-container">
      <div className="product-img-wrap">
        <div className="product-img-sec-wrap">
          <Link to={`/song/${id}`}>
            <img className="product-cover" src={cover} alt=""/>
          </Link>
        </div>
      </div>
      <div className="product-title product-text">{title}</div>
      <div className="product-price product-text">${price}</div>
      <div className="product-artist product-text">{artist}</div>
      <button className="product-btn-add" onClick={() => addNewItemToCart(product)(dispatch)}>ADD TO CART</button>
    </div>
  )
}

export default ProductItem
