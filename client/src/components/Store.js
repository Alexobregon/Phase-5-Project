import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function Store({ user, setCart }) {
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
      console.log(items)
  
    if (items === null) {
      return <h2 style={{ color: 'white'}} >Loading...</h2>;
    }
  
    const cards = filteredItem().map((i) => {
      return <ProductCard key={i.id} item={i} user={user} setCart={setCart}/>;
    });
  
    console.log(items);
  
    return <>
    <div className="Search-div">
            <input style={{ backgroundColor: 'grey', color: 'black'}}
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