import React, { useEffect } from 'react';
import Header from '../components/header/Header';
import Banner from '../components/banner/Banner';
import Directory from '../components/product-overview/Directory';
import About from '../components/about/About';
import Footer from '../components/footer/Footer';
import Menu from '../components/product-preview/Menu';
import { connect } from 'react-redux';
import { isToggle, toggleActiveDropdown } from '../redux/nav/nav.actions';
import { selectIsToggle } from '../redux/nav/nav.selectors';
import { createStructuredSelector } from 'reselect';

const Home = ({ toggleDropdown, isToggle, setToggle }) => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  
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
    <div className="w-full h-screen" onClick={handleClick}>
      <Header />
      <div className="w-full bg-white md:bg-blue-700">
        <Banner />
        <Menu />
        <Directory />
        <About />
      </div>
      <Footer />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  isToggle: selectIsToggle
})

const mapDispatchToProps = dispatch => ({
  toggleDropdown: obj => dispatch(toggleActiveDropdown(obj)),
  setToggle: state => dispatch(isToggle(state))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);