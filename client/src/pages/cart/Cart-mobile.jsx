import React from 'react';
import { connect } from 'react-redux';
import { decrementItemInCart, incrementItemInCart, removeItemFromCart } from '../../redux/cart/cart.actions';

const CartItem = ({ item, plusItem, minusItem, removeItem }) => {
  const { name, price, imageUrl, quantity } = item;

  return (
    <div className="w-full p-4 bg-white mb-4 shadow-lg rounded">
      <div className="w-full flex items-start justify-start">
        <div className="w-24 h-24 rounded overflow-hidden mr-8 mb-4">
          <img className="w-full h-full" src={imageUrl} alt="" />
        </div>
        <div className="flex-1">
        <div className="text-black font-medium">{name}</div>
          <div className="other descriptions py-2"></div>
          <span className="text-2xl text-gray-400 font-medium">&#36; {price}</span>
        </div>
      </div>
      <div className="w-full flex items-center justify-center border-t border-gray-200 pt-4">
        <div onClick={() => removeItem(item)} className="cursor-pointer w-full text-pink-600 font-medium uppercase">
          <i className="fa fa-trash mr-2" aria-hidden="true"></i>
          <span>Remove</span>
        </div>
        <div className="w-full max-w-sm flex items-center justify-center">
            <span onClick={() => minusItem(item)} className="cursor-pointer px-5 py-1 rounded bg-pink-600 text-gray-300 text-xs lnr lnr-circle-minus"></span>
            <div className="px-4">{quantity}</div>
            <span onClick={() => plusItem(item)} className="cursor-pointer px-5 py-1 rounded bg-pink-600 text-gray-300 text-xs lnr lnr-plus-circle"></span>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  plusItem: item => dispatch(incrementItemInCart(item)),
  minusItem: item => dispatch(decrementItemInCart(item)),
  removeItem: item => dispatch(removeItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CartItem);