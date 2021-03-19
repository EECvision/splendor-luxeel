import React from 'react';
import { withRouter } from 'react-router-dom';

const LoginDropdown = ({ history }) => {
  return (
    <div className="w-64 flex flex-col items-center justify-center p-8 shadow-xl bg-white border-2 border-gray-300">
      <div
        onClick={()=>history.push('/customer/account/login')}
        className="w-full text-cetner font-medium py-2 border border-black rounded-lg cursor-pointer">Login
      </div>
      <div className="my-6">
        OR
      </div>
      <div
        onClick={()=>history.push('/customer/account/signup')}
        className="w-full text-center font-medium py-2 border border-black rounded-lg cursor-pointer">SignUp
      </div>
    </div>
  )
}

export default withRouter(LoginDropdown);