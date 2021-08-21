import React, {useState} from "react";
import './Shop.css'
import {motion} from 'framer-motion'
import ProductItem from "../../components/ProductItem/ProductItem";
import {products} from "../../data/products";

const Shop = () => {
  const [largeImg, setLargeImg] = useState(0)

  const largeImgVariants = {
    initial: {
      opacity: 0.5
    },
    animate: {
      opacity: 1,
      transition: {ease: 'easeOut', duration: 0.5}
    },
    exit: {
      opacity: 0.5
    }
  }

  return (
    <div className="shop-page-container">
      <section>
        {largeImg === 0 &&
        <motion.div variants={largeImgVariants} initial="initial" animate="animate" exit="exit">
          <div className="shop-large-text-container">
            <div>WALL COLLECTOR</div>
            <div>The fastest way to charge at home</div>
          </div>
          <img className="shop-large-img"
               src="https://www.tesla.com/ns_videos/commerce/content/dam/tesla/tesla-shop-marketing-imagery/hero-carousel/wall-connector-gen3.jpg"
               alt=""/>
        </motion.div>
        }
        {largeImg === 1 &&
        <motion.div variants={largeImgVariants} initial="initial" animate="animate" exit="exit">
          <div className="shop-large-text-container">
            <div>MODEL Y ALL-WEATHER INTERIOR LINERS</div>
            <div>A clean interior, in any weather</div>
          </div>
          <img className="shop-large-img"
               src="https://www.tesla.com/ns_videos/commerce/content/dam/tesla/tesla-shop-marketing-imagery/hero-carousel/model_y_liners.jpg"
               alt=""/>
        </motion.div>
        }
        <div className="shop-large-btn-container">
          <div className="shop-large-btn" onClick={() => setLargeImg(0)}/>
          <div className="shop-large-btn" onClick={() => setLargeImg(1)}/>
        </div>
      </section>
      <section>
        <div className="product-title">Best Sellers</div>
        <div className="product-items">
          {
            products.map(product => (
              <ProductItem key={product} product={product}/>
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default Shop
