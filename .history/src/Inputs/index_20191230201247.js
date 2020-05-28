import React , { useContext } from "react";
import {InputContext} from '../Context';

function IncomeExpenseInput() {
  const { option , description , amount ,  handleOption, handleDescription , handleAmount } = useContext(InputContext);
  return (
    
  <form className="form-inline row">
    <div className="col-lg-6">
    <select value={option} onChange={(e)=>handleOption(e.target.value)} className="form-control">
      <option  >+</option>
      <option >-</option>
    </select>

    <input placeholder="Add description..." type="text" className="form-control"
    value={description}
    onChange={(e)=>handleDescription(e.target.value)}
    />
  </div>
  <div className="col-lg-6">
    <input placeholder="amount..." type="number" className="form-control "
    value={amount}
    onChange={(e)=>handleAmount(e.target.value)}
    />

    <button type="submit" className=" btn btn-dark btn-block mt-4">Add</button>
  </form>
  
  );
}
export default IncomeExpenseInput;
