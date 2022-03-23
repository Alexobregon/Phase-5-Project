import React, { useEffect, useState } from "react";
import CartCard from "./CartCard"
import { Button } from 'react-bootstrap'
import StripeCheckout from 'react-stripe-checkout'

function Cart({ user, currentCart, setCart }) {
    // const [currentCart, setCart] = useState(null);


function handleToken(token, addresses) {
console.log({token, addresses})

if (token != null) {

currentCart.carts.map((c) => { 

fetch(`/carts/${c.id}`, {
  method: "DELETE",
}).then((res) => {
  if (res.ok) {
    getUpdatedCart();
  } else {
    res.json().then(console.log);
  }
});

})}



}

function getUpdatedCart() {
  fetch(`/users/${user.id}`)
    .then((resp) => resp.json())
    .then((receivedItems) => setCart(receivedItems))
}


    useEffect(() => {
      fetch(`/users/${user.id}`)
        .then((resp) => resp.json())
        .then((receivedItems) => setCart(receivedItems));
    }, []);
    if (currentCart === null) {
      return <h2>Loading...</h2>;
    }

    function handleCartDelete() {
      currentCart.carts.map((c) => { 
      fetch(`/carts/${c.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          getUpdatedCart();
        } else {
          res.json().then(console.log);
        }
      })
      });
    }




  
  // console.log(currentCart.carts.map((c) => { return c.product.name}))
    const cards = currentCart.carts.map((c) => {
        return <CartCard key={c.id} item={c.product} cart_id={c.id} setCart={setCart} user_id={user.id} />;
    })
    return (
        <div className="cart">
          <h1 className="cartTitle" style={{ color: 'white'}} >CART</h1>
          <Button style={{ backgroundColor: '#76b900'}} variant="success" onClick={handleCartDelete}>Delete all cart</Button>
          {cards}
          <hr className="totalLine"></hr>
          <span>
          <b className="cartTotal" style={{ color: 'white'}} >Items in Cart: {currentCart.cart_count}</b>
            <b className="cartTotal" style={{ marginLeft: "12px", color: 'white' }}>Total:</b>
            <b className="cartTotal" style={{ marginLeft: "75%", color: 'white' }}>
            ${currentCart.cart_sum}.00
            
            <StripeCheckout style={{ marginLeft: "12px" }}
            stripeKey="pk_test_51Kftu6EMJuFFtZ9wHfaQkAbiO1ffCOVYN2Us633XKZFzBltBCPTbxM9YL84Q27aEld2eHOR0ScEgvC7xP2TREihc00JMlUTZib"
            token={handleToken}
            billingAddress
            shippingAddress
            amount={currentCart.cart_sum * 100}
            name={currentCart.carts.map((c) => { return c.product.name})}
            />
            </b>
          </span>
        </div>
      );
}

export default Cart;