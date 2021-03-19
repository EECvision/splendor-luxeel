import React from 'react';
import { connect } from 'react-redux';
import { signOutStart } from '../../redux/user/user.actions';

const LogoutDropdown = ({signOut}) => {
  return (
    <div className="w-64 flex flex-col items-center justify-center p-8 shadow-xl bg-white border-2 border-gray-300">
      <div
        onClick={()=>signOut()}
        className="w-full text-center font-medium py-2 border border-black rounded-lg cursor-pointer mt-24">LogOut
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  signOut: ()=> dispatch(signOutStart())
})

export default connect(null, mapDispatchToProps)(LogoutDropdown);