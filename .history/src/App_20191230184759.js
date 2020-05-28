import React from "react";
import '../node_modules/boo'
import IncomeExpenseInput from './Inputs';
import {InputContext} from './Context'
import "./App.scss";

function App() {
  return <div className="App">
    <IncomeExpenseInput/>
  </div>;
}

export default App;
