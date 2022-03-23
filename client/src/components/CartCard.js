import { Button } from 'react-bootstrap'


function CartCard({ item, cart_id, setCart, user_id }) {
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
    }
    return ( <> 
        <div class="col s12 m7">
    
          <div class="card horizontal" style={{ backgroundColor: '#666'}}>
            <div class="card-image">
              <img src={item.image_url} class="fadeIn cardImage"></img>
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <span class="card-title">
                    <b>{item.name}</b>
                    <b style={{marginLeft: "20px", marginRight: "20px"}}>${item.price}.00</b>
                    <Button style={{ backgroundColor: '#76b900'}} variant="success" id="delete-btn" className="btn" onClick={handleDeleteClick}>Delete</Button>
                </span>
    
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )}
    
    export default CartCard