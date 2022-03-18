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
    <header>
      <div>
  
      
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      </div>
      
      <div>
        {user ? (
          <Button onClick={handleLogoutClick}>Logout</Button>
        ) : (
          <>
            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
            
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </>
        )}
      </div>
    </header>
    </Container>
    </Navbar>
    </div>
    
  );
}

export default NavBar;