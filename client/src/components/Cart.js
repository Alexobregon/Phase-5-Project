import React, { useEffect, useState } from "react";
import CartCard from "./CartCard"
import { Button } from 'react-bootstrap'

function Cart({ user, currentCart, setCart }) {
    // const [currentCart, setCart] = useState(null);


    useEffect(() => {
      fetch(`/users/${user.id}`)
        .then((resp) => resp.json())
        .then((receivedItems) => setCart(receivedItems));
    }, []);
    if (currentCart === null) {
      return <h2>Loading...</h2>;
    }
  
  
    const cards = currentCart.carts.map((c) => {
        return <CartCard key={c.id} item={c.product} cart_id={c.id} setCart={setCart} user_id={user.id} />;
    })
    return (
        <div className="cart">
          <h1 className="cartTitle">CART</h1>
          {cards}
          <hr className="totalLine"></hr>
          <span>
          <b className="cartTotal">Items in Cart: {currentCart.cart_count}</b>
            <b className="cartTotal" style={{ marginLeft: "12px" }}>Total:</b>
            <b className="cartTotal" style={{ marginLeft: "75%" }}>
            ${currentCart.cart_sum}.00
            <Button>Checkout</Button>
            </b>
          </span>
        </div>
      );
}

export default Cart;