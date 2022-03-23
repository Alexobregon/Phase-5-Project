function Home({ user }) {

console.log() 

    if (user) {
      return <div id="homeContainer"> <h1 style={{ color: 'white'}} >Welcome, {user.username}!</h1>
      <div id="avatarDiv">
      <img  className="avatarPic" src={user.avatar_url}></img>
      </div>

      </div>
    } else {
      return <h1 style={{ color: 'white'}} >Not logged in</h1>;
    }
  }

  
  export default Home;