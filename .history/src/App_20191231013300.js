import React , { useState , useEffect } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Lists from './Lists/index';
import IncomeExpenseInput from './Inputs';
import Header from './Header/index';
import {InputContext} from './Context';
import {HeaderContext} from './Context';
import "./App.css";

function App() {
  // income and expenses Header
  const [income , setIncome] = useState(initialValueHeader("income"));
  const [expenses , setExpenses] = useState(initialValueHeader("expenses"));
  
  // initial value header
  function initialValueHeader(value){
    return window.localStorage.getItem(value) ?Number(window.localStorage.getItem(value)):0
  }
  //Hooks input
  const [option , setOption] = useState("+");
  const[description , setDescription] = useState('');
  const [amount , setAmount] = useState(0);

  // income and expense lists
  const [incomeList , setIncomeList] = useState(initialValueLists("incomeList"));
  const [expenseList , setExpenseList] = useState(initialValueLists("expenseList"));

  //initial value Lists
  function initialValueLists(value){
    return window.localStorage.getItem(value) ? JSON.parse(window.localStorage.getItem(value)):[] 
  }

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

  useEffect(
    setLocalStorage ,
    [income , expenses , incomeList , expenseList]
  )
  // set local storage
  function setLocalStorage(){
    window.localStorage.setItem("income" , income);
    window.localStorage.setItem("expenses" , expenses);
    window.localStorage.setItem("incomeList" , JSON.stringify(incomeList));
    window.localStorage.setItem("expenseList" , JSON.stringify(expenseList));
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

  // handle remove income
  function handleDeleteIncome(index){
    const listItemDelete = incomeList[index];
    setIncome(income - listItemDelete.amount);

    setIncomeList(()=>{incomeList.fill((_ , i)=> i !== index)})

  }
  //handle remove expense
  function handleDeleteExpense(index){
    const listItemDelete = expenseList[index];
    setExpenses(expenses - listItemDelete.amount);

    setExpenseList(()=>{expenseList.fill((_ , i)=> i !== index)})

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
    expenseList,
    handleDeleteIncome,
    handleDeleteExpense
  }

  const HeaderContextValue={
    income,
    expenses
  }

  return(
  <div className="">
              <HeaderContext.Provider value={HeaderContextValue}>
                  <Header/>
              </HeaderContext.Provider>

              <InputContext.Provider value={inputContextValue}>
                   
                   <IncomeExpenseInput/>
                   <Lists/>
             </InputContext.Provider>
         
   
  </div>);
}

export default App;
