import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Investors from "./components/Investors";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

const App = () => {
const [transactions, setTransactions] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/stocktransactions")
    .then(resp => resp.json())
    .then(data => setTransactions(data))
  },[])

const addTransaction = (transaction) =>
  setTransactions([...transactions, transaction])
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/investors/:id" element={<Investors />}/>
        <Route path="/transactions" element={<TransactionList transactions={transactions} />}/>
        <Route path="/transactions/new" element={<TransactionForm addTransaction={addTransaction} />}/>
      </Routes>
    </Router>
  );
}

export default App;
