import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";



const App = () => {
const [transactions, setTransactions] = useState([])




  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route />
        <Route />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
