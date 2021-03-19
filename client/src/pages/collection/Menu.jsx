import React from 'react';
import Item from '../../components/product/Item';

const Menu = ({title, items}) => {
  window.scrollTo(0, 0);

  return (
    <>
      <div className="pt-24 md:pt-32 w-full flex items-center justify-center px-4 md:px-0">
        <div className="w-full max-w-6xl border border-gray-300 rounded-lg overflow-hidden">
          <div className="w-full bg-blue-600 p-4">
            <div className="text-lg text-white uppercase">{title}</div>
          </div>
          <div className="w-full flex flex-wrap items-center justify-start h-full">
            {
              items.map(item => (
                <Item key={item.id} item={item} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu;