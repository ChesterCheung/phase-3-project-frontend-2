import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import TransactionCard from './TransactionCard'

const Investors = () => {
    const [investors, setInvestors] = useState({stock_transactions:[]})
    const {id} = useParams()

    useEffect(() => {
        fetch(`http://localhost:9292/investors/${id}`)
            .then(resp => resp.json())
            .then(data => setInvestors(data))
    }, [])

    const transactionCards = investors.stock_transactions.map(transaction => {
        return <TransactionCard transaction={ transaction } key={ transaction.id } investor={ investors }/>
    })

  return (
    <div>
      <h1>{ investors.name }</h1>
      { transactionCards }
    </div>
  )
}

export default Investors