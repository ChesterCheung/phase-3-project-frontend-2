import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const TransactionCard = ( {transaction, investor} ) => {
    const [isEditing, setIsEditing] = useState(false)

  return (
    <div>
      <li style={{ listStyleType: "none" }}>
        <p>Stock:{transaction.company_name} - Price: {transaction.price} - Date: {transaction.date}</p>
        { transaction.investor ? <p><em>From: <Link to={`/investors/${transaction.investor.id}`}>{transaction.investor.name}</Link></em></p> : <p><em>By: <Link to={`/investors/${investor.id}`}>{ investor.name}</Link></em></p>}
      </li>
    </div>
  )
}

export default TransactionCard

