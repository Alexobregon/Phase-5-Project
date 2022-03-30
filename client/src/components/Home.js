import React, { useState } from "react";
import { Button, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";



function Home({ user, setCart, currentCart, setUser }) {
const [avatar_url, setAvatar_url] = useState("")
const [c1, setC1] = useState(0)
const [errors, setErrors] = useState([]);





if (user && c1 === 0) { 
  fetch(`/users/${user.id}`)
    .then((resp) => resp.json())
    .then((receivedItems) => setCart(receivedItems), test());
 
}

function test() {
setC1(c1 + 1)

}

function handleSubmit(e) {
  e.preventDefault();
  setAvatar_url("")
console.log(avatar_url)

  fetch(`users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ avatar_url: `${avatar_url}` }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((errorData) => setErrors(errorData.errors));
      }
      console.log(errors)

    })
    
    
  }   



  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }


console.log() 

if (user) {
  return (
    <div className="container">
    <div className="row">
      <div class="col-md-6 offset-md-3">
        
        <div className="card my-5">
  
          <form className="card-body cardbody-color p-lg-5" onSubmit={handleSubmit}>
  
            <div className="text-center">
              <img src={user.avatar_url} class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"/>
            </div>
            
  
            <div className="mb-3">
            <h3 className="home-text"> username: {user.username} </h3>
            </div>
            <p className="home-text">Paste image URl to change Avatar Picture</p>
            <div className="mb-3">
            <input className="form-control"
            type="text"
            id="username"
            placeholder="Image URL here"
            autoComplete="off"
            value={avatar_url}
            onChange={(e) => setAvatar_url(e.target.value)} /> 
             
      <ul style={{ color: "red" }}>      
      {errors}
      </ul> 
    </div> 
    <div className="text-center">        
    <ul style={{ color: "red" }}>
    
    </ul> 
    <Button type="submit" class="btn btn-color px-5 mb-5 w-100">Save</Button></div>
    <div id="emailHelp" className="form-text text-center mb-5 text-dark"> 
    <ul className="nav justify-content-center">
  
  <li className="nav-item">
  <Nav>
  <Nav.Link className="nav-link" as={Link} to="/signout"><Button style={{ backgroundColor: '#76b900' }} variant="success" type="button" className="btn btn-color px-5 mb-5 w-100" onClick={handleLogoutClick}>Logout</Button></Nav.Link>
  </Nav>
  </li>
  </ul>
            </div>
          </form>
        </div>
  
      </div>
    </div>
  </div>
  )}
  
     else {
      return <>

      </>
    }
}

  
  export default Home;


  