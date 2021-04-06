import React from 'react';
import { NavLink } from 'react-router-dom';
import FormInput from '../form-input/form-input.component';
import { connect } from 'react-redux';
import { googleSignInStart, resetError, signUpStart } from '../../redux/user/user.actions';
import { selectError } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import ErrorMessage from '../error-message/Error-message';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
      warn: null
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { signUp } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      this.setState({warn: "Passowrd don't match"})
      return;
    } else {
      signUp({ email: email, password: password, displayName: displayName })
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleGoogleSignIn = () => {
    this.props.signInWithGoogle()
  }

  handleErrorMessage = ()=>{
    this.setState({warn: null})
    this.props.resetErr()
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="w-full flex items-center justify-center pt-20 md:pt-32 mb-12">
        {
          this.props.error || this.state.warn
            ? <ErrorMessage clickHandler={this.handleErrorMessage} error={this.props.error} warn={this.state.warn} />
            : null

        }
        <div className="w-full max-w-2xl">
          <div className="hidden md:block w-full text-center text-pink-600 text-xl font-medium">CREATE ACCOUNT</div>
          <div className="md:hidden w-full flex items-center justify-between px-4">
            <NavLink to='/customer/account/login' className="w-1/2 text-gray-700 text-sm text-center font-medium py-2">LOGIN</NavLink>
            <NavLink to='/customer/account/signup' className="w-1/2 text-gray-700 border-b-2 border-pink-700 text-sm text-center font-medium py-2">CREATE ACCOUNT</NavLink>
          </div>
          <form onSubmit={this.handleSubmit} className="w-full flex flex-col items-start justify-evenly px-4 md:p-0">
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              handleChange={this.handleChange}
              required
              label="Full Name"
            />
            <FormInput
              type="email"
              name="email"
              value={email}
              handleChange={this.handleChange}
              required
              label="Email"
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              handleChange={this.handleChange}
              required
              label="Password"
            />
            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              handleChange={this.handleChange}
              required
              label="Confirm Password"
            />
            <div className="w-full flex flex-col items-center justify-center my-6">
              <div className="w-full p-1 border border-gray-300 rounded bg-pink-200">
                <button type="submit" className="w-full focus:outline-none bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium py-3 focus:outline rounded">SIGN UP</button>
              </div>
              <div className="my-2">OR</div>
              <div className="w-full p-1 border border-gray-300 rounded bg-blue-200">
                <button type="button" onClick={this.handleGoogleSignIn} className="w-full focus:outline-none bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium py-3 focus:outline rounded">CREATE ACCOUNT WITH GMAIL</button>
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              <div className="text-gray-700 text-sm font-medium mr-2">ALEADY HAVE AN ACCOUNT?</div>
              <NavLink to='/customer/account/login' className="text-pink-700 hover:bg-pink-100 text-sm font-medium px-4 rounded">LOGIN</NavLink>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  error: selectError
})

const mapDispatchToProps = dispatch => ({
  signUp: user => dispatch(signUpStart(user)),
  signInWithGoogle: user => dispatch(googleSignInStart(user)),
  resetErr: ()=> dispatch(resetError())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);


