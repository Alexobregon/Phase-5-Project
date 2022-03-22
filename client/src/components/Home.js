function Home({ user }) {

console.log() 

    if (user) {
      return <h1>Welcome, {user.username}! You are logged in! </h1>;
    } else {
      return <h1>Not logged in</h1>;
    }
  }

  
  export default Home;