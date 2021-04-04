import React from 'react';
import Header from '../header/Header';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';
import { isToggle, toggleActiveDropdown } from '../../redux/nav/nav.actions';
import { selectIsToggle } from '../../redux/nav/nav.selectors';
import { createStructuredSelector } from 'reselect';
import Footer from '../footer/Footer';
import { NavLink } from 'react-router-dom';

const ProductDescription = ({ toggleDropdown, item, addToCart, isToggle, setToggle }) => {
  const { name, imageUrl, price } = item;

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
    <div className="w-full" onClick={handleClick}>
      <Header pageHeader />
      <div className="pt-32 w-full flex flex-col lg:flex-row  justify-center items-center lg:items-start mb-24">
        <div className="w-full md:max-w-3xl flex flex-col justify-center rounded- overflow-hidden md:mr-6">
          <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start">
            <div className="w-auto flex flex-col">
              <div className="w-64 h-64  md:mr-8 m-2">
                <img className="w-full h-full" src={imageUrl} alt="product" />
              </div>
              <div className="flex flex-1 items-end justify-start mb-3 md:mb-0">
                <div>Share on:</div>
                <a href={`https://api.whatsapp.com/send?text=${document.URL}`}>
                  <i className="text-green-600 text-lg fab fa-whatsapp mx-2"></i>
                </a>
                <a href={`https://facebook.com/sharer/sharer.php?u=${document.URL}`}>
                  <i className="text-blue-600 text-lg fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
            <div className='w-full'>
              <div className="w-full border-b-2 border-gray-200 px-4">
                <div className="w-full text-left text-lg font-medium md:text-xl mb-2 uppercase">{name}</div>
                <div className="w-full text-left text-lg">Make: <span>Lorem ipsum dolor sum corporis quia eat lo lore</span></div>
              </div>
              <div className="w-full border-b-2 border-gray-200 px-4 py-1 mb-4">
                <div className="w-full text-left text-2xl font-bold mb-2">&#8358; {price}</div>
                <div className="w-full text-sm text-left opacity-50">
                  <span className="mr-4">&#8358; <span className="line-through">{price - 9}</span></span>
                  <span className="bg-pink-300 font-bold text-pink-500 px-2 py-1 rounded">-{price - 9}%</span>
                </div>
              </div>
              <div className="md:hidden w-full text-left p-4">
                <div>
                  <span className="text-lg font-medium">Product Description: </span>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, optio reprehenderit, illo ps!</span>
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-center bg-gray-100 p-4">
                <div
                  onClick={() => addToCart(item)}
                  className="relative w-full  md:max-w-full flex cursor-pointer items-center justify-center bg-pink-600 hover:bg-pink-700 rounded-lg shadow py-2 mb-2">
                  <div className="absolute left-0 ml-4">
                    <span className="text-2xl text-white lnr lnr-cart"></span>
                  </div>
                  <div className="text-center text-white text-xl font-bold">Add To cart</div>
                </div>
                <NavLink to="/" className="w-full md:max-w-full text-gray-300 flex justify-evenly text-xl items-center shadow-lg rounded-lg border border-pink-600 px-12 py-2 bg-white">
                  <span className="inline md:hidden text-xl font-bold lnr lnr-cart"></span>
                  <span className="inline md:hidden uppercase text-pink-600 text-lg font-medium">back</span>
                  <span className="hidden md:inline capitalize text-pink-600 font-medium">continue shopping</span>
                  <span className="inline md:hidden text-xl font-bold lnr lnr-pointer-left"></span>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="hidden md:flex w-full text-left py-12">
            <div><span className="text-lg font-medium">Product Description: </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, optio reprehenderit, illo ps!
            </div>
          </div>
        </div>
        <div className="hidden w-full md:max-w-xs shadow-lg rounded-lg overflow-hidden shadow-lg">
          <div className="bg-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, quibusdam dolorem dolorum officia aspernatur molestiae culpa adipisci earum, ex aliquid dolor minima eum tenetur placeat odio accusantium et blanditiis atque?
          </div>
        </div>
      </div>
      <div className="w-full"> <Footer /></div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  isToggle: selectIsToggle
})

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addItemToCart(item)),
  toggleDropdown: obj => dispatch(toggleActiveDropdown(obj)),
  setToggle: state => dispatch(isToggle(state))
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductDescription)