import React, { useState, useEffect } from 'react';
import Item from '../product/Item';
import { NavLink } from 'react-router-dom';

const Menu = ({ title, items, routeName, color }) => {
  const [filterIdx, setfilterIdx] = useState(5);
  useEffect(() => {
    handleResize()
    const removeResize = window.addEventListener("resize", handleResize);
    return () => removeResize
  })

  function handleResize(){
    if (window.innerWidth <= 448) {
      return setfilterIdx(2)
    } else if (window.innerWidth <= 768) {
      return setfilterIdx(3)
    } else if (window.innerWidth <= 1024) {
      return setfilterIdx(4)
    }
    else {
      return setfilterIdx(5)
    }
  }

  return (
    <div className="w-full flex flex-col items-center justify-center mb-2 md:mb-6">
      <div className={`w-full max-w-screen-xl flex justify-between items-center text-white md:rounded-t-lg bg-${color}-500 p-4`}>
        <div className="text-lg uppercase">{title}</div>
        <NavLink to={`/${routeName}`}
          className="text-lg uppercase px-4"> See all <span className="lnr lnr-arrow-right"></span>
        </NavLink>
      </div>

        <div className="w-full max-w-screen-xl flex justify-center shadow-lg overflow-hidden py-4 bg-white md:rounded-b-lg">
          {
            items
              .filter((item, idx) => idx < filterIdx)
              .map(item => (
                <Item key={item.id} item={item} />
              ))
          }
        </div>
      </div>
  )
}

export default Menu