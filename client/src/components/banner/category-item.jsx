import React from 'react';
import { NavLink } from 'react-router-dom';

const CategoryItem = ({title, routeName}) => {
  return(
    <div className="w-full flex items-center justify-start cursor-pointer mb-2">
      <span className="text-xl font-medium lnr lnr-star-empty mr-2 text-pink-600"></span>
      <NavLink to={`/${routeName}`} className="text-xl text-gray-700 hover:text-pink-600">{title}</NavLink>
    </div>
  )
}

export default CategoryItem;