import React from 'react';
import { connect } from 'react-redux';
import { signOutStart } from '../../redux/user/user.actions';

const LogoutDropdown = ({ signOut }) => {
  return (
    <div className="w-48 flex flex-col items-center justify-center px-4 pb-4 pt-8 shadow-xl bg-white">
      <div
        onClick={() => {
          setTimeout(() => {
             signOut()
          }, 1000);
        }}
        className="w-full cursor-pointer text-center text-pink-600 font-medium py-2 border border-pink-600 rounded">LogOut
    </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOutStart())
})

export default connect(null, mapDispatchToProps)(LogoutDropdown);