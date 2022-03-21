import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import { Navbar } from "react-bootstrap";
import "./App.css";
import Store from "./Store";
import Cart from "./Cart";



function App() {
  const [user, setUser] = useState(null);
  const [currentCart, setCart] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  

  
  return (
    <>
      <NavBar user={user} setUser={setUser} currentCart={currentCart} setCart={setCart}/>
      <main>
        {user ? (
          <Switch>
            <Route path="/store">
              <Store user={user} currentCart={currentCart} setCart={setCart}/>
            </Route>
            <Route path="/cart">
              <Cart user={user} currentCart={currentCart} setCart={setCart} />
            </Route>
            <Route path="/">
              <Home user={user} />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          
        )}
      </main>
    </>
  );
}

export default App;