import React , { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Lists from './Lists/index';
import IncomeExpenseInput from './Inputs';
import Header from './Header/index';
import {InputContext} from './Context';
import {HeaderContext} from './Context';
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
  const [incomeList , setIncomeList] = useState([]);
  const [expenseList , setExpenseList] = useState([]);

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
      setIncomeList([...incomeList , {description , amount}]);
    }else{
      setExpenses(expenses +  parseFloat(amount));
      setExpenseList([...expenseList , {description , amount}]);
    }
    
    reset();

  }

  const inputContextValue = {
    option,
    description,
    amount,
    handleOption,
    handleDescription,
    handleAmount,
    handleSubmit,
    incomeList,
    expenseList
  }

  const Head

  return(
  <div className="">
              <HeaderContext.Provider value={}>
                  <Header/>
              </HeaderContext.Provider>

              <InputContext.Provider value={inputContextValue}>
                   
                   <IncomeExpenseInput/>
                   <Lists/>
             </InputContext.Provider>
         
   
  </div>);
}

export default App;
