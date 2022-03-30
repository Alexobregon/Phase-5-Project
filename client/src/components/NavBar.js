
import { Link } from "react-router-dom";
import { Button, Nav, Navbar, Container } from 'react-bootstrap';



function NavBar({ user, setUser, currentCart, userid, setCart }) {
 




  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
 

  return (
   

    <div className="App">
      <Navbar bg="dark" variant="dark"  style={{ width: "100%", height: "70px"}} >
      <Container  className="con1" style={{ width: "100%"}}>
      
      
      {user ? <> <b className="tests">Welcome, {user.username} </b>  <img className="profile-img" src={user.avatar_url} alt="Avatar"></img>  <Button  variant="success" type="button"  style={{ marginTop: "20px", backgroundColor: '#76b900'}} className="test-botton" onClick={handleLogoutClick}>Logout</Button></>: null}
      
      <Nav  className="nav-items"   style={{ marginLeft: "4px"}} activeKey="/home">
      
      { user ? <Nav.Link class="nav-link"  style={{ marginTop: "25px"}}  as={Link} to="/">Profile</Nav.Link> : null} 
      {user ? <Nav.Link class="nav-link"  style={{ marginTop: "25px"}} as={Link} to="/store">Store</Nav.Link> : null}  
      <div>
        {user ? (
          <>
    
          <Nav.Link as={Link} style={{ marginTop: "25px"}} class="nav-link" to="/cart">Cart {currentCart ? <b className="tests3">{currentCart.cart_count}</b> : <b className="tests3">{user.cart_count}</b> }</Nav.Link>
          
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

