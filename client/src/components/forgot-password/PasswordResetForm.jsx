import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import FormInput from '../form-input/form-input.component';

const PasswordResetForm = ({ history }) => {
  const [email, setEmail] = useState('')
  // const [message, setMessage] = useState(false)

  const handleResetPassword = async () => {

  }
  return (
    <div className="w-full flex items-center justify-center mt-32 px-4 md:px-0">
      {
        true
          ?
          <div className="w-full max-w-2xl flex flex-col items-center justify-center">
            <div className="w-full mb-12">
              <div className="w-full text-left text-pink-600 text-xl font-medium mb-4">Password Reset</div>
              <div className="w-full text-left text-lg pl-12">
                Please enter the e-mail address associated with your Splendor Luxeel account.
                We will send you a link to this e-mail address to reset your password.
            </div>
            </div>
            <form
              onSubmit={(event) => handleResetPassword(event)}
              className="w-full flex flex-col items-start justify-evenly"
            >
              <FormInput
                type="email"
                name="email"
                value={email}
                handleChange={(e) => setEmail(e.target.value)}
                required
                label="Enter your e-mail address"
              />
              <div className="w-full p-1 border border-gray-300 rounded bg-pink-200 mt-8">
                <button type="button" className="w-full focus:outline-none bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium py-3 focus:outline rounded">RESET PASSWORD</button>
              </div>
              <NavLink to='/customer/account/login' className="w-full text-center mt-12 mb-16">
                <span className="w-auto text-sm text-pink-700 hover:bg-pink-100 font-medium px-4 rounded">RETURN TO LOGIN</span>
              </NavLink>
            </form>
          </div>
          :
          <div className="w-full max-w-lg flex flex-col items-start justify-evenly mb-56">
            <div className="w-full text-left text-xl text-gray-700 font-serif mb-12">Check your email</div>
            <div className="w-full text-left mb-6 text-gray-500 font-sans">
              A verification message was sent to yuu which contains a link
              to activate your account
              Check your spanm folder if you haven't received an
              email wihtin 3 minutes
                    </div>
            <NavLink to='/customer/account/login'
              className="focus:outline-none rounded shadow border-gray-300 text-pink-600 text-sm font-medium font-medium px-6 py-2"
            >
              LOGIN
            </NavLink>
          </div>
      }
    </div>
  )
}

export default PasswordResetForm
