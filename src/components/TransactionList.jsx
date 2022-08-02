import React from 'react'
import TransactionCard from './TransactionCard'

const TransactionList = ({transactions}) => {

  const transactionCards = transactions.map(transaction => <TransactionCard transactions={transactions} key={transaction.id} /> )
  return (
    <div>
      <h1>Transaction List</h1>
      <div>
      {transactionCards}
      </div>
    </div>
  )
}

export default TransactionList