import React from 'react';
import Header from '../../components/header/Header';
import { connect } from 'react-redux';
import { isToggle, toggleActiveDropdown } from '../../redux/nav/nav.actions';
import { selectIsToggle } from '../../redux/nav/nav.selectors';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsCount, selectCartTotal } from '../../redux/cart/cart.selector';
import CartItem from './CartItem.jsx';
import Footer from '../../components/footer/Footer';
import { NavLink } from 'react-router-dom';
import CartMobile from './Cart-mobile';
import StripeCheckoutButton from '../../components/stripe-payment/stripe-button';

const Cart = ({ cartItems, count, total, toggleDropdown, isToggle, setToggle }) => {

  window.scrollTo(0, 0);

  const handleClick = () => {
    if (!isToggle) {
      toggleDropdown({
        login: false,
        help: false
      })
      setToggle(true)
    }
  }

  return (
    <div onClick={handleClick} className="w-full flex flex-col items-center justify-between h-screen bg-gray-100">
      <Header pageHeader />
      <div className="w-full mt-32 flex flex-col justify-between items-center">
        <div className="w-full max-w-2xl lg:max-w-5xl mb-12 px-4 md:px-0">
          <div className="w-full mb-12">
            <div className="w-full text-left text-3xl font-bold mb-8">Cart({count}{' '}{count <= 1 ? <span>item</span> : <span>items</span>})</div>
            <div className="hidden w-full mb-2 lg:flex items-center font-medium text-gray-500 justify-between uppercase">
              <div className="w-auto flex-1">item</div>
              <div className="w-48 text-center">Quantity</div>
              <div className="w-48 text-center">Unit Price</div>
              <div className="w-48 text-center">Subtotal</div>
            </div>
            <div className="hidden lg:block w-full">
              {
                cartItems.map(cartItem => (
                  <CartItem key={cartItem.id} item={cartItem} />
                ))
              }
            </div>
            <div className="w-full lg:hidden">
              {
                cartItems.map(cartItem => (
                  <CartMobile key={cartItem.id} item={cartItem} />
                ))
              }
            </div>

          </div>
          <div className="w-full flex justify-between sm:justify-end items-center pr-4">
            <span className="text-xl text-gray-500 mr-16">Total:</span>
            <span className="text-3xl text-pink-500 font-bold">&#8358; {total}</span>
          </div>
        </div>
        <div className="w-full bg-white flex items-center justify-center p-4 mb-24">
          <div className="w-full max-w-2xl lg:max-w-5xl flex flex-col flex-col-reverse md:flex-row items-center sm:items-end justify-center md:justify-end">
            <NavLink to="/" className="w-full max-w-xs md:w-auto text-gray-300 flex justify-evenly text-xl items-center shadow-lg border border-gray-300 px-12 py-2 md:mr-12">
              <span className="inline md:hidden text-xl font-bold lnr lnr-cart"></span>
              <span className="inline md:hidden uppercase text-gray-600 text-lg font-medium">back</span>
              <span className="hidden md:inline capitalize text-gray-600 font-medium">continue shopping</span>
              <span className="inline md:hidden text-xl font-bold lnr lnr-pointer-left"></span>
            </NavLink>
            <NavLink to="#checkout" className="w-full max-w-xs md:w-auto flex items-center justify-center  mb-2 md:mb-0">
              <span className="font-medium shadow-lg bg-white border border-gray-300 px-4 py-2 shadow-lg rounded mr-2">
                <i className="text-pink-600 text-xl fas fa-phone-alt" aria-hidden="true"></i>
              </span>
              <span className="flex-1 font-medium bg-white text-right shadow-lg px-4 py-2 rounded">
                <StripeCheckoutButton price={total} />
              </span>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="w-full" ><Footer /></div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  count: selectCartItemsCount,
  total: selectCartTotal,
  isToggle: selectIsToggle
})

const mapDispatchToProps = dispatch => ({
  toggleDropdown: obj => dispatch(toggleActiveDropdown(obj)),
  setToggle: state => dispatch(isToggle(state))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
