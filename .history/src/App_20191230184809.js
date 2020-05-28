import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import IncomeExpenseInput from './Inputs';
import {InputContext} from './Context'
import "./App.scss";

function App() {
  return <div className="App">
    <IncomeExpenseInput/>
  </div>;
}

export default App;
