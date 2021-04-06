import React from 'react';
import { NavLink } from 'react-router-dom'


const Item = ({ item: { name, imageUrl, price } }) => {

  return (
    <NavLink to={`/${name}`}>
      <div className="item relative w-32 sm:w-56 flex-auto flex-col items-center justify-center p-2 border border-gray-200 mx-1 mb-2">
        <div className="w-full h-32 sm:h-56 p-2 mb-2">
          <img className="w-full h-full" src={imageUrl} alt="product" />
        </div>
        <div className="w-full text-center text-xl text-gray-700 truncate">{name}</div>
        <div className="w-full text-center md:text-left text-xl font-medium"> &#8358; {price}</div>
        <div className="w-full text-center md:text-left text-sm opacity-50">&#8358; <span className="line-through">{price + 9}</span></div>
      </div>
    </NavLink>
  )
}

export default Item