import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Payment from './Payment';
import Orders from "./Orders"
// const stripePromise = loadStripe("pk_test_35p114pH8oNuHX72SmrvsFqh00Azv3ZaIA");
const promise = loadStripe(
  "pk_test_51MzRdwLV6UDSlsfAqZdKRl0iAlWfE8TyZSAGdBFhSMoZsRKpNokpU59OxZR5t11uj9TJSLCB60SHd2CddoqDeb0n004Csy10ri"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
auth.onAuthStateChanged((authUser) => {
  if(authUser) {
    dispatch({
      type: "SET_USER",
      user: authUser,
    });
  } else {
    dispatch({
      type: "SET_USER",
      user: null,
    });
  }
});
  },[]);
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/Login" element = {<Login />}/>
        <Route path="/payment" element = {
        <>
        <Header/>
        <Elements stripe={promise}>
          <Payment />
          </Elements>
        </>
        }
        />
          <Route path="/Checkout" element = {<><Header /><Checkout /></>}/>
          <Route path="/" element = {<><Header /><Home /></>}/>
          <Route path="/orders" element = {<><Header /><Orders /></>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// "npm --prefix \"$RESOURCE_DIR\" run lint"