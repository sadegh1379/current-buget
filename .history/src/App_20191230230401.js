import React , { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import IncomeExpenseInput from './Inputs';
import Header from './Header/index'
import {InputContext} from './Context'
import "./App.css";

function App() {
  const [option , setOption] = useState("+");
  const[description , setDescription] = useState('');
  const [amount , setAmount] = useState(0);
  //Hooks input
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
  return(
  <div className="">
         
              <InputContext.Provider value={inputContextValue}>
                   <Header/>
                   <IncomeExpenseInput/>
             </InputContext.Provider>
         
   
  </div>);
}

export default App;
