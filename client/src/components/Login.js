import React, { useState } from "react";
import { Button, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((errorData) => setErrors(errorData.errors));
      }
    })
  }   
  console.log(errors)

  return (
    <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        
        <div class="card my-5">

          <form class="card-body cardbody-color p-lg-5" onSubmit={handleSubmit}>

            <div class="text-center">
              <img src="https://cdn.pixabay.com/photo/2017/03/21/02/00/user-2160923__340.png" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"/>
            </div>
            

            <div class="mb-3">
            <input class="form-control" 
          placeholder="Username"
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
            </div>
            <div class="mb-3">
            <input
          placeholder="Password"
          class="form-control"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}

          
        />
        

            </div> 
            <div class="text-center">

            
    <ul style={{ color: "red" }}>
    {errors}
    </ul>
  

            
            
              <Button type="submit" class="btn btn-color px-5 mb-5 w-100">Login</Button></div>
            <div id="emailHelp" class="form-text text-center mb-5 text-dark"> Don't have an Account?
            <ul class="nav justify-content-center">
  
  <li class="nav-item">
  <Nav>
  <Nav.Link className="nav-link" as={Link} to="/signup">Create an Account</Nav.Link>
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
      

  

export default Login;


{/* <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="success" type="submit">Login</Button>
        
      </form> */}

      // <Nav>
      //       <Nav.Link className="nav-link" as={Link} to="/signup">Signup</Nav.Link>
      //       </Nav>