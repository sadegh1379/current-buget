import React from "react";
import "./index.scss";

function IncomeExpenseInput() {
  return (<form className="income-expense-insertion">
    <select>
      <option value=""></option>
    </select>
    <input type="text"/>
    <input type="number"/>
    <input type="submit" value="Add"/>
  </form>);
}
export default IncomeExpenseInput;
