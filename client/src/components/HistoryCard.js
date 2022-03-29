



function HistoryCard({ key, order, price, card_id, user_id  }) {



  




    return ( <> 
        <div className="history-card">
       <p  className="pHistory">Products: {order} Total: ${price}</p>
       </div>
      </>
    )


}


export default HistoryCard