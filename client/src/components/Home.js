import React, { useEffect, useState } from "react";
import { Button, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";



function Home({ user, setCart, currentCart, setUser }) {
const [avatar_url, setAvatar_url] = useState("")
const [c, setC] = useState("") 
const [c1, setC1] = useState(0) 

const h = user
console.log(currentCart)

// / useEffect(() => {
//   fetch(`/users/${user.id}`)
//     .then((resp) => resp.json())
//     .then((receivedItems) => setC1(receivedItems));
// }, []);/


if (user && c1 == 0) { 
  fetch(`/users/${user.id}`)
    .then((resp) => resp.json())
    .then((receivedItems) => setCart(receivedItems), test());
 
}

function test() {
setC1(c1 + 1)

}

// function test() {
//   fetch(`/users/${user.id}`)
//   .then((resp) => resp.json())
//   .then((receivedItems) => setC(receivedItems));
// }
// test()

// useEffect(() => {
//   fetch(`/users/${user.id}`)
//     .then((resp) => resp.json())
//     .then((receivedItems) => setC(receivedItems));
// }, []);
// useEffect(() => {
//   fetch(`/users/${user.id}`)
//     .then((resp) => resp.json())
//     .then((receivedItems) => setC1(receivedItems));
// }, []);



function handleSubmit() {
console.log(avatar_url)

  fetch(`users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ avatar_url: `${avatar_url}` }),
    })
      .then((res) => res.json())
      .then((updatedItem) => console.log(updatedItem));
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
    <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        
        <div class="card my-5">
  
          <form class="card-body cardbody-color p-lg-5" onSubmit={handleSubmit}>
  
            <div class="text-center">
              <img src={user.avatar_url} class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"/>
            </div>
            
  
            <div class="mb-3">
            <h3 className="home-text"> username: {user.username} </h3>
            </div>
            <p className="home-text">Paste image URl to change profile Picture</p>
            <div class="mb-3">
            <input class="form-control"
            type="text"
            id="username"
            placeholder="Image URL here"
            autoComplete="off"
            value={avatar_url}
            onChange={(e) => setAvatar_url(e.target.value)} /> 
        
  
    </div> 
    <div class="text-center">        
    <ul style={{ color: "red" }}>
    
    </ul> 
    <Button type="submit" class="btn btn-color px-5 mb-5 w-100">Save</Button></div>
    <div id="emailHelp" class="form-text text-center mb-5 text-dark"> 
    <ul class="nav justify-content-center">
  
  <li class="nav-item">
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
      return <h1 className="not-log">Please log in</h1>;
    }
}

  
  export default Home;


  