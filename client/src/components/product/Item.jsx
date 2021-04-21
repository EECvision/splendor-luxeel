import React from 'react';
import { NavLink } from 'react-router-dom'
import './product.css'

const Item = ({ item: { name, imageUrl, price } }) => {

  return (
    <NavLink to={`/${name}`}>
      <div className="item relative w-40  sm:w-56 flex flex-col items-center justify-center p-2 border border-gray-200 mx-1">
        <div className="w-full h-40 sm:h-56 p-2 mb-2">
          <img className="w-full h-full" src={imageUrl} alt="product" />
        </div>
        <div className="w-full text-center text-base sm:text-xl text-gray-700 truncate">{name}</div>
        <div className="w-full text-center md:text-left text-base md:text-xl font-medium"> &#36; {price}</div>
        <div className="w-full text-center md:text-left text-xs sm:text-sm opacity-50">&#36; <span className="line-through">{price - 3}</span></div>
      </div>
    </NavLink>
  )
}

export default Item