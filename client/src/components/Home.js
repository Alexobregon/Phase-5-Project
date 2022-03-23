function Home({ user }) {

console.log() 

    if (user) {
      return <h1 style={{ color: 'white'}} >Welcome, {user.username}! You are logged in! </h1>;
    } else {
      return <h1 style={{ color: 'white'}} >Not logged in</h1>;
    }
  }

  
  export default Home;