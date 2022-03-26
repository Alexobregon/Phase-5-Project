import React, { useEffect, useState } from "react";
import CartCard from "./CartCard"
import { Button } from 'react-bootstrap'
import StripeCheckout from 'react-stripe-checkout'

function Cart({ user, currentCart, setCart }) {
    // const [currentCart, setCart] = useState(null);
    const [thankYou, setThankYou] = useState(false)
    const [order, setOrder] = useState("")
    const [price, setPrice] = useState("")

    useEffect(() => {
      fetch(`/users/${user.id}`)
        .then((resp) => resp.json())
        .then((receivedItems) => setOrder(receivedItems.carts.map((c) => { return c.product.name} )));
    }, []);
     
    useEffect(() => { 
    fetch(`/users/${user.id}`)
        .then((resp) => resp.json())
        .then((receivedItems) => setPrice(receivedItems.cart_sum));
    }, []);
      
        // useEffect(() => {
        //   fetch("/products")
        //     .then((resp) => resp.json())
        //     .then((receivedItems) => setItems(receivedItems));
        // }, []);
    
    // console.log(order, price)
  
    // function test() {
    //   fetch(`/carts`)
    //     .then((resp) => resp.json())
    //     .then((receivedItems) => setOrder(currentCart.carts.map((c) => { return c.product.name} )));
    //   fetch(`/carts`)
    //     .then((resp) => resp.json())
    //     .then((receivedItems) => setPrice(currentCart.cart_sum));
    // }
    
  
    
    

function handleToken(token, addresses) {
console.log({token, addresses})


// function test() {
  
//   if (currentCart.cart_count > 0) {
//   fetch("/carts")
//     .then((resp) => resp.json())
//     .then((receivedItems) => setOrder(currentCart.carts.map((c) => { return c.product.name}, setPrice(currentCart.cart_sum))))
//   } else {
//     fetch("/carts")
//     .then((resp) => resp.json())
//     .then((receivedItems) => console.log())
//   }

// }
// test()





if (token != null) {

  
  

  
  

  


 
  thankyou()
  CreateHistory()
 function CreateHistory() {


    fetch("/histories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: `${order}`,
        price: `${price}`,
        user_id: user.id
      })
    })
      .then((r) => r.json())
      .then((data) => (console.log(order, price), DeleteAll())
     
      )

 }

function DeleteAll() {
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
}
function thankyou() {
  setThankYou(true)
}

function handleOrder() {
  setOrder(currentCart.carts.map((c) => { return c.product.name}))
  console.log(order)
}

function handlePrice() {
  setPrice(currentCart.cart_sum)
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

    const cards = currentCart.carts.map((c) => {
        return <CartCard key={c.id} item={c.product} cart_id={c.id} setCart={setCart} user_id={user.id} />;
    })
    return (
        <div className="cart">
          <h1 className="cartTitle" style={{ color: 'white'}} >CART</h1>
          <Button style={{ backgroundColor: '#76b900'}} variant="success" onClick={handleCartDelete} >Delete all cart</Button>
          {cards}
          <hr className="totalLine"></hr>
          <span>
            {thankYou ? <> <h1 id="thankyou" style={{ color: 'white'}} >Thank you for your purchess!</h1> </>: null}
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
            name={"cart"}
            />
            </b>
          </span>
        </div>
      );
}

export default Cart;