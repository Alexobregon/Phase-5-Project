import React, { useEffect, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Button, Nav, Navbar, Container } from 'react-bootstrap';



function NavBar({ user, setUser, currentCart, userid, setCart }) {
 

console.log(currentCart)
//   setTimeout(() => {

// console.log(user.id)
// }, 500);
// const e = user.map((c) => { return c.carts })



// function test() {
//   fetch(`/users/${user.id}`)
//   .then((resp) => resp.json())
//   .then((receivedItems) => setC(receivedItems));
// }
// test()
// function test() {
 
//     fetch(`/users/${user.id}`)
//       .then((resp) => resp.json())
//       .then((receivedItems) => setC(receivedItems.cart_count), console.log(c));
    
  
// }
// test()



  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
 

  return (
   

    <div className="App">
      <Navbar bg="dark" variant="dark">
      <Container  className="con1">
      
      {user ? <> <b className="tests">Welcome, {user.username} </b>  <img className="profile-img" src={user.avatar_url}></img> </>: null}
      
      <Nav  className="nav justify-content-center" activeKey="/home">
      
      <Nav.Link class="nav-link" style={{ marginTop: "25px"}} as={Link} to="/">Home</Nav.Link>
      {user ? <Nav.Link class="nav-link"  style={{ marginTop: "25px"}} as={Link} to="/store">Store</Nav.Link> : null}  
      <div>
        {user ? (
          <>
          <Nav.Link as={Link}  style={{ marginTop: "16px"}} to="/cart">Cart {currentCart ? <b className="tests">{currentCart.cart_count}</b> :<b className="tests">{user.cart_count}</b> }<Button style={{ backgroundColor: '#76b900'}} variant="success" type="button" className="btn2" onClick={handleLogoutClick}>Logout</Button></Nav.Link>
          </>
        ) : (
          <>
  <ul className="nav justify-content-end">
  <li className="nav-item">
  <Nav.Link className="nav-link" style={{ marginTop: "25px"}} as={Link} to="/signup">Signup</Nav.Link>
  </li>
  <li className="nav-item">
  <Nav.Link className="nav-link" style={{ marginTop: "25px"}} as={Link} to="/login">Login</Nav.Link>
  </li> 
  </ul>      
  </>
   )}
  </div>
  </Nav>
  </Container>
  </Navbar>
  </div> 
  );
}

export default NavBar;

// style={{marginLeft: "100px", margintop: "300px"}} 