import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import IncomeExpenseInput from './Inputs';
import {InputContext} from './Context'
import "./App.scss";

function App() {
  return <div className="App container mt-4 px-auto">
    <InputContext.Provider>
    <IncomeExpenseInput/>
    </InputContext.Provider>
  </div>;
}

export default App;
