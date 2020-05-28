import React , { useContext } from "react";
import {InputContext} from '../'
import "./index.scss";

function IncomeExpenseInput() {
  const
  return (
  <form className="form-inline mx-auto p-2">
    <select className="form-control mx-2">
      <option  value="">+</option>
      <option value="">-</option>
    </select>
    <input placeholder="Add description..." type="text" className="form-control mx-2"/>
    <input placeholder="amount..." type="number" className="form-control mx-2"/>
    <button type="submit" className="form-control btn btn-success">Add</button>
  </form>);
}
export default IncomeExpenseInput;
