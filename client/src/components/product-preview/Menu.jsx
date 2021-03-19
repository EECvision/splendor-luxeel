import React, { useState, useEffect, useRef } from 'react';
import Item from '../product/Item';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectItemCollectionsForPreview } from '../../redux/shop/shop.selectors';
import './preview.css'


const Menu = ({ itemCollections }) => {
  const [scrollPos, setScrollPos] = useState(window.innerWidth);
  const menuRef = useRef(null);
  const [scrollIdx, setscrollIdx] = useState(500);
  useEffect(() => {
    const removeResize = window.addEventListener("resize", handleResize);
    return () => removeResize
  })
  const handleResize = () => {
    if (window.innerWidth <= 425) {
      return setscrollIdx(100)
    } else if (window.innerWidth <= 768) {
      return setscrollIdx(300)
    } else {
      return setscrollIdx(800)
    }
  }
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full max-w-6xl relative flex items-center justify-center md:mb-12">
        <div onScroll={(e) => setScrollPos(menuRef.current.scrollLeft)} ref={menuRef} className="main w-full flex items-center justify-start whitespace-nowrap overflow-auto md:rounded-lg bg-white p-2">
          {
            itemCollections.map(item => (
              <Item key={item.id} item={item} />
            ))
          }
        </div>
        <div onClick={() => menuRef.current.scrollLeft = scrollPos - scrollIdx} className="hidden md:flex absolute left-0 w-12 h-12 justify-between cursor-pointer items-center bg-gray-200 opacity-25 rounded-full p-4 ">
          <span className="font-bold lnr lnr-chevron-left"></span>
        </div>
        <div onClick={() => menuRef.current.scrollLeft = scrollPos + scrollIdx} className="hidden md:flex absolute right-0 w-12 h-12 justify-between cursor-pointer items-center bg-gray-200 opacity-20 rounded-full p-4 ">
          <span className="font-bold lnr lnr-chevron-right"></span>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  itemCollections: selectItemCollectionsForPreview
})

export default connect(mapStateToProps)(Menu)