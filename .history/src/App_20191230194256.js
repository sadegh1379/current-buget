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
  function handleOption(value){
    setOption(value);
  }
  // handle description
  function handleDescription(value){
    setDescription(value);
  }
  // handle amount
  function handleAmount(value){
    setAmount(value);
  }
  const inputContextValue = {
    option,
    description,
    amount,
    handleOption,
    handleDescription,
    handleAmount
  }
  return <div className="App container mt-4 px-auto">
    card
    <InputContext.Provider value={inputContextValue}>
        <IncomeExpenseInput/>
    </InputContext.Provider>
  </div>;
}

export default App;
