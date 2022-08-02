import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Investors from "./components/Investors";
import TransactionForm from "./components/TransactionForm";
import Transactions from "./components/Transactions";

const App = () => {
const [transactions, setTransactions] = useState([])




  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/investors/:id" element={<Investors />}/>
        <Route path="/transactions" element={<Transactions />}/>
        <Route path="/transactions/new" element={<TransactionForm />}/>
      </Routes>
    </Router>
  );
}

export default App;
