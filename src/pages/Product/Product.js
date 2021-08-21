import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {products} from "../../data/products";
import './Product.css'
import QuantitySelector from "../../components/QuantitySelector/QuantitySelector";


const productRightFixed={
  position: 'fixed',
  right: 0,
}

const productRightScroll={
  position: 'relative',
  top: 1000,
}

const Product = () => {
  const [scrollY,setScrollY] = useState(0)
  const {id} = useParams()
  const product = products[id - 1]
  const {name, price, out, description} = product

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
  },[])

  const handleScroll = (e) => {
    setScrollY(e.target.scrollingElement.scrollTop)
  }


  return (
    <div className="product-page-container">
      <section className="product-left">
        {
          out &&
            <div className="product-out">Out of stack</div>
        }
        <ul>
          {
            product.imgList.map(img => <img key={img} src={img} alt=""/>)
          }
        </ul>
      </section>
      <section className="product-right" style={scrollY>1000?productRightScroll:productRightFixed}>
        <ul>
          <li>
            <div className="product-name">{name}</div>
            <div className="product-price">${price}</div>
          </li>
          {
            !out &&
              <QuantitySelector product={product}/>
          }
          {out &&
          <li>
            <div>This item is out of stock</div>
            <div>Email me when this item is restocked</div>
          </li>
          }
          <li>
            <div className="li-title">Description</div>
            <pre>{description.split('\n').map((str,index)=><p key={index}>{str}</p>)}</pre></li>
          {product.incentives &&
            <li>
              <div className="li-title">Incentives</div>
              <pre>{product.incentives.split('\n').map((str,index)=><p key={index}>{str}</p>)}</pre>
            </li>
          }
          {product.InstallationGuidance&&
          <li>
            <div className="li-title">Installation Guidance</div>
            <pre>{product.InstallationGuidance.split('\n').map((str,index)=><p key={index}>{str}</p>)}</pre>
          </li>
          }
        </ul>
      </section>
    </div>
  )
}

export default Product
