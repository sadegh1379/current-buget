import React , { useContext } from "react";
import {InputContext} from '../Context';
import "./index.scss";

function IncomeExpenseInput() {
  const { option , description , amount ,  handleOption, handleDescription , handleAmount } = useContext(InputContext);
  return (
  <form className="form-inline mx-auto ">
    <select value={option} onChange={(e)=>handleOption(e.target.value)} className="form-control">
      <option  >+</option>
      <option >-</option>
    </select>

    <input placeholder="Add description..." type="text" className="form-control mr-1 m"
    value={description}
    onChange={(e)=>handleDescription(e.target.value)}
    />

    <input placeholder="amount..." type="number" className="form-control "
    value={amount}
    onChange={(e)=>handleAmount(e.target.value)}
    />

    <button type="submit" className=" btn btn-dark btn-block mt-4">Add</button>
  </form>);
}
export default IncomeExpenseInput;
