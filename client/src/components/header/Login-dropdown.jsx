import React from 'react';
import { withRouter } from 'react-router-dom';

const LoginDropdown = ({ history }) => {
  return (
    <div className="text-pink-600 w-48 flex flex-col items-center justify-center px-4 pb-4 pt-8 shadow-xl bg-white rounded-b">
      <div
        onClick={()=>history.push('/customer/account/login')}
        className="w-full text-cetner font-medium py-2 border border-pink-600 rounded cursor-pointer">Login
      </div>
      <div className="w-full flex items-center justify-center my-4 text-sm font-medium">
        <div className="flex-1 border border-gray-300"></div>
        <div className="mx-1">OR</div>
        <div className="flex-1 border border-gray-300"></div>
      </div>
      <div
        onClick={()=>history.push('/customer/account/signup')}
        className="w-full text-center font-medium py-2 border border-pink-600 rounded cursor-pointer">SignUp
      </div>
    </div>
  )
}

export default withRouter(LoginDropdown);