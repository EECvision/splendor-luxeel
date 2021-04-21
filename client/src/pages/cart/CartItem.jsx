import React from 'react';
import { connect } from 'react-redux';
import { decrementItemInCart, incrementItemInCart, removeItemFromCart } from '../../redux/cart/cart.actions';

const CartItem = ({ item, plusItem, minusItem, removeItem }) => {
  const { name, price, imageUrl, quantity } = item;

  return (
    <div className="w-full h-32 flex items-start justify-between bg-white shadow-lg mb-4 py-3 rounded">
      <img className="w-48 h-20 mr-8 rounded pl-3" src={imageUrl} alt="" />
      <div className="w-full h-full flex flex-col justify-between">
        <div className="w-full capitalize mb-4 leading-none">
          <div className="text-gray-400 font-medium">seller: Ebubechukwu</div>
          <div className="text-black text-lg font-bold">{name}</div>
          <div className="other descriptions"></div>
        </div>
        <div onClick={()=>removeItem(item)} className="cursor-pointer w-full text-pink-600 font-medium uppercase">
          <i className="fa fa-trash mr-2" aria-hidden="true"></i>
          <span>Remove</span>
        </div>
      </div>
      <div className="w-auto h-32 flex items-start justify-between">
        <div className="w-48 h-full text-center text-lg font-medium border-l border-gray-200 py-2">
          <div>{quantity}</div>
          <div className="flex justify-evenly items-center">
            <span onClick={()=>minusItem(item)} className="cursor-pointer px-5 py-1 rounded bg-pink-600 text-white text-xs lnr lnr-circle-minus"></span>
            <span onClick={()=>plusItem(item)} className="cursor-pointer px-5 py-1 rounded bg-pink-600 text-white text-xs lnr lnr-plus-circle"></span>
          </div>
        </div>
        <div className="w-48 h-full text-center border-l border-gray-200 py-2">
          <div className="text-lg">&#36; {price}</div>
          <div className="text-gray-300 line-through">&#36; {price - 9}</div>
          <div className="text-sm text-gray-500 capitalize">saving: &#36; {parseInt(price/3)}</div>
        </div>
        <div className="w-48 h-full text-center text-lg text-gray-400 font-bold border-l border-gray-200 py-2 pr-3">
          &#36; {price * quantity}
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