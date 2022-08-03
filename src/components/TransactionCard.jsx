import React from 'react'

const TransactionCard = ( {transaction} ) => {

  return (
    <div>
      <h3>{transaction.company_name}</h3>
      {/* {console.log(transaction.investor)} */}
    </div>
  )
}

export default TransactionCard