import React , { useContext } from "react";
import {InputContext} from '../Context';

function IncomeExpenseInput() {

  const { option , description , amount ,  handleOption, handleDescription , handleAmount , handleSubmit } = useContext(InputContext);
  return (

  <form className="form-inline  bg-secondary" onSubmit={()=>handleSubmit}>
    <div className="my-4 mx-auto">
    <select value={option} onChange={(e)=>handleOption(e.target.value)} className="form-control mx-1">
      <option  >+</option>
      <option >-</option>
    </select>

    <input placeholder="Add description..." type="text" className="form-control mx-1"
    value={description}
    onChange={(e)=>handleDescription(e.target.value)}
    />

    <input placeholder="amount..." type="number" className="form-control mx-1"
    value={amount}
    onChange={(e)=>handleAmount(e.target.value)}
    />

    <button type="submit" className=" btn btn-success mx-2">Add</button>
    </div>
  </form>
  );
}
export default IncomeExpenseInput;
