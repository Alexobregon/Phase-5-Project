import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function Store({ user, setCart, currentCart }) {
    const [items, setItems] = useState(null);
    const [search, setSearch] = useState("");
    const [cartFull, setCartFull] = useState(0);



    useEffect(() => {
      fetch(`/users/${user.id}`)
        .then((resp) => resp.json())
        .then((receivedItems) => setCartFull(receivedItems.cart_count));
    }, []);

    console.log(cartFull)
  
    useEffect(() => {
      fetch("/products")
        .then((resp) => resp.json())
        .then((receivedItems) => setItems(receivedItems));
    }, []);

    const changeSearchStringInState = (searchString) => {
        setSearch(searchString);
      };

    const filteredItem = () => {
        if (search.length > 0) {
          return items.filter((item) =>
           item.name.toLowerCase().includes(search.toLowerCase())
          );
        } else {
          return items;
        }
      };
      
  
    if (items === null) {
      return <h2 style={{ color: 'white'}} >Loading...</h2>;
    }
  
    const cards = filteredItem().map((i) => {
      return <ProductCard key={i.id} item={i} user={user} setCart={setCart} currentCart={currentCart} cartFull={cartFull} setCartFull={setCartFull}/>;
    });
  
   
  
    return <>
  <h1 className="store-center">Welcome to GP-You!</h1>
  <h3 className="store-center">Your one stop shop for the latest graphics cards</h3>
    <div className="Search-div">
            <input style={{ backgroundColor: '#666', color: 'black'}}
            className="Search-input"
            type="text"
            id="search"
            placeholder="Search by Name"
            onChange={(e) => changeSearchStringInState(e.target.value)}
            />
    </div>
    <div className="store">{cards}</div>;
    </>
  }
  
  export default Store;