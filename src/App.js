import React, {useEffect} from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // it will run only ONCE when the app component loads!! (sth like if statement in react)
    // its makes: even if we refresh the page user will be still logged in
    auth.onAuthStateChanged((authUser) => {
      console.log('USER IS', authUser);

      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
          console.log("you are loge in");
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
        console.log("you are NOT  loge in");
      }
    });
  }, []);


  return (
    <Router>
      <div className="App">
        

        <Switch>
          <Route path="/payment">
            <Header/>
            <Payment/>
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
