import React, { useEffect } from 'react'
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Help from "../components/help-center/HelpCenter"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { isToggle, toggleActiveDropdown } from "../redux/nav/nav.actions";
import { selectIsToggle } from "../redux/nav/nav.selectors";

const HelpCenter = ({ toggleDropdown, isToggle, setToggle }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
    // handleClick()
  },[])
  
  function handleClick() {
    if (!isToggle) {
      toggleDropdown({
        login: false,
        help: false
      })
      setToggle(true)
    }
  }

  return (
    <div onClick={handleClick} className="mt-32 w-full h-screen flex flex-col items-center justify-between">
      <Header pageHeader />
      <Help />
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

export default connect(mapStateToProps, mapDispatchToProps)(HelpCenter);
