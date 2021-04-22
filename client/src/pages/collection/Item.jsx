import React from 'react';
import { NavLink } from 'react-router-dom'


const Item = ({ item: { name, imageUrl, price } }) => {

  return (
    <NavLink to={`/${name}`}>
      <div className="w-full item p-2 border border-gray-200">
        <div className="w-full h-48 sm:h-56 p-2 mb-2">
          <img className="w-full h-full" src={imageUrl} alt="product" />
        </div>
        <div className="w-full text-center text-base sm:text-xl text-gray-700 truncate">{name}</div>
        <div className="w-full text-center md:text-left text-base sm:text-xl font-medium"> &#36; {price}</div>
        <div className="w-full text-center md:text-left text-xs sm:text-sm opacity-50">&#36; <span className="line-through">{price + 9}</span></div>
      </div>
    </NavLink>
  )
}

export default Item