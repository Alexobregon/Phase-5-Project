function CartCard({ item }) {

    return ( <> 
        <div class="col s12 m7">
    
          <div class="card horizontal">
            <div class="card-image">
              <img src={item.image_url} class="fadeIn cardImage"></img>
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <span class="card-title">
                    <b>{item.name}</b>
                    <b style={{marginLeft: "20px"}}>${item.price}.00</b>
                </span>
    
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )}
    
    export default CartCard