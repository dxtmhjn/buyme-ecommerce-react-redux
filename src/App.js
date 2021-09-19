import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import ShopPage from './pages/shop-page/shop-page.component';
import LoginSignupPage from './pages/login-signup/login-signup.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unscribeFromAuth = null;

  componentDidMount() {
    this.unscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(doc => {
          this.setState({
            currentUser: {
              id: doc.id,
              ...doc.data()
            }
          })
        }
        )
      }
      else{
        this.setState({
          currentUser:null
        })
      }

    })
  }

  componentWillUnmount() {
    this.unscribeFromAuth();
  }

  render() {
    return (
      <Fragment>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign-in" component={LoginSignupPage} />
        </Switch>

        <Footer />
      </Fragment>
    );
  }
}

export default App;
