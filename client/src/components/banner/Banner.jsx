import React, { useState, useEffect } from 'react';
import Items from './display-data';
import Display from './Display';

const Banner = () => {
  const [displayId, setDisplayId] = useState(1);
  useEffect(() => {
    const show = setTimeout(() => {
      if (displayId >= 4) {
        setDisplayId(id => id = 1)
      } else {
        setDisplayId(id => id + 1)
      }
    }, 7000);

    return ()=> show
  },[displayId])

  return (
    <div className="w-full flex items-center justify-center pt-20 md:pt-24 mb-8">
      <div className="w-full max-w-6xl flex items-center justify-between">
        <div className="hidden md:block w-64 text-3xl font-medium bg-white mr-6 h-96 p-4 text-gray-700 border border-gray-300 rounded-lg">
          Your Lists Here
        </div>
        <div className="w-full h-48 md:h-96 flex flex-col items-center justify-center md:rounded-lg">
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
              setDisplayId(1)} className={`w-2 h-2 cursor-pointer rounded-full mx-2 ${ displayId===1 ? 'bg-yellow-500' : 'bg-gray-300'}`}
            />
                        <span 
              onClick={() => 
              setDisplayId(2)} className={`w-2 h-2 cursor-pointer rounded-full mx-2 ${ displayId===2 ? 'bg-yellow-500' : 'bg-gray-300'}`}
            />
            <span 
              onClick={() => 
              setDisplayId(3)} className={`w-2 h-2 cursor-pointer rounded-full mx-2 ${ displayId===3 ? 'bg-yellow-500' : 'bg-gray-300'}`}
            />
            <span 
              onClick={() => 
              setDisplayId(4)} className={`w-2 h-2 cursor-pointer rounded-full mx-2 ${ displayId===4 ? 'bg-yellow-500' : 'bg-gray-300'}`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;