import React , { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import IncomeExpenseInput from './Inputs';
import Header from './Header/index'
import {InputContext} from './Context'
import "./App.css";

function App() {
  // income and expenses
  const [income , setIncome] = useState(0);
  const [expenses , setExpenses] = useState(0);
  //Hooks input
  const [option , setOption] = useState("+");
  const[description , setDescription] = useState('');
  const [amount , setAmount] = useState(0);
  // income and expense lists
  const [incomeList]
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

  function reset(){
    setOption('+');
    setAmount(0);
    setDescription('');
  }
  // handle submit
  function handleSubmit(e){
    e.preventDefault();
    if(amount === 0) return;
    if(option === '+'){
      setIncome(income + parseFloat(amount) );
    }else{
      setExpenses(expenses +  parseFloat(amount));
    }
    console.log(income , expenses);
    reset();

  }
  const inputContextValue = {
    option,
    description,
    amount,
    handleOption,
    handleDescription,
    handleAmount,
    handleSubmit
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
