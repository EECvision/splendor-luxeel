import { useEffect } from 'react';
import Home from './pages/Home';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import CollectionDirectory from './pages/collection/CollectionDirectory';
import CartMenu from './pages/cart/CartMenu';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import ForgotPassword from './pages/ForgotPassword';
import HelpCenter from './pages/HelpCenter';

export const App =({checkUserSession, currentUser})=> {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return(
    <div className="">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/admin/account/login' render={()=> <div>Admin welcome</div>} />
        <Route exact path='/customer/account/login' render={() => currentUser ? <Redirect to='/' /> : <LogIn />} />
        <Route exact path='/customer/account/signup' render={() => currentUser ? <Redirect to='/' /> : <SignUp/>} />
        <Route exact path='/customer/account/forgot-password' component={ForgotPassword} />
        <Route exact path ='/cart' component={CartMenu}/>
        <Route exact path ='/help-center' component={HelpCenter} />
        <Route path='/:collectionId' component={CollectionDirectory}/>
        <Route  render={()=> <div>not found</div>} />
      </Switch>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);