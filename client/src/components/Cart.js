import React, { useEffect, useState } from "react";
import CartCard from "./CartCard"

function Cart({ user }) {
    const [cart, setCart] = useState(null);
  
    useEffect(() => {
      fetch(`/users/${user.id}`)
        .then((resp) => resp.json())
        .then((receivedItems) => setCart(receivedItems.cart));
    }, []);
    if ( cart === null ) {
      return <h2>Loading...</h2>
    } 
  
    const cards = cart.map((item) => {
      return <CartCard key={item.id} item={item}/>
    })
    return (
        <div className="cart">
          <h1 className="cartTitle">CART</h1>
          {cards}
          <hr className="totalLine"></hr>
          <span>
            <b className="cartTotal">Total:</b>
            <b className="cartTotal" style={{ marginLeft: "75%" }}>
              ${user.cart_sum}.00
            </b>
          </span>
        </div>
      );
}

export default Cart;