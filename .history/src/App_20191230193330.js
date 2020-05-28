import React , { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import IncomeExpenseInput from './Inputs';
import {InputContext} from './Context'
import "./App.scss";

function App() {
  const [option , setOption] = useState("+");
  const[description , setDescription] = useState('');
  const [amount , setAmount] = useState(0);

  // handle option
  function handle
  const inputContextValue = {
    option,
    description,
    amount,

    
  }
  return <div className="App container mt-4 px-auto">
    <InputContext.Provider value={}>
        <IncomeExpenseInput/>
    </InputContext.Provider>
  </div>;
}

export default App;
