import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function Store({ user }) {
    const [items, setItems] = useState(null);
    const [search, setSearch] = useState("");
  
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
      return <h2>Loading...</h2>;
    }
  
    const cards = filteredItem().map((i) => {
      return <ProductCard key={i.id} item={i} user={user}/>;
    });
  
    console.log(items);
  
    return <>
    <div className="Search-div">
            <input
            className="Search-input"
            type="text"
            id="search"
            placeholder="Type a Name to search..."
            onChange={(e) => changeSearchStringInState(e.target.value)}
            />
    </div>
    <div className="store">{cards}</div>;
    </>
  }
  
  export default Store;