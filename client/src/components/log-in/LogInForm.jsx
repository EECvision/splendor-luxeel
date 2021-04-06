import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import FormInput from '../form-input/form-input.component';
import { connect } from 'react-redux';
import { emailSignInStart, googleSignInStart, resetError } from '../../redux/user/user.actions';
import { selectError } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import ErrorMessage from '../error-message/Error-message';

const LogInForm = ({ signInWithGoogle, signInWithEmail, error, resetErr }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleGoogleSignIn = () => {
    signInWithGoogle()
  }

  const handleEmailSignIn = (e) => {
    e.preventDefault()
    signInWithEmail({password: password, email: email})
  }

  return (
    <div className="w-full flex items-center justify-center mb-20 mt-20 md:mt-32">
      {
        error
        ? <ErrorMessage clickHandler={resetErr} error={error} />
        : null

      }
      <div className="w-full max-w-2xl">
      <div className="hidden md:block w-full text-center text-pink-600 text-2xl font-medium mb-12">Login</div>
      <div className="md:hidden w-full flex items-center justify-between px-4">
        <NavLink to='/customer/account/login' className="w-1/2 text-gray-700 border-b-2 border-pink-700 text-sm text-center font-medium py-2">LOGIN</NavLink>
        <NavLink to='/customer/account/signup' className="w-1/2 text-gray-700 text-sm text-center font-medium py-2">CREATE ACCOUNT</NavLink>
      </div>
        <form onSubmit={handleEmailSignIn} className="w-full flex flex-col items-start justify-evenly px-4 md:px-0">
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
            required
            label="email"
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={(e) => setPassword(e.target.value)}
            required
            label="password"
          />
          <div className="w-full flex flex-col items-center justify-center my-6">
            <div className="w-full p-1 border border-gray-300 rounded bg-pink-200">
              <button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium py-3 focus:outline-none rounded">LOGIN</button>
            </div>
            <div className="my-2 md:my-4">OR</div>
            <div className="w-full p-1 border border-gray-300 rounded bg-blue-200">
              <button onClick={handleGoogleSignIn} type="button" className="w-full focus:outline-none bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium py-3 focus:outline rounded">LOGIN WITH GMAIL</button>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row items-center justify-between">
            <NavLink to='/customer/account/forgot-password' className="text-pink-700 hover:bg-pink-100 text-sm font-medium px-4 rounded mb-4 md:mb-0">FORGOT PASSWORD?</NavLink>
            <div className="flex items-center justify-end mb-4">
              <div className="text-gray-700 text-sm font-medium mr-2">DON'T HAVE AN ACCOUNT'?</div>
              <NavLink to='/customer/account/signup' className="text-pink-700 hover:bg-pink-100 text-sm font-medium px-4 rounded">SIGN UP</NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  error: selectError
})

const mapDispatchToProps = dispatch => ({
  signInWithGoogle: user => dispatch(googleSignInStart(user)),
  signInWithEmail: user => dispatch(emailSignInStart(user)),
  resetErr: ()=> dispatch(resetError())
})

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm)
