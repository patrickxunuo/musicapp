import React from 'react';
import './Home.css'
import {Link} from "@material-ui/core";

const Home = () => {

  return(
    <div className="home-page-container">
      <div className="home-page-title">WELCOME TO THE MUSIC WORLD</div>
      <div className="home-page-btn"><Link to="/shop"><span>ENTER SHOP</span></Link></div>
    </div>
  )
}


export default Home
