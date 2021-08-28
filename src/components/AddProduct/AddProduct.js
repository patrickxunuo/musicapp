import React from 'react';
import './AddProduct.css'
import {Link} from 'react-router-dom'

const AddProduct = () => {

  return(
    <div className="add-product-btn">
      <Link to="/add">Add</Link>
    </div>
  )
}

export default AddProduct
