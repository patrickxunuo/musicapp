import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import './Product.css'
import {useDispatch, useSelector} from "react-redux";
import {addNewItemToCart} from "../../redux/reducers/cartReducer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faPause} from '@fortawesome/free-solid-svg-icons'
import {AnimatePresence, motion} from 'framer-motion'

const backdropVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  }
}

const Product = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef()
  const {id} = useParams()
  const productList = useSelector(state => state.productReducer.products)
  const product = productList.find(item => {
    return JSON.stringify(item.id) === id
  })
  const {title, artist, price, cover, stream} = product
  const dispatch = useDispatch()

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    product &&
    <div className="product-page-container">
      <div className="product-page-content">
        <div className="product-page-top">
          <div>
            <div className="product-page-img" style={{backgroundImage: `url('${cover}')`}}
                 onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? <FontAwesomeIcon icon={faPause}/> : <FontAwesomeIcon icon={faPlay}/>}
            </div>
          </div>
          <div className="product-page-info">
            <ul>
              <li>{title}</li>
              <li>{artist}</li>
              <li>${price}</li>
              <li>
                <button onClick={() => addNewItemToCart(product)(dispatch)}>Add to cart</button>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <audio controls autoPlay controlsList="nodownload" ref={audioRef}>
            <source
              src={stream}
              type="audio/mpeg"
            />
          </audio>
        </div>
      </div>
    </div>
  )
}

export default Product
