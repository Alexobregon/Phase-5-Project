import React, { useState, useEffect } from "react";

function Store() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("/items")
      .then((resp) => resp.json())
      .then((receivedItems) => setItems(receivedItems));
  }, []);

  
  return <h1>Here's the store!</h1>;
}

export default Store;