import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function Store({ user }) {
    const [items, setItems] = useState(null);
  
    useEffect(() => {
      fetch("/products")
        .then((resp) => resp.json())
        .then((receivedItems) => setItems(receivedItems));
    }, []);
  
    if (items === null) {
      return <h2>Loading...</h2>;
    }
  
    const cards = items.map((i) => {
      return <ProductCard key={i.id} item={i} user={user}/>;
    });
  
    console.log(items);
  
    return <div className="store">{cards}</div>;
  }
  
  export default Store;