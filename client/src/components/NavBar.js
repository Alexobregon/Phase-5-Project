import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Button, Nav, Navbar, Container } from 'react-bootstrap';



function NavBar({ user, setUser, currentCart }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
console.log(currentCart)
  return (
    
    <div className="App">
      <Navbar bg="dark" variant="dark">
      <Container className="con1">
      <Nav className="nav justify-content-center" activeKey="/home">
    
      <Nav.Link class="nav-link" style={{ marginTop: "25px"}} as={Link} to="/">Home</Nav.Link>
      {user ? <Nav.Link class="nav-link"  style={{ marginTop: "25px"}} as={Link} to="/store">Store</Nav.Link> : null}
      <div>
        {user ? (
          <>
          <Nav.Link as={Link}  style={{ marginTop: "16px"}} to="/cart">Cart {currentCart.cart_count}<Button variant="success" type="button" className="btn2" onClick={handleLogoutClick}>Logout</Button></Nav.Link>
          <div  className="btn2">
               
          
          </div>
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