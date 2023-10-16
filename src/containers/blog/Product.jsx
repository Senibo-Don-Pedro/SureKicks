import React from 'react'
import './product.css'

const Product = (props) => {
  return (
    <div className='card'>
        <img className='product--image' src={props.url} alt="" />
        <h2>{props.name}</h2>
        <p className='price'>{props.price}</p>
        <p>
          <button>Check it Out!</button>
        </p>
    </div>
  )
}

export default Product