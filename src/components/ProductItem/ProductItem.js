import React, {useState} from "react";
import './ProductItem.css'
import {motion} from 'framer-motion'
import {Link} from "react-router-dom";

const ProductItem = (props) => {
  const [hover, setHover] = useState(false)
  const {product} = props
  const {id,name, price, out, isCloth} = product


  const opVariants = {
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
    <div className="product-container"
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}>
      <Link to={`/product/${id}`}>
      <div className="product-img-wrap">
        {!hover &&
        <img src={product.img.thumb} alt=""/>
        }
        {hover &&
        <img src={product.img.detail} alt=""/>
        }
        {
          hover &&
          <motion.div className="product-ops"
                      variants={opVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit">
            {!out && 'Quick Add +'}
            {out && 'View Details'}
          </motion.div>
        }
        {
          out &&
          <motion.div className="product-out"
                      variants={opVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit">
            Out of Stock
          </motion.div>
        }
      </div>
      <div className="product-text">{name}</div>
      <div className="product-text">${price}</div>
      </Link>
    </div>
  )
}

export default ProductItem
