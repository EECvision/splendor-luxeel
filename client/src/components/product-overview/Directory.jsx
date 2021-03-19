import React from 'react';
import Menu from './Menu';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectGroupCollectionsForPreview } from '../../redux/shop/shop.selectors';

const Directory = ({collections}) => {
  return (
    <div className="w-full pt-2 md:pt-8">
      {
        collections.map(({id, ...otherProps})=>(
          <Menu key={id} {...otherProps}/>
        ))
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectGroupCollectionsForPreview
})

export default connect(mapStateToProps)(Directory);