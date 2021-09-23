import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import ShopPage from './pages/shop-page/shop-page.component';
import LoginSignupPage from './pages/login-signup/login-signup.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';
import './App.scss';

class App extends Component {

  unscribeFromAuth = null;
 
  componentDidMount() {
    const {setUser}= this.props;
    this.unscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(doc => {
         setUser({
              id: doc.id,
              ...doc.data()
          })
        }
        )
      }
      else{
        setUser( userAuth )
      }

    })
  }

  componentWillUnmount() {
    this.unscribeFromAuth();
  }

  render() {
    {console.log("hello",this.props.currentUser)}
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign-in" render={()=>this.props.currentUser ? (<Redirect to="/" />) : (<LoginSignupPage/>)} />
        </Switch>

        <Footer />
      </Fragment>
    );
  }
}


const mapStatetoProps = state =>({
  currentUser:state.user.currentUser
})

const mapDispatchToProps = dispatch =>({
  setUser:user=>dispatch(setCurrentUser(user))
})

export default connect(mapStatetoProps,mapDispatchToProps)(App);
