import { createStructuredSelector } from 'reselect';
import { selectGroupCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import CategoryItem from '../banner/category-item';
import React from 'react';

const NavDropdown = ({ toggle, setToggle, collections }) => {
  return (
    <div className={`${toggle ? "w-72" : "w-0"} fixed top-0 left-0 z-50 flex-col items-center justify-start h-screen bg-white transition-w duration-300 ease-in-out overflow-hidden py-4`}>
      <div className="w-full text-right"><span onClick={setToggle} className=" cursor-pointer border-2 border-gray-300 rounded text-2xl font-medium p-2 lnr lnr-cross"></span></div>
      <div className="w-full flex items-center justify-start mb-2 cursor-default ml-4">
      <span className="font-medium text-xl mr-2 text-pink-600 lnr lnr-store"></span>
        <div className="text-2xl text-gray-700 font-medium"> Categories</div>
      </div>
      <div className="ml-4">
        {
          collections.map(({ id, title, routeName }) => (
            <CategoryItem key={id} title={title} routeName={routeName} />
          ))
        }
      </div>

    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectGroupCollectionsForPreview
})

export default connect(mapStateToProps)(NavDropdown)