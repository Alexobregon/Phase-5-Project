import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';



function Home({ user, setCart, currentCart }) {
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