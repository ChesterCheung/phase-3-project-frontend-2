import React, {useState} from 'react'

const TransactionForm = () => {
    const [stock, setStock] = useState([])
    const [price, setPrice] = useState([])
    const [date, setDate] = useState([])
    const [investorName, setInvestorName] = useState([])

    // {
    //     "id": 3,
    //     "company_name": "TSLA",
    //     "price": 600,
    //     "date": "1/1/22",
    //     "investor_id": 6,
    //     "investor": {
    //         "id": 6,
    //         "name": "Melinda"
    //     }
    // }


  return (
    <div>
        <h1> New Trade</h1>
        <form>
            <div>
                <label>Stock</label>
                <input type="text" name="stock" value={stock} onChange={e => setStock(e.target.value)}/>
            </div>
            <div>
                <label>Price</label>
                <input type="integer" name="price" value={price} onChange={e => setPrice(e.target.value)}/>
            </div>
            <div>
                <label>Date</label>
                <input type="text" name="date" value={date} onChange={e => setDate(e.target.value)}/>
            </div>
            <div>
                <label>Investor Name</label>
                <input type="text" name="investorName" value={investorName} onChange={e => setInvestorName(e.target.value)}/>
            </div>
        </form>
    </div>
  )
}

export default TransactionForm