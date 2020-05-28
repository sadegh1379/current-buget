import React from "react";
import "./index.scss";

function IncomeExpenseInput() {
  return (
  <form className="form-inline mx-auto">
    <select className="form-control">
      <option  value="">+</option>
      <option value="">-</option>
    </select>
    <input type="text" className="form-control"/>
    <input type="number" className="form-control"/>
    <button type="submit" value="Add" className="form-control"></button></button>
  </form>);
}
export default IncomeExpenseInput;
