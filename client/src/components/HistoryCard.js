



function HistoryCard({ key, order, price, card_id, user_id  }) {

    return ( <> 
        <div className="history-card">
       <p  className="pHistory">Order: {order} Total: ${price}</p>
       </div>
      </>
    )


}


export default HistoryCard