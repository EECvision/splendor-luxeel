import React from 'react';
import Item from './Item';

const Menu = ({ title, items }) => {
  window.scrollTo(0, 0);

  return (
    <>
      <div className="pt-28 w-full flex flex-col items-center justify-center px-4 md:px-0">
        <div className="w-auto fixed z-10 left-4 top-20 bg-blue-600 px-4 py-1 rounded-full mb-2">
          <div className="text-sm text-white uppercase">{title}</div>
        </div>
          <div className="w-full max-w-screen-xl flex flex-wrap items-center justify-center lg:justify-start">
            {
              items.map(item => (
                <Item key={item.id} item={item} />
              ))
            }
          </div>
      </div>
    </>
  )
}

export default Menu;