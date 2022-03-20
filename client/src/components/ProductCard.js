import React, { useEffect, useState } from "react";
import { Button, Alert } from 'react-bootstrap'

function ProductCard({ item: { name, price, description, image_url, id }, user }) {
    const [visible, setvisible] = useState(true);

    

  function handleclick() {
    fetch("/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        product_id: id
      })
    })
      .then((r) => r.json())
      .then((data) => (setvisible(false)));

    
  }




  console.log(image_url);
  return (
<>
    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>


    <div className="card mb-3" style={{width: "600px", height: "170px" }} >
  <div className="row no-gutters">
    <div className="col-md-4">
    <img src={image_url} alt="Avatar" style={{ width: "100%" }}></img>
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <b>{name}</b>
      <p>{description}</p>
        <b>${price}.00</b>
         <Button variant="success" style={{marginLeft: "20px"}} onClick={handleclick}>Add to cart</Button>
        

         { visible ? (
         <></>
        ) : (
          <>
  <b id="add-to-cart" >Added to Cart!</b>

          </>
        )}

      </div>
    </div>
  </div>
</div>
</>
  );
}

export default ProductCard;

{/* <div className="card">
      <img src={image_url} alt="Avatar" style={{ width: "20%" }}></img>
      <div className="container">
        <h4>
          <span>
            <b>{name}</b>
            <br></br>
            <b>${price}.00</b>
            <button style={{marginLeft: "20px"}} onClick={handleclick}>Add to cart</button>
          </span>
        </h4>
        <p>{description}</p>
      </div>
    </div>
  );
} */}