import React from 'react';
import { NavLink } from 'react-router-dom';

const CategoryItem = ({title, routeName}) => {
  return(
    <div className="w-full flex items-center justify-start cursor-pointer">
      <span className="mr-2 text-pink-600">::</span>
      <NavLink to={`/${routeName}`} className="text-gray-600 hover:text-pink-600">{title}</NavLink>
    </div>
  )
}

export default CategoryItem;