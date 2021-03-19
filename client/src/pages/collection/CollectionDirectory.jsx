import React from 'react';
import Header from '../../components/header/Header';
import { connect } from 'react-redux';
import { selectCollection, selectItem } from '../../redux/shop/shop.selectors';
import InvalidSearch from '../../components/invalid-search/InvalidSearch';
import ProductDescription from '../../components/product-description/product';
import Menu from './Menu';

const Directory = ({ collection, item }) => {
  if (collection){
    const { title, items } = collection;
    return (
      <>
        <Header pageHeader/>
        <Menu title={title} items={items}/>
      </>
    )
  } else if(item){
    return (
      <>
        <Header pageHeader/>
        <ProductDescription item={item} />
      </>
    )  
  } return <InvalidSearch/>
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
  item: selectItem(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Directory);