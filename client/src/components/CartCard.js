import { Button } from 'react-bootstrap'


function CartCard({ item, cart_id, setCart, user_id, setOrder, order, setPrice, price, user }) {
    function handleDeleteClick() {
  
      fetch(`/carts/${cart_id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          getUpdatedCart();
        } else {
          res.json().then(console.log);
        }
      });
    }
  
    function getUpdatedCart() {
      fetch(`/users/${user_id}`)
        .then((resp) => resp.json())
        .then((receivedItems) => setCart(receivedItems))

      
          fetch(`/users/${user.id}`)
            .then((resp) => resp.json())
            .then((receivedItems) => setOrder(receivedItems.carts.map((c) => { return c.product.name} )));
        
         
        
        fetch(`/users/${user.id}`)
            .then((resp) => resp.json())
            .then((receivedItems) => setPrice(receivedItems.cart_sum));
        
      
      console.log(order, price)


    }

    return ( <> 
        <div class="col s12 m7">
    
          <div class="card horizontal" style={{ backgroundColor: '#666', height: '100%'}}>
            <div class="card-image" style={{ height: '100%' }}>
              <img src={item.image_url} class="fadeIn cardImage" alt="Avatar"></img>
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <span class="card-title">
                    <b style={{ color: 'white'}} >{item.name}</b>
                    <b style={{marginLeft: "20px", marginRight: "20px", color: 'white'}}>${item.price}.00</b>
                    <Button style={{ backgroundColor: '#76b900'}} variant="success" id="delete-btn" className="btn" onClick={handleDeleteClick}>Delete</Button>
                </span>
    
                <p style={{ color: 'white'}} >{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )}
    
    export default CartCard