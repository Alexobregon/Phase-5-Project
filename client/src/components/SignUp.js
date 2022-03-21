import React, { useState } from "react";
import { Button, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

function SignUp({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      } else {
        r.json().then((errorData) => setErrors(errorData.errors));
      }
    
      
    
    });

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
            <label htmlFor="username">Username</label>
        <input
        class="form-control"
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
            </div>
            <div class="mb-3">
            <label htmlFor="password">Password</label>
            <input
            class="form-control"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
            </div>
            <div class="mb-3">
            <label htmlFor="password">Confirm Password</label>
        <input
        class="form-control"
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        {errors.length > 0 && (
        <ul style={{ color: "red" }}>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}

            </div>
            <div class="text-center"><Button type="submit" class="btn btn-color px-5 mb-5 w-100">Sign up</Button></div>
            <div id="emailHelp" class="form-text text-center mb-5 text-dark">Already have an account?
            <ul class="nav justify-content-center">
            <li class="nav-item">
         <Nav>
         <Nav.Link className="nav-link" as={Link} to="/login">Login</Nav.Link>
         </Nav>
         </li>
         </ul>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
  );
}

export default SignUp;

// div>
//       <form onSubmit={handleSubmit}>
//         <h1>Sign Up</h1>
//         <label htmlFor="username">Username</label>
//         <input
//           type="text"
//           id="username"
//           autoComplete="off"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           autoComplete="current-password"
//         />
//         <label htmlFor="password">Confirm Password</label>
//         <input
//           type="password"
//           id="password_confirmation"
//           value={passwordConfirmation}
//           onChange={(e) => setPasswordConfirmation(e.target.value)}
//           autoComplete="current-password"
//         />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>