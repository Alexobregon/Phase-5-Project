



function HistoryCard({ key, order, price, card_id, user_id  }) {








    return ( <> 
        <div className="pHistory">--------------------------------------------------------</div>
       <div className="pHistory">Products: {order} Total: ${price}</div>
      </>
    )


}


export default HistoryCard