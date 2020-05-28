import React from "react";
import "./index.scss";

function IncomeExpenseInput() {
  return (
  <form className="form-inline mx-auto p-2">
    <select className="form-control">
      <option  value="">+</option>
      <option value="">-</option>
    </select>
    <input type="text" className="form-control"/>
    <input type="number" className="form-control"/>
    <button type="submit" className="form-control btn btn-success">Add</button>
  </form>);
}
export default IncomeExpenseInput;
