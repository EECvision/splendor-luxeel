import React from 'react';
import Header from '../../components/header/Header';

const InvalidSearch =()=>{
  return(
    <div>
      <Header/>
      <div className="w-full text-center text-pink-600 font-medium text-4xl p-8 mt-32">
        Looks like you are in the wrong path. Please Go back to the main menu to view all our products and services
      </div>
    </div>
  )
}

export default InvalidSearch;