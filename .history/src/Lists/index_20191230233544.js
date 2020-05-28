import React , { useContext } from "react";
import IncomeList from "./IncomeList";
import ExpenseList from "./ExpenseList";
import InputContext from '../Context/index';
import "./index.scss";

function Lists() {
  const { incomeList , expenseList } = useContext(InputContext)
  return (
    <div className="income-expense-lists">
      <IncomeList />
      <ExpenseList/>
    </div>
  );
}

export default Lists;
