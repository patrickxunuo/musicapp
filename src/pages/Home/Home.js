import React from 'react';
import './Home.css'
import {Link} from "@material-ui/core";
import {motion} from 'framer-motion'

const Home = () => {

  return (
    <motion.div className="home-page-container"
         initial={{opacity: 0}}
         animate={{opacity: 1, transition:{delay: 0.8}}}
         exit={{opacity: 0}}>
      <div className="home-page-title">WELCOME TO THE MUSIC WORLD</div>
      <div className="home-page-btn"><Link to="/shop"><span>ENTER SHOP</span></Link></div>
    </motion.div>
  )
}

export default Home
