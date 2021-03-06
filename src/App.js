import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

const promise = loadStripe('pk_test_51HdzJNAGNjgIXADASOnblALr4ZHlu8cUNBWXgg7WzpRC7G4hZYlUZjT1lme0Lr6dszhHpH3Zph4iPiTlqTjWzsYU00yVf65nCb');

function App() {
  const [
    // {},
    dispatch] = useStateValue();

  useEffect(() => {
    // it will run only ONCE when the app component loads!! (sth like if statement in react)
    // its makes: even if we refresh the page user will be still logged in
    auth.onAuthStateChanged((authUser) => {
      console.log('USER IS', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
        console.log('you are loge in');
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
        console.log('you are NOT  loge in');
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>

          </Route>
          <Route path="/login">
             <Login/>
          </Route>
          <Route path="/checkout">
            {/* thats mean "when im on that path show me this components:" */}
            <Header />
            <Checkout />
          </Route><Route path="/">
          <Header />
          <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
