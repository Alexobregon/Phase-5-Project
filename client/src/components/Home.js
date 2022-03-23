import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';



function Home({ user }) {
const [avatar_url, setAvatar_url] = useState("")


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


console.log() 

    if (user) {
      return <div id="homeContainer"> <h1 style={{ color: 'white'}} >Welcome, {user.username}!</h1>
      <div id="avatarDiv">
      <img  className="avatarPic" src={user.avatar_url}></img>
      </div>
      <form onSubmit={handleSubmit}>
      <input class="form-control"
          type="text"
          id="username"
          autoComplete="off"
          value={avatar_url}
          onChange={(e) => setAvatar_url(e.target.value)} /> 
          <div class="text-center"><Button type="submit" class="btn btn-color px-5 mb-5 w-100">Sign up</Button></div>
          </form>
      </div>
    } else {
      return <h1 style={{ color: 'white'}} >Not logged in</h1>;
    }
  }

  
  export default Home;