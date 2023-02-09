import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
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
    <div>
      <NavBar user={user} setUser={setUser} currentCart={currentCart} setCart={setCart}/>
      <main style={{ backgroundColor: 'black'}}>
        {user ? (
          <Switch>
            <Route path="/store">
              <Store user={user} currentCart={currentCart} setCart={setCart}/>
            </Route>
            <Route path="/cart">
              <Cart user={user} currentCart={currentCart} setCart={setCart} />
            </Route>
            <Route path="/">
              <Home user={user} setCart={setCart} currentCart={currentCart} setUser={setUser}/>
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/">
              <Login setUser={setUser} />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
          
        )}
      </main>
    </div>
  );
}

// test

export default App;