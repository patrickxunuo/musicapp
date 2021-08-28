import React from 'react';
import './HeaderLoader.css'
import {motion} from 'framer-motion'
import {useSelector} from "react-redux";

const HeaderLoader = () => {
  const pageChanging = useSelector(state=> state.pageReducer)

  return (
    <div>
      {
        pageChanging &&
        <motion.div className="header-loader" exit={{opacity: 0}}/>
      }
    </div>
  )
}

export default HeaderLoader
