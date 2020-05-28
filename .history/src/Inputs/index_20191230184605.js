import React from "react";
import "./index.scss";

function IncomeExpenseInput() {
  return (<form className="income-expense-insertion">
    <select className="form-control">
      <option  value="">+</option>
      <option value="">-</option>
    </select>
    <input type="text" className="form-control"/>
    <input type="number"/>
    <input type="submit" value="Add"/>
  </form>);
}
export default IncomeExpenseInput;
