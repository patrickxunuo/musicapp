import React from "react";
import './Shop.css'
import ProductItem from "../../components/ProductItem/ProductItem";
import {useSelector} from "react-redux";
import Filter from "../../components/Filter/Filter";

const Shop = () => {
  const productList = useSelector(state => state.productReducer.products)
  const showingList = useSelector(state => state.productReducer.productShowing)

  return (
    <div className="shop-page-container">
      <div className="shop-page-content">
        <div className="shop-page-title">MUSIC SHOP</div>
      </div>
      <div className="shop-page-content">
        <div className="shop-page-subtitle">
          <div className="shop-page-count">
            Showing {showingList.length} of {productList.length} items
          </div>
          <div>
              <Filter />
          </div>
        </div>
        <div className="shop-page-items">
          {
            showingList.map((product, index) => (
              <ProductItem key={index} product={product}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Shop
