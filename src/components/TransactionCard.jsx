import React, {useState} from 'react'

const TransactionCard = ( {transaction} ) => {
    const [isEditing, setIsEditing] = useState(false)

  return (
    <div>
      <li style={{ listStyleType: "none" }}>
        <p>
            Stock:{transaction.company_name} - Price: {transaction.price} - Date: {transaction.date}
        </p>
      </li>
    </div>
  )
}

export default TransactionCard

// { blog.author ? <p><em>By: <Link to={`/authors/${blog.author.id}`}>{ blog.author.name}</Link></em></p> : <p><em>By: <Link to={`/authors/${author.id}`}>{ author.name}</Link></em></p>}
