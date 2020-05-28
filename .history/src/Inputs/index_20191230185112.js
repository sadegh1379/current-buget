import React from "react";
import "./index.scss";

function IncomeExpenseInput() {
  return (<form className="form-inline">
    <select className="form-control">
      <option  value="">+</option>
      <option value="">-</option>
    </select>
    <input type="text" className="form-control"/>
    <input type="number" className="form-control"/>
    <input type="submit" value="Add" className="form-control"/>
  </form>);
}
export default IncomeExpenseInput;
