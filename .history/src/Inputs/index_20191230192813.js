import React from "react";
import "./index.scss";

function IncomeExpenseInput() {
  return (
  <form className="form-inline mx-auto p-2">
    <select className="form-control mx-2">
      <option  value="">+</option>
      <option value="">-</option>
    </select>
    <input placeholder="Add discrip" type="text" className="form-control mx-2"/>
    <input type="number" className="form-control mx-2"/>
    <button type="submit" className="form-control btn btn-success">Add</button>
  </form>);
}
export default IncomeExpenseInput;
