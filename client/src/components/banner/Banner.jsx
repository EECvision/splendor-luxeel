import React, { useState, useEffect } from 'react';
import Items from './display-data';
import Display from './Display';
import CategoryItem from './category-item';
import { createStructuredSelector } from 'reselect';
import { selectGroupCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';

const Banner = ({ collections }) => {
  const [displayId, setDisplayId] = useState(1);
  useEffect(() => {
    const show = setTimeout(() => {
      if (displayId >= 4) {
        setDisplayId(id => id = 1)
      } else {
        setDisplayId(id => id + 1)
      }
    }, 7000);

    return () => show
  }, [displayId])

  return (
    <div className="w-full flex items-center justify-center pt-20 md:pt-24 mb-8">
      <div className="w-full max-w-screen-xl flex items-center justify-between">
        <div className="hidden md:block w-64 bg-white mr-6 h-96 p-4border border-gray-300 rounded p-2">
          <div className="w-full flex items-center justify-start mb-2 cursor-default">
          <span className="font-medium text-xl mr-2 text-pink-600 lnr lnr-store"></span>
            <div className="text-2xl text-gray-700 font-medium"> Categories</div>
          </div>
          {
            collections.map(({ id, title, routeName }) => (
              <CategoryItem key={id} title={title} routeName={routeName} />
            ))
          }
        </div>
        <div className="w-full h-64 md:h-96 flex flex-col items-center justify-center md:rounded">
          <div className="w-full h-full">
            {
              Items
                .filter(({ id }) => id === displayId)
                .map(item => (
                  <Display key={item.id} {...item} />
                ))
            }
          </div>
          <div className="w-auto flex items-center justify-center mt-4">
            <span
              onClick={() =>
                setDisplayId(1)} className={`w-2 h-2 cursor-pointer rounded-full mx-2 ${displayId === 1 ? 'bg-yellow-500' : 'bg-gray-300'}`}
            />
            <span
              onClick={() =>
                setDisplayId(2)} className={`w-2 h-2 cursor-pointer rounded-full mx-2 ${displayId === 2 ? 'bg-yellow-500' : 'bg-gray-300'}`}
            />
            <span
              onClick={() =>
                setDisplayId(3)} className={`w-2 h-2 cursor-pointer rounded-full mx-2 ${displayId === 3 ? 'bg-yellow-500' : 'bg-gray-300'}`}
            />
            <span
              onClick={() =>
                setDisplayId(4)} className={`w-2 h-2 cursor-pointer rounded-full mx-2 ${displayId === 4 ? 'bg-yellow-500' : 'bg-gray-300'}`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectGroupCollectionsForPreview
})

export default connect(mapStateToProps)(Banner);
