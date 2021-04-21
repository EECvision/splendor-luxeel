import React, { useEffect } from 'react';
import Footer from "../components/footer/Footer";
import PasswordResetForm from "../components/forgot-password/PasswordResetForm";
import Header from "../components/header/Header";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { isToggle, toggleActiveDropdown } from "../redux/nav/nav.actions";
import { selectIsToggle } from "../redux/nav/nav.selectors";

const ForgotPassword = ({ toggleDropdown, isToggle, setToggle }) => {
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
    <div onClick={handleClick} className="w-full h-screen flex flex-col items-center justify-between">
      <Header pageHeader />
      <PasswordResetForm />
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

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
