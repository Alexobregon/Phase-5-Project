import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Button, Nav, Navbar, Container } from 'react-bootstrap';



function NavBar({ user, setUser }) {
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
      <Container>
      <Nav className="nav justify-content-center" activeKey="/home">
    <header>
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      {user ? <Nav.Link as={Link} to="/store">Store</Nav.Link> : null}
      <div>
        {user ? (
          <>
          <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          <Button variant="success" onClick={handleLogoutClick}>Logout</Button>
          </>
        ) : (
          <>
  <ul className="nav justify-content-end">
  <li className="nav-item">
  <Nav.Link className="nav-link" as={Link} to="/signup">Signup</Nav.Link>
  </li>
  <li className="nav-item">
  <Nav.Link className="nav-link" as={Link} to="/login">Login</Nav.Link>
  </li>
 
</ul>


          </>
        )}
      </div>
    </header>
    </Nav>
    </Container>
    </Navbar>
    </div>
    
  );
}

export default NavBar;

