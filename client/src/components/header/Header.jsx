import React, { useState, useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import LoginDropdown from './Login-dropdown';
import HelpDropdown from './Help-dropdown';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectActiveDropdown } from '../../redux/nav/nav.selectors';
import { isToggle, toggleActiveDropdown } from '../../redux/nav/nav.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import LogoutDropdown from './Logout-dropdown';
import NavDropdown from './nav-dropdown';
import NavDropdownLg from './nav-dropdown-lg';

const Header = ({ pageHeader, activeDropdown, toggleDropdown, setToggleNav, cartItemsCount, currentUser }) => {
  const [windowWidth, setWidth] = useState(window.innerWidth);
  const [user, setUser] = useState('')
  const [sideNav, setSideNav] = useState(false)

  useEffect(() => {
    if (currentUser) {
      const { displayName } = currentUser
      setUser(displayName.split(' ')[0].toLowerCase())
    }

    const removeResize = window.addEventListener("resize", () => {
      setWidth(window.innerWidth)
    })
    return () => (removeResize)
  }, [currentUser])

  const handleNavClick = (val) => {
    if (windowWidth >= 768) {
      const { ...newDropdown } = activeDropdown
      for (const key in newDropdown) {
        if (key === val) {
          newDropdown[key] = !activeDropdown[val]
        } else {
          newDropdown[key] = false
        }
      }
      toggleDropdown(newDropdown);
    }
  }

  return (
    <div className={`fixed top-0 left-0 z-10 top-0 w-full transition-top duration-300 ease-out shadow-lg px-2 lg:px-12 py-3 flex items-center justify-between bg-white mb-12`}>
      <div className="w-auto flex items-center justify-center">
        <button onClick={()=> setSideNav(!sideNav)} className={`${pageHeader ? 'flex ' : 'flex md:hidden'} text-2xl md:text-4xl font-bold md:mx-6 mr-4 px-2 lnr lnr-menu`}></button>
        <div className="sm:hidden"><NavDropdown toggle={sideNav} setToggle={()=>setSideNav(!sideNav)}/></div>
        <div className="sm:block hidden"><NavDropdownLg toggle={sideNav}/></div>       
        <NavLink to="/" className="cursor-default flex items-center justify-center">
          <div className="text-2xl md:text-3xl font-medium text-gray-700">Splendor Luxeel</div>
          <span  className="hidden sm:block text-4xl lnr lnr-cart"></span>
        </NavLink>
      </div>
      <div className="w-auto flex items-center justify-center">
        <div
          onMouseOver={() => setToggleNav(true)} onMouseLeave={() => setToggleNav(false)}
          className="relative w-auto flex flex-col items-center text-center"
         >
          <div onClick={() => handleNavClick('login')} className="cursor-pointer w-full flex items-center justify-center md:px-3 py-">
            <NavLink to='/customer/account/login' className="md:hidden text-lg md:text-2xl font-bold mr-2 lnr lnr-user"></NavLink>
            <span className="hidden md:inline text-lg md:text-2xl font-bold mr-2 lnr lnr-user"></span>
            {
              currentUser
                ? <div className="hidden md:block w-auto text-xl mr-2 capitalize">Hi, {user.charAt(0).toUpperCase() + user.slice(1)}</div>
                : <div className="hidden md:block text-2xl mr-2">Login</div>
            }
            <span className={`hidden md:inline transition duration-200 ease-in-out transform ${activeDropdown.login ? 'rotate-180' : '-rotate-0'}`}>
              <span className="mt-2 text-xs font-bold lnr lnr-chevron-down"></span>
            </span>
          </div>
          {
            !activeDropdown.login 
            ? null
            : currentUser 
            ? <div className="absolute top-12"><LogoutDropdown /></div>
            : <div className="absolute top-12"><LoginDropdown /></div>
          }
        </div>
        <div
          onMouseOver={() => setToggleNav(true)} onMouseLeave={() => setToggleNav(false)}
          className="hidden md:flex w-auto relative flex-col items-center text-center"
        >
          <div onClick={() => handleNavClick('help')} className=" cursor-pointer w-full flex items-center justify-center md:px-3 py-">
            <span className="text-2xl font-bold mr-2 lnr lnr-question-circle"></span>
            <div className="text-2xl mr-2">help</div>
            <span className={`transition duration-100 delay-100 ease-in-out transform ${activeDropdown.help ? 'rotate-180' : '-rotate-0'}`}>
              <span className="mt-2 text-xs font-bold lnr lnr-chevron-down"></span>
            </span>
          </div>
          {
            activeDropdown.help ? <div className='absolute top-12'> <HelpDropdown /> </div> : null
          }
        </div>
        <NavLink to="/cart" className="cursor-pointer w-auto flex items-center justify-center md:px-3 py-">
          <div className="relative w-full flex items-center justify-center mr-4">
            <span className="absolute top-0 right-0 -mr-2 w-5 h-5 md:w-6 md:h-6 rounded-full text-sm md:text-base text-white bg-pink-600 text-center">
              {cartItemsCount}
            </span>
            <span className="text-2xl md:text-4xl lnr lnr-cart"></span>
          </div>
          <div className="hidden md:block text-2xl">cart</div>
        </NavLink>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  activeDropdown: selectActiveDropdown,
  cartItemsCount: selectCartItemsCount,
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  toggleDropdown: obj => dispatch(toggleActiveDropdown(obj)),
  setToggleNav: state => dispatch(isToggle(state))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
