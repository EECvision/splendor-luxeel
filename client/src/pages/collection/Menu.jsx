import React, { useEffect } from 'react';
import Item from './Item';

const Menu = ({ title, items }) => {
  useEffect(()=> {
    window.scrollTo(0, 0);
  },[])

  return (
    <>
      <div className="pt-28 w-full flex flex-col items-center justify-center px-2 md:px-0 border-4">
        <div className="w-auto absolute left-4 top-20 bg-blue-600 px-4 py-1 rounded-full mb-2">
          <div className="text-sm text-white uppercase">{title}</div>
        </div>
          <div className="w-full max-w-screen-xl justify-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 mb-8">
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